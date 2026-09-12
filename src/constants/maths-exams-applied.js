/*
  Edexcel 9MA0 Paper 3: Statistics and Mechanics.

  Paper 3 is worth as much as either Pure paper, and its questions have a
  distinct shape. The Statistics half is nearly always a chain - summarise
  the data, then make an inference, then criticise the inference - and the
  marks sit in the WORDING of the conclusion as much as in the arithmetic.
  The Mechanics half almost always sets up simultaneous equations from two
  bodies, and the marks sit in resolving in the right directions.

  The same M / A / B / dM / ft coding is used as in the Pure file, so a
  self-marked attempt tells you whether you lost method or accuracy.

  A note on the statistics questions: the probabilities quoted are the
  standard Edexcel binomial and normal table values, so they can be checked
  against the formula booklet you will have in the exam.
*/

export const MATHS_EXAM_APPLIED = [
  {
    topic: 'Data Presentation and Interpretation',
    paper: 'Paper 3 (Statistics)',
    marks: 12,
    question:
      'The time t minutes taken by 60 students to complete a task is summarised below.\n\n  0 ≤ t < 10   frequency 8\n  10 ≤ t < 20  frequency 15\n  20 ≤ t < 30  frequency 20\n  30 ≤ t < 50  frequency 12\n  50 ≤ t < 80  frequency 5\n\n(a) Estimate the mean time. (3)\n(b) Use linear interpolation to estimate the median. (3)\n(c) Estimate the standard deviation. (3)\n(d) An outlier is defined as a value more than 2 standard deviations above the mean. Find this boundary and comment on whether the data may contain outliers. (3)',
    workedSolution: [
      { part: '(a)', line: 'Midpoints: 5, 15, 25, 40, 65', mark: 'M1' },
      { part: '', line: 'Σfx = 8(5) + 15(15) + 20(25) + 12(40) + 5(65) = 1570', mark: 'M1' },
      { part: '', line: 'Mean = 1570/60 = 26.2 minutes (3 s.f.)', mark: 'A1' },
      { part: '(b)', line: 'Median is the 30th value. Cumulative frequencies: 8, 23, 43, 55, 60', mark: 'M1' },
      { part: '', line: 'The 30th value lies in the 20 ≤ t < 30 class, 7 values into a class of 20', mark: 'M1' },
      { part: '', line: 'Median = 20 + (7/20) × 10 = 23.5 minutes', mark: 'A1' },
      { part: '(c)', line: 'Σfx² = 8(25) + 15(225) + 20(625) + 12(1600) + 5(4225) = 56400', mark: 'M1' },
      { part: '', line: 'Variance = 56400/60 − 26.1667² = 940 − 684.69 = 255.3', mark: 'M1' },
      { part: '', line: 'Standard deviation = √255.3 = 16.0 minutes (3 s.f.)', mark: 'A1' },
      { part: '(d)', line: 'Boundary = 26.1667 + 2(15.978)', mark: 'M1' },
      { part: '', line: '= 58.1 minutes', mark: 'A1' },
      {
        part: '',
        line: 'The final class extends to 80, so some values may exceed 58.1 - the data MAY contain outliers, but grouped data cannot confirm it',
        mark: 'A1',
      },
    ],
    totalCheck: 'Total: 12 marks (a 3, b 3, c 3, d 3)',
    markScheme: [
      'Note the unequal class widths: the last two classes are 20 and 30 wide, so their midpoints are 40 and 65, not 35 and 55.',
      'Part (b) must show the interpolation fraction, not just the answer.',
      'Part (d) awards the final mark for recognising that grouped data only tells you an outlier is POSSIBLE.',
    ],
    pitfalls: [
      'Assuming all classes are 10 wide and using midpoints 5, 15, 25, 35, 45. Two of them are wrong and every subsequent answer follows.',
      'Using n/2 = 30 for the median position but then counting from the wrong cumulative total.',
      'Using the divisor n − 1 for the variance. At A-level the population formula Σfx²/Σf − x̄² is used.',
      'Saying definitively that there ARE outliers. From grouped data you cannot see individual values.',
    ],
  },

  {
    topic: 'Statistical Distributions (Binomial)',
    paper: 'Paper 3 (Statistics)',
    marks: 13,
    question:
      'A seed company claims that 80% of its seeds germinate. A gardener plants a random sample of 20 seeds and finds that 13 germinate.\n\n(a) State the distribution of X, the number of seeds that germinate, under the company’s claim. (2)\n(b) Test, at the 5% significance level, whether the germination rate is lower than the company claims. State your hypotheses clearly. (5)\n(c) Find the critical region for this test. (4)\n(d) Hence state the actual significance level of the test. (2)',
    workedSolution: [
      { part: '(a)', line: 'X ~ B(20, 0.8)', mark: 'B1 B1' },
      { part: '(b)', line: 'H₀: p = 0.8   H₁: p < 0.8  (one-tailed)', mark: 'B1' },
      { part: '', line: 'Assume H₀. Required: P(X ≤ 13)', mark: 'M1' },
      { part: '', line: 'Let Y = 20 − X, so Y ~ B(20, 0.2) and X ≤ 13 ⟺ Y ≥ 7', mark: 'M1' },
      { part: '', line: 'P(Y ≥ 7) = 1 − P(Y ≤ 6) = 1 − 0.9133 = 0.0867', mark: 'A1' },
      {
        part: '',
        line: '0.0867 > 0.05, so do not reject H₀: insufficient evidence that the germination rate is below 80%',
        mark: 'A1',
      },
      { part: '(c)', line: 'Need the largest c with P(X ≤ c) ≤ 0.05', mark: 'M1' },
      { part: '', line: 'P(X ≤ 12) = P(Y ≥ 8) = 1 − 0.9679 = 0.0321 ≤ 0.05', mark: 'M1' },
      { part: '', line: 'P(X ≤ 13) = 0.0867 > 0.05, so 13 is not in the region', mark: 'A1' },
      { part: '', line: 'Critical region is X ≤ 12', mark: 'A1' },
      { part: '(d)', line: 'Actual significance level = P(X ≤ 12) under H₀', mark: 'M1' },
      { part: '', line: '= 0.0321, or 3.21%', mark: 'A1' },
    ],
    totalCheck: 'Total: 13 marks (a 2, b 5, c 4, d 2)',
    markScheme: [
      'Hypotheses must be in terms of p, the population proportion - not in words alone.',
      'The conclusion must be in CONTEXT and non-committal: "insufficient evidence that the rate is below 80%", never "the rate is 80%".',
      'Part (d) is testing that you know the actual significance level is the probability of the critical region, not the nominal 5%.',
    ],
    pitfalls: [
      'Writing "accept H₀". Edexcel never awards this. You either reject H₀ or you do not reject it.',
      'Concluding "the company is telling the truth". Failing to reject H₀ is not evidence that H₀ is true.',
      'Forgetting that Edexcel binomial tables only go up to p = 0.5, so a test with p = 0.8 must be converted using Y = n − X.',
      'Giving the actual significance level as 5%. That is the NOMINAL level; the actual one is the probability of the discrete critical region.',
    ],
  },

  {
    topic: 'The Normal Distribution',
    paper: 'Paper 3 (Statistics)',
    marks: 14,
    question:
      'The heights, in cm, of adult males in a population are modelled by X ~ N(170, 8²).\n\n(a) Find P(X > 180). (3)\n(b) Find P(165 < X < 175). (3)\n(c) Find the value of h such that P(X > h) = 0.05. (3)\n(d) A random sample of 50 adult males from a different region has mean height 173.2 cm. Assuming the standard deviation is still 8 cm, test at the 5% significance level whether the mean height in that region is greater than 170 cm. (5)',
    workedSolution: [
      { part: '(a)', line: 'z = (180 − 170)/8 = 1.25', mark: 'M1' },
      { part: '', line: 'P(Z > 1.25) = 1 − Φ(1.25) = 1 − 0.8944', mark: 'M1' },
      { part: '', line: '= 0.1056', mark: 'A1' },
      { part: '(b)', line: 'z₁ = (165 − 170)/8 = −0.625 and z₂ = (175 − 170)/8 = 0.625', mark: 'M1' },
      { part: '', line: 'P = Φ(0.625) − Φ(−0.625) = 2Φ(0.625) − 1', mark: 'M1' },
      { part: '', line: '= 2(0.7340) − 1 = 0.468', mark: 'A1' },
      { part: '(c)', line: 'P(Z > z) = 0.05 gives z = 1.6449', mark: 'M1' },
      { part: '', line: 'h = 170 + 1.6449 × 8', mark: 'M1' },
      { part: '', line: 'h = 183 cm (3 s.f.)', mark: 'A1' },
      { part: '(d)', line: 'H₀: μ = 170   H₁: μ > 170', mark: 'B1' },
      { part: '', line: 'Under H₀, X̄ ~ N(170, 8²/50), so the standard error is 8/√50 = 1.1314', mark: 'M1' },
      { part: '', line: 'z = (173.2 − 170)/1.1314 = 2.83', mark: 'M1' },
      { part: '', line: 'Critical value for a one-tailed 5% test is 1.6449', mark: 'A1' },
      {
        part: '',
        line: '2.83 > 1.6449, so reject H₀: significant evidence that mean height in that region is greater than 170 cm',
        mark: 'A1',
      },
    ],
    totalCheck: 'Total: 14 marks (a 3, b 3, c 3, d 5)',
    markScheme: [
      'The variance is 8², so the standard deviation is 8. Using 8 as the variance is the single most common error here.',
      'Part (d) must use the distribution of the SAMPLE MEAN, whose standard deviation is σ/√n, not σ.',
      'The conclusion in (d) must be in context and must reference the region.',
    ],
    pitfalls: [
      'Using σ = √8 = 2.83. The model is written N(170, 8²), so σ = 8.',
      'In (d), using z = (173.2 − 170)/8 = 0.4 and failing to reject. Forgetting the √50 is the classic Paper 3 error.',
      'Looking up 0.05 in the body of the normal table instead of using the percentage-points table, giving 1.64 instead of 1.6449.',
      'Concluding "the mean height IS 173.2". The test only supports that it is greater than 170.',
    ],
  },

  {
    topic: 'Regression, Correlation and Hypothesis Testing',
    paper: 'Paper 3 (Statistics)',
    marks: 12,
    question:
      'For 15 students, x is the number of hours spent revising and y is the score in a test out of 100. The regression line of y on x is y = 12.4 + 0.68x, and the product moment correlation coefficient is r = 0.72.\n\n(a) Interpret the value 0.68 in this context. (2)\n(b) Interpret the value 12.4, and comment on whether this interpretation is reliable. (3)\n(c) Test, at the 1% significance level, whether there is positive correlation between hours of revision and test score. (5)\n(d) A student concludes that revising more CAUSES higher scores. Comment on this. (2)',
    workedSolution: [
      { part: '(a)', line: 'For each additional hour of revision', mark: 'M1' },
      { part: '', line: 'the test score increases by 0.68 marks on average', mark: 'A1' },
      { part: '(b)', line: 'It predicts a score of 12.4 for a student who does no revision', mark: 'M1' },
      { part: '', line: 'This is an extrapolation if no student in the sample revised for zero hours', mark: 'M1' },
      { part: '', line: 'so the interpretation is unreliable - the relationship may not be linear that far out', mark: 'A1' },
      { part: '(c)', line: 'H₀: ρ = 0   H₁: ρ > 0  (one-tailed)', mark: 'B1' },
      { part: '', line: 'Note the hypotheses use ρ, the POPULATION correlation coefficient', mark: 'B1' },
      { part: '', line: 'Critical value for n = 15 at the 1% one-tailed level is 0.5742', mark: 'M1' },
      { part: '', line: '0.72 > 0.5742, so the result is significant', mark: 'A1' },
      {
        part: '',
        line: 'Reject H₀: there is evidence at the 1% level of positive correlation between revision hours and score',
        mark: 'A1',
      },
      { part: '(d)', line: 'Correlation does not establish causation', mark: 'M1' },
      {
        part: '',
        line: 'A third factor - general motivation or prior ability - could raise both revision hours and scores',
        mark: 'A1',
      },
    ],
    totalCheck: 'Total: 12 marks (a 2, b 3, c 5, d 2)',
    markScheme: [
      'Interpretations in (a) and (b) must be IN CONTEXT - "y increases by 0.68" without naming the score earns nothing.',
      'Part (c) awards a mark specifically for using ρ rather than r in the hypotheses.',
      'Part (d) needs a plausible confounding factor named, not just the phrase "correlation is not causation".',
    ],
    pitfalls: [
      'Writing H₀: r = 0. The sample statistic r is what you calculated; the hypothesis is about the population ρ.',
      'Saying the gradient means "0.68 more hours per mark". It is the other way round.',
      'Using the two-tailed critical value. The alternative hypothesis here is one-sided.',
      'In (b), giving the interpretation without the reliability comment. Two of the three marks are in the criticism.',
    ],
  },

  {
    topic: 'Conditional Probability',
    paper: 'Paper 3 (Statistics)',
    marks: 12,
    question:
      'A bag contains 5 red, 3 blue and 2 green counters. Two counters are drawn at random WITHOUT replacement.\n\n(a) Find the probability that both counters are red. (2)\n(b) Find the probability that both counters are the same colour. (4)\n(c) Find the probability that the second counter drawn is red. (3)\n(d) Given that the second counter is red, find the probability that the first was also red. (3)',
    workedSolution: [
      { part: '(a)', line: 'P(RR) = 5/10 × 4/9', mark: 'M1' },
      { part: '', line: '= 20/90 = 2/9', mark: 'A1' },
      { part: '(b)', line: 'P(BB) = 3/10 × 2/9 = 6/90', mark: 'M1' },
      { part: '', line: 'P(GG) = 2/10 × 1/9 = 2/90', mark: 'A1' },
      { part: '', line: 'Same colour = 20/90 + 6/90 + 2/90', mark: 'M1' },
      { part: '', line: '= 28/90 = 14/45', mark: 'A1' },
      { part: '(c)', line: 'P(2nd red) = P(R then R) + P(not R then R)', mark: 'M1' },
      { part: '', line: '= 5/10 × 4/9 + 5/10 × 5/9 = 20/90 + 25/90', mark: 'M1' },
      { part: '', line: '= 45/90 = 1/2  (the same as the first draw, by symmetry)', mark: 'A1' },
      { part: '(d)', line: 'P(1st red | 2nd red) = P(both red) / P(2nd red)', mark: 'M1' },
      { part: '', line: '= (2/9) ÷ (1/2)', mark: 'M1' },
      { part: '', line: '= 4/9', mark: 'A1' },
    ],
    totalCheck: 'Total: 12 marks (a 2, b 4, c 3, d 3)',
    markScheme: [
      'Without replacement means the second denominator is 9, not 10. Every part depends on this.',
      'Part (c) requires both branches that end in red; taking only the RR branch scores one mark.',
      'Part (d) must state the conditional probability formula before substituting.',
    ],
    pitfalls: [
      'Using 10 as the denominator on the second draw. That is the WITH replacement case.',
      'In (b), forgetting one of the three colour pairs - the green pair is easy to miss because there are only two greens.',
      'In (d), computing P(2nd red | 1st red) instead. The conditioning is the other way round, which is what makes the question non-trivial.',
      'Reducing 28/90 incorrectly. It cancels by 2 to 14/45, not by 4.',
    ],
  },

  {
    topic: 'Constant Acceleration (SUVAT)',
    paper: 'Paper 3 (Mechanics)',
    marks: 12,
    question:
      'A car starts from rest and accelerates uniformly to 20 m s⁻¹ in 8 seconds. It then travels at a constant 20 m s⁻¹ for 30 seconds, before decelerating uniformly to rest in a further 12 seconds.\n\n(a) Sketch a velocity–time graph for the motion. (2)\n(b) Find the total distance travelled. (4)\n(c) Find the average speed for the whole journey. (2)\n(d) Find the magnitude of the deceleration in the final phase. (2)\n(e) Find the distance travelled by the car at the instant its speed first reaches 15 m s⁻¹. (2)',
    workedSolution: [
      { part: '(a)', line: 'Straight line from (0, 0) to (8, 20)', mark: 'B1' },
      { part: '', line: 'Horizontal to (38, 20), then straight down to (50, 0)', mark: 'B1' },
      { part: '(b)', line: 'Distance is the area under the graph', mark: 'M1' },
      { part: '', line: 'Acceleration phase: ½ × 8 × 20 = 80 m', mark: 'A1' },
      { part: '', line: 'Constant phase: 30 × 20 = 600 m;  deceleration: ½ × 12 × 20 = 120 m', mark: 'A1' },
      { part: '', line: 'Total = 800 m', mark: 'A1' },
      { part: '(c)', line: 'Average speed = total distance / total time = 800/50', mark: 'M1' },
      { part: '', line: '= 16 m s⁻¹', mark: 'A1' },
      { part: '(d)', line: 'a = (v − u)/t = (0 − 20)/12', mark: 'M1' },
      { part: '', line: 'Magnitude of deceleration = 1.67 m s⁻² (3 s.f.)', mark: 'A1' },
      { part: '(e)', line: 'Acceleration = 20/8 = 2.5 m s⁻². Use v² = u² + 2as with u = 0, v = 15', mark: 'M1' },
      { part: '', line: '225 = 0 + 5s, so s = 45 m', mark: 'A1' },
    ],
    totalCheck: 'Total: 12 marks (a 2, b 4, c 2, d 2, e 2)',
    markScheme: [
      'Part (b) is fastest as a trapezium: ½(30 + 50) × 20 = 800. Either method gets full marks.',
      'Part (c) uses average SPEED, which is total distance over total time - not the average of the speeds.',
      'Part (d) asks for a magnitude, so a positive answer with the word "deceleration" is required.',
    ],
    pitfalls: [
      'Taking the average speed as (0 + 20 + 0)/3 or as 10 m s⁻¹. It is distance ÷ time.',
      'Reading the constant phase as ending at t = 30 rather than t = 38. The 30 seconds is a DURATION, not a time.',
      'Giving the deceleration as −1.67 when the question asks for its magnitude.',
      'In (e), using SUVAT across the whole journey. The acceleration is only constant within each phase.',
    ],
  },

  {
    topic: 'Forces and Friction',
    paper: 'Paper 3 (Mechanics)',
    marks: 14,
    question:
      'A block of mass 4 kg rests on a rough horizontal table. A light inextensible string attached to the block passes over a smooth pulley fixed at the edge of the table, and carries a mass of 6 kg hanging freely. The coefficient of friction between the block and the table is 0.25. Take g = 9.8 m s⁻².\n\nThe system is released from rest.\n\n(a) Find the acceleration of the system. (5)\n(b) Find the tension in the string. (3)\n(c) The 6 kg mass starts 2 m above the ground. Find its speed just before it lands. (3)\n(d) After the 6 kg mass lands, the string becomes slack. Find how much further the block travels before coming to rest. (3)',
    workedSolution: [
      { part: '(a)', line: 'For the block, vertically: R = 4g = 39.2 N', mark: 'M1' },
      { part: '', line: 'Friction F = μR = 0.25 × 39.2 = 9.8 N', mark: 'A1' },
      { part: '', line: 'For the block, horizontally: T − 9.8 = 4a', mark: 'M1' },
      { part: '', line: 'For the hanging mass: 6g − T = 6a, so 58.8 − T = 6a', mark: 'M1' },
      { part: '', line: 'Adding to eliminate T: 49 = 10a, so a = 4.9 m s⁻²', mark: 'A1' },
      { part: '(b)', line: 'Substitute into T − 9.8 = 4a', mark: 'M1' },
      { part: '', line: 'T = 4(4.9) + 9.8', mark: 'M1' },
      { part: '', line: 'T = 29.4 N', mark: 'A1' },
      { part: '(c)', line: 'u = 0, a = 4.9, s = 2. Use v² = u² + 2as', mark: 'M1' },
      { part: '', line: 'v² = 0 + 2(4.9)(2) = 19.6', mark: 'M1' },
      { part: '', line: 'v = 4.43 m s⁻¹ (3 s.f.)', mark: 'A1' },
      { part: '(d)', line: 'With the string slack, friction alone decelerates the block: a = −9.8/4 = −2.45 m s⁻²', mark: 'M1' },
      { part: '', line: 'v² = u² + 2as with u² = 19.6, v = 0: 0 = 19.6 − 4.9s', mark: 'M1' },
      { part: '', line: 's = 4 m', mark: 'A1' },
    ],
    totalCheck: 'Total: 14 marks (a 5, b 3, c 3, d 3)',
    markScheme: [
      'Two equations of motion are needed, one for each body, before any acceleration mark is available.',
      'The string is INEXTENSIBLE, so both bodies have the same magnitude of acceleration - stating this earns credit.',
      'Part (d) must recognise that the driving force has gone and only friction remains.',
    ],
    pitfalls: [
      'Using the 6 kg mass to find the normal reaction on the block. R comes from the block’s own weight, 4g.',
      'Writing a single equation 6g − F = 10a and calling it done. It gives the right acceleration here, but the mark scheme requires the two separate equations, and the method fails as soon as the tension is asked for.',
      'Forgetting friction still acts in (d) and concluding the block travels forever.',
      'Using v = 4.43 (rounded) in (d) instead of v² = 19.6 exactly. Squaring a rounded value loses accuracy.',
    ],
  },

  {
    topic: 'Projectiles',
    paper: 'Paper 3 (Mechanics)',
    marks: 13,
    question:
      'A ball is projected from a point on horizontal ground with speed 21 m s⁻¹ at an angle of 30° above the horizontal. Take g = 9.8 m s⁻² and model the ball as a particle.\n\n(a) Find the time of flight. (3)\n(b) Find the horizontal range. (2)\n(c) Find the greatest height reached. (3)\n(d) Find the speed and direction of motion of the ball 1.5 seconds after projection. (5)',
    workedSolution: [
      { part: '(a)', line: 'Initial vertical component: uᵧ = 21 sin 30° = 10.5 m s⁻¹', mark: 'B1' },
      { part: '', line: 'Returns to the ground when the vertical displacement is zero: 0 = 10.5t − 4.9t²', mark: 'M1' },
      { part: '', line: 't(10.5 − 4.9t) = 0, so t = 2.14 s (3 s.f.)', mark: 'A1' },
      { part: '(b)', line: 'Horizontal component uₓ = 21 cos 30° = 18.187 m s⁻¹, constant', mark: 'M1' },
      { part: '', line: 'Range = 18.187 × 2.1429 = 39.0 m (3 s.f.)', mark: 'A1' },
      { part: '(c)', line: 'At the greatest height the vertical velocity is zero', mark: 'M1' },
      { part: '', line: 'v² = u² − 2gs: 0 = 110.25 − 19.6s', mark: 'M1' },
      { part: '', line: 's = 5.63 m (3 s.f.)', mark: 'A1' },
      { part: '(d)', line: 'Horizontal velocity is unchanged: vₓ = 18.187 m s⁻¹', mark: 'B1' },
      { part: '', line: 'Vertical: vᵧ = 10.5 − 9.8(1.5) = −4.2 m s⁻¹ (downwards)', mark: 'M1' },
      { part: '', line: 'Speed = √(18.187² + 4.2²) = √348.4', mark: 'M1' },
      { part: '', line: '= 18.7 m s⁻¹ (3 s.f.)', mark: 'A1' },
      { part: '', line: 'tan θ = 4.2/18.187, so the direction is 13.0° BELOW the horizontal', mark: 'A1' },
    ],
    totalCheck: 'Total: 13 marks (a 3, b 2, c 3, d 5)',
    markScheme: [
      'The two directions share only the TIME. Horizontal motion is at constant velocity; vertical motion has acceleration −g.',
      'Part (d) requires both the speed and the direction, and the direction must say below (or above) the horizontal.',
      'A negative vertical velocity in (d) is the evidence that the ball is descending - say so.',
    ],
    pitfalls: [
      'Applying g to the horizontal motion. There is no horizontal acceleration in this model.',
      'Using the full 21 m s⁻¹ as the initial vertical velocity instead of resolving it.',
      'In (c), doubling the answer or using the full time of flight. The greatest height is reached at HALF the flight time.',
      'Giving the direction in (d) as 13.0° without saying below the horizontal - the sign of vᵧ is the whole point.',
    ],
  },

  {
    topic: 'Moments',
    paper: 'Paper 3 (Mechanics)',
    marks: 12,
    question:
      'A uniform beam AB has length 6 m and mass 30 kg. It rests horizontally on two supports at C and D, where AC = 1 m and DB = 1 m. Take g = 9.8 m s⁻².\n\n(a) Find the magnitude of the reaction at each support. (4)\n(b) A particle of mass 50 kg is now placed at B. Find the new reactions at C and D. (5)\n(c) Find the greatest mass that could be placed at B without the beam tilting. (3)',
    workedSolution: [
      { part: '(a)', line: 'The beam is uniform, so its weight 30g acts at the midpoint, 3 m from A', mark: 'B1' },
      { part: '', line: 'The supports are symmetrically placed about the midpoint', mark: 'M1' },
      { part: '', line: 'So the reactions are equal: 2R = 30g', mark: 'M1' },
      { part: '', line: 'R = 15g = 147 N at each support', mark: 'A1' },
      { part: '(b)', line: 'C is 1 m from A and D is 5 m from A. Weight 30g at 3 m, 50g at 6 m', mark: 'B1' },
      { part: '', line: 'Moments about C: R_D × 4 = 30g × 2 + 50g × 5', mark: 'M1' },
      { part: '', line: '4R_D = 60g + 250g = 310g', mark: 'M1' },
      { part: '', line: 'R_D = 77.5g = 759.5 N', mark: 'A1' },
      { part: '', line: 'Vertically: R_C + R_D = 80g = 784, so R_C = 24.5 N', mark: 'A1' },
      { part: '(c)', line: 'The beam tilts about D when the reaction at C falls to zero', mark: 'M1' },
      { part: '', line: 'Moments about D: 30g × 2 = m g × 1', mark: 'M1' },
      { part: '', line: 'm = 60 kg', mark: 'A1' },
    ],
    totalCheck: 'Total: 12 marks (a 4, b 5, c 3)',
    markScheme: [
      'Taking moments about a support eliminates that reaction from the equation - choose the support you are not solving for.',
      'Part (c) hinges on recognising that tilting begins the instant one reaction becomes zero.',
      'Distances must be measured consistently from one end; mixing distances from A and from C is where marks are lost.',
    ],
    pitfalls: [
      'Placing the supports 1 m from each other rather than 1 m from each END. AC = 1 and DB = 1 puts C at 1 m and D at 5 m from A.',
      'Forgetting the beam’s own weight in (b) and (c). "Uniform" tells you where it acts, not that it can be ignored.',
      'In (c), taking moments about C. The beam tilts about D, because the load is beyond D.',
      'Leaving g in the answer to (c). It cancels, so the mass is 60 kg exactly.',
    ],
  },

  {
    topic: 'Further Kinematics',
    paper: 'Paper 3 (Mechanics)',
    marks: 13,
    question:
      'A particle P moves in a plane. At time t seconds its velocity is\n\n  v = (3t² − 4)i + (2t)j  m s⁻¹\n\n(a) Find the magnitude of the acceleration of P when t = 2. (3)\n(b) Given that the position vector of P is (2i − j) m when t = 0, find the position vector of P when t = 3. (5)\n(c) Find the value of t at which P is moving parallel to j. (3)\n(d) Find the speed of P when t = 1. (2)',
    workedSolution: [
      { part: '(a)', line: 'a = dv/dt = 6t i + 2 j', mark: 'M1' },
      { part: '', line: 'At t = 2: a = 12i + 2j', mark: 'A1' },
      { part: '', line: '|a| = √(144 + 4) = √148 = 12.2 m s⁻² (3 s.f.)', mark: 'A1' },
      { part: '(b)', line: 'r = ∫ v dt = (t³ − 4t)i + t² j + c', mark: 'M1 A1' },
      { part: '', line: 'At t = 0 every t-term vanishes, so c = 2i − j', mark: 'M1' },
      { part: '', line: 'At t = 3: (27 − 12)i + 9j = 15i + 9j', mark: 'M1' },
      { part: '', line: 'r = (15 + 2)i + (9 − 1)j = 17i + 8j m', mark: 'A1' },
      { part: '(c)', line: 'Parallel to j means the i-component of the velocity is zero', mark: 'M1' },
      { part: '', line: '3t² − 4 = 0, so t² = 4/3', mark: 'M1' },
      { part: '', line: 't = 1.15 s (taking the positive root, 3 s.f.)', mark: 'A1' },
      { part: '(d)', line: 'At t = 1: v = (3 − 4)i + 2j = −i + 2j', mark: 'M1' },
      { part: '', line: 'Speed = √(1 + 4) = √5 = 2.24 m s⁻¹ (3 s.f.)', mark: 'A1' },
    ],
    totalCheck: 'Total: 13 marks (a 3, b 5, c 3, d 2)',
    markScheme: [
      'Acceleration is not constant here, so SUVAT does not apply - differentiate and integrate instead.',
      'Part (b) awards a mark for the constant of integration being a VECTOR, found from the initial position.',
      'Part (c) needs the negative root rejected, since t is a time.',
    ],
    pitfalls: [
      'Reaching for SUVAT because the question mentions velocity and time. The velocity is a function of t², so the acceleration varies.',
      'Omitting the vector constant of integration in (b), which loses the initial position entirely.',
      'In (c), setting the j-component to zero. "Parallel to j" means there is no i-component.',
      'Confusing velocity with speed in (d). Speed is the magnitude, so the answer is a single positive number.',
    ],
  },
]
