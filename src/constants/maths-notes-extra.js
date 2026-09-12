/*
  Extra worked examples, at exam standard.

  Maths is not learnt by reading - it is learnt by working through questions
  and seeing the METHOD LINES a marker awards. The core notes give one worked
  example per technique; these add the harder, more typical exam versions:
  the ones that combine two topics, or that need a condition stated, or where
  the standard method has to be adapted.

  Every solution shows the working, not just the answer, because in Maths the
  answer is usually worth one mark out of four or five.
*/

import { h, worked, tip, chapter } from './maths-notes-build'

/* ------------------------------------------------------------- PURE 1 */

const algebraicExpressions = chapter(
  h('More practice'),
  worked('Simplify (3 + √5)(2 − √5).', [
    'Expand: 6 − 3√5 + 2√5 − (√5)²',
    '(√5)² = 5',
    '6 − 3√5 + 2√5 − 5',
    'Answer: 1 − √5',
  ]),
  worked('Solve 2³ˣ = 32.', [
    'Write 32 as a power of 2: 32 = 2⁵',
    '2³ˣ = 2⁵, so the powers are equal',
    '3x = 5',
    'x = 5/3',
  ]),
  worked('Express 48¹ᐟ² in the form a√3.', [
    '√48 = √(16 × 3)',
    '= √16 × √3',
    'Answer: 4√3',
  ]),
)

const quadratics = chapter(
  h('More practice'),
  worked('The equation 2x² + kx + 8 = 0 has no real roots. Find the range of k.', [
    'No real roots means b² − 4ac < 0',
    'k² − 4(2)(8) < 0',
    'k² − 64 < 0, so k² < 64',
    'Answer: −8 < k < 8 - note this is ONE region, not two',
  ]),
  worked('Solve the disguised quadratic x⁴ − 5x² + 4 = 0.', [
    'Let u = x², so the equation becomes u² − 5u + 4 = 0',
    'Factorise: (u − 1)(u − 4) = 0, so u = 1 or u = 4',
    'x² = 1 gives x = ±1;  x² = 4 gives x = ±2',
    'Answer: x = ±1, ±2 - four solutions',
  ]),
  tip('A "disguised quadratic" has powers in the ratio 2 : 1 - x⁴ and x², or x and √x, or 2²ˣ and 2ˣ. Substitute u for the smaller power. Every root of u then produces its own roots of x, so expect more solutions than the quadratic had.'),
)

const equationsInequalities = chapter(
  h('More practice'),
  worked('Find the set of values of x for which 3x − 7 < x + 5 AND x² − 9 > 0.', [
    'First: 3x − 7 < x + 5  →  2x < 12  →  x < 6',
    'Second: x² > 9, so x < −3 or x > 3',
    'Both must hold: combine on a number line',
    'Answer: x < −3 or 3 < x < 6',
  ]),
  worked('The line y = kx − 3 is a tangent to the curve y = x² + 1. Find k.', [
    'Set them equal: kx − 3 = x² + 1  →  x² − kx + 4 = 0',
    'A TANGENT touches once, so the discriminant is zero',
    'k² − 16 = 0',
    'k = ±4',
  ]),
  tip('"Tangent" means one repeated root, so Δ = 0. "Intersects twice" means Δ > 0, and "does not meet" means Δ < 0. Turning a geometry statement into a discriminant condition is one of the most reliable question types in Pure 1.'),
)

const graphsTransformations = chapter(
  h('More practice'),
  worked('Sketch y = (x − 1)(x + 2)², stating where it meets the axes.', [
    'Roots: x = 1 (single, so it CROSSES) and x = −2 (squared, so it TOUCHES)',
    'y-intercept: x = 0 gives (−1)(4) = −4, so (0, −4)',
    'Highest power is x³ with positive coefficient, so it goes from bottom-left to top-right',
    'Curve rises from the bottom left, touches at (−2, 0), dips, then crosses at (1, 0)',
  ]),
  worked('The curve y = f(x) passes through (4, 0). Where does y = f(2x) + 3 cross the y-axis relationship at that root?', [
    'f(2x) is a horizontal stretch of scale factor ½, so x = 4 moves to x = 2',
    '+3 translates up 3, so the y-coordinate 0 becomes 3',
    'The image point is (2, 3)',
  ]),
)

