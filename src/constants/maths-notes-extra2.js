/*
  Extra worked examples for the remaining Applied chapters.

  These are the Year 2 Statistics and Mechanics topics, where the exam
  questions are longer and the marks sit in setting the problem up
  correctly - resolving in two directions, defining a hypothesis pair,
  or differentiating rather than reaching for SUVAT.
*/

import { h, worked, tip, chapter } from './maths-notes-build'

const sampling = chapter(
  h('More practice'),
  worked('A school has 900 students across three year groups of 400, 300 and 200. Describe how to take a stratified sample of 90.', [
    'The sampling fraction is 90/900 = 1/10',
    'Year group 1: 400 × 1/10 = 40 students',
    'Year group 2: 300 × 1/10 = 30 students',
    'Year group 3: 200 × 1/10 = 20 students',
    'Within each stratum, select at random - for example by numbering the students and using random numbers',
  ]),
  tip('A stratified sample needs two things stated: the CALCULATION of each stratum size, and that selection within each stratum is random. Leaving out the second half is the common loss of marks.'),
  worked('Explain one advantage and one disadvantage of opportunity sampling.', [
    'Advantage: it is quick and inexpensive, since the sample is taken from whoever is available',
    'Disadvantage: it is unlikely to be representative, because the people available may share characteristics that differ from the population',
    'Consequence: any conclusion drawn may be biased and cannot be safely generalised',
  ]),
)

const regression = chapter(
  h('More practice'),
  worked('A regression line is y = 3.2 + 0.45x, where x is temperature (°C) and y is ice creams sold (hundreds). Interpret the gradient, and comment on using it at x = 40 when the data ranged 5–25.', [
    'Gradient: for each 1 °C rise in temperature, sales rise by 0.45 hundred - that is, 45 ice creams',
    'x = 40 lies OUTSIDE the range of the data (5 to 25)',
    'This is EXTRAPOLATION, so the linear relationship may not continue that far',
    'The prediction is therefore unreliable',
  ]),
  worked('A product moment correlation coefficient is r = −0.87 for 12 pairs. Test at 5% whether there is negative correlation.', [
    'H₀: ρ = 0,  H₁: ρ < 0  (one-tailed)',
    'Critical value from tables for n = 12 at 5% one-tailed: −0.4973',
    '−0.87 < −0.4973, so the result lies in the critical region',
    'Reject H₀: there is significant evidence of negative correlation at the 5% level',
  ]),
  tip('The hypotheses for a correlation test use the POPULATION coefficient ρ, not the sample r. Writing H₀: r = 0 loses the mark.'),
)

const conditionalProbability = chapter(
  h('More practice'),
  worked('P(A) = 0.4, P(B) = 0.5, P(A ∩ B) = 0.2. Are A and B independent?', [
    'If independent, P(A ∩ B) should equal P(A) × P(B)',
    'P(A) × P(B) = 0.4 × 0.5 = 0.2',
    'This equals the given P(A ∩ B) = 0.2',
    'Therefore A and B ARE independent',
  ]),
  worked('A test is 95% accurate. 2% of people have the condition. Given a positive result, find the probability the person has it.', [
    'P(condition) = 0.02, P(positive | condition) = 0.95',
    'P(positive | no condition) = 0.05, P(no condition) = 0.98',
    'P(positive) = 0.02(0.95) + 0.98(0.05) = 0.019 + 0.049 = 0.068',
    'P(condition | positive) = 0.019/0.068 = 0.279 (3 s.f.)',
    'Note how low this is despite a 95% accurate test - because the condition is rare',
  ]),
  tip('For "given that" questions, draw the tree, multiply along the branches for the numerator, and add every branch that produces the condition for the denominator. Setting it out that way earns method marks even if the arithmetic slips.'),
)

const modelling = chapter(
  h('More practice'),
  worked('A ball is modelled as a particle. State two consequences of this assumption.', [
    'The ball has no size, so its rotation and any spin can be ignored',
    'Its mass acts at a single point, so there are no moments about its centre',
    'Consequence: air resistance from its surface area is also neglected, so the model overestimates range',
  ]),
  worked('A rope is modelled as light and inextensible. Explain what each word allows.', [
    'LIGHT: the rope has no mass, so its weight can be ignored and the tension is the same throughout',
    'INEXTENSIBLE: the rope does not stretch, so the two connected objects have the SAME acceleration',
    'Both assumptions are what allow the two objects to be treated as a single connected system',
  ]),
  tip('Modelling questions are marked on the CONSEQUENCE, not the definition. "Light means it has no mass" is half an answer; "so the tension is constant along it" is what earns the mark.'),
)

