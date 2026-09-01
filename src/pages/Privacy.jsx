import Icon from '@/components/ui/Icon'
import LegalLayout from '@/components/layout/LegalLayout'
import { LEGAL } from '@/constants/content'

export default function Privacy() {
  const { title, updated, intro, sections } = LEGAL.privacy
  return (
    <LegalLayout
      icon={<Icon name="shield" className="h-5 w-5" />}
      title={title}
      updated={updated}
      intro={intro}
      sections={sections}
    />
  )
}