const straightLines = chapter(
  h('More practice'),
  worked('A(1, 2), B(5, 10). Find the perpendicular bisector of AB.', [
    'Midpoint: ((1+5)/2, (2+10)/2) = (3, 6)',
    'Gradient of AB: (10 − 2)/(5 − 1) = 2',
    'Perpendicular gradient: −½',
    'y − 6 = −½(x − 3)  →  2y − 12 = −x + 3',
    'Answer: x + 2y − 15 = 0',
  ]),
  worked('Show that A(0, 1), B(2, 5) and C(5, 11) are NOT collinear.', [
    'Gradient AB = (5 − 1)/(2 − 0) = 2',
    'Gradient BC = (11 − 5)/(5 − 2) = 2',
    'These are equal, and B is common to both - so they ARE collinear',
    'The statement is false; the correct conclusion is that they lie on a straight line',
  ]),
  tip('To test collinearity, compare two gradients that SHARE a point. Equal gradients alone only prove the lines are parallel.'),
)

const circles = chapter(
  h('More practice'),
  worked('A circle has centre (2, −1) and passes through (5, 3). Find its equation.', [
    'Radius = distance from centre to the point = √[(5−2)² + (3−(−1))²]',
    '= √(9 + 16) = √25 = 5',
    'Equation: (x − 2)² + (y + 1)² = r²',
    'Answer: (x − 2)² + (y + 1)² = 25',
  ]),
  worked('AB is a diameter with A(1, 3) and B(7, 11). Find the centre and radius.', [
    'The centre is the MIDPOINT of a diameter: ((1+7)/2, (3+11)/2) = (4, 7)',
    'The diameter length is √[(7−1)² + (11−3)²] = √(36 + 64) = 10',
    'Radius = 10/2 = 5',
    'Centre (4, 7), radius 5',
  ]),
)

const algebraicMethods = chapter(
  h('More practice'),
  worked('Find the remainder when f(x) = 2x³ − 3x² + x − 5 is divided by (x − 2).', [
    'By the remainder theorem, the remainder is f(2)',
    'f(2) = 2(8) − 3(4) + 2 − 5',
    '= 16 − 12 + 2 − 5',
    'Remainder = 1',
  ]),
  worked('Prove that the sum of any two consecutive odd numbers is a multiple of 4.', [
    'Let the numbers be 2n + 1 and 2n + 3, for integer n',
    'Sum = 2n + 1 + 2n + 3 = 4n + 4',
    '= 4(n + 1)',
    'Since n + 1 is an integer, the sum is a multiple of 4 - as required',
  ]),
  tip('An algebraic proof must define its variables ("for integer n"), do the algebra, and finish with a concluding sentence linking back to the statement. All three are marked separately.'),
)

const binomial = chapter(
  h('More practice'),
  worked('Find the first three terms of (1 − 2x)⁶ in ascending powers of x.', [
    'Term 1: 1',
    'Term 2: ⁶C₁ (−2x) = 6 × (−2x) = −12x',
    'Term 3: ⁶C₂ (−2x)² = 15 × 4x² = 60x²',
    'Answer: 1 − 12x + 60x²',
  ]),
  worked('In the expansion of (2 + ax)⁴ the coefficient of x² is 216. Find a.', [
    'The x² term is ⁴C₂ × 2² × (ax)² = 6 × 4 × a²x² = 24a²x²',
    'So 24a² = 216',
    'a² = 9',
    'a = ±3',
  ]),
  tip('A negative sign inside the bracket alternates the signs of the terms, and gets SQUARED away on even powers. (−2x)² is +4x², not −4x².'),
)

