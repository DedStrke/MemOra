/*
  Batch A: new Edexcel A-level Maths (9MA0) revision content topping up six
  Year 2 Pure topics to the floor of 8 flashcards / 4 MCQs / 5 exam questions
  (combined with what already exists elsewhere in the app).

  Topics covered (delta only, do not duplicate existing items):
    - Algebraic Methods (Partial Fractions)
    - Functions and Graphs
    - Sequences and Series
    - The Binomial Expansion (General n)
    - Radians
    - Trigonometric Functions
*/

export const BATCH_A_FLASHCARDS = [
  // ---------------------------------- Algebraic Methods (Partial Fractions)
  {
    front: 'Partial fraction form for distinct linear factors (x-a)(x-b)?',
    back: 'A/(x-a) + B/(x-b)',
    topic: 'Algebraic Methods (Partial Fractions)',
  },
  {
    front: 'What condition must a fraction meet before splitting it into partial fractions directly?',
    back: 'It must be proper: the degree of the numerator must be less than the degree of the denominator',
    topic: 'Algebraic Methods (Partial Fractions)',
  },
  {
    front: 'What do you do if a fraction is improper (numerator degree greater than or equal to denominator degree)?',
    back: 'Divide first, using algebraic division, to get a polynomial quotient plus a proper fraction remainder, then split the remainder into partial fractions',
    topic: 'Algebraic Methods (Partial Fractions)',
  },
  {
    front: 'Partial fraction form for three distinct linear factors (x-a)(x-b)(x-c)?',
    back: 'A/(x-a) + B/(x-b) + C/(x-c)',
    topic: 'Algebraic Methods (Partial Fractions)',
  },
  {
    front: 'What is the cover-up rule used for?',
    back: 'To find a constant like A quickly: cover its matching factor in the denominator and substitute the x-value that makes that factor zero into what remains',
    topic: 'Algebraic Methods (Partial Fractions)',
  },
  {
    front: 'What are the two standard methods for finding A, B, C once you multiply through by the denominator?',
    back: 'Substituting convenient values of x (cover-up), or comparing coefficients of powers of x',
    topic: 'Algebraic Methods (Partial Fractions)',
  },
  {
    front: 'Why are partial fractions useful in Year 2 Pure Maths?',
    back: 'They turn a complicated algebraic fraction into simple terms, which is essential before integrating a fraction or expanding it with the binomial series',
    topic: 'Algebraic Methods (Partial Fractions)',
  },

  // -------------------------------------------------- Functions and Graphs
  {
    front: 'What is the domain of a function?',
    back: 'The set of possible input (x) values',
    topic: 'Functions and Graphs',
  },
  {
    front: 'What is the range of a function?',
    back: 'The set of possible output (y) values',
    topic: 'Functions and Graphs',
  },
  {
    front: 'How is the domain of f-inverse related to f?',
    back: 'The domain of f-inverse equals the range of f, and the range of f-inverse equals the domain of f',
    topic: 'Functions and Graphs',
  },
  {
    front: 'How do you sketch y = |f(x)| from y = f(x)?',
    back: 'Reflect any part of the curve below the x-axis up above it; the part already above the x-axis stays the same',
    topic: 'Functions and Graphs',
  },
  {
    front: 'How do you sketch y = f(|x|) from y = f(x)?',
    back: 'Keep the graph for x greater than or equal to 0, delete the part for x less than 0, then reflect the kept part in the y-axis to replace it',
    topic: 'Functions and Graphs',
  },
  {
    front: 'What is true about the graphs of y = f(x) and y = f-inverse(x)?',
    back: 'They are reflections of each other in the line y = x',
    topic: 'Functions and Graphs',
  },

  // -------------------------------------------------- Sequences and Series
  {
    front: 'Sum of the first n terms of an arithmetic series, using the first and last term?',
    back: 'Sn = n/2 (a + l), where l is the last (nth) term',
    topic: 'Sequences and Series',
  },
  {
    front: 'nth term of a geometric sequence?',
    back: 'a r^(n-1)',
    topic: 'Sequences and Series',
  },
  {
    front: 'What does a recurrence relation like u(n+1) = f(u(n)) need to generate a sequence?',
    back: 'A given first term, e.g. u1, so every later term can be found from the one before it',
    topic: 'Sequences and Series',
  },
  {
    front: 'What does sigma notation represent?',
    back: 'The sum of a series; e.g. the sum from r=1 to n of u_r means u1 + u2 + ... + un',
    topic: 'Sequences and Series',
  },

  // -------------------------------------- The Binomial Expansion (General n)
  {
    front: 'General binomial expansion of (1+x)^n for any rational n?',
    back: '1 + nx + [n(n-1)/2!]x^2 + [n(n-1)(n-2)/3!]x^3 + ...',
    topic: 'The Binomial Expansion (General n)',
  },
  {
    front: 'How do you expand (a+bx)^n using the general binomial series?',
    back: 'Write it as a^n (1 + (b/a)x)^n first, then expand (1 + (b/a)x)^n as a series',
    topic: 'The Binomial Expansion (General n)',
  },
  {
    front: 'Validity condition for expanding (a+bx)^n when n is not a positive integer?',
    back: '|bx/a| < 1, i.e. |x| < |a/b|',
    topic: 'The Binomial Expansion (General n)',
  },
  {
    front: 'Why is the general binomial expansion an infinite series, unlike for a positive integer n?',
    back: 'For non-integer or negative n the series never terminates, since the product n(n-1)(n-2)... never reaches zero',
    topic: 'The Binomial Expansion (General n)',
  },
  {
    front: 'How can the binomial expansion give a numerical approximation, e.g. for the square root of 1.02?',
    back: 'Write it as (1+0.02)^(1/2), expand with n=1/2 and x=0.02, then substitute to get a decimal approximation',
    topic: 'The Binomial Expansion (General n)',
  },
  {
    front: 'How do you expand a fraction like 1/(1-2x) as a series?',
    back: 'Write it as (1-2x)^(-1) and use the general binomial expansion with n=-1 and x replaced by -2x',
    topic: 'The Binomial Expansion (General n)',
  },
  {
    front: 'How does combining partial fractions with the binomial expansion help expand a fraction like (3x+1)/((1-x)(1+2x))?',
    back: 'Split it into partial fractions first, then expand each simple fraction separately as a binomial series and add the results',
    topic: 'The Binomial Expansion (General n)',
  },

  // ------------------------------------------------------------- Radians
  {
    front: 'How do you convert degrees to radians?',
    back: 'Multiply by pi/180',
    topic: 'Radians',
  },
  {
    front: 'How do you convert radians to degrees?',
    back: 'Multiply by 180/pi',
    topic: 'Radians',
  },
  {
    front: 'Area of a segment formula (radians)?',
    back: '½r^2(θ - sinθ), i.e. sector area minus triangle area',
    topic: 'Radians',
  },
  {
    front: 'Small angle approximation for sinθ, θ small and in radians?',
    back: 'sinθ ≈ θ',
    topic: 'Radians',
  },
  {
    front: 'Small angle approximation for tanθ, θ small and in radians?',
    back: 'tanθ ≈ θ',
    topic: 'Radians',
  },

  // --------------------------------------------------- Trigonometric Functions
  {
    front: 'cosecθ = ?',
    back: '1/sinθ',
    topic: 'Trigonometric Functions',
  },
  {
    front: 'cotθ = ?',
    back: '1/tanθ = cosθ/sinθ',
    topic: 'Trigonometric Functions',
  },
  {
    front: '1 + cot²θ = ?',
    back: 'cosec²θ',
    topic: 'Trigonometric Functions',
  },
  {
    front: 'Domain and range of arccos(x)?',
    back: 'Domain: -1 ≤ x ≤ 1; range: 0° ≤ y ≤ 180° (0 to π radians)',
    topic: 'Trigonometric Functions',
  },
  {
    front: 'Domain and range of arctan(x)?',
    back: 'Domain: all real x; range: -90° < y < 90° (-π/2 to π/2 radians)',
    topic: 'Trigonometric Functions',
  },
]

