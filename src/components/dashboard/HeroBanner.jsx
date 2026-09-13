import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '@/components/ui/Icon'
import Pfp from '@/components/ui/Pfp'
import Banner from '@/components/ui/Banner'
import { assessmentType } from '@/constants/assessments'
import { levelFromXp, nextReward, streakTier, nextStreakTier } from '@/lib/xp'
import { fadeInUp } from '@/lib/motion'

/*
  The banner across the top of the dashboard, laid out the way a profile
  card is: your chosen banner as a strip, your profile picture sitting on
  its bottom edge (a GIF keeps moving), then your name, handle, level and
  the three numbers that matter today (streak in its tier colour, this
  week's time, the next assessment). It is the one decorative place on
  the dashboard, and it is decorated with things you picked. The study
  buddy lives below it, in the quote card.

  This is a display, not an editor - the picture and the banner are both
  read-only here and link to Settings, where changing them actually
  lives. "Set up profile" shows once, until the profile section has been
  opened or a username chosen, and then gets out of the way.

  Everything on it is live data: the streak is computed from sessions AND
  attempts, XP from lib/xp.js, the countdown from the nearest assessment.
*/

const greetingFor = (hour) => (hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening')

function Flame({ colour, size = 30 }) {
  return (
    <svg viewBox="0 0 24 28" width={size} height={size * 1.16} aria-hidden="true">
      <path d="M12 2c1 4 5 6 5 12a5 5 0 0 1-10 0c0-2 1-3 1-3s.5 2 2 2c1.5 0 2-1.5 2-3 0-3-3-5 0-8z" fill={colour} />
      <path
        d="M12 12c.6 2 3 3 3 6a3 3 0 0 1-6 0c0-1.5 1-2.2 1-2.2s.3 1.2 1.2 1.2c.9 0 1.3-.9 1.3-1.8 0-1.4-1-2-.5-3.2z"
        fill="#fff"
        opacity="0.55"
      />
    </svg>
  )
}

/* The level number inside a ring that fills clockwise with progress to the next level. */
function LevelRing({ level, progress }) {
  const r = 22
  const c = 2 * Math.PI * r
  return (
    <span className="level-ring relative grid h-14 w-14 shrink-0 place-items-center" aria-label={`Level ${level}`}>
      <svg viewBox="0 0 56 56" className="absolute inset-0 h-full w-full -rotate-90">
        <circle cx="28" cy="28" r={r} className="level-ring-track" strokeWidth="4" fill="none" />
        <motion.circle
          cx="28"
          cy="28"
          r={r}
          className="level-ring-fill"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - Math.max(0.02, progress)) }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <span className="level-ring-core grid h-10 w-10 place-items-center rounded-full text-base font-extrabold">{level}</span>
    </span>
  )
}

