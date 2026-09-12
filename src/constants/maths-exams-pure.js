/*
  Edexcel 9MA0 Pure: the long multi-part questions.

  Until now the largest Maths question in the bank was 8 marks with about
  three mark-scheme points and no working. Real Papers 1 and 2 are built
  from 10- to 15-mark questions in parts, where part (b) depends on part
  (a) and the marks are spread across a page of method. A bank of short
  questions cannot prepare you for that, because the thing being tested is
  carrying a chain of work through without losing the thread.

  Each question here carries a WORKED SOLUTION broken into the lines a
  marker actually awards, with the code beside each one:

    M   method  - awarded for the correct approach, even if the arithmetic
                  that follows is wrong
    A   accuracy - only available if the M mark before it was earned
    B   independent - awarded on its own, usually for a stated fact
    dM  dependent method - only available if the previous M was earned
    ft  follow through - awarded on your earlier (wrong) value

  That structure is the point. A student who marks themselves out of 14
  and writes "got it wrong" has learnt nothing; one who sees they earned
  every M and dropped a single A knows their method is sound and their
  arithmetic is not, which is a completely different revision problem.
*/

export const MATHS_EXAM_PURE = [
  {
    topic: 'Quadratics',
    paper: 'Paper 1 (Pure)',
    marks: 13,
    question:
      'f(x) = x² + (k + 3)x + (3k + 4), where k is a constant.\n\n(a) Show that the discriminant of f(x) is k² − 6k − 7. (2)\n(b) Hence find the set of values of k for which f(x) = 0 has two distinct real roots. (3)\n(c) Given instead that k = 1, express f(x) in the form (x + a)² + b. (3)\n(d) Write down the coordinates of the turning point of y = f(x) when k = 1, and state whether it is a maximum or a minimum. (2)\n(e) Describe fully the single transformation that maps y = x² onto y = f(x) when k = 1. (2)\n(f) Explain why the curve y = f(x) does not cross the x-axis when k = 1. (1)',
    workedSolution: [
      { part: '(a)', line: 'b² − 4ac = (k + 3)² − 4(1)(3k + 4)', mark: 'M1' },
      { part: '', line: '= k² + 6k + 9 − 12k − 16 = k² − 6k − 7  ✓ as required', mark: 'A1' },
      { part: '(b)', line: 'Two distinct real roots requires b² − 4ac > 0, so k² − 6k − 7 > 0', mark: 'M1' },
      { part: '', line: 'Factorise: (k − 7)(k + 1) > 0, critical values k = 7 and k = −1', mark: 'A1' },
      { part: '', line: 'Positive quadratic, so above the axis outside the roots: k < −1 or k > 7', mark: 'A1' },
      { part: '(c)', line: 'k = 1 gives f(x) = x² + 4x + 7', mark: 'B1' },
      { part: '', line: 'Half the x-coefficient: (x + 2)² − 4 + 7', mark: 'M1' },
      { part: '', line: '= (x + 2)² + 3', mark: 'A1' },
      { part: '(d)', line: 'Turning point at (−2, 3)', mark: 'B1ft' },
      { part: '', line: 'Positive x² coefficient, so it is a MINIMUM', mark: 'B1' },
      { part: '(e)', line: 'A translation', mark: 'M1' },
      { part: '', line: 'by the vector (−2, 3)', mark: 'A1' },
      { part: '(f)', line: 'Discriminant = 1 − 6 − 7 = −12 < 0, so there are no real roots', mark: 'B1' },
    ],
    totalCheck: 'Total: 13 marks (a 2, b 3, c 3, d 2, e 2, f 1)',
    markScheme: [
      'Part (a) is a SHOW THAT - the printed answer earns nothing on its own, so the expansion line must be visible.',
      'Part (b) must give a single combined region in k, stated with the correct inequality signs.',
      'Part (c) must complete the square, not just quote the vertex from a calculator.',
      'Part (e) requires the word "translation" and a vector or an equivalent description in both directions.',
    ],
    pitfalls: [
      'Writing k² − 6k − 7 ≥ 0 in (b). "Two DISTINCT roots" is strictly greater than zero; ≥ lets in the repeated-root case.',
      'Giving −1 < k < 7 in (b). That is the region where the discriminant is NEGATIVE - the inside of a positive parabola is below the axis.',
      'Writing the translation vector as (2, 3) in (e). Completing the square to (x + 2)² moves the curve LEFT, so the x-component is −2.',
      'Losing the (d) minimum mark by giving the coordinates only. The question asks for the nature as well.',
    ],
  },

  {
    topic: 'Circles',
    paper: 'Paper 1 (Pure)',
    marks: 14,
    question:
      'The circle C has equation x² + y² − 6x + 4y − 12 = 0.\n\n(a) Find the coordinates of the centre of C and the length of its radius. (3)\n(b) Show that the point P(6, 2) lies on C. (2)\n(c) Find an equation of the tangent to C at P, giving your answer in the form ax + by + c = 0 where a, b and c are integers. (4)\n(d) This tangent crosses the x-axis at A and the y-axis at B. Find the exact area of triangle OAB, where O is the origin. (5)',
    workedSolution: [
      { part: '(a)', line: 'Complete the square: (x − 3)² − 9 + (y + 2)² − 4 − 12 = 0', mark: 'M1' },
      { part: '', line: '(x − 3)² + (y + 2)² = 25', mark: 'A1' },
      { part: '', line: 'Centre (3, −2), radius 5', mark: 'A1' },
      { part: '(b)', line: 'Substitute P: (6 − 3)² + (2 + 2)² = 9 + 16', mark: 'M1' },
      { part: '', line: '= 25 = r², so P lies on C  ✓', mark: 'A1' },
      { part: '(c)', line: 'Gradient of radius CP = (2 − (−2))/(6 − 3) = 4/3', mark: 'M1' },
      { part: '', line: 'Tangent ⊥ radius, so tangent gradient = −3/4', mark: 'M1' },
      { part: '', line: 'y − 2 = −(3/4)(x − 6)', mark: 'A1' },
      { part: '', line: '4y − 8 = −3x + 18, so 3x + 4y − 26 = 0', mark: 'A1' },
      { part: '(d)', line: 'At A, y = 0: 3x = 26, so A is (26/3, 0)', mark: 'M1' },
      { part: '', line: 'At B, x = 0: 4y = 26, so B is (0, 13/2)', mark: 'A1' },
      { part: '', line: 'Area = ½ × OA × OB (the axes are perpendicular)', mark: 'M1' },
      { part: '', line: '= ½ × 26/3 × 13/2', mark: 'dM1' },
      { part: '', line: '= 169/6 square units', mark: 'A1' },
    ],
    totalCheck: 'Total: 14 marks (a 3, b 2, c 4, d 5)',
    markScheme: [
      'Part (a) needs the completed-square form visible; quoting centre and radius alone scores the first mark only.',
      'Part (c) must state or use the perpendicular relationship between the tangent and the radius.',
      'Part (d) asks for an EXACT area, so the answer must stay as a fraction - 28.2 loses the final mark.',
    ],
    pitfalls: [
      'Reading the centre as (−3, 2) - the signs flip when you take them out of (x − 3)² and (y + 2)².',
      'Giving r² = 25 as the radius. The radius is 5.',
      'Using the radius gradient as the tangent gradient. The tangent is PERPENDICULAR to it, so take the negative reciprocal.',
      'Rounding to 28.2 in (d) when the question says exact.',
    ],
  },

  {
    topic: 'Differentiation',
    paper: 'Paper 1 (Pure)',
    marks: 14,
    question:
      'A closed cylindrical can has radius r cm, height h cm and volume 500 cm³.\n\n(a) Show that the total surface area S cm² is given by S = 2πr² + 1000/r. (3)\n(b) Find dS/dr. (2)\n(c) Find, to 3 significant figures, the value of r for which S is stationary. (4)\n(d) Justify that this value gives a MINIMUM surface area. (2)\n(e) Find the minimum surface area, to 3 significant figures. (3)',
    workedSolution: [
      { part: '(a)', line: 'V = πr²h = 500, so h = 500/(πr²)', mark: 'M1' },
      { part: '', line: 'S = 2πr² + 2πrh (two ends plus the curved surface)', mark: 'M1' },
      { part: '', line: 'S = 2πr² + 2πr × 500/(πr²) = 2πr² + 1000/r  ✓ as required', mark: 'A1' },
      { part: '(b)', line: 'Write as S = 2πr² + 1000r⁻¹', mark: 'M1' },
      { part: '', line: 'dS/dr = 4πr − 1000/r²', mark: 'A1' },
      { part: '(c)', line: 'Set dS/dr = 0: 4πr = 1000/r²', mark: 'M1' },
      { part: '', line: '4πr³ = 1000', mark: 'M1' },
      { part: '', line: 'r³ = 250/π = 79.577…', mark: 'A1' },
      { part: '', line: 'r = 4.30 (3 s.f.)', mark: 'A1' },
      { part: '(d)', line: 'd²S/dr² = 4π + 2000/r³', mark: 'M1' },
      { part: '', line: 'For r > 0 this is positive, so S is a minimum  ✓', mark: 'A1' },
      { part: '(e)', line: 'S = 2π(4.3012)² + 1000/4.3012', mark: 'M1' },
      { part: '', line: '= 116.25 + 232.49', mark: 'M1' },
      { part: '', line: '= 349 cm² (3 s.f.)', mark: 'A1' },
    ],
    totalCheck: 'Total: 14 marks (a 3, b 2, c 4, d 2, e 3)',
    markScheme: [
      'Part (a) must use the volume constraint to eliminate h - that substitution is the whole method.',
      'Part (d) requires an actual justification: the second derivative evaluated or shown positive, or a sign change in dS/dr either side.',
      'Part (e) should use the unrounded r, not the 3 s.f. value, to avoid rounding drift.',
    ],
    pitfalls: [
      'Forgetting the can is CLOSED and using only one end, giving πr² instead of 2πr².',
      'Differentiating 1000/r as 1000/r² without the minus sign. It is 1000r⁻¹, so the derivative is −1000r⁻².',
      'Skipping (d). "It is clearly a minimum" earns nothing - the justification is worth 2 of the 14 marks.',
      'Substituting the rounded r = 4.30 into (e) and reporting 349 without checking. Here it is fine, but on tighter questions rounding early shifts the third significant figure.',
    ],
  },

  {
    topic: 'Integration',
    paper: 'Paper 1 (Pure)',
    marks: 12,
    question:
      'The curve C has equation y = x² − 4x + 5 and the line L has equation y = x + 1.\n\n(a) Find the coordinates of the two points where L intersects C. (4)\n(b) Sketch C and L on the same axes, shading the region R enclosed between them. (2)\n(c) Use integration to find the exact area of R. (6)',
    workedSolution: [
      { part: '(a)', line: 'Set equal: x² − 4x + 5 = x + 1', mark: 'M1' },
      { part: '', line: 'x² − 5x + 4 = 0', mark: 'A1' },
      { part: '', line: '(x − 1)(x − 4) = 0, so x = 1 and x = 4', mark: 'M1' },
      { part: '', line: 'Points are (1, 2) and (4, 5)', mark: 'A1' },
      { part: '(b)', line: 'Parabola with minimum at (2, 1), y-intercept 5, not crossing the x-axis', mark: 'B1' },
      { part: '', line: 'Straight line through the two intersection points, region between them shaded', mark: 'B1' },
      { part: '(c)', line: 'Area = ∫ (line − curve) dx between the intersections', mark: 'M1' },
      { part: '', line: '= ∫₁⁴ [(x + 1) − (x² − 4x + 5)] dx = ∫₁⁴ (−x² + 5x − 4) dx', mark: 'A1' },
      { part: '', line: 'Integrate: [−x³/3 + 5x²/2 − 4x]₁⁴', mark: 'M1' },
      { part: '', line: 'At x = 4: −64/3 + 40 − 16 = 8/3', mark: 'A1' },
      { part: '', line: 'At x = 1: −1/3 + 5/2 − 4 = −11/6', mark: 'A1' },
      { part: '', line: 'Area = 8/3 − (−11/6) = 9/2 square units', mark: 'A1' },
    ],
    totalCheck: 'Total: 12 marks (a 4, b 2, c 6)',
    markScheme: [
      'Part (c) must subtract in the order (upper − lower). Getting −9/2 and writing "so the area is 9/2" is condoned only if the sign is explicitly addressed.',
      'The limits must be the x-coordinates from part (a), not the y-coordinates.',
      '"Exact" means the answer stays as 9/2 - 4.5 is acceptable here since it terminates, but a surd or fraction answer must never be decimalised.',
    ],
    pitfalls: [
      'Integrating the curve and the line separately and forgetting to subtract, or subtracting the wrong way round.',
      'Substituting the limits into only the first term of the bracket.',
      'Sign slips evaluating at x = 1, where three of the four terms are fractions. Write the substitution line out rather than doing it on the calculator.',
      'Using the y-values 2 and 5 as the limits of integration.',
    ],
  },

  {
    topic: 'Exponentials and Logarithms',
    paper: 'Paper 1 (Pure)',
    marks: 13,
    question:
      'The number of bacteria in a culture is modelled by P = P₀eᵏᵗ, where P is the population t hours after the start and P₀ and k are constants.\n\nInitially there are 2000 bacteria, and after 5 hours there are 3200.\n\n(a) Write down the value of P₀. (1)\n(b) Show that k = 0.0940 to 3 significant figures. (3)\n(c) Find the population after 12 hours, to 3 significant figures. (2)\n(d) Find the time taken for the population to double, to 3 significant figures. (3)\n(e) Explain how a graph of ln P against t could be used to check whether the model fits the data, stating what the gradient and the intercept would represent. (3)\n(f) Give one reason why the model may not remain valid for large t. (1)',
    workedSolution: [
      { part: '(a)', line: 'P₀ = 2000', mark: 'B1' },
      { part: '(b)', line: '3200 = 2000e⁵ᵏ, so e⁵ᵏ = 1.6', mark: 'M1' },
      { part: '', line: 'Take natural logs: 5k = ln 1.6 = 0.47000', mark: 'M1' },
      { part: '', line: 'k = 0.09400 = 0.0940 (3 s.f.)  ✓ as required', mark: 'A1' },
      { part: '(c)', line: 'Since 0.094001 × 12 = 1.12801, P = 2000e¹·¹²⁸⁰¹', mark: 'M1' },
      { part: '', line: '= 6180 bacteria (3 s.f.)', mark: 'A1' },
      { part: '(d)', line: 'Doubling: 4000 = 2000eᵏᵗ, so eᵏᵗ = 2', mark: 'M1' },
      { part: '', line: 't = ln 2 / k = 0.693147 / 0.094001', mark: 'M1' },
      { part: '', line: 't = 7.37 hours (3 s.f.)', mark: 'A1' },
      { part: '(e)', line: 'Taking logs: ln P = ln P₀ + kt', mark: 'M1' },
      { part: '', line: 'This is linear in t, so plotting ln P against t should give a straight line', mark: 'A1' },
      { part: '', line: 'Gradient = k, vertical intercept = ln P₀', mark: 'A1' },
      { part: '(f)', line: 'Exponential growth is unbounded, but food and space are finite, so growth must slow', mark: 'B1' },
    ],
    totalCheck: 'Total: 13 marks (a 1, b 3, c 2, d 3, e 3, f 1)',
    markScheme: [
      'Part (b) is a SHOW THAT, so the ln 1.6 line must appear - quoting 0.0940 from a solver scores nothing.',
      'Part (d) must not depend on P₀: the doubling time is ln 2 / k whatever the starting population, and saying so earns credit.',
      'Part (e) needs all three: the linear form, what to plot, and the meaning of BOTH gradient and intercept.',
    ],
    pitfalls: [
      'Using log₁₀ where the base is e. Either works if applied consistently, but mixing them mid-question is the usual error.',
      'Rounding k to 0.094 and carrying it through (c) and (d). Use the stored value; the question only asks you to SHOW the rounded one.',
      'In (d), calculating the time to reach 4000 from t = 0 and then adding the 5 hours already elapsed. The doubling time is measured from any starting point.',
      'In (e), saying the gradient is ln k. Taking logs of P = P₀eᵏᵗ leaves kt untouched, so the gradient is k itself.',
    ],
  },

  {
    topic: 'The Binomial Expansion',
    paper: 'Paper 1 (Pure)',
    marks: 11,
    question:
      '(a) Find the first four terms, in ascending powers of x, of the binomial expansion of (2 + 3x)⁵, giving each term in its simplest form. (4)\n(b) Use your expansion, with a suitable value of x, to estimate 2.03⁵. Give your answer to 4 decimal places. (3)\n(c) In the expansion of (1 + ax)ⁿ, where n is a positive integer, the first three terms are 1 + 12x + 64x². Find the value of a and the value of n. (4)',
    workedSolution: [
      { part: '(a)', line: 'Term in x⁰: 2⁵ = 32', mark: 'B1' },
      { part: '', line: 'Term in x: ⁵C₁ × 2⁴ × (3x) = 5 × 16 × 3x = 240x', mark: 'M1' },
      { part: '', line: 'Term in x²: ⁵C₂ × 2³ × (3x)² = 10 × 8 × 9x² = 720x²', mark: 'A1' },
      { part: '', line: 'Term in x³: ⁵C₃ × 2² × (3x)³ = 10 × 4 × 27x³ = 1080x³', mark: 'A1' },
      { part: '(b)', line: 'Need 2 + 3x = 2.03, so x = 0.01', mark: 'B1' },
      { part: '', line: '32 + 240(0.01) + 720(0.01)² + 1080(0.01)³', mark: 'M1' },
      { part: '', line: '= 32 + 2.4 + 0.072 + 0.00108 = 34.4731 (4 d.p.)', mark: 'A1' },
      { part: '(c)', line: 'Coefficient of x: na = 12', mark: 'M1' },
      { part: '', line: 'Coefficient of x²: n(n − 1)a²/2 = 64', mark: 'M1' },
      { part: '', line: 'Substitute a = 12/n: n(n − 1)(144/n²)/2 = 64, so 72(n − 1)/n = 64', mark: 'dM1' },
      { part: '', line: '72n − 72 = 64n, so 8n = 72, giving n = 9 and a = 4/3', mark: 'A1' },
    ],
    totalCheck: 'Total: 11 marks (a 4, b 3, c 4)',
    markScheme: [
      'Part (a) requires the powers of 2 to be applied - a common loss is expanding as though the bracket were (1 + 3x)⁵.',
      'Part (b) must state the value of x used; the estimate alone is not enough.',
      'Part (c) needs the two simultaneous equations set up before any solving credit is available.',
    ],
    pitfalls: [
      'Forgetting that 2 is raised to a DECREASING power across the terms: 2⁵, 2⁴, 2³, 2².',
      'Writing ⁵C₂ × 2³ × 3x² instead of (3x)² - the 3 is squared too, giving 9x².',
      'In (c), dividing by n without noting n ≠ 0, or taking the negative root of a² and missing that n must be a positive integer.',
      'Giving the answer to (b) as 34.47 when 4 decimal places are asked for.',
    ],
  },

  {
    topic: 'Trigonometric Identities and Equations',
    paper: 'Paper 1 (Pure)',
    marks: 12,
    question:
      '(a) Show that the equation 2sin²x + 3cos x = 0 can be written in the form 2cos²x − 3cos x − 2 = 0. (2)\n(b) Hence solve 2sin²x + 3cos x = 0 for 0° ≤ x ≤ 360°. (5)\n(c) Solve 3tan(2x − 30°) = 4 for 0° ≤ x ≤ 180°, giving your answers to 1 decimal place. (5)',
    workedSolution: [
      { part: '(a)', line: 'Use sin²x = 1 − cos²x: 2(1 − cos²x) + 3cos x = 0', mark: 'M1' },
      { part: '', line: '2 − 2cos²x + 3cos x = 0, so 2cos²x − 3cos x − 2 = 0  ✓ as required', mark: 'A1' },
      { part: '(b)', line: 'Factorise: (2cos x + 1)(cos x − 2) = 0', mark: 'M1' },
      { part: '', line: 'cos x = −1/2 or cos x = 2', mark: 'A1' },
      { part: '', line: 'Reject cos x = 2, since −1 ≤ cos x ≤ 1', mark: 'B1' },
      { part: '', line: 'Principal value: x = 120°', mark: 'M1' },
      { part: '', line: 'Second solution by symmetry: x = 360 − 120 = 240°', mark: 'A1' },
      { part: '(c)', line: 'tan(2x − 30°) = 4/3', mark: 'M1' },
      { part: '', line: 'As x runs 0° to 180°, the bracket runs −30° to 330°', mark: 'M1' },
      { part: '', line: 'Principal value: 2x − 30 = 53.13°', mark: 'A1' },
      { part: '', line: 'tan repeats every 180°: 2x − 30 = 233.13° also lies in range', mark: 'M1' },
      { part: '', line: 'x = 41.6° and x = 131.6° (1 d.p.)', mark: 'A1' },
    ],
    totalCheck: 'Total: 12 marks (a 2, b 5, c 5)',
    markScheme: [
      'Part (b) awards a mark specifically for rejecting cos x = 2 with a reason.',
      'Part (c) awards a mark for transforming the RANGE before solving - that is the step that finds the second solution.',
      'Answers in (c) must be to 1 decimal place as instructed.',
    ],
    pitfalls: [
      'Dividing by cos x anywhere in (a) or (b). That loses the solutions where cos x = 0 and is the single most common error in this topic.',
      'Solving for x first in (c) and then trying to fit the range afterwards. Solutions get missed every time - transform the range first.',
      'Using the 360° period for tan. Tangent repeats every 180°, so the second solution is 53.13 + 180, not 53.13 + 360.',
      'Giving only the principal value in (b). Two solutions exist in the range and both are needed.',
    ],
  },

  {
    topic: 'Algebraic Methods (Proof & Division)',
    paper: 'Paper 1 (Pure)',
    marks: 12,
    question:
      'f(x) = 2x³ + ax² − 5x + b, where a and b are constants.\n\nWhen f(x) is divided by (x + 1) the remainder is −6, and (x − 2) is a factor of f(x).\n\n(a) Find the value of a and the value of b. (5)\n(b) Using your values, factorise f(x) as far as possible and explain why f(x) = 0 has only one real root. (4)\n(c) Prove that n³ − n is divisible by 6 for all positive integers n. (3)',
    workedSolution: [
      { part: '(a)', line: 'Factor theorem: f(2) = 0, so 16 + 4a − 10 + b = 0', mark: 'M1' },
      { part: '', line: '4a + b = −6', mark: 'A1' },
      { part: '', line: 'Remainder theorem: f(−1) = −6, so −2 + a + 5 + b = −6', mark: 'M1' },
      { part: '', line: 'a + b = −9', mark: 'A1' },
      { part: '', line: 'Subtracting: 3a = 3, so a = 1 and b = −10', mark: 'A1' },
      { part: '(b)', line: 'f(x) = 2x³ + x² − 5x − 10, and (x − 2) is a factor', mark: 'M1' },
      { part: '', line: 'Divide: f(x) = (x − 2)(2x² + 5x + 5)', mark: 'A1' },
      { part: '', line: 'Discriminant of the quadratic: 25 − 40 = −15', mark: 'M1' },
      { part: '', line: 'Negative, so the quadratic has no real roots; the only real root is x = 2', mark: 'A1' },
      { part: '(c)', line: 'n³ − n = n(n² − 1) = (n − 1)n(n + 1)', mark: 'M1' },
      { part: '', line: 'This is the product of three CONSECUTIVE integers', mark: 'A1' },
      {
        part: '',
        line: 'Among any three consecutive integers at least one is even and exactly one is a multiple of 3, so the product is divisible by 2 × 3 = 6  ✓',
        mark: 'A1',
      },
    ],
    totalCheck: 'Total: 12 marks (a 5, b 4, c 3)',
    markScheme: [
      'Part (a) must use f(2) = 0 and f(−1) = −6 - substituting x = −2 or x = 1 confuses the factor with its root and scores nothing.',
      'Part (b) needs the discriminant, not just "it does not factorise".',
      'Part (c) requires the consecutive-integers observation AND the divisibility argument; the factorisation alone is one mark.',
    ],
    pitfalls: [
      'Using f(1) for the factor (x − 2). The factor (x − a) means f(a) = 0, so it is f(2).',
      'Setting the remainder equal to +6 instead of −6.',
      'In (c), stopping at "(n − 1)n(n + 1)" without explaining why that guarantees a factor of 6. Two of the three marks are in the explanation.',
      'Claiming exactly one of three consecutive integers is even. It may be two - the argument only needs at least one.',
    ],
  },

  {
    topic: 'Sequences and Series',
    paper: 'Paper 1 (Pure)',
    marks: 12,
    question:
      '(a) An arithmetic sequence has third term 17 and tenth term 45. Find the first term, the common difference, and the sum of the first 20 terms. (6)\n(b) A geometric series has first term 20 and sum to infinity 25. Find the common ratio. (3)\n(c) For this geometric series, find the least value of n for which the sum of the first n terms exceeds 24.9. (3)',
    workedSolution: [
      { part: '(a)', line: 'a + 2d = 17 and a + 9d = 45', mark: 'M1' },
      { part: '', line: 'Subtract: 7d = 28, so d = 4', mark: 'A1' },
      { part: '', line: 'a + 8 = 17, so a = 9', mark: 'A1' },
      { part: '', line: 'S₂₀ = (20/2)[2a + 19d]', mark: 'M1' },
      { part: '', line: '= 10[18 + 76]', mark: 'M1' },
      { part: '', line: '= 940', mark: 'A1' },
      { part: '(b)', line: 'S∞ = a/(1 − r), so 25 = 20/(1 − r)', mark: 'M1' },
      { part: '', line: '1 − r = 20/25 = 0.8', mark: 'M1' },
      { part: '', line: 'r = 0.2', mark: 'A1' },
      { part: '(c)', line: 'Sₙ = 20(1 − 0.2ⁿ)/0.8 = 25(1 − 0.2ⁿ) > 24.9', mark: 'M1' },
      { part: '', line: '0.2ⁿ < 0.004, so n ln 0.2 < ln 0.004 (inequality REVERSES: ln 0.2 < 0)', mark: 'M1' },
      { part: '', line: 'n > 3.43…, and n is an integer, so n = 4', mark: 'A1' },
    ],
    totalCheck: 'Total: 12 marks (a 6, b 3, c 3)',
    markScheme: [
      'Part (a) must set up both equations from the given terms - the nth term is a + (n − 1)d, so the third term uses 2d.',
      'Part (c) awards a mark for handling the inequality reversal when dividing by a negative logarithm.',
      'The final answer in (c) must be an integer, with a justification that it is the LEAST such n.',
    ],
    pitfalls: [
      'Using a + 3d for the third term. The nth term is a + (n − 1)d, so the third term is a + 2d.',
      'Forgetting the inequality flips in (c) when you divide by ln 0.2, which is negative. This turns n > 3.43 into n < 3.43 and gives the wrong answer.',
      'Rounding 3.43 down to 3. The inequality is strict and n must exceed it, so n = 4.',
      'In (b), writing S∞ = a/(1 + r). The formula is a/(1 − r), valid only for |r| < 1.',
    ],
  },

  {
    topic: 'Parametric Equations',
    paper: 'Paper 2 (Pure)',
    marks: 14,
    question:
      'A curve C has parametric equations x = t² − 2, y = 4t, where t is a real parameter.\n\n(a) Find a cartesian equation of C in the form y² = f(x). (3)\n(b) Find dy/dx in terms of t. (3)\n(c) Find an equation of the NORMAL to C at the point where t = 2, giving your answer in the form ax + by + c = 0. (4)\n(d) This normal meets C again at the point Q. Find the coordinates of Q. (4)',
    workedSolution: [
      { part: '(a)', line: 'From y = 4t, t = y/4', mark: 'M1' },
      { part: '', line: 'Substitute: x = (y/4)² − 2 = y²/16 − 2', mark: 'M1' },
      { part: '', line: 'y² = 16(x + 2)', mark: 'A1' },
      { part: '(b)', line: 'dx/dt = 2t and dy/dt = 4', mark: 'M1' },
      { part: '', line: 'dy/dx = (dy/dt) ÷ (dx/dt) = 4/(2t)', mark: 'M1' },
      { part: '', line: '= 2/t', mark: 'A1' },
      { part: '(c)', line: 'At t = 2: x = 2, y = 8, so the point is (2, 8)', mark: 'B1' },
      { part: '', line: 'Tangent gradient = 2/2 = 1, so normal gradient = −1', mark: 'M1' },
      { part: '', line: 'y − 8 = −1(x − 2)', mark: 'M1' },
      { part: '', line: 'x + y − 10 = 0', mark: 'A1' },
      { part: '(d)', line: 'Substitute the parametric forms: (t² − 2) + 4t − 10 = 0', mark: 'M1' },
      { part: '', line: 't² + 4t − 12 = 0', mark: 'A1' },
      { part: '', line: '(t + 6)(t − 2) = 0, so t = −6 (t = 2 is the original point)', mark: 'M1' },
      { part: '', line: 'Q is (34, −24)', mark: 'A1' },
    ],
    totalCheck: 'Total: 14 marks (a 3, b 3, c 4, d 4)',
    markScheme: [
      'Part (b) must show the chain-rule division, not differentiate the cartesian form - the question says "in terms of t".',
      'Part (c) asks for the NORMAL, so the negative reciprocal must be taken.',
      'Part (d) is far quicker in the parameter than in x and y; substituting the parametric forms directly is the expected method.',
    ],
    pitfalls: [
      'Finding the tangent instead of the normal in (c). Read the word.',
      'Writing dy/dx = (dx/dt)/(dy/dt). It is dy/dt over dx/dt.',
      'In (d), solving the quadratic and reporting both points. t = 2 is where you started; the question asks where it meets AGAIN.',
      'Substituting t = −6 into y = 4t and getting +24. It is −24.',
    ],
  },

  {
    topic: 'Differentiation (Year 2)',
    paper: 'Paper 2 (Pure)',
    marks: 14,
    question:
      '(a) Differentiate y = x²e³ˣ with respect to x, giving your answer in a fully factorised form. (3)\n(b) Differentiate y = (ln x)/x² with respect to x. (3)\n(c) Find the x-coordinates of the stationary points of y = x²e³ˣ, and determine the nature of each. (5)\n(d) A spherical balloon is being inflated so that its volume increases at a constant rate of 50 cm³ s⁻¹. Find the rate at which the radius is increasing at the instant when the radius is 10 cm. (3)',
    workedSolution: [
      { part: '(a)', line: 'Product rule with u = x², v = e³ˣ: u′ = 2x, v′ = 3e³ˣ', mark: 'M1' },
      { part: '', line: 'dy/dx = 2xe³ˣ + 3x²e³ˣ', mark: 'A1' },
      { part: '', line: '= xe³ˣ(2 + 3x)', mark: 'A1' },
      { part: '(b)', line: 'Quotient rule with u = ln x, v = x²: u′ = 1/x, v′ = 2x', mark: 'M1' },
      { part: '', line: 'dy/dx = [x²(1/x) − (ln x)(2x)] / x⁴', mark: 'A1' },
      { part: '', line: '= (1 − 2 ln x)/x³', mark: 'A1' },
      { part: '(c)', line: 'Set xe³ˣ(2 + 3x) = 0. Since e³ˣ > 0 always, x = 0 or 2 + 3x = 0', mark: 'M1' },
      { part: '', line: 'x = 0 and x = −2/3', mark: 'A1' },
      { part: '', line: 'For x < −2/3: x is negative and (2 + 3x) is negative, so dy/dx > 0', mark: 'M1' },
      { part: '', line: 'For −2/3 < x < 0: x is negative and (2 + 3x) is positive, so dy/dx < 0', mark: 'A1' },
      { part: '', line: 'So x = −2/3 is a MAXIMUM; the gradient turns positive again after x = 0, so x = 0 is a MINIMUM', mark: 'A1' },
      { part: '(d)', line: 'V = (4/3)πr³, so dV/dr = 4πr²', mark: 'M1' },
      { part: '', line: 'Chain rule: dr/dt = (dV/dt) ÷ (dV/dr) = 50 / (4π × 100)', mark: 'M1' },
      { part: '', line: '= 0.0398 cm s⁻¹ (3 s.f.)', mark: 'A1' },
    ],
    totalCheck: 'Total: 14 marks (a 3, b 3, c 5, d 3)',
    markScheme: [
      'Part (a) asks for a factorised answer, so the unfactorised line alone drops the final mark.',
      'Part (c) must justify the NATURE - either by sign change or the second derivative. Stating "maximum" without evidence scores nothing.',
      'Part (d) needs the chain rule written down connecting the three rates.',
    ],
    pitfalls: [
      'Differentiating e³ˣ as e³ˣ without the factor of 3.',
      'Getting the quotient rule the wrong way round: it is (vu′ − uv′)/v², so the DERIVATIVE OF THE TOP comes first.',
      'In (c), cancelling e³ˣ and losing track of why x = 0 is a root. It comes from the x factor, not the exponential.',
      'In (d), computing dV/dt when the question asks for dr/dt. Check which rate you have been given and which you need.',
    ],
  },

  {
    topic: 'Integration (Year 2)',
    paper: 'Paper 2 (Pure)',
    marks: 15,
    question:
      '(a) Find ∫ x e²ˣ dx. (4)\n(b) Find ∫ (2x)/(x² + 3) dx. (3)\n(c) Use the substitution u = 1 + x² to evaluate ∫₀² x√(1 + x²) dx, giving your answer in exact form. (5)\n(d) Express 4/((x + 1)(x − 3)) in partial fractions and hence find ∫ 4/((x + 1)(x − 3)) dx. (3)',
    workedSolution: [
      { part: '(a)', line: 'By parts with u = x, dv/dx = e²ˣ: du/dx = 1, v = ½e²ˣ', mark: 'M1' },
      { part: '', line: '= ½xe²ˣ − ∫ ½e²ˣ dx', mark: 'A1' },
      { part: '', line: '= ½xe²ˣ − ¼e²ˣ', mark: 'M1' },
      { part: '', line: '+ c', mark: 'A1' },
      { part: '(b)', line: 'The numerator is exactly the derivative of the denominator', mark: 'M1' },
      { part: '', line: 'So the integral is of the form ∫ f′(x)/f(x) dx = ln|f(x)|', mark: 'M1' },
      { part: '', line: '= ln(x² + 3) + c', mark: 'A1' },
      { part: '(c)', line: 'u = 1 + x², so du = 2x dx, giving x dx = ½ du', mark: 'M1' },
      { part: '', line: 'Change the limits: x = 0 → u = 1;  x = 2 → u = 5', mark: 'A1' },
      { part: '', line: '= ½ ∫₁⁵ u¹ᐟ² du', mark: 'A1' },
      { part: '', line: '= ½ × [⅔u³ᐟ²]₁⁵ = ⅓[5³ᐟ² − 1]', mark: 'M1' },
      { part: '', line: '= (5√5 − 1)/3', mark: 'A1' },
      { part: '(d)', line: '4 = A(x − 3) + B(x + 1). x = 3 gives B = 1; x = −1 gives A = −1', mark: 'M1' },
      { part: '', line: 'So the integrand is 1/(x − 3) − 1/(x + 1)', mark: 'A1' },
      { part: '', line: '∫ = ln|x − 3| − ln|x + 1| + c = ln|(x − 3)/(x + 1)| + c', mark: 'A1' },
    ],
    totalCheck: 'Total: 15 marks (a 4, b 3, c 5, d 3)',
    markScheme: [
      'Part (a) must choose u = x (the part that simplifies on differentiating). Choosing u = e²ˣ makes the integral harder and earns no method mark.',
      'Part (c) awards a mark specifically for CHANGING THE LIMITS. Substituting back to x is acceptable but slower.',
      'Exact form in (c) means the surd stays; 3.39 loses the final mark.',
    ],
    pitfalls: [
      'Omitting + c on the indefinite integrals in (a), (b) and (d). Each is a mark.',
      'In (c), keeping the original limits 0 and 2 after substituting for u. They must become 1 and 5.',
      'Forgetting the modulus signs in the logarithms.',
      'In (a), integrating e²ˣ as e²ˣ rather than ½e²ˣ.',
    ],
  },

  {
    topic: 'Numerical Methods',
    paper: 'Paper 2 (Pure)',
    marks: 12,
    question:
      'f(x) = x³ − 3x − 5.\n\n(a) Show that the equation f(x) = 0 has a root α between x = 2 and x = 3. (2)\n(b) The equation can be rearranged as x = ∛(3x + 5). Using x₀ = 2, find x₁, x₂ and x₃, each to 4 decimal places. (4)\n(c) Using x₀ = 2, apply the Newton–Raphson procedure once to f(x) to find a further approximation to α, giving your answer to 4 decimal places. (3)\n(d) Show that α = 2.2790 correct to 4 decimal places. (3)',
    workedSolution: [
      { part: '(a)', line: 'f(2) = 8 − 6 − 5 = −3  and  f(3) = 27 − 9 − 5 = 13', mark: 'M1' },
      {
        part: '',
        line: 'There is a change of sign and f is continuous on [2, 3], so a root lies between them  ✓',
        mark: 'A1',
      },
      { part: '(b)', line: 'x₁ = ∛(3 × 2 + 5) = ∛11 = 2.2240', mark: 'M1 A1' },
      { part: '', line: 'x₂ = ∛(3 × 2.2240 + 5) = ∛11.6720 = 2.2680', mark: 'A1' },
      { part: '', line: 'x₃ = ∛(3 × 2.2680 + 5) = ∛11.8040 = 2.2764', mark: 'A1' },
      { part: '(c)', line: 'f′(x) = 3x² − 3, so f(2) = −3 and f′(2) = 9', mark: 'M1' },
      { part: '', line: 'x₁ = x₀ − f(x₀)/f′(x₀) = 2 − (−3)/9', mark: 'M1' },
      { part: '', line: '= 2.3333 (4 d.p.)', mark: 'A1' },
      { part: '(d)', line: 'Consider the interval [2.27895, 2.27905]', mark: 'M1' },
      { part: '', line: 'f(2.27895) = −0.00113  and  f(2.27905) = +0.00013', mark: 'A1' },
      {
        part: '',
        line: 'Sign change with f continuous, so α lies in the interval and α = 2.2790 to 4 d.p.  ✓',
        mark: 'A1',
      },
    ],
    totalCheck: 'Total: 12 marks (a 2, b 4, c 3, d 3)',
    markScheme: [
      'Parts (a) and (d) both require the word CONTINUOUS alongside the sign change - without it the conclusion does not follow.',
      'Part (d) must use the interval that rounds to the stated value: 2.27895 to 2.27905, not 2.2789 to 2.2791.',
      'Part (c) must show the Newton–Raphson formula with the values substituted.',
    ],
    pitfalls: [
      'Stating only "f(2) is negative and f(3) is positive" without mentioning continuity. It is a mark in both (a) and (d).',
      'In (d), testing 2.2789 and 2.2791. Those bound the wrong interval - 4 d.p. rounding needs the half-unit either side of the last digit.',
      'Feeding the ROUNDED x₁ back into the iteration in (b). Use the stored value each time or the fourth decimal place drifts.',
      'In (c), subtracting f′/f instead of f/f′.',
    ],
  },

  {
    topic: 'Trigonometry and Modelling',
    paper: 'Paper 2 (Pure)',
    marks: 13,
    question:
      'f(θ) = 4 sin θ + 3 cos θ.\n\n(a) Express f(θ) in the form R sin(θ + α), where R > 0 and 0° < α < 90°. Give R exactly and α to 2 decimal places. (3)\n(b) Hence solve f(θ) = 2 for 0° ≤ θ ≤ 360°, giving your answers to 1 decimal place. (5)\n(c) Write down the maximum value of f(θ) and the value of θ in the range at which it occurs. (3)\n(d) Hence find the maximum value of 1/(f(θ) + 7). (2)',
    workedSolution: [
      { part: '(a)', line: 'R = √(4² + 3²) = √25 = 5', mark: 'B1' },
      { part: '', line: 'tan α = 3/4', mark: 'M1' },
      { part: '', line: 'α = 36.87°, so f(θ) = 5 sin(θ + 36.87°)', mark: 'A1' },
      { part: '(b)', line: '5 sin(θ + 36.87°) = 2, so sin(θ + 36.87°) = 0.4', mark: 'M1' },
      { part: '', line: 'The bracket runs from 36.87° to 396.87°', mark: 'M1' },
      { part: '', line: 'Principal value 23.58° is out of range; use 180 − 23.58 = 156.42°', mark: 'A1' },
      { part: '', line: 'Next: 360 + 23.58 = 383.58°', mark: 'M1' },
      { part: '', line: 'θ = 119.6° and θ = 346.7° (1 d.p.)', mark: 'A1' },
      { part: '(c)', line: 'Maximum of f is R = 5', mark: 'B1' },
      { part: '', line: 'This occurs when sin(θ + 36.87°) = 1, so θ + 36.87 = 90', mark: 'M1' },
      { part: '', line: 'θ = 53.1° (1 d.p.)', mark: 'A1' },
      { part: '(d)', line: 'f(θ) + 7 ranges from −5 + 7 = 2 up to 5 + 7 = 12', mark: 'M1' },
      { part: '', line: 'The reciprocal is greatest when the denominator is smallest, so maximum = 1/2', mark: 'A1' },
    ],
    totalCheck: 'Total: 13 marks (a 3, b 5, c 3, d 2)',
    markScheme: [
      'Part (a) must give R exactly (5, not 5.00) since R² = 4² + 3² is a perfect square.',
      'Part (b) awards a mark for adjusting the range for the bracket before solving.',
      'Part (d) is testing whether you realise the reciprocal INVERTS the optimisation - max of the whole comes from min of the denominator.',
    ],
    pitfalls: [
      'Writing tan α = 4/3. For R sin(θ + α) with a sin θ + b cos θ, tan α = b/a - the COS coefficient over the SIN coefficient.',
      'Giving 23.6° as a solution in (b). Once you subtract 36.87 it falls outside 0 ≤ θ ≤ 360.',
      'In (d), maximising by putting f at its maximum. That gives the SMALLEST value of the reciprocal.',
      'Rounding α to 36.9 early and carrying the error into (b), which shifts the first decimal place of the answers.',
    ],
  },

  {
    topic: 'Algebraic Methods (Partial Fractions)',
    paper: 'Paper 2 (Pure)',
    marks: 13,
    question:
      'f(x) = (7x − 1)/((1 − x)(1 + 2x)).\n\n(a) Express f(x) in partial fractions. (4)\n(b) Hence find the series expansion of f(x) in ascending powers of x, up to and including the term in x². (5)\n(c) State the range of values of x for which the expansion is valid. (2)\n(d) Use your expansion with x = 0.1 to estimate f(0.1), and compare it with the exact value. (2)',
    workedSolution: [
      { part: '(a)', line: 'Let f(x) = A/(1 − x) + B/(1 + 2x), so 7x − 1 = A(1 + 2x) + B(1 − x)', mark: 'M1' },
      { part: '', line: 'x = 1: 6 = 3A, so A = 2', mark: 'A1' },
      { part: '', line: 'x = −½: −4.5 = 1.5B, so B = −3', mark: 'A1' },
      { part: '', line: 'f(x) = 2/(1 − x) − 3/(1 + 2x)', mark: 'A1' },
      { part: '(b)', line: '2(1 − x)⁻¹ = 2[1 + x + x² + …]', mark: 'M1' },
      { part: '', line: '= 2 + 2x + 2x²', mark: 'A1' },
      { part: '', line: '−3(1 + 2x)⁻¹ = −3[1 − 2x + 4x² − …]', mark: 'M1' },
      { part: '', line: '= −3 + 6x − 12x²', mark: 'A1' },
      { part: '', line: 'Adding: f(x) ≈ −1 + 8x − 10x²', mark: 'A1' },
      { part: '(c)', line: 'First expansion needs |x| < 1; second needs |2x| < 1, i.e. |x| < ½', mark: 'M1' },
      { part: '', line: 'BOTH must hold, so the expansion is valid for |x| < ½', mark: 'A1' },
      { part: '(d)', line: 'Estimate: −1 + 0.8 − 0.1 = −0.3', mark: 'M1' },
      { part: '', line: 'Exact: (0.7 − 1)/((0.9)(1.2)) = −0.3/1.08 = −0.278, so the estimate is close', mark: 'A1' },
    ],
    totalCheck: 'Total: 13 marks (a 4, b 5, c 2, d 2)',
    markScheme: [
      'Part (b) must use the general binomial with a NEGATIVE index; each bracket needs its own expansion.',
      'Part (c) requires the INTERSECTION of the two conditions, and a mark is available for saying that the stricter one governs.',
      'Part (d) needs both values and a comparison, not just the estimate.',
    ],
    pitfalls: [
      'Expanding (1 + 2x)⁻¹ as 1 − x + x². The term being raised is 2x, so the expansion is 1 − 2x + 4x² − 8x³.',
      'Giving the validity as |x| < 1 in (c) by looking only at the first bracket. The tighter condition wins.',
      'Sign errors on B: substituting x = −½ into 7x − 1 gives −4.5, not +4.5.',
      'Forgetting that (1 − x)⁻¹ expands with all PLUS signs, while (1 + 2x)⁻¹ alternates.',
    ],
  },

  {
    topic: 'Functions and Graphs',
    paper: 'Paper 2 (Pure)',
    marks: 13,
    question:
      'The functions f and g are defined by\n\n  f(x) = 3x − 2,  x ∈ ℝ\n  g(x) = 1/(x + 4),  x ∈ ℝ, x ≠ −4\n\n(a) Find fg(x), and state its domain. (3)\n(b) Find gf(x), and state the value of x that must be excluded from its domain. (3)\n(c) Find f⁻¹(x). (2)\n(d) Solve |2x − 5| = x + 1. (3)\n(e) Hence write down the solution set of |2x − 5| > x + 1. (2)',
    workedSolution: [
      { part: '(a)', line: 'fg(x) = f(1/(x + 4)) = 3 × 1/(x + 4) − 2', mark: 'M1' },
      { part: '', line: '= 3/(x + 4) − 2', mark: 'A1' },
      { part: '', line: 'Domain: x ∈ ℝ, x ≠ −4', mark: 'B1' },
      { part: '(b)', line: 'gf(x) = g(3x − 2) = 1/((3x − 2) + 4)', mark: 'M1' },
      { part: '', line: '= 1/(3x + 2)', mark: 'A1' },
      { part: '', line: 'Exclude x = −2/3, where the denominator is zero', mark: 'B1' },
      { part: '(c)', line: 'y = 3x − 2, so x = (y + 2)/3', mark: 'M1' },
      { part: '', line: 'f⁻¹(x) = (x + 2)/3', mark: 'A1' },
      { part: '(d)', line: 'Positive case: 2x − 5 = x + 1, giving x = 6', mark: 'M1' },
      { part: '', line: 'Negative case: −(2x − 5) = x + 1, so 5 − 2x = x + 1, giving x = 4/3', mark: 'M1' },
      { part: '', line: 'Both check in the original: x = 6 and x = 4/3', mark: 'A1' },
      { part: '(e)', line: 'The V-shape lies above the line outside the two intersection points', mark: 'M1' },
      { part: '', line: 'x < 4/3 or x > 6', mark: 'A1' },
    ],
    totalCheck: 'Total: 13 marks (a 3, b 3, c 2, d 3, e 2)',
    markScheme: [
      'Note the order: fg(x) means DO g FIRST. Reversing it loses every mark in (a) and (b).',
      'Part (d) must consider both the positive and the negative case, and the solutions must be checked in the original equation.',
      'Part (e) says "hence", so it should follow from (d) rather than be re-solved.',
    ],
    pitfalls: [
      'Reading fg as "f then g". The inner function acts first.',
      'In (b), giving the domain restriction as x ≠ −4. That belongs to g on its own; after composing, the excluded value is where 3x + 2 = 0.',
      'In (d), forgetting to check the solutions. On some modulus equations one case gives an extraneous root that must be rejected.',
      'In (e), giving 4/3 < x < 6, which is the region where the modulus is BELOW the line.',
    ],
  },

  {
    topic: 'Radians',
    paper: 'Paper 2 (Pure)',
    marks: 12,
    question:
      'The sector OAB has centre O, radius 8 cm and angle AOB = 1.2 radians.\n\n(a) Find the length of the arc AB. (2)\n(b) Find the perimeter of the sector. (2)\n(c) Find the area of the sector. (2)\n(d) Find the area of triangle OAB. (2)\n(e) Hence find the area of the segment bounded by the chord AB and the arc AB, to 3 significant figures. (2)\n(f) Show that for small θ the area of such a segment is approximately r²θ³/12. (2)',
    workedSolution: [
      { part: '(a)', line: 'Arc length = rθ = 8 × 1.2', mark: 'M1' },
      { part: '', line: '= 9.6 cm', mark: 'A1' },
      { part: '(b)', line: 'Perimeter = two radii plus the arc = 8 + 8 + 9.6', mark: 'M1' },
      { part: '', line: '= 25.6 cm', mark: 'A1' },
      { part: '(c)', line: 'Area = ½r²θ = ½ × 64 × 1.2', mark: 'M1' },
      { part: '', line: '= 38.4 cm²', mark: 'A1' },
      { part: '(d)', line: 'Area = ½r² sin θ = ½ × 64 × sin 1.2', mark: 'M1' },
      { part: '', line: '= 32 × 0.93204 = 29.8 cm²', mark: 'A1' },
      { part: '(e)', line: 'Segment = sector − triangle = 38.4 − 29.825', mark: 'M1' },
      { part: '', line: '= 8.58 cm² (3 s.f.)', mark: 'A1' },
      { part: '(f)', line: 'Segment = ½r²(θ − sin θ), and for small θ, sin θ ≈ θ − θ³/6', mark: 'M1' },
      { part: '', line: 'So θ − sin θ ≈ θ³/6, giving ½r² × θ³/6 = r²θ³/12  ✓', mark: 'A1' },
    ],
    totalCheck: 'Total: 12 marks (a 2, b 2, c 2, d 2, e 2, f 2)',
    markScheme: [
      'Every formula here requires θ in RADIANS. The calculator must be in radian mode for sin 1.2.',
      'Part (b) is a common single-mark loss: the perimeter includes the two straight radii, not just the arc.',
      'Part (f) requires the small-angle expansion of sin θ to the θ³ term - the first-order approximation sin θ ≈ θ gives zero and earns nothing.',
    ],
    pitfalls: [
      'Calculator in degree mode, giving sin 1.2 = 0.0209 instead of 0.932. Everything after that is wrong.',
      'Giving the perimeter as just the arc, 9.6 cm.',
      'Using ½ab sin C with a = b = 8 is correct here, but writing ½r²θ for the triangle confuses it with the sector.',
      'In (f), stopping at sin θ ≈ θ. That makes θ − sin θ ≈ 0; you need the next term in the expansion.',
    ],
  },

  {
    topic: 'Vectors (3D)',
    paper: 'Paper 2 (Pure)',
    marks: 11,
    question:
      'Relative to a fixed origin O, the points A, B and C have position vectors\n\n  OA = 2i − j + 3k,  OB = 5i + j − k,  OC = i + 3j + 2k\n\n(a) Find the vector AB and its magnitude, giving the magnitude in surd form. (3)\n(b) Find |AC|, giving your answer in the form a√b. (2)\n(c) Find the position vector of M, the midpoint of BC. (2)\n(d) The point D is such that ABCD is a parallelogram, with AB parallel and equal to DC. Find the coordinates of D. (4)',
    workedSolution: [
      { part: '(a)', line: 'AB = OB − OA = (5 − 2)i + (1 − (−1))j + (−1 − 3)k', mark: 'M1' },
      { part: '', line: '= 3i + 2j − 4k', mark: 'A1' },
      { part: '', line: '|AB| = √(9 + 4 + 16) = √29', mark: 'A1' },
      { part: '(b)', line: 'AC = OC − OA = −i + 4j − k, so |AC| = √(1 + 16 + 1) = √18', mark: 'M1' },
      { part: '', line: '= 3√2', mark: 'A1' },
      { part: '(c)', line: 'OM = ½(OB + OC) = ½[(5 + 1)i + (1 + 3)j + (−1 + 2)k]', mark: 'M1' },
      { part: '', line: '= 3i + 2j + ½k', mark: 'A1' },
      { part: '(d)', line: 'ABCD with AB parallel and equal to DC means DC = AB', mark: 'M1' },
      { part: '', line: 'OC − OD = AB, so OD = OC − AB', mark: 'M1' },
      { part: '', line: '= (1 − 3)i + (3 − 2)j + (2 − (−4))k', mark: 'M1' },
      { part: '', line: '= −2i + j + 6k, so D is (−2, 1, 6)', mark: 'A1' },
    ],
    totalCheck: 'Total: 11 marks (a 3, b 2, c 2, d 4)',
    markScheme: [
      'AB = OB − OA. Reversing the subtraction gives BA and costs the accuracy marks.',
      'Part (b) asks for the form a√b, so √18 must be simplified to 3√2.',
      'Part (d) can be checked: AD should equal BC. Both come out as −4i + 2j + 3k.',
    ],
    pitfalls: [
      'Computing OA − OB in (a). The vector from A to B is "destination minus start".',
      'Sign slips on the j-component: −1 subtracted from 1 is +2, not 0.',
      'Leaving |AC| as √18 when the required form is a√b.',
      'In (d), setting OD = OC + AB. That places D on the wrong side and gives (4, 5, −2).',
    ],
  },

  {
    topic: 'Integration (Year 2)',
    paper: 'Paper 2 (Pure)',
    marks: 13,
    question:
      'A tank is leaking. The volume of water in the tank is V cm³ at time t seconds. The rate at which water leaves the tank is proportional to √V.\n\n(a) Write down a differential equation modelling this situation, explaining the sign of your constant. (2)\n(b) Initially V = 400, and after 10 seconds V = 225. Solve the differential equation to express V in terms of t. (7)\n(c) Find the time at which the tank becomes empty according to the model. (2)\n(d) Give one reason why the model may not be reliable as V approaches zero. (2)',
    workedSolution: [
      { part: '(a)', line: 'dV/dt = −k√V', mark: 'M1' },
      { part: '', line: 'k > 0, and the minus sign is because the volume is DECREASING', mark: 'A1' },
      { part: '(b)', line: 'Separate variables: ∫ V⁻¹ᐟ² dV = ∫ −k dt', mark: 'M1' },
      { part: '', line: '2√V = −kt + c', mark: 'A1' },
      { part: '', line: 't = 0, V = 400: 2 × 20 = c, so c = 40', mark: 'M1' },
      { part: '', line: 't = 10, V = 225: 2 × 15 = −10k + 40', mark: 'M1' },
      { part: '', line: '30 = −10k + 40, so k = 1', mark: 'A1' },
      { part: '', line: '2√V = 40 − t, so √V = (40 − t)/2', mark: 'M1' },
      { part: '', line: 'V = (40 − t)²/4', mark: 'A1' },
      { part: '(c)', line: 'V = 0 when 40 − t = 0', mark: 'M1' },
      { part: '', line: 't = 40 seconds', mark: 'A1' },
      { part: '(d)', line: 'As V → 0 the depth of water becomes very small', mark: 'M1' },
      {
        part: '',
        line: 'Surface tension and residual film mean the flow is no longer proportional to √V, so the tank may never fully empty',
        mark: 'A1',
      },
    ],
    totalCheck: 'Total: 13 marks (a 2, b 7, c 2, d 2)',
    markScheme: [
      'Part (a) awards a mark for justifying the negative sign, not just writing it.',
      'Part (b) requires separation of variables with the integral signs shown, then BOTH conditions used to find c and k.',
      'Part (d) must give a reason tied to the model breaking down, not simply "the model is only an approximation".',
    ],
    pitfalls: [
      'Writing dV/dt = k√V and then getting a negative k from the data. It works, but the (a) explanation mark is lost.',
      'Integrating V⁻¹ᐟ² as ½V¹ᐟ². Adding one to −½ gives ½, and dividing by ½ means MULTIPLYING by 2, so it is 2√V.',
      'Using the second condition to find c and the first to find k - the initial condition must give c.',
      'Squaring (40 − t)/2 as (40 − t)²/2 instead of /4.',
    ],
  },

  {
    topic: 'Equations and Inequalities',
    paper: 'Paper 2 (Pure)',
    marks: 11,
    question:
      '(a) Prove by contradiction that √2 is irrational. (5)\n(b) Prove that if n² is even, then n is even. (3)\n(c) Disprove, by means of a counter-example, the statement "n² + n + 11 is prime for all positive integers n". (3)',
    workedSolution: [
      { part: '(a)', line: 'Assume √2 is rational, so √2 = a/b with a, b integers, b ≠ 0, in lowest terms', mark: 'M1' },
      { part: '', line: 'Then 2 = a²/b², so a² = 2b², meaning a² is even', mark: 'A1' },
      { part: '', line: 'If a² is even then a is even, so write a = 2m', mark: 'M1' },
      { part: '', line: '4m² = 2b², so b² = 2m², meaning b² is even and hence b is even', mark: 'A1' },
      {
        part: '',
        line: 'But then a and b share a factor 2, contradicting "lowest terms". So √2 is irrational  ✓',
        mark: 'A1',
      },
      { part: '(b)', line: 'Prove the contrapositive: if n is odd then n² is odd', mark: 'M1' },
      { part: '', line: 'n = 2k + 1 gives n² = 4k² + 4k + 1 = 2(2k² + 2k) + 1', mark: 'A1' },
      {
        part: '',
        line: 'This is odd. So n odd ⟹ n² odd, and therefore n² even ⟹ n even  ✓',
        mark: 'A1',
      },
      { part: '(c)', line: 'Try n = 10: 100 + 10 + 11 = 121', mark: 'M1' },
      { part: '', line: '121 = 11 × 11, which is not prime', mark: 'A1' },
      { part: '', line: 'So the statement is false; a single counter-example disproves it', mark: 'A1' },
    ],
    totalCheck: 'Total: 11 marks (a 5, b 3, c 3)',
    markScheme: [
      'Part (a) must state the assumption AND the "lowest terms" condition at the start - the contradiction depends on it.',
      'Part (a) uses the result of part (b) at the "a² even ⟹ a even" step, which is why the two are asked together.',
      'Part (c) requires the counter-example to be verified as non-prime by factorising, not just asserted.',
    ],
    pitfalls: [
      'Omitting "in lowest terms" in (a). Without it there is no contradiction at the end, and the proof collapses.',
      'Asserting "a² even so a even" as obvious. It is exactly what (b) proves, so cite it.',
      'In (c), stopping at n = 11 (which gives 143 = 11 × 13). It works, but n = 10 is smaller and gives the cleaner 121 = 11².',
      'Trying to prove (c) rather than disprove it. One counter-example is a complete answer; a general argument is not needed.',
    ],
  },
]
