import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import AccentPicker from '@/components/ui/AccentPicker'
import { fadeInUp } from '@/lib/motion'
import { PROFILE } from '@/constants/content'
import { useApp, THEMES, THEME_META } from '@/context/AppProvider'

// Crops to a centered square and downsizes before storing, so a phone photo
// doesn't blow up localStorage - a small JPEG data URL instead of a multi-MB
// original.
function readAndResizeImage(file, size = 160) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(new Error('read failed'))
    reader.onload = () => {
      const img = new Image()
      img.onerror = () => reject(new Error('decode failed'))
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = size
        canvas.height = size
        const ctx = canvas.getContext('2d')
        const scale = Math.max(size / img.width, size / img.height)
        const w = img.width * scale
        const h = img.height * scale
        ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h)
        resolve(canvas.toDataURL('image/jpeg', 0.85))
      }
      img.src = reader.result
    }
    reader.readAsDataURL(file)
  })
}

function Row({ label, value }) {
  return (
    <div>
      <dt className="text-sm font-semibold text-muted">{label}</dt>
      <dd className="text-fg">{value || 'Not set'}</dd>
    </div>
  )
}

function Choice({ label, options, value, onChange }) {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-muted">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={String(o.value)}
            type="button"
            onClick={() => onChange(o.value)}
            aria-pressed={value === o.value}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              value === o.value
                ? 'border-brand bg-brand text-on-brand'
                : 'border-line bg-surface text-fg hover:border-brand'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Profile() {
  const { user, setName, setBio, setAvatar, a11y, setA11y, theme, setTheme } = useApp()
  const fileInputRef = useRef(null)
  const [avatarError, setAvatarError] = useState('')
  const initial = (user.name?.[0] || '?').toUpperCase()

  const pickAvatar = () => fileInputRef.current?.click()

  const onAvatarChange = async (e) => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setAvatarError('Please choose an image file.')
      return
    }
    if (file.size > 8 * 1024 * 1024) {
      setAvatarError('That image is too large (max 8MB).')
      return
    }
    try {
      const dataUrl = await readAndResizeImage(file)
      setAvatar(dataUrl)
      setAvatarError('')
    } catch {
      setAvatarError('Could not read that image - try another.')
    }
  }

  return (
    <Section width="narrow" animateOnMount className="pt-10 pb-24">
      {/* Identity: photo, name, bio - the things that are "you" */}
      <motion.div variants={fadeInUp} className="card p-6">
        <div className="flex items-start gap-4">
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={pickAvatar}
              aria-label={user.avatar ? 'Change profile photo' : 'Add a profile photo'}
              className="group relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-brand text-2xl font-bold text-on-brand"
            >
              {user.avatar ? (
                <img src={user.avatar} alt="" className="h-full w-full object-cover" />
              ) : (
                initial
              )}
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/40 group-hover:opacity-100">
                <Icon name="camera" className="h-5 w-5 text-white" />
              </span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={onAvatarChange}
              className="sr-only"
            />
          </div>
          <div className="min-w-0 flex-1">
            <input
              value={user.name}
              onChange={(e) => setName(e.target.value)}
              aria-label="Your name"
              className="w-full rounded-lg border border-transparent bg-transparent text-3xl font-bold text-fg transition-colors hover:border-line focus:border-brand focus:outline-none"
            />
            {user.avatar && (
              <button
                type="button"
                onClick={() => setAvatar(null)}
                className="mt-0.5 text-xs font-semibold text-muted transition-colors hover:text-danger"
              >
                Remove photo
              </button>
            )}
          </div>
        </div>
        {avatarError && (
          <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-danger">
            <Icon name="x" className="h-4 w-4 shrink-0" />
            {avatarError}
          </p>
        )}

        <label className="mt-5 block">
          <span className="mb-1.5 block text-sm font-semibold text-muted">Bio</span>
          <textarea
            rows={2}
            value={user.bio || ''}
            onChange={(e) => setBio(e.target.value)}
            placeholder="A line about you - what you're revising for, how you like to work, whatever."
            maxLength={160}
            className="w-full resize-none rounded-xl border border-line bg-page px-4 py-3 text-sm text-fg placeholder:text-muted focus:border-brand focus:outline-none"
          />
        </label>
        <p className="mt-3 text-xs text-muted">{PROFILE.subtitle}</p>
      </motion.div>

      {/* Course + subjects */}
      <motion.div
        variants={fadeInUp}
        className="mt-6 card p-6"
      >
        <dl className="space-y-4">
          <Row label="Year group" value={user.yearGroup} />
          <Row label="Course type" value={user.courseType} />
          {user.courseType === 'University' ? (
            <Row label="Course" value={user.courseName} />
          ) : (
            <div>
              <dt className="mb-1.5 text-sm font-semibold text-muted">Subjects</dt>
              <dd className="flex flex-wrap gap-2">
                {user.subjects?.length ? (
                  user.subjects.map((s) => (
                    <span
                      key={s.id ?? s.name}
                      className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-sm font-medium text-brand-strong"
                    >
                      {s.priority && <Icon name="star" className="h-3.5 w-3.5" />}
                      {s.name}
                      {s.spec ? ` · ${s.spec}` : ''}
                    </span>
                  ))
                ) : (
                  <span className="text-muted">None</span>
                )}
              </dd>
            </div>
          )}
        </dl>

        <div className="mt-6 flex flex-wrap gap-3 border-t border-line pt-6">
          <Button as={Link} to="/courses" variant="secondary" size="sm">
            <Icon name="plus" className="h-4 w-4" />
            Manage courses
          </Button>
        </div>
      </motion.div>

      {/* Display & reading settings */}
      <motion.div
        variants={fadeInUp}
        className="mt-6 card p-6"
      >
        <div className="mb-1 flex items-center gap-2">
          <Icon name="access" className="h-5 w-5 text-brand-strong" />
          <h2 className="text-lg font-bold text-fg">Display and reading</h2>
        </div>
        <p className="readable mb-5 text-sm text-muted">
          Tune how the app looks and reads. Changes apply instantly and save on this
          device.
        </p>
        <div className="space-y-5">
          <Choice
            label="Theme"
            value={theme}
            onChange={setTheme}
            options={THEMES.map((t) => ({ value: t, label: THEME_META[t].label }))}
          />
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
            onChange={(v) =>
              setA11y({ spacing: v, letter: v === 'normal' ? 'normal' : 'wide' })
            }
            options={[
              { value: 'normal', label: 'Standard' },
              { value: 'relaxed', label: 'Relaxed' },
              { value: 'loose', label: 'Loose' },
            ]}
          />
          <Choice
            label="Focus mode (fewer distractions)"
            value={a11y.focus ? 'on' : 'off'}
            onChange={(v) => setA11y({ focus: v === 'on' })}
            options={[
              { value: 'off', label: 'Off' },
              { value: 'on', label: 'On' },
            ]}
          />
          <div>
            <p className="mb-2 text-sm font-semibold text-muted">Accent colour</p>
            <AccentPicker />
          </div>
        </div>
        <p className="readable mt-5 text-xs text-muted">
          You can also switch theme quickly from the icons in the top bar.
        </p>
      </motion.div>
    </Section>
  )
}
