/*
  Revision content per subject: notes-driven flashcards, MCQ, and exam
  questions with mark schemes, built spec-accurate for the subjects covered:
  Maths (Edexcel A-level), Economics (Edexcel A A-level), and Computer Science
  (OCR H446 A-level).

  Every flashcard and exam question carries a `topic` (chapter) field, and
  packs with a real specification structure also carry `groups`: an ordered
  outline (section -> subsection -> topic titles) used to build a real chapter
  picker instead of a flat wall of chips.
*/
import { EXTRA_REVISION } from './library-extra'
import { MATHS_MCQ } from './maths-mcq'
import { MATHS_FLASHCARDS_2, MATHS_MCQ_2, MATHS_EXAM_2 } from './maths-extra-2'
import { CS_EXTRA_MCQ, CS_EXTRA_EXAM } from './cs-extra'
import { CS_EXTRA_MCQ_2, CS_EXTRA_EXAM_2, CS_EXTRA_FLASHCARDS_2 } from './cs-extra-2'
import { CS_NOTES } from './cs-notes'
import { CS_ESSAYS } from './cs-essays'
import { CS_PROGRAMMING } from './cs-programming'
import { CS_PROGRAMMING_2 } from './cs-programming-2'
import { mergeNotes } from './notes-merge'
import { MATHS_EXAM_PURE } from './maths-exams-pure'
import { MATHS_EXAM_APPLIED } from './maths-exams-applied'
import { MATHS_EXTRA_WORKED } from './maths-notes-extra'
import { MATHS_EXTRA_WORKED_2 } from './maths-notes-extra2'
import { CS_EXTRA_DEPTH } from './cs-notes-extra'
import { CS_COMP1_NOTES } from './cs-notes-comp1'
import { CS_COMP2_NOTES } from './cs-notes-comp2'
import { CS_COMP3_NOTES } from './cs-notes-comp3'
import { CS_EXTRA_DEPTH_2 } from './cs-notes-depth-2'
import { CS_EXTRA_FLASHCARDS_4, CS_EXTRA_MCQ_4, CS_EXTRA_EXAM_4 } from './cs-extra-4'
import { CS_PROCESSOR_NOTES } from './cs-notes-processor'
import { CS_PROCESSOR_FLASHCARDS } from './cs-flashcards-processor'
import { ECON_NOTES } from './econ-full'
import { ECON_THEME2_NOTES } from './econ-notes-theme2'
import { ECON_THEME2B_NOTES } from './econ-notes-theme2b'
import { ECON_THEME2C_NOTES } from './econ-notes-theme2c'
import { ECON_THEME1A_NOTES } from './econ-notes-theme1a'
import { ECON_THEME1B_NOTES } from './econ-notes-theme1b'
import { ECON_THEME3A_NOTES } from './econ-notes-theme3a'
import { ECON_THEME3B_NOTES } from './econ-notes-theme3b'
import { ECON_THEME4_NOTES } from './econ-notes-theme4'
import { ECON_EXAM_2 } from './econ-exam-2'
import { ECON_EXAM_3 } from './econ-exam-3'
import { ECON_ESSAYS } from './econ-essays'
import { ECON_ESSAYS_2 } from './econ-essays-2'
import { ECON_ESSAY_BANK } from './econ-essay-bank'
import { ECON_ESSAY_BANK_2 } from './econ-essay-bank-2'
import { ECON_FIRM_CARDS } from './econ-flashcards-firm'
import { ECON_FIRM_MASTER_NOTES } from './econ-notes-firm-master'
import { ECON_MCQ_2 } from './econ-mcq-2'
import { ECON_EXTRA_DEPTH } from './econ-notes-extra'
import { ECON_EXTRA_DEPTH_2 } from './econ-notes-extra2'
import { ECON_GAP_NOTES } from './econ-notes-gaps'
import { ECON_GAP_NOTES_2, ECON_SURPLUS_FLASHCARDS, ECON_SURPLUS_MCQ, ECON_SURPLUS_EXAM } from './econ-notes-gaps-2'
import { ECON_EXTRA_FLASHCARDS_4, ECON_EXTRA_MCQ_4, ECON_EXTRA_EXAM_4 } from './econ-extra-4'
import { withDiagrams } from './econ-diagrams'
import {
  tagWithDiagrams,
  appendDiagramsToNotes,
  MATHS_CHAPTER_DIAGRAMS,
  CS_CHAPTER_DIAGRAMS,
} from './diagram-map'
import { ECON_DIAGRAM_CARDS } from './econ-diagram-cards'
import { MATHS_DIAGRAM_CARDS, CS_DIAGRAM_CARDS } from './diagram-cards'
import { MATHS_NOTES } from './maths-notes'
import { MATHS_NOTES_2 } from './maths-notes-2'
import { MATHS_PURE1_NOTES } from './maths-notes-pure1'
import { MATHS_PURE2_NOTES } from './maths-notes-pure2'
import { MATHS_APPLIED_NOTES } from './maths-notes-applied'
import { MATHS_MCQ_3 } from './maths-mcq-3'
import { CS_EXAM_3, CS_MCQ_3 } from './cs-extra-3'
import { SUBJECT_PACKS } from './subjects'

