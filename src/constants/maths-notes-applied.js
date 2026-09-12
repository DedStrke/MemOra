/*
  Edexcel A-level Maths (9MA0): Statistics and Mechanics.

  Statistics is where the most marks are lost to WORDING rather than to
  method - "there is insufficient evidence to reject H₀" scores, "accept H₀"
  does not. Mechanics is where they are lost to not drawing the force diagram
  and to sign conventions. Both are addressed explicitly.
*/

import { h, p, ul, rule, method, worked, pitfalls, diagram, tip, table, chapter } from './maths-notes-build'

/* ============================================== SAMPLING */

const sampling = chapter(
  rule('Population and sample', 'A CENSUS observes every member of the population. A SAMPLE observes a subset, from a SAMPLING FRAME (the list of the population).'),
  diagram('sampling-methods'),
  table(
    ['Method', 'How', 'Advantage', 'Disadvantage'],
    [
      ['Simple random', 'Every member has an equal chance; use random numbers', 'Free from bias; easy for small populations', 'Needs a full sampling frame; can be costly'],
      ['Systematic', 'Take every nth member from an ordered list', 'Simple and quick; spreads the sample out', 'Biased if the list has a repeating pattern'],
      ['Stratified', 'Split into groups and sample each in PROPORTION to its size', 'Reflects the population structure', 'Needs group sizes known; more work'],
      ['Quota', 'Interviewer fills set numbers from each group', 'No sampling frame needed; cheap', 'Non-random, so interviewer bias is possible'],
      ['Opportunity', 'Use whoever is available', 'Cheapest and fastest', 'Very likely unrepresentative'],
      ['Cluster', 'Split into clusters, sample whole clusters', 'Practical when the population is spread out', 'Clusters may not represent the whole'],
    ],
  ),
  worked('A school has 600 girls and 400 boys. A stratified sample of 50 is taken. How many boys?', [
    'Total = 1000, so the sampling fraction is 50/1000 = 0.05',
    'Boys: 400 × 0.05',
    'Answer: 20 boys (and 30 girls)',
  ]),
  pitfalls([
    'Stratified sampling is PROPORTIONAL - divide the stratum size by the population and multiply by the sample size.',
    'A census is accurate but slow and expensive; a sample is quicker but carries sampling error. Questions ask you to weigh these, not just define them.',
    'Random does not mean haphazard. "Opportunity" and "quota" are NOT random methods.',
    'Know the large data set context if your paper references it - the questions assume familiarity with the variables and their units.',
  ]),
)

/* ================================================= DATA PRESENTATION */

const dataPresentation = chapter(
  h('Measures of location and spread'),
  rule('Mean', 'x̄ = Σx / n, or Σfx / Σf for grouped data'),
  rule('Variance and standard deviation', 'σ² = Σx²/n − x̄².  σ = √(variance).', 'The Σx²/n − x̄² form is the one to use with summary statistics.'),
  rule('Interquartile range', 'IQR = Q₃ − Q₁'),
  worked('For a data set, Σx = 120, Σx² = 1650, n = 10. Find the mean and standard deviation.', [
    'Mean = 120/10 = 12',
    'Variance = 1650/10 − 12² = 165 − 144 = 21',
    'σ = √21',
    'Answer: mean 12, σ = 4.58 (3 s.f.)',
  ]),
  h('Histograms'),
  rule('Frequency density', 'Frequency density = frequency ÷ class width. AREA represents frequency, not height.'),
  diagram('histogram'),
  h('Box plots and outliers'),
  rule('Outlier rule', 'An outlier is usually more than 1.5 × IQR beyond Q₁ or Q₃, but the question may define it differently - always use the definition given.'),
  diagram('box-plot'),
  h('Coding'),
  rule('Coding', 'If y = (x − a)/b then ȳ = (x̄ − a)/b and σ_y = σ_x / b.', 'Adding or subtracting does NOT change the standard deviation; only multiplying or dividing does.'),
  h('Skew'),
  ul([
    'POSITIVE skew: mean > median > mode, and the tail is to the right.',
    'NEGATIVE skew: mean < median < mode, tail to the left.',
    'SYMMETRIC: mean ≈ median ≈ mode.',
    'Or use Q₃ − Q₂ against Q₂ − Q₁: if the upper gap is larger, the skew is positive.',
  ]),
  pitfalls([
    'In a histogram the height is frequency DENSITY, so to find a frequency you multiply by the class width - the area.',
    'Coding: adding a constant shifts the mean but leaves σ unchanged. This is regularly tested.',
    'Use the outlier definition the QUESTION gives, not the 1.5 × IQR rule by default.',
    'Only remove an outlier if there is a reason to think it is an error. Say so rather than deleting silently.',
  ]),
)

