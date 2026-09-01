/*
  Edexcel A-level Maths (9MA0) - Year 2 Mechanics content top-up.
  Topics covered: Moments, Forces and Friction, Projectiles,
  Application of Forces, Further Kinematics.
  All numeric work uses g = 9.8 m/s^2 unless a question states otherwise.
*/

export const BATCH_D_FLASHCARDS = [
  // ---------------------------------------------------------- Moments
  {
    front: 'How is the moment of a force about a point defined?',
    back: 'Moment = force x perpendicular distance from the point to the line of action of the force, measured in newton metres (Nm).',
    topic: 'Moments',
  },
  {
    front: 'What are the two conditions for a rigid body to be in equilibrium?',
    back: 'The resultant force is zero in every direction, and the sum of clockwise moments equals the sum of anticlockwise moments about any point.',
    topic: 'Moments',
  },
  {
    front: 'Where does the weight of a uniform rod act, for the purpose of taking moments?',
    back: 'At its midpoint, since the mass is spread evenly along its length.',
    topic: 'Moments',
  },
  {
    front: 'How does a non-uniform rod differ from a uniform rod when taking moments?',
    back: 'Its weight does not act at the midpoint; the position of its centre of mass is either given or must be found from the equilibrium conditions, since the mass is not spread evenly.',
    topic: 'Moments',
  },
  {
    front: 'Why is it often useful to take moments about the point where an unknown force acts?',
    back: 'That force then has zero perpendicular distance from the point, so it has zero moment and disappears from the equation, leaving one equation in the remaining unknowns.',
    topic: 'Moments',
  },
  {
    front: 'A plank rests horizontally on two supports. What two equations are typically used to find both reactions?',
    back: 'Resolve vertically (sum of the reactions equals the total weight) and take moments about one of the supports (this eliminates that support\'s reaction, leaving an equation for the other).',
    topic: 'Moments',
  },

  // ------------------------------------------------ Forces and Friction
  {
    front: 'State the friction inequality and what each symbol means.',
    back: 'F <= muR, where F is the frictional force, mu is the coefficient of friction between the surfaces, and R is the normal reaction force.',
    topic: 'Forces and Friction',
  },
  {
    front: "What does 'limiting equilibrium' mean?",
    back: 'The object is on the point of sliding; friction has reached its maximum possible value, F = muR.',
    topic: 'Forces and Friction',
  },
  {
    front: 'On a rough horizontal surface, in which direction does friction act?',
    back: 'Parallel to the surface, opposing the direction of relative motion or impending motion, i.e. the direction the object would move in if it were to move.',
    topic: 'Forces and Friction',
  },
  {
    front: 'For an object on a rough plane inclined at angle theta, what are the components of its weight mg parallel and perpendicular to the plane?',
    back: 'Parallel to the plane, down the slope: mg sin(theta). Perpendicular to the plane, into the plane: mg cos(theta).',
    topic: 'Forces and Friction',
  },
  {
    front: 'How do you find the normal reaction R for an object resting on an inclined plane, with no other forces perpendicular to the slope?',
    back: 'Resolve perpendicular to the plane: R = mg cos(theta), since there is no acceleration perpendicular to the plane.',
    topic: 'Forces and Friction',
  },
  {
    front: 'If an object moves at constant velocity along a rough surface, what does this tell you about the forces acting on it?',
    back: 'The resultant force is zero (Newton\'s first law); the driving force exactly balances friction, and on an incline it also balances the relevant component of weight.',
    topic: 'Forces and Friction',
  },

  // ------------------------------------------------------- Projectiles
  {
    front: 'In projectile motion, ignoring air resistance, what is the horizontal acceleration?',
    back: 'Zero, because there is no horizontal force acting, so the horizontal velocity stays constant throughout the flight.',
    topic: 'Projectiles',
  },
  {
    front: 'In projectile motion, what is the vertical acceleration?',
    back: 'Constant, equal to g (approximately 9.8 m/s^2) directed downward, due to gravity.',
    topic: 'Projectiles',
  },
  {
    front: 'For a projectile launched with speed U at angle theta above the horizontal, what are the initial horizontal and vertical velocity components?',
    back: 'Horizontal: U cos(theta). Vertical: U sin(theta).',
    topic: 'Projectiles',
  },
  {
    front: 'How do you find the maximum height reached by a projectile?',
    back: 'Use the vertical motion only, with vertical velocity = 0 at the greatest height, e.g. v^2 = u^2 - 2gs with v = 0, or v = u - gt with v = 0 to find the time first.',
    topic: 'Projectiles',
  },
  {
    front: 'How do you find the time of flight of a projectile that lands at the same height it was launched from?',
    back: 'Use the vertical motion with total vertical displacement = 0, e.g. s = Ut sin(theta) - (1/2)gt^2 = 0, then solve for t, excluding t = 0.',
    topic: 'Projectiles',
  },
  {
    front: 'How do you find the speed and direction of a projectile at a given time?',
    back: 'Find the horizontal component (constant) and vertical component (from v = u - gt) of velocity, then combine using speed = sqrt(horizontal^2 + vertical^2) and direction from tan(theta) = vertical / horizontal.',
    topic: 'Projectiles',
  },

  // ------------------------------------------------ Application of Forces
  {
    front: 'For two particles connected by a light inextensible string over a smooth pulley, what can you say about their accelerations and the tension?',
    back: 'Both particles have the same magnitude of acceleration, since the string is inextensible, and the tension is the same throughout the string, since the pulley is smooth and the string is light.',
    topic: 'Application of Forces',
  },
  {
    front: 'How do you set up equations for a pulley problem with two hanging masses m1 > m2?',
    back: "Apply Newton's second law separately to each particle: m1g - T = m1a for the heavier, descending mass, and T - m2g = m2a for the lighter, rising mass, then solve simultaneously for a and T.",
    topic: 'Application of Forces',
  },
  {
    front: 'For a mass on an inclined plane connected over a pulley at the top to a hanging mass, what forces act along the plane on the mass on the incline?',
    back: 'The tension T up the slope, the component of weight mg sin(theta) down the slope, and friction (if the plane is rough), whose direction depends on which way the mass is moving or tending to move.',
    topic: 'Application of Forces',
  },
  {
    front: "What does 'light' mean when describing a string or rod in mechanics?",
    back: 'It has no mass, so it does not affect the equations of motion, and force or tension is transmitted unchanged along it (assuming no friction where it passes over anything).',
    topic: 'Application of Forces',
  },
  {
    front: "What does 'smooth' mean when describing a pulley or a surface?",
    back: 'There is no friction; a smooth pulley does not change the magnitude of the tension in a string passing over it, and a smooth surface exerts no frictional force.',
    topic: 'Application of Forces',
  },
  {
    front: 'How can the equilibrium of three coplanar forces be checked using a triangle of forces?',
    back: 'If the three forces can be drawn head to tail forming a closed triangle, with no gap, then their resultant is zero and the object is in equilibrium.',
    topic: 'Application of Forces',
  },
  {
    front: 'For a connected system, such as two masses joined by a string on an incline and over a pulley, how do you find the tension once you know the acceleration?',
    back: 'Substitute the acceleration back into either particle\'s equation of motion (F = ma) and solve for T.',
    topic: 'Application of Forces',
  },

  // -------------------------------------------------- Further Kinematics
  {
    front: 'If the position vector of a particle is r(t), how do you find its velocity vector?',
    back: 'Differentiate each component of r with respect to t: v = dr/dt.',
    topic: 'Further Kinematics',
  },
  {
    front: 'If the velocity vector of a particle is v(t), how do you find its acceleration vector?',
    back: 'Differentiate each component of v with respect to t: a = dv/dt = d^2r/dt^2.',
    topic: 'Further Kinematics',
  },
  {
    front: 'How do you find velocity from a given acceleration vector a(t)?',
    back: 'Integrate each component of a with respect to t, then use a known velocity at a given time, such as the initial velocity, to find the constant of integration.',
    topic: 'Further Kinematics',
  },
  {
    front: 'How do you find the speed of a particle at a given time from its velocity vector v = xi + yj?',
    back: 'Speed = |v| = sqrt(x^2 + y^2), the magnitude of the velocity vector, found using Pythagoras\' theorem.',
    topic: 'Further Kinematics',
  },
  {
    front: 'How do you find the direction of motion of a particle from its velocity vector v = xi + yj?',
    back: 'Find the angle theta the vector makes with a reference direction, usually i, using tan(theta) = y/x, then describe the direction, e.g. theta degrees above the i direction.',
    topic: 'Further Kinematics',
  },
  {
    front: 'Write the vector form of v = u + at for constant acceleration.',
    back: 'v = u + at, where u, v and a are vectors; it applies component-wise, e.g. vx = ux + axt and vy = uy + ayt.',
    topic: 'Further Kinematics',
  },
  {
    front: 'Write the vector form of the constant-acceleration displacement equation r = r0 + ut + (1/2)at^2.',
    back: 'The position vector at time t equals the initial position vector plus ut plus (1/2)at^2, all as vectors, applied component-wise in i and j.',
    topic: 'Further Kinematics',
  },
]

