import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Chip from '@/components/ui/Chip'
import SketchPad from '@/components/ui/SketchPad'
import StudyTimer from '@/components/ui/StudyTimer'
import Diagram from '@/components/diagrams'
import { useApp } from '@/context/AppProvider'
import { MARK_SPLIT, templateFor, timingFor, timingForMarks } from '@/constants/econ-essay-bank'
import { ECON_ESSAY_ANSWERS } from '@/constants/econ-essay-answers'
import { fadeInUp } from '@/lib/motion'

/*
  The Economics essay PLANNER - a bank of Section B / Section C style
  questions, each opening into a planning template that is scaled to how
  Edexcel actually marks that mark value (see econ-essay-bank.js for the
  split table and the scaling rule).

  Two views, one component:

    bank     filters (level / paper / section / marks / topic), the questions
             grouped by spec topic, a random pick for quick practice, and a
             reference table of the KAA-vs-evaluation split.
    planner  one question, its mark split and timing, a timer you start
             yourself, and the template steps as short text boxes - with a
             drawing pad on the Diagram step, because the exam wants the
             diagram drawn, not described. Autosaves against the question id.

  Every question also has a developed answer (econ-essay-answers.js): the
  diagram the examiner expects with its shift read off the labels, an
  intro, the chains of analysis in a table beside the evaluation that
  qualifies each one, a judgement where the marks call for one, and
  indicative content in mark-scheme style. It sits behind a reveal, below
  the plan boxes, so the plan comes first and the answer is the check on
  it. Nothing is auto-marked: an auto-marker that scores three lines of
  notes would be guessing, and the split table plus the indicative
  content is what a student needs to mark their own plan honestly.
*/

const SECTION_LABEL = {
  B: 'Section B',
  C: 'Section C',
  structured: 'Structured',
  essay: 'Essay',
}

const paperShort = (q) => `${q.level === 'AS' ? 'AS ' : ''}${q.paperName.split(':')[0]}`

// The five canonical steps, in order, so the planner can say which ones a
// question has dropped and why - the scaling is the lesson.
const OMISSION_REASON = {
  diagram: 'no diagram step - under 10 marks and the question does not ask for one',
  eval1: 'no evaluation step - this mark value carries no evaluation marks',
  conclusion: 'no conclusion - only 20- and 25-mark questions need one',
}

const relative = (ts) => {
  const days = Math.floor((Date.now() - ts) / 86400000)
  if (days <= 0) return 'today'
  if (days === 1) return 'yesterday'
  if (days < 7) return `${days} days ago`
  return new Date(ts).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })
}

const EMPTY_FILTERS = { level: null, paper: null, section: null, marks: null, topic: null }

/*
  Search matches word by word, not as one literal phrase - "trade wto",
  "wto trade" and "trading blocs" all find the same question, which a
  plain .includes(search) never could once the words are in a different
  order or a different inflection. Every query word has to match SOME word
  in the question/topic (a shared prefix either direction, or the same
  crude stem: -ies/-es/-s stripped), so "tariffs" finds "tariff" and
  "oligopolies" finds "Oligopoly" without a real dictionary or a search
  index - the bank is a few hundred short strings, not a corpus.
*/
/*
  Ordinary English words carry no search signal, and leaving them in the
  target list was actively harmful: every question contains "and", so the
  reverse rule below matched "demand" against it and a search for demand
  returned 58 of 140 questions, 47 of which never mention demand at all.
  "the" was worse - it made "theory" return 122 questions.
*/
const STOPWORDS = new Set([
  'a','i','is','in','on','at','to','of','as','by','or','an','if','so','no','do','be','we','he','my','me','us','it',
  'the','and','for','are','but','not','you','all','can','her','was','one','our','out','has','had','how','its','who',
  'did','his','she','him','use','two','way','new','any','see','say','get','got','put','set','may','per','via','off',
  'been','have','this','that','with','from','they','will','more','over','also','back','when','make','like','time',
  'just','know','take','into','year','your','some','them','than','then','look','only','come','even','want','give',
  'most','such','both','each','same','down','very','much','many','made','does','done','were','must','upon','onto',
  'what','which','their','there','would','could','shall','these','being','doing','under','while','about','after',
  'above','below','since','until','other','using',
  'because','through','against','between','during','without','before','within','across','having','should','might',
])
const stem = (w) =>
  w
    .replace(/ies$/, 'y')
    // Only strip "es" where it is a real plural ending (boxes, taxes,
    // churches). Stripping it unconditionally turned "prices" into "pric"
    // while "price" stayed "price", so the two never stemmed alike.
    .replace(/(s|x|z|ch|sh)es$/, '$1')
    .replace(/s$/, '')