/* ===================================================== PROBABILITY */

const probability = chapter(
  rule('Basic laws', 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B).  P(A′) = 1 − P(A).'),
  rule('Mutually exclusive', 'P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B)'),
  rule('Independent', 'P(A ∩ B) = P(A) × P(B)'),
  diagram('venn-diagram'),
  diagram('tree-diagram'),
  h('Conditional probability'),
  rule('Conditional', 'P(A | B) = P(A ∩ B) / P(B) - "given that B has happened".'),
  worked('P(A) = 0.4, P(B) = 0.5, P(A ∩ B) = 0.2. Find P(A | B) and state whether A and B are independent.', [
    'P(A | B) = 0.2 / 0.5 = 0.4',
    'For independence, check P(A ∩ B) = P(A) × P(B)',
    '0.4 × 0.5 = 0.2, which equals P(A ∩ B)',
    'So A and B ARE independent - and note P(A | B) = P(A), the same conclusion',
  ]),
  tip('Independent and mutually exclusive are opposites in practice: if two events are mutually exclusive and both have non-zero probability, they CANNOT be independent, because knowing one happened tells you the other did not.'),
  pitfalls([
    'Tree diagrams: "without replacement" changes the denominators on the second set of branches. Missing this is the standard error.',
    'P(A | B) divides by P(B), the event you are given. Dividing by the wrong one is easy to do under pressure.',
    'Fill a Venn diagram from the INTERSECTION outwards, or the regions will overlap and double-count.',
    'Probabilities on any set of branches from one point must sum to 1 - a quick check that catches arithmetic errors.',
  ]),
)

/* ============================================== BINOMIAL DISTRIBUTION */

const binomialDist = chapter(
  rule('Binomial', 'X ~ B(n, p).  P(X = r) = ⁿCᵣ pʳ (1 − p)ⁿ⁻ʳ'),
  rule('Conditions', 'Fixed number of trials n · two outcomes · INDEPENDENT trials · constant probability p'),
  rule('Mean and variance', 'E(X) = np,  Var(X) = np(1 − p)'),
  diagram('binomial-bars'),
  worked('X ~ B(10, 0.3). Find P(X = 4).', [
    'P(X = 4) = ¹⁰C₄ (0.3)⁴ (0.7)⁶',
    '¹⁰C₄ = 210',
    '(0.3)⁴ = 0.0081, (0.7)⁶ = 0.117649',
    '210 × 0.0081 × 0.117649 = 0.200 (3 s.f.)',
  ]),
  tip('Because X takes whole values only, P(X < 5) = P(X ≤ 4) exactly. Converting between <, ≤, > and ≥ is where most binomial marks are lost - write the conversion down before reaching for the calculator.'),
  pitfalls([
    'P(X > 5) = 1 − P(X ≤ 5), NOT 1 − P(X ≤ 4). Draw the number line if unsure.',
    'Check all four conditions before using the model, and if a question asks whether binomial is appropriate, test each one against the context.',
    'Var(X) = np(1 − p), not np. And σ is the square root of that.',
    'Cumulative tables and calculator functions give P(X ≤ x). Everything else is derived from that.',
  ]),
)

/* =============================================== HYPOTHESIS TESTING */

