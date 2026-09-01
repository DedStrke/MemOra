export const BATCH_B_FLASHCARDS = [
  // ---------------------------------------------------- Trigonometry and Modelling
  {
    front: "How do you write a sinθ + b cosθ in the form R sin(θ + α), with R > 0 and 0° < α < 90°?",
    back: "R = √(a² + b²). Since R sin(θ+α) = R sinθ cosα + R cosθ sinα, matching coefficients gives a = R cosα and b = R sinα, so tanα = b/a.",
    topic: "Trigonometry and Modelling",
  },
  {
    front: "Expand R sin(θ + α) and explain how it is used to find R and α for a sinθ + b cosθ.",
    back: "R sin(θ+α) = R sinθ cosα + R cosθ sinα. Comparing with a sinθ + b cosθ term by term gives a = R cosα (coefficient of sinθ) and b = R sinα (coefficient of cosθ), so R² = a² + b² and tanα = b/a.",
    topic: "Trigonometry and Modelling",
  },
  {
    front: "How do you write a sinθ − b cosθ in the form R sin(θ − α)?",
    back: "R = √(a² + b²), tanα = b/a. This works because R sin(θ−α) = R sinθ cosα − R cosθ sinα, which matches a sinθ − b cosθ with a = R cosα, b = R sinα.",
    topic: "Trigonometry and Modelling",
  },
  {
    front: "If a sinθ + b cosθ is written as R sin(θ+α), what are the maximum and minimum values, and when do they occur?",
    back: "Maximum value is R, occurring when θ+α = 90°. Minimum value is −R, occurring when θ+α = 270°.",
    topic: "Trigonometry and Modelling",
  },
  {
    front: "Outline the method for solving a sinθ + b cosθ = c for 0 ≤ θ ≤ 360°.",
    back: "Write the left side as R sin(θ+α) using R = √(a²+b²) and tanα = b/a. Solve sin(θ+α) = c/R for all values of (θ+α) in the shifted range, then subtract α to get θ.",
    topic: "Trigonometry and Modelling",
  },
  {
    front: "How do you write a cosθ + b sinθ in the form R cos(θ − α)?",
    back: "R = √(a² + b²), tanα = b/a. Since R cos(θ−α) = R cosθ cosα + R sinθ sinα matches a cosθ + b sinθ with a = R cosα, b = R sinα.",
    topic: "Trigonometry and Modelling",
  },

  // ---------------------------------------------------- Parametric Equations
  {
    front: "What does it mean to eliminate the parameter from x = f(t), y = g(t)?",
    back: "To find a single Cartesian equation connecting x and y directly, either by using one equation to write t in terms of x (or y) and substituting into the other, or by combining both equations using an identity.",
    topic: "Parametric Equations",
  },
  {
    front: "If x = t² and y = 2t, find the Cartesian equation by eliminating t.",
    back: "From y = 2t, t = y/2. Substituting into x = t² gives x = (y/2)² = y²/4, so y² = 4x.",
    topic: "Parametric Equations",
  },
  {
    front: "If x = 3cosθ, y = 3sinθ, find the Cartesian equation by eliminating θ.",
    back: "Use cos²θ + sin²θ = 1: (x/3)² + (y/3)² = 1, so x² + y² = 9, a circle centred at the origin with radius 3.",
    topic: "Parametric Equations",
  },
  {
    front: "State the formula for dy/dx for a parametric curve x = f(t), y = g(t).",
    back: "dy/dx = (dy/dt) ÷ (dx/dt), provided dx/dt ≠ 0.",
    topic: "Parametric Equations",
  },
  {
    front: "How do you find the gradient of the tangent to a parametric curve at a given value t = t₀?",
    back: "Differentiate x and y with respect to t, form dy/dx = (dy/dt)/(dx/dt), then substitute t = t₀ to get the numerical gradient at that point.",
    topic: "Parametric Equations",
  },
  {
    front: "How do you find the area under a parametric curve x = f(t), y = g(t) between t = t₁ and t = t₂?",
    back: "Area = ∫ y dx = ∫ from t₁ to t₂ of y (dx/dt) dt, where t₁ and t₂ are the parameter values corresponding to the x-limits of the region.",
    topic: "Parametric Equations",
  },
  {
    front: "How do you find the range of x-values traced out by a parametric curve x = f(t) for t in [a, b]?",
    back: "Since x = f(t) is a function of t, evaluate f at the endpoints t = a and t = b (and at any turning points of f within [a,b]) to find the minimum and maximum x-values reached.",
    topic: "Parametric Equations",
  },

  // ---------------------------------------------------- Differentiation (Year 2)
  {
    front: "State d/dx(e^x), d/dx(ln x) and d/dx(a^x).",
    back: "d/dx(e^x) = e^x. d/dx(ln x) = 1/x (x > 0). d/dx(a^x) = a^x ln a.",
    topic: "Differentiation (Year 2)",
  },
  {
    front: "State the derivatives of sin x, cos x and tan x.",
    back: "d/dx(sinx) = cosx. d/dx(cosx) = −sinx. d/dx(tanx) = sec²x.",
    topic: "Differentiation (Year 2)",
  },
  {
    front: "Explain the process of implicit differentiation.",
    back: "Differentiate every term on both sides with respect to x. For a term in y, use the chain rule: d/dx(f(y)) = f'(y) dy/dx (e.g. d/dx(y²) = 2y dy/dx). Then collect all dy/dx terms and rearrange to make dy/dx the subject.",
    topic: "Differentiation (Year 2)",
  },
  {
    front: "How is the second derivative d²y/dx² used to classify a stationary point?",
    back: "If d²y/dx² < 0 at the point, it is a maximum. If d²y/dx² > 0, it is a minimum. If d²y/dx² = 0, the test is inconclusive; check the sign either side, or it may be a point of inflection.",
    topic: "Differentiation (Year 2)",
  },

  // ---------------------------------------------------- Numerical Methods
  {
    front: "How do you show that f(x) = 0 has a root in the interval [a, b]?",
    back: "Show f is continuous on [a,b] and that f(a) and f(b) have opposite signs (one positive, one negative). By the change-of-sign rule, there is a root between a and b.",
    topic: "Numerical Methods",
  },
  {
    front: "How do you derive an iteration formula xₙ₊₁ = g(x) from f(x) = 0?",
    back: "Rearrange the equation f(x) = 0 to make x the subject on one side, giving x = g(x). The iteration is then xₙ₊₁ = g(xₙ).",
    topic: "Numerical Methods",
  },
  {
    front: "What does it mean for an iteration xₙ₊₁ = g(xₙ) to converge?",
    back: "The sequence of values x₀, x₁, x₂, ... gets closer and closer to a fixed value (the root), so that successive terms agree to the required degree of accuracy.",
    topic: "Numerical Methods",
  },
  {
    front: "State the Newton-Raphson iteration formula.",
    back: "xₙ₊₁ = xₙ − f(xₙ)/f'(xₙ).",
    topic: "Numerical Methods",
  },
  {
    front: "Give one situation where the Newton-Raphson method can fail or converge poorly.",
    back: "If the starting value x₀ is close to a stationary point of f (f'(x₀) ≈ 0), the tangent line is nearly horizontal and the next estimate can land far from the root, so the method can diverge or oscillate instead of converging.",
    topic: "Numerical Methods",
  },
  {
    front: "How do you show a root is accurate to a given number of decimal places, e.g. 3 dp?",
    back: "Take the value rounded to that accuracy and test f at the values half a unit above and below the last decimal place (the interval bounding that rounded value). If f changes sign across this narrower interval, the root is confirmed accurate to that number of decimal places.",
    topic: "Numerical Methods",
  },

  // ---------------------------------------------------- Integration (Year 2)
  {
    front: "State ∫e^x dx and ∫(1/x) dx.",
    back: "∫e^x dx = e^x + c. ∫(1/x) dx = ln|x| + c.",
    topic: "Integration (Year 2)",
  },
  {
    front: "State ∫sinx dx and ∫cosx dx.",
    back: "∫sinx dx = −cosx + c. ∫cosx dx = sinx + c.",
    topic: "Integration (Year 2)",
  },
  {
    front: "What is ∫sec²x dx?",
    back: "tanx + c, since d/dx(tanx) = sec²x.",
    topic: "Integration (Year 2)",
  },
  {
    front: "State the integration by parts formula, and how to choose u.",
    back: "∫u (dv/dx) dx = uv − ∫v (du/dx) dx. Choose u to be the factor that simplifies on differentiating (e.g. x, or ln x), and dv/dx to be the factor you can integrate easily.",
    topic: "Integration (Year 2)",
  },
  {
    front: "State the trapezium rule for approximating ∫ from a to b of y dx with n strips of width h = (b−a)/n.",
    back: "∫ y dx ≈ (h/2)[(y₀+yₙ) + 2(y₁+y₂+...+yₙ₋₁)], where y₀, y₁, ..., yₙ are the y-values at the n+1 equally spaced x-values from a to b.",
    topic: "Integration (Year 2)",
  },

  // ---------------------------------------------------- Vectors (3D)
  {
    front: "How do you find the magnitude of a 3D vector v = xi + yj + zk?",
    back: "|v| = √(x² + y² + z²).",
    topic: "Vectors (3D)",
  },
  {
    front: "How do you find the vector AB from the position vectors a and b of points A and B?",
    back: "AB = b − a, the position vector of B minus the position vector of A.",
    topic: "Vectors (3D)",
  },
  {
    front: "State the vector equation of a straight line through the point with position vector a, in the direction of vector b.",
    back: "r = a + tb, where t is a scalar parameter.",
    topic: "Vectors (3D)",
  },
  {
    front: "How do you determine whether two 3D lines are parallel?",
    back: "Compare their direction vectors: the lines are parallel if one direction vector is a scalar multiple of the other.",
    topic: "Vectors (3D)",
  },
  {
    front: "Two 3D lines are not parallel and do not intersect. What are they called?",
    back: "Skew lines.",
    topic: "Vectors (3D)",
  },
  {
    front: "State the formula for the scalar (dot) product of a = (a1,a2,a3) and b = (b1,b2,b3), and how it relates to the angle θ between them.",
    back: "a·b = a1b1 + a2b2 + a3b3 = |a||b|cosθ, so cosθ = (a·b)/(|a||b|). If a·b = 0 (and neither vector is zero), the vectors are perpendicular.",
    topic: "Vectors (3D)",
  },
]