const CORE_REVISION = [
  {
    "id": "maths",
    "name": "Maths",
    "topics": [
      "Algebraic Expressions",
      "Quadratics",
      "Equations and Inequalities",
      "Graphs and Transformations",
      "Straight Line Graphs",
      "Circles",
      "Algebraic Methods (Proof & Division)",
      "The Binomial Expansion",
      "Trigonometric Ratios",
      "Trigonometric Identities and Equations",
      "Vectors (2D)",
      "Differentiation",
      "Integration",
      "Exponentials and Logarithms",
      "Algebraic Methods (Partial Fractions)",
      "Functions and Graphs",
      "Sequences and Series",
      "The Binomial Expansion (General n)",
      "Radians",
      "Trigonometric Functions",
      "Trigonometry and Modelling",
      "Parametric Equations",
      "Differentiation (Year 2)",
      "Numerical Methods",
      "Integration (Year 2)",
      "Vectors (3D)",
      "Statistical Sampling",
      "Data Presentation and Interpretation",
      "Probability",
      "Statistical Distributions (Binomial)",
      "Statistical Hypothesis Testing",
      "Regression, Correlation and Hypothesis Testing",
      "Conditional Probability",
      "The Normal Distribution",
      "Modelling in Mechanics",
      "Constant Acceleration (SUVAT)",
      "Forces and Newton's Laws",
      "Variable Acceleration",
      "Moments",
      "Forces and Friction",
      "Projectiles",
      "Application of Forces",
      "Further Kinematics"
    ],
    "flashcards": [
      {
        "front": "What is a¹ᐟⁿ?",
        "back": "The nth root of a: ⁿ√a",
        "topic": "Algebraic Expressions"
      },
      {
        "front": "What is aᵐᐟⁿ?",
        "back": "(ⁿ√a)ᵐ: the nth root of a, raised to power m",
        "topic": "Algebraic Expressions"
      },
      {
        "front": "How do you rationalise 1/√a?",
        "back": "Multiply top and bottom by √a, giving √a/a",
        "topic": "Algebraic Expressions"
      },
      {
        "front": "How do you rationalise 1/(a+√b)?",
        "back": "Multiply top and bottom by the conjugate (a-√b)",
        "topic": "Algebraic Expressions"
      },
      {
        "front": "What is the rule for (aᵐ)ⁿ?",
        "back": "aᵐⁿ: multiply the powers",
        "topic": "Algebraic Expressions"
      },
      {
        "front": "Expand (a+b)(a-b)",
        "back": "a² - b² (difference of two squares)",
        "topic": "Algebraic Expressions"
      },
      {
        "front": "Is √a + √b equal to √(a+b)?",
        "back": "No: surds cannot be added under one root like this",
        "topic": "Algebraic Expressions"
      },
      {
        "front": "What should you always do first when factorising?",
        "back": "Take out the highest common factor",
        "topic": "Algebraic Expressions"
      },
      {
        "front": "a⁰ = ?",
        "back": "1 (for any non-zero a)",
        "topic": "Algebraic Expressions"
      },
      {
        "front": "a⁻ⁿ = ?",
        "back": "1/aⁿ",
        "topic": "Algebraic Expressions"
      },
      {
        "front": "Quadratic formula?",
        "back": "x = (-b ± √(b² - 4ac)) / 2a",
        "topic": "Quadratics"
      },
      {
        "front": "Discriminant condition for two real roots?",
        "back": "b² - 4ac > 0",
        "topic": "Quadratics"
      },
      {
        "front": "Discriminant condition for a repeated root?",
        "back": "b² - 4ac = 0",
        "topic": "Quadratics"
      },
      {
        "front": "Discriminant condition for no real roots?",
        "back": "b² - 4ac < 0",
        "topic": "Quadratics"
      },
      {
        "front": "Completed square form of ax² + bx + c?",
        "back": "a(x + b/2a)² + c - b²/(4a)",
        "topic": "Quadratics"
      },
      {
        "front": "Coordinates of the turning point from completed square a(x+p)²+q?",
        "back": "(-p, q)",
        "topic": "Quadratics"
      },
      {
        "front": "How do you solve a linear-quadratic simultaneous equation pair?",
        "back": "Substitute the linear equation into the quadratic equation",
        "topic": "Quadratics"
      },
      {
        "front": "Shape of graph when a<0 in ax²+bx+c?",
        "back": "Maximum, ∩ shape (opens downward)",
        "topic": "Quadratics"
      },
      {
        "front": "When do you flip an inequality sign?",
        "back": "When multiplying or dividing both sides by a negative number",
        "topic": "Equations and Inequalities"
      },
      {
        "front": "How do you solve x² - 4 > 0?",
        "back": "Find roots (x=±2), sketch the graph, region above x-axis is x<-2 or x>2",
        "topic": "Equations and Inequalities"
      },
      {
        "front": "Line style for a strict inequality (< or >) on a graph?",
        "back": "Dashed line (boundary not included)",
        "topic": "Equations and Inequalities"
      },
      {
        "front": "Line style for ≤ or ≥ on a graph?",
        "back": "Solid line (boundary included)",
        "topic": "Equations and Inequalities"
      },
      {
        "front": "For a \"between the roots\" quadratic inequality solution, what shape must the region be?",
        "back": "a < x < b, i.e. inequality is satisfied below the x-axis between the two roots",
        "topic": "Equations and Inequalities"
      },
      {
        "front": "How do you solve simultaneous linear-quadratic equations?",
        "back": "Substitute the linear equation into the quadratic and solve for one variable first",
        "topic": "Equations and Inequalities"
      },
      {
        "front": "Effect of y = f(x - a)?",
        "back": "Translation right by a",
        "topic": "Graphs and Transformations"
      },
      {
        "front": "Effect of y = f(x) - a on a graph",
        "back": "Translation down by a",
        "topic": "Graphs and Transformations"
      },
      {
        "front": "Transformation for y = f(-x)?",
        "back": "Reflection in the y-axis",
        "topic": "Graphs and Transformations"
      },
      {
        "front": "Transformation for y = -f(x)?",
        "back": "Reflection in the x-axis",
        "topic": "Graphs and Transformations"
      },
      {
        "front": "Effect of y = f(2x)?",
        "back": "Horizontal stretch, scale factor 1/2 (squash toward y-axis)",
        "topic": "Graphs and Transformations"
      },
      {
        "front": "Effect of y = 3f(x)?",
        "back": "Vertical stretch, scale factor 3",
        "topic": "Graphs and Transformations"
      },
      {
        "front": "Shape of y=x³?",
        "back": "S-shaped curve through the origin",
        "topic": "Graphs and Transformations"
      },
      {
        "front": "What does a repeated root (x-a)² mean for a cubic graph?",
        "back": "The curve touches but does not cross the x-axis at x=a",
        "topic": "Graphs and Transformations"
      },
      {
        "front": "Asymptotes of y=1/x?",
        "back": "x=0 (vertical) and y=0 (horizontal)",
        "topic": "Graphs and Transformations"
      },
      {
        "front": "Condition for two lines to be perpendicular?",
        "back": "m₁ × m₂ = -1",
        "topic": "Straight Line Graphs"
      },
      {
        "front": "Equation of a line through (x₁,y₁) with gradient m?",
        "back": "y - y₁ = m(x - x₁)",
        "topic": "Straight Line Graphs"
      },
      {
        "front": "Condition for two lines to be parallel?",
        "back": "Same gradient (m₁ = m₂)",
        "topic": "Straight Line Graphs"
      },
      {
        "front": "Midpoint formula?",
        "back": "((x₁+x₂)/2, (y₁+y₂)/2)",
        "topic": "Straight Line Graphs"
      },
      {
        "front": "Distance between two points formula?",
        "back": "√((x₂-x₁)² + (y₂-y₁)²)",
        "topic": "Straight Line Graphs"
      },
      {
        "front": "What does the gradient represent in a real-world linear model?",
        "back": "The rate of change (e.g. cost per item)",
        "topic": "Straight Line Graphs"
      },
      {
        "front": "How do you find the perpendicular gradient given m?",
        "back": "Take the negative reciprocal: -1/m",
        "topic": "Straight Line Graphs"
      },
      {
        "front": "Equation of circle centre (a,b) radius r?",
        "back": "(x-a)² + (y-b)² = r²",
        "topic": "Circles"
      },
      {
        "front": "Relationship between tangent and radius?",
        "back": "Perpendicular at the point of contact",
        "topic": "Circles"
      },
      {
        "front": "Angle in a semicircle?",
        "back": "90°",
        "topic": "Circles"
      },
      {
        "front": "What does the perpendicular from the centre to a chord do?",
        "back": "Bisects the chord",
        "topic": "Circles"
      },
      {
        "front": "How do you find the centre from x²+y²+2fx+2gy+c=0 form?",
        "back": "Complete the square on x and y terms separately",
        "topic": "Circles"
      },
      {
        "front": "Length of two tangents from the same external point?",
        "back": "Equal",
        "topic": "Circles"
      },
      {
        "front": "How do you find the equation of a tangent at a point on a circle?",
        "back": "Find the perpendicular gradient to the radius at that point, then use y-y₁=m(x-x₁)",
        "topic": "Circles"
      },
      {
        "front": "Factor theorem statement?",
        "back": "If f(a) = 0, then (x - a) is a factor of f(x)",
        "topic": "Algebraic Methods (Proof & Division)"
      },
      {
        "front": "Quickest way to disprove a general statement?",
        "back": "Find a single counter-example",
        "topic": "Algebraic Methods (Proof & Division)"
      },
      {
        "front": "Remainder theorem statement?",
        "back": "The remainder when f(x) is divided by (x-a) is f(a)",
        "topic": "Algebraic Methods (Proof & Division)"
      },
      {
        "front": "What values should you try first when using the factor theorem?",
        "back": "Factors of the constant term of f(x)",
        "topic": "Algebraic Methods (Proof & Division)"
      },
      {
        "front": "What is proof by exhaustion?",
        "back": "Checking every possible case individually to prove a statement true",
        "topic": "Algebraic Methods (Proof & Division)"
      },
      {
        "front": "Formula for ⁿCᵣ?",
        "back": "n! / (r!(n-r)!)",
        "topic": "The Binomial Expansion"
      },
      {
        "front": "General term in the expansion of (a+b)ⁿ?",
        "back": "ⁿCᵣ aⁿ⁻ʳ bʳ",
        "topic": "The Binomial Expansion"
      },
      {
        "front": "What happens to signs in (a-b)ⁿ expansion?",
        "back": "Terms alternate in sign (+,-,+,-…)",
        "topic": "The Binomial Expansion"
      },
      {
        "front": "In expanding (2+3x)⁵, what must you remember about the 3x term?",
        "back": "Both the 3 AND the x get raised to the power r",
        "topic": "The Binomial Expansion"
      },
      {
        "front": "What row of Pascal's triangle gives coefficients for (a+b)⁴?",
        "back": "Row 4: 1, 4, 6, 4, 1",
        "topic": "The Binomial Expansion"
      },
      {
        "front": "What is ⁿC₀ always equal to?",
        "back": "1",
        "topic": "The Binomial Expansion"
      },
      {
        "front": "Sine rule?",
        "back": "a/sinA = b/sinB = c/sinC",
        "topic": "Trigonometric Ratios"
      },
      {
        "front": "Cosine rule (for finding a side)?",
        "back": "a² = b² + c² - 2bc cosA",
        "topic": "Trigonometric Ratios"
      },
      {
        "front": "Cosine rule rearranged for finding an angle?",
        "back": "cosA = (b²+c²-a²)/(2bc)",
        "topic": "Trigonometric Ratios"
      },
      {
        "front": "Area of a triangle using trig?",
        "back": "½ab sinC",
        "topic": "Trigonometric Ratios"
      },
      {
        "front": "Exact value of sin(30°)?",
        "back": "1/2",
        "topic": "Trigonometric Ratios"
      },
      {
        "front": "Exact value of cos(45°)?",
        "back": "√2/2 (= 1/√2)",
        "topic": "Trigonometric Ratios"
      },
      {
        "front": "Exact value of tan(60°)?",
        "back": "√3",
        "topic": "Trigonometric Ratios"
      },
      {
        "front": "When should you use the cosine rule instead of the sine rule?",
        "back": "When you know 2 sides + included angle, or all 3 sides",
        "topic": "Trigonometric Ratios"
      },
      {
        "front": "What is the \"ambiguous case\" in the sine rule?",
        "back": "When finding an angle, there can be two valid answers: θ and 180°-θ",
        "topic": "Trigonometric Ratios"
      },
      {
        "front": "Pythagorean trig identity?",
        "back": "sin²θ + cos²θ = 1",
        "topic": "Trigonometric Identities and Equations"
      },
      {
        "front": "tan θ in terms of sin and cos?",
        "back": "sin θ / cos θ",
        "topic": "Trigonometric Identities and Equations"
      },
      {
        "front": "For sin θ = k, if principal value is θ, what is the second solution (0-360°)?",
        "back": "180° - θ",
        "topic": "Trigonometric Identities and Equations"
      },
      {
        "front": "For cos θ = k, if principal value is θ, what is the second solution (0-360°)?",
        "back": "360° - θ",
        "topic": "Trigonometric Identities and Equations"
      },
      {
        "front": "For tan θ = k, what is the pattern of solutions?",
        "back": "θ, θ+180°, θ+360°, … (period 180°)",
        "topic": "Trigonometric Identities and Equations"
      },
      {
        "front": "How do you solve a quadratic in sin θ (e.g. 2sin²θ-sin θ-1=0)?",
        "back": "Substitute x=sin θ, solve the quadratic in x, then solve sin θ=x for each value",
        "topic": "Trigonometric Identities and Equations"
      },
      {
        "front": "Magnitude of vector (a,b)?",
        "back": "√(a² + b²)",
        "topic": "Vectors (2D)"
      },
      {
        "front": "How do you find a unit vector in the direction of v?",
        "back": "Divide v by its magnitude",
        "topic": "Vectors (2D)"
      },
      {
        "front": "How do you find vector AB given position vectors a and b?",
        "back": "AB = b - a",
        "topic": "Vectors (2D)"
      },
      {
        "front": "What does it mean for two vectors to be parallel?",
        "back": "One is a scalar multiple of the other",
        "topic": "Vectors (2D)"
      },
      {
        "front": "What two things must you show to prove three points are collinear?",
        "back": "The vectors between them are parallel AND share a common point",
        "topic": "Vectors (2D)"
      },
      {
        "front": "Relationship between AB and BA?",
        "back": "BA = -AB (opposite direction, same magnitude)",
        "topic": "Vectors (2D)"
      },
      {
        "front": "Derivative of xⁿ?",
        "back": "nxⁿ⁻¹",
        "topic": "Differentiation"
      },
      {
        "front": "How do you find stationary points?",
        "back": "Solve dy/dx = 0",
        "topic": "Differentiation"
      },
      {
        "front": "Second derivative test for a minimum?",
        "back": "d²y/dx² > 0",
        "topic": "Differentiation"
      },
      {
        "front": "Second derivative test for a maximum?",
        "back": "d²y/dx² < 0",
        "topic": "Differentiation"
      },
      {
        "front": "Gradient of the normal if the tangent gradient is m?",
        "back": "-1/m",
        "topic": "Differentiation"
      },
      {
        "front": "Condition for a function to be increasing?",
        "back": "dy/dx > 0",
        "topic": "Differentiation"
      },
      {
        "front": "What do you rewrite √x as before differentiating?",
        "back": "x¹ᐟ²",
        "topic": "Differentiation"
      },
      {
        "front": "What is the derivative of a constant?",
        "back": "0",
        "topic": "Differentiation"
      },
      {
        "front": "Integral of xⁿ?",
        "back": "xⁿ⁺¹/(n+1) + c",
        "topic": "Integration"
      },
      {
        "front": "What does a definite integral represent geometrically?",
        "back": "The (signed) area under the curve between the limits",
        "topic": "Integration"
      },
      {
        "front": "Why is +c needed for indefinite integrals?",
        "back": "Because differentiating any constant gives 0, so it can't be recovered",
        "topic": "Integration"
      },
      {
        "front": "How do you find c given a point on the curve?",
        "back": "Substitute the point's x and y values into the integrated equation and solve",
        "topic": "Integration"
      },
      {
        "front": "What must you do if a curve crosses the x-axis within the limits of a definite integral?",
        "back": "Split the integral at the crossing point and take the modulus of any negative area",
        "topic": "Integration"
      },
      {
        "front": "Formula for evaluating a definite integral?",
        "back": "[F(x)]ᵇₐ = F(b) - F(a)",
        "topic": "Integration"
      },
      {
        "front": "log(a) + log(b) = ?",
        "back": "log(ab)",
        "topic": "Exponentials and Logarithms"
      },
      {
        "front": "k·log(a) = ?",
        "back": "log(aᵏ)",
        "topic": "Exponentials and Logarithms"
      },
      {
        "front": "Inverse function of eˣ?",
        "back": "ln(x)",
        "topic": "Exponentials and Logarithms"
      },
      {
        "front": "log(a) - log(b) = ?",
        "back": "log(a/b)",
        "topic": "Exponentials and Logarithms"
      },
      {
        "front": "What is logₐ1?",
        "back": "0",
        "topic": "Exponentials and Logarithms"
      },
      {
        "front": "What is logₐa?",
        "back": "1",
        "topic": "Exponentials and Logarithms"
      },
      {
        "front": "y-intercept of y=eˣ?",
        "back": "(0,1)",
        "topic": "Exponentials and Logarithms"
      },
      {
        "front": "What must be true of the argument of any log for a solution to be valid?",
        "back": "It must be positive (>0)",
        "topic": "Exponentials and Logarithms"
      },
      {
        "front": "Is log(a+b) equal to log(a)+log(b)?",
        "back": "No: this is a common mistake; the log laws only work for multiplication/division inside the log",
        "topic": "Exponentials and Logarithms"
      },
      {
        "front": "Partial fraction form for a repeated linear factor (x-a)²?",
        "back": "A/(x-a) + B/(x-a)²",
        "topic": "Algebraic Methods (Partial Fractions)"
      },
      {
        "front": "What does fg(x) mean?",
        "back": "Apply g first, then apply f to the result",
        "topic": "Functions and Graphs"
      },
      {
        "front": "How do you find an inverse function?",
        "back": "Swap x and y, then rearrange for y",
        "topic": "Functions and Graphs"
      },
      {
        "front": "nth term of an arithmetic sequence?",
        "back": "a + (n-1)d",
        "topic": "Sequences and Series"
      },
      {
        "front": "Sum of a geometric series (finite)?",
        "back": "Sₙ = a(1-rⁿ)/(1-r)",
        "topic": "Sequences and Series"
      },
      {
        "front": "Condition for a geometric series to converge?",
        "back": "|r| < 1",
        "topic": "Sequences and Series"
      },
      {
        "front": "Sum to infinity formula?",
        "back": "S∞ = a/(1-r)",
        "topic": "Sequences and Series"
      },
      {
        "front": "Validity condition for (1+x)ⁿ expansion (n not a positive integer)?",
        "back": "|x| < 1",
        "topic": "The Binomial Expansion (General n)"
      },
      {
        "front": "Arc length formula (radians)?",
        "back": "s = rθ",
        "topic": "Radians"
      },
      {
        "front": "Sector area formula (radians)?",
        "back": "A = ½r²θ",
        "topic": "Radians"
      },
      {
        "front": "Small angle approx for cos θ?",
        "back": "1 - θ²/2",
        "topic": "Radians"
      },
      {
        "front": "sec θ = ?",
        "back": "1/cos θ",
        "topic": "Trigonometric Functions"
      },
      {
        "front": "1 + tan²θ = ?",
        "back": "sec²θ",
        "topic": "Trigonometric Functions"
      },
      {
        "front": "Range of arcsin(x)?",
        "back": "-90° ≤ y ≤ 90° (or -π/2 to π/2)",
        "topic": "Trigonometric Functions"
      },
      {
        "front": "Formula for R in a sin θ + b cos θ = R sin(θ+α)?",
        "back": "R = √(a² + b²)",
        "topic": "Trigonometry and Modelling"
      },
      {
        "front": "Maximum value of R sin(θ+α)?",
        "back": "R (when sin(θ+α)=1)",
        "topic": "Trigonometry and Modelling"
      },
      {
        "front": "How do you differentiate parametric equations?",
        "back": "dy/dx = (dy/dt) ÷ (dx/dt)",
        "topic": "Parametric Equations"
      },
      {
        "front": "Product rule?",
        "back": "d/dx(uv) = u'v + uv'",
        "topic": "Differentiation (Year 2)"
      },
      {
        "front": "Quotient rule?",
        "back": "d/dx(u/v) = (u'v - uv')/v²",
        "topic": "Differentiation (Year 2)"
      },
      {
        "front": "Derivative of ln(x)?",
        "back": "1/x",
        "topic": "Differentiation (Year 2)"
      },
      {
        "front": "Derivative of sin(x)?",
        "back": "cos(x)",
        "topic": "Differentiation (Year 2)"
      },
      {
        "front": "Newton-Raphson formula?",
        "back": "xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)",
        "topic": "Numerical Methods"
      },
      {
        "front": "How do you locate a root using change of sign?",
        "back": "Find a,b where f(a) and f(b) have opposite signs",
        "topic": "Numerical Methods"
      },
      {
        "front": "Integration by parts formula?",
        "back": "∫u(dv/dx)dx = uv - ∫v(du/dx)dx",
        "topic": "Integration (Year 2)"
      },
      {
        "front": "Integral of 1/x?",
        "back": "ln|x| + c",
        "topic": "Integration (Year 2)"
      },
      {
        "front": "Integral of eˣ?",
        "back": "eˣ + c",
        "topic": "Integration (Year 2)"
      },
      {
        "front": "Magnitude of 3D vector (a,b,c)?",
        "back": "√(a²+b²+c²)",
        "topic": "Vectors (3D)"
      },
      {
        "front": "Vector equation of a line through point a with direction b?",
        "back": "r = a + tb",
        "topic": "Vectors (3D)"
      },
      {
        "front": "What is stratified sampling?",
        "back": "Sampling proportionally from each group (stratum) in the population",
        "topic": "Statistical Sampling"
      },
      {
        "front": "Main disadvantage of a census?",
        "back": "Time-consuming and expensive to survey the whole population",
        "topic": "Statistical Sampling"
      },
      {
        "front": "Formula for frequency density in a histogram?",
        "back": "frequency ÷ class width",
        "topic": "Data Presentation and Interpretation"
      },
      {
        "front": "Standard outlier boundary using IQR?",
        "back": "Below Q1 - 1.5×IQR or above Q3 + 1.5×IQR",
        "topic": "Data Presentation and Interpretation"
      },
      {
        "front": "Addition rule for P(A∪B)?",
        "back": "P(A) + P(B) - P(A∩B)",
        "topic": "Probability"
      },
      {
        "front": "Condition for independence?",
        "back": "P(A∩B) = P(A) × P(B)",
        "topic": "Probability"
      },
      {
        "front": "Conditions for a binomial distribution?",
        "back": "Fixed trials, two outcomes, constant p, independent trials",
        "topic": "Statistical Distributions (Binomial)"
      },
      {
        "front": "Mean of B(n,p)?",
        "back": "np",
        "topic": "Statistical Distributions (Binomial)"
      },
      {
        "front": "Formula for P(X=r) in B(n,p)?",
        "back": "ⁿCᵣ pʳ(1-p)ⁿ⁻ʳ",
        "topic": "Statistical Distributions (Binomial)"
      },
      {
        "front": "What determines a one-tailed vs two-tailed test?",
        "back": "The alternative hypothesis H1 (inequality = two-tailed, < or > = one-tailed)",
        "topic": "Statistical Hypothesis Testing"
      },
      {
        "front": "What do you do if the p-value < significance level?",
        "back": "Reject H0, evidence supports H1",
        "topic": "Statistical Hypothesis Testing"
      },
      {
        "front": "Range of PMCC values?",
        "back": "-1 to 1",
        "topic": "Regression, Correlation and Hypothesis Testing"
      },
      {
        "front": "Why is extrapolation risky in regression?",
        "back": "No data to support the relationship holding outside the observed range",
        "topic": "Regression, Correlation and Hypothesis Testing"
      },
      {
        "front": "Formula for P(A|B)?",
        "back": "P(A∩B) / P(B)",
        "topic": "Conditional Probability"
      },
      {
        "front": "Standardisation formula for the normal distribution?",
        "back": "Z = (X - μ) / σ",
        "topic": "The Normal Distribution"
      },
      {
        "front": "When can normal approximate binomial?",
        "back": "Large n, with np>5 and n(1-p)>5 (roughly)",
        "topic": "The Normal Distribution"
      },
      {
        "front": "Modelling assumption \"smooth\" means?",
        "back": "No friction",
        "topic": "Modelling in Mechanics"
      },
      {
        "front": "Difference between scalar and vector?",
        "back": "Scalar has magnitude only; vector has magnitude and direction",
        "topic": "Modelling in Mechanics"
      },
      {
        "front": "What does \"light\" mean when describing a string or rod?",
        "back": "It has no mass",
        "topic": "Modelling in Mechanics"
      },
      {
        "front": "What does \"inextensible\" mean?",
        "back": "The string does not stretch",
        "topic": "Modelling in Mechanics"
      },
      {
        "front": "What does \"uniform\" mean when describing a rod or object?",
        "back": "Mass is evenly distributed throughout",
        "topic": "Modelling in Mechanics"
      },
      {
        "front": "SI unit of force?",
        "back": "Newton (N), where 1N = 1kg·m/s²",
        "topic": "Modelling in Mechanics"
      },
      {
        "front": "Name three scalar quantities",
        "back": "Any three of: speed, distance, mass, time, energy",
        "topic": "Modelling in Mechanics"
      },
      {
        "front": "Name three vector quantities",
        "back": "Any three of: velocity, displacement, acceleration, force, momentum",
        "topic": "Modelling in Mechanics"
      },
      {
        "front": "SUVAT equation without s?",
        "back": "v = u + at",
        "topic": "Constant Acceleration (SUVAT)"
      },
      {
        "front": "SUVAT equation without v (final velocity)?",
        "back": "s = ut + ½at²",
        "topic": "Constant Acceleration (SUVAT)"
      },
      {
        "front": "SUVAT equation without t?",
        "back": "v² = u² + 2as",
        "topic": "Constant Acceleration (SUVAT)"
      },
      {
        "front": "SUVAT equation without a?",
        "back": "s = ((u+v)/2)t",
        "topic": "Constant Acceleration (SUVAT)"
      },
      {
        "front": "SUVAT equation without u?",
        "back": "s = vt - ½at²",
        "topic": "Constant Acceleration (SUVAT)"
      },
      {
        "front": "Value of g used in mechanics?",
        "back": "9.8 m/s²",
        "topic": "Constant Acceleration (SUVAT)"
      },
      {
        "front": "Velocity at the highest point of a vertical throw?",
        "back": "0 m/s",
        "topic": "Constant Acceleration (SUVAT)"
      },
      {
        "front": "What should you do before starting any SUVAT problem?",
        "back": "Define a positive direction and list known values",
        "topic": "Constant Acceleration (SUVAT)"
      },
      {
        "front": "Newton's second law?",
        "back": "F = ma (resultant force = mass × acceleration)",
        "topic": "Forces and Newton's Laws"
      },
      {
        "front": "Tension in a string over a smooth pulley: same or different each side?",
        "back": "Same throughout (light, inextensible string, smooth pulley)",
        "topic": "Forces and Newton's Laws"
      },
      {
        "front": "Newton's first law?",
        "back": "An object stays at rest or constant velocity unless acted on by a resultant force",
        "topic": "Forces and Newton's Laws"
      },
      {
        "front": "Newton's third law?",
        "back": "Every action has an equal and opposite reaction force",
        "topic": "Forces and Newton's Laws"
      },
      {
        "front": "What force always acts vertically downward on an object?",
        "back": "Weight, W = mg",
        "topic": "Forces and Newton's Laws"
      },
      {
        "front": "For two particles connected over a pulley, how do their accelerations compare?",
        "back": "Same magnitude (one moves up as the other moves down)",
        "topic": "Forces and Newton's Laws"
      },
      {
        "front": "What should you always draw first in a mechanics force problem?",
        "back": "A clear force diagram",
        "topic": "Forces and Newton's Laws"
      },
      {
        "front": "Relationship between velocity and displacement (calculus)?",
        "back": "v = ds/dt",
        "topic": "Variable Acceleration"
      },
      {
        "front": "Relationship between acceleration and velocity (calculus)?",
        "back": "a = dv/dt",
        "topic": "Variable Acceleration"
      },
      {
        "front": "How do you find displacement from a velocity function?",
        "back": "Integrate: s = ∫v dt (plus constant using initial conditions)",
        "topic": "Variable Acceleration"
      },
      {
        "front": "How do you find when a particle is momentarily at rest?",
        "back": "Set v = 0 and solve for t",
        "topic": "Variable Acceleration"
      },
      {
        "front": "How do you find when velocity is at a maximum/minimum?",
        "back": "Set a = dv/dt = 0 and solve for t",
        "topic": "Variable Acceleration"
      },
      {
        "front": "Difference between displacement and distance travelled?",
        "back": "Displacement can be negative (has direction); distance is always positive (total path length)",
        "topic": "Variable Acceleration"
      },
      {
        "front": "Formula for a moment?",
        "back": "Force × perpendicular distance from the pivot",
        "topic": "Moments"
      },
      {
        "front": "Condition for rotational equilibrium?",
        "back": "Sum of clockwise moments = sum of anticlockwise moments",
        "topic": "Moments"
      },
      {
        "front": "Friction formula at limiting equilibrium?",
        "back": "F = μR",
        "topic": "Forces and Friction"
      },
      {
        "front": "Component of weight parallel to a slope angle θ?",
        "back": "mg sin θ",
        "topic": "Forces and Friction"
      },
      {
        "front": "Acceleration in the horizontal direction for a projectile (no air resistance)?",
        "back": "0 (constant horizontal velocity)",
        "topic": "Projectiles"
      },
      {
        "front": "What links the horizontal and vertical SUVAT equations?",
        "back": "Time, t",
        "topic": "Projectiles"
      },
      {
        "front": "Key strategy for connected particle problems?",
        "back": "Draw force diagrams for each particle, apply F=ma to each and/or the whole system",
        "topic": "Application of Forces"
      },
      {
        "front": "How do you differentiate a vector r = xi + yj with respect to t?",
        "back": "Differentiate each component separately: dx/dt i + dy/dt j",
        "topic": "Further Kinematics"
      }
    ],
    "mcq": [],
    "examQuestions": [
      {
        "question": "Simplify (3√5)²",
        "marks": 2,
        "markScheme": [
          "(3√5)² = 9 × 5 = 45",
          "Final answer: 45"
        ],
        "topic": "Algebraic Expressions"
      },
      {
        "question": "Rationalise 1/(2+√3)",
        "marks": 2,
        "markScheme": [
          "Multiply by (2-√3)/(2-√3): (2-√3)/(4-3) = 2-√3",
          "Final answer: 2 - √3"
        ],
        "topic": "Algebraic Expressions"
      },
      {
        "question": "Write 8²ᐟ³ as an integer",
        "marks": 2,
        "markScheme": [
          "8²ᐟ³ = (∛8)² = 2² = 4",
          "Final answer: 4"
        ],
        "topic": "Algebraic Expressions"
      },
      {
        "question": "Simplify √50 - √8",
        "marks": 2,
        "markScheme": [
          "√50=5√2, √8=2√2, so 5√2-2√2=3√2",
          "Final answer: 3√2"
        ],
        "topic": "Algebraic Expressions"
      },
      {
        "question": "Factorise x² - 49",
        "marks": 2,
        "markScheme": [
          "Difference of two squares: a²-b²=(a+b)(a-b) with a=x, b=7",
          "Final answer: (x+7)(x-7)"
        ],
        "topic": "Algebraic Expressions"
      },
      {
        "question": "Simplify (2x⁴)³ ÷ x⁶",
        "marks": 2,
        "markScheme": [
          "(2x⁴)³=8x¹², then 8x¹²÷x⁶=8x⁶",
          "Final answer: 8x⁶"
        ],
        "topic": "Algebraic Expressions"
      },
      {
        "question": "Rationalise 5/√7",
        "marks": 2,
        "markScheme": [
          "Multiply top and bottom by √7: 5√7/7",
          "Final answer: 5√7/7"
        ],
        "topic": "Algebraic Expressions"
      },
      {
        "question": "Solve 3²ˣ = 27",
        "marks": 2,
        "markScheme": [
          "27=3³, so 2x=3, x=1.5",
          "Final answer: x = 1.5"
        ],
        "topic": "Algebraic Expressions"
      },
      {
        "question": "Solve x² - 5x + 6 = 0",
        "marks": 2,
        "markScheme": [
          "Factorise: (x-2)(x-3) = 0",
          "Final answer: x = 2 or x = 3"
        ],
        "topic": "Quadratics"
      },
      {
        "question": "For what values of k does x² + kx + 9 = 0 have equal roots?",
        "marks": 2,
        "markScheme": [
          "Discriminant = 0: k² - 36 = 0, k = ±6",
          "Final answer: k = ±6"
        ],
        "topic": "Quadratics"
      },
      {
        "question": "Write x² - 6x + 11 in completed square form",
        "marks": 2,
        "markScheme": [
          "x²-6x+11 = (x-3)²-9+11 = (x-3)²+2",
          "Final answer: (x-3)² + 2"
        ],
        "topic": "Quadratics"
      },
      {
        "question": "Find the minimum point of y = (x-3)² + 2",
        "marks": 2,
        "markScheme": [
          "Directly from completed square form",
          "Final answer: (3, 2)"
        ],
        "topic": "Quadratics"
      },
      {
        "question": "Solve x² + 2x - 8 = 0 using the quadratic formula",
        "marks": 2,
        "markScheme": [
          "x=(-2±√(4+32))/2=(-2±6)/2",
          "Final answer: x = 2 or x = -4"
        ],
        "topic": "Quadratics"
      },
      {
        "question": "Show that x² + 4x + 7 has no real roots",
        "marks": 2,
        "markScheme": [
          "b²-4ac = 16-28 = -12",
          "Final answer: Discriminant = -12 < 0, so no real roots"
        ],
        "topic": "Quadratics"
      },
      {
        "question": "Solve the simultaneous equations y=x+1 and y=x²-5",
        "marks": 4,
        "markScheme": [
          "x+1=x²-5",
          "x²-x-6=0",
          "(x-3)(x+2)=0",
          "Final answer: x=3,y=4 or x=-2,y=-1"
        ],
        "topic": "Quadratics"
      },
      {
        "question": "Solve x² - x - 6 ≤ 0",
        "marks": 3,
        "markScheme": [
          "Roots at x=-2, x=3",
          "parabola is ≤0 between the roots",
          "Final answer: -2 ≤ x ≤ 3"
        ],
        "topic": "Equations and Inequalities"
      },
      {
        "question": "Solve 3 - 2x > 7",
        "marks": 2,
        "markScheme": [
          "-2x > 4, divide by -2 and flip sign: x < -2",
          "Final answer: x < -2"
        ],
        "topic": "Equations and Inequalities"
      },
      {
        "question": "Solve x² > 9",
        "marks": 2,
        "markScheme": [
          "Roots at x=±3, parabola is above zero outside the roots",
          "Final answer: x < -3 or x > 3"
        ],
        "topic": "Equations and Inequalities"
      },
      {
        "question": "Solve the simultaneous equations y=2x-1 and x²+y²=25",
        "marks": 3,
        "markScheme": [
          "Substitute y: x²+(2x-1)²=25",
          "5x²-4x-24=0",
          "Final answer: x=3,y=5 or x=-1.4,y=-3.8 (approx)"
        ],
        "topic": "Equations and Inequalities"
      },
      {
        "question": "Solve 2x² - 5x - 3 ≥ 0",
        "marks": 2,
        "markScheme": [
          "Factorise: (2x+1)(x-3)≥0, roots -0.5 and 3, outside the roots",
          "Final answer: x ≤ -0.5 or x ≥ 3"
        ],
        "topic": "Equations and Inequalities"
      },
      {
        "question": "Describe the transformation from y=x² to y=(x-3)²+2",
        "marks": 2,
        "markScheme": [
          "f(x-3) shifts right 3, +2 shifts up 2",
          "Final answer: Translation of 3 right and 2 up"
        ],
        "topic": "Graphs and Transformations"
      },
      {
        "question": "Describe the transformation from y=f(x) to y=f(x)-4",
        "marks": 2,
        "markScheme": [
          "Subtracting outside f(x) shifts the graph vertically down",
          "Final answer: Translation down by 4"
        ],
        "topic": "Graphs and Transformations"
      },
      {
        "question": "Describe the transformation from y=f(x) to y=f(2x)",
        "marks": 2,
        "markScheme": [
          "y=f(ax) gives horizontal stretch factor 1/a",
          "Final answer: Horizontal stretch, scale factor 1/2"
        ],
        "topic": "Graphs and Transformations"
      },
      {
        "question": "Sketch y=(x-1)(x+2)(x-3): where does it cross the x-axis?",
        "marks": 2,
        "markScheme": [
          "Roots directly from the factorised form",
          "Final answer: x = 1, -2, 3"
        ],
        "topic": "Graphs and Transformations"
      },
      {
        "question": "Describe the transformation from y=sin x to y=-sin x",
        "marks": 2,
        "markScheme": [
          "y=-f(x) reflects in the x-axis",
          "Final answer: Reflection in the x-axis"
        ],
        "topic": "Graphs and Transformations"
      },
      {
        "question": "If (2,5) is on y=f(x), what point is on y=f(x-3)+1?",
        "marks": 2,
        "markScheme": [
          "Shift x by +3 and y by +1",
          "Final answer: (5,6)"
        ],
        "topic": "Graphs and Transformations"
      },
      {
        "question": "Find the equation of the line through (2,3) perpendicular to y=2x+1",
        "marks": 4,
        "markScheme": [
          "Perpendicular gradient = -1/2",
          "y-3=-1/2(x-2)",
          "y=-1/2x+4",
          "Final answer: y = -1/2x + 4"
        ],
        "topic": "Straight Line Graphs"
      },
      {
        "question": "Find the gradient of the line through (1,4) and (5,12)",
        "marks": 2,
        "markScheme": [
          "m=(12-4)/(5-1)=8/4=2",
          "Final answer: 2"
        ],
        "topic": "Straight Line Graphs"
      },
      {
        "question": "Find the midpoint of (-2,5) and (6,1)",
        "marks": 2,
        "markScheme": [
          "((-2+6)/2, (5+1)/2) = (2,3)",
          "Final answer: (2, 3)"
        ],
        "topic": "Straight Line Graphs"
      },
      {
        "question": "Find the distance between (0,0) and (3,4)",
        "marks": 2,
        "markScheme": [
          "√(9+16)=√25=5",
          "Final answer: 5"
        ],
        "topic": "Straight Line Graphs"
      },
      {
        "question": "Are the lines y=3x-2 and 2y=6x+5 parallel?",
        "marks": 2,
        "markScheme": [
          "Second line rearranges to y=3x+2.5, same gradient 3",
          "Final answer: Yes"
        ],
        "topic": "Straight Line Graphs"
      },
      {
        "question": "Find the equation of the line through (0,-3) and (4,5)",
        "marks": 2,
        "markScheme": [
          "m=(5-(-3))/(4-0)=2, then y=2x-3 using y-intercept",
          "Final answer: y = 2x - 3"
        ],
        "topic": "Straight Line Graphs"
      },
      {
        "question": "Find the centre and radius of x² + y² - 4x + 6y - 3 = 0",
        "marks": 2,
        "markScheme": [
          "Complete the square: (x-2)²+(y+3)²=3+4+9=16, r=4",
          "Final answer: Centre (2,-3), radius 4"
        ],
        "topic": "Circles"
      },
      {
        "question": "Find the equation of a circle with centre (1,2) and radius 5",
        "marks": 2,
        "markScheme": [
          "Direct substitution into (x-a)²+(y-b)²=r²",
          "Final answer: (x-1)² + (y-2)² = 25"
        ],
        "topic": "Circles"
      },
      {
        "question": "Does the point (4,3) lie on the circle x²+y²=25?",
        "marks": 2,
        "markScheme": [
          "16+9=25, satisfies the equation",
          "Final answer: Yes"
        ],
        "topic": "Circles"
      },
      {
        "question": "Find the gradient of the tangent to x²+y²=25 at (3,4)",
        "marks": 2,
        "markScheme": [
          "Radius gradient=4/3, tangent perpendicular gradient=-3/4",
          "Final answer: -3/4"
        ],
        "topic": "Circles"
      },
      {
        "question": "Find the equation of the tangent to x²+y²=25 at point (3,4)",
        "marks": 2,
        "markScheme": [
          "Using gradient -3/4 through (3,4): y-4=-3/4(x-3)",
          "Final answer: 4y = -3x + 25 (or y=-3/4x+25/4)"
        ],
        "topic": "Circles"
      },
      {
        "question": "Show (x-2) is a factor of f(x)=x³-3x²+4",
        "marks": 2,
        "markScheme": [
          "Substitute x=2 into f(x)",
          "Final answer: f(2)=8-12+4=0, so (x-2) is a factor"
        ],
        "topic": "Algebraic Methods (Proof & Division)"
      },
      {
        "question": "Find the remainder when x³+2x-5 is divided by (x-1)",
        "marks": 2,
        "markScheme": [
          "f(1)=1+2-5=-2",
          "Final answer: -2"
        ],
        "topic": "Algebraic Methods (Proof & Division)"
      },
      {
        "question": "Fully factorise x³ - 6x² + 11x - 6",
        "marks": 3,
        "markScheme": [
          "f(1)=0 so (x-1) is a factor",
          "divide to get x²-5x+6=(x-2)(x-3)",
          "Final answer: (x-1)(x-2)(x-3)"
        ],
        "topic": "Algebraic Methods (Proof & Division)"
      },
      {
        "question": "Disprove: \"n² + n + 1 is always prime for positive integers n\"",
        "marks": 2,
        "markScheme": [
          "A single counter-example is enough to disprove",
          "Final answer: n=4 gives 21=3×7, not prime"
        ],
        "topic": "Algebraic Methods (Proof & Division)"
      },
      {
        "question": "Show that (2x+1) is a factor of f(x)=2x³+5x²+x-2",
        "marks": 2,
        "markScheme": [
          "Test x=-1/2: 2(-1/8)+5(1/4)+(-1/2)-2=0",
          "Final answer: f(-1/2)=0, so (2x+1) is a factor"
        ],
        "topic": "Algebraic Methods (Proof & Division)"
      },
      {
        "question": "Find the coefficient of x² in (1+x)⁵",
        "marks": 2,
        "markScheme": [
          "⁵C₂ = 10",
          "Final answer: 10"
        ],
        "topic": "The Binomial Expansion"
      },
      {
        "question": "Find the coefficient of x³ in (2+x)⁵",
        "marks": 2,
        "markScheme": [
          "⁵C₃ × 2² × 1³ = 10 × 4 = 40",
          "Final answer: 40"
        ],
        "topic": "The Binomial Expansion"
      },
      {
        "question": "Expand (1+x)⁴ fully",
        "marks": 2,
        "markScheme": [
          "Pascal's triangle row 4: 1,4,6,4,1",
          "Final answer: 1 + 4x + 6x² + 4x³ + x⁴"
        ],
        "topic": "The Binomial Expansion"
      },
      {
        "question": "Find the coefficient of x² in (3-2x)⁴",
        "marks": 2,
        "markScheme": [
          "⁴C₂ × 3² × (-2)² = 6 × 9 × 4 = 216",
          "Final answer: 216"
        ],
        "topic": "The Binomial Expansion"
      },
      {
        "question": "Use the binomial expansion to estimate (1.01)⁴ to 4 d.p.",
        "marks": 2,
        "markScheme": [
          "(1+0.01)⁴ ≈ 1+4(0.01)+6(0.01)²=1.0406",
          "Final answer: 1.0406"
        ],
        "topic": "The Binomial Expansion"
      },
      {
        "question": "Find side a if b=7, c=9, angle A=60°",
        "marks": 2,
        "markScheme": [
          "a²=49+81-2(7)(9)cos60=130-63=67, a=√67≈8.19",
          "Final answer: a ≈ 8.19"
        ],
        "topic": "Trigonometric Ratios"
      },
      {
        "question": "Find angle A if a=5, b=6, c=8 (nearest degree)",
        "marks": 2,
        "markScheme": [
          "cosA=(36+64-25)/(2×6×8)=75/96, A=cos⁻¹(0.781)",
          "Final answer: A ≈ 38.6°"
        ],
        "topic": "Trigonometric Ratios"
      },
      {
        "question": "Find the area of a triangle with sides 8cm, 10cm and included angle 50°",
        "marks": 2,
        "markScheme": [
          "Area=½×8×10×sin50≈30.6",
          "Final answer: ≈30.6 cm²"
        ],
        "topic": "Trigonometric Ratios"
      },
      {
        "question": "Write cos(30°) as an exact value",
        "marks": 2,
        "markScheme": [
          "From the exact values table",
          "Final answer: √3/2"
        ],
        "topic": "Trigonometric Ratios"
      },
      {
        "question": "Find side c if a=10, angle A=40°, angle C=70° (sine rule)",
        "marks": 2,
        "markScheme": [
          "c/sin70 = 10/sin40, c=10sin70/sin40",
          "Final answer: c ≈ 14.6"
        ],
        "topic": "Trigonometric Ratios"
      },
      {
        "question": "Solve sin θ = 0.5 for 0≤θ≤360°",
        "marks": 2,
        "markScheme": [
          "Principal value 30°, second solution 180-30=150",
          "Final answer: θ = 30°, 150°"
        ],
        "topic": "Trigonometric Identities and Equations"
      },
      {
        "question": "Solve cos θ = -0.5 for 0≤θ≤360°",
        "marks": 2,
        "markScheme": [
          "Principal value from cos⁻¹(0.5)=60°, so 180-60=120 and 180+60=240",
          "Final answer: θ = 120°, 240°"
        ],
        "topic": "Trigonometric Identities and Equations"
      },
      {
        "question": "Solve tan θ = 1 for 0≤θ≤360°",
        "marks": 2,
        "markScheme": [
          "Principal value 45°, add 180° for next solution",
          "Final answer: θ = 45°, 225°"
        ],
        "topic": "Trigonometric Identities and Equations"
      },
      {
        "question": "Solve 2sin²θ - 1 = 0 for 0≤θ≤360°",
        "marks": 2,
        "markScheme": [
          "sin²θ=0.5, sin θ=±0.707, four solutions in range",
          "Final answer: θ = 45°, 135°, 225°, 315°"
        ],
        "topic": "Trigonometric Identities and Equations"
      },
      {
        "question": "Prove sin θ/cos θ + cos θ/sin θ = 1/(sinθcosθ)",
        "marks": 2,
        "markScheme": [
          "(sin²θ+cos²θ)/(sinθcosθ) = 1/(sinθcosθ)",
          "Final answer: True identity: combine fractions using sin²+cos²=1"
        ],
        "topic": "Trigonometric Identities and Equations"
      },
      {
        "question": "Find the magnitude of (3,4)",
        "marks": 2,
        "markScheme": [
          "√(9+16)=√25=5",
          "Final answer: 5"
        ],
        "topic": "Vectors (2D)"
      },
      {
        "question": "If a=(2,3) and b=(5,-1), find AB",
        "marks": 2,
        "markScheme": [
          "AB = b - a = (5-2, -1-3) = (3,-4)",
          "Final answer: (3,-4)"
        ],
        "topic": "Vectors (2D)"
      },
      {
        "question": "Find a unit vector in the direction of (6,8)",
        "marks": 2,
        "markScheme": [
          "Magnitude=10, divide each component by 10",
          "Final answer: (0.6, 0.8)"
        ],
        "topic": "Vectors (2D)"
      },
      {
        "question": "a=(1,2), b=(4,8). Show a and b are parallel",
        "marks": 2,
        "markScheme": [
          "(4,8) = 4×(1,2)",
          "Final answer: b = 4a, so they are parallel"
        ],
        "topic": "Vectors (2D)"
      },
      {
        "question": "OA=(2,1), OB=(6,9). Find the position vector of the midpoint M of AB",
        "marks": 2,
        "markScheme": [
          "M = a + 0.5(b-a) = (2,1)+0.5(4,8) = (4,5)",
          "Final answer: (4,5)"
        ],
        "topic": "Vectors (2D)"
      },
      {
        "question": "Find dy/dx for y = 3x⁴ - 2x",
        "marks": 2,
        "markScheme": [
          "Differentiate term by term",
          "Final answer: 12x³ - 2"
        ],
        "topic": "Differentiation"
      },
      {
        "question": "Find stationary points of y = x² - 4x + 1",
        "marks": 2,
        "markScheme": [
          "dy/dx=2x-4=0, x=2, y=4-8+1=-3",
          "Final answer: (2, -3)"
        ],
        "topic": "Differentiation"
      },
      {
        "question": "Find dy/dx for y = √x + 3/x",
        "marks": 2,
        "markScheme": [
          "Rewrite as x¹ᐟ²+3x⁻¹, then differentiate",
          "Final answer: ½x⁻¹ᐟ² - 3x⁻²"
        ],
        "topic": "Differentiation"
      },
      {
        "question": "Find the equation of the tangent to y=x² at (2,4)",
        "marks": 3,
        "markScheme": [
          "dy/dx=2x, at x=2 gradient=4",
          "y-4=4(x-2)",
          "Final answer: y = 4x - 4"
        ],
        "topic": "Differentiation"
      },
      {
        "question": "Classify the stationary point of y=x³-3x at x=1",
        "marks": 2,
        "markScheme": [
          "y'=3x²-3, y''=6x, at x=1: y''=6>0 so minimum",
          "Final answer: Minimum"
        ],
        "topic": "Differentiation"
      },
      {
        "question": "Find the equation of the normal to y=x² at (1,1)",
        "marks": 3,
        "markScheme": [
          "Tangent gradient=2, normal gradient=-1/2",
          "y-1=-1/2(x-1)",
          "Final answer: y = -½x + 3/2"
        ],
        "topic": "Differentiation"
      },
      {
        "question": "Find ∫(3x² + 2) dx",
        "marks": 2,
        "markScheme": [
          "Integrate term by term",
          "Final answer: x³ + 2x + c"
        ],
        "topic": "Integration"
      },
      {
        "question": "Evaluate ∫₀² x dx",
        "marks": 2,
        "markScheme": [
          "[x²/2]₀² = 2 - 0 = 2",
          "Final answer: 2"
        ],
        "topic": "Integration"
      },
      {
        "question": "Find y given dy/dx=4x-1 and the curve passes through (2,5)",
        "marks": 3,
        "markScheme": [
          "Integrate: y=2x²-x+c",
          "sub (2,5): 5=8-2+c, c=-1",
          "Final answer: y = 2x² - x - 1"
        ],
        "topic": "Integration"
      },
      {
        "question": "Evaluate ∫₁³ (2x+1) dx",
        "marks": 2,
        "markScheme": [
          "[x²+x]₁³ = (9+3)-(1+1) = 12-2 = 10",
          "Final answer: 10"
        ],
        "topic": "Integration"
      },
      {
        "question": "Find ∫(6x² - 4x + 3) dx",
        "marks": 2,
        "markScheme": [
          "Integrate term by term",
          "Final answer: 2x³ - 2x² + 3x + c"
        ],
        "topic": "Integration"
      },
      {
        "question": "Solve 2ˣ = 10 (3 s.f.)",
        "marks": 2,
        "markScheme": [
          "x = log10/log2 ≈ 3.32",
          "Final answer: x ≈ 3.32"
        ],
        "topic": "Exponentials and Logarithms"
      },
      {
        "question": "Solve log₂(x) = 5",
        "marks": 2,
        "markScheme": [
          "Convert to exponential form: x=2⁵=32",
          "Final answer: x = 32"
        ],
        "topic": "Exponentials and Logarithms"
      },
      {
        "question": "Simplify log(8) + log(4) - log(2)",
        "marks": 2,
        "markScheme": [
          "log(8×4/2) = log(16)",
          "Final answer: log(16) = 4log(2)"
        ],
        "topic": "Exponentials and Logarithms"
      },
      {
        "question": "Solve 3²ˣ⁺¹ = 20 (3 s.f.)",
        "marks": 2,
        "markScheme": [
          "(2x+1)log3=log20, 2x+1=log20/log3≈2.727, x≈0.864",
          "Final answer: x ≈ 0.864"
        ],
        "topic": "Exponentials and Logarithms"
      },
      {
        "question": "Solve ln(x) + ln(3) = ln(15)",
        "marks": 2,
        "markScheme": [
          "ln(3x)=ln(15), so 3x=15, x=5",
          "Final answer: x = 5"
        ],
        "topic": "Exponentials and Logarithms"
      },
      {
        "question": "A population grows as P=200e⁰·⁰⁵ᵗ. Find P after 10 years (nearest whole)",
        "marks": 2,
        "markScheme": [
          "P=200e⁰·⁵≈200×1.6487≈330",
          "Final answer: ≈330"
        ],
        "topic": "Exponentials and Logarithms"
      },
      {
        "question": "Express 3/((x-1)(x+2)) as partial fractions",
        "marks": 4,
        "markScheme": [
          "3=A(x+2)+B(x-1)",
          "x=1: A=1",
          "x=-2: B=-1",
          "Final answer: 1/(x-1) - 1/(x+2)"
        ],
        "topic": "Algebraic Methods (Partial Fractions)"
      },
      {
        "question": "If f(x)=2x+1, g(x)=x², find fg(3)",
        "marks": 2,
        "markScheme": [
          "g(3)=9, f(9)=19",
          "Final answer: 19"
        ],
        "topic": "Functions and Graphs"
      },
      {
        "question": "Find the sum to infinity of 8 + 4 + 2 + …",
        "marks": 2,
        "markScheme": [
          "a=8, r=1/2, S∞=8/(1-0.5)=16",
          "Final answer: 16"
        ],
        "topic": "Sequences and Series"
      },
      {
        "question": "Expand (1+x)⁻¹ up to x² term",
        "marks": 2,
        "markScheme": [
          "n=-1: 1 + (-1)x + (-1)(-2)/2 x² = 1-x+x²",
          "Final answer: 1 - x + x²"
        ],
        "topic": "The Binomial Expansion (General n)"
      },
      {
        "question": "Find the arc length of a circle radius 5cm, angle 2 radians",
        "marks": 2,
        "markScheme": [
          "s=rθ=5×2=10",
          "Final answer: 10cm"
        ],
        "topic": "Radians"
      },
      {
        "question": "Prove 1 + tan²θ = sec²θ from sin²θ+cos²θ=1",
        "marks": 3,
        "markScheme": [
          "sin²θ/cos²θ + 1 = 1/cos²θ",
          "tan²θ+1=sec²θ",
          "Final answer: Divide both sides by cos²θ"
        ],
        "topic": "Trigonometric Functions"
      },
      {
        "question": "Write 3sinθ + 4cosθ in form Rsin(θ+α), find R",
        "marks": 2,
        "markScheme": [
          "R=√(9+16)=5",
          "Final answer: R = 5"
        ],
        "topic": "Trigonometry and Modelling"
      },
      {
        "question": "x=t², y=2t. Find dy/dx",
        "marks": 2,
        "markScheme": [
          "dx/dt=2t, dy/dt=2, dy/dx=2/2t=1/t",
          "Final answer: 1/t"
        ],
        "topic": "Parametric Equations"
      },
      {
        "question": "Differentiate y = x²sinx using the product rule",
        "marks": 2,
        "markScheme": [
          "u=x², v=sin x: u'v+uv' = 2xsinx + x²cosx",
          "Final answer: 2x sin x + x² cos x"
        ],
        "topic": "Differentiation (Year 2)"
      },
      {
        "question": "Show x³-x-1=0 has a root between 1 and 2",
        "marks": 2,
        "markScheme": [
          "Evaluate f at both ends",
          "Final answer: f(1)=-1, f(2)=5, sign change so root exists"
        ],
        "topic": "Numerical Methods"
      },
      {
        "question": "Find ∫x eˣ dx",
        "marks": 3,
        "markScheme": [
          "By parts: u=x, dv=eˣdx",
          "xeˣ - ∫eˣdx",
          "Final answer: xeˣ - eˣ + c"
        ],
        "topic": "Integration (Year 2)"
      },
      {
        "question": "Find the magnitude of (1,2,2)",
        "marks": 2,
        "markScheme": [
          "√(1+4+4)=√9=3",
          "Final answer: 3"
        ],
        "topic": "Vectors (3D)"
      },
      {
        "question": "A school has 300 boys and 200 girls. For a stratified sample of 50, how many boys?",
        "marks": 2,
        "markScheme": [
          "300/500 × 50 = 30",
          "Final answer: 30"
        ],
        "topic": "Statistical Sampling"
      },
      {
        "question": "A class has width 10 and frequency 25. Find frequency density.",
        "marks": 2,
        "markScheme": [
          "25/10 = 2.5",
          "Final answer: 2.5"
        ],
        "topic": "Data Presentation and Interpretation"
      },
      {
        "question": "P(A)=0.4, P(B)=0.3, P(A∩B)=0.1. Find P(A∪B)",
        "marks": 2,
        "markScheme": [
          "0.4+0.3-0.1=0.6",
          "Final answer: 0.6"
        ],
        "topic": "Probability"
      },
      {
        "question": "X~B(10,0.2). Find P(X=2)",
        "marks": 2,
        "markScheme": [
          "¹⁰C₂ (0.2)²(0.8)⁸ ≈ 0.302",
          "Final answer: ≈0.302"
        ],
        "topic": "Statistical Distributions (Binomial)"
      },
      {
        "question": "H0: p=0.5, H1: p<0.5, significance 5%. If p-value=0.03, what is the conclusion?",
        "marks": 2,
        "markScheme": [
          "0.03 < 0.05 so reject H0",
          "Final answer: Reject H0: significant evidence p<0.5"
        ],
        "topic": "Statistical Hypothesis Testing"
      },
      {
        "question": "r = 0.95. What does this suggest?",
        "marks": 3,
        "markScheme": [
          "Close to 1",
          "strong positive linear relationship",
          "Final answer: Strong positive linear correlation"
        ],
        "topic": "Regression, Correlation and Hypothesis Testing"
      },
      {
        "question": "P(A∩B)=0.2, P(B)=0.5. Find P(A|B)",
        "marks": 2,
        "markScheme": [
          "0.2/0.5=0.4",
          "Final answer: 0.4"
        ],
        "topic": "Conditional Probability"
      },
      {
        "question": "X~N(50,16). Find Z for X=58",
        "marks": 2,
        "markScheme": [
          "Z=(58-50)/4=2",
          "Final answer: Z=2"
        ],
        "topic": "The Normal Distribution"
      },
      {
        "question": "Why do we model an object as a particle?",
        "marks": 2,
        "markScheme": [
          "Conceptual: simplifies the physics",
          "Final answer: To simplify: ignore size/shape and rotational effects"
        ],
        "topic": "Modelling in Mechanics"
      },
      {
        "question": "Why is a string modelled as \"light\"?",
        "marks": 2,
        "markScheme": [
          "Conceptual: simplifies the model",
          "Final answer: So its mass can be ignored and doesn't affect the force/tension calculations"
        ],
        "topic": "Modelling in Mechanics"
      },
      {
        "question": "What does modelling a surface as \"smooth\" allow you to ignore?",
        "marks": 2,
        "markScheme": [
          "Conceptual",
          "Final answer: Friction between the object and the surface"
        ],
        "topic": "Modelling in Mechanics"
      },
      {
        "question": "A ball is thrown and modelled as a particle under gravity only. Give one limitation of this model.",
        "marks": 2,
        "markScheme": [
          "Conceptual: real-world critique",
          "Final answer: It ignores air resistance, which would reduce speed/range in reality"
        ],
        "topic": "Modelling in Mechanics"
      },
      {
        "question": "State the difference between mass and weight",
        "marks": 2,
        "markScheme": [
          "Conceptual",
          "Final answer: Mass is a scalar (kg), weight is a vector force (N) due to gravity: W=mg"
        ],
        "topic": "Modelling in Mechanics"
      },
      {
        "question": "u=5, a=2, t=3. Find v.",
        "marks": 2,
        "markScheme": [
          "v=u+at=5+2×3=11",
          "Final answer: 11 m/s"
        ],
        "topic": "Constant Acceleration (SUVAT)"
      },
      {
        "question": "u=0, a=9.8, t=4. Find s.",
        "marks": 2,
        "markScheme": [
          "s=ut+½at²=0+½(9.8)(16)=78.4",
          "Final answer: 78.4 m"
        ],
        "topic": "Constant Acceleration (SUVAT)"
      },
      {
        "question": "A ball is thrown upward at 20m/s. Find the time to reach maximum height (g=9.8)",
        "marks": 2,
        "markScheme": [
          "v=u+at, 0=20-9.8t, t=20/9.8≈2.04",
          "Final answer: ≈2.04s"
        ],
        "topic": "Constant Acceleration (SUVAT)"
      },
      {
        "question": "u=10, v=0, a=-2. Find s.",
        "marks": 2,
        "markScheme": [
          "v²=u²+2as, 0=100-4s, s=25",
          "Final answer: 25 m"
        ],
        "topic": "Constant Acceleration (SUVAT)"
      },
      {
        "question": "A car accelerates from 8m/s to 20m/s over 100m. Find a.",
        "marks": 2,
        "markScheme": [
          "v²=u²+2as, 400=64+200a, a=336/200=1.68",
          "Final answer: 1.68 m/s²"
        ],
        "topic": "Constant Acceleration (SUVAT)"
      },
      {
        "question": "A stone is dropped from a 45m cliff. Find the time to reach the ground (g=9.8)",
        "marks": 2,
        "markScheme": [
          "45=0+½(9.8)t², t²=9.184, t≈3.03",
          "Final answer: ≈3.03s"
        ],
        "topic": "Constant Acceleration (SUVAT)"
      },
      {
        "question": "A resultant force of 20N acts on a 4kg mass. Find acceleration.",
        "marks": 2,
        "markScheme": [
          "a=F/m=20/4=5",
          "Final answer: 5 m/s²"
        ],
        "topic": "Forces and Newton's Laws"
      },
      {
        "question": "Find the weight of a 5kg mass (g=9.8)",
        "marks": 2,
        "markScheme": [
          "W=mg=5×9.8=49",
          "Final answer: 49 N"
        ],
        "topic": "Forces and Newton's Laws"
      },
      {
        "question": "Two masses 3kg and 5kg are connected over a smooth pulley. Find the acceleration (g=9.8)",
        "marks": 2,
        "markScheme": [
          "a=(5-3)g/(5+3)=2×9.8/8=2.45",
          "Final answer: 2.45 m/s²"
        ],
        "topic": "Forces and Newton's Laws"
      },
      {
        "question": "Find the tension in the string for the above system",
        "marks": 2,
        "markScheme": [
          "For 3kg mass: T-3g=3a, T=3(9.8)+3(2.45)=34.3",
          "Final answer: ≈34.3 N"
        ],
        "topic": "Forces and Newton's Laws"
      },
      {
        "question": "A 2kg block is pushed with 10N against a resistive force of 4N. Find acceleration.",
        "marks": 2,
        "markScheme": [
          "Resultant=10-4=6N, a=6/2=3",
          "Final answer: 3 m/s²"
        ],
        "topic": "Forces and Newton's Laws"
      },
      {
        "question": "A lift of mass 500kg accelerates upward at 1.5m/s². Find the tension in the cable (g=9.8)",
        "marks": 2,
        "markScheme": [
          "T-mg=ma, T=500(9.8)+500(1.5)=5650",
          "Final answer: 5650 N"
        ],
        "topic": "Forces and Newton's Laws"
      },
      {
        "question": "s = t³ - 3t. Find velocity at t=2",
        "marks": 2,
        "markScheme": [
          "v=ds/dt=3t²-3, at t=2: 12-3=9",
          "Final answer: 9 m/s"
        ],
        "topic": "Variable Acceleration"
      },
      {
        "question": "v = 6t - t². Find acceleration at t=1",
        "marks": 2,
        "markScheme": [
          "a=dv/dt=6-2t, at t=1: 6-2=4",
          "Final answer: 4 m/s²"
        ],
        "topic": "Variable Acceleration"
      },
      {
        "question": "v = 4t - t². Find when the particle is at rest (t>0)",
        "marks": 2,
        "markScheme": [
          "4t-t²=0, t(4-t)=0, t=0 or t=4",
          "Final answer: t = 4"
        ],
        "topic": "Variable Acceleration"
      },
      {
        "question": "a = 6t. Given v=0 at t=0, find v as a function of t",
        "marks": 2,
        "markScheme": [
          "v=∫6t dt=3t²+c, v=0 at t=0 gives c=0",
          "Final answer: v = 3t²"
        ],
        "topic": "Variable Acceleration"
      },
      {
        "question": "v = 2t - 4. Given s=0 at t=0, find s at t=3",
        "marks": 3,
        "markScheme": [
          "s=∫(2t-4)dt=t²-4t+c, c=0",
          "at t=3: 9-12=-3",
          "Final answer: -3 m"
        ],
        "topic": "Variable Acceleration"
      },
      {
        "question": "A 10N force acts 2m from a pivot. Find the moment.",
        "marks": 2,
        "markScheme": [
          "M=F×d=10×2=20",
          "Final answer: 20 Nm"
        ],
        "topic": "Moments"
      },
      {
        "question": "μ=0.3, R=20N. Find max friction force.",
        "marks": 2,
        "markScheme": [
          "F=μR=0.3×20=6",
          "Final answer: 6N"
        ],
        "topic": "Forces and Friction"
      },
      {
        "question": "A ball is projected horizontally at 10m/s from a 20m cliff. Find time to hit the ground (g=9.8).",
        "marks": 3,
        "markScheme": [
          "20=0.5×9.8×t²",
          "t=√(40/9.8)≈2.02",
          "Final answer: ≈2.02s"
        ],
        "topic": "Projectiles"
      },
      {
        "question": "Two masses 3kg and 5kg connected by a string over a pulley. Find acceleration (g=9.8).",
        "marks": 2,
        "markScheme": [
          "a=(5-3)g/(5+3)=2×9.8/8=2.45",
          "Final answer: 2.45 m/s²"
        ],
        "topic": "Application of Forces"
      },
      {
        "question": "v = (3t)i + (4)j. Find displacement from t=0 to t=2 (starting at origin).",
        "marks": 2,
        "markScheme": [
          "Integrate: s=(1.5t²)i+(4t)j, at t=2: 6i+8j",
          "Final answer: 6i + 8j"
        ],
        "topic": "Further Kinematics"
      }
    ],
    "groups": [
      {
        "label": "Pure Mathematics",
        "subgroups": [
          {
            "label": "Year 1 (AS)",
            "topics": [
              "Algebraic Expressions",
              "Quadratics",
              "Equations and Inequalities",
              "Graphs and Transformations",
              "Straight Line Graphs",
              "Circles",
              "Algebraic Methods (Proof & Division)",
              "The Binomial Expansion",
              "Trigonometric Ratios",
              "Trigonometric Identities and Equations",
              "Vectors (2D)",
              "Differentiation",
              "Integration",
              "Exponentials and Logarithms"
            ]
          },
          {
            "label": "Year 2 (A2)",
            "topics": [
              "Algebraic Methods (Partial Fractions)",
              "Functions and Graphs",
              "Sequences and Series",
              "The Binomial Expansion (General n)",
              "Radians",
              "Trigonometric Functions",
              "Trigonometry and Modelling",
              "Parametric Equations",
              "Differentiation (Year 2)",
              "Numerical Methods",
              "Integration (Year 2)",
              "Vectors (3D)"
            ]
          }
        ]
      },
      {
        "label": "Statistics",
        "subgroups": [
          {
            "label": "Year 1 (AS)",
            "topics": [
              "Statistical Sampling",
              "Data Presentation and Interpretation",
              "Probability",
              "Statistical Distributions (Binomial)",
              "Statistical Hypothesis Testing"
            ]
          },
          {
            "label": "Year 2 (A2)",
            "topics": [
              "Regression, Correlation and Hypothesis Testing",
              "Conditional Probability",
              "The Normal Distribution"
            ]
          }
        ]
      },
      {
        "label": "Mechanics",
        "subgroups": [
          {
            "label": "Year 1 (AS)",
            "topics": [
              "Modelling in Mechanics",
              "Constant Acceleration (SUVAT)",
              "Forces and Newton's Laws",
              "Variable Acceleration"
            ]
          },
          {
            "label": "Year 2 (A2)",
            "topics": [
              "Moments",
              "Forces and Friction",
              "Projectiles",
              "Application of Forces",
              "Further Kinematics"
            ]
          }
        ]
      }
    ]
  }
]

