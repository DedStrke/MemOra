/*
  Theme 1 continued: market failure and government intervention.

  This is the highest-yield part of Theme 1 - almost every Paper 1 essay is a
  market failure or an intervention question, and both are marked heavily on
  evaluation. Every intervention below therefore carries what it does, the
  diagram, and the reasons it may fail, because "evaluate this policy" is the
  question that will actually be asked.
*/

import { h, p, defn, det, diagram, tip, table, chapter } from './econ-notes-build'

/* ============================================ MARKET FAILURE */

const typesOfMarketFailure = chapter(
  defn(
    'Market failure',
    'Where the free market fails to allocate resources efficiently, so the free-market quantity differs from the socially optimum quantity where MSB = MSC.',
  ),
  table(
    ['Type', 'What goes wrong', 'Result'],
    [
      ['Externalities', 'Costs or benefits fall on third parties and are not in the price', 'Over- or under-production'],
      ['Public goods', 'Non-excludable and non-rival, so the free rider problem prevents provision', 'A MISSING market - quantity zero'],
      ['Information gaps', 'Consumers or producers lack information to judge true costs and benefits', 'Merit goods under-consumed, demerit goods over-consumed'],
      ['Monopoly power', 'A firm restricts output and raises price above marginal cost', 'Allocative inefficiency and deadweight loss'],
      ['Immobility of factors', 'Labour or capital cannot move between uses or places', 'Structural unemployment and misallocation'],
      ['Inequality', 'The market allocates by ability to pay, not need', 'An outcome society may judge inequitable'],
    ],
  ),
  defn(
    'Complete market failure',
    'The market does not form at all - quantity supplied is zero. Public goods are the classic case; this is called a MISSING market.',
  ),
  defn(
    'Partial market failure',
    'The market functions but delivers the wrong quantity - over-production of demerit goods, under-consumption of merit goods.',
  ),
  tip(
    'The distinction matters for evaluation: for a MISSING market almost any intervention improves welfare, because the alternative is nothing. For a partially failing market a badly calibrated intervention can easily make things worse.',
  ),
  h('Economic efficiency'),
  table(
    ['Type', 'Condition', 'Meaning'],
    [
      ['Allocative efficiency', 'P = MC', 'Resources are allocated to produce what consumers most value. The last unit is worth exactly what it cost to make.'],
      ['Productive efficiency', 'Producing at minimum average cost', 'No waste - the maximum output from given inputs. On the PPF.'],
      ['Dynamic efficiency', 'Investment and innovation over time', 'Costs fall and quality rises in the long run; requires supernormal profit to fund R&D.'],
      ['X-inefficiency', 'Costs above the minimum attainable', 'Organisational slack from lack of competitive pressure - a monopoly problem.'],
    ],
  ),
  h('Factor immobility'),
  det(
    'Immobility of labour and capital',
    'Resources that cannot move between uses or places are misallocated, so the economy operates inside its PPF.',
    [
      '*Occupational immobility*: a redundant steelworker cannot become a software developer without retraining, so the skills mismatch causes structural unemployment.',
      '*Geographical immobility*: housing costs, family ties and transport prevent moving to where the jobs are - which is why UK unemployment is regionally concentrated.',
      'Capital can be immobile too: a specialised factory has no alternative use, so its resources are stranded when the industry declines.',
    ],
    [
      'Some immobility is temporary and resolves as people retrain and relocate over years.',
      'Policy can reduce it - retraining, relocation support, affordable housing - but only slowly and at significant cost.',
      'Perfect mobility would be undesirable if it meant no one had specialised skills at all.',
    ],
  ),
  h('Inequality as a market failure'),
  det(
    'Is inequality a market failure?',
    'It is contested, and saying why is worth a mark.',
    [
      'The market allocates by ability to pay, not by need. Someone with no income has no effective demand, so the market supplies them nothing however great their need.',
      'This produces an outcome that may be EFFICIENT but that society judges inequitable.',
      'Inequality can also cause inefficiency: children in poverty acquire less human capital, so potential output is lost.',
    ],
    [
      'Strictly, inequality is a failure of EQUITY rather than of efficiency - a perfectly competitive market can be both efficient and deeply unequal, so this is a different kind of objection.',
      'Some inequality is necessary for incentives: rewarding effort and risk-taking is what makes the market work.',
      'Judging what level is "too much" requires a normative judgement, which economics alone cannot supply.',
    ],
  ),
)

