/*
  Full written notes for the 25 Maths chapters that shipped as stubs.

  maths-notes.js has proper notes (multiple sections, common mistakes, an
  exam tip) for the 14 Pure Year 1 chapters and the 4 Mechanics Year 1
  chapters. Every Pure Year 2, Statistics and Mechanics Year 2 chapter had a
  one-paragraph placeholder instead - 130 to 420 characters - so opening
  Notes on, say, Radians gave four lines and a page of white space. Those
  chapters are the whole of A2, which is exactly what a Year 13 student is
  revising.

  These follow the same house shape as the Year 1 notes so a student can't
  tell which chapter came from which batch:
    - <h3> sections for each idea
    - lists for rules and formulae
    - a "Common mistakes" section written from what actually loses marks
    - a closing <p class='exam-tip'>

  Merged over MATHS_NOTES in library.js, so these override the stubs by key.
  Edexcel A-level Maths (9MA0) content only - nothing here is Further Maths,
  which is why angles between 3D vectors are done by trigonometry rather
  than the scalar product.
*/

export const MATHS_NOTES_2 = {
  // =================================================== PURE · YEAR 2 (A2)
  'Algebraic Methods (Partial Fractions)': `<h3>Proof by contradiction</h3>
      <p>Assume the opposite of what you want to prove, then derive a logical impossibility. The assumption must therefore be false, so the original statement is true. Standard results proved this way: √2 is irrational, and there are infinitely many prime numbers.</p>
      <h3>Algebraic fractions</h3>
      <p>Factorise numerator and denominator fully before cancelling. You may only cancel <em>factors</em>, never individual terms. Add and subtract by putting everything over a common denominator.</p>
      <h3>Partial fractions - distinct linear factors</h3>
      <p>For (px + q) / ((ax + b)(cx + d)), write A/(ax+b) + B/(cx+d). Multiply through by the whole denominator, then find A and B either by substituting the values of x that make each bracket zero (fastest) or by comparing coefficients.</p>
      <h3>Repeated factors</h3>
      <p>A repeated factor needs one fraction per power:</p>
      <ul>
        <li>(x + a)² gives A/(x+a) + B/(x+a)²</li>
        <li>(x + a)³ gives A/(x+a) + B/(x+a)² + C/(x+a)³</li>
      </ul>
      <h3>Improper fractions</h3>
      <p>If the degree of the numerator is greater than or equal to the degree of the denominator, divide first (algebraic long division, or write the numerator in terms of the denominator). You get a polynomial plus a proper fraction, and only the proper part splits into partial fractions.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>Cancelling terms rather than factors: (x+3)/(x+5) does not simplify to 3/5</li>
        <li>Forgetting the A/(x+a) term when the factor is repeated - one fraction per power, not just the highest</li>
        <li>Splitting an improper fraction without dividing first, which produces an unsolvable system</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> partial fractions almost never appear on their own. They are the setup step for integrating a rational function, or for a binomial expansion, so check where the question is heading before choosing a method.</p>`,

  'Functions and Graphs': `<h3>The modulus function</h3>
      <p>|x| is the distance of x from zero, so it is never negative: |x| = x for x ≥ 0 and |x| = -x for x &lt; 0.</p>
      <h3>Solving modulus equations and inequalities</h3>
      <p>Either sketch both sides and read off the intersections, or split into cases. |f(x)| = g(x) means f(x) = g(x) or f(x) = -g(x); always substitute your answers back, because the case split can produce solutions that do not satisfy the original equation.</p>
      <h3>Mappings and functions</h3>
      <ul>
        <li>A function maps every element of the domain to exactly one element of the range</li>
        <li>One-to-one functions have an inverse; many-to-one functions do not, unless you restrict the domain</li>
        <li>Always state the domain and range - marks are given for them specifically</li>
      </ul>
      <h3>Composite functions</h3>
      <p>fg(x) means "do g first, then f". The domain of fg is the set of x in the domain of g for which g(x) lies in the domain of f.</p>
      <h3>Inverse functions</h3>
      <p>To find f⁻¹: set y = f(x), rearrange for x, then swap the letters. The domain of f⁻¹ is the range of f, and the range of f⁻¹ is the domain of f. The graph of f⁻¹ is the reflection of f in the line y = x.</p>
      <h3>The two modulus transformations</h3>
      <ul>
        <li>y = |f(x)|: reflect anything below the x-axis up above it</li>
        <li>y = f(|x|): keep the part for x ≥ 0 and reflect it in the y-axis, discarding the original left-hand side</li>
      </ul>
      <h3>Common mistakes</h3>
      <ul>
        <li>Confusing fg(x) with gf(x) - the right-hand function acts first</li>
        <li>Mixing up |f(x)| and f(|x|); they usually give completely different graphs</li>
        <li>Giving f⁻¹ without stating its domain</li>
        <li>Keeping extra solutions from the negative case without checking them</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> sketch first. Almost every modulus question becomes obvious once you can see how many intersections there are, and a sketch also tells you which case-split solutions to reject.</p>`,

  'Sequences and Series': `<h3>Arithmetic sequences and series</h3>
      <ul>
        <li>nth term: uₙ = a + (n - 1)d</li>
        <li>Sum: Sₙ = n/2 [2a + (n - 1)d] = n/2 (a + l), where l is the last term</li>
      </ul>
      <h3>Geometric sequences and series</h3>
      <ul>
        <li>nth term: uₙ = arⁿ⁻¹</li>
        <li>Sum: Sₙ = a(1 - rⁿ)/(1 - r), for r ≠ 1</li>
        <li>Sum to infinity: S∞ = a/(1 - r), valid only when |r| &lt; 1 (the series converges)</li>
      </ul>
      <h3>Sigma notation</h3>
      <p>Σ from r = 1 to n means add the terms as r runs through those values. Watch the limits carefully: a sum starting at r = 3 has fewer terms than one starting at r = 1, and you often need Σ(to n) − Σ(to m−1).</p>
      <h3>Recurrence relations</h3>
      <p>A sequence defined by uₙ₊₁ = f(uₙ) with a stated first term. Generate terms one at a time. Vocabulary that carries marks:</p>
      <ul>
        <li><strong>Increasing:</strong> uₙ₊₁ &gt; uₙ for all n</li>
        <li><strong>Decreasing:</strong> uₙ₊₁ &lt; uₙ for all n</li>
        <li><strong>Periodic:</strong> the terms repeat in a cycle; the order is the length of that cycle</li>
      </ul>
      <h3>Using logs for the number of terms</h3>
      <p>Questions like "after how many years does the amount first exceed £X" give an inequality in rⁿ. Take logs of both sides, and remember to divide by log r - if r &lt; 1 then log r is negative and the inequality flips.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>Using n instead of (n − 1) in the arithmetic nth term</li>
        <li>Applying S∞ without checking |r| &lt; 1, or without saying that you checked</li>
        <li>Off-by-one errors on sigma limits</li>
        <li>Forgetting to round <em>up</em> for "how many terms are needed" - n must be a whole number of terms</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> in a modelling question, read whether each year's payment is an arithmetic increase (a fixed amount added) or geometric (a fixed percentage). That single decision is usually worth the whole question.</p>`,

  'The Binomial Expansion (General n)': `<h3>The general binomial expansion</h3>
      <p>For any rational n, and |x| &lt; 1:</p>
      <p>(1 + x)ⁿ = 1 + nx + n(n−1)/2! x² + n(n−1)(n−2)/3! x³ + ...</p>
      <p>Unlike the positive-integer case this series never terminates, so questions ask for terms "up to and including" a given power.</p>
      <h3>Validity</h3>
      <p>The expansion of (1 + x)ⁿ is valid for |x| &lt; 1. For (1 + bx)ⁿ it is valid for |bx| &lt; 1, i.e. |x| &lt; 1/|b|. State the range - it is a marked answer in its own right.</p>
      <h3>Expanding (a + bx)ⁿ</h3>
      <p>Factor out a first: (a + bx)ⁿ = aⁿ(1 + (b/a)x)ⁿ, then expand the bracket. Validity becomes |x| &lt; |a/b|.</p>
      <h3>Combining with partial fractions</h3>
      <p>To expand something like (3x + 5)/((x + 1)(x + 2)), split into partial fractions first, write each as a bracket to a negative power, expand separately and add the coefficients. The overall validity is the <em>most restrictive</em> of the individual ranges.</p>
      <h3>Approximations</h3>
      <p>Substituting a small x gives a numerical estimate, e.g. using x = 0.01 in an expansion of √(1 + x). The smaller the x, the better the approximation.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>Forgetting to raise the whole of bx to the power, not just x</li>
        <li>Leaving a factored-out aⁿ off the final expansion</li>
        <li>Omitting the validity condition, or giving |x| &lt; 1 when the bracket is (1 + 3x)</li>
        <li>Sign slips - with a negative n the terms usually alternate</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> when the question combines partial fractions with a binomial expansion, the validity range comes from the smallest of the individual ranges. Writing the wider one is a very common single-mark loss.</p>`,

  Radians: `<h3>Converting between degrees and radians</h3>
      <p>π radians = 180°. To convert degrees to radians multiply by π/180; to convert radians to degrees multiply by 180/π.</p>
      <p>Values worth knowing on sight: π/6 = 30°, π/4 = 45°, π/3 = 60°, π/2 = 90°, π = 180°, 2π = 360°.</p>
      <h3>Arc length and sector area</h3>
      <ul>
        <li>Arc length: s = rθ</li>
        <li>Sector area: A = ½r²θ</li>
        <li>Both require θ in <strong>radians</strong></li>
      </ul>
      <h3>Segment area</h3>
      <p>Area of a segment = sector − triangle = ½r²θ − ½r² sin θ = ½r²(θ − sin θ). The triangle uses ½ab sinC with both sides equal to r.</p>
      <h3>Exact trig values in radians</h3>
      <p>The same exact values as in degrees, relabelled: sin(π/6) = ½, cos(π/4) = √2/2, tan(π/3) = √3, and so on.</p>
      <h3>Solving trig equations in radians</h3>
      <p>Identical method to degrees, but the symmetry points change: sin gives θ and π − θ; cos gives θ and 2π − θ; tan repeats every π. Ranges are usually given as 0 ≤ x &lt; 2π.</p>
      <h3>Small angle approximations</h3>
      <p>For small θ measured in radians:</p>
      <ul>
        <li>sin θ ≈ θ</li>
        <li>tan θ ≈ θ</li>
        <li>cos θ ≈ 1 − θ²/2</li>
      </ul>
      <p>These come from the first terms of the series expansions, and are used to simplify a limit or estimate a value near zero.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>Leaving the calculator in degree mode - the single biggest source of lost marks in this chapter</li>
        <li>Using s = rθ or A = ½r²θ with θ in degrees</li>
        <li>Applying small angle approximations to an angle given in degrees without converting first</li>
        <li>Forgetting the ½ in the sector area formula</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> if an answer is requested "in terms of π", stay in exact form the whole way through - converting to a decimal and back loses accuracy marks.</p>`,

  'Trigonometric Functions': `<h3>The reciprocal functions</h3>
      <ul>
        <li>sec θ = 1 / cos θ</li>
        <li>cosec θ = 1 / sin θ</li>
        <li>cot θ = 1 / tan θ = cos θ / sin θ</li>
      </ul>
      <p>The third letter rule helps: se<strong>c</strong> pairs with <strong>c</strong>os, cose<strong>c</strong> pairs with <strong>s</strong>in.</p>
      <h3>Graphs and asymptotes</h3>
      <p>Each reciprocal graph has vertical asymptotes wherever the original function is zero. sec θ and cosec θ never take values between −1 and 1; cot θ has asymptotes wherever sin θ = 0 and passes through zero wherever cos θ = 0.</p>
      <h3>The Pythagorean identities</h3>
      <ul>
        <li>sin²θ + cos²θ = 1</li>
        <li>1 + tan²θ = sec²θ (divide the first by cos²θ)</li>
        <li>1 + cot²θ = cosec²θ (divide the first by sin²θ)</li>
      </ul>
      <h3>Inverse trigonometric functions</h3>
      <p>sin, cos and tan are many-to-one, so their domains must be restricted before an inverse exists:</p>
      <ul>
        <li>arcsin x: domain −1 ≤ x ≤ 1, range −π/2 ≤ y ≤ π/2</li>
        <li>arccos x: domain −1 ≤ x ≤ 1, range 0 ≤ y ≤ π</li>
        <li>arctan x: domain all real x, range −π/2 &lt; y &lt; π/2</li>
      </ul>
      <h3>Common mistakes</h3>
      <ul>
        <li>Reading sec as 1/sin - check the third letter every time</li>
        <li>Writing sin⁻¹x when you mean 1/sin x; sin⁻¹ is the inverse function, cosec is the reciprocal</li>
        <li>Giving arccos a range of −π/2 to π/2; it is 0 to π</li>
        <li>Losing solutions by dividing an equation by a trig function that could be zero - factorise instead</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> when an equation mixes sec, tan and a constant, use 1 + tan²θ = sec²θ to reduce it to a single function, then treat it as a quadratic.</p>`,

  'Trigonometry and Modelling': `<h3>Addition formulae</h3>
      <ul>
        <li>sin(A ± B) = sinA cosB ± cosA sinB</li>
        <li>cos(A ± B) = cosA cosB ∓ sinA sinB (note the sign swaps)</li>
        <li>tan(A ± B) = (tanA ± tanB) / (1 ∓ tanA tanB)</li>
      </ul>
      <h3>Double angle formulae</h3>
      <ul>
        <li>sin 2A = 2 sinA cosA</li>
        <li>cos 2A = cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A</li>
        <li>tan 2A = 2 tanA / (1 − tan²A)</li>
      </ul>
      <p>The three forms of cos 2A matter: choose whichever leaves you with only the function you want. Rearranged, they also give the identities used to integrate sin²x and cos²x.</p>
      <h3>The harmonic form R sin(x ± α) / R cos(x ± α)</h3>
      <p>To write a sin x + b cos x as a single trig function:</p>
      <ol>
        <li>R = √(a² + b²)</li>
        <li>tan α = b/a (matching the chosen form), with α acute</li>
        <li>Check by expanding your answer back out</li>
      </ol>
      <p>This form makes maxima and minima immediate: the expression oscillates between −R and R, with the maximum where the bracket equals π/2 (for the sine form).</p>
      <h3>Modelling</h3>
      <p>Tides, ferris wheels, daylight hours and oscillations are modelled with A sin(bt + c) + d, where d is the mean level, A the amplitude, and the period is 2π/b.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>The sign in cos(A + B) is minus, not plus - the one most often misremembered</li>
        <li>Choosing the wrong form of cos 2A and creating extra work</li>
        <li>Finding R but forgetting that the maximum of the whole expression may include a vertical shift</li>
        <li>Giving α in degrees when the question is set in radians</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> "prove that" questions want you to start from one side and work to the other. Never move terms across the identity as if it were an equation - work down one side only.</p>`,

  'Parametric Equations': `<h3>What parametric form means</h3>
      <p>Instead of y in terms of x, both coordinates are given in terms of a third variable: x = f(t), y = g(t). Each value of the parameter t gives one point on the curve.</p>
      <h3>Converting to Cartesian form</h3>
      <p>Eliminate the parameter. Either rearrange one equation for t and substitute, or - when the equations are trigonometric - use an identity such as sin²t + cos²t = 1. Always state the domain and range that the parameter restricts you to; the Cartesian equation on its own usually describes more of the curve than the parametric one does.</p>
      <h3>Parametric differentiation</h3>
      <p>dy/dx = (dy/dt) ÷ (dx/dt). Differentiate each equation with respect to t, then divide. Use this for tangents, normals and stationary points exactly as usual - stationary points occur where dy/dt = 0 (provided dx/dt ≠ 0).</p>
      <h3>Points of intersection</h3>
      <p>To find where a parametric curve meets a line, substitute the parametric expressions into the line's equation and solve for t, then convert each t back into coordinates.</p>
      <h3>Areas under parametric curves</h3>
      <p>Area = ∫ y (dx/dt) dt, with the limits converted from x-values to the corresponding t-values. Converting the limits is a step that is very easy to skip.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>Inverting the derivative: it is (dy/dt) ÷ (dx/dt), not the other way round</li>
        <li>Giving a Cartesian equation without the restricted domain</li>
        <li>Forgetting to convert the limits to t when integrating</li>
        <li>Leaving answers in terms of t when the question asked for coordinates</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> when the parametric equations are trigonometric, look for the identity before trying to rearrange. x = 3cos t, y = 2sin t becomes (x/3)² + (y/2)² = 1 in one line.</p>`,

  'Differentiation (Year 2)': `<h3>Standard derivatives</h3>
      <ul>
        <li>d/dx (eˣ) = eˣ, and d/dx (e<sup>kx</sup>) = k e<sup>kx</sup></li>
        <li>d/dx (ln x) = 1/x</li>
        <li>d/dx (sin x) = cos x, d/dx (cos x) = −sin x, d/dx (tan x) = sec²x (x in radians)</li>
        <li>d/dx (aˣ) = aˣ ln a</li>
      </ul>
      <h3>The three rules</h3>
      <ul>
        <li><strong>Chain rule:</strong> dy/dx = dy/du × du/dx - use for a function inside a function</li>
        <li><strong>Product rule:</strong> if y = uv, dy/dx = u(dv/dx) + v(du/dx)</li>
        <li><strong>Quotient rule:</strong> if y = u/v, dy/dx = (v(du/dx) − u(dv/dx)) / v² - the numerator order matters</li>
      </ul>
      <h3>Implicit differentiation</h3>
      <p>Differentiate both sides with respect to x, applying the chain rule to every y term: d/dx (y³) = 3y² (dy/dx). Terms like xy need the product rule. Then collect all the dy/dx terms on one side and factorise.</p>
      <h3>Connected rates of change</h3>
      <p>Chain the derivatives you have to reach the one you want, e.g. dV/dt = dV/dr × dr/dt. Write down every rate the question gives you with its units before starting.</p>
      <h3>Second derivatives, convexity and inflection</h3>
      <ul>
        <li>d²y/dx² &gt; 0: the curve is convex (holds water) on that interval</li>
        <li>d²y/dx² &lt; 0: the curve is concave</li>
        <li>A point of inflection is where the curve changes between the two - d²y/dx² = 0 <em>and</em> the sign changes across it</li>
      </ul>
      <h3>Common mistakes</h3>
      <ul>
        <li>Reversing the numerator of the quotient rule - it is "v du minus u dv"</li>
        <li>Differentiating trig functions while the calculator (and your working) is in degrees; these derivatives only hold in radians</li>
        <li>Forgetting the dy/dx factor when differentiating a y term implicitly</li>
        <li>Claiming a point of inflection from d²y/dx² = 0 alone, without checking the sign change</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> before differentiating, ask whether the expression can be simplified. A quotient that can be split into separate terms, or a log that can be expanded with log laws, is far quicker than the quotient rule.</p>`,

  'Numerical Methods': `<h3>Locating roots by sign change</h3>
      <p>If f is continuous on [a, b] and f(a) and f(b) have opposite signs, there is at least one root in that interval. State all three parts in your answer: the two values, the sign change, and the continuity.</p>
      <p>The method fails if the function has a discontinuity (such as an asymptote) in the interval, or if there is a repeated root where the curve touches without crossing.</p>
      <h3>Iteration</h3>
      <p>Rearrange f(x) = 0 into the form x = g(x), then iterate xₙ₊₁ = g(xₙ) from a starting value. Different rearrangements converge at different speeds, and some diverge entirely.</p>
      <h3>Staircase and cobweb diagrams</h3>
      <p>Sketch y = x and y = g(x); the iteration is drawn by moving vertically to the curve and horizontally to the line. Convergence spiralling in is a cobweb; convergence in steps from one side is a staircase.</p>
      <h3>The Newton-Raphson method</h3>
      <p>xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ). It converges much faster than simple iteration, but fails when f′(xₙ) is zero or near zero - the tangent is then nearly horizontal and throws the next value far away, or the method breaks down entirely. A starting value near a stationary point is the usual culprit.</p>
      <h3>The trapezium rule</h3>
      <p>∫ y dx ≈ h/2 [y₀ + 2(y₁ + y₂ + ... + y<sub>n−1</sub>) + yₙ], where h = (b − a)/n and n is the number of <strong>strips</strong>.</p>
      <p>The estimate is an overestimate where the curve is convex and an underestimate where it is concave - justify which by referring to the shape, not by guessing.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>Using n as the number of ordinates rather than strips; there are always n + 1 ordinates</li>
        <li>Doubling the first and last y values in the trapezium rule - only the middle ones are doubled</li>
        <li>Rounding intermediate iterations, which drifts the final answer</li>
        <li>Saying "there is a root" without stating that the function is continuous</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> to show a root is correct to a given number of decimal places, test the sign change at the two bounds of the rounding interval - for 2 d.p. accuracy at 1.24, test 1.235 and 1.245.</p>`,

  'Integration (Year 2)': `<h3>Standard integrals</h3>
      <ul>
        <li>∫ eˣ dx = eˣ + c</li>
        <li>∫ 1/x dx = ln|x| + c (the modulus matters)</li>
        <li>∫ sin x dx = −cos x + c, ∫ cos x dx = sin x + c</li>
        <li>∫ sec²x dx = tan x + c</li>
      </ul>
      <h3>Reverse chain rule</h3>
      <p>Integrals of the form ∫ f′(x)/f(x) dx = ln|f(x)| + c, and ∫ f′(x)[f(x)]ⁿ dx = [f(x)]ⁿ⁺¹/(n+1) + c. Spotting that the numerator is the derivative of the denominator saves a full substitution.</p>
      <h3>Integration by substitution</h3>
      <p>Choose u, find du/dx, replace dx, and - for a definite integral - convert the limits to u values rather than substituting back.</p>
      <h3>Integration by parts</h3>
      <p>∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx. Choose u to be the part that gets simpler when differentiated; for ∫ x ln x dx take u = ln x. Some integrals (∫ ln x dx) need dv/dx = 1.</p>
      <h3>Using partial fractions and trig identities</h3>
      <p>A rational function with a factorisable denominator splits into partial fractions, each integrating to a log. sin²x and cos²x are integrated by first rewriting them with the double angle formula; products like sin 3x cos x use the factor formulae.</p>
      <h3>Areas and differential equations</h3>
      <p>Area between a curve and the x-axis is ∫ y dx, taking regions below the axis separately or the total comes out too small. Separable differential equations are solved by writing ∫ 1/f(y) dy = ∫ g(x) dx, and a boundary condition then fixes the constant.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>Omitting + c, or losing it when applying a boundary condition</li>
        <li>Dropping the modulus in ln|x|</li>
        <li>Not converting limits after a substitution</li>
        <li>Integrating a region that crosses the x-axis in one go, so positive and negative areas cancel</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> check any integral by differentiating your answer. It takes fifteen seconds and catches the sign errors that this topic is full of.</p>`,

  'Vectors (3D)': `<h3>Vectors in three dimensions</h3>
      <p>A 3D vector is written as a column (a, b, c) or in unit vector form ai + bj + ck, where i, j and k point along the x, y and z axes.</p>
      <ul>
        <li>Magnitude: |v| = √(a² + b² + c²)</li>
        <li>Unit vector: v ÷ |v| - the same direction, magnitude 1</li>
        <li>Distance between two points: the magnitude of the vector joining them</li>
      </ul>
      <h3>Position vectors</h3>
      <p>The position vector of a point is the vector from the origin to it. The vector from A to B is AB = b − a (the position vector of the end point minus that of the start point). Reversing the direction changes the sign.</p>
      <h3>Angles with the axes</h3>
      <p>The angle a vector makes with the x-axis satisfies cos θ = a / |v|, and similarly with b and c for the y and z axes. These come straight from right-angled trigonometry - a component divided by the magnitude - and no scalar product is needed at A-level.</p>
      <h3>Geometric problems</h3>
      <ul>
        <li>Parallel vectors are scalar multiples of one another</li>
        <li>Collinear points need parallel vectors <em>and</em> a shared point</li>
        <li>To divide AB in the ratio m:n, the position vector of the dividing point is a + (m/(m+n))(b − a)</li>
        <li>Angles inside a triangle of known vertices are found with the cosine rule on the three side lengths</li>
      </ul>
      <h3>Applications to mechanics</h3>
      <p>Forces, velocities and displacements combine as vectors: a resultant force is the vector sum, and a particle is in equilibrium when the resultant is the zero vector.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>Writing AB as a − b instead of b − a</li>
        <li>Forgetting to square the third component when finding a magnitude</li>
        <li>Proving two vectors are parallel and concluding the points are collinear, without a common point</li>
        <li>Mixing up a position vector with a displacement vector</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> draw the situation even in 3D. A rough sketch showing which vectors join which points prevents nearly every sign error in this chapter.</p>`,

  // ==================================================== STATISTICS · AS
  'Statistical Sampling': `<h3>Populations, samples and censuses</h3>
      <p>A population is every member of the group being studied; a sample is a subset of it. A census observes the whole population - completely accurate, but usually expensive, slow, and sometimes destructive (you cannot crash-test every car).</p>
      <p>A sampling unit is an individual member; a sampling frame is the list of all of them, needed for most random methods.</p>
      <h3>Random sampling methods</h3>
      <ul>
        <li><strong>Simple random:</strong> every member has an equal chance. Free of bias, but needs a full sampling frame</li>
        <li><strong>Systematic:</strong> take every kth member from an ordered list, with a random start. Simple to run, but biased if the list has a repeating pattern</li>
        <li><strong>Stratified:</strong> split into strata (e.g. year groups) and sample from each in proportion to its size. Reflects the population structure, but needs the strata to be known and takes longer</li>
      </ul>
      <h3>Non-random sampling methods</h3>
      <ul>
        <li><strong>Quota:</strong> the interviewer fills set numbers per group. Cheap and needs no sampling frame, but the choice of who to ask introduces bias</li>
        <li><strong>Opportunity (convenience):</strong> whoever is available. Fastest and cheapest, and the least representative</li>
      </ul>
      <h3>Calculating a stratified sample</h3>
      <p>Number from a stratum = (stratum size ÷ population size) × total sample size. Round sensibly and check the parts still total the required sample.</p>
      <h3>The large data set</h3>
      <p>You are expected to be familiar with the structure of the set used by your specification, including that missing values ("n/a") must be excluded rather than treated as zero.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>Saying a method is "unbiased" without saying why</li>
        <li>Giving an advantage of sampling in general when asked for an advantage of one specific method</li>
        <li>Forgetting that systematic and simple random sampling both require a sampling frame</li>
        <li>Rounding each stratum up, so the sample ends up larger than asked for</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> advantage/disadvantage questions want the reason tied to the context in the question, not a generic textbook line. Name the population and what could go wrong with it.</p>`,

  'Data Presentation and Interpretation': `<h3>Measures of location</h3>
      <ul>
        <li>Mean: x̄ = Σx / n, or Σfx / Σf for a frequency table. Uses all the data, but is pulled by outliers</li>
        <li>Median: the middle value once ordered - resistant to outliers</li>
        <li>Mode: the most frequent value; the only average usable for qualitative data</li>
      </ul>
      <p>For grouped data, use linear interpolation to estimate the median and quartiles, treating each class as evenly spread.</p>
      <h3>Measures of spread</h3>
      <ul>
        <li>Range, and interquartile range IQR = Q₃ − Q₁</li>
        <li>Variance = Σx²/n − x̄², and standard deviation is its square root</li>
        <li>For frequency data: variance = Σfx²/Σf − x̄²</li>
      </ul>
      <h3>Coding</h3>
      <p>If y = (x − a)/b then ȳ = (x̄ − a)/b and σ_y = σ_x / b. Adding or subtracting shifts the mean but leaves the standard deviation unchanged; only multiplying or dividing scales the spread.</p>
      <h3>Outliers</h3>
      <p>Two standard definitions - the question will tell you which to use:</p>
      <ul>
        <li>More than 1.5 × IQR beyond Q₁ or Q₃</li>
        <li>More than 2 (or 3) standard deviations from the mean</li>
      </ul>
      <p>An outlier should only be removed if there is a reason to believe it is an error; otherwise it is real data.</p>
      <h3>Diagrams</h3>
      <ul>
        <li><strong>Box plots:</strong> minimum, Q₁, median, Q₃, maximum, with outliers marked separately</li>
        <li><strong>Histograms:</strong> for grouped continuous data, <em>frequency density = frequency ÷ class width</em>. Area is proportional to frequency</li>
        <li><strong>Cumulative frequency:</strong> plot at the <em>upper</em> class boundary, then read medians and quartiles off the curve</li>
      </ul>
      <h3>Correlation and regression</h3>
      <p>Scatter diagrams show the relationship between two variables. Correlation is not causation - a third variable may explain both.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>Plotting raw frequency on a histogram instead of frequency density</li>
        <li>Plotting cumulative frequency at midpoints rather than upper boundaries</li>
        <li>Applying the coding shift to the standard deviation</li>
        <li>Comparing two distributions with only one of location or spread - a full comparison needs both, in context</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> "compare the distributions" always wants two comparisons (an average and a spread) and both written in the context of the question, not as bare numbers.</p>`,

  Probability: `<h3>Basic rules</h3>
      <ul>
        <li>0 ≤ P(A) ≤ 1, and the probabilities of all outcomes sum to 1</li>
        <li>P(A′) = 1 − P(A)</li>
        <li>Addition rule: P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</li>
      </ul>
      <h3>Mutually exclusive and independent events</h3>
      <ul>
        <li><strong>Mutually exclusive:</strong> they cannot both happen, so P(A ∩ B) = 0 and P(A ∪ B) = P(A) + P(B)</li>
        <li><strong>Independent:</strong> one happening does not change the other's probability, so P(A ∩ B) = P(A) × P(B)</li>
      </ul>
      <p>These are different ideas, not two words for the same thing - in fact two events with non-zero probability cannot be both.</p>
      <h3>Venn diagrams</h3>
      <p>Fill the intersection first, then work outwards so each region holds the probability of <em>only</em> that combination. The rectangle represents the whole sample space and everything inside must total 1.</p>
      <h3>Two-way tables</h3>
      <p>Useful when data is classified two ways at once. Totals in the margins give the individual probabilities; cells give intersections.</p>
      <h3>Tree diagrams</h3>
      <p>Multiply along branches, add between them. Each set of branches from a point must sum to 1. Check carefully whether the selection is with or without replacement - without replacement changes the probabilities on the second set of branches.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>Treating mutually exclusive and independent as interchangeable</li>
        <li>Forgetting to subtract P(A ∩ B) in the addition rule, so the overlap is counted twice</li>
        <li>Putting the total for a region into the intersection of a Venn diagram instead of the "only" part</li>
        <li>Using the same probabilities on both layers of a tree when sampling without replacement</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> if a question gives probabilities for two events plus their union, it is testing the addition rule; if it gives a sequence of picks, draw the tree. Choosing the right representation is most of the work.</p>`,

  'Statistical Distributions (Binomial)': `<h3>When the binomial applies</h3>
      <p>X ~ B(n, p) requires all four conditions, and questions ask you to state them:</p>
      <ul>
        <li>A fixed number of trials, n</li>
        <li>Each trial has only two outcomes (success or failure)</li>
        <li>The trials are independent</li>
        <li>The probability of success p is constant</li>
      </ul>
      <h3>The probability function</h3>
      <p>P(X = r) = ⁿC<sub>r</sub> p<sup>r</sup> (1 − p)<sup>n−r</sup></p>
      <p>ⁿC<sub>r</sub> counts the number of ways the r successes can be arranged among the n trials.</p>
      <h3>Cumulative probabilities</h3>
      <p>Calculators and tables give P(X ≤ x). Everything else is built from that:</p>
      <ul>
        <li>P(X &lt; x) = P(X ≤ x − 1)</li>
        <li>P(X ≥ x) = 1 − P(X ≤ x − 1)</li>
        <li>P(X &gt; x) = 1 − P(X ≤ x)</li>
        <li>P(a ≤ X ≤ b) = P(X ≤ b) − P(X ≤ a − 1)</li>
      </ul>
      <p>Because X only takes whole values, these boundary adjustments are exact, not approximations.</p>
      <h3>Modelling in context</h3>
      <p>Justifying a binomial model means checking the four conditions against the situation described - for example, whether sampling without replacement from a small population really keeps p constant.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>Off-by-one errors converting between &lt;, ≤, &gt; and ≥ - write the conversion down every time</li>
        <li>Confusing "at least" (≥) with "more than" (&gt;)</li>
        <li>Swapping n and r in ⁿC<sub>r</sub></li>
        <li>Listing conditions without linking them to the context in the question</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> write the distribution as X ~ B(n, p) before calculating. It takes one line, is often worth a mark on its own, and forces you to pin down what n and p actually are.</p>`,

  'Statistical Hypothesis Testing': `<h3>Setting up the test</h3>
      <ul>
        <li>H₀ (null hypothesis): the "no change" statement, always with an equals sign - e.g. H₀: p = 0.3</li>
        <li>H₁ (alternative hypothesis): what you are testing for - p &gt; 0.3, p &lt; 0.3 (one-tailed) or p ≠ 0.3 (two-tailed)</li>
      </ul>
      <p>Both hypotheses must be written in terms of the population parameter p, not the sample result.</p>
      <h3>Significance levels and tails</h3>
      <p>The significance level is the probability of rejecting H₀ when it is actually true. For a two-tailed test at 5%, each tail gets 2.5%.</p>
      <h3>The p-value method</h3>
      <p>Assume H₀ is true, then find the probability of a result at least as extreme as the one observed. If that probability is less than the significance level, reject H₀.</p>
      <h3>The critical region method</h3>
      <p>Find the set of values that would lead to rejecting H₀. Because the binomial is discrete you rarely hit the significance level exactly - take the largest region whose total probability does not exceed it.</p>
      <p>The <strong>actual significance level</strong> is the true probability of the critical region, which is a little below the nominal level.</p>
      <h3>Writing the conclusion</h3>
      <p>Two sentences, always: a statistical one ("there is sufficient evidence to reject H₀ at the 5% level") and a contextual one ("so there is evidence that the proportion of faulty items has increased"). Never write "H₀ is true" - failing to reject is not proof.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>Halving the significance level for a one-tailed test, or forgetting to halve it for a two-tailed one</li>
        <li>Stating the hypotheses in terms of the sample proportion instead of p</li>
        <li>Comparing P(X = observed) with the significance level rather than the tail probability</li>
        <li>Giving only the statistical conclusion and not the contextual one</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> decide one-tailed or two-tailed from the wording before anything else. "Has it changed?" is two-tailed; "has it increased?" is one-tailed, and getting this wrong invalidates every mark after it.</p>`,

  'Regression, Correlation and Hypothesis Testing': `<h3>Regression lines</h3>
      <p>The least squares regression line of y on x, y = a + bx, minimises the sum of the squared vertical distances from the points. It predicts y from x, and only in that direction: x must be the independent (explanatory) variable and y the dependent (response) one.</p>
      <ul>
        <li><strong>Interpolation:</strong> predicting inside the range of the data - reasonably reliable</li>
        <li><strong>Extrapolation:</strong> predicting outside it - unreliable, because there is no evidence the pattern continues</li>
      </ul>
      <p>Interpreting the coefficients in context earns marks: b is the change in y per unit increase in x, and a is the value of y when x = 0 (which is often meaningless in context - say so if it is).</p>
      <h3>Exponential models</h3>
      <p>Non-linear relationships are linearised with logarithms:</p>
      <ul>
        <li>y = ax<sup>n</sup> gives log y = log a + n log x - a straight line of log y against log x</li>
        <li>y = ab<sup>x</sup> gives log y = log a + x log b - a straight line of log y against x</li>
      </ul>
      <p>The gradient and intercept of the fitted line then recover the constants.</p>
      <h3>The product moment correlation coefficient</h3>
      <p>r measures linear correlation and always lies between −1 and 1. Values near ±1 mean strong linear correlation, near 0 means weak. Correlation is not causation, and r says nothing about a curved relationship.</p>
      <h3>Hypothesis test for zero correlation</h3>
      <p>H₀: ρ = 0 against H₁: ρ ≠ 0 (or ρ &gt; 0, or ρ &lt; 0), where ρ is the population correlation coefficient. Compare |r| from the sample against the critical value for the given sample size and significance level, then conclude in context.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>Using the y on x line to predict x from y</li>
        <li>Extrapolating without commenting on its unreliability</li>
        <li>Using r (the sample value) in the hypotheses instead of ρ</li>
        <li>Concluding that x causes y from a strong correlation alone</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> critical values depend on the sample size <em>n</em>, so read n off the data before going to the table - using the wrong row is the most common way this test goes wrong.</p>`,

  'Conditional Probability': `<h3>The conditional probability formula</h3>
      <p>P(A | B) = P(A ∩ B) / P(B), read as "the probability of A given that B has happened". Conditioning on B restricts the sample space to B alone, which is why you divide by P(B).</p>
      <h3>The multiplication rule</h3>
      <p>Rearranging gives P(A ∩ B) = P(A | B) × P(B). This is what you are doing when you multiply along the branches of a tree diagram: the second probability is already conditional on the first.</p>
      <h3>Testing for independence</h3>
      <p>A and B are independent if any one of these holds (they are equivalent):</p>
      <ul>
        <li>P(A ∩ B) = P(A) × P(B)</li>
        <li>P(A | B) = P(A)</li>
        <li>P(B | A) = P(B)</li>
      </ul>
      <p>Show the calculation on both sides and state the comparison - "not independent" without figures scores nothing.</p>
      <h3>Reading conditionals from diagrams</h3>
      <p>On a Venn diagram, P(A | B) is the part of A that lies inside B, divided by the whole of B. In a two-way table, condition on a row or column total rather than the grand total. Both are quicker than the formula once you can see them.</p>
      <h3>Set notation</h3>
      <ul>
        <li>A ∩ B: both</li>
        <li>A ∪ B: at least one</li>
        <li>A′: not A</li>
        <li>(A ∪ B)′ = A′ ∩ B′, and (A ∩ B)′ = A′ ∪ B′</li>
      </ul>
      <h3>Common mistakes</h3>
      <ul>
        <li>Reversing the condition - P(A | B) and P(B | A) are different numbers</li>
        <li>Dividing by the grand total instead of by P(B)</li>
        <li>Assuming independence to multiply probabilities when the question has not established it</li>
        <li>Answering "are they independent" with a yes or no and no working</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> the phrase "given that" in a question is a direct instruction to condition. Underline it, identify which event goes on which side of the bar, and the calculation follows.</p>`,

  'The Normal Distribution': `<h3>Properties</h3>
      <p>X ~ N(μ, σ²) is continuous, symmetric about the mean, and bell-shaped, with the mean, median and mode all equal to μ. The total area under the curve is 1, and the points of inflection are at μ ± σ.</p>
      <p>Approximately 68% of the data lies within 1σ of the mean, 95% within 2σ, and 99.7% within 3σ.</p>
      <h3>Standardising</h3>
      <p>Z = (X − μ) / σ converts any normal variable to the standard normal Z ~ N(0, 1). Standardising is what lets one table serve every normal distribution, and it is the step needed when μ or σ is the unknown.</p>
      <h3>Finding probabilities</h3>
      <p>Because the distribution is continuous, P(X = a) = 0 and P(X &lt; a) = P(X ≤ a) - there is no ±0.5 adjustment as there would be for a discrete variable. Sketch the curve and shade the region you want before calculating.</p>
      <h3>Inverse normal problems</h3>
      <p>Given a probability, work back to the value - used for questions like "find the mark exceeded by the top 10%". If both μ and σ are unknown, standardise both given conditions to form two simultaneous equations in μ and σ.</p>
      <h3>Normal approximation to the binomial</h3>
      <p>If X ~ B(n, p) with n large and p close to 0.5, then X is approximately N(np, np(1 − p)). Because you are approximating a discrete distribution with a continuous one, apply a <strong>continuity correction</strong>: P(X ≤ 5) becomes P(Y &lt; 5.5), and P(X ≥ 5) becomes P(Y &gt; 4.5).</p>
      <h3>Hypothesis testing for a mean</h3>
      <p>For a sample of size n from a normal population, the sample mean has distribution N(μ, σ²/n). Note the variance is divided by n, so the standard deviation used is σ/√n.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>Entering the variance where the calculator wants the standard deviation, or vice versa</li>
        <li>Omitting or mis-directing the continuity correction</li>
        <li>Using σ instead of σ/√n when testing a sample mean</li>
        <li>Applying a ±0.5 adjustment to a genuinely continuous normal variable</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> always sketch the bell curve and shade. Half the errors in this topic come from calculating the complement of the region actually asked for, and a sketch catches that instantly.</p>`,

  // ================================================== MECHANICS · YEAR 2
  Moments: `<h3>The moment of a force</h3>
      <p>Moment = force × perpendicular distance from the pivot, measured in newton-metres (Nm). State the sense - clockwise or anticlockwise - with every moment you write down.</p>
      <p>If the force is at an angle θ to the rod, either resolve it and use the perpendicular component (F sin θ × d), or use the perpendicular distance from the pivot to the line of action.</p>
      <h3>Equilibrium of a rigid body</h3>
      <p>A rigid body in equilibrium satisfies two conditions at once:</p>
      <ul>
        <li>The resultant force is zero (resolve horizontally and vertically)</li>
        <li>The total moment about <em>any</em> point is zero</li>
      </ul>
      <p>Because the second holds about any point, choose your pivot cleverly: taking moments about a point where an unknown force acts eliminates that unknown from the equation entirely.</p>
      <h3>Uniform and non-uniform rods</h3>
      <p>A uniform rod has its weight acting at the midpoint. For a non-uniform rod the centre of mass is somewhere else, and its position is usually what the question is asking you to find - let its distance from one end be x and solve.</p>
      <h3>Tilting</h3>
      <p>A body on the point of tilting about a support has zero reaction at every <em>other</em> support. Setting that reaction to zero is the extra equation that makes the problem solvable.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>Using the distance along the rod instead of the perpendicular distance for an angled force</li>
        <li>Forgetting the weight of the rod itself</li>
        <li>Placing the weight of a non-uniform rod at the midpoint</li>
        <li>Taking moments about a point but leaving out a force that still has a moment about it</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> draw the diagram and mark every force with its distance from your chosen pivot before writing any equation. Choosing the pivot to kill an unknown usually turns two simultaneous equations into one.</p>`,

  'Forces and Friction': `<h3>Resolving forces</h3>
      <p>Any force can be split into perpendicular components: F cos θ along the direction of the angle and F sin θ perpendicular to it. Choose axes that make the problem simplest - on an inclined plane, resolve parallel and perpendicular to the slope rather than horizontally and vertically.</p>
      <h3>Friction</h3>
      <ul>
        <li>Friction opposes the direction of motion, or of attempted motion</li>
        <li>F ≤ μR, where μ is the coefficient of friction and R the normal reaction</li>
        <li>At the point of slipping the friction is <strong>limiting</strong>: F = μR</li>
      </ul>
      <p>The inequality matters. A body that is stationary and not on the point of moving has friction less than μR, and the exact value comes from the equilibrium equation, not from μR.</p>
      <h3>Inclined planes</h3>
      <p>For a particle of weight mg on a slope at angle α:</p>
      <ul>
        <li>Perpendicular to the slope: R = mg cos α (plus any component of an applied force)</li>
        <li>Parallel to the slope: the component of weight down the slope is mg sin α</li>
      </ul>
      <p>Note that R is <em>not</em> mg on a slope, which changes the value of μR.</p>
      <h3>Connected particles</h3>
      <p>Write a separate F = ma equation for each particle, with the same tension and the same acceleration magnitude throughout an inextensible string. Take the positive direction consistently as the direction of motion.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>Using R = mg on an inclined plane</li>
        <li>Assuming friction equals μR when the body is in equilibrium and not on the point of moving</li>
        <li>Mixing up sin and cos when resolving - check against the extreme case α = 0</li>
        <li>Forgetting that friction reverses direction if the direction of motion reverses</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> "on the point of moving", "about to slip" and "in limiting equilibrium" all mean the same thing: F = μR exactly. Spotting that phrase gives you the equation you were missing.</p>`,

  Projectiles: `<h3>The modelling assumptions</h3>
      <p>Air resistance is ignored, the projectile is a particle, and gravity is constant. Horizontal and vertical motion are then completely independent, linked only by a shared time t.</p>
      <ul>
        <li>Horizontally: no acceleration, so the velocity stays u cos θ and distance = u cos θ × t</li>
        <li>Vertically: acceleration is −g, so use the suvat equations with u sin θ as the initial velocity</li>
      </ul>
      <h3>Standard results</h3>
      <p>For a projectile launched from ground level at speed u and angle θ:</p>
      <ul>
        <li>Time to greatest height: t = u sin θ / g (where the vertical velocity is zero)</li>
        <li>Greatest height: H = u² sin²θ / (2g)</li>
        <li>Time of flight: twice the time to greatest height</li>
        <li>Range on level ground: R = u² sin 2θ / g, maximised at θ = 45°</li>
      </ul>
      <p>These only hold for launch and landing at the same level - derive from suvat whenever the heights differ.</p>
      <h3>The equation of the trajectory</h3>
      <p>Eliminating t between the two equations gives y = x tan θ − gx²/(2u² cos²θ), a parabola. Use it when a question relates a horizontal and a vertical distance without mentioning time.</p>
      <h3>Velocity at a given moment</h3>
      <p>Combine the components: speed = √(vₓ² + v_y²), and the angle to the horizontal is arctan(v_y / vₓ). Below the horizontal the vertical component is negative.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>Applying acceleration to the horizontal component - it is always zero</li>
        <li>Using the level-ground range formula when the projectile lands lower or higher than it started</li>
        <li>Sign errors on g: choose up as positive and use a = −9.8, consistently</li>
        <li>Forgetting that at the highest point only the <em>vertical</em> velocity is zero, not the speed</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> write two columns, horizontal and vertical, and list u, v, a, s and t in each. The unknown t is nearly always the bridge between them.</p>`,

  'Application of Forces': `<h3>Newton's laws in two dimensions</h3>
      <p>Resolve in two perpendicular directions and apply F = ma in each. For a particle in equilibrium the resultant is zero in both directions, so both equations are set to zero.</p>
      <h3>Choosing directions</h3>
      <p>Resolve along and perpendicular to the direction of acceleration wherever possible - on a slope that means parallel and perpendicular to the slope, which keeps the acceleration entirely in one equation and leaves the other as a straightforward equilibrium.</p>
      <h3>Connected particles</h3>
      <p>For particles joined by an inextensible string over a smooth pulley:</p>
      <ul>
        <li>The tension is the same throughout the string</li>
        <li>The magnitude of the acceleration is the same for both particles</li>
        <li>Write F = ma separately for each particle, taking the positive direction as its own direction of motion</li>
        <li>Adding the two equations eliminates T; subtracting them eliminates a</li>
      </ul>
      <p>When the string breaks or a particle hits the ground, the motion changes: the remaining particle becomes a free projectile under gravity alone, which is usually the second half of the question.</p>
      <h3>Statics of a rigid body</h3>
      <p>Ladders and rods against walls combine resolving with taking moments. A "smooth" wall exerts only a normal reaction, with no friction; a "rough" floor exerts both, and the ladder slips when friction reaches μR.</p>
      <h3>Common mistakes</h3>
      <ul>
        <li>Using different tensions on either side of a smooth pulley</li>
        <li>Taking the same positive direction for both connected particles, giving the wrong sign on one acceleration</li>
        <li>Including a friction force at a surface described as smooth</li>
        <li>Continuing to apply the string tension after the string has gone slack</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> label every force on the diagram before writing a single equation, and check each one is a real force. Invented forces - and missing weights - cause more lost marks here than the algebra does.</p>`,

  'Further Kinematics': `<h3>Vectors in kinematics</h3>
      <p>Displacement, velocity and acceleration are all vectors, written in i, j form. The suvat equations hold in vector form when the acceleration is constant:</p>
      <ul>
        <li>v = u + at</li>
        <li>s = ut + ½at²</li>
        <li>s = ½(u + v)t</li>
      </ul>
      <p>There is no vector version of v² = u² + 2as, because that equation relies on squaring, which is not defined for vectors here.</p>
      <h3>Speed and direction</h3>
      <p>Speed is the magnitude of the velocity vector, |v| = √(vₓ² + v_y²). Direction is usually asked as a bearing or as an angle to i - take care which quadrant the vector is in before quoting an arctan value.</p>
      <h3>Variable acceleration with calculus</h3>
      <p>When the acceleration is not constant, suvat does not apply and you must differentiate or integrate:</p>
      <ul>
        <li>v = dr/dt, and a = dv/dt = d²r/dt²</li>
        <li>v = ∫ a dt, and r = ∫ v dt</li>
      </ul>
      <p>Each integration introduces a constant vector, fixed by the initial conditions given in the question.</p>
      <h3>Typical questions</h3>
      <ul>
        <li>Instantaneously at rest: set the velocity vector to zero and solve for t</li>
        <li>Moving parallel to a given vector (or due north): set the appropriate component to zero, or make the components proportional</li>
        <li>Collision or interception: set the two position vectors equal and check both components give the same t</li>
      </ul>
      <h3>Common mistakes</h3>
      <ul>
        <li>Using suvat when the acceleration varies with time</li>
        <li>Dropping the constant of integration, or treating it as a scalar rather than a vector</li>
        <li>Confusing distance travelled with the magnitude of the displacement</li>
        <li>Setting only one component to zero when asking for "at rest" - both must vanish</li>
      </ul>
      <p class='exam-tip'><strong>Exam tip:</strong> check whether the acceleration is constant before choosing your method. If the question gives a as a function of t, every suvat equation is off the table.</p>`,
}
