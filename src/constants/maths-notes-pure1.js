/*
  Edexcel A-level Maths (9MA0), Pure Year 1.

  Rebuilt at working depth. The previous notes averaged 249 words a chapter - 
  enough to remind you a topic exists, not enough to learn or revise from.

  Every topic here follows: the rule, the method, a worked example with its
  METHOD LINES, and the specific places marks get dropped. That last section
  is the A* part - at this level almost nobody loses marks through not
  knowing a topic, they lose them to a sign, a missing root, or a constant
  of integration.
*/

import { h, p, ul, rule, method, worked, pitfalls, diagram, tip, table, chapter } from './maths-notes-build'

/* ================================================= ALGEBRAIC EXPRESSIONS */

const algebraicExpressions = chapter(
  h('Index laws'),
  rule('The laws', 'aᵐ × aⁿ = aᵐ⁺ⁿ · aᵐ ÷ aⁿ = aᵐ⁻ⁿ · (aᵐ)ⁿ = aᵐⁿ · a⁰ = 1 · a⁻ⁿ = 1/aⁿ · a¹ᐟⁿ = ⁿ√a · aᵐᐟⁿ = (ⁿ√a)ᵐ'),
  tip('For a fractional power, take the ROOT first and then the power - (8)²ᐟ³ is (∛8)² = 4, which is far easier than ∛64.'),
  worked('Simplify (16x⁸)³ᐟ⁴.', [
    'Apply the power to each factor: 16³ᐟ⁴ × (x⁸)³ᐟ⁴',
    '16³ᐟ⁴ = (⁴√16)³ = 2³ = 8',
    '(x⁸)³ᐟ⁴: multiply the powers, 8 × 3/4 = 6, giving x⁶',
    'Answer: 8x⁶',
  ]),
  h('Surds'),
  rule('Rules', '√(ab) = √a × √b · √(a/b) = √a / √b. A surd is in simplest form when no square factor remains under the root.'),
  method('Rationalising the denominator', [
    'For a single surd a/√b, multiply top and bottom by √b.',
    'For a/(b + √c), multiply top and bottom by the CONJUGATE b − √c.',
    'Expand using the difference of two squares: (b + √c)(b − √c) = b² − c, which is rational.',
    'Simplify, and factorise out any common factor.',
  ]),
  worked('Rationalise 6/(3 − √3).', [
    'Multiply top and bottom by the conjugate 3 + √3',
    'Numerator: 6(3 + √3) = 18 + 6√3',
    'Denominator: (3 − √3)(3 + √3) = 9 − 3 = 6',
    '(18 + 6√3)/6 = 3 + √3',
  ]),
  h('Expanding and factorising'),
  ul([
    'Difference of two squares: a² − b² = (a + b)(a − b)',
    'Perfect square: a² ± 2ab + b² = (a ± b)²',
    'For ax² + bx + c with a ≠ 1, find two numbers multiplying to ac and adding to b, then split the middle term.',
  ]),
  worked('Factorise 6x² + 11x − 10.', [
    'ac = 6 × (−10) = −60, and we need two numbers with product −60 and sum +11: those are +15 and −4',
    'Split the middle term: 6x² + 15x − 4x − 10',
    'Group: 3x(2x + 5) − 2(2x + 5)',
    'Answer: (3x − 2)(2x + 5)',
  ]),
  pitfalls([
    'a⁻ⁿ = 1/aⁿ - a negative power does not make the answer negative.',
    '√a + √b is NOT √(a+b). The product and quotient rules work; addition does not.',
    'When rationalising, the conjugate changes the SIGN between the terms, not the terms themselves.',
    'Always check whether a common factor can be taken out BEFORE factorising a quadratic - 2x² + 10x + 12 is 2(x + 2)(x + 3).',
  ]),
)

/* ============================================================= QUADRATICS */