const hypothesisTesting = chapter(
  method('The full method - every step is marked', [
    'State H₀ and H₁ in terms of the PARAMETER (p or μ), not the sample.',
    'State the significance level.',
    'Assume H₀ is true and identify the distribution.',
    'Calculate the probability of the observed result OR MORE EXTREME.',
    'Compare with the significance level (halve it for a two-tailed test).',
    'State whether to reject H₀, then write a CONCLUSION IN CONTEXT.',
  ]),
  diagram('hypothesis-regions'),
  tip('Never write "accept H₀". The correct wording is "there is insufficient evidence to reject H₀". A test can fail to find evidence; it cannot prove H₀ true. This exact phrasing is worth a mark on every hypothesis test question.'),
  worked('A coin is tossed 20 times and lands heads 15 times. Test at 5% whether it is biased towards heads.', [
    'H₀: p = 0.5, H₁: p > 0.5 (one-tailed, because "towards heads")',
    'Assume H₀: X ~ B(20, 0.5)',
    'P(X ≥ 15) = 1 − P(X ≤ 14) = 1 − 0.9793 = 0.0207',
    '0.0207 < 0.05, so the result is significant',
    'Reject H₀: there is evidence at the 5% level that the coin is biased towards heads',
  ]),
  h('One-tailed or two-tailed'),
  table(
    ['Wording', 'Test', 'Significance in each tail'],
    [
      ['"has it increased / decreased?"', 'One-tailed', 'Full 5%'],
      ['"has it changed?"', 'Two-tailed', '2.5% each side'],
    ],
  ),
  pitfalls([
    '"Accept H₀" is not a valid conclusion. Use "insufficient evidence to reject".',
    'For a two-tailed test at 5%, compare with 0.025, not 0.05.',
    'Calculate the probability of the observed value OR MORE EXTREME, not just the observed value.',
    'The conclusion must be IN CONTEXT - mention the coin, the plant, the machine. A bare "reject H₀" loses the final mark.',
    'Deciding one- or two-tailed from the wording comes FIRST; getting it wrong invalidates everything after.',
  ]),
)

/* ================================ REGRESSION AND CORRELATION */

const regression = chapter(
  rule('Regression line', 'y = a + bx, where b is the gradient - the change in y for a unit change in x.'),
  diagram('scatter-regression'),
  p('The line is calculated to minimise the vertical distances from the points, so it should be used to predict y FROM x, not the reverse.'),
  h('Correlation'),
  rule('PMCC', 'r measures LINEAR correlation, from −1 to +1. r = 0 means no linear relationship - but there may still be a strong non-linear one.'),
  tip('Correlation is not causation. A strong r may reflect a third variable affecting both, or coincidence. Saying so is frequently a mark.'),
  h('Hypothesis test for correlation'),
  method('Testing whether correlation exists', [
    'H₀: ρ = 0, H₁: ρ ≠ 0 (or > 0 / < 0 for one-tailed).',
    'Look up the critical value for the sample size and significance level.',
    'Compare |r| with the critical value.',
    'If |r| exceeds it, reject H₀ and conclude in context.',
  ]),
  pitfalls([
    'INTERPOLATION (predicting inside the data range) is reliable; EXTRAPOLATION (outside it) is not, because the relationship may not continue. Say which you are doing.',
    'Interpret the gradient in context and with units - "for each extra hour of study, the score rises by 3 marks".',
    'r near 0 rules out a LINEAR relationship only.',
    'The regression line of y on x should not be used to predict x from y.',
  ]),
)

/* =============================================== NORMAL DISTRIBUTION */