const trigRatios = chapter(
  h('More practice'),
  worked('A triangle has sides 5, 7 and 9. Find the largest angle.', [
    'The largest angle is opposite the longest side, so opposite 9',
    'Cosine rule: 9² = 5² + 7² − 2(5)(7)cos A',
    '81 = 25 + 49 − 70cos A  →  81 = 74 − 70cos A',
    'cos A = −7/70 = −0.1',
    'A = 95.7° (3 s.f.) - obtuse, as expected for the largest angle',
  ]),
  worked('Triangle ABC has a = 8, A = 40°, b = 11. Find angle B, considering both cases.', [
    'Sine rule: sin B / 11 = sin 40° / 8',
    'sin B = 11 sin 40° / 8 = 0.8838',
    'B = 62.1°, OR B = 180° − 62.1° = 117.9°',
    'Both are valid unless the question rules one out - this is the ambiguous case',
  ]),
)

const trigIdentities = chapter(
  h('More practice'),
  worked('Solve 3 tan θ = 2 cos θ for 0° ≤ θ ≤ 360°.', [
    'tan θ = sin θ / cos θ, so 3 sin θ / cos θ = 2 cos θ',
    'Multiply by cos θ: 3 sin θ = 2cos²θ = 2(1 − sin²θ)',
    '2sin²θ + 3sin θ − 2 = 0  →  (2sin θ − 1)(sin θ + 2) = 0',
    'sin θ = ½ (reject sin θ = −2, impossible)',
    'θ = 30° and θ = 150°',
  ]),
  worked('Solve sin(2θ + 30°) = 0.5 for 0° ≤ θ ≤ 360°.', [
    'Let u = 2θ + 30°. As θ runs 0 to 360, u runs 30° to 750°',
    'sin u = 0.5 gives u = 30°, 150°, 390°, 510° within that range',
    'Subtract 30 and halve: θ = 0°, 60°, 180°, 240°',
  ]),
  tip('For sin(aθ + b), transform the RANGE first, find every solution for the bracket, and only then convert back. Solving for θ first and adjusting afterwards loses solutions every time.'),
)

const vectors2d = chapter(
  h('More practice'),
  worked('OA = 2i + 3j and OB = 8i − j. Find the position vector of M, the midpoint of AB.', [
    'OM = OA + ½AB, or more simply the average of the two position vectors',
    'OM = ½(OA + OB) = ½[(2 + 8)i + (3 − 1)j]',
    '= ½(10i + 2j)',
    'OM = 5i + j',
  ]),
  worked('Show that a = 6i − 9j is parallel to b = −2i + 3j.', [
    'Look for a scalar k with a = kb',
    '6 = −2k gives k = −3;  −9 = 3k gives k = −3',
    'Both components give the same k, so a = −3b',
    'Therefore they are parallel (and in opposite directions)',
  ]),
)

const differentiation = chapter(
  h('More practice'),
  worked('A cuboid has square base of side x and volume 32. Find x minimising the surface area.', [
    'Height h = 32/x², so surface area S = 2x² + 4xh = 2x² + 128/x',
    'dS/dx = 4x − 128/x²',
    'Set to zero: 4x = 128/x²  →  4x³ = 128  →  x³ = 32, x = 3.17 (3 s.f.)',
    'd²S/dx² = 4 + 256/x³ > 0, so it is a MINIMUM as required',
  ]),
  worked('Find where y = 2x³ − 9x² + 12x is INCREASING.', [
    'dy/dx = 6x² − 18x + 12',
    'Increasing means dy/dx > 0: 6(x² − 3x + 2) > 0',
    '6(x − 1)(x − 2) > 0, critical values 1 and 2',
    'Positive parabola, so above the axis outside the roots',
    'Answer: x < 1 or x > 2',
  ]),
  tip('Optimisation questions always follow the same shape: write the quantity to optimise, use the constraint to get it in ONE variable, differentiate, set to zero, and JUSTIFY it is a max or min with the second derivative. The justification is a mark.'),
)

const integration = chapter(
  h('More practice'),
  worked('Find the area enclosed between y = x² and y = 2x.', [
    'Intersections: x² = 2x  →  x(x − 2) = 0, so x = 0 and x = 2',
    'The line is above the curve between them, so integrate (2x − x²)',
    '∫₀² (2x − x²) dx = [x² − x³/3]₀²',
    '= (4 − 8/3) − 0 = 4/3',
  ]),
  worked('A curve has dy/dx = 6x − 4 and passes through (2, 5). Find y.', [
    'Integrate: y = 3x² − 4x + c',
    'Substitute (2, 5): 5 = 12 − 8 + c',
    'c = 1',
    'Answer: y = 3x² − 4x + 1',
  ]),
  tip('For the area BETWEEN two curves, integrate (upper − lower) between the intersection points. That automatically handles any part below the axis, so no splitting is needed.'),
)