const quadratics = chapter(
  rule('The quadratic formula', 'For ax² + bx + c = 0,  x = [−b ± √(b² − 4ac)] / 2a', 'In the formula book, but the discriminant is not - learn it.'),
  h('Completing the square'),
  method('Completing the square for ax² + bx + c', [
    'If a ≠ 1, factor a out of the first TWO terms only: a[x² + (b/a)x] + c.',
    'Halve the coefficient of x inside the bracket and square it.',
    'Write as a(x + p)² and subtract a×p² to keep the expression equal.',
    'Collect the constants.',
  ]),
  worked('Write 2x² − 12x + 7 in the form a(x + p)² + q.', [
    'Factor 2 from the first two terms: 2(x² − 6x) + 7',
    'Half of −6 is −3, so x² − 6x = (x − 3)² − 9',
    '2[(x − 3)² − 9] + 7 = 2(x − 3)² − 18 + 7',
    'Answer: 2(x − 3)² − 11, so the minimum is at (3, −11)',
  ]),
  p('Completing the square reads the graph straight off the algebra: the vertex is at (−p, q), the line of symmetry is x = −p, and the minimum value is q.'),
  diagram('completing-square'),
  h('The discriminant'),
  rule('Discriminant', 'Δ = b² − 4ac. Δ > 0 → two distinct real roots. Δ = 0 → one repeated root. Δ < 0 → no real roots.'),
  diagram('discriminant'),
  worked('The equation x² + kx + 9 = 0 has equal roots. Find k.', [
    'Equal roots means the discriminant is zero: b² − 4ac = 0',
    'k² − 4(1)(9) = 0',
    'k² = 36',
    'k = ±6 - BOTH values, since squaring loses the sign',
  ]),
  pitfalls([
    '"Two real roots" is Δ > 0; "real roots" (which includes equal ones) is Δ ≥ 0. Read the wording exactly.',
    'A discriminant question almost always produces a quadratic in k with TWO answers. Losing the negative one is the standard dropped mark.',
    'When completing the square with a ≠ 1, the constant you subtract must be multiplied by a as well.',
    'The minimum of a(x + p)² + q is q only when a > 0; if a < 0 it is a MAXIMUM.',
  ]),
)

/* ============================================ EQUATIONS AND INEQUALITIES */

const equationsInequalities = chapter(
  h('Simultaneous equations'),
  method('One linear, one quadratic', [
    'Rearrange the LINEAR equation to make one variable the subject.',
    'Substitute into the quadratic.',
    'Solve the resulting quadratic.',
    'Substitute each root back into the LINEAR equation to find the paired values.',
    'State the answers as coordinate pairs.',
  ]),
  worked('Solve y = x + 2 and x² + y² = 10.', [
    'Substitute: x² + (x + 2)² = 10',
    'x² + x² + 4x + 4 = 10  →  2x² + 4x − 6 = 0  →  x² + 2x − 3 = 0',
    '(x + 3)(x − 1) = 0, so x = −3 or x = 1',
    'x = −3 → y = −1;  x = 1 → y = 3',
    'Answer: (−3, −1) and (1, 3)',
  ]),
  tip('Always substitute back into the LINEAR equation. Using the quadratic can introduce solutions that do not satisfy both, and it is more work.'),
  h('Inequalities'),
  method('Solving a quadratic inequality', [
    'Rearrange so one side is zero.',
    'Factorise or use the formula to find the CRITICAL VALUES.',
    'Sketch the parabola - this is the step that prevents sign errors.',
    'Read off the region: for > 0 take the parts ABOVE the axis (outside the roots for a positive parabola); for < 0 take BELOW (between the roots).',
    'Write the answer in set or inequality notation.',
  ]),
  worked('Solve x² − x − 6 > 0.', [
    'Factorise: (x − 3)(x + 2) > 0, so critical values are x = 3 and x = −2',
    'The parabola opens upward, so it is above the axis OUTSIDE the roots',
    'Answer: x < −2 or x > 3',
  ]),
  pitfalls([
    'Multiplying or dividing an inequality by a NEGATIVE number reverses the sign. This is the single most common error in the topic.',
    'For a quadratic inequality, "or" joins two separate regions and "and" describes one region between the roots - writing 3 < x < −2 is impossible and scores nothing.',
    'Never divide an inequality by a variable: you do not know its sign. Rearrange to zero instead.',
    'A sketch is worth doing every time; it takes ten seconds and removes the guesswork.',
  ]),
)

/* ==================================== GRAPHS AND TRANSFORMATIONS */

