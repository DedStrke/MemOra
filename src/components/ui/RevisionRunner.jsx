import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import FlipCard from '@/components/ui/FlipCard'
import Chip from '@/components/ui/Chip'
import SpeakButton from '@/components/ui/SpeakButton'
import { fadeInUp, popIn } from '@/lib/motion'

/*
  Renders real AI-generated revision content for a subject, chosen by technique.
  Pulls from a REVISION pack: flashcards, mcq, examQuestions, topics.

    <RevisionRunner pack={pack} technique="mcq" onAnswer={(attempt) => ...} />

  Techniques: flashcards / active-recall -> flip cards, mcq -> quiz,
  exam-questions -> mark-scheme reveal, blurting -> write then self-check.

  onAnswer (optional) fires once per answered question for mcq/exam-questions,
  with { question, correct, dontKnow }. correct is false when dontKnow is
  true. Used to power the Performance/mistakes page.
*/

function Nav({ i, total, onPrev, onNext }) {
  return (
    <div className="mx-auto mt-5 flex max-w-2xl items-center justify-center gap-4">
      <Button variant="secondary" size="sm" onClick={onPrev} disabled={total < 2}>
        <Icon name="arrowLeft" className="h-4 w-4" />
        Prev
      </Button>
      <span className="text-sm font-medium tabular-nums text-muted">
        {i + 1} / {total}
      </span>
      <Button variant="secondary" size="sm" onClick={onNext} disabled={total < 2}>
        Next
        <Icon name="arrowRight" className="h-4 w-4" />
      </Button>
    </div>
  )
}

/*
  A technique with no content for the current chapter used to be a dead end -
  a line of text and no way forward. It now offers the two things that
  actually resolve it, plus any techniques that DO have content here.
*/
function Empty({ label, pack, onSwitchTechnique, onChangeChapter }) {
  const alternatives = [
    { id: 'flashcards', label: 'Flashcards', count: pack?.flashcards?.length || 0 },
    { id: 'mcq', label: 'MCQ', count: pack?.mcq?.length || 0 },
    { id: 'exam-questions', label: 'Exam questions', count: pack?.examQuestions?.length || 0 },
  ].filter((a) => a.count > 0)

  return (
    <div className="mx-auto max-w-md py-10 text-center">
      <p className="readable text-muted">No {label} for this chapter yet.</p>

      {alternatives.length > 0 && onSwitchTechnique ? (
        <>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted">
            Available here instead
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {alternatives.map((a) => (
              <Button key={a.id} size="sm" variant="secondary" onClick={() => onSwitchTechnique(a.id)}>
                {a.label}
                <span className="text-muted">({a.count})</span>
              </Button>
            ))}
          </div>
        </>
      ) : null}

      {onChangeChapter ? (
        <div className="mt-5">
          <Button size="sm" variant="ghost" onClick={onChangeChapter}>
            <Icon name="arrowLeft" className="h-4 w-4" />
            Pick another chapter
          </Button>
        </div>
      ) : null}
    </div>
  )
}