export default function HeroBanner({
  name,
  fullName,
  username,
  photo,
  photoPos,
  banner,
  bannerPos,
  streak,
  xp,
  weekMinutes,
  nextAssessment,
  daysToNext,
  now,
  showSetup,
}) {
  const tier = streakTier(streak)
  const next = nextStreakTier(streak)
  const lvl = levelFromXp(xp)
  const reward = nextReward(lvl.level)
  const hours = weekMinutes >= 60 ? `${(weekMinutes / 60).toFixed(1)}h` : `${weekMinutes}m`
  const type = nextAssessment ? assessmentType(nextAssessment.type) : null

  return (
    <motion.section variants={fadeInUp} aria-label="Your banner" className="card overflow-hidden rounded-3xl">
      <Banner src={banner} pos={bannerPos} className="aspect-[24/7] w-full">
        <span aria-hidden="true" className="banner-scrim absolute inset-0" />
        <div className="relative flex h-full items-start justify-between p-4 sm:p-5">
          <p className="rounded-full bg-black/25 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
            {new Date(now).toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' })}
          </p>
          {showSetup && (
            <Link
              to="/profile"
              className="inline-flex items-center gap-1.5 rounded-full bg-black/25 px-3 py-1 text-[0.7rem] font-bold text-white backdrop-blur-sm transition-colors hover:bg-black/40"
            >
              <Icon name="user" className="h-3.5 w-3.5" />
              Set up profile
            </Link>
          )}
        </div>
      </Banner>

      <div className="relative px-4 pb-5 sm:px-6">
        <div className="-mt-14 grid gap-4 sm:-mt-16 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-end">
          {/* Profile picture on the banner edge - a link to Settings, not an
              editor: changing it happens there, never here. */}
          <Link
            to="/profile"
            className="mx-auto block h-32 w-32 rounded-full bg-surface p-1.5 shadow-lg ring-1 ring-line transition-transform hover:-translate-y-0.5 sm:h-36 sm:w-36 lg:mx-0"
            aria-label="Your profile"
          >
            <Pfp photo={photo} pos={photoPos} name={fullName || name} className="h-full w-full" />
          </Link>

          {/* Name, handle, level */}
          <div className="min-w-0 text-center lg:pb-1 lg:text-left">
            <h1 className="text-2xl font-extrabold leading-tight text-fg sm:text-3xl">
              {greetingFor(new Date(now).getHours())}
              {name ? `, ${name}` : ''}
            </h1>
            <p className="mt-1 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted lg:justify-start">
              {username && <span className="font-semibold text-fg">@{username}</span>}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-bold text-brand-strong">
                <Icon name="star" className="h-3.5 w-3.5" />
                Level {lvl.level} · {lvl.title}
              </span>
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 lg:w-[21rem]">
            <div
              className="hero-stat"
              style={{ '--glow': tier.glow }}
              title={next ? `${next.min - streak} more day${next.min - streak === 1 ? '' : 's'} to ${next.name}` : 'Top tier'}
            >
              <Flame colour={tier.colour} />
              <span className="text-2xl font-extrabold leading-none tabular-nums" style={{ color: tier.colour }}>
                {streak}
              </span>
              <span className="hero-stat-label">{streak > 0 ? `${tier.name} streak` : 'day streak'}</span>
            </div>
            <div className="hero-stat">
              <Icon name="clock" className="h-6 w-6 text-brand-strong" />
              <span className="text-2xl font-extrabold leading-none tabular-nums text-fg">{hours}</span>
              <span className="hero-stat-label">this week</span>
            </div>
            {nextAssessment ? (
              <Link to="/profile#assessments" className="hero-stat hover:border-brand">
                <span className={`hero-type hero-type-${type.tone}`}>{type.short}</span>
                <span
                  className={`text-2xl font-extrabold leading-none tabular-nums ${
                    daysToNext <= 7 ? 'text-danger' : daysToNext <= 21 ? 'text-r2-shaky' : 'text-fg'
                  }`}
                >
                  {daysToNext <= 0 ? 'today' : `${daysToNext}d`}
                </span>
                <span className="hero-stat-label truncate">{nextAssessment.subject || nextAssessment.paperLabel}</span>
              </Link>
            ) : (
              <Link to="/profile#assessments" className="hero-stat border-dashed hover:border-brand">
                <Icon name="calendar" className="h-6 w-6 text-brand-strong" />
                <span className="text-sm font-bold text-brand-strong">Add dates</span>
                <span className="hero-stat-label">DA · IA · mocks</span>
              </Link>
            )}
          </div>
        </div>

        {/* Level: a ring around the level number that fills as the level
            does, the title beside it, and an XP bar with a moving sheen
            and a lit leading edge. */}
        <div className="level-row mt-5 flex items-center gap-4">
          <LevelRing level={lvl.level} progress={lvl.progress} />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
              <p className="min-w-0">
                <span className="text-base font-extrabold text-fg">{lvl.title}</span>
                <span className="ml-2 text-xs font-semibold text-muted">
                  {lvl.toNext.toLocaleString()} XP to level {lvl.level + 1}
                </span>
              </p>
              <p className="text-xs tabular-nums text-muted">
                <span className="font-bold text-fg">{xp.toLocaleString()}</span> / {lvl.next.toLocaleString()} XP
              </p>
            </div>
            <div className="xp-bar mt-2">
              <motion.div
                className="xp-fill"
                initial={{ width: 0 }}
                animate={{ width: `${Math.max(2, lvl.progress * 100)}%` }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span aria-hidden="true" className="xp-shine" />
                <span aria-hidden="true" className="xp-tip" />
              </motion.div>
            </div>
            {reward && (
              <p className="mt-1.5 text-[0.7rem] text-muted">
                Next unlock <span className="font-semibold text-fg">{reward.label.replace('Title: ', '')}</span> at level{' '}
                {reward.level}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