/*
  The Maths pack ships with `mcq: []`, so the MCQ technique had no content for
  any of its topics. MATHS_MCQ lives in its own module (rather than being
  pasted into the big generated blob above) so it stays easy to extend.
*/
const withExtras = (pack) => {
  if (pack.id === 'maths') {
    return {
      ...pack,
      flashcards: tagWithDiagrams([...pack.flashcards, ...MATHS_FLASHCARDS_2, ...MATHS_DIAGRAM_CARDS], 'Maths'),
      mcq: tagWithDiagrams([...pack.mcq, ...MATHS_MCQ, ...MATHS_MCQ_2, ...MATHS_MCQ_3], 'Maths'),
      examQuestions: tagWithDiagrams([...pack.examQuestions, ...MATHS_EXAM_2, ...MATHS_EXAM_PURE, ...MATHS_EXAM_APPLIED], 'Maths'),
      // MATHS_NOTES_2 second, so its full chapters override the one-line
      // placeholders MATHS_NOTES holds for every A2, Statistics and
      // Mechanics Year 2 topic.
      notes: appendDiagramsToNotes(mergeNotes({ ...MATHS_NOTES, ...MATHS_NOTES_2, ...MATHS_PURE1_NOTES, ...MATHS_PURE2_NOTES, ...MATHS_APPLIED_NOTES }, MATHS_EXTRA_WORKED, MATHS_EXTRA_WORKED_2), MATHS_CHAPTER_DIAGRAMS),
    }
  }
  if (pack.id === 'computer-science') {
    return {
      ...pack,
      flashcards: tagWithDiagrams([...pack.flashcards, ...CS_EXTRA_FLASHCARDS_2, ...CS_DIAGRAM_CARDS, ...CS_EXTRA_FLASHCARDS_4, ...CS_PROCESSOR_FLASHCARDS], 'Computer Science'),
      mcq: tagWithDiagrams([...pack.mcq, ...CS_EXTRA_MCQ, ...CS_EXTRA_MCQ_2, ...CS_MCQ_3, ...CS_EXTRA_MCQ_4], 'Computer Science'),
      examQuestions: tagWithDiagrams([...pack.examQuestions, ...CS_EXTRA_EXAM, ...CS_EXTRA_EXAM_2, ...CS_EXAM_3, ...CS_ESSAYS, ...CS_PROGRAMMING, ...CS_PROGRAMMING_2, ...CS_EXTRA_EXAM_4], 'Computer Science'),
      notes: appendDiagramsToNotes(mergeNotes({ ...CS_NOTES, ...CS_COMP1_NOTES, ...CS_COMP2_NOTES, ...CS_COMP3_NOTES, ...CS_PROCESSOR_NOTES }, CS_EXTRA_DEPTH, CS_EXTRA_DEPTH_2), CS_CHAPTER_DIAGRAMS),
    }
  }
  if (pack.id === 'economics') {
    return {
      ...pack,
      // tagWithDiagrams attaches each chapter's diagram to its questions, so
      // every technique can show one - the mark scheme for a "using a
      // diagram" question, and the explanation after a wrong MCQ.
      examQuestions: tagWithDiagrams([...pack.examQuestions, ...ECON_EXAM_2, ...ECON_EXAM_3, ...ECON_ESSAYS, ...ECON_ESSAYS_2, ...ECON_EXTRA_EXAM_4, ...ECON_SURPLUS_EXAM], 'Economics'),
      mcq: tagWithDiagrams([...pack.mcq, ...ECON_MCQ_2, ...ECON_EXTRA_MCQ_4, ...ECON_SURPLUS_MCQ], 'Economics'),
      flashcards: tagWithDiagrams([...pack.flashcards, ...ECON_DIAGRAM_CARDS, ...ECON_FIRM_CARDS, ...ECON_EXTRA_FLASHCARDS_4, ...ECON_SURPLUS_FLASHCARDS], 'Economics'),
      // A distinct technique from examQuestions: a bank of questions to PLAN
      // answers to, with no model answers - see econ-essay-bank.js. Not
      // filtered by chapter (the bank has its own paper/topic filters) and
      // not run through tagWithDiagrams: which diagram a plan needs is part
      // of the plan the student writes, not something handed to them.
      essayBank: [...ECON_ESSAY_BANK, ...ECON_ESSAY_BANK_2],
      // Diagrams spliced into the notes at the passage that describes
      // them - see econ-diagrams.js.
      // Rewritten chapters replace their thin originals; the rest are
      // untouched until they are rewritten too.
      notes: withDiagrams(
        mergeNotes(
          { ...ECON_NOTES, ...ECON_THEME2_NOTES, ...ECON_THEME2B_NOTES, ...ECON_THEME2C_NOTES, ...ECON_THEME1A_NOTES, ...ECON_THEME1B_NOTES, ...ECON_THEME3A_NOTES, ...ECON_THEME3B_NOTES, ...ECON_THEME4_NOTES, ...ECON_GAP_NOTES, ...ECON_GAP_NOTES_2 },
          ECON_EXTRA_DEPTH,
          ECON_EXTRA_DEPTH_2,
          ECON_FIRM_MASTER_NOTES,
        ),
      ),
    }
  }
  return pack
}