const normal = chapter(
  rule('Normal', 'X ~ N(μ, σ²). The second parameter is the VARIANCE, so the standard deviation is its square root.'),
  diagram('normal-distribution'),
  ul([
    'Symmetric about μ, so P(X < μ) = 0.5.',
    'Roughly 68% within one σ, 95% within two, 99.7% within three.',
    'Continuous, so P(X = a) = 0 and P(X < a) = P(X ≤ a) - no continuity correction is needed unless approximating a binomial.',
  ]),
  rule('Standardising', 'Z = (X − μ)/σ, giving Z ~ N(0, 1)'),
  worked('X ~ N(50, 16). Find P(X < 56).', [
    'σ = √16 = 4',
    'Z = (56 − 50)/4 = 1.5',
    'P(Z < 1.5) = 0.9332',
    'Answer: 0.933 (3 s.f.)',
  ]),
  h('Finding μ or σ from a probability'),
  method('Working backwards', [
    'Write the probability statement given.',
    'Find the z-value from the inverse normal.',
    'Substitute into z = (x − μ)/σ.',
    'Solve - with two unknowns you will need two such equations and simultaneous solving.',
  ]),
  h('Normal approximation to the binomial'),
  rule('When to use it', 'If n is large and p close to 0.5, X ~ B(n, p) ≈ N(np, np(1−p)).', 'Apply a CONTINUITY CORRECTION of ±0.5 because you are approximating a discrete variable with a continuous one.'),
  pitfalls([
    'N(50, 16) means variance 16 and σ = 4. Using 16 as σ is the single most common error in the topic.',
    'Sketch the curve and shade the region before calculating - it prevents finding the complement by mistake.',
    'The continuity correction applies ONLY when approximating a binomial. P(X ≥ 20) becomes P(Y > 19.5).',
    'For "find μ and σ" questions you need two equations; one probability is not enough.',
  ]),
)

/* ============================================= MECHANICS: MODELLING */

const modelling = chapter(
  h('Modelling assumptions'),
  table(
    ['Assumption', 'What it lets you ignore'],
    [
      ['Particle', 'The object has no size, so rotation and air resistance on its shape are ignored'],
      ['Light', 'The object has no mass, so its weight is ignored - used for strings and rods'],
      ['Inextensible', 'A string does not stretch, so connected objects have the SAME acceleration'],
      ['Smooth', 'No friction'],
      ['Rough', 'Friction acts'],
      ['Rigid', 'A rod does not bend'],
      ['Smooth pulley', 'Tension is the SAME throughout the string'],
    ],
  ),
  rule('SI units', 'Length m · mass kg · time s · force N · velocity m s⁻¹ · acceleration m s⁻²'),
  rule('Weight', 'W = mg, with g = 9.8 m s⁻² unless told otherwise'),
  tip('When asked to criticise a model, name the assumption and say what it ignores AND what difference that makes - "modelling the ball as a particle ignores air resistance, so the real range would be shorter".'),
  diagram('forces-on-slope'),
  pitfalls([
    'Weight is mg in newtons, not the mass in kg. A 5 kg mass has weight 49 N.',
    '"Smooth" means no friction; "light" means no weight. They are different assumptions and are often confused.',
    'g = 9.8 unless stated. Using 9.81 or 10 when 9.8 is specified loses accuracy marks.',
  ]),
)

/* =============================================== CONSTANT ACCELERATION */

const suvat = chapter(
  rule('The suvat equations', 'v = u + at · s = ut + ½at² · s = vt − ½at² · v² = u² + 2as · s = ½(u + v)t', 'Valid ONLY for constant acceleration.'),
  method('Choosing the right equation', [
    'Write down s, u, v, a, t and mark which you have and which you want.',
    'You will always know three and want a fourth.',
    'Choose the equation containing those four and missing the one you neither know nor want.',
    'Define a positive direction and stick to it throughout.',
  ]),
  diagram('velocity-time'),
  worked('A car accelerates from 5 m s⁻¹ to 20 m s⁻¹ over 60 m. Find the acceleration.', [
    'u = 5, v = 20, s = 60, a = ?  (t is neither known nor wanted)',
    'Use v² = u² + 2as',
    '400 = 25 + 120a',
    'a = 375/120 = 3.125 m s⁻²',
  ]),
  h('Velocity–time graphs'),
  ul([
    'GRADIENT is acceleration.',
    'AREA under the graph is displacement.',
    'Area below the time axis counts as negative displacement.',
    'A horizontal line means constant velocity, zero acceleration.',
  ]),
  pitfalls([
    'Define positive DOWN or UP and keep it. For a ball thrown up with down positive, u is negative and a = +9.8.',
    'Distance and displacement differ once the direction reverses. "How far has it travelled" is usually distance.',
    'suvat needs CONSTANT acceleration. If a varies with time you must use calculus instead.',
    'For a projectile, treat horizontal and vertical separately - the only shared quantity is time.',
  ]),
)

