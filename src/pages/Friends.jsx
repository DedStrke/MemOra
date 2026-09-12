import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import FriendCard from '@/components/friends/FriendCard'
import LeaderboardList from '@/components/friends/LeaderboardList'
import useMe from '@/hooks/useMe'
import { useApp } from '@/context/AppProvider'
import { encodeFriendCode, decodeFriendCode } from '@/lib/friends'
import { thumbnailDataUrl, bannerThumbDataUrl } from '@/lib/image'
import { fadeInUp, staggerContainer } from '@/lib/motion'

/*
  Friends: your card, the people you revise with, and the leaderboard.

  Adding a friend takes their friend code - a short string their own
  Friends page generates from their username, buddy, stats and tiny
  stills of their picture and banner. There is no server behind this
  site, so a code is how a card travels (lib/friends.js explains the
  format) - which is why a friend's banner is a still rather than their
  moving GIF. Rows are sorted honestly: by this week's minutes by
  default, because all-time XP only ever rewards whoever started first.
*/
export default function Friends() {
  const now = Date.now()
  const me = useMe(now)
  const { friends, addFriend, removeFriend, showToast } = useApp()
  const [code, setCode] = useState('')
  const [error, setError] = useState(null)
  const [copied, setCopied] = useState(false)

  // Tiny stills of the profile photo and banner ride along in the code
  // when they fit - the photo first, the banner if there is room left.
  const [thumb, setThumb] = useState(null)
  const [bannerThumb, setBannerThumb] = useState(null)
  useEffect(() => {
    let cancelled = false
    thumbnailDataUrl(me.photo, me.photoPos).then((t) => !cancelled && setThumb(t))
    return () => {
      cancelled = true
    }
  }, [me.photo, me.photoPos])
  useEffect(() => {
    let cancelled = false
    bannerThumbDataUrl(me.banner, me.bannerPos).then((t) => !cancelled && setBannerThumb(t))
    return () => {
      cancelled = true
    }
  }, [me.banner, me.bannerPos])
  const myCode = useMemo(() => encodeFriendCode({ ...me, thumb, bannerThumb }), [me, thumb, bannerThumb])

  const add = (e) => {
    e.preventDefault()
    try {
      const f = decodeFriendCode(code)
      if (f.id === me.id) {
        setError('That is your own code.')
        return
      }
      addFriend(f)
      setCode('')
      setError(null)
      showToast(`${f.name} added`)
    } catch {
      setError('That is not a Memora friend code. Ask them to copy it again from their Friends page.')
    }
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(myCode)
      setCopied(true)
      showToast('Friend code copied - send it to whoever you revise with')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setError('Copy failed - select the code below and copy it by hand.')
    }
  }

  return (
    <Section width="wide" animateOnMount className="pt-8 pb-24">
      <motion.div variants={fadeInUp} className="mb-6">
        <Breadcrumbs />
        <h1 className="mt-3 text-3xl font-extrabold text-fg sm:text-4xl">Friends</h1>
        <p className="readable mt-1 text-muted">
          The people you revise with, and who is actually putting the hours in this week.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
        <motion.div variants={staggerContainer} className="min-w-0 space-y-6">
          {/* You */}
          <motion.div variants={fadeInUp}>
            <FriendCard
              friend={me}
              mine
              actions={
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="ghost" as={Link} to="/profile">
                    <Icon name="settings" className="h-4 w-4" />
                    Edit
                  </Button>
                  <Button size="sm" onClick={copy}>
                    <Icon name={copied ? 'check' : 'send'} className="h-4 w-4" />
                    {copied ? 'Copied' : 'Copy my friend code'}
                  </Button>
                </div>
              }
            />
            {!me.username && (
              <p className="mt-2 text-xs text-muted">
                Set a username in{' '}
                <Link to="/profile" className="font-semibold text-brand-strong hover:underline">
                  your profile
                </Link>{' '}
                so friends can recognise your code.
              </p>
            )}
          </motion.div>

          {/* Add */}
          <motion.form variants={fadeInUp} onSubmit={add} className="card p-5">
            <label htmlFor="friend-code" className="text-lg font-extrabold text-fg">
              Add a friend
            </label>
            <p className="mt-0.5 text-sm text-muted">
              Paste the friend code they copied from their own Friends page. It carries their username, picture,
              banner, buddy, level and streak - nothing else.
            </p>
            <div className="mt-3 flex gap-2">
              <input
                id="friend-code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Paste a friend code"
                autoComplete="off"
                spellCheck={false}
                className="min-w-0 flex-1 rounded-xl border border-line bg-page px-3.5 py-2.5 text-sm text-fg placeholder:text-muted focus:border-brand focus:outline-none"
              />
              <Button type="submit" size="sm" disabled={!code.trim()}>
                <Icon name="plus" className="h-4 w-4" />
                Add
              </Button>
            </div>
            {error && <p className="mt-2 text-xs text-danger">{error}</p>}
            <details className="mt-3 text-xs text-muted">
              <summary className="cursor-pointer font-semibold text-fg">Show my code as text</summary>
              <code className="mt-2 block max-h-24 overflow-auto break-all rounded-lg bg-page p-2 text-[0.68rem]">{myCode}</code>
            </details>
          </motion.form>

          {/* Friends */}
          <motion.div variants={fadeInUp}>
            <div className="mb-3 flex items-baseline justify-between">
              <h2 className="text-lg font-extrabold text-fg">
                {friends.length === 0 ? 'No friends yet' : `${friends.length} friend${friends.length === 1 ? '' : 's'}`}
              </h2>
              {friends.length > 0 && (
                <p className="text-xs text-muted">A card updates when you paste that person&rsquo;s newer code.</p>
              )}
            </div>
            {friends.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-line p-5 text-sm text-muted">
                Send your code to someone and paste theirs above. Their card and streak show up here and they
                join the leaderboard.
              </p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {friends.map((f) => (
                  <FriendCard key={f.id} friend={f} onRemove={() => removeFriend(f.id)} />
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Leaderboard */}
        <motion.aside variants={fadeInUp} className="card p-5 lg:sticky lg:top-24" aria-label="Leaderboard">
          <div className="mb-3">
            <h2 className="text-lg font-extrabold text-fg">Leaderboard</h2>
            <p className="text-xs text-muted">
              {friends.length === 0 ? 'No friends yet - just you.' : `${friends.length + 1} on the board`}
            </p>
          </div>
          <LeaderboardList me={me} friends={friends} />
        </motion.aside>
      </div>
    </Section>
  )
}