/* ============================================== EXTERNALITIES */

const externalities = chapter(
  defn(
    'Externality',
    'A cost or benefit imposed on a THIRD PARTY not involved in the transaction, which is not reflected in the market price.',
  ),
  p('Learn the four notations - questions are set in these terms and marks are lost for mixing them up:'),
  table(
    ['Term', 'Meaning'],
    [
      ['MPC', 'Marginal private cost - the cost to the producer. This is the supply curve.'],
      ['MSC', 'Marginal social cost - MPC plus any external cost.'],
      ['MPB', 'Marginal private benefit - the benefit to the consumer. This is the demand curve.'],
      ['MSB', 'Marginal social benefit - MPB plus any external benefit.'],
    ],
  ),
  p('The social optimum is always where *MSB = MSC*, at Q*. The free market settles where *MPB = MPC*, at Qm. Market failure is the gap between them.'),
  h('Negative production externality'),
  det(
    'The mechanism',
    'Firms pay only their private costs, so they over-produce.',
    [
      'A factory polluting a river imposes clean-up costs, health costs and lost fishing income on others.',
      'MSC lies ABOVE MPC by the external cost, so the true cost of production exceeds what the firm pays.',
      'The market produces at Qm where MPC = MSB, which is greater than Q* where MSC = MSB.',
      'Every unit between Q* and Qm costs society more than it benefits it - the welfare loss triangle.',
    ],
    [
      'Valuing the external cost in money is extremely difficult, so the size of the gap - and therefore the correct tax - is uncertain.',
      'The Coase theorem argues that where property rights are clear and bargaining costs are low, the parties can negotiate an efficient outcome without government. In practice bargaining costs are high with many affected parties.',
    ],
  ),
  diagram('negative-externality'),
  h('Positive consumption externality'),
  det(
    'The mechanism',
    'Consumers weigh only their private benefit, so they under-consume.',
    [
      'Vaccination protects the individual AND reduces transmission to everyone else - herd immunity is an external benefit.',
      'Education raises the individual’s earnings AND raises productivity, tax revenue and civic participation for everyone.',
      'MSB lies ABOVE MPB by the external benefit, so the market consumes Qm which is less than Q*.',
      'The welfare loss is the benefit foregone on the units between Qm and Q*.',
    ],
    [
      'External benefits are as hard to value as external costs, so the correct subsidy is uncertain.',
      'Some claimed external benefits are really private benefits captured by the individual, which weakens the case for subsidy.',
    ],
  ),
  diagram('positive-externality'),
  h('The other two cases'),
  table(
    ['Type', 'Example', 'Effect'],
    [
      ['Negative CONSUMPTION externality', 'Smoking, alcohol, sugar - passive smoking, NHS costs, antisocial behaviour', 'MSB below MPB; over-consumption at Qm > Q*'],
      ['Positive PRODUCTION externality', 'R&D and training - knowledge spillovers benefit rival firms and the wider economy', 'MSC below MPC; under-production at Qm < Q*'],
    ],
  ),
  tip(
    'Identify PRODUCTION or CONSUMPTION first - that tells you whether the divergence is on the cost side or the benefit side - then POSITIVE or NEGATIVE, which tells you which curve lies above which. Getting the diagram the wrong way round costs the whole question.',
  ),
)

/* ================================ PUBLIC GOODS & INFORMATION */

