/*
  Builders for the rewritten Maths notes.

  Maths needs a different shape from Economics. There the unit of content is
  "a determinant, its mechanism, and why the mechanism may fail". Here it is:

      the rule → the method → a worked example → where marks are lost

  That last part matters more in Maths than anywhere else, because the
  difference between a grade A and an A* is almost never knowing a further
  topic - it is not dropping the method mark, not losing the constant of
  integration, not forgetting the negative root. Those are listed explicitly
  rather than left to be discovered in an exam.

  Worked examples carry their METHOD lines, not just an answer. A mark scheme
  bullet saying "= 14" teaches nothing; the marks are on the lines above it.
*/

const esc = (s) =>
  String(s).replace(/&(?![a-zA-Z#0-9]+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const rich = (s) =>
  esc(s)
    .replace(/\*([^*]+)\*/g, '<strong>$1</strong>')
    .replace(/_([^_]+)_/g, '<em>$1</em>')

export const h = (text) => `<h3>${rich(text)}</h3>`
export const p = (text) => `<p>${rich(text)}</p>`
export const ul = (items) => `<ul>${items.map((i) => `<li>${rich(i)}</li>`).join('')}</ul>`
export const diagram = (id) => `<div data-diagram="${id}"></div>`
export const tip = (text) => `<p class="exam-tip">${rich(text)}</p>`

/* A result or formula to know. Many are in the formula book; the ones that
   are NOT are the ones worth flagging, hence the optional note. */
export const rule = (name, statement, note) =>
  `<div class="defn"><strong>${rich(name)}</strong>${rich(statement)}${
    note ? `<br><em>${rich(note)}</em>` : ''
  }</div>`

/* The steps, in order, for a standard question type. */
export const method = (title, steps) =>
  `<div class="method"><p class="method-title">${rich(title)}</p><ol>${steps
    .map((s) => `<li>${rich(s)}</li>`)
    .join('')}</ol></div>`

/*
  A worked example. `lines` are the METHOD lines a marker would award, in
  order, ending with the answer - because in Maths the marks live on the
  working, not the final number.
*/
export const worked = (question, lines) =>
  `<div class="worked"><strong>Worked example.</strong> ${rich(question)}<ol class="working">${lines
    .map((l) => `<li>${rich(l)}</li>`)
    .join('')}</ol></div>`

/* Where the marks actually get dropped on this topic. */
export const pitfalls = (items) =>
  `<div class="det-eval"><strong>Where marks get lost: </strong>${items
    .map((i) => rich(i))
    .join(' ')}</div>`

export const table = (headers, rows) =>
  `<table><thead><tr>${headers.map((x) => `<th>${rich(x)}</th>`).join('')}</tr></thead><tbody>${rows
    .map((r) => `<tr>${r.map((c) => `<td>${rich(c)}</td>`).join('')}</tr>`)
    .join('')}</tbody></table>`

export const chapter = (...blocks) => blocks.flat().filter(Boolean).join('')

/*
  A code listing - pseudocode, LMC assembly, SQL - kept verbatim: no bold
  or italic substitution (an underscore in an identifier is not an italic
  marker) and whitespace preserved. `lines` is an array of strings.
*/
export const code = (lines, lang) =>
  `<pre class="code"${lang ? ` data-lang="${esc(lang)}"` : ''}><code>${lines.map(esc).join('\n')}</code></pre>`