/* ================================================= FORCES AND NEWTON */

const forces = chapter(
  rule('Newton’s laws', '1: a body stays at rest or constant velocity unless a resultant force acts. 2: F = ma. 3: every action has an equal and opposite reaction.'),
  method('Any forces question', [
    'DRAW the force diagram - weight, normal reaction, tension, friction, applied force.',
    'Choose a positive direction, usually the direction of acceleration.',
    'Resolve forces into components along and perpendicular to the motion.',
    'Apply F = ma along the direction of motion.',
    'Perpendicular to the motion there is no acceleration, so those components balance.',
  ]),
  diagram('forces-on-slope'),
  rule('On a slope of angle α', 'Component of weight DOWN the slope = mg sin α. Component perpendicular = mg cos α, so R = mg cos α.'),
  rule('Friction', 'F ≤ μR, with equality at the point of slipping (limiting friction).'),
  worked('A 4 kg block on a rough slope at 30° is on the point of slipping. Find μ.', [
    'Perpendicular: R = mg cos 30° = 4(9.8)(0.866) = 33.9 N',
    'Along the slope, on the point of slipping: F = mg sin 30° = 4(9.8)(0.5) = 19.6 N',
    'F = μR, so μ = 19.6/33.9',
    'μ = 0.577 (3 s.f.) - note this equals tan 30°',
  ]),
  diagram('connected-particles'),
  p('For CONNECTED particles over a smooth pulley: the tension is the same throughout, the magnitudes of acceleration are equal, and you write F = ma for each particle separately then solve simultaneously.'),
  pitfalls([
    'Not drawing the diagram. Almost every lost mark in mechanics traces back to a missing or wrong force.',
    'sin and cos on a slope: the component DOWN the slope is mg sin α. Getting these round the wrong way is the standard error - check by considering α = 0, where the down-slope component should vanish.',
    'F = μR only at the point of slipping. If the object is static and not about to move, friction is whatever balances the other forces, and is less than μR.',
    'For connected particles, write a separate equation for each mass. One combined equation loses the tension.',
  ]),
)

/* ============================================ VARIABLE ACCELERATION */

const variableAcceleration = chapter(
  rule('Calculus in kinematics', 'Differentiate to go down: displacement → velocity → acceleration. Integrate to go back up.'),
  diagram('variable-acceleration'),
  worked('A particle has s = t³ − 6t² + 9t. Find when it is instantaneously at rest.', [
    'v = ds/dt = 3t² − 12t + 9',
    'At rest means v = 0: 3t² − 12t + 9 = 0',
    't² − 4t + 3 = 0  →  (t − 1)(t − 3) = 0',
    't = 1 s and t = 3 s',
  ]),
  p('When integrating to find velocity or displacement, use a given condition - often "at t = 0 the particle is at the origin" - to find the constant of integration.'),
  pitfalls([
    'suvat cannot be used when acceleration varies. Spotting that a is a function of t is the first decision.',
    'Every integration needs its constant, found from the initial conditions.',
    'Maximum velocity occurs where acceleration is zero, not where velocity is set to zero.',
    'Distance travelled requires splitting at any time the velocity changes sign.',
  ]),
)

/* ========================================================= MOMENTS */