/*
  Drop repeats within a chapter, keeping the first occurrence.

  Content arrives in batches written at different times, so the same
  flashcard or question can be phrased twice for one chapter - a student
  then meets it twice in a single session, which reads like a bug. Keyed on
  "topic + text", so the SAME fact appearing under TWO chapters is kept:
  that is deliberate (the national debt belongs to both Fiscal Policy and
  The National Debt, and whichever chapter you revise should include it).

  Applied at assembly rather than by editing the data, so a future batch
  cannot silently reintroduce a duplicate.
*/
const dedupeByTopic = (items, key) => {
  if (!Array.isArray(items)) return items
  const seen = new Set()
  return items.filter((x) => {
    const id = `${x.topic ?? ''}␟${x[key] ?? ''}`
    if (seen.has(id)) return false
    seen.add(id)
    return true
  })
}

const dedupeContent = (pack) => ({
  ...pack,
  flashcards: dedupeByTopic(pack.flashcards, 'front'),
  mcq: dedupeByTopic(pack.mcq, 'question'),
  examQuestions: dedupeByTopic(pack.examQuestions, 'question'),
})

export const REVISION = [...CORE_REVISION, ...EXTRA_REVISION]
  .map(withExtras)
  .concat(SUBJECT_PACKS)
  .map(dedupeContent)

