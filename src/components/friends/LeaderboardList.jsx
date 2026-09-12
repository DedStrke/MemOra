import { useMemo, useState } from 'react'
import Icon from '@/components/ui/Icon'
import Pfp from '@/components/ui/Pfp'
import { streakTier } from '@/lib/xp'
import { usableBanner } from '@/lib/friends'
import { posStyle } from '@/lib/imagePos'

/*
  Ranked rows: you plus your friends, by this week's minutes (the fair
  one) or all-time XP. `limit` trims it for the dashboard teaser; the
  Friends page shows everyone.

  Each row IS that person's banner - your real one, the still a friend's
  code carried, or the default brand gradient - shown at full strength
  with a dark scrim underneath the text so the name, streak and minutes
  read as white-on-photo, the way the profile banner does. High contrast
  drops the picture and goes back to a flat surface row with the normal
  text colours (see .lb-row in index.css).
*/
export default function LeaderboardList({ me, friends, limit, showTabs = true }) {
  const [board, setBoard] = useState('week')
  const rows = useMemo(() => {
    const all = [{ ...me, mine: true }, ...friends.filter((f) => f.id !== me.id)]
    const key = board === 'week' ? 'weekMinutes' : 'xp'
    const sorted = all.sort((a, b) => (b[key] || 0) - (a[key] || 0)).map((r, i) => ({ ...r, rank: i + 1 }))
    if (!limit) return sorted
    const top = sorted.slice(0, limit)
    const meRow = sorted.find((r) => r.mine)
    return top.some((r) => r.mine) ? top : [...top, meRow]
  }, [me, friends, board, limit])

  return (
    <div>
      {showTabs && (
        <div className="flex rounded-full border border-line bg-surface p-0.5" role="tablist" aria-label="Board">
          {[
            ['week', 'This week'],
            ['all', 'All time'],
          ].map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={board === id}
              onClick={() => setBoard(id)}
              className={`flex-1 rounded-full px-3 py-1 text-xs font-bold transition-colors ${
                board === id ? 'bg-brand text-on-brand' : 'text-muted hover:text-fg'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
      <ol className={`space-y-2 ${showTabs ? 'mt-3' : ''}`}>
        {rows.map((r) => {
          const tier = streakTier(r.streak || 0)
          const banner = usableBanner(r.banner)
          const metric = board === 'week' ? `${r.weekMinutes || 0} min` : `${(r.xp || 0).toLocaleString()} XP`
          const rankClass =
            r.rank === 1
              ? 'bg-paper text-white'
              : r.rank === 2
                ? 'bg-r1-seen text-white'
                : r.rank === 3
                  ? 'bg-[#c9843a] text-white'
                  : 'lb-rank-plain'
          return (
            <li
              key={r.id}
              className={`lb-row relative flex items-center gap-3 overflow-hidden rounded-2xl px-3 py-2.5 ${
                r.mine ? 'lb-row-mine' : ''
              }`}
            >
              <span aria-hidden="true" className="lb-banner absolute inset-0">
                {banner ? (
                  <img src={banner} alt="" draggable="false" className="h-full w-full" style={posStyle(r.bannerPos)} />
                ) : (
                  <span className="profile-banner-default absolute inset-0" />
                )}
                <span className="lb-scrim absolute inset-0" />
              </span>
              <span
                className={`relative grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-extrabold tabular-nums shadow ${rankClass}`}
              >
                {r.rank}
              </span>
              <span className="lb-pfp relative block h-10 w-10 shrink-0 rounded-full p-0.5">
                <Pfp photo={r.photo} pos={r.photoPos} name={r.name} className="h-full w-full" />
              </span>
              <span className="relative min-w-0 flex-1">
                <span className="lb-name block truncate text-sm font-bold">
                  {r.name}
                  {r.mine && <span className="lb-you ml-1.5 text-[0.62rem] font-extrabold uppercase tracking-wide">you</span>}
                </span>
                <span className="lb-sub block truncate text-[0.7rem] font-semibold">
                  {r.username ? `@${r.username}` : `Level ${r.level || 1}`}
                </span>
              </span>
              {/* Numbers stacked on the right so the name keeps its room
                  in the narrow rail version. */}
              <span className="relative flex shrink-0 flex-col items-end gap-1">
                <span className="lb-pill rounded-full px-2.5 py-0.5 text-sm font-extrabold tabular-nums">{metric}</span>
                <span
                  className="lb-pill lb-streak flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.7rem] font-extrabold tabular-nums"
                  style={{ '--tier': tier.colour }}
                  title={`${r.streak || 0}-day streak`}
                >
                  <Icon name="activity" className="h-3 w-3" />
                  {r.streak || 0}
                </span>
              </span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
