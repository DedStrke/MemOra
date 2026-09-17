import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Chip from '@/components/ui/Chip'
import Avatar from '@/components/ui/Avatar'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { useApp } from '@/context/AppProvider'
import { findProfanity } from '@/lib/profanity'
import { detectContactDetails } from '@/lib/safety'
import { daysAgo } from '@/lib/sessions'

const KINDS = [
  { id: 'question', label: 'Question', icon: 'brain' },
  { id: 'tip', label: 'Tip', icon: 'lightbulb' },
  { id: 'resource', label: 'Resource', icon: 'paper' },
]
const kindMeta = (id) => KINDS.find((k) => k.id === id) || KINDS[0]

const SORTS = ['Newest', 'Unanswered', 'Most helpful']

const REPORT_REASONS = ['Spam', 'Bullying or harassment', 'Contact details shared', 'Something else']

function timeLabel(ts) {
  const d = daysAgo(ts)
  if (d === 0) return 'Today'
  if (d === 1) return 'Yesterday'
  return `${d}d ago`
}

// Composer body validation shared by posts and replies: profanity (existing
// filter) plus contact-detail sharing (§8.3) both block submission outright
// rather than silently posting then flagging - cheaper to ask someone to
// reword than to publish first and clean up after.
function validateBody(text) {
  const clean = text.trim()
  if (!clean) return null
  const swear = findProfanity(clean)
  if (swear.length) {
    return `That won't post: it contains a word (${swear[0]}) that isn't allowed here.`
  }
  const contact = detectContactDetails(clean)
  if (contact.length) {
    return `That won't post: looks like it shares contact details (${contact[0]}). Keep it on the board.`
  }
  return null
}

function GuidelinesGate({ onAgree }) {
  return (
    <motion.div variants={fadeInUp} className="mt-6 card p-6">
      <h2 className="text-lg font-bold text-fg">Before you post</h2>
      <ul className="readable mt-3 space-y-2 text-sm text-muted">
        <li>· Be someone you'd want replying to you - no put-downs, no pile-ons.</li>
        <li>· Never share your name, school, town, phone number, email or any social handle here.</li>
        <li>· No private messaging exists on Memora - everything is posted where everyone can see it, on purpose.</li>
        <li>· Report anything that worries you. A moderator reviews every report.</li>
      </ul>
      <Button onClick={onAgree} className="mt-4" size="sm">
        <Icon name="check" className="h-4 w-4" />
        I understand, let me post
      </Button>
    </motion.div>
  )
}

function ReportMenu({ onReport, onClose }) {
  return (
    <div className="absolute right-0 top-full z-20 mt-1 w-48 overflow-hidden rounded-xl border border-line bg-surface shadow-lift">
      {REPORT_REASONS.map((reason) => (
        <button
          key={reason}
          type="button"
          onClick={() => {
            onReport(reason)
            onClose()
          }}
          className="block w-full px-3.5 py-2.5 text-left text-sm text-fg hover:bg-raised"
        >
          {reason}
        </button>
      ))}
    </div>
  )
}

function ReplyRow({ reply, isPostAuthor, isAnswer, onMarkAnswer, onReplyTo, onDelete, onReport, onHide, myName }) {
  const [reportOpen, setReportOpen] = useState(false)
  const mine = reply.authorName === myName
  if (reply.status === 'hidden' && !mine) return null

  return (
    <li className={`flex items-start gap-2.5 py-3 ${isAnswer ? 'rounded-xl bg-r3-solid/10 px-3' : ''}`}>
      <Avatar name={reply.authorName} className="mt-0.5 h-7 w-7" />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
          <span className="font-semibold text-fg">{reply.authorName}</span>
          <span>· {timeLabel(reply.ts)}</span>
          {isAnswer && (
            <span className="inline-flex items-center gap-1 rounded-full bg-r3-solid/20 px-2 py-0.5 font-semibold text-r3-solid">
              <Icon name="check" className="h-3 w-3" />
              Answer
            </span>
          )}
          {reply.status === 'hidden' && <span className="italic">(hidden, visible only to you)</span>}
        </div>
        <p className="readable mt-1 text-sm text-fg">{reply.text}</p>
        <div className="mt-1.5 flex items-center gap-3 text-xs font-semibold text-muted">
          <button type="button" onClick={() => onReplyTo(reply)} className="hover:text-brand-strong">
            Reply
          </button>
          {isPostAuthor && !isAnswer && (
            <button type="button" onClick={() => onMarkAnswer(reply.id)} className="hover:text-brand-strong">
              Mark as answer
            </button>
          )}
          {mine ? (
            <button type="button" onClick={() => onDelete(reply.id)} className="hover:text-danger">
              Delete
            </button>
          ) : (
            <div className="relative">
              <button type="button" onClick={() => setReportOpen((v) => !v)} className="hover:text-danger">
                Report
              </button>
              {reportOpen && (
                <ReportMenu onReport={(reason) => onReport(reply.id, reason)} onClose={() => setReportOpen(false)} />
              )}
            </div>
          )}
          {mine && reply.status !== 'hidden' && (
            <button type="button" onClick={() => onHide(reply.id)} className="hover:text-danger">
              Hide
            </button>
          )}
        </div>
      </div>
    </li>
  )
}