const moments = chapter(
  rule('Moment', 'Moment = force × PERPENDICULAR distance from the pivot, in N m.'),
  rule('Equilibrium', 'For a rigid body in equilibrium: ΣF = 0 in both directions, AND ΣM = 0 about ANY point.'),
  diagram('moments-rod'),
  method('Solving a moments problem', [
    'Draw the rod with every force and its distance from one end.',
    'Take moments about a point that ELIMINATES an unknown - usually one of the supports.',
    'Set clockwise moments equal to anticlockwise moments.',
    'Solve, then use ΣF = 0 vertically to find the remaining force.',
  ]),
  worked('A uniform 6 m rod of weight 40 N rests on supports at each end. A 60 N weight sits 2 m from A. Find the reaction at B.', [
    'The rod is uniform, so its weight acts at the centre, 3 m from A',
    'Take moments about A: R_B × 6 = 40 × 3 + 60 × 2',
    '6R_B = 120 + 120 = 240',
    'R_B = 40 N',
  ]),
  diagram('ladder'),
  pitfalls([
    'A UNIFORM rod has its weight at the centre; a non-uniform one does not, and locating it is often the point of the question.',
    'Take moments about a point that removes an unknown - choosing badly turns a one-step problem into simultaneous equations.',
    'The distance must be PERPENDICULAR to the force. On a ladder problem that means resolving first.',
    'Check with ΣF = 0 at the end; it catches arithmetic errors.',
  ]),
)

/* ====================================================== PROJECTILES */

const projectiles = chapter(
  rule('The key idea', 'Horizontal and vertical motion are INDEPENDENT and share only the time. Horizontal: constant velocity, a = 0. Vertical: a = −g.'),
  diagram('projectile-path'),
  rule('Components at launch', 'Horizontal: u cos θ.  Vertical: u sin θ.'),
  method('A projectile question', [
    'Resolve the initial velocity into horizontal and vertical components.',
    'Write suvat separately for each direction.',
    'Use the vertical equation to find the TIME - usually via the height condition.',
    'Substitute that time into the horizontal equation to find the range.',
  ]),
  worked('A ball is projected at 20 m s⁻¹ at 30° above the horizontal from ground level. Find the time of flight.', [
    'Vertical: u = 20 sin 30° = 10, a = −9.8, s = 0 (returns to ground)',
    '0 = 10t − 4.9t²',
    't(10 − 4.9t) = 0, so t = 0 or t = 10/4.9',
    'Time of flight = 2.04 s (3 s.f.)',
  ]),
  pitfalls([
    'At the highest point the VERTICAL velocity is zero, but the horizontal velocity is not - the speed there is u cos θ, not zero.',
    'Keep the sign convention consistent: if up is positive then a = −9.8 throughout.',
    'The two directions share only TIME. Never mix a horizontal distance into a vertical equation.',
    'For a projectile launched from a height, s is not zero at landing - it is negative if up is positive.',
  ]),
)


/* ============================================ CONDITIONAL PROBABILITY */

const conditionalProbability = chapter(
  rule('Conditional probability', 'P(A | B) = P(A ∩ B) / P(B) - the probability of A GIVEN that B has already happened.'),
  p(
    'Conditioning on B means restricting attention to the part of the sample space where B occurred, so P(B) becomes the new denominator.'
  ),
  rule('Multiplication rule', 'P(A ∩ B) = P(A | B) × P(B) - a rearrangement, and the form used when reading a tree diagram.'),
  diagram('tree-diagram'),
  method('Without replacement on a tree diagram', [
    'Draw the first set of branches with the starting probabilities.',
    'For the SECOND set, reduce both the numerator and the denominator by one - an item has been removed.',
    'Multiply ALONG branches to get the probability of a path.',
    'Add ACROSS the paths that satisfy the event.',
  ]),
  worked('A bag has 5 red and 3 blue counters. Two are drawn without replacement. Find P(both red).', [
    'First red: 5/8',
    'Second red given the first was red: 4/7 - one red and one counter fewer',
    'Multiply along the branch: 5/8 × 4/7',
    'Answer: 20/56 = 5/14',
  ]),
  worked('Using the same bag, find P(exactly one red).', [
    'Two paths: red then blue, or blue then red',
    'Red then blue: 5/8 × 3/7 = 15/56',
    'Blue then red: 3/8 × 5/7 = 15/56',
    'Add across the paths: 30/56 = 15/28',
  ]),
  h('Testing for independence'),
  p(
    'A and B are independent if P(A | B) = P(A), or equivalently if P(A ∩ B) = P(A) × P(B). Either test is acceptable; state which you are using and show the comparison.'
  ),
  diagram('venn-diagram'),
  pitfalls([
    'Without replacement changes BOTH numbers on the second branch. Reducing only the numerator is the standard error.',
    'Multiply along a branch, add across branches. Doing it the other way round is the second most common error.',
    '"Exactly one" usually needs two paths added; "at least one" is often easier as 1 − P(none).',
    'P(A | B) and P(B | A) are different. Read which is being asked - the given event is the denominator.',
  ]),
)

