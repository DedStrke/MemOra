import { useEffect, useRef } from 'react'

/*
  The material behind a subject card (pages/Dashboard.jsx SpineCard): a
  WebGL fragment shader that folds the subject colour over itself like
  smoke caught in silk. Two passes of domain-warped fractal noise give the
  folds; a specular term picks out the ridges; the cursor pushes the fluid
  aside where it hovers. The left ~40% fades to nothing so the title, tile
  and copy always sit on plain surface.

  It replaced the aurora + contour-ring treatment, which the user judged
  "looks AI generated". A shader was the honest fix: the colour is now in
  the material of the card rather than drawn on top of it.

  Costs: one small WebGL context per card, rendering at <=1.5x DPR and only
  while the card is on screen and the tab is visible. Reduced motion gets a
  single still frame. If WebGL is unavailable the canvas stays transparent
  and the card falls back to its plain border - nothing else depends on it.
  High-contrast hides it entirely in index.css.
*/

const VERT = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}'

const FRAG = `precision highp float;
uniform vec2 u_res;uniform float u_t,u_dark;uniform vec3 u_a,u_b;uniform vec2 u_m;
float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;mat2 r=mat2(.8,.6,-.6,.8);
  for(int i=0;i<5;i++){v+=a*noise(p);p=r*p*2.03;a*=.5;}return v;}
void main(){
  vec2 uv=gl_FragCoord.xy/u_res;vec2 p=uv*vec2(u_res.x/u_res.y,1.)*1.5;float t=u_t*.07;
  vec2 q=vec2(fbm(p+t),fbm(p+vec2(5.2,1.3)-t*.7));
  vec2 r=vec2(fbm(p+3.*q+vec2(1.7,9.2)+t*.4),fbm(p+3.*q+vec2(8.3,2.8)-t*.3));
  vec2 d=uv-u_m;r+=.22*normalize(d+1e-4)*exp(-9.*dot(d,d));
  float f=fbm(p+3.*r);
  vec3 deep=mix(u_a*.28,u_a*.55,u_dark);
  float ff=smoothstep(.3,.92,f);vec3 col=mix(deep,u_b,ff*ff);
  col=mix(col,u_a,clamp(length(q),0.,1.)*.4);
  float spec=pow(smoothstep(.55,.95,f),4.);col+=spec*vec3(.7);
  float m=smoothstep(.08,.9,uv.x*.8+(1.-uv.y)*.4);
  float alpha=m*(.28+.6*ff)*mix(.7,1.,u_dark);
  gl_FragColor=vec4(col*alpha,alpha);}`

// '#rrggbb' or '#rgb' -> [r, g, b] in 0..1
function rgb(hex) {
  let h = String(hex).trim().replace('#', '')
  if (h.length === 3) h = h.split('').map((c) => c + c).join('')
  const n = parseInt(h, 16)
  if (Number.isNaN(n)) return [0.5, 0.5, 0.5]
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
}

// The highlight tint: the subject colour pulled most of the way to white.
const lighten = ([r, g, b], k = 0.55) => [r + (1 - r) * k, g + (1 - g) * k, b + (1 - b) * k]

const isDarkTheme = () => document.documentElement.getAttribute('data-theme') === 'dark'

export default function SilkField({ color }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const host = canvas.parentElement
    const gl = canvas.getContext('webgl', { premultipliedAlpha: true, alpha: true, antialias: false })
    if (!gl) return undefined

    const compile = (type, src) => {
      const sh = gl.createShader(type)
      gl.shaderSource(sh, src)
      gl.compileShader(sh)
      return sh
    }
    const program = gl.createProgram()
    gl.attachShader(program, compile(gl.VERTEX_SHADER, VERT))
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAG))
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return undefined
    gl.useProgram(program)

    const quad = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, quad)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    const pLoc = gl.getAttribLocation(program, 'p')
    gl.enableVertexAttribArray(pLoc)
    gl.vertexAttribPointer(pLoc, 2, gl.FLOAT, false, 0, 0)

    const u = {}
    for (const name of ['u_res', 'u_t', 'u_dark', 'u_a', 'u_b', 'u_m']) u[name] = gl.getUniformLocation(program, name)

    const a = rgb(color)
    const b = lighten(a)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Pointer, eased so the fluid lags the hand a little. Rests up near the
    // light source (top right) when nothing is hovering.
    const REST = { x: 0.78, y: 0.75 }
    const m = { x: REST.x, y: REST.y, tx: REST.x, ty: REST.y, hovering: false }
    const onMove = (e) => {
      const r = host.getBoundingClientRect()
      m.tx = (e.clientX - r.left) / r.width
      m.ty = 1 - (e.clientY - r.top) / r.height
      m.hovering = true
      if (!running) start()
    }
    const onLeave = () => {
      m.hovering = false
      m.tx = REST.x
      m.ty = REST.y
      if (!running) start()
    }
    host.addEventListener('pointermove', onMove)
    host.addEventListener('pointerleave', onLeave)

    let width = 0
    let height = 0
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      width = Math.max(1, Math.round(canvas.clientWidth * dpr))
      height = Math.max(1, Math.round(canvas.clientHeight * dpr))
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        gl.viewport(0, 0, width, height)
      }
    }

    const t0 = performance.now()
    function draw(now) {
      resize()
      const k = m.hovering ? 0.12 : 0.04
      m.x += (m.tx - m.x) * k
      m.y += (m.ty - m.y) * k
      gl.uniform2f(u.u_res, width, height)
      gl.uniform1f(u.u_t, (now - t0) / 1000 + 40)
      gl.uniform1f(u.u_dark, isDarkTheme() ? 1 : 0)
      gl.uniform3f(u.u_a, a[0], a[1], a[2])
      gl.uniform3f(u.u_b, b[0], b[1], b[2])
      gl.uniform2f(u.u_m, m.x, m.y)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }

    // Only animate while the card is on screen and the tab is visible.
    // With reduced motion the loop still runs, but only while the pointer
    // is settling, so the fluid answers the hand and then holds still.
    let rafId = 0
    let running = false
    let visible = true
    function frame(now) {
      draw(now)
      const settled = Math.abs(m.tx - m.x) + Math.abs(m.ty - m.y) < 0.002
      if (!visible || document.hidden || (reduceMotion && settled)) {
        running = false
        return
      }
      rafId = requestAnimationFrame(frame)
    }
    function start() {
      if (running) return
      running = true
      rafId = requestAnimationFrame(frame)
    }
    function stop() {
      cancelAnimationFrame(rafId)
      running = false
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start()
      else stop()
    })
    io.observe(host)
    const onVisibility = () => (document.hidden ? stop() : visible && start())
    document.addEventListener('visibilitychange', onVisibility)
    const ro = new ResizeObserver(() => {
      if (!running) draw(performance.now())
    })
    ro.observe(canvas)

    return () => {
      stop()
      io.disconnect()
      ro.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerleave', onLeave)
      // No explicit loseContext() here: StrictMode's dev-only double-invoke
      // reuses the same canvas node for the real mount, and an explicitly
      // lost WebGL context never comes back - the card would stay blank
      // (Chrome even paints a "context lost" placeholder over it) for the
      // rest of the session. Real unmounts free the context via GC once
      // the canvas node itself is discarded, same as any other WebGL app.
    }
  }, [color])

  return <canvas ref={canvasRef} aria-hidden="true" className="subject-card-silk" />
}
