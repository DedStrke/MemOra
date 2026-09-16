/*
  Edexcel A-level Economics A (9EC0) - Consumer and Producer Surplus (1.2.8).

  A second specification-gap pass (see econ-notes-gaps.js for the first ten)
  found one more section examined as a chapter in its own right but with no
  chapter of its own: consumer and producer surplus. It existed only as a
  paragraph inside "Price Determination and the Price Mechanism" - which is
  where a student would have to already be looking to find it, rather than
  a chapter they could pick to revise directly.

  It matters beyond its own mark allocation: 1.2.8 is the concept every
  later welfare-loss diagram in the specification (externalities, taxes,
  subsidies, price controls, monopoly, trade) is built out of, so a shaky
  grasp here costs marks in six other chapters, not just this one.

  Same shape as the rest of the rewritten notes: definition, mechanism, then
  its own evaluation block for the AO4 marks. No em dashes.
*/

import { h, p, ul, defn, det, worked, diagram, tip, chapter } from './econ-notes-build'

const surplus = chapter(
  p(
    'Every demand and supply curve drawn since "Price Determination" has had a story hiding inside it: how much value is created for buyers and sellers by trading at all, and how a market outcome shares that value between them. Consumer and producer surplus is that story made precise enough to measure, shade on a diagram, and use as the benchmark for whether a market outcome is efficient.',
  ),
  h('Consumer surplus'),
  defn(
    'Consumer surplus',
    'The difference between the maximum price a consumer is WILLING to pay for a good and the price they ACTUALLY pay. Total consumer surplus in a market is the sum of this across every unit bought.',
  ),
  p(
    'The demand curve is a willingness-to-pay curve: each point on it shows the maximum price *some* buyer would accept for one more unit, which is why it slopes down - the first units go to buyers who value the good most, and each additional unit is sold to a buyer who values it slightly less. At the market price, every buyer who would have paid more than that price still only pays the market price, and keeps the difference as surplus.',
  ),
  h('Producer surplus'),
  defn(
    'Producer surplus',
    'The difference between the price a producer actually receives for a good and the minimum price they would have been willing to accept for it. Total producer surplus in a market is the sum of this across every unit sold.',
  ),
  p(
    'The supply curve is a willingness-to-accept curve: each point shows the minimum price needed to bring one more unit to market, which is why it slopes up - it reflects rising marginal cost as output expands. At the market price, every unit that cost less than that price to produce earns the producer the difference as surplus.',
  ),
  diagram('consumer-producer-surplus'),
  h('Reading the diagram'),
  ul([
    'Consumer surplus is the triangle ABOVE the price line and BELOW the demand curve, up to the equilibrium quantity.',
    'Producer surplus is the triangle BELOW the price line and ABOVE the supply curve, up to the equilibrium quantity.',
    'TOTAL surplus (sometimes called community or social surplus) is the sum of the two - the whole triangle bounded by the demand curve, the supply curve, and the vertical axis.',
  ]),
  worked(
    'A concert ticket sells for £40. Buyer A would have paid £70, Buyer B would have paid £55, and Buyer C would have paid £40 exactly. What is the total consumer surplus from these three sales?',
    '(70 − 40) + (55 − 40) + (40 − 40) = 30 + 15 + 0 = £45. Buyer C is the marginal buyer: willing to pay exactly the price charged, so gains no surplus at all - which is exactly why the buyer at the equilibrium quantity sits ON the demand curve at the price line, closing the triangle.',
  ),
  h('Why the free market maximises total surplus'),
  p(
    'At the market equilibrium, quantity is exactly where the demand curve (marginal benefit) crosses the supply curve (marginal cost). This is also where MSB = MSC, PROVIDED there is no market failure - so free-market equilibrium is where total surplus is at its largest possible value. Moving output away from equilibrium in either direction shrinks total surplus:',
  ),
  ul([
    'Producing LESS than equilibrium (a shortage, or a quantity restriction) leaves potential trades unmade between buyers who would pay more than it would cost some producer to supply them - a deadweight loss of the surplus those unmade trades would have created.',
    'Producing MORE than equilibrium (a surplus, or a mandated minimum quantity) forces trades where the cost of the extra units exceeds what any buyer would pay for them - again a deadweight loss, this time from units that should never have been made.',
  ]),
  p(
    'This is the formal basis for calling a competitive free market allocatively efficient: it is the one output level from which no reallocation of resources can make anyone better off without making someone else worse off (a Pareto-efficient outcome), and it is exactly the benchmark every market-failure diagram in the next chapter measures a welfare LOSS against.',
  ),
  h('How a shift changes the size of each surplus'),
  p(
    'A rightward shift in demand (say, from rising income) raises both price and quantity: producer surplus unambiguously rises, since producers now sell more units at a higher price. Consumer surplus is more subtle - price is higher, which on its own would shrink it, but quantity is higher too, and for a normal rightward shift the quantity effect dominates, so total surplus still rises overall; the shift represents a genuine increase in how much buyers value the good at every quantity, not just a movement along a fixed demand curve. A rightward shift in supply (a cost-reducing technology, say) lowers price and raises quantity: consumer surplus unambiguously rises, since buyers now pay less for more, and total surplus rises for the same reason - genuinely lower cost creates value that did not exist before.',
  ),
  diagram('surplus-change'),
  p(
    'A price RISE without any shift - a tax being the standard example - shrinks consumer surplus twice over: existing buyers pay more for each unit, and some buyers who valued the good below the new price leave the market and lose their surplus entirely. How much is lost depends on price elasticity of demand: the more INELASTIC demand is, the fewer buyers leave the market, so more of the original surplus survives as reduced surplus rather than being destroyed outright - which is also exactly why taxing an inelastic good raises revenue efficiently but costs the remaining consumers heavily per unit.',
  ),
  det(
    'Whether surplus is a reliable measure of welfare',
    'The whole apparatus above treats "willingness to pay" as a clean stand-in for how much someone values a good, and treats total surplus as if it were simply welfare. Both assumptions carry real weaknesses.',
    [
      'Willingness to pay is constrained by ABILITY to pay: a low-income buyer who desperately needs a good but cannot afford £40 for it registers as having lower "willingness to pay" than a wealthy buyer who barely wants it. The diagram cannot distinguish need from mere preference backed by money.',
      'It assumes surplus is fully comparable and can be added up in one number across completely different people, which requires treating a pound of surplus to a poor buyer and a pound to a rich buyer as worth exactly the same thing - a strong and often criticised assumption.',
      'It ignores EXTERNALITIES entirely: the diagram only counts the private benefit and private cost captured in the demand and supply curves. Where a third party is affected (the whole subject of the next chapter), the free-market quantity that maximises PRIVATE surplus is not the quantity that maximises SOCIAL welfare.',
      'It assumes consumers are rational, fully informed optimisers whose demand curve accurately reflects true value - behavioural economics (rational decision making, 1.2.1) suggests actual willingness to pay can be distorted by framing, herd behaviour or imperfect information.',
    ],
    [
      'None of this means the concept is useless - it is precisely BECAUSE the free-market benchmark is well-defined that a market failure can be measured at all: the size of a deadweight loss triangle is a direct, quantifiable answer to "how much worse off does the externality make us", which a purely verbal argument could not provide.',
      'The distributional point is a common 25-mark evaluation line: two policies can raise total surplus by the identical amount while helping entirely different groups of people, and "total surplus rose" says nothing about whether that rise was fairly shared.',
    ],
  ),
  tip(
    'When a question asks you to "use a diagram to show the effect on consumer and/or producer surplus", always identify the NEW price and quantity first, then describe which triangle grew, which shrank, and whether any surplus was transferred (to the other side of the market, or to the government as tax revenue) versus destroyed outright as deadweight loss - examiners give separate marks for "transferred" and "lost", and conflating the two is the single most common way this question loses marks.',
  ),
)