export const BATCH_B_MCQ = [
  // ---------------------------------------------------- Trigonometry and Modelling
  {
    question: "Given f(θ) = 3 sinθ + 4 cosθ is written as R sin(θ + α), with R > 0 and 0° < α < 90°, what is the value of R?",
    options: ["5", "7", "25", "1"],
    answer: 0,
    explanation: "R = √(3² + 4²) = √(9 + 16) = √25 = 5.",
    topic: "Trigonometry and Modelling",
  },
  {
    question: "For 3 sinθ + 4 cosθ ≡ R sin(θ + α), with R > 0 and 0° < α < 90°, what is α to 1 decimal place?",
    options: ["36.9°", "53.1°", "45.0°", "63.4°"],
    answer: 1,
    explanation: "tanα = b/a = 4/3, so α = arctan(4/3) ≈ 53.1°. (36.9° comes from swapping the ratio to arctan(3/4).)",
    topic: "Trigonometry and Modelling",
  },
  {
    question: "The expression 5 cosθ − 12 sinθ is written as R cos(θ + α), R > 0. What is the minimum value of 5 cosθ − 12 sinθ?",
    options: ["5", "13", "-13", "12"],
    answer: 2,
    explanation: "R = √(5² + 12²) = √169 = 13. Since cos ranges from −1 to 1, the minimum of R cos(θ+α) is −R = −13.",
    topic: "Trigonometry and Modelling",
  },

  // ---------------------------------------------------- Parametric Equations
  {
    question: "A curve has parametric equations x = t + 1, y = t² − 2. What is the Cartesian equation?",
    options: ["y = x² + 2x − 1", "y = x² − 2x + 1", "y = x² − 1", "y = x² − 2x − 1"],
    answer: 3,
    explanation: "t = x − 1, so y = (x−1)² − 2 = x² − 2x + 1 − 2 = x² − 2x − 1.",
    topic: "Parametric Equations",
  },
  {
    question: "A curve is defined by x = 2t³, y = 3t². Find dy/dx in terms of t.",
    options: ["1/t", "t", "t²", "1/t²"],
    answer: 0,
    explanation: "dy/dt = 6t, dx/dt = 6t², so dy/dx = 6t/6t² = 1/t.",
    topic: "Parametric Equations",
  },
  {
    question: "A curve has x = cos2t, y = sint, so dx/dt = −2 sin2t. What is dy/dx in terms of t, simplified using sin2t = 2 sint cost?",
    options: ["1/(4 sint)", "-1/(4 sint)", "-4 sint", "-1/4"],
    answer: 1,
    explanation: "dy/dt = cost, dx/dt = −4 sint cost, so dy/dx = cost/(−4 sint cost) = −1/(4 sint) (the cost terms cancel).",
    topic: "Parametric Equations",
  },

  // ---------------------------------------------------- Differentiation (Year 2)
  {
    question: "Differentiate y = x² e^x using the product rule.",
    options: ["2x e^x", "x² e^x", "e^x(x² + 2x)", "e^x(x² + x)"],
    answer: 2,
    explanation: "Product rule: dy/dx = (2x)(e^x) + (x²)(e^x) = e^x(2x + x²).",
    topic: "Differentiation (Year 2)",
  },
  {
    question: "Find dy/dx if y = ln(3x + 1), using the chain rule.",
    options: ["1/(3x+1)", "3x/(3x+1)", "ln3/(3x+1)", "3/(3x+1)"],
    answer: 3,
    explanation: "dy/dx = (derivative of 3x+1)/(3x+1) = 3/(3x+1). (1/(3x+1) forgets the chain-rule factor of 3.)",
    topic: "Differentiation (Year 2)",
  },
  {
    question: "A curve is defined implicitly by x² + y² = 25. Find dy/dx at the point (3, 4).",
    options: ["-3/4", "3/4", "-4/3", "4/3"],
    answer: 0,
    explanation: "2x + 2y dy/dx = 0, so dy/dx = −x/y = −3/4 at (3,4).",
    topic: "Differentiation (Year 2)",
  },

  // ---------------------------------------------------- Numerical Methods
  {
    question: "Given f(x) = x³ − 4x − 2, what are the values of f(2) and f(3), showing a root lies between them?",
    options: ["f(2) = 2, f(3) = -13", "f(2) = -2, f(3) = 13", "f(2) = -10, f(3) = 17", "f(2) = 6, f(3) = 23"],
    answer: 1,
    explanation: "f(2) = 8 − 8 − 2 = −2, f(3) = 27 − 12 − 2 = 13. Since these have opposite signs, there is a root between x = 2 and x = 3.",
    topic: "Numerical Methods",
  },
  {
    question: "Using Newton-Raphson with x₀ = 2 for f(x) = x² − 7, find x₁.",
    options: ["1.25", "3.5", "2.75", "2.25"],
    answer: 2,
    explanation: "x₁ = 2 − (2²−7)/(2×2) = 2 − (−3)/4 = 2 + 0.75 = 2.75.",
    topic: "Numerical Methods",
  },
  {
    question: "The iteration xₙ₊₁ = ∛(5xₙ − 1) is used to solve x³ − 5x + 1 = 0, with x₀ = 3. Find x₁ to 3 decimal places.",
    options: ["2.466", "2.520", "1.821", "2.410"],
    answer: 3,
    explanation: "x₁ = ∛(5×3 − 1) = ∛14 ≈ 2.410 (3 dp). (2.466 comes from omitting the −1; 2.520 from using +1 instead of −1.)",
    topic: "Numerical Methods",
  },

  // ---------------------------------------------------- Integration (Year 2)
  {
    question: "Find ∫2x(x²+1)³ dx using the substitution u = x²+1.",
    options: ["(x²+1)⁴/4 + c", "(x²+1)⁴ + c", "4(x²+1)⁴ + c", "(x²+1)³/3 + c"],
    answer: 0,
    explanation: "With u = x²+1, du = 2x dx, so ∫2x(x²+1)³dx = ∫u³du = u⁴/4 + c = (x²+1)⁴/4 + c.",
    topic: "Integration (Year 2)",
  },
  {
    question: "Find ∫x cosx dx using integration by parts.",
    options: ["x sinx − cosx + c", "x sinx + cosx + c", "-x sinx + cosx + c", "x cosx + sinx + c"],
    answer: 1,
    explanation: "u = x, dv/dx = cosx gives v = sinx, du/dx = 1. ∫x cosx dx = x sinx − ∫sinx dx = x sinx − (−cosx) + c = x sinx + cosx + c.",
    topic: "Integration (Year 2)",
  },
  {
    question: "Use the trapezium rule with 4 strips to estimate ∫ from 0 to 4 of x² dx, using y-values 0, 1, 4, 9, 16 at x = 0, 1, 2, 3, 4.",
    options: ["21.33", "20", "22", "24"],
    answer: 2,
    explanation: "h = 1. Estimate = (1/2)[(0+16) + 2(1+4+9)] = (1/2)(16+28) = 22.",
    topic: "Integration (Year 2)",
  },

  // ---------------------------------------------------- Vectors (3D)
  {
    question: "Find the magnitude of the vector v = 2i − 3j + 6k.",
    options: ["√29", "11", "13", "7"],
    answer: 3,
    explanation: "|v| = √(2² + (−3)² + 6²) = √(4+9+36) = √49 = 7. (11 comes from wrongly adding the components instead of using Pythagoras.)",
    topic: "Vectors (3D)",
  },
  {
    question: "Find the angle between vectors a = i + j + k and b = 2i − j + k, to 1 decimal place.",
    options: ["61.9°", "45.0°", "70.5°", "48.2°"],
    answer: 0,
    explanation: "a·b = 2 − 1 + 1 = 2, |a| = √3, |b| = √6, cosθ = 2/√18 ≈ 0.4714, so θ ≈ 61.9°.",
    topic: "Vectors (3D)",
  },
  {
    question: "Line l1 has direction vector (2,-1,3) and line l2 has direction vector (-4,2,-6). What is the relationship between l1 and l2?",
    options: ["Perpendicular", "Parallel", "Skew", "Intersecting at one point"],
    answer: 1,
    explanation: "The direction vector of l2, (−4,2,−6), equals −2 × (2,−1,3), a scalar multiple of the direction vector of l1, so the lines are parallel.",
    topic: "Vectors (3D)",
  },
]