/* =============================================== FORCES AND FRICTION */

const friction = chapter(
  rule('Friction', 'Friction opposes motion or attempted motion, and acts along the surface. F ≤ μR.'),
  rule('Limiting friction', 'At the point of slipping, friction is at its maximum: F = μR. μ is the coefficient of friction.'),
  tip(
    'F = μR ONLY when the object is moving or on the point of moving. A stationary object not about to slip has friction equal to whatever balances the other forces, which is LESS than μR. Assuming F = μR in a static problem is a standard error.'
  ),
  diagram('forces-on-slope'),
  method('A friction problem on a slope', [
    'Draw the diagram with weight, normal reaction R, friction F and any applied force.',
    'Resolve PERPENDICULAR to the slope: R = mg cos α (plus or minus any component of an applied force).',
    'Resolve ALONG the slope, taking the direction of motion as positive.',
    'Friction acts UP the slope if the object slides down, and down the slope if it slides up.',
    'Apply F = μR only if it is moving or on the point of moving, then use F = ma along the slope.',
  ]),
  worked('A 6 kg block is pulled along rough horizontal ground by a 30 N force at 20° above the horizontal. μ = 0.3. Find the acceleration.', [
    'Vertically: R + 30 sin 20° = 6(9.8), so R = 58.8 − 10.26 = 48.54 N',
    'Friction: F = μR = 0.3 × 48.54 = 14.56 N',
    'Horizontally: 30 cos 20° − 14.56 = 6a',
    '28.19 − 14.56 = 13.63 = 6a, so a = 2.27 m s⁻² (3 s.f.)',
  ]),
  h('The angle of friction'),
  p(
    'On a slope with no other forces, the block is on the point of slipping when tan α = μ. That gives the steepest angle a surface can be before the object slides, and is worth recognising because it saves a full resolution.'
  ),
  pitfalls([
    'An applied force at an angle changes R. Forgetting to include its vertical component when finding R is the most common error here - R is not always mg.',
    'Friction acts OPPOSITE to motion, so its direction depends on which way the object is sliding. Decide before writing the equation.',
    'μ has no units - it is a ratio of two forces.',
    'A rough surface with an object at rest and not about to move: do not use μR.',
  ]),
)

/* ============================================= APPLICATION OF FORCES */