export const ECON_GAP_NOTES_2 = {
  'Consumer and Producer Surplus': surplus,
}

/* ===================================================== FLASHCARDS */

const c = (front, back) => ({ topic: 'Consumer and Producer Surplus', front, back })

export const ECON_SURPLUS_FLASHCARDS = [
  c('What is consumer surplus?', 'The difference between the maximum price a consumer is willing to pay and the price they actually pay.'),
  c('What is producer surplus?', 'The difference between the price a producer actually receives and the minimum price they would have accepted.'),
  c('On a supply and demand diagram, where is consumer surplus?', 'The triangle above the price line and below the demand curve, up to the equilibrium quantity.'),
  c('On a supply and demand diagram, where is producer surplus?', 'The triangle below the price line and above the supply curve, up to the equilibrium quantity.'),
  c('What is total (community) surplus?', 'Consumer surplus plus producer surplus - the whole area bounded by the demand curve, the supply curve and the price axis.'),
  c('At what output is total surplus maximised, assuming no market failure?', 'At the free-market equilibrium quantity, where the demand curve (marginal benefit) crosses the supply curve (marginal cost).'),
  c('Why does producing less than the equilibrium quantity create a deadweight loss?', 'It leaves trades unmade between buyers who would pay more than it would cost some producer to supply them, destroying the surplus those trades would have created.'),
  c('How does a rightward shift in supply affect consumer surplus?', 'It rises unambiguously: price falls and quantity rises, so buyers pay less for more.'),
  c('How does a price rise (e.g. from a tax) affect consumer surplus?', 'It shrinks twice over: existing buyers pay more per unit, and buyers who valued the good below the new price leave the market and lose their surplus entirely.'),
  c('Why does more inelastic demand mean a smaller loss of consumer surplus from a price rise?', 'Fewer buyers leave the market when demand is inelastic, so more of the original surplus survives (reduced) rather than being destroyed outright.'),
  c('Give one limitation of using consumer surplus as a measure of welfare.', 'Willingness to pay reflects ability to pay as well as genuine desire for the good, so it understates the value a low-income consumer places on something they cannot afford.'),
  c('Why does the surplus framework not capture the welfare effect of an externality on its own?', 'It only measures private benefit and private cost from the demand and supply curves; a third-party effect is outside both curves entirely.'),
]

/* ===================================================== MCQ */

