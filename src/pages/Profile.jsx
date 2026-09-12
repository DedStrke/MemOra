import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import AccentPicker from '@/components/ui/AccentPicker'
import Chip from '@/components/ui/Chip'
import Avatar from '@/components/ui/Avatar'
import SubjectPicker from '@/components/ui/SubjectPicker'
import MascotPicker, { LookSwatch } from '@/components/ui/MascotPicker'
import FriendCard from '@/components/friends/FriendCard'
import { AssessmentQuickAdd } from '@/components/dashboard/AssessmentsCard'
import useMe from '@/hooks/useMe'
import { assessmentType } from '@/constants/assessments'
import { mascotById } from '@/constants/mascots'
import { fadeInUp } from '@/lib/motion'
import { PRIORITISED_COURSES, ADVANCED_YEAR_GROUPS, YEAR_GROUPS, specsFor } from '@/constants/content'
import { useApp, THEMES, THEME_META } from '@/context/AppProvider'
import { AVATAR_STYLES, AVATAR_BACKGROUNDS, AVATAR_BG_HEX } from '@/lib/avatar'
import { validateDisplayName } from '@/lib/safety'
import { usernameProblem, suggestUsername } from '@/lib/friends'
import { XP_RULES, LEVEL_REWARDS, xpBreakdown } from '@/lib/xp'

/*
  Settings, laid out like a desktop app's: a list of sections down the
  left, one section at a time on the right, your profile first. Every
  change saves as you make it - there is no Save button anywhere - and
  the URL hash names the open section so links like /profile#assessments
  land on the right one.
*/

const SECTIONS = [
  { id: 'profile', label: 'My profile', icon: 'user' },
  { id: 'buddy', label: 'Study buddy', icon: 'sparkles' },
  { id: 'appearance', label: 'Appearance', icon: 'sun' },
  { id: 'courses', label: 'Courses', icon: 'cap' },
  { id: 'assessments', label: 'Assessment dates', icon: 'calendar' },
  { id: 'levels', label: 'Levels and rewards', icon: 'star' },
  { id: 'community', label: 'Community identity', icon: 'users' },
  { id: 'account', label: 'Account', icon: 'shield' },
]

// Whole days between today and an exam date (yyyy-mm-dd).
function daysUntil(dateStr) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return Math.round((new Date(dateStr + 'T00:00:00') - today) / 86400000)
}

function Choice({ label, options, value, onChange, hint }) {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-muted">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <Chip
            key={String(o.value)}
            selected={value === o.value}
            aria-pressed={value === o.value}
            onClick={() => onChange(o.value)}
          >
            {o.label}
          </Chip>
        ))}
      </div>
      {hint && <p className="mt-2 text-xs text-muted">{hint}</p>}
    </div>
  )
}

function Field({ label, hint, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-muted">{label}</span>
      {children}
      {error ? (
        <span className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-danger">
          <Icon name="x" className="h-3.5 w-3.5 shrink-0" />
          {error}
        </span>
      ) : hint ? (
        <span className="mt-1.5 block text-xs text-muted">{hint}</span>
      ) : null}
    </label>
  )
}

const inputClass =
  'w-full rounded-xl border border-line bg-page px-3.5 py-2.5 text-sm text-fg placeholder:text-muted focus:border-brand focus:outline-none'

function Panel({ title, blurb, children }) {
  return (
    <motion.section variants={fadeInUp} initial="hidden" animate="show" className="card p-5 sm:p-6">
      <h2 className="text-xl font-extrabold text-fg">{title}</h2>
      {blurb && <p className="readable mt-1 mb-5 text-sm text-muted">{blurb}</p>}
      {!blurb && <div className="mb-5" />}
      {children}
    </motion.section>
  )
}

