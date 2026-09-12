/*
  Dump every diagram's on-screen text, so the whole set's NOTATION can be
  reviewed at once.

  The geometry checks prove a curve is in the right place; they say nothing
  about whether it is labelled the way the specification labels it. A merit
  good diagram drawn perfectly but labelled "perceived benefit" and "true
  value" instead of MPB and MSB is still wrong for an exam - the student
  copies it into a paper and loses the marks that are awarded for the
  standard notation.

  Run: node scripts/dump-diagram-labels.mjs [subject]
*/
import { readFileSync } from 'node:fs'

const FILES = {
  economics: ['economics', 'economicsExtra'],
  maths: ['maths', 'mathsExtra'],
  cs: ['computerScience', 'computerScienceExtra'],
}

const which = process.argv[2]
const files = which ? FILES[which] : Object.values(FILES).flat()

for (const f of files) {
  const src = readFileSync(new URL(`../src/components/diagrams/${f}.jsx`, import.meta.url), 'utf8')

  // Map component function name -> the id it is exported as.
  const idOf = {}
  const reg = src.slice(src.indexOf('_DIAGRAMS = {'))
  for (const m of reg.matchAll(/^\s*'?([A-Za-z0-9-]+)'?\s*:\s*([A-Za-z0-9_]+),/gm)) idOf[m[2]] = m[1]

  // Some of these files are CRLF, so normalise before looking for "\n}\n".
  const blocks = src.replace(/\r\n/g, '\n').split(/\nfunction /).slice(1)
  console.log(`\n${'='.repeat(72)}\n${f}.jsx\n${'='.repeat(72)}`)

  for (const block of blocks) {
    const name = block.slice(0, block.indexOf('('))
    const body = block.slice(0, block.indexOf('\n}\n') + 1)

    const title = body.match(/title="([^"]*)"/)?.[1] ?? '(no title)'
    const strings = []

    // label="..." on Curve/Arrow/Box/SetCircle/Dot
    for (const m of body.matchAll(/\blabel="([^"]*)"/g)) strings.push(m[1])
    // label={`...`} and label={'...'}
    for (const m of body.matchAll(/\blabel=\{[`']([^`'{]*)[`']\}/g)) strings.push(m[1])
    // children of <Note>, <Text>, <Note ...> spanning lines
    for (const m of body.matchAll(/<(?:Note|Text)\b[^>]*>\s*([^<]*?)\s*<\/(?:Note|Text)>/g)) {
      const t = m[1].replace(/\s+/g, ' ').trim()
      if (t && !t.startsWith('{')) strings.push(t)
    }
    // template-literal children, e.g. {`cycle ${t}`}
    for (const m of body.matchAll(/<(?:Note|Text)\b[^>]*>\s*\{`([^`]*)`\}/g)) strings.push(m[1])
    for (const m of body.matchAll(/xText="([^"]*)"|yText="([^"]*)"/g)) strings.push(m[1] ?? m[2])

    /*
      Many diagrams drive their labels from a data array - the gate names, the
      TCP/IP layers, the Big-O curves. Those are the labels most worth
      checking, so pull every plain string literal too and drop the ones that
      are obviously props rather than text.
    */
    const PROP = /^(#|var\(|none$|middle$|start$|end$|note$|label$|auto$|[\d.\s]+$)/
    const KEYWORD = /^(img|figure|button|true|false|g|svg|text|rect|line|path|circle)$/
    for (const m of body.matchAll(/'([^'\\\n]{2,40})'/g)) {
      const t = m[1]
      if (!PROP.test(t) && !KEYWORD.test(t)) strings.push(t)
    }
    // axis labels
    const ax = body.match(/xLabel="([^"]*)"/)?.[1]
    const ay = body.match(/yLabel="([^"]*)"/)?.[1]

    const seen = new Set()
    const uniq = strings.filter((s) => s && !seen.has(s) && seen.add(s))

    console.log(`\n  [${idOf[name] || '?'}]  ${title}`)
    if (ax || ay) console.log(`    axes: x=${ax || '-'} | y=${ay || '-'}`)
    if (uniq.length) console.log(`    text: ${uniq.join(' · ')}`)
  }
}