export const BATCH_D_MCQ = [
  // ---------------------------------------------------------- Moments
  {
    question:
      'A uniform rod AB of length 3 m and weight 24 N is pivoted at its midpoint. A load of 10 N hangs from A. Where on the B side of the pivot must a load of 15 N be hung to keep the rod in horizontal equilibrium?',
    options: [
      '2 m from the pivot',
      '0.67 m from the pivot',
      '1 m from the pivot',
      '2.25 m from the pivot',
    ],
    answer: 2,
    explanation:
      'The rod\'s own weight acts at the pivot and has no moment there. Taking moments about the pivot: 10 x 1.5 = 15 x d, so d = 15/15 = 1 m.',
    topic: 'Moments',
  },
  {
    question:
      'Two children sit on a see-saw (a light rod) pivoted at its centre. Child A, weight 300 N, sits 1.5 m from the pivot. How far from the pivot must child B, weight 250 N, sit on the other side for the see-saw to balance horizontally?',
    options: ['1.5 m', '1.8 m', '1.25 m', '2.0 m'],
    answer: 1,
    explanation:
      'Taking moments about the pivot: 300 x 1.5 = 250 x d, so d = 450/250 = 1.8 m.',
    topic: 'Moments',
  },
  {
    question:
      'A rigid body has zero resultant force acting on it, but the sum of clockwise moments about a point is not equal to the sum of anticlockwise moments about that point. What happens to the body?',
    options: [
      'It is in equilibrium',
      'It will translate but not rotate',
      'It will both translate and rotate',
      'It will rotate but not translate',
    ],
    answer: 3,
    explanation:
      'Zero resultant force means no linear (translational) acceleration, but an unbalanced moment means an angular acceleration, so the body rotates without translating.',
    topic: 'Moments',
  },

  // ------------------------------------------------ Forces and Friction
  {
    question:
      'A block of mass 5 kg rests on a rough horizontal surface with coefficient of friction mu = 0.25. A horizontal force P is applied. What is the maximum value of P for the block to remain in equilibrium? (g = 9.8)',
    options: ['12.25 N', '49 N', '1.25 N', '24.5 N'],
    answer: 0,
    explanation:
      'R = mg = 5 x 9.8 = 49 N. Maximum friction (and hence maximum P at limiting equilibrium) is muR = 0.25 x 49 = 12.25 N.',
    topic: 'Forces and Friction',
  },
  {
    question:
      'A block of mass 2 kg on a rough plane inclined at 30 degrees to the horizontal is in limiting equilibrium, on the point of sliding down. Find the coefficient of friction mu. (g = 9.8)',
    options: ['mu = sin30 degrees = 0.5', 'mu = cos30 degrees = 0.87', 'mu = tan30 degrees = 0.58', 'mu = 1/tan30 degrees = 1.73'],
    answer: 2,
    explanation:
      'Resolving perpendicular: R = mg cos30 degrees. Resolving parallel with friction acting up the slope at its limiting value: mg sin30 degrees = muR = mu mg cos30 degrees, so mu = tan30 degrees ≈ 0.58.',
    topic: 'Forces and Friction',
  },
  {
    question:
      'A crate is pulled along rough horizontal ground at constant velocity by a horizontal force of 40 N. The coefficient of friction is 0.4. What is the mass of the crate? (g = 9.8)',
    options: ['≈1.63 kg', '≈10.2 kg', '≈4.08 kg', '10 kg (using g = 10)'],
    answer: 1,
    explanation:
      'At constant velocity the applied force equals limiting friction: 40 = 0.4 x mg, so mg = 100 and m = 100/9.8 ≈ 10.2 kg.',
    topic: 'Forces and Friction',
  },

  // ------------------------------------------------------- Projectiles
  {
    question:
      'A particle is projected horizontally with speed 15 m/s from the top of a cliff 45 m high. How long does it take to reach the ground? (g = 9.8)',
    options: ['≈3.03 s', '≈2.14 s', '≈9.18 s', '≈4.59 s'],
    answer: 0,
    explanation:
      'Vertical motion only: 45 = (1/2)(9.8)t^2, so t^2 = 90/9.8 ≈ 9.18 and t ≈ 3.03 s.',
    topic: 'Projectiles',
  },
  {
    question: 'A ball is projected at 20 m/s at 40 degrees above the horizontal. What is the initial vertical component of its velocity?',
    options: ['≈15.3 m/s', '≈20 m/s', '≈31.1 m/s', '≈12.9 m/s'],
    answer: 3,
    explanation: 'The vertical component is U sin(theta) = 20 sin40 degrees ≈ 12.9 m/s.',
    topic: 'Projectiles',
  },
  {
    question:
      'A particle is projected from ground level with initial velocity (8i + 24j) m/s, where j is vertically upward. Using g = 9.8, what is the greatest height it reaches?',
    options: ['≈58.8 m', '≈29.4 m', '≈32.7 m', '≈3.27 m'],
    answer: 1,
    explanation:
      'Only the vertical component matters: using v^2 = u^2 - 2gh with v = 0 and u = 24, h = 24^2 / (2 x 9.8) = 576/19.6 ≈ 29.4 m.',
    topic: 'Projectiles',
  },

  // ------------------------------------------------ Application of Forces
  {
    question:
      'Two particles of mass 4 kg and 6 kg are connected by a light inextensible string passing over a smooth fixed pulley. The system is released from rest. What is the acceleration of the system? (g = 9.8)',
    options: ['1.96 m/s²', '3.27 m/s²', '0.98 m/s²', '9.8 m/s²'],
    answer: 0,
    explanation:
      'a = (m1 - m2)g / (m1 + m2) = (6 - 4)(9.8) / (6 + 4) = 19.6/10 = 1.96 m/s².',
    topic: 'Application of Forces',
  },
  {
    question:
      'A particle of mass 3 kg lies on a smooth plane inclined at 30 degrees. It is connected by a light string over a smooth pulley at the top of the plane to a hanging particle of mass 5 kg, which descends when the system is released. Taking up the slope as positive for the particle on the incline, which equation correctly applies Newton\'s second law to it?',
    options: [
      '3g sin30° − T = 3a',
      'T = 3a',
      'T − 3g cos30° = 3a',
      'T − 3g sin30° = 3a',
    ],
    answer: 3,
    explanation:
      'The particle on the incline is pulled up the slope by T and pulled down the slope by the weight component 3g sin30°, so T − 3g sin30° = 3a. Using cos would be the wrong component, and omitting the weight term ignores a real force.',
    topic: 'Application of Forces',
  },
  {
    question:
      'Three coplanar forces act on a particle that is in equilibrium: a weight of 20 N vertically down, a horizontal force P, and a force Q at 40 degrees above the horizontal. Which statement about the triangle of forces is correct?',
    options: [
      'The three forces must all have equal magnitude',
      'The three forces, drawn head to tail, form a closed triangle since their vector sum is zero',
      'The triangle only closes if all three forces are perpendicular to each other',
      'The forces form a closed triangle only if mu = 0',
    ],
    answer: 1,
    explanation:
      'For any particle in equilibrium, the forces sum to zero, so drawing them head to tail always produces a closed triangle, regardless of their individual magnitudes or angles.',
    topic: 'Application of Forces',
  },

  // -------------------------------------------------- Further Kinematics
  {
    question:
      'A particle has position vector r = (t^3 - 2t)i + (3t^2)j metres at time t seconds. What is its velocity vector at t = 2?',
    options: ['8i + 12j', '12i + 10j', '10i + 12j', '(3t² − 2)i + 6tj'],
    answer: 2,
    explanation:
      'v = dr/dt = (3t^2 - 2)i + (6t)j. At t = 2: (3(4) - 2)i + (12)j = 10i + 12j.',
    topic: 'Further Kinematics',
  },
  {
    question:
      'A particle moves with constant acceleration a = (2i - 3j) m/s^2. At t = 0 its velocity is u = (4i + j) m/s. What is its velocity at t = 3 seconds?',
    options: ['10i − 8j', '10i + 8j', '6i − 9j', '6i − 2j'],
    answer: 0,
    explanation:
      'v = u + at = (4 + 2(3))i + (1 − 3(3))j = (4 + 6)i + (1 − 9)j = 10i − 8j.',
    topic: 'Further Kinematics',
  },
  {
    question: 'A particle has velocity v = (6t)i + (8 - 2t)j m/s at time t. What is its speed when t = 1?',
    options: ['12 m/s', '6 m/s', '≈4.24 m/s', '≈8.49 m/s'],
    answer: 3,
    explanation:
      'At t = 1, v = 6i + 6j, so speed = sqrt(6^2 + 6^2) = sqrt(72) ≈ 8.49 m/s.',
    topic: 'Further Kinematics',
  },
]

