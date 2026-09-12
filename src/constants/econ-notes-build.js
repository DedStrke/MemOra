/*
  Builders for the rewritten Economics notes.

  The notes are stored as HTML strings because that is what the runner
  renders, but writing 90,000 words of HTML by hand invites unclosed tags and
  makes the content impossible to scan. These take structured data and emit
  the markup, so a chapter reads as its content rather than as its tags.

  The shape they encode is the one the whole subject is examined on:

      determinant → mechanism → why the mechanism may not hold

  That third part is the evaluation, and it is where AO4 marks live. It gets
  its own emphasised block in `det()` so it cannot be skimmed past, because
  the single most common way to lose marks in this subject is to explain a
  chain of reasoning perfectly and never question it.
*/

const esc = (s) =>
  String(s).replace(/&(?![a-zA-Z#0-9]+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/* Inline markup: *bold* and _italic_, applied after escaping. */
const rich = (s) =>
  esc(s)
    .replace(/\*([^*]+)\*/g, '<strong>$1</strong>')
    .replace(/_([^_]+)_/g, '<em>$1</em>')

export const h = (text) => `<h3>${rich(text)}</h3>`
export const p = (text) => `<p>${rich(text)}</p>`
export const ul = (items) => `<ul>${items.map((i) => `<li>${rich(i)}</li>`).join('')}</ul>`
export const ol = (items) => `<ol>${items.map((i) => `<li>${rich(i)}</li>`).join('')}</ol>`

/* A specification definition, which is often worth a mark on its own. */
export const defn = (term, text) =>
  `<div class="defn"><strong>Definition: ${rich(term)}</strong>${rich(text)}</div>`

/* A worked calculation. `answer` is shown after the question. */
export const worked = (question, answer) =>
  `<div class="worked"><strong>Worked example.</strong> ${rich(question)}<br><strong>Answer:</strong> ${rich(answer)}</div>`

export const diagram = (id) => `<div data-diagram="${id}"></div>`

export const tip = (text) => `<p class="exam-tip">${rich(text)}</p>`

/*
  One determinant.

    name    the factor
    lead    the headline relationship, stated in one line
    points  the chain of reasoning, step by step
    evals   why it may not hold - one or more counter-considerations

  `evals` is required rather than optional on purpose: a determinant with no
  evaluation is exactly the gap this rewrite exists to close.
*/
export const det = (name, lead, points, evals) => {
  const body = [
    `<p class="det-name">${rich(name)}</p>`,
    lead ? `<p class="det-lead">${rich(lead)}</p>` : '',
    points && points.length ? ul(points) : '',
    `<div class="det-eval"><strong>Why it might not hold: </strong>${
      Array.isArray(evals) ? evals.map((e) => rich(e)).join(' ') : rich(evals)
    }</div>`,
  ]
  return `<div class="det">${body.filter(Boolean).join('')}</div>`
}

/* A plain two-column table, for comparisons and classifications. */
export const table = (headers, rows) =>
  `<table><thead><tr>${headers.map((x) => `<th>${rich(x)}</th>`).join('')}</tr></thead><tbody>${rows
    .map((r) => `<tr>${r.map((c) => `<td>${rich(c)}</td>`).join('')}</tr>`)
    .join('')}</tbody></table>`

/* Join a chapter's blocks into the single HTML string the runner expects. */
export const chapter = (...blocks) => blocks.flat().filter(Boolean).join('')