const graphsTransformations = chapter(
  h('Standard curves'),
  table(
    ['Function', 'Shape'],
    [
      ['y = xⁿ (n even)', 'Both ends up; touches or crosses at repeated roots'],
      ['y = xⁿ (n odd)', 'One end down, one up'],
      ['y = 1/x', 'Hyperbola in quadrants 1 and 3; asymptotes at both axes'],
      ['y = 1/x²', 'Both branches above the x-axis; asymptotes at both axes'],
      ['y = aˣ', 'Exponential; passes through (0, 1); asymptote y = 0'],
    ],
  ),
  h('Transformations'),
  table(
    ['Transformation', 'Effect', 'Direction'],
    [
      ['f(x) + a', 'Translation by (0, a)', 'Vertical - as expected'],
      ['f(x + a)', 'Translation by (−a, 0)', 'Horizontal - OPPOSITE to the sign'],
      ['af(x)', 'Vertical stretch, scale factor a', 'As expected'],
      ['f(ax)', 'Horizontal stretch, scale factor 1/a', 'RECIPROCAL of the number'],
      ['−f(x)', 'Reflection in the x-axis', ''],
      ['f(−x)', 'Reflection in the y-axis', ''],
    ],
  ),
  tip('Anything INSIDE the bracket affects x and behaves counter-intuitively: opposite sign for a translation, reciprocal for a stretch. Anything outside affects y and behaves as you would expect. Learn it as "inside is backwards".'),
  diagram('graph-transformations'),
  worked('The curve y = f(x) has a maximum at (2, 5). Give the maximum of y = 3f(x − 1).', [
    'f(x − 1) translates by +1 in the x-direction: the point moves to (3, 5)',
    '3f(…) stretches vertically by scale factor 3: the y-coordinate triples',
    'Answer: (3, 15)',
  ]),
  h('Sketching from factorised form'),
  method('Sketching a polynomial', [
    'Find where it crosses the x-axis by setting y = 0 - the roots.',
    'Find the y-intercept by setting x = 0.',
    'Decide the behaviour at each root: a single factor CROSSES, a squared factor TOUCHES, a cubed factor crosses with a point of inflection.',
    'Decide the ends from the highest power and the sign of its coefficient.',
    'Draw a smooth curve through all of it.',
  ]),
  pitfalls([
    'f(x + 3) moves the curve LEFT, not right.',
    'f(2x) is a stretch of scale factor ½, not 2 - it squashes the curve.',
    'A repeated root touches the axis; drawing it as a crossing loses the shape mark.',
    'When several transformations are combined, apply them in the order the function is built up, and state each one.',
  ]),
)

/* ====================================================== STRAIGHT LINES */

const straightLines = chapter(
  rule('Gradient', 'm = (y₂ − y₁)/(x₂ − x₁)'),
  rule('Equation of a line', 'y − y₁ = m(x − x₁) through a point, or y = mx + c, or ax + by + c = 0'),
  rule('Parallel and perpendicular', 'Parallel: m₁ = m₂. Perpendicular: m₁m₂ = −1, so the gradient is the NEGATIVE RECIPROCAL.'),
  diagram('straight-line'),
  worked('Find the equation of the line through (2, 5) perpendicular to y = 4x − 1, in the form ax + by + c = 0.', [
    'Gradient of the given line is 4, so the perpendicular gradient is −1/4',
    'y − 5 = −¼(x − 2)',
    'Multiply through by 4: 4y − 20 = −(x − 2) = −x + 2',
    'Answer: x + 4y − 22 = 0',
  ]),
  rule('Distance and midpoint', 'Distance = √[(x₂ − x₁)² + (y₂ − y₁)²].  Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)'),
  pitfalls([
    'The negative reciprocal of 2 is −½, not −2 and not ½. Take the reciprocal AND change the sign.',
    'If the question asks for ax + by + c = 0 with integer coefficients, you must clear fractions - leaving y = −¼x + 5½ loses the final mark.',
    'A vertical line has equation x = k and no gradient; its perpendicular is horizontal, y = k.',
  ]),
)

/* ============================================================= CIRCLES */