const exponentialsLogs = chapter(
  h('More practice'),
  worked('Solve log₂(x) + log₂(x − 2) = 3.', [
    'Combine: log₂[x(x − 2)] = 3',
    'x(x − 2) = 2³ = 8  →  x² − 2x − 8 = 0',
    '(x − 4)(x + 2) = 0, so x = 4 or x = −2',
    'REJECT x = −2, since log of a negative is undefined',
    'Answer: x = 4',
  ]),
  worked('A population is P = 500e⁰·⁰³ᵗ. Find t when P = 1200.', [
    '1200 = 500e⁰·⁰³ᵗ  →  e⁰·⁰³ᵗ = 2.4',
    'Take natural logs: 0.03t = ln 2.4 = 0.8755',
    't = 29.2 (3 s.f.)',
  ]),
  tip('Always check log solutions against the domain: the argument of every log in the ORIGINAL equation must be positive. Rejecting an invalid root and saying why is a mark.'),
)

/* ------------------------------------------------------------- PURE 2 */

const partialFractions = chapter(
  h('More practice'),
  worked('Express (3x + 7)/[(x + 2)(x + 3)] in partial fractions.', [
    'A/(x + 2) + B/(x + 3), so 3x + 7 = A(x + 3) + B(x + 2)',
    'Let x = −3: −2 = −B, so B = 2',
    'Let x = −2: 1 = A',
    'Answer: 1/(x + 2) + 2/(x + 3)',
  ]),
)

const functionsGraphs = chapter(
  h('More practice'),
  worked('f(x) = 3x − 2 with domain x ∈ ℝ. Find f⁻¹ and state its domain.', [
    'y = 3x − 2  →  x = (y + 2)/3',
    'Swap: f⁻¹(x) = (x + 2)/3',
    'The range of f is all real numbers',
    'So the domain of f⁻¹ is x ∈ ℝ',
  ]),
  worked('Solve |2x − 1| = x + 4.', [
    'Positive case: 2x − 1 = x + 4  →  x = 5',
    'Negative case: −(2x − 1) = x + 4  →  1 − 2x = x + 4  →  x = −1',
    'Check x = 5: |9| = 9 and 5 + 4 = 9 ✓',
    'Check x = −1: |−3| = 3 and −1 + 4 = 3 ✓ - both valid',
  ]),
)

const sequences = chapter(
  h('More practice'),
  worked('The 3rd term of an arithmetic sequence is 11 and the 8th is 31. Find a and d.', [
    'a + 2d = 11  and  a + 7d = 31',
    'Subtract: 5d = 20, so d = 4',
    'a + 8 = 11, so a = 3',
    'Answer: a = 3, d = 4',
  ]),
  worked('Find the least n for which the sum of 2 + 6 + 18 + … exceeds 1000.', [
    'Geometric with a = 2, r = 3.  Sₙ = 2(3ⁿ − 1)/(3 − 1) = 3ⁿ − 1',
    '3ⁿ − 1 > 1000  →  3ⁿ > 1001',
    'n log 3 > log 1001  →  n > 6.29',
    'n must be a whole number, so n = 7',
  ]),
)

const binomialGeneral = chapter(
  h('More practice'),
  worked('Expand (4 − x)¹ᐟ² up to x², and state validity.', [
    'Factor out 4: (4)¹ᐟ²(1 − x/4)¹ᐟ² = 2(1 − x/4)¹ᐟ²',
    'Expand with n = ½ and the term −x/4: 1 + ½(−x/4) + [(½)(−½)/2](−x/4)²',
    '= 1 − x/8 − (1/8)(x²/16) = 1 − x/8 − x²/128',
    'Multiply by 2: 2 − x/4 − x²/64.  Valid for |x/4| < 1, so |x| < 4',
  ]),
)