const publicGoods = chapter(
  defn('Public good', 'A good that is both non-excludable and non-rival.'),
  table(
    ['Property', 'Meaning', 'Consequence'],
    [
      ['Non-excludable', 'You cannot prevent someone who has not paid from consuming it', 'The free rider problem - nobody pays'],
      ['Non-rival', 'One person’s consumption does not reduce the amount available to others', 'Marginal cost of an extra user is zero, so any positive price is allocatively inefficient'],
    ],
  ),
  p('Examples: national defence, street lighting, flood defences, the police, lighthouses.'),
  det(
    'The free rider problem',
    'Because non-payers cannot be excluded, everyone waits for someone else to pay.',
    [
      'Each individual reasons that the good will be provided whether or not they contribute, so contributing is irrational.',
      'Effective demand therefore collapses to zero, no firm can make a profit, and the market NEVER FORMS.',
      'This is complete market failure - the state must provide from general taxation.',
    ],
    [
      'Some public goods are provided privately through bundling: commercial radio is funded by advertising, and lighthouses were historically funded by port fees.',
      'Voluntary contribution works for some goods - open-source software, Wikipedia - because people derive private benefit from contributing.',
      'Government provision has its own problems: it must guess the right quantity without price signals, and may over- or under-provide.',
    ],
  ),
  diagram('public-goods'),
  h('Quasi-public goods'),
  p(
    'Goods with the properties only partially. A road is non-excludable and non-rival at 3am, but becomes rival when congested and excludable if tolled. A beach is non-rival until crowded.',
  ),
  defn('Private good', 'Excludable and rival - the normal case, which the market supplies efficiently.'),

  h('Information gaps'),
  defn(
    'Asymmetric information',
    'Where one party in a transaction has more or better information than the other, so the market outcome is inefficient.',
  ),
  det(
    'Merit goods - under-consumed',
    'Goods whose private benefit is under-estimated by the consumer, so less is bought than is socially optimal.',
    [
      'Education, healthcare, pensions, insurance. The benefits are long-term and uncertain, so people undervalue them at the point of decision.',
      'MPB lies below the true value (MSB), so consumption settles at Qm < Q*.',
      'Present bias reinforces it - costs are now, benefits are distant.',
    ],
    [
      'Judging a good "merit" requires a value judgement about what people SHOULD want, which is paternalistic.',
      'Information provision may not change behaviour: people know smoking is harmful and smoke anyway, so the gap may not be informational at all.',
    ],
  ),
  det(
    'Demerit goods - over-consumed',
    'Goods whose private cost is under-estimated, so more is bought than is socially optimal.',
    ['Tobacco, alcohol, gambling, junk food. Consumers underestimate the long-term harm and the external cost.'],
    [
      'Where the good is addictive, information will not reduce consumption much - demand is inelastic and the decision is not fully voluntary.',
      'Restricting them raises liberty objections and can create black markets.',
    ],
  ),
  diagram('asymmetric-information'),
  h('Two named consequences'),
  table(
    ['Problem', 'Explanation'],
    [
      [
        'Adverse selection',
        'The informed party self-selects to the detriment of the uninformed. In insurance, the highest-risk people are keenest to buy, so premiums rise, low-risk people leave, and the market can unravel entirely. Akerlof’s "market for lemons": buyers cannot tell good used cars from bad, so they only offer an average price, good cars are withdrawn, and quality collapses.',
      ],
      [
        'Moral hazard',
        'Once insured, a party takes more risk because they no longer bear the full cost. Banks taking excessive risk expecting a bailout is the standard modern example.',
      ],
    ],
  ),
)

/* ======================================== GOVERNMENT INTERVENTION */