const tokenize = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    // Drop 1-letter fragments - mostly the "s" an apostrophe leaves behind
    // ("economy's" -> "economy", "s"). Left in, a single character is a
    // substring of almost every query word, so it silently matched
    // anything: searching "oligopolies" was one apostrophe away from also
    // matching every question containing an unrelated possessive.
    .filter((w) => w.length > 1 && !STOPWORDS.has(w))
const wordsMatch = (queryWord, targetWord) =>
  // The typed word appears inside a word in the question: "employment"
  // finds "unemployment", "rate" finds "rates".
  targetWord.includes(queryWord) ||
  // The typed word is a longer form of a word in the question, so it has
  // to START with it: "taxation" finds "tax", "globalisation" finds
  // "global". This was plain .includes(), which also matched any short
  // word buried anywhere inside the query - "corporate" contains "rate",
  // so searching it returned every question about exchange rates.
  (queryWord.length >= 3 && targetWord.length >= 3 && queryWord.startsWith(targetWord)) ||
  stem(targetWord) === stem(queryWord)
const questionMatchesSearch = (q, queryWords) => {
  if (!queryWords.length) return true
  const targetWords = tokenize(`${q.question} ${q.topicName} ${q.topicCode}`)
  return queryWords.every((qw) => targetWords.some((tw) => wordsMatch(qw, tw)))
}

// Micro / macro / synoptic, read off the paper code: Paper 1 (AS and
// A-level) is Themes 1 and 3, Paper 2 is Themes 2 and 4, Paper 3 is both.
const STRANDS = [
  { id: 'micro', label: 'Microeconomics', sub: 'Paper 1 · Themes 1 & 3', test: (q) => q.paperCode.endsWith('/01') },
  { id: 'macro', label: 'Macroeconomics', sub: 'Paper 2 · Themes 2 & 4', test: (q) => q.paperCode.endsWith('/02') },
  { id: 'synoptic', label: 'Synoptic', sub: 'Paper 3 · micro + macro', test: (q) => q.paperCode.endsWith('/03') },
  { id: 'all', label: 'Everything', sub: 'Micro, macro and synoptic', test: () => true },
]
const strandOf = (q) => STRANDS.find((s) => s.id !== 'all' && s.test(q))

/* ------------------------------------------------------------------ bank */