export const BATCH_D_EXAM = [
  // ---------------------------------------------------------- Moments
  {
    question:
      'A uniform plank AB has length 5 m and weight 150 N. It rests horizontally in equilibrium on two supports, one at A and one at C, where AC = 4 m. Find the reactions at the two supports.',
    marks: 5,
    markScheme: [
      'M1: Take moments about A to eliminate the reaction there: 4 R_C = 150 × 2.5',
      'A1: 4 R_C = 375',
      'A1: R_C = 93.75 N',
      'M1: Resolve vertically: R_A + R_C = 150',
      'A1: R_A = 150 − 93.75 = 56.25 N',
      'Final answer: R_A = 56.25 N, R_C = 93.75 N',
    ],
    topic: 'Moments',
  },
  {
    question:
      'A non-uniform rod AB has length 6 m and weight 50 N. It rests horizontally in equilibrium on supports at A and B only, with the reaction at A twice the reaction at B. Find the distance of the rod\'s centre of mass from A.',
    marks: 6,
    markScheme: [
      'B1: R_A = 2R_B',
      'M1: Resolve vertically for the rod: R_A + R_B = 50',
      'A1: Solve simultaneously: R_B = 50/3 N, R_A = 100/3 N',
      'M1: Take moments about A, letting d be the distance of the centre of mass from A: R_B × 6 = 50 × d',
      'A1: (50/3) × 6 = 50d, so 100 = 50d',
      'A1: d = 2',
      'Final answer: the centre of mass is 2 m from A (4 m from B)',
    ],
    topic: 'Moments',
  },
  {
    question:
      'A uniform beam AB of length 4 m and weight 60 N is hinged at A and held horizontal by a light vertical cable attached at B, providing an upward tension T. Find T and the vertical reaction at the hinge A.',
    marks: 4,
    markScheme: [
      'M1: Take moments about A: T × 4 = 60 × 2',
      'A1: T = 30 N',
      'M1: Resolve vertically: R_A + T = 60',
      'A1: R_A = 30 N',
      'Final answer: T = 30 N, R_A = 30 N',
    ],
    topic: 'Moments',
  },
  {
    question:
      'A uniform plank AB has length 6 m and mass 30 kg. It rests horizontally on two supports, one at A and one at C, where AC = 4 m. A workman of mass 80 kg stands on the plank at a distance x metres from A. Modelling the plank as a uniform rod and the workman as a particle, find the range of values of x for which the plank remains in equilibrium without tipping about C. (g = 9.8)',
    marks: 8,
    markScheme: [
      'B1: Weight of plank = 30g = 294 N, acting at the midpoint, 3 m from A',
      'B1: Weight of workman = 80g = 784 N, acting at distance x from A',
      'M1: Resolve vertically: R_A + R_C = 294 + 784',
      'M1: Take moments about A: 4 R_C = 294 × 3 + 784x',
      'A1: 4 R_C = 882 + 784x, so R_C = 220.5 + 196x',
      'M1: Substitute to find R_A: R_A = 1078 − R_C = 857.5 − 196x',
      'dM1: For the plank not to tip about C, require R_A ≥ 0',
      'A1: 857.5 − 196x ≥ 0, so x ≤ 4.375',
      'Final answer: 0 ≤ x ≤ 4.375 m (the plank stays in equilibrium provided the workman remains within 4.375 m of A)',
    ],
    topic: 'Moments',
  },

  // ------------------------------------------------ Forces and Friction
  {
    question:
      'A box of mass 12 kg lies on rough horizontal ground. The coefficient of friction between the box and the ground is 0.35. Find the least horizontal force required to move the box. (g = 9.8)',
    marks: 3,
    markScheme: [
      'M1: R = mg = 12 × 9.8 = 117.6 N',
      'M1: Limiting friction F = μR',
      'A1: F = 0.35 × 117.6 = 41.16 N',
      'Final answer: 41.16 N',
    ],
    topic: 'Forces and Friction',
  },
  {
    question:
      'A parcel of mass 4 kg rests on a rough plane inclined at 10 degrees to the horizontal. The coefficient of friction between the parcel and the plane is 0.2. Show that the parcel remains in equilibrium, and find the magnitude of the friction force acting on it. (g = 9.8)',
    marks: 6,
    markScheme: [
      'M1: Resolve perpendicular to the plane: R = mg cos10°',
      'A1: R = 4 × 9.8 × cos10° ≈ 38.6 N',
      'M1: Find the maximum possible friction: F_max = μR = 0.2 × 38.6 ≈ 7.72 N',
      'M1: Resolve parallel to the plane: friction needed to hold the parcel = mg sin10°',
      'A1: mg sin10° = 4 × 9.8 × sin10° ≈ 6.81 N',
      'B1: Since 6.81 N ≤ 7.72 N (F_max), the parcel does not slide and remains in equilibrium',
      'Final answer: the parcel is in equilibrium, with friction ≈ 6.81 N acting up the plane',
    ],
    topic: 'Forces and Friction',
  },
  {
    question:
      'A sledge of mass 15 kg is pulled at constant velocity across rough horizontal snow by a rope inclined at 25 degrees above the horizontal, with tension T. The coefficient of friction between the sledge and the snow is 0.15. Find T. (g = 9.8)',
    marks: 7,
    markScheme: [
      'M1: Resolve vertically: R + T sin25° = mg',
      'M1: Resolve horizontally (constant velocity, so equilibrium): T cos25° = F',
      'B1: At constant velocity, friction is limiting: F = μR',
      'M1: Combine the equations: T cos25° = μ(mg − T sin25°)',
      'A1: Rearrange: T(cos25° + μ sin25°) = μmg',
      'dM1: Substitute values: T(0.9063 + 0.15 × 0.4226) = 0.15 × 147',
      'A1: T = 22.05 / 0.9697 ≈ 22.7',
      'Final answer: T ≈ 22.7 N',
    ],
    topic: 'Forces and Friction',
  },
  {
    question:
      'A block of mass 8 kg lies on rough horizontal ground, with coefficient of friction 0.3. Find the minimum horizontal force required to move the block, and state, with a reason, whether a smaller-magnitude force could move the block if applied at an angle above the horizontal instead. (g = 9.8)',
    marks: 4,
    markScheme: [
      'M1: R = mg = 8 × 9.8 = 78.4 N',
      'M1: F_max = μR = 0.3 × 78.4',
      'A1: F_max = 23.52 N',
      'B1: A smaller-magnitude applied force is possible at some angle above the horizontal, because its vertical component reduces the normal reaction R, and hence reduces the maximum friction that must be overcome',
      'Final answer: minimum horizontal force = 23.52 N; an angled force can require a smaller magnitude since it reduces R',
    ],
    topic: 'Forces and Friction',
  },

  // ------------------------------------------------------- Projectiles
  {
    question:
      'A stone is thrown horizontally with speed 12 m/s from the top of a vertical cliff 30 m high, and lands on horizontal ground below. Find (a) the time of flight, (b) the horizontal distance travelled (the range). (g = 9.8)',
    marks: 4,
    markScheme: [
      'B1: Horizontal velocity remains constant at 12 m/s throughout the flight (no horizontal force acts)',
      'M1: Vertical motion: 30 = (1/2)(9.8)t²',
      'A1: t = √(60/9.8) ≈ 2.47 s',
      'M1: Range = horizontal speed × time = 12 × 2.47',
      'Final answer: time of flight ≈ 2.47 s, range ≈ 29.7 m',
    ],
    topic: 'Projectiles',
  },
  {
    question:
      'A particle is projected from a point on horizontal ground with speed 28 m/s at 35 degrees above the horizontal. Find (a) the greatest height reached, (b) the total time of flight before it returns to the ground, (c) the horizontal range. (g = 9.8)',
    marks: 7,
    markScheme: [
      'B1: u_y = 28 sin35° ≈ 16.06 m/s, u_x = 28 cos35° ≈ 22.94 m/s',
      'M1: Use v² = u_y² − 2gh with v = 0 at the greatest height',
      'A1: h = 16.06² / (2 × 9.8) ≈ 13.2 m',
      'M1: Use symmetry of the vertical motion: total time of flight T = 2u_y/g',
      'A1: T = 2 × 16.06 / 9.8 ≈ 3.28 s',
      'M1: Range = u_x × T',
      'A1: Range = 22.94 × 3.28 ≈ 75.2 m',
      'Final answer: (a) height ≈ 13.2 m, (b) time of flight ≈ 3.28 s, (c) range ≈ 75.2 m',
    ],
    topic: 'Projectiles',
  },
  {
    question:
      'A ball is projected horizontally at 6 m/s from a height of 1.25 m above horizontal ground. Find the horizontal distance travelled before it lands. (g = 9.8)',
    marks: 3,
    markScheme: [
      'M1: Vertical motion: 1.25 = (1/2)(9.8)t²',
      'A1: t = √(2.5/9.8) ≈ 0.505 s',
      'M1: Range = horizontal speed × time = 6 × 0.505',
      'Final answer: range ≈ 3.03 m',
    ],
    topic: 'Projectiles',
  },
  {
    question:
      'A particle is projected from a point O with velocity 18 m/s at 25 degrees above the horizontal. O is 10 m above horizontal ground. Find the speed with which the particle strikes the ground. (g = 9.8)',
    marks: 5,
    markScheme: [
      'B1: u_x = 18 cos25° ≈ 16.31 m/s (constant throughout), u_y = 18 sin25° ≈ 7.61 m/s (initial, upward)',
      'M1: Vertical motion: v_y² = u_y² + 2g(10), taking the 10 m drop and g as magnitudes in the same direction',
      'A1: v_y² = 7.61² + 2(9.8)(10) ≈ 253.9, so v_y ≈ 15.93 m/s',
      'M1: Combine horizontal and vertical components: speed² = u_x² + v_y²',
      'Final answer: speed = √(16.31² + 15.93²) ≈ 22.8 m/s',
    ],
    topic: 'Projectiles',
  },

  // ------------------------------------------------ Application of Forces
  {
    question:
      'Particles A (mass 5 kg) and B (mass 3 kg) are connected by a light inextensible string which passes over a smooth pulley fixed at the edge of a smooth horizontal table. A lies on the table, and B hangs freely, with the string taut and horizontal from A to the pulley, then vertical to B. The system is released from rest. Find (a) the acceleration of the system, (b) the tension in the string. (g = 9.8)',
    marks: 5,
    markScheme: [
      'M1: Newton\'s second law for A (horizontal, smooth table): T = 5a',
      'M1: Newton\'s second law for B (vertical): 3g − T = 3a',
      'M1: Add the two equations to eliminate T: 3g = 8a',
      'A1: a = 3 × 9.8 / 8 = 3.675 m/s²',
      'A1: T = 5 × 3.675 = 18.375 N',
      'Final answer: a ≈ 3.68 m/s², T ≈ 18.4 N',
    ],
    topic: 'Application of Forces',
  },
  {
    question:
      'A particle P of mass 2 kg lies on a rough plane inclined at 30 degrees to the horizontal. P is connected by a light inextensible string, which passes over a smooth pulley fixed at the top of the plane, to a particle Q of mass 5 kg hanging freely. The coefficient of friction between P and the plane is 0.25. The system is released from rest with the string taut, and Q moves downward. Find (a) the acceleration of the system, (b) the tension in the string. (g = 9.8)',
    marks: 8,
    markScheme: [
      'M1: Resolve perpendicular to the plane for P: R = 2g cos30°',
      'A1: R = 2 × 9.8 × cos30° ≈ 16.97 N',
      'B1: Friction (P moves up the slope) acts down the slope: F = μR = 0.25 × 16.97 ≈ 4.24 N',
      'M1: Newton\'s second law for P along the plane (up the slope positive): T − 2g sin30° − F = 2a',
      'M1: Newton\'s second law for Q (downward positive): 5g − T = 5a',
      'M1: Add the two equations to eliminate T: 5g − 2g sin30° − F = 7a',
      'A1: 49 − 9.8 − 4.24 = 7a, so a ≈ 4.99 m/s²',
      'A1: T = 5g − 5a = 49 − 24.97 ≈ 24.0 N',
      'Final answer: a ≈ 4.99 m/s², T ≈ 24.0 N',
    ],
    topic: 'Application of Forces',
  },
  {
    question:
      'A particle of weight 12 N is held in equilibrium by two light strings. One string is horizontal, and the other makes an angle of 50 degrees with the horizontal. Find the tension in each string.',
    marks: 4,
    markScheme: [
      'M1: Resolve vertically: T2 sin50° = 12',
      'A1: T2 = 12 / sin50° ≈ 15.7 N',
      'M1: Resolve horizontally: T1 = T2 cos50°',
      'A1: T1 ≈ 15.66 × cos50° ≈ 10.1 N',
      'Final answer: T1 ≈ 10.1 N, T2 ≈ 15.7 N',
    ],
    topic: 'Application of Forces',
  },
  {
    question:
      'Particles A (4 kg) and B (2 kg) are connected by a light inextensible string over a smooth pulley at the edge of a rough horizontal table. A lies on the table, with coefficient of friction 0.2 between A and the table, and B hangs freely. Find the acceleration of the system when released from rest. (g = 9.8)',
    marks: 3,
    markScheme: [
      'M1: For A on the table: T − μ(4g) = 4a, using R = 4g and F = μR',
      'M1: For B: 2g − T = 2a',
      'A1: Add the equations: 2g − μ(4)(9.8) = 6a, so 19.6 − 7.84 = 6a',
      'Final answer: a = 11.76 / 6 = 1.96 m/s²',
    ],
    topic: 'Application of Forces',
  },

  // -------------------------------------------------- Further Kinematics
  {
    question:
      'A particle P moves in a plane so that its position vector at time t seconds is r = (t² − 4t)i + (2t)j metres, t ≥ 0. Find the velocity vector of P at t = 3 seconds, and hence find its speed at this time.',
    marks: 3,
    markScheme: [
      'M1: Differentiate r to find v: v = (2t − 4)i + 2j',
      'A1: At t = 3: v = 2i + 2j',
      'M1: Speed = |v| = √(2² + 2²)',
      'Final answer: speed = √8 = 2√2 ≈ 2.83 m/s',
    ],
    topic: 'Further Kinematics',
  },
  {
    question:
      'A particle starts at the origin with initial velocity (3i − 2j) m/s and moves with constant acceleration (−i + 4j) m/s². Find (a) the velocity of the particle at t = 4 seconds, (b) the position vector of the particle at t = 4 seconds, (c) the speed of the particle at t = 4 seconds.',
    marks: 6,
    markScheme: [
      'M1: Use v = u + at: v = (3i − 2j) + 4(−i + 4j)',
      'A1: v = (3 − 4)i + (−2 + 16)j = −i + 14j',
      'M1: Use r = ut + (1/2)at² (starting at the origin): r = 4(3i − 2j) + (1/2)(16)(−i + 4j)',
      'A1: r = (12i − 8j) + (−8i + 32j) = 4i + 24j',
      'M1: Speed = |v| = √((−1)² + 14²)',
      'A1: √197 ≈ 14.0 m/s',
      'Final answer: (a) v = −i + 14j m/s, (b) r = 4i + 24j m, (c) speed ≈ 14.0 m/s',
    ],
    topic: 'Further Kinematics',
  },
  {
    question:
      'A particle moves in a plane so that its acceleration at time t seconds is a = (6t − 12)i − 4j m/s². When t = 0, the particle has velocity 5j m/s and position vector (2i − j) m. Find (a) the velocity vector at time t, (b) the position vector at time t, (c) the value of t (t > 0) at which the particle is moving parallel to j, and its velocity at this instant.',
    marks: 8,
    markScheme: [
      'M1: Integrate a with respect to t: v = (3t² − 12t)i + (−4t)j + C, where C is a constant vector',
      'A1: Use v(0) = 5j to find C: C = 0i + 5j',
      'A1: v = (3t² − 12t)i + (5 − 4t)j',
      'M1: Integrate v with respect to t: r = (t³ − 6t²)i + (5t − 2t²)j + D',
      'A1: Use r(0) = 2i − j to find D: D = 2i − j, so r = (t³ − 6t² + 2)i + (5t − 2t² − 1)j',
      'M1: Set the i-component of v to zero: 3t² − 12t = 0, so 3t(t − 4) = 0',
      'A1: t = 4 (rejecting t = 0, the initial instant)',
      'B1: At t = 4, v_y = 5 − 4(4) = −11, so velocity = −11j m/s',
      'Final answer: v(t) = (3t² − 12t)i + (5 − 4t)j; r(t) = (t³ − 6t² + 2)i + (5t − 2t² − 1)j; at t = 4 s the particle moves parallel to j with velocity −11j m/s',
    ],
    topic: 'Further Kinematics',
  },
  {
    question:
      'A particle has velocity vector v = (3t − 6)i + 4j m/s at time t seconds. Find the value of t at which the particle is moving parallel to j, and find its speed at this instant.',
    marks: 4,
    markScheme: [
      'B1: If the i-component of v is zero, the velocity vector points purely in the j direction, i.e. parallel to j',
      'M1: Set the i-component of v to zero: 3t − 6 = 0',
      'A1: t = 2 s',
      'M1: At t = 2, v = 0i + 4j, so speed = |4j| = 4 m/s',
      'Final answer: t = 2 s, speed = 4 m/s',
    ],
    topic: 'Further Kinematics',
  },
]