const intervention = chapter(
  p('Six interventions. For each: what it does, the diagram, and why it may fail.'),

  h('1. Indirect taxation'),
  det(
    'Indirect tax',
    'A tax on spending, used to internalise a negative externality by raising private cost to social cost.',
    [
      'A SPECIFIC tax is a fixed amount per unit, shifting supply up in a parallel shift. An AD VALOREM tax is a percentage, so the shift widens as price rises (VAT).',
      'Supply shifts left, price rises, quantity contracts towards Q*.',
      'It raises government revenue, which can be hypothecated to related spending.',
      'A Pigouvian tax set exactly equal to the external cost achieves the social optimum in theory.',
    ],
    [
      'Setting the rate requires valuing the externality, which cannot be done precisely - too low changes nothing, too high over-corrects.',
      'If demand is INELASTIC (as it is for most demerit goods) the quantity falls very little, so the tax raises revenue but does not change behaviour - a failure against its own stated aim.',
      'Regressive: it takes a larger share of income from poorer households.',
      'It can create black markets and cross-border shopping, which raises enforcement costs and can worsen the harm.',
      'Firms may absorb it in margins rather than passing it on.',
    ],
  ),
  diagram('indirect-tax'),

  h('2. Subsidies'),
  det(
    'Subsidy',
    'A payment to producers to lower costs, used to correct under-consumption of a merit good or a positive externality.',
    [
      'Supply shifts right by the amount of the subsidy per unit, so price to the consumer falls and quantity rises towards Q*.',
      'Producers receive Pc + subsidy; the government cost is subsidy × new quantity.',
      'It can also be used to support infant industries, raise employment or improve competitiveness.',
    ],
    [
      'Very expensive, with an opportunity cost in other spending.',
      'Firms may become dependent and complacent, so costs never fall - subsidies are politically very hard to withdraw.',
      'The benefit split between producer and consumer depends on elasticity, so much of the money may go to producer profit rather than lower prices.',
      'Government may pick the wrong industries - the information problem again.',
    ],
  ),
  diagram('subsidy'),

  h('3. Maximum and minimum prices'),
  det(
    'Maximum price (price ceiling)',
    'A legal maximum set BELOW equilibrium, to improve affordability.',
    [
      'Rent controls, energy price caps. Quantity demanded exceeds quantity supplied, so there is excess demand - a shortage.',
      'Those who get the good gain, since they pay less.',
    ],
    [
      'Creates shortages, queues and waiting lists, and allocation becomes arbitrary rather than by willingness to pay.',
      'Black markets emerge at prices above the cap, which can leave consumers worse off than before.',
      'Reduces producer incentive to supply and to invest - rent controls are associated with a declining housing stock over time.',
    ],
  ),
  diagram('maximum-price'),
  det(
    'Minimum price (price floor)',
    'A legal minimum set ABOVE equilibrium, to support producer incomes or discourage consumption.',
    [
      'Agricultural price supports, minimum unit pricing for alcohol, the national minimum wage in the labour market.',
      'Quantity supplied exceeds quantity demanded, so there is excess supply - a surplus.',
    ],
    [
      'Surpluses must be bought and stored by government, which is costly, or destroyed, which is wasteful - the EU Common Agricultural Policy produced exactly this.',
      'Consumers pay more, and the burden is regressive.',
      'It encourages over-production and misallocates resources into a market that does not want the output.',
    ],
  ),
  diagram('minimum-price'),

  h('4. Tradable pollution permits'),
  det(
    'Tradable permits',
    'The regulator fixes the total quantity of pollution and issues permits, which firms may trade.',
    [
      'Supply of permits is VERTICAL - total pollution is capped with certainty, which a tax cannot guarantee.',
      'Firms that can abate cheaply do so and sell their spare permits; firms that cannot, buy. Abatement therefore happens where it is cheapest, which is cost-efficient.',
      'Tightening the cap over time raises the permit price and strengthens the incentive to invest in clean technology.',
      'The market discovers the price, so the regulator does not need to know the cost of abatement.',
    ],
    [
      'Setting the cap correctly still requires knowing the optimum level of pollution - the EU ETS initially over-allocated, so the price collapsed and the scheme did nothing for years.',
      'Administration and monitoring are expensive, and enforcement is difficult across borders.',
      'It may allow the worst polluters simply to buy their way out rather than change behaviour.',
      'Firms may relocate to countries without a scheme - carbon leakage - so global emissions do not fall.',
    ],
  ),
  diagram('tradable-permits'),

  h('5. State provision and regulation'),
  det(
    'State provision',
    'Government provides the good directly, free at the point of use.',
    [
      'The only workable answer for public goods, since the market cannot form.',
      'For merit goods it raises consumption towards Q* and improves equity by removing ability to pay as a barrier.',
    ],
    [
      'Expensive, with a large opportunity cost and a need for higher taxation.',
      'Without price signals, government does not know the right quantity, so may over- or under-provide.',
      'No profit motive can mean X-inefficiency and poor quality.',
      'Free provision leads to excess demand - waiting lists ration instead of price.',
    ],
  ),
  det(
    'Regulation',
    'Rules, bans, minimum standards and licensing.',
    [
      'Bans: smoking indoors, single-use plastics. Age limits on alcohol and gambling. Compulsory seat belts. Emissions standards.',
      'Regulation is effective where the harm is severe and a quantity limit is needed rather than a price signal.',
      'It is often easier to understand and to comply with than a tax.',
    ],
    [
      'Enforcement and monitoring cost money, and a rule that is not enforced changes nothing.',
      'Regulatory capture: the regulator may come to serve the industry it regulates.',
      'Blunt - a rule applies equally to firms with very different abatement costs, so it is less cost-efficient than a tax or permits.',
      'Excessive regulation raises firms’ costs and can deter entry, reducing competition.',
    ],
  ),

  h('6. Information provision'),
  det(
    'Information provision',
    'Correcting the information gap directly rather than changing the price.',
    [
      'Compulsory labelling - calories, traffic-light nutrition, alcohol units, energy ratings.',
      'Public health campaigns on smoking, drink driving and seatbelts.',
      'It shifts perceived MPB towards true MSB, moving consumption towards Q* without the regressive burden of a tax.',
      'It preserves consumer choice, so it is politically easier than a ban.',
    ],
    [
      'People may ignore the information, or know it already and choose otherwise - knowledge does not equal behaviour change.',
      'Effects are slow and hard to measure, so it is difficult to prove value for money.',
      'It may be drowned out by far larger advertising budgets on the other side.',
      'Least effective exactly where the good is addictive, which is where the problem is worst.',
    ],
  ),
  h('Buffer stocks'),
  det(
    'Buffer stock scheme',
    'A price band with intervention at both ends, used to stabilise volatile commodity markets.',
    [
      'A good harvest that would push price below the FLOOR is met by the agency BUYING the surplus into store.',
      'A poor harvest that would push price above the CEILING is met by SELLING from store.',
      'It stabilises farm incomes and consumer prices, and stabilises export earnings for commodity-dependent economies.',
    ],
    [
      'Needs enormous working capital and storage capacity, which many developing countries cannot fund.',
      'If the band is set too high the agency buys continuously, runs out of money and the scheme collapses; too low and it runs out of stock.',
      'Perishable goods cannot be stored long enough.',
      'It can encourage over-production by guaranteeing a minimum price.',
    ],
  ),
  diagram('buffer-stock'),
)