function PostCard({ post, replies, myName, actions }) {
  const [replyText, setReplyText] = useState('')
  const [replyError, setReplyError] = useState('')
  const [replyingTo, setReplyingTo] = useState(null)
  const [reportOpen, setReportOpen] = useState(false)
  const [expanded, setExpanded] = useState(replies.length > 0 && replies.length <= 3)
  const meta = kindMeta(post.kind)
  const mine = post.authorName === myName
  const iMarkedHelpful = actions.helpfulGiven.includes(post.id)

  if (post.status === 'hidden' && !mine) return null

  const submitReply = () => {
    const err = validateBody(replyText)
    if (err) {
      setReplyError(err)
      return
    }
    if (!replyText.trim()) return
    if (!actions.canReplyToCommunity) {
      setReplyError("You've posted a lot in the last hour - give it a bit before replying again.")
      return
    }
    const text = replyingTo ? `@${replyingTo.authorName} ${replyText.trim()}` : replyText.trim()
    actions.addReply({ postId: post.id, text })
    setReplyText('')
    setReplyingTo(null)
    setReplyError('')
    setExpanded(true)
  }

  return (
    <motion.div variants={fadeInUp} className="card p-5">
      <div className="flex items-start gap-3">
        <Avatar name={post.authorName} className="mt-0.5 h-9 w-9" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
            <span className="font-semibold text-fg">{post.authorName}</span>
            <span>· {timeLabel(post.ts)}</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-soft px-2 py-0.5 font-semibold text-brand-strong">
              <Icon name={meta.icon} className="h-3 w-3" />
              {meta.label}
            </span>
            {post.subject && (
              <span className="rounded-full bg-raised px-2 py-0.5">
                {post.subject}
                {post.topic ? ` · ${post.topic}` : ''}
              </span>
            )}
            {post.answeredReplyId && (
              <span className="inline-flex items-center gap-1 rounded-full bg-r3-solid/20 px-2 py-0.5 font-semibold text-r3-solid">
                <Icon name="check" className="h-3 w-3" />
                Answered
              </span>
            )}
            {post.status === 'hidden' && <span className="italic">(hidden, visible only to you)</span>}
          </div>
          <p className="readable mt-1.5 text-sm text-fg">{post.body}</p>

          <div className="mt-3 flex items-center gap-4 text-xs font-semibold text-muted">
            <button
              type="button"
              onClick={() => actions.toggleHelpful('post', post.id)}
              className={`inline-flex items-center gap-1.5 ${iMarkedHelpful ? 'text-brand-strong' : 'hover:text-brand-strong'}`}
            >
              <Icon name="star" filled={iMarkedHelpful} className="h-4 w-4" />
              Helpful{post.helpfulCount > 0 ? ` (${post.helpfulCount})` : ''}
            </button>
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-1.5 hover:text-brand-strong"
            >
              <Icon name="chevronDown" className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
              {replies.length} repl{replies.length === 1 ? 'y' : 'ies'}
            </button>
            {mine ? (
              <>
                <button type="button" onClick={() => actions.deletePost(post.id)} className="hover:text-danger">
                  Delete
                </button>
                {post.status !== 'hidden' && (
                  <button
                    type="button"
                    onClick={() => actions.hideContent({ targetType: 'post', targetId: post.id })}
                    className="hover:text-danger"
                  >
                    Hide
                  </button>
                )}
              </>
            ) : (
              <div className="relative">
                <button type="button" onClick={() => setReportOpen((v) => !v)} className="hover:text-danger">
                  Report
                </button>
                {reportOpen && (
                  <ReportMenu
                    onReport={(reason) => actions.reportContent({ targetType: 'post', targetId: post.id, reason })}
                    onClose={() => setReportOpen(false)}
                  />
                )}
              </div>
            )}
          </div>

          {expanded && (
            <div className="mt-2 border-t border-line">
              {replies.length > 0 && (
                <ul className="divide-y divide-line">
                  {replies.map((r) => (
                    <ReplyRow
                      key={r.id}
                      reply={r}
                      myName={myName}
                      isPostAuthor={mine}
                      isAnswer={post.answeredReplyId === r.id}
                      onMarkAnswer={(replyId) => actions.markAnswer(post.id, replyId)}
                      onReplyTo={(reply) => setReplyingTo(reply)}
                      onDelete={actions.deleteReply}
                      onReport={(id, reason) => actions.reportContent({ targetType: 'reply', targetId: id, reason })}
                      onHide={(id) => actions.hideContent({ targetType: 'reply', targetId: id })}
                    />
                  ))}
                </ul>
              )}
              <div className="pt-3">
                {replyingTo && (
                  <p className="mb-1.5 flex items-center gap-1.5 text-xs text-muted">
                    Replying to <span className="font-semibold text-fg">@{replyingTo.authorName}</span>
                    <button type="button" onClick={() => setReplyingTo(null)} className="hover:text-danger">
                      <Icon name="x" className="h-3.5 w-3.5" />
                    </button>
                  </p>
                )}
                <div className="flex gap-2">
                  <input
                    value={replyText}
                    onChange={(e) => {
                      setReplyText(e.target.value)
                      if (replyError) setReplyError('')
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && submitReply()}
                    placeholder="Write a reply..."
                    className="min-w-0 flex-1 rounded-xl border border-line bg-page px-3.5 py-2 text-sm text-fg placeholder:text-muted focus:border-brand focus:outline-none"
                  />
                  <Button onClick={submitReply} disabled={!replyText.trim()} variant="secondary" size="sm">
                    Reply
                  </Button>
                </div>
                {replyError && <p className="mt-1.5 text-xs font-medium text-danger">{replyError}</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Community() {
  const app = useApp()
  const {
    user,
    posts,
    replies,
    displayName,
    communityGuidelinesAgreedAt,
    canPostToCommunity,
    agreeToGuidelines,
    addPost,
  } = app

  const [sort, setSort] = useState('Newest')
  const [kind, setKind] = useState('question')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const [postError, setPostError] = useState('')

  const visiblePosts = posts.filter((p) => p.status !== 'hidden' || p.authorName === displayName)
  const sorted = [...visiblePosts].sort((a, b) => {
    if (sort === 'Most helpful') return b.helpfulCount - a.helpfulCount || b.ts - a.ts
    if (sort === 'Unanswered') {
      const aOpen = a.kind === 'question' && !a.answeredReplyId
      const bOpen = b.kind === 'question' && !b.answeredReplyId
      if (aOpen !== bOpen) return aOpen ? -1 : 1
      return b.ts - a.ts
    }
    return b.ts - a.ts
  })

  const submitPost = () => {
    const err = validateBody(body)
    if (err) {
      setPostError(err)
      return
    }
    if (!body.trim()) return
    if (!canPostToCommunity) {
      setPostError("You've posted a lot in the last hour - give it a bit before posting again.")
      return
    }
    addPost({ kind, subject: subject || null, topic: null, body: body.trim() })
    setBody('')
    setPostError('')
  }

  return (
    <Section width="narrow" animateOnMount className="pt-8 pb-28">
      <motion.div variants={fadeInUp}>
        <Breadcrumbs />
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-6">
        <h1 className="text-3xl font-extrabold text-fg sm:text-4xl">Community</h1>
        <p className="readable mt-1 text-muted">
          Wins, stuck points, whatever. Keep it clean, no swearing, no contact details.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="mt-3 flex items-start gap-2.5 rounded-xl border border-line bg-raised px-4 py-3 text-sm text-muted"
      >
        <Icon name="access" className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" />
        <p className="readable">
          This board is private to this device right now - your account is real, but posts
          themselves aren't synced anywhere yet, so nobody else will see what you post here
          until that's added.
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-3 flex items-center gap-2.5 rounded-xl border border-line px-4 py-3 text-sm">
        <Icon name="heart" className="h-4 w-4 shrink-0 text-brand-strong" />
        <p className="readable text-muted">
          If this is about more than schoolwork, please talk to a real person -{' '}
          <a
            href="https://www.childline.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-strong hover:underline"
          >
            Childline
          </a>{' '}
          (0800 1111) is free, confidential, and always open.
        </p>
      </motion.div>

      {/* composer */}
      {!communityGuidelinesAgreedAt ? (
        <GuidelinesGate onAgree={agreeToGuidelines} />
      ) : (
        <motion.div variants={fadeInUp} className="mt-6 card p-5">
          <div className="flex flex-wrap gap-2">
            {KINDS.map((k) => (
              <Chip key={k.id} selected={kind === k.id} aria-pressed={kind === k.id} onClick={() => setKind(k.id)}>
                <Icon name={k.icon} className="h-4 w-4" />
                {k.label}
              </Chip>
            ))}
          </div>
          {(user.subjects || []).length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              <Chip selected={subject === ''} aria-pressed={subject === ''} onClick={() => setSubject('')}>
                No subject tag
              </Chip>
              {user.subjects.map((s) => (
                <Chip key={s.id ?? s.name} selected={subject === s.name} aria-pressed={subject === s.name} onClick={() => setSubject(s.name)}>
                  {s.name}
                </Chip>
              ))}
            </div>
          )}
          <textarea
            rows={3}
            value={body}
            onChange={(e) => {
              setBody(e.target.value)
              if (postError) setPostError('')
            }}
            placeholder="What's on your mind..."
            className="mt-3 w-full resize-none rounded-xl border border-line bg-page px-4 py-3 text-fg placeholder:text-muted focus:border-brand focus:outline-none"
          />
          {postError && (
            <p className="readable mt-2 flex items-center gap-1.5 text-sm font-medium text-danger">
              <Icon name="x" className="h-4 w-4 shrink-0" />
              {postError}
            </p>
          )}
          <div className="mt-3 flex items-center justify-between gap-3">
            {/* displayName is now 'You' when no real name is set, rather
                than leaking the profile's 'there' placeholder. Offer the
                setting rather than just stating it. */}
            <p className="text-xs text-muted">
              Posting as <span className="font-semibold text-fg">{displayName}</span>
              {displayName === 'You' && (
                <>
                  {' · '}
                  <Link to="/profile" className="font-semibold text-brand-strong hover:underline">
                    pick a name
                  </Link>
                </>
              )}
            </p>
            <Button onClick={submitPost} disabled={!body.trim()}>
              <Icon name="send" className="h-4 w-4" />
              Post
            </Button>
          </div>
        </motion.div>
      )}

      {/* sort */}
      {sorted.length > 0 && (
        <motion.div variants={fadeInUp} className="mt-6 flex gap-2">
          {SORTS.map((s) => (
            <Chip key={s} selected={sort === s} aria-pressed={sort === s} onClick={() => setSort(s)}>
              {s}
            </Chip>
          ))}
        </motion.div>
      )}

      {/* feed */}
      <motion.div variants={staggerContainer} className="mt-4 space-y-3">
        {sorted.length === 0 ? (
          <motion.div variants={fadeInUp} className="card p-8 text-center">
            <p className="text-sm text-muted">Nothing posted yet. Say something above.</p>
          </motion.div>
        ) : (
          sorted.map((p) => (
            <PostCard
              key={p.id}
              post={p}
              replies={replies.filter((r) => r.postId === p.id).sort((a, b) => a.ts - b.ts)}
              myName={displayName}
              actions={app}
            />
          ))
        )}
      </motion.div>
    </Section>
  )
}
