import { getPackByName } from '../src/constants/library.js'
const pack = getPackByName(process.argv[2])
for (const t of process.argv.slice(3)) {
  const html = pack.notes[t] || ''
  const hs = [...html.matchAll(/<h3>(.*?)<\/h3>|<strong>Definition: (.*?)<\/strong>|det-name">(.*?)<\/p>/g)].map(m=>m[1]||('def:'+m[2])||('det:'+m[3]))
  console.log('\n## '+t+'\n  '+hs.join('\n  '))
}
