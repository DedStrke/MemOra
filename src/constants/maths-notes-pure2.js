/*
  Edexcel A-level Maths (9MA0), Pure Year 2.

  Same shape as Pure 1: the rule, the method, a worked example with its
  method lines, and where marks are lost. Year 2 is where most A* marks are
  decided, because the questions combine topics - a parametric curve
  differentiated with the chain rule and integrated by substitution, in one
  question.
*/

import { h, p, ul, rule, method, worked, pitfalls, diagram, tip, table, chapter } from './maths-notes-build'

/* ================================================== PARTIAL FRACTIONS */

const partialFractions = chapter(
  p('Splitting a single algebraic fraction into simpler ones, so it can be integrated or expanded binomially.'),
  method('Partial fractions with distinct linear factors', [
    'Factorise the denominator fully.',
    'Write the fraction as A/(first factor) + B/(second factor), with one unknown per factor.',
    'Multiply through by the whole denominator to clear fractions.',
    'Substitute values of x that make each bracket zero in turn - this isolates one unknown at a time.',
    'State the final answer as the sum of fractions.',
  ]),
  worked('Express (5x + 1)/[(x + 1)(x − 2)] in partial fractions.', [
    'Write as A/(x + 1) + B/(x − 2)',
    'Multiply through: 5x + 1 = A(x − 2) + B(x + 1)',
    'Let x = 2: 11 = 3B, so B = 11/3',
    'Let x = −1: −4 = −3A, so A = 4/3',
    'Answer: 4/[3(x + 1)] + 11/[3(x − 2)]',
  ]),
  h('Repeated factors'),
  p(
    'A repeated factor (x − a)² needs TWO fractions: A/(x − a) + B/(x − a)². A single fraction over the squared factor is not general enough and will not work.',
  ),
  diagram('factor-theorem'),
  pitfalls([
    'A repeated factor needs both powers. Writing only B/(x − a)² is the standard error.',
    'If the numerator degree is greater than or equal to the denominator degree, do algebraic DIVISION first - an improper fraction cannot be split directly.',
    'Substituting the root of each bracket is much faster than comparing coefficients, but comparing coefficients is a valid check.',
  ]),
)

/* =================================================== FUNCTIONS AND GRAPHS */

const functionsGraphs = chapter(
  rule('Function notation', 'A function maps each input to exactly ONE output. The DOMAIN is the set of inputs; the RANGE is the set of outputs.'),
  h('Composite functions'),
  rule('Composition', 'fg(x) means do g FIRST, then f. Read it right to left.'),
  worked('f(x) = 2x + 1 and g(x) = x². Find fg(3) and gf(3).', [
    'fg(3): do g first, g(3) = 9; then f(9) = 2(9) + 1 = 19',
    'gf(3): do f first, f(3) = 7; then g(7) = 49',
    'They are different - composition is not commutative',
  ]),
  h('Inverse functions'),
  method('Finding an inverse', [
    'Write y = f(x).',
    'Rearrange to make x the subject.',
    'Swap x and y.',
    'State the domain of f⁻¹, which is the RANGE of f.',
  ]),
  p('The graph of f⁻¹ is the reflection of f in the line y = x. A function only has an inverse if it is ONE-TO-ONE, which may require restricting the domain.'),
  diagram('inverse-function'),
  h('Modulus'),
  rule('Modulus', '|x| is the distance from zero, so it is never negative. |f(x)| reflects anything below the x-axis upwards; f(|x|) keeps the right-hand side and reflects it in the y-axis.'),
  diagram('modulus-graph'),
  method('Solving a modulus equation', [
    'Sketch both sides - this shows how many solutions to expect.',
    'Solve the positive case: f(x) = g(x).',
    'Solve the negative case: −f(x) = g(x).',
    'CHECK each solution in the original equation and discard any that do not work.',
  ]),
  pitfalls([
    'fg(x) means g first. Doing them in written order is the classic error.',
    'The domain of f⁻¹ is the range of f - stating it is worth a mark and is usually forgotten.',
    'Modulus equations produce extra solutions from the negative case. You MUST check them; unchecked false solutions lose marks.',
    '|f(x)| and f(|x|) are different graphs. Read which one is asked for.',
  ]),
)

/* ================================================= SEQUENCES AND SERIES */