const circles = chapter(
  rule('Equation of a circle', '(x − a)² + (y − b)² = r², with centre (a, b) and radius r'),
  method('Finding the centre and radius from an expanded equation', [
    'Group the x terms and the y terms.',
    'Complete the square on each group.',
    'Move the constants to the right-hand side.',
    'Read off the centre (a, b) and take the square root for r.',
  ]),
  worked('Find the centre and radius of x² + y² − 6x + 4y − 12 = 0.', [
    '(x² − 6x) + (y² + 4y) = 12',
    'Complete the square: (x − 3)² − 9 + (y + 2)² − 4 = 12',
    '(x − 3)² + (y + 2)² = 25',
    'Centre (3, −2), radius 5',
  ]),
  h('The two circle theorems that carry the marks'),
  ul([
    'A TANGENT meets the radius at 90°, so the tangent gradient is the negative reciprocal of the radius gradient.',
    'The PERPENDICULAR BISECTOR of any chord passes through the centre - this is how you find a centre from three points.',
    'The angle in a semicircle is 90°, so if a triangle inscribed in a circle has a right angle, the hypotenuse is a DIAMETER.',
  ]),
  diagram('circle-geometry'),
  worked('A circle has centre (1, 2). Find the tangent at the point (4, 6).', [
    'Radius gradient = (6 − 2)/(4 − 1) = 4/3',
    'Tangent gradient is the negative reciprocal: −3/4',
    'y − 6 = −¾(x − 4)',
    'Answer: 4y + 3x = 36  (or 3x + 4y − 36 = 0)',
  ]),
  pitfalls([
    'The equation has (x − a), so a centre of (3, −2) appears as (x − 3)² + (y + 2)². The signs flip.',
    'The right-hand side is r², not r - forgetting to square-root gives a radius of 25 rather than 5.',
    'Completing the square on the y terms is often forgotten when the x terms are done first.',
  ]),
)

/* =================================================== ALGEBRAIC METHODS */

const algebraicMethods = chapter(
  h('The factor and remainder theorems'),
  rule('Factor theorem', 'If f(p) = 0 then (x − p) is a factor of f(x). If (ax − b) is a factor then f(b/a) = 0.'),
  rule('Remainder theorem', 'The remainder when f(x) is divided by (x − p) is f(p).'),
  diagram('factor-theorem'),
  method('Fully factorising a cubic', [
    'Try small values - ±1, ±2, and factors of the constant term - until f(p) = 0.',
    'That gives one factor (x − p).',
    'Divide the cubic by that factor, by long division or by inspection, to get a quadratic.',
    'Factorise the quadratic, or use the formula if it does not factorise.',
    'Write the full factorisation and state all roots.',
  ]),
  worked('Fully factorise f(x) = x³ − 4x² + x + 6.', [
    'f(−1) = −1 − 4 − 1 + 6 = 0, so (x + 1) is a factor',
    'Divide: x³ − 4x² + x + 6 = (x + 1)(x² − 5x + 6)',
    'Factorise the quadratic: x² − 5x + 6 = (x − 2)(x − 3)',
    'Answer: (x + 1)(x − 2)(x − 3), with roots −1, 2 and 3',
  ]),
  h('Proof'),
  table(
    ['Type', 'What you do'],
    [
      ['Proof by deduction', 'Start from known facts and reason forward to the result.'],
      ['Proof by exhaustion', 'Split into all possible cases and check each one.'],
      ['Disproof by counter-example', 'ONE example where the statement fails is enough to disprove it.'],
      ['Proof by contradiction', 'Assume the OPPOSITE, reason to something impossible, conclude the assumption was false.'],
    ],
  ),
  p('For contradiction you must know the standard proofs: that √2 is irrational, and that there are infinitely many primes.'),
  pitfalls([
    'A proof must end with a CONCLUDING STATEMENT - "hence (x + 1) is a factor" or "which is a contradiction, so √2 is irrational". Stopping at the algebra loses the final mark.',
    'For a counter-example you must show it fails, not just assert it - substitute and evaluate.',
    'In contradiction proofs, state clearly what you are assuming at the start.',
    'Use ⇒ and ⇔ correctly: ⇔ claims the reverse also holds, which is often false.',
  ]),
)

/* ================================================= BINOMIAL EXPANSION */