export const BATCH_A_MCQ = [
  // ---------------------------------- Algebraic Methods (Partial Fractions)
  {
    question: 'Expressing (5x+1)/((x-1)(x+2)) as A/(x-1) + B/(x+2), what is the value of A?',
    options: ['2', '3', '5', '-2'],
    answer: 0,
    explanation: 'Multiply through: 5x+1 = A(x+2)+B(x-1). Substituting x=1 gives 6=3A, so A=2 (and x=-2 gives B=3).',
    topic: 'Algebraic Methods (Partial Fractions)',
  },
  {
    question: 'Which is the correct partial fraction form for (3x-1)/((x+2)(x-1)²)?',
    options: [
      'A/(x+2) + B/(x-1)²',
      'A/(x+2) + B/(x-1) + C/(x-1)²',
      'A/(x+2) + B/(x-1) + C/(x+2)²',
      'A/(x+2)² + B/(x-1) + C/(x-1)²',
    ],
    answer: 1,
    explanation: 'A repeated linear factor (x-1)² needs both a B/(x-1) term and a C/(x-1)² term. Omitting the B/(x-1) term, as in the first option, is a common error.',
    topic: 'Algebraic Methods (Partial Fractions)',
  },
  {
    question: '(x²+3)/((x-1)(x+2)) is written as p + A/(x-1) + B/(x+2). What is the value of p?',
    options: ['0', 'x', '1', '3'],
    answer: 2,
    explanation: 'The numerator and denominator both have degree 2, so the fraction is improper. Dividing gives x²+3 = 1×(x-1)(x+2) + (-x+5), so the polynomial quotient p = 1.',
    topic: 'Algebraic Methods (Partial Fractions)',
  },

  // -------------------------------------------------- Functions and Graphs
  {
    question: 'f(x) = x - 3 and g(x) = 2x². Find gf(2).',
    options: ['-2', '5', '1', '2'],
    answer: 3,
    explanation: 'gf(2) means apply f first: f(2) = -1, then g(-1) = 2×(-1)² = 2. Computing fg(2) instead (getting 5), or forgetting to double the square (getting 1), are common slips.',
    topic: 'Functions and Graphs',
  },
  {
    question: 'f(x) = (x+1)/2 for all real x. Find f-inverse(x).',
    options: ['2x - 1', 'x/2 - 1', '2x + 1', '(x-1)/2'],
    answer: 0,
    explanation: 'Let y=(x+1)/2, so 2y=x+1, giving x=2y-1. Swapping the roles gives f-inverse(x) = 2x - 1.',
    topic: 'Functions and Graphs',
  },
  {
    question: 'The equation |x - 2| = 5 has solutions',
    options: ['x = 7 only', 'x = 7 or x = -3', 'x = 3 or x = -7', 'x = -7 or x = -3'],
    answer: 1,
    explanation: 'Either x-2=5 (giving x=7) or x-2=-5 (giving x=-3). Only taking the positive case misses the second solution.',
    topic: 'Functions and Graphs',
  },

  // -------------------------------------------------- Sequences and Series
  {
    question: 'The first term of a geometric sequence is 3 and the common ratio is 2. What is the 5th term?',
    options: ['96', '24', '48', '11'],
    answer: 2,
    explanation: 'u5 = a r^(n-1) = 3 × 2⁴ = 3 × 16 = 48. Using r⁵ instead of r⁴ gives 96 (an off-by-one error); using r³ gives 24.',
    topic: 'Sequences and Series',
  },
  {
    question: 'A sequence is defined by u1 = 2, u(n+1) = 3u(n) - 1. What is u3?',
    options: ['15', '5', '12', '14'],
    answer: 3,
    explanation: 'u2 = 3(2)-1 = 5, then u3 = 3(5)-1 = 14. Forgetting the final "-1" gives 15; reporting u2 instead of u3 gives 5.',
    topic: 'Sequences and Series',
  },
  {
    question: 'For which value of r does the geometric series with first term 10 and common ratio r have a sum to infinity?',
    options: ['r = 0.5', 'r = 1', 'r = -1.5', 'r = 2'],
    answer: 0,
    explanation: 'A sum to infinity exists only when |r| < 1. r=1 makes the series diverge to infinity (a common misconception), and |r|>1 in the other two options also diverges.',
    topic: 'Sequences and Series',
  },

  // -------------------------------------- The Binomial Expansion (General n)
  {
    question: 'In the expansion of (1+x)^(1/2), what is the coefficient of x²?',
    options: ['1/8', '-1/8', '-1/4', '1/4'],
    answer: 1,
    explanation: 'The coefficient is n(n-1)/2! with n=1/2: (1/2)(-1/2)/2 = -1/8. Forgetting to divide by 2! gives -1/4; a sign slip gives 1/8.',
    topic: 'The Binomial Expansion (General n)',
  },
  {
    question: 'For the expansion of (1 - 3x)⁻², the expansion is valid for',
    options: ['|x| < 3', '|x| < 1', '|x| < 1/3', '|x| < 1/9'],
    answer: 2,
    explanation: 'Writing it as (1+(-3x))⁻², validity requires |-3x| < 1, i.e. |x| < 1/3. Inverting the fraction gives the wrong distractor |x| < 3.',
    topic: 'The Binomial Expansion (General n)',
  },
  {
    question: 'To expand (4+x)^(1/2) as a binomial series, the correct first step is to write it as',
    options: [
      '(1 + x/4)^(1/2)',
      '4(1 + x/4)^(1/2)',
      '4^(1/2) (1 + x)^(1/2)',
      '4^(1/2) (1 + x/4)^(1/2)',
    ],
    answer: 3,
    explanation: '(4+x)^(1/2) = [4(1+x/4)]^(1/2) = 4^(1/2)(1+x/4)^(1/2). Forgetting the 4^(1/2) factor, or forgetting to divide x by 4, are common errors.',
    topic: 'The Binomial Expansion (General n)',
  },

  // ------------------------------------------------------------- Radians
  {
    question: 'What is 5π/6 radians in degrees?',
    options: ['150°', '300°', '108°', '135°'],
    answer: 0,
    explanation: 'Multiply by 180/π: (5/6) × 180° = 150°.',
    topic: 'Radians',
  },
  {
    question: 'A sector of a circle has radius 6 cm and angle 1.2 radians. What is the area of the segment cut off by the chord?',
    options: ['21.60 cm²', '4.82 cm²', '16.78 cm²', '9.65 cm²'],
    answer: 1,
    explanation: 'Sector area = ½(6²)(1.2) = 21.6 cm². Triangle area = ½(6²)sin(1.2) ≈ 16.78 cm². Segment = sector - triangle ≈ 4.82 cm². Reporting the sector or triangle area alone are common slips.',
    topic: 'Radians',
  },
  {
    question: 'Using the small angle approximation, cos(0.3) is approximately',
    options: ['0.910', '1.045', '0.955', '0.850'],
    answer: 2,
    explanation: 'cosθ ≈ 1 - θ²/2 = 1 - 0.09/2 = 0.955. Forgetting the "/2" gives 0.910; a sign error gives 1.045.',
    topic: 'Radians',
  },

  // --------------------------------------------------- Trigonometric Functions
  {
    question: 'What is the exact value of cosec 30°?',
    options: ['1/2', '√3', '2/√3', '2'],
    answer: 3,
    explanation: 'cosec 30° = 1/sin 30° = 1/(1/2) = 2. Giving sin 30° itself (1/2), or confusing cosec with cot or sec, are common mix-ups.',
    topic: 'Trigonometric Functions',
  },
  {
    question: 'Given that cot θ = 3/4 and θ is acute, what is cosec²θ?',
    options: ['25/16', '9/16', '7/4', '16/25'],
    answer: 0,
    explanation: 'Using 1 + cot²θ = cosec²θ: cosec²θ = 1 + (3/4)² = 1 + 9/16 = 25/16. Forgetting to add 1 gives 9/16.',
    topic: 'Trigonometric Functions',
  },
  {
    question: 'What is arccos(-1/2) in degrees?',
    options: ['60°', '120°', '240°', '-60°'],
    answer: 1,
    explanation: 'arccos has range 0° to 180°. cos θ = -1/2 in that range gives θ = 120°. Dropping the negative sign gives the reference angle 60° instead.',
    topic: 'Trigonometric Functions',
  },
]

