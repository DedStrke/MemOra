import Icon from '@/components/ui/Icon'
import Banner from '@/components/ui/Banner'
import Pfp from '@/components/ui/Pfp'
import { streakTier, levelTitle } from '@/lib/xp'
import { staleLabel, usableBanner } from '@/lib/friends'

/*
  A profile card - banner strip, profile picture on its edge, name and
  handle, level and the two numbers a friend cares about (streak, this
  week). Used for you and for every friend; `mine` swaps the freshness
  line for "live" and hides the remove button.

  Pass `editable` alongside `mine` to make the card itself the place you
  change things: hover (or tap) the picture for "Change profile pic",
  hover the banner for "Change banner" - both take any image, or a GIF
  that keeps moving. A friend's banner is the small still their friend
  code carried (lib/friends.js); a code without one gets the default
  gradient. Nothing here falls back to the study buddy - a missing photo
  shows an initial, the same as everywhere else a person is shown.
*/
export default function FriendCard({
  friend,
  mine = false,
  editable = false,
  onPhotoChange,
  onPhotoPosition,
  onPhotoError,
  onBannerChange,
  onBannerPosition,
  onRemove,
  actions,
  compact = false,
}) {
  const tier = streakTier(friend.streak || 0)
  const level = friend.level || 1
  const week = friend.weekMinutes || 0
  const canEdit = mine && editable
  return (
    <article className="card overflow-hidden" aria-label={`${friend.name}'s card`}>
      <Banner
        src={usableBanner(friend.banner)}
        pos={friend.bannerPos}
        editable={canEdit}
        onChange={onBannerChange}
        onPosition={canEdit ? onBannerPosition : undefined}
        onError={onPhotoError}
        className={compact ? 'h-16' : 'aspect-[24/7] w-full'}
      >
        <span aria-hidden="true" className="banner-scrim absolute inset-0" />
        {mine && (
          <span className="absolute right-3 top-3 rounded-full bg-black/25 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-white">
            you
          </span>
        )}
      </Banner>
      <div className="px-4 pb-4">
        <div className="relative -mt-9 flex items-end gap-3">
          <span className="block h-[4.5rem] w-[4.5rem] shrink-0 rounded-full bg-surface p-1 shadow ring-1 ring-line">
            <Pfp
              photo={friend.photo}
              pos={friend.photoPos}
              name={friend.name}
              className="h-full w-full"
              editable={canEdit}
              onChange={onPhotoChange}
              onPosition={canEdit ? onPhotoPosition : undefined}
              onError={onPhotoError}
            />
          </span>
          <div className="min-w-0 flex-1 pb-0.5">
            <p className="truncate text-base font-extrabold text-fg">{friend.name}</p>
            <p className="truncate text-xs text-muted">
              {friend.username ? `@${friend.username}` : 'no username yet'}
            </p>
          </div>
          {!mine && onRemove && (
            <button
              type="button"
              onClick={onRemove}
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-page hover:text-danger"
              aria-label={`Remove ${friend.name}`}
            >
              <Icon name="x" className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-bold text-brand-strong">
            <Icon name="star" className="h-3.5 w-3.5" />
            Level {level} · {levelTitle(level)}
          </span>
          <span
            className="inline-flex items-center gap-1 rounded-full border border-line px-2.5 py-0.5 text-xs font-bold tabular-nums"
            style={{ color: tier.colour }}
            title={`${tier.name} streak`}
          >
            <Icon name="activity" className="h-3.5 w-3.5" />
            {friend.streak || 0} day{friend.streak === 1 ? '' : 's'}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-line px-2.5 py-0.5 text-xs font-bold tabular-nums text-fg">
            <Icon name="clock" className="h-3.5 w-3.5 text-muted" />
            {week >= 60 ? `${(week / 60).toFixed(1)}h` : `${week}m`} this week
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-[0.7rem] text-muted">
            {mine ? 'Live' : `Updated ${staleLabel(friend.updatedAt)}`}
            {' · '}
            {(friend.xp || 0).toLocaleString()} XP
          </p>
          {actions}
        </div>
      </div>
    </article>
  )
}