const sequences = chapter(
  h('Arithmetic'),
  rule('Arithmetic sequence', 'uₙ = a + (n − 1)d,  Sₙ = n/2 [2a + (n − 1)d] = n/2 (a + l)'),
  h('Geometric'),
  rule('Geometric sequence', 'uₙ = arⁿ⁻¹,  Sₙ = a(1 − rⁿ)/(1 − r),  and for |r| < 1,  S∞ = a/(1 − r)'),
  tip('S∞ only exists when |r| < 1. Stating that condition is a mark in itself, and questions are set specifically to test whether you check it.'),
  diagram('sequences-series'),
  worked('A geometric series has first term 12 and common ratio 0.25. Find S∞.', [
    '|r| = 0.25 < 1, so the sum to infinity exists',
    'S∞ = a/(1 − r) = 12/(1 − 0.25)',
    '= 12/0.75',
    'Answer: 16',
  ]),
  worked('An arithmetic series has a = 5, d = 3. Find the sum of the first 20 terms.', [
    'S₂₀ = 20/2 [2(5) + 19(3)]',
    '= 10[10 + 57]',
    '= 10 × 67',
    'Answer: 670',
  ]),
  h('Sigma notation and recurrence'),
  ul([
    'Σ from r = 1 to n means add the terms as r runs through those values.',
    'A RECURRENCE relation defines each term from the previous one, e.g. uₙ₊₁ = 3uₙ − 2, and needs a starting value.',
    'A sequence is INCREASING if uₙ₊₁ > uₙ for all n, DECREASING if the reverse, and PERIODIC if it repeats after a fixed number of terms.',
  ]),
  pitfalls([
    'uₙ uses (n − 1), not n. The 5th term of an arithmetic sequence is a + 4d.',
    'For S∞, always state |r| < 1 before using the formula.',
    'Σ from r = 3 to 10 has EIGHT terms, not seven - count inclusively.',
    'In "the sum exceeds 1000" questions you get an inequality with n in a power: take logs, and remember n must be a whole number, so round UP.',
  ]),
)

/* =========================================== BINOMIAL, GENERAL n */

const binomialGeneral = chapter(
  rule(
    'Expansion for any n',
    '(1 + x)ⁿ = 1 + nx + n(n−1)x²/2! + n(n−1)(n−2)x³/3! + …',
    'Valid only for |x| < 1. This is the version for negative and fractional n.',
  ),
  method('Expanding (a + bx)ⁿ when a ≠ 1', [
    'Factor a out of the bracket: (a + bx)ⁿ = aⁿ(1 + bx/a)ⁿ.',
    'Expand the bracket using the general formula with x replaced by bx/a.',
    'Multiply every term by aⁿ.',
    'State the validity: |bx/a| < 1, so |x| < |a/b|.',
  ]),
  worked('Expand (1 + 2x)⁻¹ up to the term in x², and state the range of validity.', [
    'n = −1: 1 + (−1)(2x) + [(−1)(−2)/2](2x)²',
    '= 1 − 2x + (1)(4x²)',
    '= 1 − 2x + 4x²',
    'Valid for |2x| < 1, so |x| < ½',
  ]),
  diagram('pascals-triangle'),
  pitfalls([
    'The validity condition is a mark on almost every question of this type, and it is the one most often left out.',
    'When x is replaced by 2x, the SQUARE is 4x² - the coefficient gets squared too.',
    'For a ≠ 1 you must factor out aⁿ, which multiplies EVERY term including the 1.',
    'The series is infinite for non-integer n, so it does not terminate - expand only as far as asked.',
  ]),
)

/* ============================================================ RADIANS */

const radians = chapter(
  rule('Conversion', 'π radians = 180°. To convert degrees to radians multiply by π/180; radians to degrees multiply by 180/π.'),
  rule('Arc and sector', 'Arc length s = rθ.  Sector area = ½r²θ.  Segment area = ½r²(θ − sin θ).', 'These formulas ONLY work in radians.'),
  diagram('sector'),
  worked('A sector has radius 8 cm and angle 0.6 rad. Find the arc length and area.', [
    'Arc: s = rθ = 8 × 0.6 = 4.8 cm',
    'Area: ½r²θ = ½ × 64 × 0.6',
    '= 32 × 0.6',
    'Answer: 19.2 cm²',
  ]),
  h('Small angle approximations'),
  rule('For small θ in radians', 'sin θ ≈ θ,  tan θ ≈ θ,  cos θ ≈ 1 − θ²/2'),
  h('Exact values in radians'),
  table(
    ['θ', 'π/6 (30°)', 'π/4 (45°)', 'π/3 (60°)'],
    [
      ['sin', '½', '√2/2', '√3/2'],
      ['cos', '√3/2', '√2/2', '½'],
    ],
  ),
  pitfalls([
    'Arc and sector formulas fail in degrees. Convert first, and put your calculator in radian mode.',
    'The segment is the sector MINUS the triangle: ½r²θ − ½r² sin θ = ½r²(θ − sin θ).',
    'Leave answers in terms of π when the question asks for an exact value.',
    'Small angle approximations only hold in radians and only for small θ.',
  ]),
)

