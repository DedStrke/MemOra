import { motion } from 'framer-motion'

/*
  The AdaptHub mark - an original geometric "adaptation wheel": an eight-spoked
  wheel ringed by eight balls (a generic dharmachakra/helm-style emblem, drawn
  fresh from primitives). Transparent background; inherits currentColor. It
  turns to `turns` full rotations whenever the learner reaches a new level.

  Props:
    - turns: target rotation in full turns (drives the level-up spin)
    - spinOnMount: animate a spin when it appears (used in the celebration)
    - duration: spin duration in seconds
    - className: sizing + colour (text-*)
*/
const CX = 24
const CY = 24
const point = (r, a) => ({ x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) })

// Eight arms: a spoke to the rim, a short stub, and a ball on the outside.
const ARMS = Array.from({ length: 8 }, (_, i) => {
  const a = -Math.PI / 2 + (i * Math.PI) / 4
  return {
    spoke: [point(3.8, a), point(12, a)],
    stub: [point(12.5, a), point(15, a)],
    ball: point(18.6, a),
  }
})

// The wheel geometry, shared by both render paths.
const Spokes = () => (
  <>
    <circle cx="24" cy="24" r="12.5" strokeWidth="2.4" />
    <circle cx="24" cy="24" r="6.8" strokeWidth="1.3" />
    {ARMS.map((arm, i) => (
      <g key={i}>
        <line x1={arm.spoke[0].x} y1={arm.spoke[0].y} x2={arm.spoke[1].x} y2={arm.spoke[1].y} strokeWidth="2" />
        <line x1={arm.stub[0].x} y1={arm.stub[0].y} x2={arm.stub[1].x} y2={arm.stub[1].y} strokeWidth="2.4" />
        <circle cx={arm.ball.x} cy={arm.ball.y} r="3.8" fill="currentColor" stroke="none" />
      </g>
    ))}
    <circle cx="24" cy="24" r="3.8" fill="currentColor" stroke="none" />
  </>
)

export default function WheelLogo({
  turns = 0,
  spinOnMount = false,
  idle = false,
  idleDuration = 48,
  hoverSpin = false,
  duration = 1.1,
  className = 'h-6 w-6',
}) {
  const target = turns * 360

  // Idle spin runs via CSS so it keeps turning gently even under reduced motion
  // (see the .wheel-idle rule in index.css), independent of the framer MotionConfig.
  if (idle) {
    return (
      <svg
        viewBox="0 0 48 48"
        className={`wheel-idle ${className}`}
        style={{ '--wheel-dur': `${idleDuration}s` }}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <Spokes />
      </svg>
    )
  }

  return (
    <motion.svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transformOrigin: 'center' }}
      initial={{ rotate: spinOnMount ? 0 : target }}
      animate={{ rotate: target }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hoverSpin ? { rotate: target + 360 } : undefined}
      aria-hidden="true"
    >
      <Spokes />
    </motion.svg>
  )
}
