import { useState } from 'react'
import SigilMark from '@/components/ui/SigilMark'
import { SIGIL } from '@/constants/sigil-geometry'
import SigilWordmark from '@/components/ui/SigilWordmark'
import SigilLockup from '@/components/ui/SigilLockup'
import { ACCENTS, ACCENT_META, THEME_META } from '@/context/AppProvider'

/*
  Dev-only brand sheet for the Memora command sigil. Registered in App.jsx
  only when import.meta.env.DEV, so it never ships. Theme and accent chips
  scope REAL data-theme / data-accent attributes, so every preview runs the
  production tokens, not approximations.

  /dev/brand
*/

const THEMES = ['dark', 'light', 'cream', 'high-contrast']

function SheetSection({ kicker, title, children }) {
  return (
    <section className="card mt-4 p-6" aria-label={title}>
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted">{kicker}</p>
      <h2 className="mt-1 text-xl font-extrabold text-fg">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}

function ThemeChip({ theme }) {
  return (
    <div data-theme={theme} className="rounded-2xl border border-line bg-page p-5 text-center text-fg">
      <SigilMark className="mx-auto h-12 w-12" idle={false} />
      <p className="mt-3 text-lg font-extrabold">
        <SigilWordmark />
      </p>
      <p className="mt-1 text-xs text-muted">{THEME_META[theme]?.label || theme}</p>
    </div>
  )
}

function StoryCard({ n, title, timing, blurb, children, action }) {
  return (
    <div className="rounded-2xl border border-line bg-page p-4 text-fg">
      <p className="text-xs font-extrabold uppercase tracking-wide text-brand-strong">
        {n}. {title} <span className="font-semibold normal-case text-muted">({timing})</span>
      </p>
      <div className="flex min-h-28 items-center justify-center py-3">{children}</div>
      <p className="text-xs text-muted">{blurb}</p>
      {action}
    </div>
  )
}

export default function BrandSheet() {
  const [burst, setBurst] = useState(null)
  const fire = (type) => setBurst({ type, n: Date.now() })

  return (
    <div className="mx-auto max-w-5xl p-6 pb-24">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted">Memora · Brand identity system</p>
      <h1 className="mt-1 text-3xl font-extrabold text-fg">The command sigil</h1>
      <p className="mt-1 max-w-2xl text-sm text-muted">
        Dev only, never ships. An original activation mark: command blade, cradling sweep, rising shard.
        currentColor throughout, so one SVG serves every theme and accent.
      </p>

      {/* 1-4. Primary lockup, variations, favicon, mobile */}
      <SheetSection kicker="Primary" title="The lockup">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-page py-10 text-fg">
          <SigilMark radiate={false} className="h-24 w-24" />
          <p className="text-5xl">
            <SigilWordmark size="hero" />
          </p>
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-muted">Revise · Level up</p>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-4">
          <div className="rounded-2xl border border-line p-4 text-center">
            <SigilMark className="mx-auto h-10 w-10" idle={false} />
            <p className="mt-2 text-xs font-bold text-fg">Icon only</p>
          </div>
          <div className="rounded-2xl border border-line p-4 text-center">
            <p className="mt-2 text-2xl text-fg">
              <SigilWordmark />
            </p>
            <p className="mt-2 text-xs font-bold text-fg">Wordmark only</p>
          </div>
          <div className="rounded-2xl border border-line p-4">
            <div className="flex items-center justify-between text-fg">
              <SigilLockup />
              <span className="text-xs text-muted">links…</span>
            </div>
            <p className="mt-2 text-center text-xs font-bold text-fg">Navbar lockup · 28px / 21px / 8px gap</p>
          </div>
          <div className="rounded-2xl border border-line p-4 text-center text-fg">
            <div className="flex items-end justify-center gap-4">
              <SigilMark className="h-4 w-4" idle={false} />
              <SigilMark className="h-6 w-6" idle={false} />
            </div>
            <p className="mt-2 text-xs font-bold text-fg">Favicon 16px · mobile 24px</p>
          </div>
        </div>
      </SheetSection>

      {/* 5-8. True-token theme versions */}
      <SheetSection kicker="Themes" title="One SVG, four themes">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {THEMES.map((t) => (
            <ThemeChip key={t} theme={t} />
          ))}
        </div>
      </SheetSection>

      {/* 9. True-token accent previews */}
      <SheetSection kicker="Accents" title="Same logo, every accent">
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-7">
          {ACCENTS.map((a) => (
            <div
              key={a}
              data-theme="dark"
              data-accent={a}
              className="rounded-xl border border-line bg-page p-3 text-center text-brand-strong"
              title={ACCENT_META[a]?.label || a}
            >
              <SigilMark className="mx-auto h-8 w-8" idle={false} />
              <p className="mt-1 truncate text-[0.65rem] font-bold">{ACCENT_META[a]?.label || a}</p>
            </div>
          ))}
        </div>
      </SheetSection>

      {/* 10. Scale tests */}
      <SheetSection kicker="Scale" title="16px to 256px">
        <div className="flex flex-wrap items-end gap-8 rounded-2xl bg-page p-6 text-fg">
          {[
            { px: 16, cls: 'h-4 w-4' },
            { px: 32, cls: 'h-8 w-8' },
            { px: 64, cls: 'h-16 w-16' },
            { px: 128, cls: 'h-32 w-32' },
            { px: 256, cls: 'h-64 w-64' },
          ].map(({ px, cls }) => (
            <div key={px} className="text-center">
              <SigilMark idle={false} className={cls} />
              <p className="mt-2 text-xs tabular-nums text-muted">{px}px</p>
            </div>
          ))}
        </div>
      </SheetSection>

      {/* 11-15. Interactive storyboards */}
      <SheetSection kicker="Motion" title="Animation storyboards - live, not mockups">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <StoryCard n="1" title="Idle" timing="3.5s loop" blurb="Blade drifts half a pixel, sweep tilts a degree, shard relaxes. Calm enough for a navbar forever.">
            <SigilMark className="h-16 w-16" />
          </StoryCard>
          <StoryCard n="2" title="Hover / focus" timing="180-240ms" blurb="Blade lifts 2px, sweep tightens, terminal extends 3% with an elastic overshoot. Hover the mark.">
            <SigilMark idle={false} className="h-16 w-16 cursor-pointer" />
          </StoryCard>
          <StoryCard n="3" title="Click" timing="250-350ms" blurb="Compresses, blade twists 5 degrees, sweep draws an arc, snaps back. Click the mark.">
            <SigilMark idle={false} className="h-16 w-16 cursor-pointer" />
          </StoryCard>
          <StoryCard
            n="4"
            title="XP gain"
            timing="350-450ms"
            blurb="Terminal extends, one chunky fragment detaches 7px upward and dissolves. No stars, no confetti."
            action={
              <button type="button" onClick={() => fire('xp')} className="mt-1 rounded-full bg-brand px-3 py-1 text-xs font-bold text-on-brand">
                Replay XP gain
              </button>
            }
          >
            <SigilMark idle={false} signal={burst?.type === 'xp' ? burst : null} className="h-16 w-16" />
          </StoryCard>
          <StoryCard
            n="5"
            title="Level up"
            timing="650-850ms"
            blurb="Charge, activation, command burst, settle with a 2px bounce. The signature moment."
            action={
              <button type="button" onClick={() => fire('levelup')} className="mt-1 rounded-full bg-brand px-3 py-1 text-xs font-bold text-on-brand">
                Replay level up
              </button>
            }
          >
            <SigilMark idle={false} signal={burst?.type === 'levelup' ? burst : null} className="h-16 w-16" />
          </StoryCard>
          <StoryCard n="6" title="Navbar lockup" timing="always on" blurb="Idle breathing plus the wordmark lifting 1px on tap. This is the exact lockup spec.">
            <SigilLockup />
          </StoryCard>
        </div>
      </SheetSection>

      {/* 16-17. Anatomy and geometry */}
      <SheetSection kicker="Anatomy" title="Icon anatomy and exact geometry">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex items-center justify-center rounded-2xl bg-page p-6 text-fg">
            <SigilMark idle={false} className="h-48 w-48" />
          </div>
          <div className="text-sm text-fg">
            <dl className="space-y-3">
              <div>
                <dt className="font-bold">command-mark · blade + diagonal wing</dt>
                <dd className="text-muted">Focus and direction. The wing's diagonal is the identity's main axis; the wordmark's M cut echoes it.</dd>
              </div>
              <div>
                <dt className="font-bold">outer-sweep · cradle arc</dt>
                <dd className="text-muted">Momentum and flow. Deliberately levitates the blade: the mark hovers, activated.</dd>
              </div>
              <div>
                <dt className="font-bold">rising-terminal · detached shard</dt>
                <dd className="text-muted">Ambition and progression. Echoed by the wordmark's "o" shard.</dd>
              </div>
              <div>
                <dt className="font-bold">level-up-fragment · hidden triangle</dt>
                <dd className="text-muted">Achievement. Opacity zero at rest; only xp gain and level up release it.</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-line bg-page p-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">Exact path data · viewBox 0 0 128 128 · fill currentColor</p>
          <pre className="whitespace-pre-wrap break-all font-mono text-[0.68rem] leading-relaxed text-fg">
            {Object.entries(SIGIL).map(([k, d]) => `${k}: ${d}`).join('\n\n')}
          </pre>
        </div>
      </SheetSection>

      {/* 18. Implementation */}
      <SheetSection kicker="Build" title="Implementation">
        <pre className="overflow-x-auto rounded-2xl bg-page p-4 font-mono text-xs leading-relaxed text-fg">
          {`import SigilMark from '@/components/ui/SigilMark'
import { SigilLockup } from '@/components/ui/SigilWordmark'

// Navbar (idle breathing, hover + click built in)
<SigilLockup />

// XP gain / level up (replay on identity change)
const [burst, setBurst] = useState(null)
<SigilMark signal={burst} onDone={() => setBurst(null)} className="h-7 w-7" />
setBurst({ type: 'xp', n: Date.now() })
setBurst({ type: 'levelup', n: Date.now() })`}
        </pre>
        <p className="mt-3 text-sm text-muted">
          Groups carry stable ids (command-mark, outer-sweep, rising-terminal, level-up-fragment) for CSS or
          orchestrated sequences. Idle respects prefers-reduced-motion via useReducedMotion. No filters, no
          gradients, no masks, no thin linework anywhere.
        </p>
      </SheetSection>
    </div>
  )
}