const radians = chapter(
  h('More practice'),
  worked('A sector of radius 10 cm has perimeter 35 cm. Find its angle in radians.', [
    'Perimeter = two radii plus the arc: 2r + rθ = 35',
    '20 + 10θ = 35',
    '10θ = 15',
    'θ = 1.5 rad',
  ]),
  worked('Find the area of the segment cut off by a chord subtending 1.2 rad in a circle of radius 6.', [
    'Segment = ½r²(θ − sin θ)',
    '= ½(36)(1.2 − sin 1.2)',
    'sin 1.2 = 0.932 (radians)',
    '= 18(0.268) = 4.82 cm² (3 s.f.)',
  ]),
)

const trigFunctions = chapter(
  h('More practice'),
  worked('Prove that (1 − cos 2θ)/sin 2θ = tan θ.', [
    'Use cos 2θ = 1 − 2sin²θ, so 1 − cos 2θ = 2sin²θ',
    'Use sin 2θ = 2 sin θ cos θ',
    'LHS = 2sin²θ / (2 sin θ cos θ)',
    '= sin θ / cos θ = tan θ = RHS, as required',
  ]),
  worked('Solve sec²θ = 3 + tan θ for 0 ≤ θ ≤ 2π.', [
    'Use 1 + tan²θ = sec²θ: 1 + tan²θ = 3 + tan θ',
    'tan²θ − tan θ − 2 = 0  →  (tan θ − 2)(tan θ + 1) = 0',
    'tan θ = 2 gives θ = 1.107, 4.249',
    'tan θ = −1 gives θ = 2.356 (3π/4), 5.498 (7π/4)',
  ]),
)

const trigModelling = chapter(
  h('More practice'),
  worked('Solve 5 sin θ − 12 cos θ = 6.5 for 0° ≤ θ ≤ 360°, using R sin(θ − α).', [
    'R = √(25 + 144) = 13;  tan α = 12/5, so α = 67.4°',
    '13 sin(θ − 67.4°) = 6.5  →  sin(θ − 67.4°) = 0.5',
    'θ − 67.4° = 30° or 150°  (range −67.4° to 292.6°)',
    'θ = 97.4° or θ = 217.4°',
  ]),
)

const parametric = chapter(
  h('More practice'),
  worked('A curve has x = t² + 1, y = 4t. Find the equation of the tangent at t = 2.', [
    'dx/dt = 2t, dy/dt = 4, so dy/dx = 4/(2t) = 2/t',
    'At t = 2: gradient = 1, and the point is (5, 8)',
    'y − 8 = 1(x − 5)',
    'Answer: y = x + 3',
  ]),
)

const differentiation2 = chapter(
  h('More practice'),
  worked('Differentiate y = ln(3x² + 1).', [
    'Chain rule with u = 3x² + 1',
    'd/dx [ln u] = (1/u)(du/dx)',
    'du/dx = 6x',
    'Answer: 6x/(3x² + 1)',
  ]),
  worked('Differentiate y = (2x + 1)/(x − 3) using the quotient rule.', [
    'u = 2x + 1, v = x − 3;  du/dx = 2, dv/dx = 1',
    'dy/dx = [v(du/dx) − u(dv/dx)]/v² = [(x − 3)(2) − (2x + 1)(1)]/(x − 3)²',
    '= (2x − 6 − 2x − 1)/(x − 3)²',
    'Answer: −7/(x − 3)²',
  ]),
  worked('A spherical balloon is inflated at 20 cm³ s⁻¹. Find dr/dt when r = 5.', [
    'V = (4/3)πr³, so dV/dr = 4πr²',
    'dV/dt = (dV/dr)(dr/dt), so 20 = 4π(25)(dr/dt)',
    'dr/dt = 20/(100π)',
    '= 0.0637 cm s⁻¹ (3 s.f.)',
  ]),
)

const numericalMethods = chapter(
  h('More practice'),
  worked('Show that f(x) = x³ − x − 3 has a root between 1.6 and 1.7.', [
    'f(1.6) = 4.096 − 1.6 − 3 = −0.504',
    'f(1.7) = 4.913 − 1.7 − 3 = 0.213',
    'There is a change of sign, and f is continuous on [1.6, 1.7]',
    'Therefore a root lies in the interval',
  ]),
  worked('Apply Newton–Raphson once to f(x) = x³ − 5 with x₀ = 2.', [
    'f(x) = x³ − 5, f′(x) = 3x²',
    'f(2) = 3, f′(2) = 12',
    'x₁ = 2 − 3/12',
    'x₁ = 1.75',
  ]),
)

