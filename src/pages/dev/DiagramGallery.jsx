import { useParams } from 'react-router-dom'
import { ECON_DIAGRAMS } from '@/components/diagrams/economics'
import { ECON_EXTRA_DIAGRAMS } from '@/components/diagrams/economicsExtra'
import { ECON_GAP_DIAGRAMS } from '@/components/diagrams/economicsGaps'

/*
  Dev-only contact sheet of every Economics diagram, three to a row with
  its id above each. Registered in App.jsx only when import.meta.env.DEV,
  so it never ships. Exists because the only other way to review a
  diagram is to find a chapter that embeds it, and a review of all
  fifty-odd at once is how the wrong ones get spotted.

  /dev/diagrams          everything
  /dev/diagrams/:id      one, large
*/
const ALL = { ...ECON_DIAGRAMS, ...ECON_EXTRA_DIAGRAMS, ...ECON_GAP_DIAGRAMS }

export default function DiagramGallery() {
  const { id } = useParams()
  const ids = id ? [id] : Object.keys(ALL)
  return (
    <div className={id ? 'mx-auto max-w-2xl p-6' : 'grid grid-cols-3 gap-4 p-4'}>
      {ids.map((k) => {
        const D = ALL[k]
        return (
          <div key={k} data-diagram-id={k}>
            <p className="mb-1 font-mono text-xs font-bold text-fg">{k}</p>
            {D ? <D /> : <p className="text-danger">unknown id</p>}
          </div>
        )
      })}
    </div>
  )
}