function MarkSplitTable() {
  return (
    <details className="group mt-8 rounded-2xl border border-line bg-surface">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-3.5 text-sm font-bold text-fg [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2">
          <Icon name="target" className="h-4 w-4 text-brand-strong" />
          How the marks split, and how long to spend
        </span>
        <Icon
          name="chevronDown"
          className="h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-180"
        />
      </summary>
      <div className="border-t border-line px-5 pb-5 pt-4">
        <p className="readable text-sm leading-relaxed text-muted">
          Every question is scored against two pools: Knowledge, Application and Analysis
          together, and Evaluation on its own. The split decides the plan - how many chains,
          how many evaluative points, whether a conclusion is needed at all. Timing is roughly
          1.3 to 1.5 minutes a mark; allow another 3 to 5 minutes on Paper 3 to read the case.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[26rem] text-sm">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-wide text-muted">
                <th className="py-2 pr-3">Marks</th>
                <th className="py-2 pr-3">KAA</th>
                <th className="py-2 pr-3">Evaluation</th>
                <th className="py-2 pr-3">Time</th>
                <th className="py-2">Typically</th>
              </tr>
            </thead>
            <tbody className="tabular-nums">
              {Object.entries(MARK_SPLIT).map(([marks, row]) => {
                const t = timingForMarks(Number(marks))
                return (
                  <tr key={marks} className="border-t border-line text-fg">
                    <td className="py-2 pr-3 font-bold">{marks}</td>
                    <td className="py-2 pr-3">{row.kaa}</td>
                    <td className="py-2 pr-3">{row.evaluation === 0 ? '-' : row.evaluation}</td>
                    <td className="py-2 pr-3 whitespace-nowrap">
                      {t.lo}-{t.hi} min
                    </td>
                    <td className="py-2 text-muted">{row.typical}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </details>
  )
}

function FilterGroup({ label, children, className = '' }) {
  return (
    <div className={className}>
      <p className="mb-1.5 text-[0.68rem] font-bold uppercase tracking-widest text-muted">{label}</p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  )
}

function Bank({ items, filtered, drafts, filters, setFilters, search, setSearch, strand, setStrand, onOpen, onRandom }) {
  const inStrand = useMemo(() => items.filter(STRANDS.find((s) => s.id === strand).test), [items, strand])
  const levels = useMemo(() => [...new Set(inStrand.map((q) => q.level))], [inStrand])
  const papers = useMemo(() => {
    const seen = new Map()
    for (const q of inStrand) if (!seen.has(q.paperCode)) seen.set(q.paperCode, paperShort(q))
    return [...seen.entries()]
  }, [inStrand])
  const sections = useMemo(() => [...new Set(inStrand.map((q) => q.section))], [inStrand])
  const markValues = useMemo(() => [...new Set(inStrand.map((q) => q.marks))].sort((a, b) => a - b), [inStrand])
  const topics = useMemo(() => {
    const seen = new Map()
    for (const q of inStrand) {
      const key = `${q.topicCode}|${q.topicName}`
      if (!seen.has(key)) seen.set(key, q)
    }
    return [...seen.entries()]
  }, [inStrand])

  const groups = useMemo(() => {
    const out = []
    const byKey = new Map()
    for (const q of filtered) {
      const key = `${q.topicCode}|${q.topicName}`
      if (!byKey.has(key)) {
        const g = { key, code: q.topicCode, name: q.topicName, items: [] }
        byKey.set(key, g)
        out.push(g)
      }
      byKey.get(key).items.push(q)
    }
    return out
  }, [filtered])

  const anyFilter = Object.values(filters).some(Boolean) || Boolean(search)
  const toggle = (k, v) => setFilters((f) => ({ ...f, [k]: f[k] === v ? null : v }))
  const clearAll = () => {
    setFilters(EMPTY_FILTERS)
    setSearch('')
  }
  const planned = filtered.filter((q) => drafts[q.id]).length
  const plannedAll = items.filter((q) => drafts[q.id]).length

  return (
    <motion.div variants={fadeInUp} initial="hidden" animate="show" exit={{ opacity: 0 }}>
      {/* Header */}
      <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-strong">
          Essay plans · Edexcel Economics A
        </p>
        <h2 className="mt-2 text-2xl font-bold leading-tight text-fg sm:text-[1.75rem]">
          Plan the answer before you write it.
        </h2>
        <p className="readable mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
          Sixty-four Section B and Section C style questions, one or two for every specification
          topic. Open one, plan it against the mark split, sketch the diagram, then reveal the
          developed answer to check your plan. Everything you write stays on this device.
        </p>
        <dl className="mt-5 grid grid-cols-3 divide-x divide-line rounded-xl border border-line bg-page">
          <div className="px-4 py-3">
            <dt className="text-[0.65rem] font-bold uppercase tracking-wide text-muted">Questions</dt>
            <dd className="mt-0.5 text-xl font-extrabold tabular-nums text-fg">{items.length}</dd>
          </div>
          <div className="px-4 py-3">
            <dt className="text-[0.65rem] font-bold uppercase tracking-wide text-muted">Planned</dt>
            <dd className="mt-0.5 text-xl font-extrabold tabular-nums text-success">{plannedAll}</dd>
          </div>
          <div className="px-4 py-3">
            <dt className="text-[0.65rem] font-bold uppercase tracking-wide text-muted">Papers</dt>
            <dd className="mt-0.5 text-xl font-extrabold tabular-nums text-fg">{papers.length}</dd>
          </div>
        </dl>
      </div>

      {/* Micro / macro / synoptic */}
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4" role="tablist" aria-label="Micro, macro or synoptic">
        {STRANDS.map((st) => {
          const n = items.filter(st.test).length
          const on = strand === st.id
          return (
            <button
              key={st.id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => {
                setStrand(st.id)
                setFilters(EMPTY_FILTERS)
              }}
              className={`rounded-2xl border p-3.5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                on ? 'border-brand bg-brand-soft' : 'border-line bg-surface hover:border-brand'
              }`}
            >
              <span className={`block text-sm font-bold ${on ? 'text-brand-strong' : 'text-fg'}`}>{st.label}</span>
              <span className="mt-0.5 block text-[0.7rem] font-medium text-muted">{st.sub}</span>
              <span className="mt-1.5 block text-xs font-semibold tabular-nums text-muted">
                {n} {n === 1 ? 'question' : 'questions'}
              </span>
            </button>
          )
        })}
      </div>

      {/* Filters */}
      <section className="mt-4 rounded-2xl border border-line bg-surface p-5" aria-label="Filter questions">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-bold text-fg">Narrow it down</p>
          {anyFilter && (
            <button
              type="button"
              onClick={clearAll}
              className="text-xs font-semibold text-brand-strong hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        <div className="mt-4">
          <label htmlFor="essay-search" className="sr-only">
            Search questions
          </label>
          <div className="relative">
            <Icon
              name="search"
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            />
            <input
              id="essay-search"
              type="search"
              value={search}
              onChange={(e) => {
                const value = e.target.value
                setSearch(value)
                // Typing a search is a request to look everywhere - the
                // micro/macro/synoptic tabs above are strand filters, not
                // part of the question text, so a query like "globalisation"
                // typed while "Microeconomics" happened to be selected
                // silently found nothing even though the question exists,
                // just in Paper 2. A real search box shouldn't need the
                // right tab picked first.
                if (value.trim() && strand !== 'all') setStrand('all')
              }}
              placeholder="Search questions by keyword, e.g. &ldquo;monopoly&rdquo; or &ldquo;exchange rate&rdquo;"
              className="w-full rounded-xl border border-line bg-page py-2.5 pl-10 pr-3 text-sm font-medium text-fg placeholder:text-muted focus:border-brand focus:outline-none"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg p-1 text-muted transition-colors hover:bg-danger/10 hover:text-danger"
              >
                <Icon name="x" className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <FilterGroup label="Level">
            {levels.map((l) => (
              <Chip key={l} size="sm" selected={filters.level === l} onClick={() => toggle('level', l)}>
                {l}
              </Chip>
            ))}
          </FilterGroup>
          <FilterGroup label="Marks">
            {markValues.map((m) => (
              <Chip key={m} size="sm" selected={filters.marks === m} onClick={() => toggle('marks', m)}>
                {m}
              </Chip>
            ))}
          </FilterGroup>
          <FilterGroup label="Paper">
            {papers.map(([code, label]) => (
              <Chip key={code} size="sm" selected={filters.paper === code} onClick={() => toggle('paper', code)}>
                {label}
              </Chip>
            ))}
          </FilterGroup>
          <FilterGroup label="Section">
            {sections.map((s) => (
              <Chip key={s} size="sm" selected={filters.section === s} onClick={() => toggle('section', s)}>
                {SECTION_LABEL[s] || s}
                {(s === 'structured' || s === 'essay') && (
                  <span className="text-[0.7em] opacity-70">Paper 3</span>
                )}
              </Chip>
            ))}
          </FilterGroup>
          <div className="sm:col-span-2">
            <label
              htmlFor="essay-topic"
              className="mb-1.5 block text-[0.68rem] font-bold uppercase tracking-widest text-muted"
            >
              Topic
            </label>
            <select
              id="essay-topic"
              value={filters.topic || ''}
              onChange={(e) => setFilters((f) => ({ ...f, topic: e.target.value || null }))}
              className="w-full rounded-xl border border-line bg-page px-3 py-2 text-sm font-medium text-fg focus:border-brand focus:outline-none"
            >
              <option value="">All topics</option>
              {topics.map(([key, q]) => (
                <option key={key} value={key}>
                  {q.topicCode} · {q.topicName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Result strip */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">
          <span className="text-base font-bold tabular-nums text-fg">{filtered.length}</span>
          {filtered.length === 1 ? ' question' : ' questions'}
          {anyFilter ? ' match' : ''}
          {planned > 0 && (
            <>
              {' · '}
              <span className="font-semibold tabular-nums text-success">{planned} planned</span>
            </>
          )}
        </p>
        <Button size="sm" onClick={onRandom} disabled={!filtered.length}>
          <Icon name="shuffle" className="h-4 w-4" />
          Random question
        </Button>
      </div>

      {filtered.length === 0 ? (
        <p className="readable mt-8 text-center text-sm text-muted">
          Nothing matches those filters together - loosen one.
        </p>
      ) : (
        <div className="mt-4 space-y-7">
          {groups.map((g) => (
            <section key={g.key} aria-label={`${g.code} ${g.name}`}>
              <h3 className="flex items-center gap-2.5 text-sm font-bold text-fg">
                <span className="rounded-md bg-brand-soft px-2 py-0.5 text-xs font-extrabold tabular-nums text-brand-strong">
                  {g.code}
                </span>
                {g.name}
                {strand === 'all' && (
                  <span className="rounded-full border border-line px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-muted">
                    {strandOf(g.items[0])?.label}
                  </span>
                )}
                <span className="ml-auto text-xs font-medium text-muted">
                  {g.items.length} {g.items.length === 1 ? 'question' : 'questions'}
                </span>
              </h3>
              <ul className="mt-2.5 space-y-2.5">
                {g.items.map((q) => {
                  const draft = drafts[q.id]
                  return (
                    <li key={q.id}>
                      <button
                        type="button"
                        onClick={() => onOpen(q.id)}
                        className="group flex w-full items-stretch gap-4 rounded-2xl border border-line bg-surface p-4 text-left transition-[border-color,background-color,transform] hover:-translate-y-px hover:border-brand hover:bg-brand-soft/30 focus:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <span className="flex w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-paper-soft text-paper">
                          <span className="text-lg font-extrabold leading-none tabular-nums">{q.marks}</span>
                          <span className="mt-0.5 text-[0.58rem] font-bold uppercase leading-none tracking-wide">
                            marks
                          </span>
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-muted">
                            <span>{paperShort(q)}</span>
                            <span aria-hidden="true">·</span>
                            <span>{SECTION_LABEL[q.section] || q.section}</span>
                            {draft && (
                              <span className="ml-auto flex items-center gap-1 font-semibold text-success">
                                <Icon name="check" className="h-3.5 w-3.5" />
                                Planned {relative(draft.updatedAt)}
                              </span>
                            )}
                          </span>
                          <span className="readable mt-1.5 block text-[0.95rem] leading-snug text-fg">
                            {q.question}
                          </span>
                        </span>
                        <span className="hidden shrink-0 items-center self-center text-muted transition-colors group-hover:text-brand-strong sm:flex">
                          <Icon name="chevronRight" className="h-5 w-5" />
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </section>
          ))}
        </div>
      )}

      <MarkSplitTable />
    </motion.div>
  )
}

/* --------------------------------------------------------------- planner */

const PLACEHOLDER = {
  unpack: 'Command word · key terms to define · what it is really asking',
  diagram: 'Which diagram · axes and curves · the shift, e.g. "AD₁ → AD₂, price level P₁ → P₂"',
  kaa: 'Point → because → which means → so … linked back to the question',
  eval: 'It depends on … magnitude / time lag / the assumption behind it',
  conclusion: 'Overall judgement, and the reason that side wins',
}

function Stat({ label, value, unit, note, accent }) {
  return (
    <div className="px-3 py-2.5 sm:px-4">
      <dt className="text-[0.62rem] font-bold uppercase tracking-widest text-muted">{label}</dt>
      <dd className={`mt-0.5 text-xl font-extrabold leading-tight tabular-nums ${accent || 'text-fg'}`}>
        {value}
        {unit && <span className="ml-1 text-xs font-semibold text-muted">{unit}</span>}
        {note && <span className="mt-0.5 block text-[0.68rem] font-medium leading-snug text-muted">{note}</span>}
      </dd>
    </div>
  )
}

function Planner({ q, index, total, mode, onBack, onPrev, onNext, onRandom }) {
  const { essayPlanDrafts, saveEssayPlanDraft, clearEssayPlanDraft } = useApp()
  const { split, steps } = useMemo(() => templateFor(q), [q])
  const timing = timingFor(q)

  // Local copy of the draft so typing is instant; writes to central state
  // are debounced, and flushed on unmount or when the question changes so
  // no keystroke is ever lost to navigation.
  const [draft, setDraft] = useState(() => essayPlanDrafts[q.id] || {})
  const [status, setStatus] = useState('idle') // idle | saving | saved
  const [confirmClear, setConfirmClear] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const pending = useRef(null)
  const timer = useRef(null)
  // Refs, not deps: the effect below must re-run only when the QUESTION
  // changes, never because central state or the setter identity did.
  const saveRef = useRef(saveEssayPlanDraft)
  saveRef.current = saveEssayPlanDraft
  const draftsRef = useRef(essayPlanDrafts)
  draftsRef.current = essayPlanDrafts

  // Takes the id explicitly rather than reading q.id: by the time the
  // cleanup below runs on a question change, q is already the NEW one.
  const flush = useCallback((id) => {
    if (!pending.current) return
    saveRef.current(id, pending.current)
    pending.current = null
    setStatus('saved')
  }, [])

  useEffect(() => {
    const id = q.id
    setDraft(draftsRef.current[id] || {})
    setStatus('idle')
    setConfirmClear(false)
    setRevealed(false)
    return () => {
      clearTimeout(timer.current)
      flush(id)
    }
  }, [q.id, flush])

  const edit = (key, value) => {
    const id = q.id
    setDraft((d) => ({ ...d, [key]: value }))
    pending.current = { ...(pending.current || {}), [key]: value }
    setStatus('saving')
    clearTimeout(timer.current)
    timer.current = setTimeout(() => flush(id), 500)
  }

  const clear = () => {
    clearTimeout(timer.current)
    pending.current = null
    clearEssayPlanDraft(q.id)
    setDraft({})
    setStatus('idle')
    setConfirmClear(false)
  }

  // The sketch is stored as JSON in the same string-valued draft as the
  // text boxes, so one persistence path covers both. An empty pad saves
  // as '' so a cleared drawing does not count as a plan.
  const sketch = useMemo(() => {
    try {
      return draft.sketch ? JSON.parse(draft.sketch) : null
    } catch {
      return null
    }
  }, [draft.sketch])
  const onSketch = (next) => edit('sketch', next.strokes.length ? JSON.stringify(next) : '')

  const hasText = Object.values(draft).some((v) => typeof v === 'string' && v.trim())
  const omitted = ['diagram', 'eval1', 'conclusion'].filter((k) => !steps.some((s) => s.key === k))

  const timerPresets = [
    { label: 'Plan · 4 min', seconds: 4 * 60 },
    { label: `Write · ${timing.lo} min`, seconds: timing.lo * 60 },
    { label: `Write · ${timing.hi} min`, seconds: timing.hi * 60 },
  ]

  const nav =
    mode === 'random' ? (
      <Button variant="secondary" size="sm" onClick={onRandom}>
        <Icon name="shuffle" className="h-4 w-4" />
        Another random
      </Button>
    ) : (
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm" onClick={onPrev} disabled={total < 2} aria-label="Previous question">
          <Icon name="arrowLeft" className="h-4 w-4" />
          Prev
        </Button>
        <span className="min-w-[4rem] text-center text-sm font-medium tabular-nums text-muted">
          {index + 1} / {total}
        </span>
        <Button variant="secondary" size="sm" onClick={onNext} disabled={total < 2} aria-label="Next question">
          Next
          <Icon name="arrowRight" className="h-4 w-4" />
        </Button>
      </div>
    )

  return (
    <motion.div key={q.id} variants={fadeInUp} initial="hidden" animate="show" exit={{ opacity: 0 }}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <Icon name="arrowLeft" className="h-4 w-4" />
          All questions
        </Button>
        {nav}
      </div>

      {/* The question */}
      <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-surface">
        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap gap-1.5">
            {[
              q.level,
              `${paperShort(q)} · ${q.paperName.split(': ')[1]}`,
              SECTION_LABEL[q.section] || q.section,
              `${q.topicCode} ${q.topicName}`,
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-page px-2.5 py-0.5 text-xs font-medium text-muted"
              >
                {t}
              </span>
            ))}
          </div>
          <h2 className="readable mt-4 text-xl font-bold leading-snug text-fg sm:text-2xl">{q.question}</h2>
        </div>
        <dl className="grid grid-cols-2 divide-x divide-line border-t border-line bg-page sm:grid-cols-4">
          <Stat label="Marks" value={q.marks} accent="text-paper" />
          <Stat label="KAA" value={split.kaa} note="knowledge · application · analysis" accent="text-brand-strong" />
          <Stat
            label="Evaluation"
            value={split.evaluation === 0 ? '-' : split.evaluation}
            note={split.evaluation === 0 ? 'none at this mark value' : 'where the top band is decided'}
            accent="text-r2-shaky"
          />
          <Stat label="Writing time" value={`${timing.lo}-${timing.hi}`} unit="min" note={timing.note} />
        </dl>
      </div>

      {/* Timer, manual */}
      <div className="mt-4">
        <StudyTimer presets={timerPresets} resetKey={q.id} />
      </div>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-2">
        <div>
          <h3 className="text-base font-bold text-fg">Your plan</h3>
          <p className="text-xs text-muted">
            {steps.length} steps for {q.marks} marks · short notes, not sentences
          </p>
        </div>
        <p className="text-xs font-semibold text-muted" aria-live="polite">
          {status === 'saving' && 'Saving…'}
          {status === 'saved' && (
            <span className="flex items-center gap-1 text-success">
              <Icon name="check" className="h-3.5 w-3.5" />
              Saved on this device
            </span>
          )}
          {status === 'idle' &&
            hasText &&
            `Saved · edited ${relative(essayPlanDrafts[q.id]?.updatedAt || Date.now())}`}
        </p>
      </div>

      <ol className="mt-3 space-y-3">
        {steps.map((step, n) => (
          <li key={step.key} className="rounded-2xl border border-line bg-surface p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-extrabold tabular-nums text-on-brand">
                {n + 1}
              </span>
              <div className="min-w-0 flex-1">
                <label htmlFor={`plan-${q.id}-${step.key}`} className="block text-[0.95rem] font-bold text-fg">
                  {step.title}
                </label>
                <p className="readable mt-0.5 text-xs leading-relaxed text-muted">{step.hint}</p>
              </div>
            </div>
            <textarea
              id={`plan-${q.id}-${step.key}`}
              rows={step.rows}
              value={draft[step.key] || ''}
              onChange={(e) => edit(step.key, e.target.value)}
              placeholder={PLACEHOLDER[step.key.replace(/\d$/, '')]}
              className="mt-3 w-full resize-y rounded-xl border border-line bg-page px-3.5 py-2.5 text-[0.95rem] leading-relaxed text-fg placeholder:text-muted focus:border-brand focus:outline-none"
            />
            {step.key === 'diagram' && (
              <SketchPad value={sketch} onChange={onSketch} label="Or draw it - mouse, finger or pencil" />
            )}
          </li>
        ))}
      </ol>

      {omitted.length > 0 && (
        <p className="readable mt-3 text-xs leading-relaxed text-muted">
          <span className="font-semibold text-fg">Scaled to {q.marks} marks: </span>
          {omitted.map((k) => OMISSION_REASON[k]).join('; ')}.
        </p>
      )}

      {ECON_ESSAY_ANSWERS[q.id] &&
        (revealed ? (
          <DevelopedAnswer
            q={q}
            split={split}
            answer={ECON_ESSAY_ANSWERS[q.id]}
            onHide={() => setRevealed(false)}
          />
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-line p-5 text-center">
            <p className="readable mx-auto text-sm leading-relaxed text-muted">
              Plan first. Then check it against a developed answer: the diagram with its shift
              read off the labels, each chain of analysis beside its evaluation, and the
              indicative content the marks depend on.
            </p>
            <div className="mt-3">
              <Button size="sm" onClick={() => setRevealed(true)}>
                <Icon name="eye" className="h-4 w-4" />
                Reveal the developed answer
              </Button>
            </div>
          </div>
        ))}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
        {hasText ? (
          confirmClear ? (
            <span className="flex flex-wrap items-center gap-2 text-sm text-muted">
              Clear this plan?
              <Button size="sm" variant="secondary" onClick={clear}>
                Yes, clear it
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setConfirmClear(false)}>
                Keep it
              </Button>
            </span>
          ) : (
            <Button size="sm" variant="ghost" onClick={() => setConfirmClear(true)}>
              <Icon name="x" className="h-4 w-4" />
              Clear plan
            </Button>
          )
        ) : (
          <span />
        )}
        {mode === 'random' ? (
          <Button size="sm" onClick={onRandom}>
            <Icon name="shuffle" className="h-4 w-4" />
            Another random
          </Button>
        ) : (
          <Button size="sm" onClick={onNext} disabled={total < 2}>
            Next question
            <Icon name="arrowRight" className="h-4 w-4" />
          </Button>
        )}
      </div>
    </motion.div>
  )
}

/* ------------------------------------------------------- developed answer */

/*
  A diagram attached to one row of the table, full width so it stays
  legible, with a header that says which side of the row it belongs to:
  blue for the chain of analysis (KAA marks), amber for the evaluation.
  The numbered strip inside the frame (see AnnotationContext) reads the
  shift off the labels; the note under it says what to show for this
  particular question.
*/
function DiagramBand({ side, chain, d }) {
  const evalSide = side === 'evaluation'
  return (
    <div className={`essay-band ${evalSide ? 'essay-band-eval' : 'essay-band-kaa'}`}>
      <p className="essay-band-head">
        <Icon name={evalSide ? 'target' : 'paper'} className="h-3.5 w-3.5 shrink-0" />
        {evalSide
          ? `Diagram for the EVALUATION of chain ${chain}`
          : `Diagram for chain ${chain} - analysis`}
      </p>
      <Diagram id={d.id} annotations={d.steps} />
      {d.note && (
        <p className="readable -mt-2 px-1 text-sm leading-relaxed text-fg">
          <span className="font-bold">For this question, show: </span>
          {d.note}
        </p>
      )}
    </div>
  )
}

/*
  The answer is laid out in the order a marker reads an essay: set-up and
  definitions, the diagram, the chains with their evaluation, the
  judgement, then the indicative content as a checklist. The table is the
  centre of it - analysis on the left, the evaluation that qualifies it on
  the right, one row per chain - because the split between those two pools
  is how every one of these questions is scored.
*/
function DevelopedAnswer({ q, split, answer, onHide }) {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      className="mt-8 rounded-2xl border border-line bg-surface p-5 sm:p-6"
      aria-label="Developed answer"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-strong">
            Developed answer · {q.marks} marks
          </p>
          <p className="readable mt-1 text-sm leading-relaxed text-muted">
            KAA {split.kaa}
            {split.evaluation > 0 && <> · Evaluation {split.evaluation}</>}. Written to the
            specification in the layout of a Pearson scheme; the question is original, so the
            indicative content is ours.
          </p>
        </div>
        <Button size="sm" variant="ghost" onClick={onHide}>
          <Icon name="eyeOff" className="h-4 w-4" />
          Hide
        </Button>
      </div>

      <h3 className="mt-6 text-base font-bold text-fg">Set up the answer</h3>
      <p className="readable mt-2 text-[0.95rem] leading-relaxed text-fg">{answer.intro}</p>


      <div className="mt-6">
        <h3 className="text-base font-bold text-fg">Analysis beside evaluation</h3>
        <p className="readable mt-1 text-xs leading-relaxed text-muted">
          One chain of reasoning per row. The left column earns the KAA marks, the right column
          the evaluation marks - and the right column is what separates a top-band answer. The
          diagrams sit under the row they support: blue for a chain of analysis, amber for an
          evaluation. The numbered strip inside each frame reads the shift off the labels -
          write those sentences beside the diagram in the exam.
        </p>
        <div className="mt-3 space-y-3">
          <div className="hidden sm:grid sm:grid-cols-2 sm:gap-3">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-strong">
              Analysis · KAA
            </p>
            <p className="text-xs font-bold uppercase tracking-wide text-r2-shaky">Evaluation</p>
          </div>
          {answer.rows.map((row, i) => (
            <div key={i} className="space-y-3">
              <div className="essay-row">
                <div className="essay-cell essay-cell-kaa">
                  <span className="essay-cell-label">Chain {i + 1}</span>
                  {row.analysis}
                </div>
                <div className="essay-cell essay-cell-eval">
                  <span className="essay-cell-label">Evaluate chain {i + 1}</span>
                  {row.evaluation}
                </div>
              </div>
              {row.analysisDiagrams.map((d) => (
                <DiagramBand key={`a-${d.id}`} side="analysis" chain={i + 1} d={d} />
              ))}
              {row.evaluationDiagrams.map((d) => (
                <DiagramBand key={`e-${d.id}`} side="evaluation" chain={i + 1} d={d} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {answer.conclusion && (
        <div className="mt-6 rounded-xl border border-brand/40 bg-brand-soft/50 p-4 sm:p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-strong">
            Justified judgement
          </p>
          <p className="readable mt-2 text-[0.95rem] leading-relaxed text-fg">{answer.conclusion}</p>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-base font-bold text-fg">Indicative content - what the marks are for</h3>
        <p className="readable mt-1 text-xs leading-relaxed text-muted">
          Tick these off against your plan. A full-mark answer hits most of the first list and
          two developed points from the second.
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-page p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-strong">
              Knowledge · application · analysis
            </p>
            <ul className="mt-2 space-y-2">
              {answer.markScheme.kaa.map((pt) => (
                <li key={pt} className="flex gap-2 text-sm leading-relaxed">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-brand-strong" />
                  <span className="readable text-fg">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="essay-cell essay-cell-eval">
            <p className="text-xs font-bold uppercase tracking-wide text-r2-shaky">Evaluation</p>
            <ul className="mt-2 space-y-2">
              {answer.markScheme.evaluation.map((pt) => (
                <li key={pt} className="flex gap-2 text-sm leading-relaxed">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-r2-shaky" />
                  <span className="readable text-fg">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

/* ------------------------------------------------------------------ root */

export default function EssayPlanner({ items }) {
  const { essayPlanDrafts } = useApp()
  const [filters, setFilters] = useState(EMPTY_FILTERS)
  const [search, setSearch] = useState('')
  const [strand, setStrand] = useState('micro') // micro | macro | synoptic | all
  const [current, setCurrent] = useState(null) // question id, or null for the bank
  const [mode, setMode] = useState('browse') // browse | random
  const reduceMotion = useReducedMotion()

  const queryWords = useMemo(() => tokenize(search), [search])
  const filtered = useMemo(
    () =>
      items.filter(
        (q) =>
          STRANDS.find((s) => s.id === strand).test(q) &&
          (!filters.level || q.level === filters.level) &&
          (!filters.paper || q.paperCode === filters.paper) &&
          (!filters.section || q.section === filters.section) &&
          (!filters.marks || q.marks === filters.marks) &&
          (!filters.topic || `${q.topicCode}|${q.topicName}` === filters.topic) &&
          questionMatchesSearch(q, queryWords),
      ),
    [items, filters, strand, queryWords],
  )

  const open = (id) => {
    setMode('browse')
    setCurrent(id)
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  const random = () => {
    const pool = filtered.filter((q) => q.id !== current)
    const pick = (pool.length ? pool : filtered)[Math.floor(Math.random() * (pool.length || filtered.length))]
    if (!pick) return
    setMode('random')
    setCurrent(pick.id)
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  const index = filtered.findIndex((q) => q.id === current)
  const q = index >= 0 ? filtered[index] : items.find((it) => it.id === current)
  const step = (d) => {
    if (index < 0 || filtered.length < 2) return
    setCurrent(filtered[(index + d + filtered.length) % filtered.length].id)
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <div className="mx-auto max-w-3xl">
      <AnimatePresence mode="wait">
        {q ? (
          <Planner
            key="planner"
            q={q}
            index={index}
            total={filtered.length}
            mode={mode}
            onBack={() => setCurrent(null)}
            onPrev={() => step(-1)}
            onNext={() => step(1)}
            onRandom={random}
          />
        ) : (
          <Bank
            key="bank"
            items={items}
            filtered={filtered}
            drafts={essayPlanDrafts}
            filters={filters}
            setFilters={setFilters}
            search={search}
            setSearch={setSearch}
            strand={strand}
            setStrand={setStrand}
            onOpen={open}
            onRandom={random}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