export const REVISION_SUBJECTS = REVISION.map((p) => ({ id: p.id, name: p.name }))

export const getPack = (id) => REVISION.find((p) => p.id === id)

// Match a free-text subject name (e.g. "Maths", "Computer Science") to a pack.
// Exact id/name matches win before looser "contains" matches.
const normName = (x) => String(x).toLowerCase().replace(/[^a-z]/g, '')
export const getPackByName = (name) => {
  if (!name) return null
  const s = normName(name)
  if (!s) return null
  return (
    REVISION.find((p) => normName(p.id) === s || normName(p.name) === s) ||
    REVISION.find(
      (p) =>
        s.includes(normName(p.id)) ||
        normName(p.name).includes(s) ||
        s.includes(normName(p.name)),
    ) ||
    null
  )
}

/*
  Derives an AS/A2 (Year 1/Year 2) level per topic from the pack's own
  `groups` outline, where the curriculum actually splits that way - Maths
  labels its subgroups "Year 1 (AS)" / "Year 2 (A2)"; Economics' AS themes
  are Theme 1-2, A2 adds Theme 3-4. A subject without a real AS/A2 split
  (Computer Science's OCR H446 is one linear two-year course, not a
  decoupled AS + A2) returns an empty map, so nothing gets filtered out for
  a Year 12 student there - there is no "AS-only" subset to fall back to.
*/
export function topicLevelMap(pack) {
  const map = {}
  if (!pack?.groups) return map
  for (const group of pack.groups) {
    const groupLevel = /^Theme (1|2)\b/.test(group.label)
      ? 'AS'
      : /^Theme (3|4)\b/.test(group.label)
        ? 'A2'
        : null
    for (const sub of group.subgroups || []) {
      const subLevel = /\(AS\)/.test(sub.label) ? 'AS' : /\(A2\)/.test(sub.label) ? 'A2' : groupLevel
      if (!subLevel) continue
      for (const topic of sub.topics || []) map[topic] = subLevel
    }
  }
  return map
}