const applicationOfForces = chapter(
  p(
    'Bringing forces, friction and moments together on rigid bodies and connected systems - the hardest mechanics questions on the paper.'
  ),
  h('Connected particles'),
  rule('Over a smooth pulley', 'Tension is the SAME throughout an inextensible string over a smooth pulley, and the magnitudes of the accelerations are equal.'),
  diagram('connected-particles'),
  method('Connected particles', [
    'Draw a separate diagram for EACH particle.',
    'Choose the positive direction as the direction each particle actually moves.',
    'Write F = ma for each particle separately - two equations, two unknowns (a and T).',
    'Solve simultaneously, usually by adding the equations to eliminate T.',
    'Check the answer is physically sensible: T should be between the two weights.',
  ]),
  worked('Masses of 5 kg and 3 kg hang over a smooth pulley. Find the acceleration and the tension.', [
    'For the 5 kg (moving down): 5g − T = 5a',
    'For the 3 kg (moving up): T − 3g = 3a',
    'Add the equations: 2g = 8a, so a = 2g/8 = 2.45 m s⁻²',
    'Substitute back: T = 3(9.8) + 3(2.45) = 36.75 N',
  ]),
  h('The ladder problem'),
  diagram('ladder'),
  method('A ladder against a smooth wall', [
    'Draw weight at the centre (if uniform), normal reaction from the ground, friction along the ground, and normal reaction from the wall.',
    'A SMOOTH wall exerts no friction, so only a horizontal reaction there.',
    'Resolve vertically: R_ground = weight.',
    'Resolve horizontally: friction = N_wall.',
    'Take moments about the FOOT of the ladder to eliminate two unknowns at once.',
  ]),
  pitfalls([
    'Write a separate equation for each particle. One combined equation eliminates the tension you were asked to find.',
    'For a ladder, take moments about the foot - it removes both ground forces in one step.',
    'A smooth wall has no friction; a rough one does, and then there is an extra unknown.',
    'Check the tension lies between the two weights; if it does not, there is a sign error.',
  ]),
)

/* ================================================ FURTHER KINEMATICS */

const furtherKinematics = chapter(
  p('Kinematics in two dimensions, using i–j vector notation - the same calculus, applied to each component.'),
  rule('Vector kinematics', 'r is position, v = dr/dt, a = dv/dt. Differentiate and integrate each COMPONENT separately.'),
  diagram('variable-acceleration'),
  worked('A particle has v = (3t²)i + (4t)j. Find its acceleration at t = 2 and its speed at t = 2.', [
    'a = dv/dt = (6t)i + 4j',
    'At t = 2: a = 12i + 4j m s⁻²',
    'v at t = 2: (12)i + (8)j',
    'Speed = |v| = √(144 + 64) = √208 = 14.4 m s⁻¹ (3 s.f.)',
  ]),
  h('Constant acceleration in vector form'),
  rule('Vector suvat', 'v = u + at  and  r = ut + ½at², with all quantities as vectors.'),
  worked('A particle starts at rest at the origin with a = 2i − 3j. Find its position at t = 3.', [
    'r = ut + ½at², with u = 0',
    'r = ½(2i − 3j)(9)',
    'r = 4.5(2i − 3j)',
    'r = 9i − 13.5j',
  ]),
  h('Projectiles in vector form'),
  p(
    'A projectile has a = −gj, so the horizontal component of velocity is constant and only the j component changes. Setting the j component of r to zero gives the time of flight.'
  ),
  diagram('projectile-path'),
  pitfalls([
    'SPEED is the magnitude of velocity, a scalar: |v| = √(vₓ² + v_y²). Giving a vector when speed is asked loses the mark.',
    'Differentiate and integrate each component separately - they do not interact.',
    'The constant of integration in vector kinematics is a VECTOR, found from the initial position or velocity.',
    'For "when is the particle moving parallel to i", set the j component of velocity to zero, not the whole vector.',
  ]),
)

export const MATHS_APPLIED_NOTES = {
  'Statistical Sampling': sampling,
  'Data Presentation and Interpretation': dataPresentation,
  Probability: probability,
  'Conditional Probability': conditionalProbability,
  'Statistical Distributions (Binomial)': binomialDist,
  'Statistical Hypothesis Testing': hypothesisTesting,
  'Regression, Correlation and Hypothesis Testing': regression,
  'The Normal Distribution': normal,
  'Modelling in Mechanics': modelling,
  'Constant Acceleration (SUVAT)': suvat,
  "Forces and Newton's Laws": forces,
  'Forces and Friction': friction,
  'Variable Acceleration': variableAcceleration,
  'Further Kinematics': furtherKinematics,
  Moments: moments,
  Projectiles: projectiles,
  'Application of Forces': applicationOfForces,
}
