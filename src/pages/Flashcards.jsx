import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Mascot from '@/components/ui/Mascot'
import ProgressBar from '@/components/ui/ProgressBar'
import FlipCard from '@/components/ui/FlipCard'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { useApp } from '@/context/AppProvider'
import { REVISION } from '@/constants/library'

/*
  Flashcard maker (route /flashcards). Three internal views:
    - home:   browse AI decks + your saved decks, or start a new one
    - study:  flip through a chosen deck with prev / flip / next
    - create: build a deck (title + card rows) and save it to the store
*/

// One prebuilt deck per subject, mapped from the REVISION library.
const AI_DECKS = REVISION.map((pack) => ({
  id: `ai-${pack.id}`,
  title: pack.name,
  cards: pack.flashcards,
}))

function StudyView({ deck, onExit }) {
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const cards = deck.cards || []
  const total = cards.length
  const card = cards[i]

  const go = (nextIndex) => {
    setFlipped(false)
    setI(nextIndex)
  }
  const prev = () => go((i - 1 + total) % total)
  const next = () => go((i + 1) % total)

  if (!total) {
    return (
      <motion.div
        variants={fadeInUp}
        className="rounded-2xl border border-line bg-surface p-8 text-center"
      >
        <Mascot expression="happy" className="mx-auto h-20 w-20" />
        <p className="mt-3 text-lg font-semibold text-fg">This deck has no cards yet.</p>
        <p className="mt-1 text-sm text-muted">Add some cards to start studying.</p>
        <div className="mt-5">
          <Button variant="secondary" size="sm" onClick={onExit}>
            <Icon name="arrowLeft" className="h-4 w-4" />
            Back to decks
          </Button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div variants={fadeInUp}>
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-fg sm:text-2xl">{deck.title}</h2>
          <p className="text-sm text-muted">
            Card {i + 1} of {total}
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={onExit}>
          <Icon name="x" className="h-4 w-4" />
          Close
        </Button>
      </div>

      <ProgressBar value={(i + 1) / total} className="mb-6" />

      <FlipCard
        front={card.front}
        back={card.back}
        flipped={flipped}
        onFlip={() => setFlipped((f) => !f)}
      />

      <div className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-3">
        <Button variant="secondary" size="md" onClick={prev} disabled={total < 2}>
          <Icon name="arrowLeft" className="h-4 w-4" />
          Prev
        </Button>
        <Button variant="primary" size="md" onClick={() => setFlipped((f) => !f)}>
          <Icon name="refresh" className="h-4 w-4" />
          Flip
        </Button>
        <Button variant="secondary" size="md" onClick={next} disabled={total < 2}>
          Next
          <Icon name="arrowRight" className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  )
}

function CreateView({ onSave, onCancel }) {
  const [title, setTitle] = useState('')
  const [cards, setCards] = useState([
    { front: '', back: '' },
    { front: '', back: '' },
  ])

  const setCard = (index, key, value) =>
    setCards((cs) => cs.map((c, n) => (n === index ? { ...c, [key]: value } : c)))
  const addCard = () => setCards((cs) => [...cs, { front: '', back: '' }])
  const removeCard = (index) => setCards((cs) => cs.filter((_, n) => n !== index))

  const cleaned = cards
    .map((c) => ({ front: c.front.trim(), back: c.back.trim() }))
    .filter((c) => c.front && c.back)
  const canSave = title.trim() && cleaned.length > 0

  const save = () => {
    if (!canSave) return
    onSave({ id: 'd' + Date.now(), title: title.trim(), cards: cleaned })
  }

  const inputClass =
    'w-full rounded-xl border border-line bg-page px-3.5 py-2.5 text-sm text-fg placeholder:text-muted transition-colors focus:border-brand focus:outline-none'

  return (
    <motion.div variants={fadeInUp}>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-fg sm:text-2xl">New deck</h2>
          <p className="text-sm text-muted">Give it a name, then add your cards.</p>
        </div>
        <Button variant="ghost" size="sm" onClick={onCancel}>
          <Icon name="x" className="h-4 w-4" />
          Cancel
        </Button>
      </div>

      <div className="rounded-2xl border border-line bg-surface p-6">
        <label htmlFor="deck-title" className="mb-1.5 block text-sm font-semibold text-fg">
          Deck title
        </label>
        <input
          id="deck-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Cell biology key terms"
          className={inputClass}
        />
      </div>

      <div className="mt-4 space-y-3">
        {cards.map((c, index) => (
          <div key={index} className="rounded-2xl border border-line bg-surface p-4 sm:p-5">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                Card {index + 1}
              </span>
              <button
                type="button"
                onClick={() => removeCard(index)}
                disabled={cards.length < 2}
                aria-label={`Remove card ${index + 1}`}
                className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-medium text-danger transition-colors hover:bg-danger/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Icon name="x" className="h-4 w-4" />
                Remove
              </button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-muted">
                  Front (prompt)
                </label>
                <input
                  type="text"
                  value={c.front}
                  onChange={(e) => setCard(index, 'front', e.target.value)}
                  placeholder="Question or term"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-muted">
                  Back (answer)
                </label>
                <input
                  type="text"
                  value={c.back}
                  onChange={(e) => setCard(index, 'back', e.target.value)}
                  placeholder="Answer or definition"
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button variant="secondary" size="md" onClick={addCard}>
          <Icon name="plus" className="h-4 w-4" />
          Add card
        </Button>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted">
            {cleaned.length} {cleaned.length === 1 ? 'card' : 'cards'} ready
          </span>
          <Button variant="primary" size="md" onClick={save} disabled={!canSave}>
            <Icon name="check" className="h-4 w-4" />
            Save deck
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

function DeckCard({ title, subtitle, accent, onOpen, onDelete }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-brand"
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent}`}>
          <Icon name="cards" className="h-6 w-6" />
        </span>
        {onDelete && (
          <button
            type="button"
            onClick={onDelete}
            aria-label={`Delete deck ${title}`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-danger/10 hover:text-danger"
          >
            <Icon name="x" className="h-4 w-4" />
          </button>
        )}
      </div>
      <h3 className="mt-3 font-semibold text-fg">{title}</h3>
      <p className="text-sm text-muted">{subtitle}</p>
      <div className="mt-4 pt-1">
        <Button variant="subtle" size="sm" onClick={onOpen}>
          <Icon name="play" className="h-4 w-4" />
          Study
        </Button>
      </div>
    </motion.div>
  )
}

export default function Flashcards() {
  const { decks, saveDeck, deleteDeck } = useApp()
  const [view, setView] = useState('home')
  const [activeDeck, setActiveDeck] = useState(null)

  const openDeck = (deck) => {
    setActiveDeck(deck)
    setView('study')
  }
  const goHome = () => {
    setActiveDeck(null)
    setView('home')
  }

  return (
    <Section width="wide" animateOnMount className="pt-8 pb-28">
      <motion.div variants={fadeInUp}>
        <Button as={Link} to="/dashboard" variant="ghost" size="sm">
          <Icon name="arrowLeft" className="h-4 w-4" />
          Dashboard
        </Button>
      </motion.div>

      {view === 'home' && (
        <>
          <motion.div
            variants={fadeInUp}
            className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-4">
              <Mascot expression="wave" className="hidden h-16 w-16 shrink-0 sm:block" />
              <div>
                <h1 className="text-3xl font-extrabold text-fg sm:text-4xl">Flashcards</h1>
                <p className="readable mt-1 text-muted">
                  Study a ready-made deck or build your own set of cards.
                </p>
              </div>
            </div>
            <Button size="lg" className="shrink-0" onClick={() => setView('create')}>
              <Icon name="plus" className="h-5 w-5" />
              New deck
            </Button>
          </motion.div>

          {/* AI decks */}
          <motion.h2 variants={fadeInUp} className="mt-10 mb-4 text-xl font-bold text-fg">
            AI decks
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {AI_DECKS.map((deck) => (
              <DeckCard
                key={deck.id}
                title={deck.title}
                subtitle={`${deck.cards.length} cards`}
                accent="bg-flash-soft text-flash"
                onOpen={() => openDeck(deck)}
              />
            ))}
          </motion.div>

          {/* Your decks */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 mb-4 flex items-center justify-between"
          >
            <h2 className="text-xl font-bold text-fg">Your decks</h2>
            <Button variant="secondary" size="sm" onClick={() => setView('create')}>
              <Icon name="plus" className="h-4 w-4" />
              New deck
            </Button>
          </motion.div>

          {decks.length === 0 ? (
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center rounded-2xl border border-dashed border-line bg-surface p-10 text-center"
            >
              <Mascot expression="happy" className="h-20 w-20" />
              <p className="mt-3 text-lg font-semibold text-fg">No decks yet</p>
              <p className="mt-1 max-w-sm text-sm text-muted">
                Build your first deck of flashcards and it will show up here.
              </p>
              <div className="mt-5">
                <Button variant="primary" size="md" onClick={() => setView('create')}>
                  <Icon name="plus" className="h-4 w-4" />
                  Create a deck
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              variants={staggerContainer}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {decks.map((deck) => {
                const count = deck.cards?.length || 0
                return (
                  <DeckCard
                    key={deck.id}
                    title={deck.title}
                    subtitle={`${count} ${count === 1 ? 'card' : 'cards'}`}
                    accent="bg-brand-soft text-brand-strong"
                    onOpen={() => openDeck(deck)}
                    onDelete={() => deleteDeck(deck.id)}
                  />
                )
              })}
            </motion.div>
          )}
        </>
      )}

      {view === 'study' && activeDeck && (
        <div className="mt-6">
          <StudyView deck={activeDeck} onExit={goHome} />
        </div>
      )}

      {view === 'create' && (
        <div className="mt-6">
          <CreateView
            onCancel={goHome}
            onSave={(deck) => {
              saveDeck(deck)
              goHome()
            }}
          />
        </div>
      )}
    </Section>
  )
}
