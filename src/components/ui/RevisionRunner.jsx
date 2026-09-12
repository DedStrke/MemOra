import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import FlipCard from '@/components/ui/FlipCard'
import Chip from '@/components/ui/Chip'
import SpeakButton from '@/components/ui/SpeakButton'
import AnswerInput from '@/components/ui/AnswerInput'
import EssayPlanner from '@/components/ui/EssayPlanner'
import Diagram from '@/components/diagrams'
import { diagramsForChapter } from '@/constants/diagram-map'
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
      <NotesBody html={html} />
    </div>
  )
}

/*
  Renders a note, splicing real diagram components into it.

  Economics is examined through diagrams, so its notes carry markers of the
  form <div data-diagram="monopoly"></div> at the point each diagram is
  discussed. They can't be plain HTML in the note string: the diagrams are
  React components that read the theme's CSS variables and carry their own
  <title>/<desc> for screen readers, and inlining ~30 SVGs into the note
  text would make it unreadable to edit.

  So the HTML is split on the markers and the pieces interleaved: HTML
  chunk, diagram, HTML chunk. A note with no markers takes the same path
  and simply renders as one chunk.
*/
const DIAGRAM_MARKER = /<div\s+data-diagram="([a-z0-9-]+)"\s*><\/div>/gi

function NotesBody({ html }) {
  const parts = []
  let last = 0
  let m
  DIAGRAM_MARKER.lastIndex = 0
  while ((m = DIAGRAM_MARKER.exec(html)) !== null) {
    if (m.index > last) parts.push({ type: 'html', value: html.slice(last, m.index) })
    parts.push({ type: 'diagram', value: m[1] })
    last = m.index + m[0].length
  }
  if (last < html.length) parts.push({ type: 'html', value: html.slice(last) })

  return (
    <div className="notes-content readable mt-4">
      {parts.map((p, i) =>
        p.type === 'diagram' ? (
          <Diagram key={i} id={p.value} />
        ) : (
          // eslint-disable-next-line react/no-danger -- trusted static content, see comment above
          <div key={i} dangerouslySetInnerHTML={{ __html: p.value }} />
        ),
      )}
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
      {/* Rendered below the card, not inside it: the flip is a 3D transform
          with a fixed height and backface-visibility, and an SVG inside
          that gets clipped and mirrored. Below it, the diagram appears only
          once you've flipped - so a "sketch this" card still makes you draw
          it from memory first. */}
      {flipped && cards[i].diagram && (
        <motion.div variants={fadeInUp} initial="hidden" animate="show" className="mx-auto mt-4 max-w-2xl">
          <Diagram id={cards[i].diagram} />
        </motion.div>
      )}
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
          {/* Only after a wrong answer or an "I don't know". Showing the
              chapter diagram on every correct answer too would repeat the
              same picture through a whole session and teach you to scroll
              past it; here it arrives exactly when it is the fix. */}
          {q.diagram && picked !== q.answer && (
            <div className="mt-3">
              <p className="text-xs font-bold uppercase tracking-wide text-muted">
                The diagram behind this
              </p>
              <Diagram id={q.diagram} />
            </div>
          )}
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

function ExamRunner({ items, onAnswer, empty, subject }) {
  const [i, setI] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [rated, setRated] = useState(null) // 'right' | 'wrong' | 'dontknow' | null
  const [answer, setAnswer] = useState('')
  if (!items.length) return <Empty label="exam questions" {...empty} />
  const q = items[i]
  const total = items.length
  const next = () => {
    setRevealed(false)
    setRated(null)
    setAnswer('')
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
        <span className="flex flex-wrap items-center justify-end gap-1.5">
          {/* Which paper a question comes from decides whether a calculator
              is allowed and how long you get, so it belongs with the question
              rather than buried in the answer. */}
          {q.paper && (
            <span className="rounded-full border border-line px-2.5 py-0.5 text-xs font-semibold text-muted">
              {q.paper}
            </span>
          )}
          <span className="rounded-full bg-paper-soft px-2.5 py-0.5 text-xs font-semibold text-paper">
            {q.marks} marks
          </span>
        </span>
      </div>
      <div className="mt-2 flex items-start justify-between gap-3">
        {/* Multi-part questions are written with real line breaks between the
            parts. Without pre-line those collapse and (a), (b) and (c) run
            together into a wall of text that is far harder to read than the
            printed paper it is imitating. */}
        <h3 className="readable whitespace-pre-line text-lg font-bold text-fg">{q.question}</h3>
        <SpeakButton text={q.question} label="Read the question aloud" className="mt-0.5" />
      </div>
      {/* A tracing or debugging question is unanswerable without the code it
          refers to, so the snippet belongs with the QUESTION, not hidden
          behind the mark scheme with the model answer. */}
      {q.snippet && (
        <pre className="mt-3 overflow-x-auto rounded-lg border border-line bg-paper-soft/40 p-3 text-xs leading-relaxed">
          <code className="font-mono text-fg">{q.snippet}</code>
        </pre>
      )}
      {q.starter && (
        <div className="mt-3">
          <p className="text-xs font-bold uppercase tracking-wide text-muted">Starter code</p>
          <pre className="mt-1 overflow-x-auto rounded-lg border border-line bg-paper-soft/40 p-3 text-xs leading-relaxed">
            <code className="font-mono text-fg">{q.starter}</code>
          </pre>
        </div>
      )}

      {/* Controlled, and kept on screen when the mark scheme opens - the
          whole point of self-marking is reading your answer against the
          scheme line by line, which you can't do if it has scrolled off or
          been thrown away. Cleared on Next question. */}
      <div className="mt-4">
        <AnswerInput
          value={answer}
          onChange={setAnswer}
          subject={subject}
          rows={5}
          placeholder="Plan or write your answer, then reveal the mark scheme..."
        />
      </div>
      {revealed ? (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="mt-4 rounded-xl border border-line bg-surface p-5"
        >
          {/*
            A levelled essay is marked differently from a short question: the
            examiner places the whole answer in a band, and the band is
            decided mostly by evaluation. Showing only a list of indicative
            content would teach the wrong thing - a student can write every
            point on it and still be capped in the middle of the range for
            never weighing anything. So where a question carries levels, the
            AO split and the ladder come first, and evaluation is separated
            from knowledge rather than mixed into one list.
          */}
          {q.ao && (
            <div className="mb-4 flex flex-wrap gap-1.5">
              {Object.entries(q.ao).map(([ao, marks]) => (
                <span
                  key={ao}
                  className="rounded-full border border-line px-2 py-0.5 text-xs font-semibold text-muted"
                >
                  {ao} {marks}
                </span>
              ))}
            </div>
          )}

          {q.plan && (
            <div className="mb-4">
              <p className="text-sm font-bold text-fg">How to structure it</p>
              <ol className="mt-2 list-decimal space-y-1 pl-5">
                {q.plan.map((step, idx) => (
                  <li key={idx} className="readable text-sm text-muted">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/*
            Code has to be shown as code: monospace, and with its indentation
            intact, because in an algorithm the indentation IS the block
            structure. Rendered as prose it becomes unreadable and unmarkable.
            The container scrolls sideways on its own so a long line never
            makes the whole page scroll.
          */}
          {q.solution && (
            <div className="mb-4">
              <p className="text-sm font-bold text-fg">Model answer</p>
              <pre className="mt-2 overflow-x-auto rounded-lg border border-line bg-paper-soft/40 p-3 text-xs leading-relaxed">
                <code className="font-mono text-fg">{q.solution}</code>
              </pre>
            </div>
          )}

          {/*
            A Maths mark scheme is not a list of points - it is a sequence of
            working lines, each carrying its own code. M is method (awarded
            for the correct approach even when the arithmetic is wrong), A is
            accuracy (only available if the M before it was earned), B is a
            standalone mark. Showing the code beside each line is the whole
            point: it is how you find out that you lost one accuracy mark
            rather than the four you assumed, and which line to redo.
          */}
          {q.workedSolution && (
            <div className="mb-4">
              <p className="text-sm font-bold text-fg">
                Worked solution <span className="font-normal text-muted"> - mark yourself line by line</span>
              </p>
              <div className="mt-2 overflow-x-auto rounded-lg border border-line">
                <table className="w-full border-collapse text-sm">
                  <tbody>
                    {q.workedSolution.map((step, idx) => (
                      <tr key={idx} className="border-b border-line last:border-b-0">
                        <td className="px-3 py-2 align-top text-fg">
                          {step.part && (
                            <span className="mr-2 font-bold text-muted">{step.part}</span>
                          )}
                          <span className="readable">{step.line}</span>
                        </td>
                        <td className="w-16 px-3 py-2 text-right align-top font-mono text-xs font-semibold text-brand-strong">
                          {step.mark}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {q.totalCheck && (
                <p className="mt-2 text-xs text-muted">{q.totalCheck}</p>
              )}
            </div>
          )}

          {q.traceHeaders && (
            <div className="mb-4">
              <p className="text-sm font-bold text-fg">Completed trace table</p>
              <div className="mt-2 overflow-x-auto">
                <table className="w-full border-collapse text-xs">
                  <thead>
                    <tr>
                      {q.traceHeaders.map((h) => (
                        <th
                          key={h}
                          className="border border-line bg-paper-soft/40 px-2 py-1.5 text-left font-bold text-fg"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {q.traceRows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td key={ci} className="border border-line px-2 py-1.5 font-mono text-muted">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <p className="text-sm font-bold text-fg">
            {q.evaluation
              ? 'Knowledge, application and analysis'
              : q.kind === 'code' || q.kind === 'trace'
                ? 'How the marks are awarded'
                : 'Mark scheme'}
          </p>
          <ul className="mt-2 space-y-2">
            {q.markScheme.map((m, idx) => (
              <li key={idx} className="flex gap-2 text-sm">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span className="readable text-muted">{m}</span>
              </li>
            ))}
          </ul>

          {q.evaluation && (
            <div className="mt-4">
              <p className="text-sm font-bold text-fg">
                Evaluation <span className="font-normal text-muted"> - where most of the marks are</span>
              </p>
              <ul className="mt-2 space-y-2">
                {q.evaluation.map((m, idx) => (
                  <li key={idx} className="flex gap-2 text-sm">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" />
                    <span className="readable text-muted">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {q.judgement && (
            <div className="mt-4 rounded-lg border border-line bg-paper-soft/40 p-3">
              <p className="text-xs font-bold uppercase tracking-wide text-muted">A supported judgement</p>
              <p className="readable mt-1 text-sm text-fg">{q.judgement}</p>
            </div>
          )}

          {/* Where the marks are actually lost, which the model answer alone
              never shows: an off-by-one, a return inside the loop, a check
              made after the change instead of before it. */}
          {q.pitfalls && (
            <div className="mt-4">
              <p className="text-sm font-bold text-fg">
                Where marks get lost <span className="font-normal text-muted"> - check your answer for these</span>
              </p>
              <ul className="mt-2 space-y-2">
                {q.pitfalls.map((m, idx) => (
                  <li key={idx} className="flex gap-2 text-sm">
                    <Icon name="x" className="mt-0.5 h-4 w-4 shrink-0 text-r2-shaky" />
                    <span className="readable text-muted">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {q.levels && (
            <div className="mt-4">
              <p className="text-sm font-bold text-fg">Mark yourself against the levels</p>
              <div className="mt-2 space-y-1.5">
                {q.levels.map((lv) => (
                  <div key={lv.band} className="rounded-lg border border-line p-2.5">
                    <p className="text-xs font-bold text-fg">
                      {lv.band} <span className="text-muted">({lv.marks})</span>
                    </p>
                    <p className="readable mt-0.5 text-xs text-muted">{lv.descriptor}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Always shown here, unlike the MCQ runner. Exam questions are
              worked one at a time and slowly, so there is no repetition
              problem, and the mark scheme is exactly where you check your
              own diagram. The heading distinguishes the two cases: a
              question that says "using a diagram" awards marks for it, and
              you can't mark that part of your answer without seeing one. */}
          {q.diagram && (
            <div className="mt-4">
              <p className="text-xs font-bold uppercase tracking-wide text-muted">
                {q.diagramExpected
                  ? 'The diagram the examiner expects'
                  : 'The diagram behind this chapter'}
              </p>
              <Diagram id={q.diagram} />
            </div>
          )}

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

function BlurtRunner({ pack, chapter }) {
  const [revealed, setRevealed] = useState(false)
  const [blurt, setBlurt] = useState('')
  // Blurting a chapter means recalling its diagrams too, so they belong in
  // the checklist. Only for a specific chapter - a whole-subject blurt
  // would dump twenty-odd diagrams on the page.
  const diagrams = chapter ? diagramsForChapter(pack.name, chapter) : []
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
      <div className="mt-4">
        <AnswerInput
          value={blurt}
          onChange={setBlurt}
          subject={pack.name}
          rows={7}
          placeholder="Start blurting..."
        />
      </div>
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
          {diagrams.length > 0 && (
            <div className="mt-5 border-t border-line pt-4">
              <p className="text-sm font-bold text-fg">
                Diagram{diagrams.length > 1 ? 's' : ''} you should have drawn
              </p>
              {diagrams.map((id) => (
                <Diagram key={id} id={id} />
              ))}
            </div>
          )}
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
      return <ExamRunner items={pack.examQuestions} onAnswer={onAnswer} empty={empty} subject={pack.name} />
    case 'essay-plans':
      // The planner keeps its own paper/topic filters and its own drafts,
      // so it takes the whole bank rather than a chapter-scoped slice.
      return pack.essayBank?.length ? (
        <EssayPlanner items={pack.essayBank} />
      ) : (
        <Empty label="essay plans" {...empty} />
      )
    case 'blurting':
      return <BlurtRunner pack={pack} chapter={chapter} />
    case 'active-recall':
      return <FlashcardRunner cards={pack.flashcards} recall empty={empty} />
    case 'flashcards':
    default:
      return <FlashcardRunner cards={pack.flashcards} empty={empty} />
  }
}