export const BATCH_A_EXAM = [
  // ---------------------------------- Algebraic Methods (Partial Fractions)
  {
    question: 'Express (x+11)/((x-1)(x+2)) in partial fractions.',
    marks: 4,
    markScheme: [
      'M1: Multiply both sides by (x-1)(x+2) to write x+11 = A(x+2) + B(x-1)',
      'A1: A = 4 (substituting x = 1)',
      'A1: B = -3 (substituting x = -2)',
      'B1: Correctly combines into partial fraction form with denominators (x-1) and (x+2)',
      'Final answer: 4/(x-1) - 3/(x+2)',
    ],
    topic: 'Algebraic Methods (Partial Fractions)',
  },
  {
    question: 'Express (x+5)/((x+1)(x-1)²) in the form A/(x+1) + B/(x-1) + C/(x-1)².',
    marks: 7,
    markScheme: [
      'M1: Multiply both sides by (x+1)(x-1)² to form the identity x+5 = A(x-1)² + B(x+1)(x-1) + C(x+1)',
      'M1: Substitute x = 1 into the identity',
      'A1: C = 3',
      'M1: Substitute x = -1 into the identity',
      'A1: A = 1',
      'M1: Compare coefficients of x² (or substitute x = 0) to find B',
      'A1: B = -1',
      'Final answer: 1/(x+1) - 1/(x-1) + 3/(x-1)²',
    ],
    topic: 'Algebraic Methods (Partial Fractions)',
  },
  {
    question: 'Express (4x²+3x-1)/((x-1)(x+2)) as a polynomial plus partial fractions.',
    marks: 5,
    markScheme: [
      'M1: Recognise the fraction is improper (numerator degree = denominator degree) and divide 4x²+3x-1 by (x-1)(x+2) = x²+x-2',
      'A1: Quotient is 4, remainder is -x+7, so the expression is 4 + (-x+7)/((x-1)(x+2))',
      'M1: Write -x+7 = A(x+2) + B(x-1) and substitute x = 1 and x = -2',
      'A1: A = 2',
      'A1: B = -3',
      'Final answer: 4 + 2/(x-1) - 3/(x+2)',
    ],
    topic: 'Algebraic Methods (Partial Fractions)',
  },
  {
    question: 'f(x) = (2x³ + x² + 2x - 6)/((x-2)(x+1)²). Express f(x) in the form p + A/(x-2) + B/(x+1) + C/(x+1)², where p, A, B, C are constants to be found.',
    marks: 8,
    markScheme: [
      'B1: Recognise the fraction is improper (numerator degree 3 = denominator degree 3) so a polynomial quotient p is needed',
      'M1: Divide 2x³+x²+2x-6 by (x-2)(x+1)² = x³-3x-2 using algebraic division',
      'A1: p = 2, with remainder x²+8x-2, so f(x) = 2 + (x²+8x-2)/((x-2)(x+1)²)',
      'M1: Write x²+8x-2 = A(x+1)² + B(x-2)(x+1) + C(x-2) and substitute x = 2',
      'A1: A = 2',
      'M1: Substitute x = -1 to find C',
      'A1: C = 3',
      'A1: Compare coefficients (e.g. of x²), or substitute a further value, to find B = -1',
      'Final answer: 2 + 2/(x-2) - 1/(x+1) + 3/(x+1)²',
    ],
    topic: 'Algebraic Methods (Partial Fractions)',
  },

  // -------------------------------------------------- Functions and Graphs
  {
    question: 'The function f is defined by f(x) = x² - 4x + 1 for x ≥ 2, x ∈ ℝ. (a) Express f(x) in completed square form. (b) State the range of f.',
    marks: 5,
    markScheme: [
      'M1: Complete the square: x² - 4x + 1 = (x - 2)² - 4 + 1',
      'A1: (x - 2)² - 3',
      'B1: State f(2) = -3',
      'M1: Recognise f is increasing for x ≥ 2 (the domain starts exactly at the vertex), so this is the minimum value of the range',
      'A1: Range is f(x) ≥ -3',
      'Final answer: f(x) = (x-2)² - 3, range f(x) ≥ -3',
    ],
    topic: 'Functions and Graphs',
  },
  {
    question: 'The function g is defined by g(x) = √(x - 3) for x ≥ 3, x ∈ ℝ. Find g-inverse(x) and state its domain.',
    marks: 3,
    markScheme: [
      'M1: Let y = √(x-3) and rearrange: y² = x - 3, so x = y² + 3',
      'A1: g-inverse(x) = x² + 3',
      'A1: Domain of g-inverse is x ≥ 0, since the range of g is g(x) ≥ 0 (square root is non-negative for x ≥ 3)',
      'Final answer: g-inverse(x) = x² + 3, domain x ≥ 0',
    ],
    topic: 'Functions and Graphs',
  },
  {
    question: 'Solve the inequality |2x - 1| < |x + 4|.',
    marks: 6,
    markScheme: [
      'M1: Since both sides are non-negative, square both sides to get (2x-1)² < (x+4)²',
      'M1: Expand both squares: 4x²-4x+1 < x²+8x+16',
      'A1: Rearranges to 3x² - 12x - 15 < 0, i.e. x² - 4x - 5 < 0',
      'M1: Factorise: (x-5)(x+1) < 0',
      'A1: Critical values x = 5 and x = -1',
      'A1: Correct region since the quadratic in x opens upward: -1 < x < 5',
      'Final answer: -1 < x < 5',
    ],
    topic: 'Functions and Graphs',
  },
  {
    question: 'f(x) = (x - 3)² - 4 for x ∈ ℝ. The curve has a minimum at (3, -4) and crosses the x-axis at x = 1 and x = 5. (a) State the coordinates of the minimum point of y = f(x - 2) + 5. (b) State the range of y = |f(x)|. (c) Find the number of solutions of |f(x)| = 3.',
    marks: 8,
    markScheme: [
      'M1: y = f(x-2) + 5 translates the graph 2 right and 5 up',
      'A1: (a) Minimum point is (5, 1)',
      'B1: Recognise that y = |f(x)| reflects the part of the curve below the x-axis (between x = 1 and x = 5, where f(x) < 0) up above it',
      'A1: (b) Range of y = |f(x)| is y ≥ 0',
      'M1: For |f(x)| = 3, solve both f(x) = 3 and f(x) = -3',
      'A1: f(x) = 3 gives (x-3)² = 7, so x = 3 ± √7 (2 solutions)',
      'A1: f(x) = -3 gives (x-3)² = 1, so x = 2 or x = 4 (2 solutions)',
      'B1: All four values are distinct and real, so there are 4 solutions in total',
      'Final answer: (a) (5, 1); (b) y ≥ 0; (c) 4 solutions',
    ],
    topic: 'Functions and Graphs',
  },

  // -------------------------------------------------- Sequences and Series
  {
    question: 'An arithmetic sequence has 3rd term 11 and 8th term 31. Find the first term a and common difference d, then find the sum of the first 20 terms.',
    marks: 6,
    markScheme: [
      'M1: Form two equations from the given terms: a + 2d = 11 and a + 7d = 31',
      'M1: Subtract the equations to eliminate a: 5d = 20',
      'A1: d = 4',
      'A1: a = 3',
      'M1: Substitute a = 3, d = 4, n = 20 into Sn = n/2 [2a + (n-1)d]',
      'A1: S20 = 10 × (6 + 76) = 820',
      'Final answer: a = 3, d = 4, S20 = 820',
    ],
    topic: 'Sequences and Series',
  },
  {
    question: 'A geometric series has first term 5 and common ratio 1.5. Find the smallest value of n for which the sum of the first n terms exceeds 200.',
    marks: 6,
    markScheme: [
      'M1: Use Sn = a(rⁿ-1)/(r-1) with a = 5, r = 1.5 to write Sn = 10(1.5ⁿ - 1)',
      'M1: Set up the inequality 10(1.5ⁿ - 1) > 200',
      'A1: Simplifies to 1.5ⁿ > 21',
      'M1: Take logs of both sides: n > log(21) / log(1.5)',
      'A1: n > 7.51 (2 d.p.)',
      'B1: Since n must be a whole number, round up to the next integer',
      'Final answer: n = 8',
    ],
    topic: 'Sequences and Series',
  },
  {
    question: 'A sequence is defined by u1 = 4 and u(n+1) = 2u(n) - 3 for n ≥ 1. (a) Find u2, u3, and u4. (b) Determine whether the sequence is increasing, decreasing, or periodic.',
    marks: 5,
    markScheme: [
      'M1: u2 = 2(4) - 3 = 5',
      'A1: u3 = 2(5) - 3 = 7',
      'A1: u4 = 2(7) - 3 = 11',
      'B1: Compare consecutive terms: 4 < 5 < 7 < 11',
      'B1: Since every term generated satisfies u(n) > 3, u(n+1) - u(n) = u(n) - 3 > 0 for all n, confirming the sequence is strictly increasing',
      'Final answer: u2=5, u3=7, u4=11; the sequence is increasing',
    ],
    topic: 'Sequences and Series',
  },
  {
    question: 'Given the arithmetic series with general term (4r - 1), summed from r=1 to n: (a) show that the sum of the first n terms is 2n² + n. (b) Hence find the smallest n for which the sum first exceeds 500.',
    marks: 7,
    markScheme: [
      'M1: Recognise the series is arithmetic with first term (r=1) 3 and common difference 4',
      'M1: Use Sn = n/2 [2a + (n-1)d] with a = 3, d = 4',
      'A1: Sn = n/2 [6 + 4(n-1)] = n/2 (4n + 2)',
      'A1: = 2n² + n, as required',
      'M1: Set up 2n² + n > 500 and solve 2n² + n - 500 = 0 using the quadratic formula',
      'A1: n ≈ 15.56, taking the positive root of n = (-1 + √4001)/4',
      'B1: Since n must be a positive integer, check n = 15 gives 465 (< 500) and n = 16 gives 528 (> 500)',
      'Final answer: n = 16',
    ],
    topic: 'Sequences and Series',
  },

  // -------------------------------------- The Binomial Expansion (General n)
  {
    question: 'Find the binomial expansion of (1 - 2x)^(1/3) up to and including the term in x³, simplifying each coefficient. State the range of values of x for which the expansion is valid.',
    marks: 7,
    markScheme: [
      'M1: Use (1+kx)ⁿ = 1 + nkx + [n(n-1)/2!](kx)² + [n(n-1)(n-2)/3!](kx)³ with n=1/3, k=-2',
      'A1: x term: (1/3)(-2x) = -2x/3',
      'M1: x² coefficient: (1/3)(-2/3)/2 = -1/9, times (-2x)² = 4x²',
      'A1: x² term: -4x²/9',
      'M1: x³ coefficient: (1/3)(-2/3)(-5/3)/6 = 5/81, times (-2x)³ = -8x³',
      'A1: x³ term: -40x³/81',
      'B1: Valid for |-2x| < 1, i.e. |x| < 1/2',
      'Final answer: 1 - (2/3)x - (4/9)x² - (40/81)x³ + ..., valid for |x| < 1/2',
    ],
    topic: 'The Binomial Expansion (General n)',
  },
  {
    question: 'By expanding (1+x)^(1/2) up to the term in x², find an approximation for √1.1, using x = 0.1. Give your answer to 4 decimal places.',
    marks: 5,
    markScheme: [
      'M1: Use (1+x)^(1/2) ≈ 1 + (1/2)x + [(1/2)(-1/2)/2!]x²',
      'A1: Simplifies to 1 + x/2 - x²/8',
      'M1: Substitute x = 0.1 into the expansion',
      'A1: 1 + 0.05 - 0.00125 = 1.04875',
      'B1: Round correctly to 4 decimal places (1.04875 rounds up)',
      'Final answer: √1.1 ≈ 1.0488 (4 d.p.)',
    ],
    topic: 'The Binomial Expansion (General n)',
  },
  {
    question: 'f(x) = 1/√(4-x) = (4-x)^(-1/2). (a) Show that f(x) can be written as (1/2)(1 - x/4)^(-1/2). (b) Hence find the binomial expansion of f(x) up to and including the term in x², simplifying coefficients. (c) State the range of validity.',
    marks: 8,
    markScheme: [
      'M1: Write 4 - x = 4(1 - x/4), so (4-x)^(-1/2) = 4^(-1/2)(1-x/4)^(-1/2)',
      'A1: 4^(-1/2) = 1/2, giving f(x) = (1/2)(1-x/4)^(-1/2), as required',
      'M1: Expand (1-x/4)^(-1/2) using n=-1/2: 1 + (-1/2)(-x/4) + [(-1/2)(-3/2)/2](-x/4)²',
      'A1: x term: (-1/2)(-x/4) = x/8',
      'A1: x² term: [(-1/2)(-3/2)/2] × x²/16 = (3/8)(x²/16) = 3x²/128',
      'M1: Multiply the whole series by 1/2',
      'A1: f(x) ≈ 1/2 + x/16 + 3x²/256',
      'B1: Valid for |x/4| < 1, i.e. |x| < 4',
      'Final answer: f(x) ≈ 1/2 + x/16 + 3x²/256, valid for |x| < 4',
    ],
    topic: 'The Binomial Expansion (General n)',
  },
  {
    question: 'Express (5-x)/((1+x)(1-2x)) in partial fractions, then use the result to find the series expansion up to and including the x² term.',
    marks: 7,
    markScheme: [
      'M1: Write 5-x = A(1-2x) + B(1+x) and substitute x = -1 to find A',
      'A1: A = 2',
      'M1: Substitute x = 1/2 to find B',
      'A1: B = 3',
      'M1: Expand 2(1+x)⁻¹ = 2(1 - x + x² - ...) and 3(1-2x)⁻¹ = 3(1 + 2x + 4x² + ...) up to the x² term',
      'A1: 2/(1+x) ≈ 2 - 2x + 2x² and 3/(1-2x) ≈ 3 + 6x + 12x²',
      'B1: Valid for |x| < 1/2, the more restrictive of |x| < 1 and |x| < 1/2',
      'Final answer: (5-x)/((1+x)(1-2x)) ≈ 5 + 4x + 14x², valid for |x| < 1/2',
    ],
    topic: 'The Binomial Expansion (General n)',
  },

  // ------------------------------------------------------------- Radians
  {
    question: 'A sector of a circle has radius 8 cm and angle 2.5 radians. Find (a) the arc length, (b) the perimeter of the sector.',
    marks: 4,
    markScheme: [
      'M1: Use s = rθ = 8 × 2.5',
      'A1: Arc length = 20 cm',
      'M1: Perimeter = arc length + 2r = 20 + 2(8)',
      'A1: Perimeter = 36 cm',
      'Final answer: Arc length = 20 cm, perimeter = 36 cm',
    ],
    topic: 'Radians',
  },
  {
    question: 'A sector OAB of a circle with centre O and radius 10 cm has area 40 cm². (a) Find the angle AOB in radians. (b) Find the area of the segment cut off by the chord AB.',
    marks: 7,
    markScheme: [
      'M1: Use sector area formula ½r²θ = 40 with r = 10',
      'A1: 50θ = 40, so θ = 0.8 radians',
      'M1: Use triangle area = ½r² sinθ = ½(100)sin(0.8)',
      'A1: sin(0.8) ≈ 0.7174, so triangle area ≈ 35.87 cm²',
      'M1: Segment area = sector area - triangle area = 40 - 35.87',
      'A1: Segment area ≈ 4.13 cm²',
      'B1: Equivalently, segment area = ½r²(θ - sinθ) = 50(0.8 - 0.7174) ≈ 4.13 cm² (checks)',
      'Final answer: θ = 0.8 radians, segment area ≈ 4.13 cm²',
    ],
    topic: 'Radians',
  },
  {
    question: 'Using the small angle approximations for sinθ and cosθ, show that (1 - cosθ)/sinθ ≈ θ/2 for small θ in radians, then use this to estimate the value of (1 - cos 0.2)/sin 0.2 to 3 decimal places.',
    marks: 6,
    markScheme: [
      'M1: Use cosθ ≈ 1 - θ²/2, so 1 - cosθ ≈ θ²/2',
      'M1: Use sinθ ≈ θ',
      'A1: (1-cosθ)/sinθ ≈ (θ²/2)/θ = θ/2, as required',
      'M1: Substitute θ = 0.2 into θ/2',
      'A1: = 0.1',
      'B1: State the approximation is valid because θ = 0.2 radians is small',
      'Final answer: (1 - cos 0.2)/sin 0.2 ≈ 0.100 (3 d.p.)',
    ],
    topic: 'Radians',
  },
  {
    question: 'A sector of a circle has radius r cm and angle θ = 1.5 radians. Given that the perimeter of the sector is 25 cm, (a) find r. (b) Hence find the area of the sector. (c) Find the area of the segment cut off by the chord, giving your answer to 2 decimal places.',
    marks: 8,
    markScheme: [
      'M1: Perimeter = 2r + rθ = r(2+θ)',
      'A1: r(3.5) = 25, so r = 50/7 ≈ 7.14 cm',
      'M1: Sector area = ½r²θ = ½(50/7)²(1.5)',
      'A1: Sector area ≈ 38.27 cm²',
      'M1: Triangle area = ½r² sinθ = ½(50/7)² sin(1.5)',
      'A1: Triangle area ≈ 25.45 cm²',
      'M1: Segment area = sector area - triangle area = 38.27 - 25.45',
      'A1: Segment area ≈ 12.82 cm²',
      'Final answer: r ≈ 7.14 cm, sector area ≈ 38.27 cm², segment area ≈ 12.82 cm²',
    ],
    topic: 'Radians',
  },

  // --------------------------------------------------- Trigonometric Functions
  {
    question: 'Solve cosec x = 3 for 0 ≤ x ≤ 360°, giving your answers to 1 decimal place.',
    marks: 5,
    markScheme: [
      'M1: Rewrite cosec x = 3 as sin x = 1/3',
      'M1: Find the principal value x = arcsin(1/3)',
      'A1: x = 19.5° (1 d.p.)',
      'M1: Use the second solution in range: x = 180° - 19.5°',
      'A1: x = 160.5°',
      'Final answer: x = 19.5° or x = 160.5°',
    ],
    topic: 'Trigonometric Functions',
  },
  {
    question: 'Solve cot x = -1 for 0 ≤ x ≤ 360°.',
    marks: 5,
    markScheme: [
      'M1: Rewrite cot x = -1 as tan x = -1',
      'M1: Find the reference (acute) angle: arctan(1) = 45°',
      'M1: Since tan is negative, solutions lie in the 2nd and 4th quadrants',
      'A1: x = 180° - 45° = 135°',
      'A1: x = 360° - 45° = 315°',
      'Final answer: x = 135° or x = 315°',
    ],
    topic: 'Trigonometric Functions',
  },
  {
    question: 'Solve the equation 2sec²x - tan x = 5 for 0 ≤ x ≤ 180°, giving answers to 1 decimal place.',
    marks: 8,
    markScheme: [
      'M1: Use sec²x = 1 + tan²x to rewrite the equation as 2(1+tan²x) - tan x = 5',
      'A1: 2tan²x - tan x - 3 = 0',
      'M1: Let t = tan x and factorise: (2t-3)(t+1) = 0',
      'A1: t = 3/2 or t = -1',
      'M1: Solve tan x = 3/2 in range 0 ≤ x ≤ 180°',
      'A1: x = 56.3° (1 d.p.)',
      'M1: Solve tan x = -1 in range 0 ≤ x ≤ 180° (tan negative in the 2nd quadrant)',
      'A1: x = 135°',
      'Final answer: x = 56.3° or x = 135°',
    ],
    topic: 'Trigonometric Functions',
  },
  {
    question: 'Prove that cosec²θ - cot²θ = 1 for all θ (θ ≠ nπ, n an integer), starting from sin²θ + cos²θ = 1.',
    marks: 4,
    markScheme: [
      'M1: Divide both sides of sin²θ + cos²θ = 1 by sin²θ',
      'A1: 1 + cot²θ = cosec²θ, using cosθ/sinθ = cotθ and 1/sinθ = cosecθ',
      'M1: Rearrange to cosec²θ - cot²θ = 1',
      'B1: State the restriction θ ≠ nπ (n an integer) is needed since sinθ ≠ 0, so cosec and cot are defined',
      'Final answer: cosec²θ - cot²θ = 1, as required',
    ],
    topic: 'Trigonometric Functions',
  },
]