/* =========================================== GOVERNMENT FAILURE */

const governmentFailure = chapter(
  defn(
    'Government failure',
    'Where government intervention causes a net welfare LOSS - a misallocation of resources greater than the market failure it was meant to correct.',
  ),
  tip(
    'The existence of market failure does not by itself justify intervention. The comparison is between the imperfect market and the imperfect government, not between the market and a perfect ideal.',
  ),
  det(
    'Information failure in government',
    'Government cannot know the socially optimum quantity because it cannot value externalities accurately.',
    [
      'Setting a Pigouvian tax requires putting a money value on damage to health, ecosystems and future generations - contested and often arbitrary.',
      'Set too low, the tax changes nothing; set too high, it over-corrects and creates a welfare loss of its own.',
      'Hayek’s knowledge problem: the information needed is dispersed among millions of people and cannot be centralised.',
    ],
    [
      'Quantity-based instruments such as tradable permits are more robust to this, because the market discovers the price.',
      'Even imperfect intervention may beat none where the market failure is severe.',
    ],
  ),
  det(
    'Unintended consequences',
    'Intervention changes incentives in ways that were not anticipated.',
    [
      'Maximum prices create black markets; minimum prices create surpluses.',
      'Alcohol and tobacco taxes create smuggling.',
      'Generous benefits can create a poverty trap where taking work leaves a household barely better off.',
      'The EU Common Agricultural Policy created butter mountains and wine lakes.',
    ],
    [
      'Some consequences are foreseeable and can be designed around - tapering benefit withdrawal reduces the poverty trap.',
      'Their existence argues for better policy design, not for no policy.',
    ],
  ),
  det(
    'Administrative and enforcement costs',
    'Intervention consumes real resources.',
    [
      'Collecting a tax, running a permit registry, monitoring compliance and prosecuting breaches all cost money.',
      'If those costs exceed the welfare gain, the intervention is a net loss even when it works as intended.',
    ],
    ['Costs fall as systems mature and digitise, so a scheme that is uneconomic at first may become worthwhile.'],
  ),
  det(
    'Regulatory capture and political incentives',
    'Policy may serve the regulated industry or the electoral cycle rather than social welfare.',
    [
      'Regulators depend on the industry for information and expertise, and staff move between the two, so the regulator can come to share the industry’s view.',
      'Governments face short electoral cycles, so they favour policies with visible short-run benefits over those with long-run gains.',
      'Lobbying by concentrated producer interests outweighs dispersed consumer interests, because each producer has far more at stake per head.',
    ],
    ['Independent regulators with statutory duties and transparency requirements reduce, though do not eliminate, the problem.'],
  ),
  det(
    'Distortion of price signals and excessive intervention',
    'Intervention can prevent the price mechanism doing its job.',
    [
      'Subsidies keep inefficient firms alive, so resources stay in low-value uses.',
      'Price controls destroy the signalling and incentive functions, so shortages or surpluses persist.',
      'Excessive regulation raises firms’ costs, deters entry and reduces competition - the opposite of the intended effect.',
    ],
    [
      'Some distortion is the POINT: correcting an externality deliberately changes the price signal because the original signal was wrong.',
      'The test is whether the new allocation is closer to the social optimum than the old one, not whether the price was distorted.',
    ],
  ),
  h('Evaluating any intervention'),
  table(
    ['Ask', 'Why it decides the answer'],
    [
      ['How severe is the market failure?', 'A missing market justifies almost any intervention; a small distortion may not justify the administrative cost.'],
      ['Can the optimum be identified?', 'If the externality cannot be valued, quantity instruments beat price instruments.'],
      ['What is the elasticity?', 'Inelastic demand means a tax raises revenue but changes little behaviour.'],
      ['Who bears the cost?', 'Most interventions are regressive, which conflicts with the equity objective.'],
      ['What is the time period?', 'Elasticity rises over time, so a policy judged a failure after one year may succeed over ten.'],
      ['Is there a better instrument?', 'Compare the tax with regulation, permits, information and provision - the best answer names the alternative and says why it is better.'],
    ],
  ),
)

export const ECON_THEME1B_NOTES = {
  'Types of Market Failure': typesOfMarketFailure,
  Externalities: externalities,
  'Public Goods and Information Gaps': publicGoods,
  'Government Intervention in Markets': intervention,
  'Government Failure': governmentFailure,
}