/* ============================================== TRIG FUNCTIONS YEAR 2 */

const trigFunctions = chapter(
  rule('Reciprocal functions', 'sec θ = 1/cos θ · cosec θ = 1/sin θ · cot θ = 1/tan θ = cos θ/sin θ'),
  tip('Match them by the THIRD letter: seC goes with Cos, coSec goes with Sin. This is the fastest way to stop mixing them up.'),
  diagram('reciprocal-trig'),
  rule('The Pythagorean identities', 'sin²θ + cos²θ = 1 · 1 + tan²θ = sec²θ · 1 + cot²θ = cosec²θ', 'The last two come from dividing the first by cos²θ and sin²θ.'),
  h('Compound and double angle'),
  rule('Compound angles', 'sin(A ± B) = sinA cosB ± cosA sinB · cos(A ± B) = cosA cosB ∓ sinA sinB'),
  rule('Double angles', 'sin2A = 2 sinA cosA · cos2A = cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A · tan2A = 2tanA/(1 − tan²A)'),
  tip('cos2A has three forms. Choose the one that leaves you with the function already in the question - if the equation is in sin, use 1 − 2sin²A.'),
  worked('Solve cos 2θ + 3 sin θ = 2 for 0 ≤ θ ≤ 2π.', [
    'Use cos2θ = 1 − 2sin²θ so everything is in sin',
    '1 − 2sin²θ + 3sinθ = 2  →  2sin²θ − 3sinθ + 1 = 0',
    'Factorise: (2sinθ − 1)(sin θ − 1) = 0',
    'sin θ = ½ → θ = π/6, 5π/6;  sin θ = 1 → θ = π/2',
    'Answer: θ = π/6, π/2, 5π/6',
  ]),
  pitfalls([
    'The sign in cos(A + B) flips to MINUS - cos A cos B − sin A sin B. This is deliberately tested.',
    'Choosing the wrong form of cos2A leaves you with two functions and no way forward. Look at what the rest of the equation is in.',
    'sec θ is undefined wherever cos θ = 0, so exclude those values.',
    'Radians means the range is 0 to 2π, and answers should be exact multiples of π where possible.',
  ]),
)

/* ============================================ TRIG AND MODELLING */

const trigModelling = chapter(
  rule('Harmonic form', 'a sin θ ± b cos θ = R sin(θ ± α), where R = √(a² + b²) and tan α = b/a'),
  p('The point of the rewrite is that ONE wave has an obvious maximum R and minimum −R, and an equation in it can be solved directly, which the two-term version cannot.'),
  diagram('harmonic-form'),
  method('Using harmonic form', [
    'Find R = √(a² + b²).',
    'Find α from tan α = b/a, taking the acute angle.',
    'Write the expression as R sin(θ + α) - or the appropriate form.',
    'For a maximum, the bracket equals 1, giving R; for a minimum, −1, giving −R.',
    'To solve, set R sin(θ + α) = k and solve for the bracket first, then subtract α.',
  ]),
  worked('Express 3 sin θ + 4 cos θ as R sin(θ + α), and state the maximum.', [
    'R = √(3² + 4²) = √25 = 5',
    'tan α = 4/3, so α = 0.927 rad',
    '3 sin θ + 4 cos θ = 5 sin(θ + 0.927)',
    'Maximum is 5, when sin(θ + 0.927) = 1',
  ]),
  pitfalls([
    'R is always POSITIVE - it is a length.',
    'tan α = b/a where b is the coefficient of the SECOND function in the chosen form. Getting a and b the wrong way round gives the complementary angle.',
    'When solving, widen the range for the bracket before finding solutions, then subtract α at the end.',
    'The maximum of the ORIGINAL expression is R, but the VALUE OF θ at which it occurs needs the bracket solved.',
  ]),
)

/* ================================================= PARAMETRIC EQUATIONS */