export default function Profile() {
  const {
    user,
    account,
    signOut,
    showToast,
    setMascot,
    setUsername,
    setBanner,
    setBannerPos,
    applyLook,
    setName,
    setBio,
    setAvatar,
    setAvatarPos,
    a11y,
    setA11y,
    theme,
    setTheme,
    setYearGroup,
    setSessionLength,
    examDates,
    removeExamDate,
    yearGroupMigrationNotice,
    dismissYearGroupMigrationNotice,
    setDisplayName,
    setAvatarPrefs,
    setSubjects,
    markProfileSetup,
    profileSetupDone,
    sessions,
    attempts,
    essayPlanDrafts,
    daily,
    friends,
  } = useApp()
  const me = useMe()
  const location = useLocation()
  const navigate = useNavigate()

  const fromHash = (hash) => {
    const id = (hash || '').replace('#', '')
    return SECTIONS.some((s) => s.id === id) ? id : 'profile'
  }
  const [section, setSection] = useState(() => fromHash(location.hash))
  useEffect(() => {
    setSection(fromHash(location.hash))
  }, [location.hash])
  const go = (id) => {
    setSection(id)
    navigate({ hash: id === 'profile' ? '' : `#${id}` }, { replace: true })
  }
  // Opening the profile section counts as having set it up - the
  // dashboard's "Set up profile" prompt goes away.
  useEffect(() => {
    if (section === 'profile' && !profileSetupDone) markProfileSetup()
  }, [section, profileSetupDone, markProfileSetup])

  const [usernameDraft, setUsernameDraft] = useState(user.username || suggestUsername(user.name) || '')
  const takenUsernames = friends.map((f) => f.username).filter(Boolean)
  const usernameError = usernameDraft ? usernameProblem(usernameDraft, { taken: takenUsernames }) : null

  const [displayNameDraft, setDisplayNameDraft] = useState(user.displayName || user.name || '')
  const displayNameError = displayNameDraft.trim() ? validateDisplayName(displayNameDraft) : null
  const communityName = user.displayName || user.name

  const isAdvanced = PRIORITISED_COURSES.includes(user.courseType)
  const yearGroupOptions = isAdvanced ? ADVANCED_YEAR_GROUPS : YEAR_GROUPS.filter((y) => y !== 'University')
  const built = user.mascot?.kind === 'custom' ? null : mascotById(user.mascot?.id)

  const saveSubjects = (next) => {
    const cleaned = next
      .filter((s) => s.name?.trim())
      .map((s) => ({ ...s, name: s.name.trim(), spec: (s.spec || '').trim() }))
    if (isAdvanced && cleaned.length && !cleaned.some((s) => s.priority)) cleaned[0].priority = true
    setSubjects(cleaned)
  }

  const sortedExamDates = [...examDates].sort((a, b) => daysUntil(a.date) - daysUntil(b.date))

  const breakdown = xpBreakdown({ sessions, attempts, essayPlanDrafts, daily })

  return (
    <Section width="wide" animateOnMount className="pt-8 pb-24">
      <motion.div variants={fadeInUp} className="mb-6">
        <Breadcrumbs />
        <h1 className="mt-3 text-3xl font-extrabold text-fg sm:text-4xl">Settings</h1>
        <p className="readable mt-1 text-muted">Everything saves as you change it.</p>
      </motion.div>

      {yearGroupMigrationNotice && (
        <motion.div variants={fadeInUp} className="mb-6 flex items-start gap-3 rounded-2xl border border-line bg-brand-soft p-4">
          <Icon name="calendar" className="mt-0.5 h-5 w-5 shrink-0 text-brand-strong" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-fg">Memora is now A-level only</p>
            <p className="mt-0.5 text-sm text-muted">
              We&rsquo;ve set your year group to Year 12 - change it under Courses if that&rsquo;s wrong.
            </p>
          </div>
          <button
            type="button"
            onClick={dismissYearGroupMigrationNotice}
            aria-label="Dismiss"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-fg"
          >
            <Icon name="x" className="h-4 w-4" />
          </button>
        </motion.div>
      )}

      <div className="grid gap-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:items-start">
        {/* Section list */}
        <motion.nav
          variants={fadeInUp}
          aria-label="Settings sections"
          className="-mx-5 flex gap-1 overflow-x-auto px-5 pb-1 lg:sticky lg:top-24 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0"
        >
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(s.id)}
              aria-current={section === s.id ? 'true' : undefined}
              className="settings-nav-item shrink-0"
            >
              <Icon name={s.icon} className="h-4 w-4 shrink-0" />
              {s.label}
            </button>
          ))}
        </motion.nav>

        <div className="min-w-0">
          {section === 'profile' && (
            <Panel key="profile" title="My profile" blurb="How you appear on your dashboard, your friend code and the leaderboard.">
              <FriendCard
                friend={me}
                mine
                editable
                onPhotoChange={setAvatar}
                onPhotoPosition={setAvatarPos}
                onPhotoError={showToast}
                onBannerChange={setBanner}
                onBannerPosition={setBannerPos}
              />
              <p className="mt-3 text-xs text-muted">
                Hover the picture or the banner (or tap either) to change them - any image, or a GIF that keeps
                moving, up to 20&nbsp;MB. You position and zoom each one before it saves; Adjust moves what is
                already there.
                {user.avatar && (
                  <>
                    {' '}
                    <button
                      type="button"
                      onClick={() => setAvatar(null)}
                      className="font-semibold text-muted transition-colors hover:text-danger"
                    >
                      Remove photo
                    </button>
                  </>
                )}
                {user.banner && (
                  <>
                    {' · '}
                    <button
                      type="button"
                      onClick={() => setBanner(null)}
                      className="font-semibold text-muted transition-colors hover:text-danger"
                    >
                      Remove banner
                    </button>
                  </>
                )}
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field label="Name">
                  <input value={user.name} onChange={(e) => setName(e.target.value)} className={inputClass} />
                </Field>
                <Field
                  label="Username"
                  error={usernameError}
                  hint="Lowercase letters, digits, dots and underscores. Friends see it on your card."
                >
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted">
                      @
                    </span>
                    <input
                      value={usernameDraft}
                      onChange={(e) => setUsernameDraft(e.target.value.toLowerCase())}
                      onBlur={() => {
                        if (!usernameError && usernameDraft) setUsername(usernameDraft)
                      }}
                      maxLength={20}
                      autoComplete="off"
                      spellCheck={false}
                      className={`${inputClass} pl-8`}
                    />
                  </div>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Bio">
                  <textarea
                    rows={2}
                    value={user.bio || ''}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="A line about you - what you're revising for, how you like to work, whatever."
                    maxLength={160}
                    className={`${inputClass} resize-none`}
                  />
                </Field>
              </div>

            </Panel>
          )}

          {section === 'buddy' && (
            <Panel
              key="buddy"
              title="Study buddy"
              blurb="Lives on your dashboard banner, your friend card and the leaderboard. Tap it on the dashboard - it talks back."
            >
              <MascotPicker value={user.mascot} onChange={setMascot} />
              {built && (
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-page p-4">
                  <div>
                    <p className="text-sm font-bold text-fg">{built.name}&rsquo;s look</p>
                    <LookSwatch look={built.look} className="mt-1" />
                  </div>
                  <Button
                    size="sm"
                    onClick={() => {
                      applyLook(built.look)
                      showToast(`${built.look.label} applied`)
                    }}
                  >
                    <Icon name="wand" className="h-4 w-4" />
                    Use this look
                  </Button>
                </div>
              )}
            </Panel>
          )}

          {section === 'appearance' && (
            <Panel key="appearance" title="Appearance" blurb="Theme, accent and how text reads. Applies instantly, everywhere.">
              <div className="space-y-6">
                <Choice
                  label="Theme"
                  value={theme}
                  onChange={setTheme}
                  options={THEMES.map((t) => ({ value: t, label: THEME_META[t].label }))}
                />
                <div>
                  <p className="mb-2 text-sm font-semibold text-muted">Accent colour</p>
                  <AccentPicker />
                </div>
                <Choice
                  label="Text size"
                  value={a11y.textScale}
                  onChange={(v) => setA11y({ textScale: v })}
                  options={[
                    { value: 1, label: 'Normal' },
                    { value: 1.15, label: 'Large' },
                    { value: 1.3, label: 'Larger' },
                  ]}
                />
                <Choice
                  label="Font"
                  value={a11y.font}
                  onChange={(v) => setA11y({ font: v })}
                  options={[
                    { value: 'default', label: 'Default' },
                    { value: 'dyslexic', label: 'Dyslexia-friendly' },
                    { value: 'hyperlegible', label: 'Hyperlegible' },
                  ]}
                />
                <Choice
                  label="Reading comfort"
                  value={a11y.spacing}
                  onChange={(v) => setA11y({ spacing: v, letter: v === 'normal' ? 'normal' : 'wide' })}
                  options={[
                    { value: 'normal', label: 'Standard' },
                    { value: 'relaxed', label: 'Relaxed' },
                    { value: 'loose', label: 'Loose' },
                  ]}
                />
                <Choice
                  label="Focus mode"
                  value={a11y.focus ? 'on' : 'off'}
                  onChange={(v) => setA11y({ focus: v === 'on' })}
                  options={[
                    { value: 'off', label: 'Off' },
                    { value: 'on', label: 'On' },
                  ]}
                  hint="Fewer distractions on study pages."
                />
              </div>
            </Panel>
          )}

          {section === 'courses' && (
            <Panel key="courses" title="Courses" blurb="Your subjects and boards, year group and how long a session runs by default.">
              {user.courseType === 'University' ? (
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-semibold text-muted">Course type</dt>
                    <dd className="text-fg">{user.courseType}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-muted">Course</dt>
                    <dd className="text-fg">{user.courseName || 'Not set'}</dd>
                  </div>
                </dl>
              ) : (
                <div className="space-y-6">
                  <SubjectPicker
                    subjects={user.subjects || []}
                    onChange={saveSubjects}
                    prioritised={isAdvanced}
                    boards={specsFor(user.courseType)}
                  />
                  <Choice
                    label="Year group"
                    value={user.yearGroup}
                    onChange={setYearGroup}
                    options={yearGroupOptions.map((y) => ({ value: y, label: y }))}
                    hint={
                      isAdvanced
                        ? 'Decides whether mock exams include Year 2 (A2) content yet, or stick to Year 1 (AS) until you are there.'
                        : undefined
                    }
                  />
                  <Choice
                    label="Default session length"
                    value={user.sessionLengthMinutes}
                    onChange={setSessionLength}
                    options={[
                      { value: 15, label: '15 min' },
                      { value: 25, label: '25 min' },
                      { value: 40, label: '40 min' },
                      { value: 60, label: '60 min' },
                    ]}
                  />
                </div>
              )}
            </Panel>
          )}

          {section === 'assessments' && (
            <Panel
              key="assessments"
              title="Assessment dates"
              blurb="DAs, IAs, mocks and the real papers. Every countdown, pace estimate and readiness bar runs off these."
            >
              <div id="assessments">
                {sortedExamDates.length > 0 && (
                  <ul className="mb-4 space-y-2">
                    {sortedExamDates.map((exam) => {
                      const left = daysUntil(exam.date)
                      return (
                        <li
                          key={exam.id}
                          className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-3.5 py-2.5"
                        >
                          <div className="min-w-0">
                            <p className="flex min-w-0 items-center gap-2 text-sm font-medium text-fg">
                              <span className={`hero-type hero-type-${assessmentType(exam.type).tone}`}>
                                {assessmentType(exam.type).short}
                              </span>
                              <span className="truncate">
                                {exam.subject ? `${exam.subject} · ${exam.paperLabel}` : exam.paperLabel}
                              </span>
                            </p>
                            <p className="text-xs text-muted">
                              {new Date(exam.date + 'T00:00:00').toLocaleDateString(undefined, {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                              })}
                              {' · '}
                              {left < 0 ? 'done' : left === 0 ? 'today' : left === 1 ? '1 day left' : `${left} days left`}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeExamDate(exam.id)}
                            aria-label={`Remove ${exam.paperLabel}`}
                            className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-page hover:text-danger"
                          >
                            <Icon name="x" className="h-4 w-4" />
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                )}
                <AssessmentQuickAdd subjects={(user.subjects || []).map((x) => x.name)} />
              </div>
            </Panel>
          )}

          {section === 'levels' && (
            <Panel key="levels" title="Levels and rewards" blurb="How XP is earned, where you are, and what each level unlocks.">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-page p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted">You</p>
                  <p className="mt-1 text-3xl font-extrabold text-fg">
                    Level {me.level} <span className="text-base font-bold text-brand-strong">{me.levelInfo.title}</span>
                  </p>
                  <p className="text-sm text-muted">
                    {me.xp.toLocaleString()} XP · {me.levelInfo.toNext.toLocaleString()} to level {me.level + 1}
                  </p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-line/70">
                    <div className="h-full rounded-full bg-brand" style={{ width: `${Math.max(3, me.levelInfo.progress * 100)}%` }} />
                  </div>
                  <dl className="mt-4 space-y-1.5">
                    {breakdown.map((r) => (
                      <div key={r.id} className="flex items-baseline justify-between gap-3 text-sm">
                        <dt className="text-muted">
                          {r.label} <span className="tabular-nums text-fg">({r.count})</span>
                        </dt>
                        <dd className="font-bold tabular-nums text-fg">{r.xp.toLocaleString()} XP</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="rounded-2xl border border-line bg-page p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted">How XP is earned</p>
                  <ul className="mt-2 space-y-1.5">
                    {XP_RULES.map((r) => (
                      <li key={r.id} className="flex items-baseline justify-between gap-3 text-sm">
                        <span className="text-fg">{r.label}</span>
                        <span className="font-bold tabular-nums text-brand-strong">+{r.xp}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-muted">
                    Streak tiers: Lit (1), Spark (3), Flame (7), Blaze (14), Inferno (30). The flame changes colour at each.
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <p className="mb-2 text-sm font-semibold text-muted">Level rewards</p>
                <ol className="grid gap-2 sm:grid-cols-2">
                  {LEVEL_REWARDS.map((r) => {
                    const got = me.level >= r.level
                    return (
                      <li
                        key={`${r.level}-${r.label}`}
                        className={`flex items-center gap-3 rounded-xl border px-3 py-2 text-sm ${
                          got ? 'border-brand bg-brand-soft/60 text-fg' : 'border-line bg-surface text-muted'
                        }`}
                      >
                        <span
                          className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-xs font-extrabold ${
                            got ? 'bg-brand text-on-brand' : 'bg-line text-fg'
                          }`}
                        >
                          {r.level}
                        </span>
                        <span className="flex-1 font-semibold">{r.label}</span>
                        {got && <Icon name="check" className="h-4 w-4 text-brand-strong" />}
                      </li>
                    )
                  })}
                </ol>
              </div>
            </Panel>
          )}

          {section === 'community' && (
            <Panel
              key="community"
              title="Community identity"
              blurb="What shows on a Community post - never your real name, school or contact details. Generated only, no upload."
            >
              <div className="flex items-center gap-4">
                <Avatar
                  name={communityName}
                  style={user.avatarStyle}
                  bg={user.avatarBg}
                  seed={user.avatarSeed || communityName}
                  className="h-14 w-14"
                />
                <div className="min-w-0 flex-1">
                  <Field label="Display name" error={displayNameError}>
                    <input
                      value={displayNameDraft}
                      onChange={(e) => setDisplayNameDraft(e.target.value)}
                      onBlur={() => {
                        if (!displayNameError && displayNameDraft.trim()) setDisplayName(displayNameDraft.trim())
                      }}
                      placeholder="Not your real name"
                      maxLength={24}
                      className={inputClass}
                    />
                  </Field>
                </div>
              </div>
              <div className="mt-5 space-y-4">
                <Choice
                  label="Avatar style"
                  value={user.avatarStyle}
                  onChange={(v) => setAvatarPrefs({ avatarStyle: v })}
                  options={AVATAR_STYLES.map((s) => ({ value: s, label: s === 'initials' ? 'Initials' : 'Pattern' }))}
                />
                <div>
                  <p className="mb-2 text-sm font-semibold text-muted">Colour</p>
                  <div className="flex flex-wrap gap-2">
                    {AVATAR_BACKGROUNDS.map((bg) => (
                      <button
                        key={bg}
                        type="button"
                        onClick={() => setAvatarPrefs({ avatarBg: bg })}
                        aria-label={bg}
                        aria-pressed={user.avatarBg === bg}
                        className={`h-7 w-7 shrink-0 rounded-full transition-transform ${
                          user.avatarBg === bg ? 'scale-110 ring-2 ring-brand ring-offset-2 ring-offset-surface' : ''
                        }`}
                        style={{ background: AVATAR_BG_HEX[bg] }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Panel>
          )}

          {section === 'account' && (
            <Panel key="account" title="Account" blurb="Accounts live in this browser only - nothing is uploaded and your revision does not follow you to another device.">
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-semibold text-muted">Signed in as</dt>
                  <dd className="text-fg">{account ? account.email : 'Not signed in - studying as a guest on this device'}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-muted">On this device</dt>
                  <dd className="text-fg">
                    {sessions.length} session{sessions.length === 1 ? '' : 's'} · {attempts.length} answer
                    {attempts.length === 1 ? '' : 's'} · {friends.length} friend{friends.length === 1 ? '' : 's'}
                  </dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-3">
                {account ? (
                  <Button
                    variant="secondary"
                    onClick={() => {
                      signOut()
                      showToast('Signed out')
                      navigate('/')
                    }}
                  >
                    <Icon name="logout" className="h-5 w-5" />
                    Sign out
                  </Button>
                ) : (
                  <Button as={Link} to="/signin">
                    <Icon name="user" className="h-5 w-5" />
                    Sign in or create an account
                  </Button>
                )}
              </div>
            </Panel>
          )}
        </div>
      </div>
    </Section>
  )
}