const binomial = chapter(
  rule('Binomial expansion', '(a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ, where ⁿCᵣ = n!/[r!(n − r)!]'),
  p('The coefficients are the rows of Pascal’s triangle, and each term drops one power of a and gains one of b.'),
  diagram('pascals-triangle'),
  worked('Find the coefficient of x³ in the expansion of (2 + 3x)⁵.', [
    'The x³ term is ⁵C₃ × 2⁵⁻³ × (3x)³',
    '⁵C₃ = 10',
    '2² = 4, and (3x)³ = 27x³',
    '10 × 4 × 27 = 1080, so the coefficient is 1080',
  ]),
  tip('The COEFFICIENT is the number multiplying the power - 1080. The TERM is 1080x³. Questions ask for one or the other and the distinction is marked.'),
  pitfalls([
    'The power applies to the WHOLE bracket: (3x)³ is 27x³, not 3x³. Forgetting to cube the 3 is the standard error.',
    'ⁿCᵣ counts from r = 0, so the x³ term uses r = 3 but is the FOURTH term.',
    'When the first term is not 1, both terms carry powers - do not drop the 2⁵⁻ʳ.',
  ]),
)

/* ============================================== TRIGONOMETRIC RATIOS */

const trigRatios = chapter(
  rule('Sine rule', 'a/sin A = b/sin B = c/sin C', 'Use when you have a matching side–angle PAIR.'),
  rule('Cosine rule', 'a² = b² + c² − 2bc cos A', 'Use for two sides and the included angle, or all three sides.'),
  rule('Area of a triangle', 'Area = ½ab sin C', 'C is the angle BETWEEN the two sides a and b.'),
  diagram('triangle-rules'),
  worked('In triangle ABC, b = 7, c = 9 and A = 40°. Find a.', [
    'Two sides and the included angle, so use the cosine rule',
    'a² = 7² + 9² − 2(7)(9)cos 40°',
    'a² = 49 + 81 − 126 × 0.766 = 130 − 96.5 = 33.5',
    'a = 5.79 (3 s.f.)',
  ]),
  h('The ambiguous case'),
  p(
    'When the sine rule gives an angle, there are TWO angles between 0° and 180° with that sine: θ and 180° − θ. If the question does not rule one out, both are valid answers.',
  ),
  h('Exact values'),
  table(
    ['θ', '30°', '45°', '60°'],
    [
      ['sin θ', '½', '√2/2', '√3/2'],
      ['cos θ', '√3/2', '√2/2', '½'],
      ['tan θ', '√3/3', '1', '√3'],
    ],
  ),
  pitfalls([
    'Check the calculator is in DEGREES for this topic and RADIANS for calculus. More marks are lost to this than to anything else in trigonometry.',
    'The area formula needs the INCLUDED angle. Using an angle not between the two sides gives a wrong answer with no working error visible.',
    'The ambiguous case is deliberately set. If the triangle is not obviously right-angled, ask whether the obtuse answer also works.',
    'Round only at the END - rounding cos 40° early loses accuracy marks.',
  ]),
)

/* ============================ TRIGONOMETRIC IDENTITIES AND EQUATIONS */

const trigIdentities = chapter(
  rule('The two identities to know', 'sin²θ + cos²θ = 1   and   tan θ = sin θ / cos θ'),
  p('From the first: sin²θ = 1 − cos²θ and cos²θ = 1 − sin²θ. Almost every "solve" question uses one of these to get everything into a single function.'),
  diagram('cast-diagram'),
  diagram('trig-graphs'),
  method('Solving a trigonometric equation', [
    'Use an identity to write the equation in terms of ONE trig function.',
    'Factorise or rearrange to solve, treating the trig function as a variable.',
    'Find the PRINCIPAL VALUE from your calculator.',
    'Use CAST or the graph to find all other solutions in the range.',
    'If the argument is 2θ or (θ + 30°), widen the range FIRST, solve, then convert back.',
  ]),
  worked('Solve 2sin²θ = 3cos θ for 0° ≤ θ ≤ 360°.', [
    'Replace sin²θ with 1 − cos²θ: 2(1 − cos²θ) = 3cos θ',
    '2 − 2cos²θ = 3cos θ  →  2cos²θ + 3cos θ − 2 = 0',
    'Factorise: (2cos θ − 1)(cos θ + 2) = 0',
    'cos θ = ½ or cos θ = −2. The second is impossible since −1 ≤ cos θ ≤ 1',
    'cos θ = ½ gives θ = 60° and θ = 300°',
  ]),
  pitfalls([
    'Never divide both sides by sin θ or cos θ - you lose the solutions where it equals zero. Factorise instead.',
    'Reject values outside −1 ≤ sin θ, cos θ ≤ 1, and SAY you are rejecting them.',
    'For sin 2θ = k over 0 ≤ θ ≤ 360°, solve over 0 ≤ 2θ ≤ 720° - double the range before you start, or you will miss half the answers.',
    'Give every solution in the stated range; stopping at the principal value is the most common lost mark in the topic.',
  ]),
)