const parametric = chapter(
  p('A curve given by x = f(t) and y = g(t), where the parameter t fixes not just the shape but the position on it and the direction of travel.'),
  diagram('parametric-curve'),
  method('Converting to Cartesian form', [
    'Make t the subject of the simpler equation.',
    'Substitute into the other.',
    'For trigonometric parameters, use an identity instead - usually cos²t + sin²t = 1.',
    'State the domain and range implied by the range of t.',
  ]),
  worked('x = 2cos t, y = 3sin t. Find the Cartesian equation.', [
    'cos t = x/2 and sin t = y/3',
    'Use cos²t + sin²t = 1',
    '(x/2)² + (y/3)² = 1',
    'Answer: x²/4 + y²/9 = 1, an ellipse',
  ]),
  rule('Parametric differentiation', 'dy/dx = (dy/dt) ÷ (dx/dt)'),
  worked('Find dy/dx for x = t², y = t³ − t.', [
    'dx/dt = 2t',
    'dy/dt = 3t² − 1',
    'dy/dx = (3t² − 1)/(2t)',
  ]),
  pitfalls([
    'dy/dx is dy/dt DIVIDED by dx/dt, not multiplied.',
    'The domain of t restricts which part of the Cartesian curve you actually get - a full ellipse needs t over a complete 2π.',
    'For a stationary point set dy/dt = 0 (and check dx/dt ≠ 0), then find the coordinates from the original parametric equations.',
  ]),
)

/* ============================================ DIFFERENTIATION YEAR 2 */

const differentiation2 = chapter(
  h('Standard derivatives'),
  table(
    ['y', 'dy/dx'],
    [
      ['eˣ', 'eˣ'],
      ['ln x', '1/x'],
      ['sin x', 'cos x'],
      ['cos x', '−sin x'],
      ['tan x', 'sec²x'],
      ['aˣ', 'aˣ ln a'],
    ],
  ),
  h('The three rules'),
  rule('Chain rule', 'If y = f(g(x)) then dy/dx = f′(g(x)) × g′(x) - differentiate the outside, keep the inside, times the derivative of the inside.'),
  rule('Product rule', 'If y = uv then dy/dx = u(dv/dx) + v(du/dx)'),
  rule('Quotient rule', 'If y = u/v then dy/dx = [v(du/dx) − u(dv/dx)] / v²', 'Note the MINUS and the order - numerator first is wrong.'),
  worked('Differentiate y = x² sin x.', [
    'Product rule with u = x², v = sin x',
    'du/dx = 2x, dv/dx = cos x',
    'dy/dx = x²(cos x) + sin x(2x)',
    'Answer: x² cos x + 2x sin x',
  ]),
  worked('Differentiate y = (3x + 1)⁵.', [
    'Chain rule: outside is u⁵ with u = 3x + 1',
    'Derivative of outside: 5u⁴ = 5(3x + 1)⁴',
    'Derivative of inside: 3',
    'Answer: 15(3x + 1)⁴',
  ]),
  h('Concavity and inflection'),
  rule('Second derivative', 'f″(x) < 0 → concave. f″(x) > 0 → convex. A point of inflection is where f″ CHANGES SIGN.'),
  diagram('concavity'),
  tip('f″(x) = 0 is not enough for a point of inflection - the sign must actually change. Test either side and say you have.'),
  h('Connected rates of change'),
  rule('Chain rule for rates', 'dA/dt = (dA/dr) × (dr/dt) - link the rates through a shared variable.'),
  pitfalls([
    'The quotient rule numerator is v(du/dx) − u(dv/dx). Getting the order backwards flips the sign of the whole answer.',
    'Chain rule: do not forget the derivative of the inside. Writing 5(3x + 1)⁴ without the ×3 is the most common error in the topic.',
    'Differentiating trig functions requires RADIANS. In degrees the derivatives are wrong by a factor of π/180.',
    'For connected rates, write down what you are given and what you want as derivatives first, then find the chain that links them.',
  ]),
)

/* ================================================= NUMERICAL METHODS */

const numericalMethods = chapter(
  h('Locating roots'),
  method('Change of sign', [
    'Evaluate f(a) and f(b).',
    'If they have OPPOSITE signs and f is continuous on [a, b], there is a root between them.',
    'State both values, the sign change, and the conclusion - all three are marked.',
  ]),
  p('This fails if the function is discontinuous in the interval, or if there is an even number of roots - two roots give no sign change.'),
  h('Iteration'),
  rule('Iterative formula', 'xₙ₊₁ = g(xₙ). Start from x₀ and repeat. Converges to a root if the iteration is suitable.'),
  diagram('iteration-staircase'),
  worked('Use xₙ₊₁ = √(3xₙ + 1) with x₀ = 2 to find x₁ and x₂ to 4 d.p.', [
    'x₁ = √(3(2) + 1) = √7 = 2.6458',
    'x₂ = √(3(2.6458) + 1) = √8.9374',
    'x₂ = 2.9896',
  ]),
  h('Newton–Raphson'),
  rule('Newton–Raphson', 'xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)'),
  diagram('newton-raphson'),
  p('It fails if f′(xₙ) = 0 - the tangent is horizontal and never meets the axis - or if the starting value is near a turning point, which can send the next value far away.'),
  h('The trapezium rule'),
  rule('Trapezium rule', '∫ y dx ≈ h/2 [y₀ + 2(y₁ + … + yₙ₋₁) + yₙ], with h = (b − a)/n'),
  diagram('trapezium-rule'),
  tip('n is the number of STRIPS; there are always n + 1 ordinates. Only the MIDDLE ordinates are doubled - the first and last are not.'),
  pitfalls([
    'For a change of sign you must state that the function is CONTINUOUS on the interval, or the conclusion is not valid.',
    'Trapezium rule: a convex curve gives an OVERESTIMATE, a concave one an underestimate. Questions ask which and why.',
    'Newton–Raphson needs f′(x), so differentiate before you start.',
    'Give iterations to the accuracy asked, and do not round intermediate values - carry full calculator accuracy through.',
  ]),
)