export const BATCH_B_EXAM = [
  // ---------------------------------------------------- Trigonometry and Modelling
  {
    question: "Express 5 sinθ − 12 cosθ in the form R sin(θ − α), where R > 0 and 0° < α < 90°, giving α to 1 decimal place. Hence solve 5 sinθ − 12 cosθ = 6 for 0 ≤ θ ≤ 360°, giving your answers to 1 decimal place.",
    marks: 7,
    markScheme: [
      "B1: R = √(5² + 12²) = 13",
      "M1: tanα = 12/5 leading to α = 67.4° (1 dp)",
      "M1: Rewrites equation as 13 sin(θ − 67.4°) = 6, i.e. sin(θ − 67.4°) = 6/13",
      "M1: Finds θ − 67.4° = 27.5° (from arcsin(6/13)) and uses 180° − 27.5° = 152.5° for the second value",
      "A1: θ − 67.4° = 27.5° or 152.5°",
      "A1: θ = 94.9°",
      "Final answer: θ = 94.9° or θ = 219.9° (1 dp)",
    ],
    topic: "Trigonometry and Modelling",
  },
  {
    question: "Prove the identity (sinθ + cosθ)² ≡ 1 + sin2θ.",
    marks: 4,
    markScheme: [
      "M1: Expand (sinθ + cosθ)² = sin²θ + 2 sinθ cosθ + cos²θ",
      "M1: Use sin²θ + cos²θ = 1 to simplify to 1 + 2 sinθ cosθ",
      "A1: Recognise 2 sinθ cosθ = sin2θ",
      "Final answer: (sinθ + cosθ)² ≡ 1 + sin2θ, as required",
    ],
    topic: "Trigonometry and Modelling",
  },
  {
    question: "The height of water, H metres, in a harbour t hours after midnight is modelled by H(t) = 6 + 2.5 sin(30t)° − 1.5 cos(30t)°, for 0 ≤ t < 24. (a) Write 2.5 sin(30t)° − 1.5 cos(30t)° in the form R sin(30t − α)°, giving R to 3 significant figures and α to 1 decimal place. (b) Hence find the maximum height of water and the first value of t (0 ≤ t < 24) at which it occurs.",
    marks: 6,
    markScheme: [
      "M1: R = √(2.5² + 1.5²)",
      "A1: R = 2.92 (3 sf)",
      "M1: tanα = 1.5/2.5 = 0.6",
      "A1: α = 31.0° (1 dp)",
      "M1: Sets 30t − α = 90° to find the maximum, i.e. t = (90 + 31.0)/30",
      "Final answer: Maximum height ≈ 8.92 m, occurring first at t ≈ 4.03 hours (around 04:02)",
    ],
    topic: "Trigonometry and Modelling",
  },
  {
    question: "(a) Express 7 cosθ + 24 sinθ in the form R cos(θ − α), where R > 0 and 0° < α < 90°, giving α to 2 decimal places. (b) Hence solve 7 cosθ + 24 sinθ = 15 for 0 ≤ θ ≤ 360°, giving your answers to 1 decimal place. (c) State the minimum value of 7 cosθ + 24 sinθ + 10, and the smallest positive value of θ at which it occurs.",
    marks: 8,
    markScheme: [
      "M1: R = √(7² + 24²)",
      "A1: R = 25",
      "M1: tanα = 24/7 (or sinα = 24/25)",
      "A1: α = 73.74° (2 dp)",
      "M1: Forms 25 cos(θ − 73.74°) = 15, so cos(θ − 73.74°) = 0.6, giving θ − 73.74° = ±53.13°",
      "A1: θ = 20.6°",
      "A1: θ = 126.9°",
      "Final answer: (c) minimum value = −15, occurring at θ = 253.7°",
    ],
    topic: "Trigonometry and Modelling",
  },

  // ---------------------------------------------------- Parametric Equations
  {
    question: "A curve has parametric equations x = t² − 1, y = 2t + 3, for t ∈ ℝ. (a) Find the Cartesian equation of the curve, giving your answer in a simplified form. (b) State any restriction on x.",
    marks: 5,
    markScheme: [
      "M1: Rearrange y = 2t + 3 to t = (y−3)/2",
      "M1: Substitute into x = t² − 1: x = [(y−3)/2]² − 1",
      "A1: (y − 3)² = 4(x + 1) (or equivalent simplified form)",
      "B1: x ≥ −1 (since t² ≥ 0)",
      "Final answer: (y − 3)² = 4(x + 1), with x ≥ −1",
    ],
    topic: "Parametric Equations",
  },
  {
    question: "A curve has parametric equations x = t³, y = t² + 1. Find the equation of the tangent to the curve at the point where t = 2.",
    marks: 4,
    markScheme: [
      "M1: dy/dx = (dy/dt)/(dx/dt) = 2t/3t² = 2/(3t)",
      "A1: At t = 2, gradient = 2/6 = 1/3, point (8, 5)",
      "M1: y − 5 = (1/3)(x − 8)",
      "Final answer: 3y = x + 7 (or y = x/3 + 7/3)",
    ],
    topic: "Parametric Equations",
  },
  {
    question: "A curve has parametric equations x = 2t − sin2t, y = 1 − cos2t, for 0 ≤ t ≤ π, forming one arch above the x-axis. Find the area enclosed between the curve and the x-axis, using Area = ∫ y (dx/dt) dt between the appropriate limits of t.",
    marks: 7,
    markScheme: [
      "M1: Area = ∫ y (dx/dt) dt with limits t = 0 to t = π",
      "M1: dx/dt = 2 − 2cos2t",
      "M1: Forms integrand y(dx/dt) = (1−cos2t)(2−2cos2t) = 2(1−cos2t)²",
      "M1: Expands using cos²2t = (1+cos4t)/2 to get 2(1−cos2t)² = 3 − 4cos2t + cos4t",
      "M1: Integrates: ∫(3 − 4cos2t + cos4t) dt = 3t − 2sin2t + (1/4)sin4t",
      "A1: Evaluates between 0 and π: (3π − 0 + 0) − (0 − 0 + 0) = 3π",
      "Final answer: Area = 3π square units",
    ],
    topic: "Parametric Equations",
  },
  {
    question: "A curve has parametric equations x = 4t − 1, y = t(t − 2). Find dy/dx in terms of t, and hence find the value of t at which the curve has a stationary point.",
    marks: 3,
    markScheme: [
      "M1: dy/dt = 2t − 2, dx/dt = 4",
      "A1: dy/dx = (2t − 2)/4 = (t − 1)/2",
      "Final answer: t = 1",
    ],
    topic: "Parametric Equations",
  },

  // ---------------------------------------------------- Differentiation (Year 2)
  {
    question: "Find dy/dx for y = x³ ln x, giving your answer in a simplified factorised form.",
    marks: 3,
    markScheme: [
      "M1: Product rule: dy/dx = (3x²)(ln x) + (x³)(1/x)",
      "A1: dy/dx = 3x² ln x + x²",
      "Final answer: dy/dx = x²(3 ln x + 1)",
    ],
    topic: "Differentiation (Year 2)",
  },
  {
    question: "Given y = (2x+1)/(x²+3), find dy/dx, and hence find the gradient of the curve at x = 1.",
    marks: 6,
    markScheme: [
      "M1: Quotient rule: dy/dx = [2(x²+3) − (2x+1)(2x)] / (x²+3)²",
      "M1: Expands numerator: 2x²+6 − (4x²+2x)",
      "A1: Numerator simplifies to −2x² − 2x + 6",
      "A1: dy/dx = (−2x² − 2x + 6)/(x²+3)²",
      "M1: Substitutes x=1: numerator = −2−2+6 = 2, denominator = 4² = 16",
      "Final answer: gradient at x = 1 is 1/8",
    ],
    topic: "Differentiation (Year 2)",
  },
  {
    question: "A curve is defined by x² + xy + y² = 7. Find dy/dx in terms of x and y, and hence find the gradient of the curve at the point (1, 2).",
    marks: 5,
    markScheme: [
      "M1: Differentiate implicitly: 2x + (x dy/dx + y) + 2y dy/dx = 0",
      "A1: Correct implicit differentiation of each term (product rule on xy, chain rule on y²)",
      "M1: Rearrange: dy/dx (x + 2y) = −(2x + y)",
      "A1: dy/dx = −(2x+y)/(x+2y)",
      "Final answer: gradient at (1, 2) is −4/5",
    ],
    topic: "Differentiation (Year 2)",
  },
  {
    question: "A spherical balloon is inflated so that its volume V cm³ increases at a constant rate of 200 cm³ per second. Given V = (4/3)πr³, where r is the radius in cm, find the rate at which the radius is increasing at the instant when r = 10 cm. Give your answer to 3 significant figures.",
    marks: 6,
    markScheme: [
      "M1: dV/dr = 4πr²",
      "M1: Uses the chain rule: dr/dt = dV/dt ÷ dV/dr",
      "M1: Substitutes r = 10 into dV/dr: dV/dr = 400π",
      "M1: dr/dt = 200/(400π)",
      "A1: dr/dt = 1/(2π) (exact form)",
      "Final answer: dr/dt ≈ 0.159 cm/s (3 sf)",
    ],
    topic: "Differentiation (Year 2)",
  },

  // ---------------------------------------------------- Numerical Methods
  {
    question: "Show that f(x) = x³ + 2x − 9 has a root between x = 1.7 and x = 1.8.",
    marks: 4,
    markScheme: [
      "B1: f(1.7) = −0.687 (3 dp)",
      "B1: f(1.8) = 0.432 (3 dp)",
      "M1: States f is continuous and f(1.7) and f(1.8) have opposite signs",
      "Final answer: Since there is a change of sign and f is continuous on [1.7, 1.8], a root lies in this interval",
    ],
    topic: "Numerical Methods",
  },
  {
    question: "The equation x³ − 3x − 5 = 0 has a root near x = 2. (a) Show that the equation can be rearranged to x = (3x+5)^(1/3). (b) Using the iteration xₙ₊₁ = (3xₙ+5)^(1/3) with x₀ = 2, find x₁, x₂ and x₃, giving your answers to 4 decimal places.",
    marks: 5,
    markScheme: [
      "M1: Rearranges x³ − 3x − 5 = 0 to x³ = 3x + 5, then x = (3x+5)^(1/3)",
      "M1: x₁ = (3(2)+5)^(1/3) = 11^(1/3)",
      "A1: x₁ = 2.2240",
      "M1: x₂ = (3(2.2240)+5)^(1/3) = 11.6720^(1/3), x₃ = (3(2.2684)+5)^(1/3) = 11.8052^(1/3)",
      "Final answer: x₁ = 2.2240, x₂ = 2.2684, x₃ = 2.2770 (4 dp)",
    ],
    topic: "Numerical Methods",
  },
  {
    question: "f(x) = x³ − 4x + 1. (a) Show that f(x) = 0 has a root between x = 1 and x = 2. (b) Using x₀ = 1.9, apply the Newton-Raphson method once to find x₁, giving your answer to 4 decimal places. (c) Explain why x₀ = 1.15 would be a poor choice of starting value for the Newton-Raphson method applied to this f(x).",
    marks: 7,
    markScheme: [
      "B1: f(1) = −2, f(2) = 1",
      "B1: Since f(1) < 0 and f(2) > 0 (sign change) and f is continuous, a root lies in (1,2)",
      "M1: f'(x) = 3x² − 4",
      "M1: f(1.9) = 0.259, f'(1.9) = 6.83",
      "M1: x₁ = 1.9 − 0.259/6.83",
      "A1: x₁ = 1.8621 (4 dp)",
      "Final answer: (c) x₀ = 1.15 is close to the stationary point x = 1.1547 (where f'(x) = 0), so f'(1.15) ≈ −0.0325 is close to zero, making the tangent nearly flat, so the next iterate would be dragged far from the root rather than converging",
    ],
    topic: "Numerical Methods",
  },
  {
    question: "By evaluating f(x) = x³ − 4x + 1 at x = 1.8605 and x = 1.8615, show that the root of f(x) = 0 near x = 1.86 is accurate to x = 1.861, correct to 3 decimal places.",
    marks: 3,
    markScheme: [
      "M1: f(1.8605) = −0.00195 (negative)",
      "M1: f(1.8615) = +0.00444 (positive)",
      "Final answer: Since f(1.8605) < 0 and f(1.8615) > 0, there is a sign change in [1.8605, 1.8615], confirming the root is x = 1.861 correct to 3 decimal places",
    ],
    topic: "Numerical Methods",
  },

  // ---------------------------------------------------- Integration (Year 2)
  {
    question: "Use the substitution u = 2x − 1 to find ∫(2x−1)⁵ dx.",
    marks: 4,
    markScheme: [
      "M1: u = 2x−1, du/dx = 2, so dx = du/2",
      "M1: Integral becomes ∫u⁵ (1/2) du",
      "A1: = u⁶/12 + c",
      "Final answer: (2x−1)⁶/12 + c",
    ],
    topic: "Integration (Year 2)",
  },
  {
    question: "Find the exact value of ∫ from 1 to e of x ln x dx.",
    marks: 6,
    markScheme: [
      "M1: u = ln x, dv/dx = x, so du/dx = 1/x, v = x²/2",
      "M1: ∫x lnx dx = (x²/2)lnx − ∫(x²/2)(1/x) dx",
      "A1: = (x²/2)lnx − x²/4 (+c)",
      "M1: Substitutes limits: at x=e, (e²/2)(1) − e²/4 = e²/4; at x=1, 0 − 1/4 = −1/4",
      "A1: Definite value = e²/4 − (−1/4)",
      "Final answer: (e² + 1)/4",
    ],
    topic: "Integration (Year 2)",
  },
  {
    question: "Given that 1/((x+1)(x+3)) ≡ A/(x+1) + B/(x+3), find the values of A and B, and hence find ∫ 1/((x+1)(x+3)) dx.",
    marks: 5,
    markScheme: [
      "M1: 1 = A(x+3) + B(x+1)",
      "A1: A = 1/2, B = −1/2 (using x = −1 and x = −3)",
      "M1: ∫[ (1/2)/(x+1) − (1/2)/(x+3) ] dx",
      "A1: = (1/2)ln|x+1| − (1/2)ln|x+3| (+c)",
      "Final answer: (1/2) ln|(x+1)/(x+3)| + c",
    ],
    topic: "Integration (Year 2)",
  },
  {
    question: "The variables x and y satisfy the differential equation dy/dx = 2y/(x(x+2)), for x > 0, y > 0. Given that y = 3 when x = 1, find y in terms of x, using partial fractions on 1/(x(x+2)).",
    marks: 8,
    markScheme: [
      "M1: Separates variables to get ∫(1/y) dy = ∫2/(x(x+2)) dx",
      "M1: Sets up partial fractions: 1/(x(x+2)) ≡ A/x + B/(x+2), so 1 = A(x+2) + Bx",
      "A1: A = 1/2",
      "A1: B = −1/2",
      "M1: Integrates both sides: ln y = ln x − ln(x+2) + c",
      "M1: Combines logs and exponentiates: y = k·x/(x+2)",
      "M1: Uses y=3, x=1 to find k = 9",
      "Final answer: y = 9x/(x+2)",
    ],
    topic: "Integration (Year 2)",
  },

  // ---------------------------------------------------- Vectors (3D)
  {
    question: "Points A and B have position vectors a = 2i − j + 3k and b = 5i + 2j − k. (a) Find the vector AB. (b) Write down a vector equation of the line through A and B. (c) Determine whether the point C, with position vector 8i + 5j − 5k, lies on this line.",
    marks: 5,
    markScheme: [
      "M1: AB = b − a = 3i + 3j − 4k",
      "B1: r = (2i − j + 3k) + t(3i + 3j − 4k)",
      "M1: Sets 2+3t=8, −1+3t=5, 3−4t=−5 and solves for t in each",
      "A1: t = 2 satisfies all three equations",
      "Final answer: Yes, C lies on the line (at t = 2)",
    ],
    topic: "Vectors (3D)",
  },
  {
    question: "Line l1 has vector equation r = (1,2,3) + s(1,-1,2). Line l2 has vector equation r = (4,-1,7) + t(2,1,-1). Determine whether l1 and l2 intersect, and if so, find the point of intersection.",
    marks: 6,
    markScheme: [
      "M1: Checks direction vectors (1,−1,2) and (2,1,−1) are not parallel (not scalar multiples)",
      "M1: Equates x-components: 1+s = 4+2t, giving s−2t=3",
      "M1: Equates y-components: 2−s = −1+t, giving s+t=3",
      "A1: Solves simultaneously: s = 3, t = 0",
      "M1: Substitutes into the z-components to check: 3+2(3) = 9, but 7−0 = 7, so LHS ≠ RHS",
      "Final answer: The lines do not intersect and are not parallel, so l1 and l2 are skew",
    ],
    topic: "Vectors (3D)",
  },
  {
    question: "Points P(1, 2, -3) and Q(4, -2, 9) are given. Find the distance PQ.",
    marks: 4,
    markScheme: [
      "M1: PQ = (4−1, −2−2, 9−(−3)) = (3, −4, 12)",
      "M1: |PQ| = √(3² + (−4)² + 12²)",
      "A1: = √(9+16+144) = √169",
      "Final answer: PQ = 13",
    ],
    topic: "Vectors (3D)",
  },
  {
    question: "The lines l1 and l2 have vector equations r = (0i + 2j + 4k) + λ(i − k) and r = (5i − j − k) + μ(−i + j + k). (a) Show that l1 and l2 intersect, and find the position vector of the point of intersection. (b) Find the acute angle between the lines, giving your answer to 1 decimal place.",
    marks: 8,
    markScheme: [
      "M1: Equates components to form 3 equations: λ = 5−μ (x), 2 = −1+μ (y), 4−λ = −1+μ (z)",
      "M1: Solves the y-equation: μ = 3",
      "A1: Substitutes into the x-equation: λ = 5−3 = 2",
      "M1: Checks consistency in the z-equation: 4−2 = 2 and −1+3 = 2, both equal, confirming intersection",
      "A1: Point of intersection has position vector 2i + 2j + 2k",
      "M1: Finds d1·d2 = (1)(−1)+(0)(1)+(−1)(1) = −2, |d1| = √2, |d2| = √3",
      "M1: cosθ = |−2|/(√2×√3) = 2/√6",
      "Final answer: θ ≈ 35.3°",
    ],
    topic: "Vectors (3D)",
  },
]
