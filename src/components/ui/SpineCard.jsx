import SilkField from '@/components/ui/SilkField'

/*
  A surface that belongs to one colour - the subject cards on the
  dashboard (pages/Dashboard.jsx ResumeCard/SubjectCard), and any other
  row or card that should carry the same material rather than a flat
  border. No coloured spine down the left, and no aurora-plus-rings
  either - the user's verdict on both was "looks AI generated", and they
  were right: a 4px bar and a set of concentric arcs are what every
  template does. Instead the colour is the material of the card: a
  WebGL silk shader (components/ui/SilkField.jsx) folds it through the
  right-hand side and answers the cursor, and a hairline border takes
  the colour on hover. `lift` opts into the shared hover treatment for
  cards that are themselves the click target. `as` renders it as a
  different element (e.g. 'li' inside an <ol>). Styles in index.css
  under .subject-card.
*/
export default function SpineCard({ color, as: As = 'div', className = '', rounded = 'rounded-3xl', lift = false, children }) {
  return (
    <As
      className={`subject-card card relative min-w-0 overflow-hidden ${rounded} ${lift ? 'card-lift' : ''} ${className}`}
      style={{ '--subject': color }}
    >
      <SilkField color={color} />
      <div className="relative">{children}</div>
    </As>
  )
}