const variableAcceleration = chapter(
  h('More practice'),
  worked('A particle has displacement s = t³ − 6t² + 9t. Find when it is instantaneously at rest.', [
    'v = ds/dt = 3t² − 12t + 9',
    'At rest means v = 0: 3(t² − 4t + 3) = 0',
    '3(t − 1)(t − 3) = 0',
    't = 1 s and t = 3 s',
  ]),
  worked('A particle has acceleration a = 6t − 4 m s⁻², with v = 2 m s⁻¹ at t = 0. Find v at t = 3.', [
    'v = ∫a dt = 3t² − 4t + c',
    'At t = 0, v = 2, so c = 2',
    'v = 3t² − 4t + 2',
    'At t = 3: v = 27 − 12 + 2 = 17 m s⁻¹',
  ]),
  tip('SUVAT applies ONLY to constant acceleration. If the question gives acceleration or velocity as a function of t, you must differentiate or integrate - using SUVAT here scores zero however neat the working.'),
)

const friction = chapter(
  h('More practice'),
  worked('A 5 kg block on a rough horizontal surface (μ = 0.3) is pulled by a 20 N horizontal force. Find the acceleration.', [
    'Normal reaction: R = mg = 5(9.8) = 49 N',
    'Friction: F = μR = 0.3(49) = 14.7 N, opposing motion',
    'Resultant: 20 − 14.7 = 5.3 N',
    'a = F/m = 5.3/5 = 1.06 m s⁻²',
  ]),
  worked('A 4 kg block on a rough slope at 25° is on the point of sliding. Find μ.', [
    'On the point of sliding, friction is at its maximum: F = μR',
    'Perpendicular to the slope: R = mg cos 25°',
    'Along the slope: mg sin 25° = μ(mg cos 25°)',
    'The mg cancels: μ = tan 25° = 0.466 (3 s.f.)',
  ]),
  tip('For a block on the point of sliding down a slope, μ = tan θ regardless of mass. Recognising that saves a page of algebra - but show the resolving that leads to it, since the method marks are there.'),
)

const applicationOfForces = chapter(
  h('More practice'),
  worked('Two masses 3 kg and 5 kg hang over a smooth pulley. Find the acceleration and the tension.', [
    'The 5 kg falls, the 3 kg rises; both have the same magnitude of acceleration a',
    'For the 5 kg: 5g − T = 5a',
    'For the 3 kg: T − 3g = 3a',
    'Add: 2g = 8a, so a = 2g/8 = 2.45 m s⁻²',
    'Substitute: T = 3(9.8) + 3(2.45) = 36.75 N',
  ]),
  worked('A 60 kg person stands in a lift accelerating downward at 2 m s⁻². Find the reaction force from the floor.', [
    'Taking down as positive: mg − R = ma',
    '60(9.8) − R = 60(2)',
    '588 − R = 120',
    'R = 468 N - less than their weight, which is why they feel lighter',
  ]),
)

const furtherKinematics = chapter(
  h('More practice'),
  worked('A particle has position r = (3t² − 2)i + (4t − t²)j. Find its velocity at t = 2.', [
    'v = dr/dt = 6t i + (4 − 2t) j',
    'At t = 2: v = 12i + 0j',
    'Speed = |v| = 12 m s⁻¹',
    'The j component is zero, so at that instant it is moving horizontally',
  ]),
  worked('A particle moves with a = (2i − 3j) m s⁻² and initial velocity (4i + j) m s⁻¹. Find its velocity after 3 s.', [
    'For CONSTANT acceleration in vectors: v = u + at',
    'v = (4i + j) + 3(2i − 3j)',
    '= (4 + 6)i + (1 − 9)j',
    'v = 10i − 8j m s⁻¹',
  ]),
  tip('Vector SUVAT works exactly like scalar SUVAT, component by component. Handle i and j separately and the only new thing is finding the magnitude at the end.'),
)

export const MATHS_EXTRA_WORKED_2 = {
  'Statistical Sampling': sampling,
  'Regression, Correlation and Hypothesis Testing': regression,
  'Conditional Probability': conditionalProbability,
  'Modelling in Mechanics': modelling,
  'Variable Acceleration': variableAcceleration,
  'Forces and Friction': friction,
  'Application of Forces': applicationOfForces,
  'Further Kinematics': furtherKinematics,
}