const integration2 = chapter(
  h('More practice'),
  worked('Find ∫ x cos x dx.', [
    'By parts with u = x (simplifies), dv/dx = cos x',
    'du/dx = 1, v = sin x',
    '= x sin x − ∫ sin x dx',
    'Answer: x sin x + cos x + c',
  ]),
  worked('Evaluate ∫₀¹ x(x² + 1)⁴ dx by substitution.', [
    'u = x² + 1, du = 2x dx, so x dx = du/2',
    'Limits: x = 0 → u = 1;  x = 1 → u = 2',
    '= ½∫₁² u⁴ du = ½[u⁵/5]₁²',
    '= (1/10)(32 − 1) = 31/10 = 3.1',
  ]),
)

const vectors3d = chapter(
  h('More practice'),
  worked('A is (1, 0, 2) and B is (4, 4, 2). Find |AB|.', [
    'AB = OB − OA = 3i + 4j + 0k',
    '|AB| = √(9 + 16 + 0)',
    '= √25',
    'Answer: 5',
  ]),
)

/* ---------------------------------------------------------- APPLIED */

const dataPresentation = chapter(
  h('More practice'),
  worked('A histogram bar covers 10–20 with height (frequency density) 3.5. Find the frequency.', [
    'Class width = 20 − 10 = 10',
    'Frequency = frequency density × class width',
    '= 3.5 × 10',
    'Answer: 35',
  ]),
  worked('Data is coded with y = (x − 20)/5, giving ȳ = 4 and σ_y = 2. Find x̄ and σ_x.', [
    'x̄ = 5ȳ + 20 = 5(4) + 20 = 40',
    'σ_x = 5σ_y = 5(2) = 10',
    'The subtraction affects the mean but NOT the standard deviation',
  ]),
)

const probability = chapter(
  h('More practice'),
  worked('P(A) = 0.6, P(B) = 0.3, and A and B are independent. Find P(A ∪ B).', [
    'Independent, so P(A ∩ B) = 0.6 × 0.3 = 0.18',
    'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)',
    '= 0.6 + 0.3 − 0.18',
    'Answer: 0.72',
  ]),
)

const binomialDist = chapter(
  h('More practice'),
  worked('X ~ B(20, 0.15). Find P(X ≥ 4).', [
    'P(X ≥ 4) = 1 − P(X ≤ 3)',
    'From tables or calculator, P(X ≤ 3) = 0.6477',
    '1 − 0.6477',
    'Answer: 0.352 (3 s.f.)',
  ]),
  worked('X ~ B(50, 0.2). Find the mean and standard deviation.', [
    'E(X) = np = 50 × 0.2 = 10',
    'Var(X) = np(1 − p) = 50 × 0.2 × 0.8 = 8',
    'σ = √8',
    'Answer: mean 10, σ = 2.83 (3 s.f.)',
  ]),
)

const hypothesisTesting = chapter(
  h('More practice'),
  worked('A machine should produce 5% defectives. In 100 items, 2 are defective. Test at 5% whether the rate has FALLEN.', [
    'H₀: p = 0.05, H₁: p < 0.05 (one-tailed)',
    'Assume H₀: X ~ B(100, 0.05)',
    'P(X ≤ 2) = 0.1183',
    '0.1183 > 0.05, so the result is not significant',
    'There is insufficient evidence to reject H₀: no evidence the defect rate has fallen',
  ]),
  tip('Note the conclusion wording. "Insufficient evidence to reject H₀" is correct; "the rate has not fallen" and "accept H₀" are both wrong and both lose the mark.'),
)