/*
  Notes are trusted, hand-authored HTML shipped in the source bundle (see
  constants/cs-notes.js, maths-notes.js) - not user input - so rendering them
  via dangerouslySetInnerHTML is safe here; there is no untrusted-content path
  into this string.
*/
function NotesRunner({ pack, chapter, empty }) {
  const notes = pack.notes || {}
  const topics = Object.keys(notes)
  const [selected, setSelected] = useState(chapter || null)

  if (!topics.length) return <Empty label="notes" {...empty} />

  const active = chapter || selected
  const html = active ? notes[active] : null

  if (!html) {
    return (
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 text-sm text-muted">Pick a topic to read its notes.</p>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <Chip key={t} onClick={() => setSelected(t)}>
              {t}
            </Chip>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-fg">{active}</h3>
        {!chapter && (
          <Button size="sm" variant="ghost" onClick={() => setSelected(null)}>
            <Icon name="arrowLeft" className="h-4 w-4" />
            All topics
          </Button>
        )}
      </div>
      {/* eslint-disable-next-line react/no-danger -- trusted static content, see comment above */}
      <div className="notes-content readable mt-4" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

function FlashcardRunner({ cards, recall, empty }) {
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  if (!cards.length) return <Empty label="flashcards" {...empty} />
  const total = cards.length
  const go = (n) => {
    setFlipped(false)
    setI((n + total) % total)
  }
  return (
    <div>
      <div className="mb-3 flex items-center justify-center gap-3">
        <p className="text-center text-sm text-muted">
          {recall
            ? 'Read the prompt, answer out loud from memory, then flip to check.'
            : 'Flip each card and test yourself.'}
        </p>
        <SpeakButton text={flipped ? cards[i].back : cards[i].front} label="Read this card aloud" />
      </div>
      <FlipCard
        front={cards[i].front}
        back={cards[i].back}
        flipped={flipped}
        onFlip={() => setFlipped((f) => !f)}
      />
      <Nav i={i} total={total} onPrev={() => go(i - 1)} onNext={() => go(i + 1)} />
    </div>
  )
}

// idx === -1 represents "I don't know" (always wrong, never confused with a
// real option index).
const DONT_KNOW = -1

function McqRunner({ items, onAnswer, empty }) {
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState(null)
  if (!items.length) return <Empty label="MCQs" {...empty} />
  const q = items[i]
  const total = items.length
  const next = () => {
    setPicked(null)
    setI((i + 1) % total)
  }
  const pick = (idx) => {
    setPicked(idx)
    onAnswer?.({ question: q.question, correct: idx === q.answer, dontKnow: idx === DONT_KNOW })
  }
  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            Question {i + 1} of {total}
          </p>
          <h3 className="readable mt-2 text-lg font-bold text-fg">{q.question}</h3>
        </div>
        <SpeakButton
          text={`${q.question}. ${q.options.map((o, idx) => `Option ${String.fromCharCode(65 + idx)}: ${o}`).join('. ')}`}
          label="Read the question and options aloud"
          className="mt-1"
        />
      </div>
      <div className="mt-4 space-y-2.5">
        {q.options.map((opt, idx) => {
          const isAnswer = idx === q.answer
          const chosen = picked === idx
          let cls = 'border-line bg-surface hover:border-brand'
          if (picked !== null) {
            if (isAnswer) cls = 'border-success bg-success/10'
            else if (chosen) cls = 'border-danger bg-danger/10'
            else cls = 'border-line bg-surface opacity-60'
          }
          return (
            <button
              key={idx}
              type="button"
              disabled={picked !== null}
              onClick={() => pick(idx)}
              className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-fg transition-colors ${cls}`}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs font-bold">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="readable flex-1">{opt}</span>
              {picked !== null && isAnswer && (
                <Icon name="check" className="h-5 w-5 shrink-0 text-success" />
              )}
              {picked !== null && chosen && !isAnswer && (
                <Icon name="x" className="h-5 w-5 shrink-0 text-danger" />
              )}
            </button>
          )
        })}
        <button
          type="button"
          disabled={picked !== null}
          onClick={() => pick(DONT_KNOW)}
          className={`flex w-full items-center gap-3 rounded-xl border border-dashed px-4 py-2.5 text-left text-sm font-medium transition-colors ${
            picked === DONT_KNOW
              ? 'border-warning bg-warning/10 text-fg'
              : 'border-line text-muted hover:border-brand hover:text-fg'
          } ${picked !== null && picked !== DONT_KNOW ? 'opacity-50' : ''}`}
        >
          <Icon name="brain" className="h-4 w-4 shrink-0" />I don't know
        </button>
      </div>
      {picked !== null && (
        <motion.div
          variants={popIn}
          initial="hidden"
          animate="show"
          aria-live="polite"
          className="mt-4 rounded-xl bg-raised p-4"
        >
          <p
            className={`text-sm font-bold ${
              picked === q.answer ? 'text-success' : picked === DONT_KNOW ? 'text-warning' : 'text-danger'
            }`}
          >
            {picked === q.answer ? 'Correct!' : picked === DONT_KNOW ? "That's okay, here's the answer:" : 'Not quite.'}
          </p>
          {picked !== q.answer && (
            <p className="readable mt-1 text-sm text-fg">
              Correct answer: <strong>{q.options[q.answer]}</strong>
            </p>
          )}
          <p className="readable mt-1 text-sm text-muted">{q.explanation}</p>
          <div className="mt-3">
            <Button size="sm" onClick={next}>
              Next question
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  )
}

function ExamRunner({ items, onAnswer, empty }) {
  const [i, setI] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [rated, setRated] = useState(null) // 'right' | 'wrong' | 'dontknow' | null
  if (!items.length) return <Empty label="exam questions" {...empty} />
  const q = items[i]
  const total = items.length
  const next = () => {
    setRevealed(false)
    setRated(null)
    setI((i + 1) % total)
  }
  const rate = (r) => {
    setRated(r)
    onAnswer?.({ question: q.question, correct: r === 'right', dontKnow: r === 'dontknow' })
  }
  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          Question {i + 1} of {total}
        </p>
        <span className="rounded-full bg-paper-soft px-2.5 py-0.5 text-xs font-semibold text-paper">
          {q.marks} marks
        </span>
      </div>
      <div className="mt-2 flex items-start justify-between gap-3">
        <h3 className="readable text-lg font-bold text-fg">{q.question}</h3>
        <SpeakButton text={q.question} label="Read the question aloud" className="mt-0.5" />
      </div>
      <textarea
        rows={5}
        placeholder="Plan or write your answer, then reveal the mark scheme..."
        className="mt-4 w-full resize-none rounded-xl border border-line bg-page px-4 py-3 text-fg placeholder:text-muted focus:border-brand focus:outline-none"
      />
      {revealed ? (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="mt-4 rounded-xl border border-line bg-surface p-5"
        >
          <p className="text-sm font-bold text-fg">Mark scheme</p>
          <ul className="mt-2 space-y-2">
            {q.markScheme.map((m, idx) => (
              <li key={idx} className="flex gap-2 text-sm">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span className="readable text-muted">{m}</span>
              </li>
            ))}
          </ul>

          {rated === null ? (
            <div className="mt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                Be honest, how did you do?
              </p>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" onClick={() => rate('right')}>
                  <Icon name="check" className="h-4 w-4" />
                  Got it right
                </Button>
                <Button size="sm" variant="secondary" onClick={() => rate('wrong')}>
                  <Icon name="x" className="h-4 w-4" />
                  Got it wrong
                </Button>
                <Button size="sm" variant="ghost" onClick={() => rate('dontknow')}>
                  <Icon name="brain" className="h-4 w-4" />
                  I didn't know
                </Button>
              </div>
            </div>
          ) : (
            <div className="mt-4">
              <Button size="sm" variant="secondary" onClick={next}>
                Next question
                <Icon name="arrowRight" className="h-4 w-4" />
              </Button>
            </div>
          )}
        </motion.div>
      ) : (
        <div className="mt-4">
          <Button onClick={() => setRevealed(true)}>
            <Icon name="paper" className="h-4 w-4" />
            Reveal mark scheme
          </Button>
        </div>
      )}
    </div>
  )
}

function BlurtRunner({ pack }) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className="mx-auto max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted">Blurting</p>
      <h3 className="readable mt-2 text-lg font-bold text-fg">
        Write everything you know about {pack.name}.
      </h3>
      <p className="readable mt-1 text-sm text-muted">
        Empty your memory onto the page, no peeking. Then reveal the key points and tick
        off what you remembered.
      </p>
      <textarea
        rows={7}
        placeholder="Start blurting..."
        className="mt-4 w-full resize-none rounded-xl border border-line bg-page px-4 py-3 text-fg placeholder:text-muted focus:border-brand focus:outline-none"
      />
      {revealed ? (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="mt-4 rounded-xl border border-line bg-surface p-5"
        >
          <p className="text-sm font-bold text-fg">Key points to check</p>
          {!pack.flashcards.length && (
            <p className="readable mt-2 text-sm text-muted">No key points for this chapter yet.</p>
          )}
          <ul className="mt-2 space-y-2">
            {pack.flashcards.slice(0, 8).map((c, idx) => (
              <li key={idx} className="flex gap-2 text-sm">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span className="readable text-muted">{c.front}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ) : (
        <div className="mt-4">
          <Button onClick={() => setRevealed(true)}>
            <Icon name="brain" className="h-4 w-4" />
            Show the key points
          </Button>
        </div>
      )}
    </div>
  )
}

export default function RevisionRunner({
  pack,
  technique = 'flashcards',
  chapter,
  onAnswer,
  onSwitchTechnique,
  onChangeChapter,
}) {
  if (!pack) return null
  const empty = { pack, onSwitchTechnique, onChangeChapter }

  switch (technique) {
    case 'notes':
      return <NotesRunner pack={pack} chapter={chapter} empty={empty} />
    case 'mcq':
      return <McqRunner items={pack.mcq} onAnswer={onAnswer} empty={empty} />
    case 'exam-questions':
      return <ExamRunner items={pack.examQuestions} onAnswer={onAnswer} empty={empty} />
    case 'blurting':
      return <BlurtRunner pack={pack} />
    case 'active-recall':
      return <FlashcardRunner cards={pack.flashcards} recall empty={empty} />
    case 'flashcards':
    default:
      return <FlashcardRunner cards={pack.flashcards} empty={empty} />
  }
}