/* ======================================================== VECTORS 2D */

const vectors2d = chapter(
  rule('Notation', 'A vector has magnitude AND direction. In component form v = ai + bj or as a column vector.'),
  rule('Magnitude', '|v| = √(a² + b²)'),
  rule('Unit vector', 'v̂ = v / |v| - divide each component by the magnitude.'),
  diagram('vectors-2d'),
  worked('Given a = 3i − 4j, find |a| and the unit vector in the direction of a.', [
    '|a| = √(3² + (−4)²) = √25 = 5',
    'Unit vector = (1/5)(3i − 4j)',
    'Answer: 0.6i − 0.8j',
  ]),
  h('Position vectors and geometry'),
  ul([
    'The position vector of A is OA, measured from the origin.',
    'AB = OB − OA - "destination minus start". Getting this backwards is a standard error.',
    'Parallel vectors are scalar multiples of each other: a = kb.',
    'Three points are COLLINEAR if one vector between them is a scalar multiple of another AND they share a point.',
  ]),
  worked('A is (1, 3) and B is (7, 11). Find AB and its magnitude.', [
    'AB = OB − OA = (7i + 11j) − (i + 3j)',
    'AB = 6i + 8j',
    '|AB| = √(36 + 64) = √100 = 10',
  ]),
  pitfalls([
    'AB = OB − OA, not OA − OB. Check the direction every time.',
    'The magnitude is never negative - a minus sign inside is squared away.',
    'To show collinearity you need the scalar multiple AND a shared point; parallel alone is not enough.',
  ]),
)

/* ==================================================== DIFFERENTIATION */

const differentiation = chapter(
  rule('The rule', 'If y = axⁿ then dy/dx = anxⁿ⁻¹ - multiply by the power, then reduce the power by one.'),
  p('dy/dx is the GRADIENT of the curve at a point, and also the rate of change of y with respect to x.'),
  method('Finding the equation of a tangent or normal', [
    'Differentiate to get dy/dx.',
    'Substitute the x-coordinate to get the gradient at that point.',
    'For a NORMAL, take the negative reciprocal of that gradient.',
    'Find the y-coordinate if not given, by substituting into the ORIGINAL equation.',
    'Use y − y₁ = m(x − x₁).',
  ]),
  diagram('tangent-normal'),
  worked('Find the normal to y = x² − 3x at the point where x = 4.', [
    'dy/dx = 2x − 3',
    'At x = 4: gradient = 8 − 3 = 5',
    'Normal gradient = −1/5',
    'y-coordinate: y = 16 − 12 = 4, so the point is (4, 4)',
    'y − 4 = −⅕(x − 4)  →  x + 5y − 24 = 0',
  ]),
  h('Stationary points'),
  method('Finding and classifying stationary points', [
    'Set dy/dx = 0 and solve for x.',
    'Substitute back into the ORIGINAL equation to get the y-coordinates.',
    'Find d²y/dx².',
    'If d²y/dx² < 0 it is a MAXIMUM; if > 0 a MINIMUM; if = 0 the test fails and you must check the gradient either side.',
  ]),
  diagram('stationary-points'),
  worked('Find and classify the stationary points of y = x³ − 3x.', [
    'dy/dx = 3x² − 3 = 0  →  x² = 1  →  x = ±1',
    'y(1) = 1 − 3 = −2;  y(−1) = −1 + 3 = 2',
    'd²y/dx² = 6x',
    'At x = 1: 6 > 0, so (1, −2) is a MINIMUM',
    'At x = −1: −6 < 0, so (−1, 2) is a MAXIMUM',
  ]),
  pitfalls([
    'Substitute back into the ORIGINAL function for the y-coordinate, never into dy/dx.',
    'Rewrite roots and fractions as powers before differentiating: √x is x¹ᐟ², and 1/x² is x⁻².',
    'A constant differentiates to 0, and a term in x alone differentiates to its coefficient.',
    'If d²y/dx² = 0 the second derivative test is INCONCLUSIVE - you must test the gradient on both sides.',
  ]),
)

