import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { useApp } from '@/context/AppProvider'
import { findProfanity } from '@/lib/profanity'
import { daysAgo } from '@/lib/sessions'

function timeLabel(ts) {
  const d = daysAgo(ts)
  if (d === 0) return 'Today'
  if (d === 1) return 'Yesterday'
  return `${d}d ago`
}

export default function Community() {
  const { user, posts, addPost, deletePost } = useApp()
  const initial = (user?.name?.[0] || 'Y').toUpperCase()
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  const submit = () => {
    const clean = text.trim()
    if (!clean) return
    const hits = findProfanity(clean)
    if (hits.length) {
      setError(
        hits.length > 1
          ? `That post won't go up: it contains words (${hits.join(', ')}) that aren't allowed here.`
          : `That post won't go up: it contains a word (${hits[0]}) that isn't allowed here.`,
      )
      return
    }
    addPost({ text: clean })
    setText('')
    setError('')
  }

  return (
    <Section width="narrow" animateOnMount className="pt-8 pb-28">
      <motion.div variants={fadeInUp}>
        <Button as={Link} to="/dashboard" variant="ghost" size="sm">
          <Icon name="arrowLeft" className="h-4 w-4" />
          Dashboard
        </Button>
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-6">
        <span className="kicker">Your board</span>
        <h1 className="mt-2 text-3xl font-extrabold text-fg sm:text-4xl">Community</h1>
        <p className="readable mt-1 text-muted">
          Wins, stuck points, whatever. Keep it clean, no swearing.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="mt-3 flex items-start gap-2.5 rounded-xl border border-line bg-raised px-4 py-3 text-sm text-muted"
      >
        <Icon name="access" className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" />
        <p className="readable">
          This board is private to this device right now - your account signs you in here, not
          into a shared server. Posts won't be visible to anyone else until real multi-device
          sync is added.
        </p>
      </motion.div>

      {/* composer */}
      <motion.div variants={fadeInUp} className="mt-6 card p-5">
        <textarea
          rows={3}
          value={text}
          onChange={(e) => {
            setText(e.target.value)
            if (error) setError('')
          }}
          placeholder="What's on your mind..."
          className="w-full resize-none rounded-xl border border-line bg-page px-4 py-3 text-fg placeholder:text-muted focus:border-brand focus:outline-none"
        />
        {error && (
          <p className="readable mt-2 flex items-center gap-1.5 text-sm font-medium text-danger">
            <Icon name="x" className="h-4 w-4 shrink-0" />
            {error}
          </p>
        )}
        <div className="mt-3 flex justify-end">
          <Button onClick={submit} disabled={!text.trim()}>
            <Icon name="send" className="h-4 w-4" />
            Post
          </Button>
        </div>
      </motion.div>

      {/* feed */}
      <motion.div variants={staggerContainer} className="mt-8 space-y-3">
        {posts.length === 0 ? (
          <motion.div variants={fadeInUp} className="card p-8 text-center">
            <p className="text-sm text-muted">Nothing posted yet. Say something above.</p>
          </motion.div>
        ) : (
          posts.map((p) => (
            <motion.div key={p.id} variants={fadeInUp} className="card flex items-start gap-3 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand text-sm font-bold text-on-brand">
                {user?.avatar ? (
                  <img src={user.avatar} alt="" className="h-full w-full object-cover" />
                ) : (
                  initial
                )}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span className="font-semibold text-fg">You</span>
                  <span>· {timeLabel(p.ts)}</span>
                </div>
                <p className="readable mt-1 text-sm text-fg">{p.text}</p>
              </div>
              <button
                type="button"
                onClick={() => deletePost(p.id)}
                aria-label="Delete post"
                className="shrink-0 rounded-lg p-1.5 text-muted transition-colors hover:bg-danger/10 hover:text-danger"
              >
                <Icon name="x" className="h-4 w-4" />
              </button>
            </motion.div>
          ))
        )}
      </motion.div>
    </Section>
  )
}