/* =============================================== INTEGRATION YEAR 2 */

const integration2 = chapter(
  h('Standard integrals'),
  table(
    ['f(x)', '∫f(x) dx'],
    [
      ['eˣ', 'eˣ + c'],
      ['1/x', 'ln|x| + c'],
      ['sin x', '−cos x + c'],
      ['cos x', 'sin x + c'],
      ['sec²x', 'tan x + c'],
      ['(ax + b)ⁿ', '(ax + b)ⁿ⁺¹ / [aₙ₊₁] + c'],
    ],
  ),
  tip('The modulus in ln|x| matters - the log of a negative number is undefined, so the modulus keeps the answer valid for negative x.'),
  h('Integration by substitution'),
  method('Substitution', [
    'Choose u, usually the awkward inside function.',
    'Find du/dx and rearrange to replace dx.',
    'Replace every x - including the LIMITS if it is a definite integral.',
    'Integrate in terms of u.',
    'Substitute back, or use the converted limits.',
  ]),
  worked('Find ∫ 2x(x² + 1)³ dx.', [
    'Let u = x² + 1, so du/dx = 2x and du = 2x dx',
    'The integral becomes ∫ u³ du',
    '= u⁴/4 + c',
    'Answer: (x² + 1)⁴/4 + c',
  ]),
  h('Integration by parts'),
  rule('By parts', '∫u (dv/dx) dx = uv − ∫v (du/dx) dx'),
  p('Choose u to be the function that gets SIMPLER when differentiated - usually a power of x, or ln x. For ∫x ln x dx, take u = ln x even though it is second.'),
  worked('Find ∫ x eˣ dx.', [
    'u = x (simplifies when differentiated), dv/dx = eˣ',
    'du/dx = 1, v = eˣ',
    '= x eˣ − ∫ eˣ (1) dx',
    'Answer: x eˣ − eˣ + c = eˣ(x − 1) + c',
  ]),
  diagram('area-under-curve'),
  pitfalls([
    'If you substitute in a DEFINITE integral you must change the limits too, or convert back before evaluating. Mixing the two loses the answer.',
    'By parts may need doing twice, and for ∫eˣ sin x dx it produces the original integral again - rearrange to solve for it.',
    '∫1/x dx = ln|x| + c, with the modulus.',
    'The + c is still a mark on every indefinite integral.',
  ]),
)

/* ======================================================== VECTORS 3D */

const vectors3d = chapter(
  rule('3D vectors', 'v = ai + bj + ck, or as a column vector with three components.'),
  rule('Magnitude in 3D', '|v| = √(a² + b² + c²) - Pythagoras extended.'),
  diagram('vectors-3d'),
  worked('P is (3, 4, 5). Find |OP| and the unit vector along OP.', [
    '|OP| = √(3² + 4² + 5²) = √(9 + 16 + 25) = √50',
    '√50 = 5√2 ≈ 7.07',
    'Unit vector = (1/√50)(3i + 4j + 5k)',
  ]),
  h('Geometry in 3D'),
  ul([
    'AB = OB − OA, exactly as in 2D.',
    'The distance between two points is |AB|.',
    'The angle between a vector and an axis comes from cos θ = (component)/|v|.',
    'Vectors are parallel if one is a scalar multiple of the other.',
  ]),
  worked('Find the angle between OP = 3i + 4j + 5k and the x-axis.', [
    'cos θ = (x-component)/|OP| = 3/√50',
    'cos θ = 0.4243',
    'θ = 64.9° (3 s.f.)',
  ]),
  pitfalls([
    'All three components go into the magnitude - dropping the k component is the standard 3D error.',
    'The unit vector divides EVERY component by the magnitude.',
    'For the angle to an axis, use the component along that axis, not the largest one.',
  ]),
)

export const MATHS_PURE2_NOTES = {
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
}