/* ======================================================== INTEGRATION */

const integration = chapter(
  rule('The rule', '∫axⁿ dx = axⁿ⁺¹/(n + 1) + c, for n ≠ −1 - add one to the power, divide by the new power.'),
  tip('The + c is a whole mark on every indefinite integral, and it is the most frequently dropped mark in the entire specification. Write it before you do anything else.'),
  h('Definite integrals and area'),
  rule('Definite integral', '∫ᵇₐ f(x) dx = [F(x)]ᵇₐ = F(b) − F(a). No constant is needed - it cancels.'),
  diagram('area-under-curve'),
  worked('Evaluate ∫₁³ (2x + 1) dx.', [
    'Integrate: [x² + x]₁³',
    'Upper: 3² + 3 = 12',
    'Lower: 1² + 1 = 2',
    'Answer: 12 − 2 = 10',
  ]),
  method('Finding the area between a curve and the x-axis', [
    'Find the limits - often where the curve crosses the axis, so set y = 0.',
    'Integrate between them.',
    'If any part is BELOW the axis, that integral is negative: split the integral at the crossing point and take the modulus of each part.',
    'Add the parts.',
  ]),
  pitfalls([
    'Omitting + c on an indefinite integral. Every time.',
    'Area below the axis gives a NEGATIVE integral. A question asking for "the area" wants the positive total, so split and take moduli.',
    'F(b) − F(a), in that order. Reversing gives the wrong sign.',
    'Integration reverses differentiation, so to find a curve from its gradient function you must integrate AND use a given point to find c.',
  ]),
)

/* =============================================== EXPONENTIALS AND LOGS */

const exponentialsLogs = chapter(
  rule('Definition', 'If aˣ = b then log_a b = x. A logarithm is a POWER.'),
  rule('Log laws', 'log a + log b = log(ab) · log a − log b = log(a/b) · n log a = log(aⁿ) · log_a a = 1 · log_a 1 = 0'),
  rule('e and ln', 'e ≈ 2.718. ln x means log_e x. eˡⁿ ˣ = x and ln(eˣ) = x - they undo each other.'),
  diagram('exponential-log'),
  worked('Solve 3²ˣ = 20, giving x to 3 s.f.', [
    'Take logs of both sides: log(3²ˣ) = log 20',
    'Bring the power down: 2x log 3 = log 20',
    '2x = log 20 / log 3 = 2.7268',
    'x = 1.36 (3 s.f.)',
  ]),
  h('Modelling and linearising'),
  method('Reducing an exponential model to linear form', [
    'For y = abˣ, take logs: log y = log a + x log b.',
    'Plotting log y against x gives a straight line with gradient log b and intercept log a.',
    'For y = axⁿ, take logs: log y = log a + n log x - plot log y against LOG x, and the gradient is n.',
    'Which pair of axes straightens the data tells you which model it is.',
  ]),
  diagram('log-linear'),
  pitfalls([
    'log a + log b = log(ab), NOT log(a + b). The most common log error there is.',
    'You cannot take the log of a negative number or zero - reject those solutions and say so.',
    'The power rule is what makes logs useful: use it to bring the unknown down from the exponent.',
    'For y = abˣ plot log y against x; for y = axⁿ plot log y against log x. Choosing the wrong pair gives a curve, not a line.',
  ]),
)

export const MATHS_PURE1_NOTES = {
  'Algebraic Expressions': algebraicExpressions,
  Quadratics: quadratics,
  'Equations and Inequalities': equationsInequalities,
  'Graphs and Transformations': graphsTransformations,
  'Straight Line Graphs': straightLines,
  Circles: circles,
  'Algebraic Methods (Proof & Division)': algebraicMethods,
  'The Binomial Expansion': binomial,
  'Trigonometric Ratios': trigRatios,
  'Trigonometric Identities and Equations': trigIdentities,
  'Vectors (2D)': vectors2d,
  Differentiation: differentiation,
  Integration: integration,
  'Exponentials and Logarithms': exponentialsLogs,
}