const normal = chapter(
  h('More practice'),
  worked('X ~ N(100, 225). Find P(85 < X < 115).', [
    'σ = √225 = 15',
    'z₁ = (85 − 100)/15 = −1;  z₂ = (115 − 100)/15 = 1',
    'P(−1 < Z < 1) = 0.8413 − 0.1587',
    'Answer: 0.683 - the familiar 68% within one standard deviation',
  ]),
  worked('X ~ N(μ, 4²) and P(X > 30) = 0.1. Find μ.', [
    'P(Z > z) = 0.1 gives z = 1.2816',
    '1.2816 = (30 − μ)/4',
    '5.126 = 30 − μ',
    'μ = 24.9 (3 s.f.)',
  ]),
)

const suvat = chapter(
  h('More practice'),
  worked('A stone is dropped from 45 m. Find the time to land and its speed on impact. (g = 9.8)', [
    'Taking down as positive: u = 0, a = 9.8, s = 45',
    's = ut + ½at²: 45 = 0 + 4.9t²  →  t² = 9.184, t = 3.03 s',
    'v = u + at = 0 + 9.8(3.03)',
    'v = 29.7 m s⁻¹ (3 s.f.)',
  ]),
  worked('A car decelerates uniformly from 30 m s⁻¹ to rest in 120 m. Find the deceleration.', [
    'u = 30, v = 0, s = 120',
    'v² = u² + 2as: 0 = 900 + 240a',
    'a = −900/240 = −3.75',
    'Deceleration is 3.75 m s⁻²',
  ]),
)

const forces = chapter(
  h('More practice'),
  worked('A lift of mass 800 kg accelerates upward at 1.5 m s⁻². Find the tension in the cable.', [
    'Forces: tension T up, weight 800g down',
    'Taking up as positive: T − 800(9.8) = 800(1.5)',
    'T − 7840 = 1200',
    'T = 9040 N',
  ]),
  tip('The tension exceeds the weight when accelerating upward and is less than it when accelerating downward. Checking that gives a quick sanity test on the answer.'),
)

const moments = chapter(
  h('More practice'),
  worked('A uniform plank of mass 20 kg and length 4 m rests on a support 1.5 m from A. A mass sits at A to balance it. Find the mass.', [
    'The plank’s weight 20g acts at the centre, 2 m from A, which is 0.5 m from the support',
    'Taking moments about the support: m(g)(1.5) = 20(g)(0.5)',
    'The g cancels: 1.5m = 10',
    'm = 6.67 kg (3 s.f.)',
  ]),
)

const projectiles = chapter(
  h('More practice'),
  worked('A ball is kicked at 25 m s⁻¹ at 35°. Find the maximum height reached.', [
    'Vertical component: u = 25 sin 35° = 14.34 m s⁻¹',
    'At the top, v = 0.  Use v² = u² + 2as with a = −9.8',
    '0 = 205.6 − 19.6s',
    's = 10.5 m (3 s.f.)',
  ]),
  worked('A stone is thrown horizontally at 12 m s⁻¹ from a cliff 60 m high. Find how far from the base it lands.', [
    'Vertical: u = 0, a = 9.8, s = 60.  60 = 4.9t², so t = 3.499 s',
    'Horizontal: constant velocity, so distance = 12 × 3.499',
    '= 42.0 m (3 s.f.)',
    'Note the two directions share only the TIME',
  ]),
)

export const MATHS_EXTRA_WORKED = {
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
  'Algebraic Methods (Partial Fractions)': partialFractions,
  'Functions and Graphs': functionsGraphs,
  'Sequences and Series': sequences,
  'The Binomial Expansion (General n)': binomialGeneral,
  Radians: radians,
  'Trigonometric Functions': trigFunctions,
  'Trigonometry and Modelling': trigModelling,
  'Parametric Equations': parametric,
  'Differentiation (Year 2)': differentiation2,
  'Numerical Methods': numericalMethods,
  'Integration (Year 2)': integration2,
  'Vectors (3D)': vectors3d,
  'Data Presentation and Interpretation': dataPresentation,
  Probability: probability,
  'Statistical Distributions (Binomial)': binomialDist,
  'Statistical Hypothesis Testing': hypothesisTesting,
  'The Normal Distribution': normal,
  'Constant Acceleration (SUVAT)': suvat,
  "Forces and Newton's Laws": forces,
  Moments: moments,
  Projectiles: projectiles,
}
