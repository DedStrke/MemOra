/*
  Second batch of Edexcel Economics A 25-mark essays (see econ-essays.js for
  the format and AO-weighting rationale - same ESSAY_LEVELS_25/ESSAY_AO_25
  ladder, reused rather than duplicated).

  The first batch covered 10 of the 59 chapters. A content-gap review found
  every chapter has notes, MCQs and shorter exam questions, but the other 49
  had no full 25-marker - the one question type worth a quarter to a half of
  every paper. This batch does not attempt all 49 (see the file comment in
  econ-essays.js on why a levelled essay takes real space to do properly);
  it picks six of the topics most frequently set as an actual 25-mark essay
  on past Edexcel A papers, spread across all four themes.
*/

import { ESSAY_LEVELS_25, ESSAY_AO_25 } from './econ-essays'

const essay = (topic, question, paper, plan, indicative, evaluation, judgement) => ({
  topic,
  question,
  marks: 25,
  paper,
  ao: ESSAY_AO_25,
  levels: ESSAY_LEVELS_25,
  plan,
  evaluation,
  markScheme: indicative,
  judgement,
})

export const ECON_ESSAYS_2 = [
  /* ------------------------------------------------- THEME 1: MICRO */
  essay(
    'Externalities',
    'Evaluate the case for government intervention to reduce the negative externalities caused by road transport. (25 marks)',
    'Paper 1 · Section C',
    [
      'Define a negative externality and identify road transport\'s: air pollution, congestion, noise, accident risk.',
      'Diagram: MPC below MSC, free market at Qm where MPB = MPC, social optimum at Q* where MSB = MSC, welfare loss triangle.',
      'Case for intervention: tax, road pricing, regulation - each shifts behaviour towards Q*.',
      'Evaluate on valuation difficulty, PED, alternatives, and unintended consequences.',
      'Judgement on which instrument, and how far intervention should go.',
    ],
    [
      'Driving imposes costs on third parties - respiratory illness from particulates, delay to other road users, noise - that the driver does not pay, so MPC lies below MSC and the free market over-consumes road travel at Qm rather than the social optimum Q*.',
      'A fuel or emissions tax raises the private cost of driving towards the social cost, shifting MPC left and contracting the quantity of travel towards Q* - internalising the externality so the polluter pays it.',
      'Congestion charging targets the externality more precisely than a fuel tax: it prices exactly the marginal trip into a congested zone at the time it is congested, rather than taxing all driving everywhere equally.',
      'Regulation - emissions standards, low-emission zones, mandated catalytic converters - restricts the technology rather than pricing the externality, forcing a fall in pollution per mile regardless of how much is driven.',
      'Revenue raised can be hypothecated into public transport, which provides a substitute and reinforces the shift away from car use.',
    ],
    [
      'VALUATION is the central problem: the health cost of a tonne of particulates or an hour of someone else\'s delay has no market price, so government must estimate MSC. Set the tax too low and behaviour barely changes; set it too high and the tax itself creates a welfare loss by discouraging trips that were worth taking.',
      'PED for car travel is low in the short run - commuting and school runs are largely necessities with poor substitutes - so a tax mainly raises revenue and changes little behaviour until better alternatives exist. The long-run elasticity is higher as people relocate or switch mode, so the effect grows over time.',
      'EQUITY: fuel and congestion charges are regressive relative to income but progressive relative to car ownership in some contexts - lower-income households in rural areas with no public transport can be hit hardest, since they have no substitute to switch to.',
      'SUBSTITUTES must actually exist for the policy to work as intended: London\'s congestion charge succeeded partly because it was introduced alongside a large expansion of bus provision. Pricing the externality without providing an alternative just makes the same trips more expensive.',
      'GOVERNMENT FAILURE risk: a tax calibrated to today\'s technology (fuel duty by litre) can become poorly targeted as the vehicle fleet changes - electric vehicles cause congestion and particulates from tyre wear but pay no fuel duty, so the instrument needs to keep pace with what is actually being taxed.',
      'GEOGRAPHIC SCOPE matters: congestion pricing corrects urban congestion externalities well but does little for rural air quality or motorway accident externalities, which may need a different instrument (speed enforcement, standards) entirely - one tool rarely fits every externality road transport creates.',
    ],
    'Intervention is justified because the externality is real and MPC genuinely understates MSC, but the case for any SPECIFIC instrument is weaker than the case for intervention in general. A uniform fuel tax is blunt and struggles to track a changing vehicle fleet; congestion charging is better targeted but only where substitutes exist; regulation changes technology rather than behaviour and works regardless of elasticity. The strongest package combines pricing (to internalise the cost where alternatives exist) with regulation (to cut pollution per mile where they do not), rather than relying on any single instrument to close the whole gap between MPC and MSC.',
  ),

  /* ------------------------------------------------- THEME 2: MACRO */
  essay(
    'Causes and Effects of Economic Growth',
    'Evaluate the view that a rise in investment is the most important cause of a sustained increase in economic growth. (25 marks)',
    'Paper 2 · Section C',
    [
      'Distinguish actual growth (AD/AS, closing an output gap) from potential growth (LRAS shifting right).',
      'Case for investment: AD component in the short run, capital stock and productivity in the long run.',
      'Case for alternatives: net trade, human capital, institutions, natural resources, technology.',
      'Evaluate on the accelerator, crowding out, quality vs quantity of investment, and time lags.',
      'Judgement on whether investment is necessary, sufficient, or merely one input among several.',
    ],
    [
      'Investment is a component of AD, so a rise in business investment shifts AD right directly, and via the multiplier the eventual rise in real GDP exceeds the initial injection - this is the short-run, actual-growth channel.',
      'Investment also adds to the capital stock, so LRAS shifts right: an economy with more machinery, infrastructure and premises per worker can produce more at every price level - this is the long-run, potential-growth channel, and the reason investment is treated as different from a pure demand-side stimulus.',
      'Higher capital per worker raises labour productivity, which supports higher real wages without eroding competitiveness, and higher output raises tax revenue, easing the constraint on further public investment.',
      'The two channels reinforce each other: the accelerator effect means investment itself responds positively to growth (rising demand justifies more capacity), so investment-led growth can be self-sustaining once started, unlike a one-off consumption boost.',
      'Historically, the countries with the highest sustained growth rates (South Korea, more recently large parts of East Asia) combined very high investment-to-GDP ratios with rapid capital deepening, consistent with investment being central to the growth story.',
    ],
    [
      'NECESSARY BUT NOT SUFFICIENT: investment without complementary human capital delivers little - capital sitting idle or poorly operated raises the capital stock on paper without raising output. Many economists argue TOTAL FACTOR PRODUCTIVITY (technology, management, institutions) explains a larger share of long-run growth differences between countries than capital accumulation alone.',
      'QUALITY over QUANTITY: investment in obsolete technology or politically-motivated infrastructure (a "bridge to nowhere") adds to the capital stock without adding to productive capacity - the marginal product of capital, not the volume invested, is what matters, and it is not guaranteed to be positive.',
      'CROWDING OUT: if investment is financed by government borrowing, higher demand for loanable funds can raise interest rates and reduce private investment, partially offsetting the intended effect - the net impact on the capital stock is smaller than the gross figure suggests.',
      'TIME LAGS are long and uncertain: the gestation period between an investment decision and productive capacity coming online can be years, so investment is a poor tool for closing a SHORT-term output gap even though it is central to LONG-term potential growth - the two time horizons need different explanations.',
      'ALTERNATIVE CAUSES can dominate in specific cases: a resource discovery, a favourable shift in the terms of trade, or a large rise in labour force participation can drive sustained growth with little change in the investment rate - so investment is not the only route, even if it is a common one.',
      'INSTITUTIONS AND STABILITY are arguably a precondition rather than an alternative: secure property rights and macroeconomic stability are what make investment (domestic or foreign) attractive in the first place, so causality may run from institutional quality TO investment rather than investment being the independent root cause.',
    ],
    'Investment is very likely necessary for sustained growth because it is the main channel through which the capital stock, and therefore potential output, expands - but "most important" oversells it against total factor productivity and institutional quality, which determine whether a given volume of investment actually raises output. The strongest cases of sustained growth combine high investment with rising productivity and stable institutions; where any one is missing, growth typically disappoints even with high investment rates, which suggests investment is the mechanism through which more fundamental causes take effect rather than the cause itself.',
  ),

  essay(
    'Supply-Side Policy',
    'Evaluate the likely effectiveness of supply-side policies in reducing the UK\'s rate of structural unemployment. (25 marks)',
    'Paper 2 · Section C',
    [
      'Define structural unemployment (skills/geographical/technological mismatch) and distinguish it from cyclical unemployment.',
      'Market-based supply-side policy: deregulation, lower benefits, weaker union power.',
      'Interventionist supply-side policy: education and retraining, regional policy, infrastructure.',
      'Diagram: LRAS shifts right / the LRAS-PC / natural rate of unemployment falls.',
      'Evaluate on time lags, cost, whether it addresses the actual mismatch, and the demand-side precondition.',
      'Judgement on which type of policy fits which type of structural unemployment.',
    ],
    [
      'Structural unemployment persists because the skills, location or industry of the unemployed no longer match available vacancies, so it is not solved by raising aggregate demand alone - a demand stimulus that does not change what workers can do or where they live leaves the mismatch in place.',
      'Retraining schemes directly target skills mismatch: raising the human capital of displaced workers (e.g. from declining manufacturing) so they can fill vacancies in growing sectors, shifting LRAS right and lowering the natural rate of unemployment.',
      'Regional policy - grants, enterprise zones, infrastructure investment in depressed areas - addresses geographical mismatch by bringing jobs to where the unemployed already live, rather than requiring costly relocation.',
      'Market-based measures (reducing out-of-work benefits, weakening employment protection) increase the incentive and ease of taking a new job, which can shorten the average duration of unemployment even where a skills gap remains only partially closed.',
      'Because these policies shift LRAS rather than AD, in principle they lower unemployment WITHOUT the inflationary pressure that a purely demand-side expansion would create at the same employment level - addressing the trade-off the short-run Phillips curve implies.',
    ],
    [
      'TIME LAGS are the central weakness: retraining a workforce and building an education pipeline for a new industry take years, while structural unemployment is often already acute and geographically concentrated by the time policy responds - the political timetable rarely matches the policy timetable.',
      'COST AND OPPORTUNITY COST: large-scale retraining and regional infrastructure require sustained public spending, which competes with other priorities and, if debt-financed, raises the same crowding-out concerns as any other spending programme.',
      'DEPENDS ON THE TYPE OF MISMATCH: a policy well-suited to skills mismatch (retraining) does little for pure geographical mismatch (immobility due to housing costs and family ties), and vice versa - a single "supply-side policy" label covers quite different instruments that succeed or fail independently of each other.',
      'DEMAND-SIDE PRECONDITION: retraining a worker is wasted if there is no vacancy to place them in - supply-side policy raises the POTENTIAL for a worker to be employed, but adequate aggregate demand is still needed to create the jobs. In a recession, supply-side policy alone does little for unemployment.',
      'MARKET-BASED measures carry an equity cost: cutting benefits raises the pressure to accept work but can push people into insecure, low-paid jobs that do not use the skills lost, effectively relabelling structural unemployment as underemployment rather than solving it.',
      'EVIDENCE is mixed and slow to arrive: German and Scandinavian active labour-market programmes are often cited as successes, but they are expensive and were sustained over long periods - a short-lived UK scheme judged after two or three years may look ineffective simply because the time lag has not yet played out.',
    ],
    'Supply-side policy is the theoretically correct tool for structural unemployment, because it targets the mismatch that demand management cannot touch, but effectiveness depends heavily on matching the specific instrument to the specific mismatch and on sustaining it well beyond a single parliament. Retraining and regional investment work but are slow and expensive; market-based deregulation is faster and cheaper but risks converting unemployment into low-quality employment rather than genuinely closing the skills gap. Judged over a decade with adequate demand alongside it, well-targeted supply-side policy can meaningfully lower the natural rate; judged over a single electoral cycle, it will usually look disappointing regardless of its eventual effectiveness.',
  ),

  essay(
    'Government Failure',
    'Evaluate the view that government intervention to correct market failure inevitably leads to government failure. (25 marks)',
    'Paper 1 · Section C',
    [
      'Define government failure: intervention that leads to a net welfare loss, or a misallocation worse than the market failure it aimed to fix.',
      'Case for the view: information problems, administrative cost, unintended consequences, regulatory capture, political incentives.',
      'Case against: some interventions clearly improve on the counterfactual (public goods, information disclosure).',
      'Evaluate on the type of failure, the quality of the instrument, and whether failure is inevitable or merely common.',
      'Judgement rejecting "inevitably" while accepting the underlying caution is well-founded.',
    ],
    [
      'Government failure occurs when intervention creates a misallocation of resources of its own - a minimum price causing a persistent surplus, a subsidy propping up an inefficient industry, or a tax set so high it creates a black market - so that welfare is lower than under the market failure being corrected.',
      'Governments face an INFORMATION PROBLEM at least as severe as any market participant\'s: correcting an externality requires knowing its monetary value, which is contested, unobservable directly, and estimated with wide margins of error - a wrongly-set tax or subsidy can overshoot the social optimum in either direction.',
      'ADMINISTRATIVE AND ENFORCEMENT COSTS reduce the net welfare gain from any scheme, and must be judged against the size of the market failure - a small externality met with a costly bureaucracy can produce a net loss even if the underlying diagnosis was correct.',
      'REGULATORY CAPTURE: regulators can come to serve the interests of the industry they regulate rather than the public, especially where the regulated firms have far more resources and expertise to influence policy than diffuse consumers do.',
      'POLITICAL INCENTIVES do not align with economic optimality: policies with concentrated, visible short-term benefits and diffuse long-term costs (or vice versa) are more likely to be adopted regardless of their welfare effect, because the electoral cycle rewards visibility over efficiency.',
    ],
    [
      'The word "INEVITABLY" is the weakest part of the claim, because it is falsified by clear counter-examples: state provision of a genuine public good (national defence, basic research) has no market alternative at all, so almost any positive provision improves on the counterfactual of zero - there is very little room for the correction itself to be worse than the disease.',
      'It DEPENDS ON THE TYPE OF INSTRUMENT: quantity-based tools such as tradable pollution permits fix the quantity of the externality directly and let the market discover the price, making them robust to the government NOT knowing the exact monetary value of the externality - unlike a Pigouvian tax, which requires that value to be right.',
      'INFORMATION HAS IMPROVED in some domains: independent regulators (Ofgem, the CMA), published cost-benefit analysis, and post-implementation review are institutional responses specifically designed to reduce the information and capture problems - failure is a risk to be managed, not a law of nature, and the quality of institutions changes the odds.',
      'SELECTION BIAS in the evidence: government failures (the EU sugar quota, agricultural buffer stocks, rent controls causing housing shortages) are well-documented precisely because they are visible and costly, while successful, unremarkable interventions (compulsory seatbelts, smoking bans reducing passive-smoking externalities, vaccination programmes) attract less attention - "inevitably" may reflect which failures make the news rather than the true frequency of failure.',
      'MAGNITUDE matters: even an imperfectly-calibrated intervention can leave society better off than an uncorrected market failure if it moves output PARTWAY towards the optimum, even without reaching it exactly - "not perfect" is a different claim from "a net loss", and the view conflates the two.',
      'COUNTERFACTUAL REASONING is required either way: judging intervention against a perfect market is unfair, since the market failure was real; the correct comparison is intervention versus the ACTUAL flawed market outcome, and on that comparison many interventions that fall short of the textbook optimum still raise welfare.',
    ],
    '"Inevitably" cannot be sustained: government failure is common and the underlying caution - that governments face real information and incentive problems - is well-founded, but public goods provision and well-designed quantity-based instruments show intervention can clearly improve on a genuine market failure. The realistic conclusion is that intervention success is conditional: it depends on the type of market failure (a missing market is easy to improve on; a mispriced market is hard to price correctly), on the instrument chosen, and on the quality of the institutions designing and reviewing it - not on some inherent law that government correction always makes things worse.',
  ),

  essay(
    'Balance of Payments',
    'Evaluate the possible consequences of a persistent current account deficit for the UK economy. (25 marks)',
    'Paper 2 · Section C',
    [
      'Define the current account and identify why the UK has run a persistent deficit (import propensity, competitiveness, invisible balance).',
      'Case for concern: financing requirement, exchange rate risk, deindustrialisation signal, external constraint on growth.',
      'Case against automatic concern: how it is financed, the Lawson doctrine, and what the deficit reflects.',
      'Evaluate on the financial account counterpart, the type of deficit, and time period.',
      'Judgement conditioned on financing quality and the state of the wider economy.',
    ],
    [
      'A current account deficit means the UK spends more on imports of goods, services and net income/transfers to the rest of the world than it earns from exports, and by the balance of payments identity this must be matched by an equal and opposite surplus on the financial and capital account - inflows of foreign investment.',
      'A persistent deficit can signal a competitiveness problem: if UK exports are less price- or quality-competitive than imports, net trade is a persistent drag on aggregate demand and, all else equal, on growth and employment relative to a balanced position.',
      'Financing the deficit requires continuous capital inflows - FDI, portfolio investment, or debt - which can leave the currency and the economy more exposed to a sudden shift in international investor sentiment than a country with a balanced or surplus position.',
      'If financed mainly through debt rather than FDI, the deficit represents a rising net liability to the rest of the world, meaning future income (dividends, interest) flows out rather than staying in the domestic economy - a long-run drag on national income.',
      'A large deficit can pressure the exchange rate downward over time as the supply of sterling on the foreign exchange market (to buy foreign currency for imports) tends to exceed demand for it (from foreign buyers of exports), all else equal.',
    ],
    [
      'HOW IT IS FINANCED matters more than the size of the deficit itself: if inflows are predominantly long-term FDI into productive capacity, the deficit finances genuine investment and future export capacity; if financed by "hot money" - short-term portfolio flows chasing interest rate differentials - it can reverse suddenly, forcing a disorderly currency adjustment.',
      'The LAWSON DOCTRINE view is that a current account deficit driven by private sector decisions (households and firms choosing to borrow or invest) is not inherently a policy problem, since it reflects voluntary transactions rather than a government imbalance - the 1980s counter-view is that this proved wrong when private borrowing turned out to be unsustainable, so the doctrine is contested rather than settled.',
      'WHAT THE DEFICIT REFLECTS is not always weakness: a fast-growing economy naturally sucks in imports of capital goods and consumer goods, so part of a UK deficit may reflect strong domestic demand rather than weak competitiveness - the same deficit number can be a symptom of health or of a structural problem depending on its composition.',
      'The UK specifically has a large NEGATIVE investment income balance (a "primary income" deficit driven by returns paid to foreign owners of UK assets), which behaves differently from a trade-in-goods deficit and responds to different policy levers (competitiveness policy does not fix an income balance problem).',
      'EXCHANGE RATE ADJUSTMENT is not guaranteed to be smooth: the Marshall-Lerner condition means a depreciation only improves the current account if the sum of export and import price elasticities of demand exceeds one; in the short run (the J-curve), demand is often inelastic and the deficit can initially widen before it improves.',
      'TIME PERIOD is decisive for the judgement: a temporary deficit financed by strong FDI inflows during a period of high investment is very different from a decades-long structural deficit reflecting persistent deindustrialisation and declining competitiveness - "persistent" needs unpacking rather than treated as automatically alarming.',
    ],
    'A persistent deficit is not automatically harmful, but it is not automatically benign either - the judgement turns almost entirely on how it is financed and what it reflects. Financed by stable, long-term FDI during a period of strong investment, a deficit can coexist with a healthy economy, consistent with the Lawson doctrine. Financed by short-term portfolio inflows or reflecting a structural competitiveness problem and a persistent negative income balance, it leaves the UK exposed to a sudden capital flight and a disorderly currency adjustment. The UK\'s specific composition - a chronic income deficit alongside inconsistent FDI inflows - is the reason economists remain more cautious about its current account than the size of the headline deficit alone would suggest.',
  ),

  /* ------------------------------------------------- THEME 3: BUSINESS */
  essay(
    'Oligopoly',
    'Evaluate the extent to which oligopolistic markets act against the interests of consumers. (25 marks)',
    'Paper 1 · Section C',
    [
      'Define oligopoly: high concentration ratio, interdependence, barriers to entry.',
      'Case against consumers: collusion, price rigidity (kinked demand), non-price competition raising costs.',
      'Case for consumers: competitive rivalry, innovation, choice, contestability.',
      'Evaluate on the type of oligopoly, regulation, and game-theoretic incentives to cheat on collusion.',
      'Judgement conditioned on market-specific evidence rather than the structure alone.',
    ],
    [
      'Interdependence between the small number of dominant firms in an oligopoly creates an incentive to collude, explicitly or tacitly, restricting output and raising price above the competitive level in the same way a monopoly would - transferring consumer surplus to producer surplus and creating a deadweight welfare loss.',
      'The kinked demand curve model suggests prices can be "sticky" even without formal collusion: a firm expects rivals to match a price cut (elastic demand above the kink) but not a price rise (inelastic demand below it), so oligopolists may settle on a stable, supra-competitive price rather than competing it down.',
      'High concentration and mutual interdependence typically coexist with significant barriers to entry (brand loyalty, economies of scale, advertising spend), which protect supernormal profit in the long run in the same way as under monopoly.',
      'Non-price competition (heavy advertising, packaging, loyalty schemes) can raise costs without improving the underlying product, and those costs are ultimately passed through to consumers in price - competition on image rather than value.',
      'Price discrimination and complex, hard-to-compare pricing structures (common in energy, telecoms and banking oligopolies) can be used to exploit information asymmetry and extract more consumer surplus than a simpler competitive market would allow.',
    ],
    [
      'GAME THEORY cuts the other way as often as it supports collusion: the prisoner\'s dilemma shows each firm has a private incentive to undercut a cartel price to capture the whole market, so collusion is inherently unstable without a credible enforcement mechanism - many real cartels collapse from internal cheating, not just regulatory action.',
      'NON-PRICE COMPETITION can benefit consumers rather than only raise costs: oligopolists competing on innovation, quality, and product differentiation (as in smartphones, cars, supermarkets) can deliver genuine improvements in choice and dynamic efficiency that a fragmented competitive market with low margins might not be able to fund.',
      'CONTESTABILITY matters more than the number of firms: an oligopoly with low sunk costs and low barriers to entry can be disciplined by the THREAT of entry even if actual entry never happens, keeping prices close to competitive levels despite high concentration - market structure alone does not determine conduct.',
      'REGULATION AND COMPETITION POLICY actively constrain the worst outcomes: competition authorities can fine and break up cartels, and merger control blocks concentration increases that would clearly harm consumers - the static "oligopoly is bad" story ignores the institutional environment firms actually operate in.',
      'EVIDENCE VARIES ENORMOUSLY BY MARKET: some oligopolies (UK supermarkets in periods of active price wars) show fierce rivalry that benefits consumers, while others (historically, some utility and financial-services markets) show clear evidence of tacit collusion and consumer harm - the structural label "oligopoly" covers very different real-world conduct.',
      'DYNAMIC EFFICIENCY: supernormal profits earned in periods of limited price competition can fund R&D that a perfectly competitive market, earning only normal profit, could not sustain - consumers can gain more from innovation over time than they lose from higher prices in the short run.',
    ],
    'Whether an oligopoly harms consumers depends on conduct, not structure alone: the same handful of firms can either collude to restrict output or compete vigorously on price and innovation, and game theory shows both outcomes are internally consistent with interdependence. The presence of high concentration is therefore evidence that consumer harm is POSSIBLE, not that it is occurring - the decisive factors are whether entry is genuinely contestable, whether competition authorities are active, and market-specific evidence of price behaviour over time, which varies so much between oligopolistic industries that no single verdict fits them all.',
  ),
]
