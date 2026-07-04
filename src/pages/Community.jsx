import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Mascot from '@/components/ui/Mascot'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { useApp } from '@/context/AppProvider'
import { COMMUNITY_POSTS } from '@/constants/mock'

function PostCard({ post }) {
  const [liked, setLiked] = useState(false)
  const count = post.likes + (liked ? 1 : 0)

  return (
    <motion.article
      variants={fadeInUp}
      className="rounded-2xl border border-line bg-surface p-6"
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-lg font-bold text-brand-strong"
        >
          {post.avatar}
        </span>
        <div className="min-w-0">
          <p className="truncate font-semibold text-fg">{post.author}</p>
          <p className="text-xs text-muted">{post.time}</p>
        </div>
      </div>

      <p className="readable mt-4 text-fg">{post.text}</p>

      <div className="mt-4">
        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-pressed={liked}
          aria-label={liked ? 'Remove your like' : 'Like this post'}
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
            liked
              ? 'border-transparent bg-flash-soft text-flash'
              : 'border-line bg-surface text-muted hover:border-brand hover:text-fg'
          }`}
        >
          <Icon name="heart" className="h-4 w-4" />
          {count}
        </button>
      </div>
    </motion.article>
  )
}

export default function Community() {
  const { user, posts, addPost } = useApp()
  const [text, setText] = useState('')

  const feed = [...posts, ...COMMUNITY_POSTS]

  const submit = () => {
    const trimmed = text.trim()
    if (!trimmed) return
    addPost({
      id: 'p' + Date.now(),
      author: user.name,
      avatar: (user.name[0] || '?').toUpperCase(),
      text: trimmed,
      time: 'now',
      likes: 0,
    })
    setText('')
  }

  return (
    <Section width="narrow" animateOnMount className="pt-8 pb-28">
      <motion.div variants={fadeInUp}>
        <Button as={Link} to="/dashboard" variant="ghost" size="sm">
          <Icon name="arrowLeft" className="h-4 w-4" />
          Dashboard
        </Button>
      </motion.div>

      {/* Heading */}
      <motion.div variants={fadeInUp} className="mt-6 flex items-start gap-4">
        <Mascot expression="wave" className="hidden h-20 w-20 shrink-0 sm:block" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-strong">
            You are not revising alone
          </p>
          <h1 className="mt-1 text-3xl font-bold text-fg sm:text-4xl">Community</h1>
          <p className="readable mt-2 text-muted">
            Share a win, ask for help, or cheer someone on. Every little post
            keeps the whole group going.
          </p>
        </div>
      </motion.div>

      {/* Composer */}
      <motion.div
        variants={fadeInUp}
        className="mt-8 rounded-2xl border border-line bg-surface p-6"
      >
        <label htmlFor="composer" className="font-semibold text-fg">
          What is on your mind, {user.name}?
        </label>
        <textarea
          id="composer"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') submit()
          }}
          rows={3}
          placeholder="Share a study win, a question, or a bit of encouragement..."
          className="mt-3 w-full resize-none rounded-xl border border-line bg-page px-4 py-3 text-fg placeholder:text-muted focus:border-brand focus:outline-none"
        />
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-xs text-muted">Be kind. We are all in this together.</p>
          <Button onClick={submit} disabled={!text.trim()}>
            <Icon name="send" className="h-4 w-4" />
            Post
          </Button>
        </div>
      </motion.div>

      {/* Feed */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mt-8 space-y-4"
      >
        {feed.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </motion.div>
    </Section>
  )
}