const m = (question, options, answer, explanation) => ({
  topic: 'Consumer and Producer Surplus',
  question,
  options,
  answer,
  explanation,
})

export const ECON_SURPLUS_MCQ = [
  m(
    'Consumer surplus is best described as',
    ['the profit a firm makes on a sale', 'the difference between what a consumer is willing to pay and what they actually pay', 'the total revenue received by producers', 'the tax paid by a consumer on a purchase'],
    1,
    'Consumer surplus is the gap between willingness to pay and the actual (market) price paid.',
  ),
  m(
    'On a standard supply and demand diagram, producer surplus is the area',
    ['above the price line and below the demand curve', 'below the price line and above the supply curve', 'below both curves', 'above both curves'],
    1,
    'Producer surplus sits below the market price and above the supply curve, up to the equilibrium quantity.',
  ),
  m(
    'Total surplus in a market is maximised at',
    ['the quantity where demand equals zero', 'any quantity above the free-market equilibrium', 'the free-market equilibrium quantity, assuming no market failure', 'the quantity that maximises producer surplus alone'],
    2,
    'Provided there is no externality, the free-market equilibrium (MSB = MSC) is the output level at which total surplus is largest.',
  ),
  m(
    'A rise in price caused by an indirect tax, with no shift in the underlying curves, will',
    ['increase consumer surplus and increase producer surplus', 'decrease consumer surplus and decrease producer surplus', 'decrease consumer surplus only, leaving producer surplus unchanged', 'increase total surplus, since the government gains revenue'],
    1,
    'A tax raises the price to consumers and lowers the price received by producers, shrinking both surpluses; part of the loss becomes tax revenue and part becomes deadweight loss.',
  ),
  m(
    'The more price INELASTIC demand is, the more a price rise will',
    ['destroy consumer surplus outright as buyers leave the market', 'preserve consumer surplus, since few buyers leave the market even though it shrinks', 'have no effect on consumer surplus at all', 'increase consumer surplus'],
    1,
    'Inelastic demand means quantity barely falls, so relatively few buyers exit and lose their surplus entirely; most surplus survives in a reduced form instead of being destroyed.',
  ),
  m(
    'Which of these is a valid criticism of using consumer surplus as a measure of economic welfare?',
    ['It cannot be shown on a diagram', 'It ignores that willingness to pay depends partly on ability to pay, not just genuine desire for a good', 'It only applies to producers, not consumers', 'It always equals producer surplus'],
    1,
    'Willingness to pay is constrained by income, so the concept can understate the true value a low-income consumer places on a good.',
  ),
]

/* ===================================================== EXAM QUESTIONS */

const q = (question, marks, markScheme) => ({ topic: 'Consumer and Producer Surplus', question, marks, markScheme })

export const ECON_SURPLUS_EXAM = [
  q(
    'Using a diagram, explain how consumer surplus and producer surplus are determined in a competitive market.',
    8,
    [
      'Correctly labelled supply and demand diagram with equilibrium price and quantity (1)',
      'Consumer surplus shaded/identified as the area above price and below demand (2)',
      'Producer surplus shaded/identified as the area below price and above supply (2)',
      'Explanation that consumer surplus is the gap between willingness to pay and price actually paid (1)',
      'Explanation that producer surplus is the gap between price received and the minimum acceptable price (1)',
      'Reference to total/community surplus as the sum of the two (1)',
    ],
  ),
  q(
    'Explain, using a diagram, why a fall in the market price of a good (with no shift in supply) increases consumer surplus but reduces producer surplus.',
    6,
    [
      'Diagram showing the original equilibrium and a new, lower price with quantity extended along a fixed demand curve (1)',
      'Consumer surplus triangle grows: existing buyers now pay less, and new buyers whose willingness to pay lies between the old and new price now enter the market (2)',
      'Producer surplus triangle shrinks: producers now receive less per unit, and the least efficient units that were only viable at the old price may no longer be supplied (2)',
      'Recognition that total surplus is ambiguous from a price fall alone, since one triangle grows and the other shrinks, unless the fall reflects a genuine rightward supply shift rather than a price control (1)',
    ],
  ),
  q(
    'Evaluate the significance of consumer and producer surplus for judging whether a market outcome is efficient. (12 marks)',
    12,
    [
      'Define consumer surplus, producer surplus and total surplus, and state that the free-market equilibrium maximises total surplus absent market failure (2)',
      'Explain how a quantity below or above equilibrium creates a deadweight loss of surplus, using this as the definition of allocative efficiency (3)',
      'Application: link this to a real policy debate, e.g. a minimum wage, a tax, or a monopoly restricting output below the competitive level (2)',
      'Evaluation: the concept ignores externalities entirely, since it only captures private benefit and private cost (2)',
      'Evaluation: willingness to pay reflects ability to pay, so the measure has a distributional blind spot - a rise in total surplus says nothing about who gained it (2)',
      'Judgement: the concept is a powerful and precise benchmark for efficiency in its own narrow terms, but "efficient" in this sense is not the same as "equitable" or "welfare-maximising once externalities and distribution are considered" (1)',
    ],
  ),
]
