/*
  Edexcel Economics A: the 25-mark essays.

  These are the questions the top grades are actually decided on, and until
  now the app had none. The largest question in the bank was 12 marks, but
  Paper 1 and Paper 2 each finish with a choice of 25-mark essay, and Paper 3
  carries two. That is 50 of Paper 3's 100 marks and 25 of every other
  paper’s 100 - a quarter to a half of the qualification, in the one question
  type a bank of 4- and 8-markers cannot prepare you for.

  A 25-marker is not a longer 12-marker. It is marked by LEVEL against four
  assessment objectives, and the marks are weighted towards the two things
  short questions never test:

    AO1 knowledge        4 marks
    AO2 application      6 marks
    AO3 analysis         6 marks
    AO4 evaluation       9 marks   <- the single biggest component

  Evaluation is more than a "however" paragraph. It means questioning the
  magnitude of an effect, the time period, the assumptions behind the model,
  the quality of the evidence, and which factors depend on what - and then
  reaching a supported judgement. That is why each essay here carries its
  evaluation lines separately from its indicative content: a student who
  writes every point in `indicative` and none in `evaluation` is capped
  around Level 3, roughly 15/25, which is a B.

  The level descriptors are written here in plain English rather than copied
  from the specification, because they are meant to be self-marked against.
*/

/*
  Shared level ladder. Edexcel uses the same five levels for every 25-mark
  question, so it lives once here rather than being repeated on each essay.
*/
export const ESSAY_LEVELS_25 = [
  {
    band: 'Level 5',
    marks: '21–25',
    descriptor:
      'Consistently applied to the context, with analysis carried through in full chains of reasoning. Evaluation is sustained throughout rather than bolted on, weighs magnitude and likelihood rather than just listing counter-arguments, and reaches a judgement that follows from the analysis and states what it depends on.',
  },
  {
    band: 'Level 4',
    marks: '16–20',
    descriptor:
      'Sound knowledge applied to the context. Analysis is developed and mostly complete. Evaluation is present and developed but may be one-sided, may sit only in a final paragraph, or may assert rather than justify the judgement.',
  },
  {
    band: 'Level 3',
    marks: '11–15',
    descriptor:
      'Accurate knowledge with some application. Chains of reasoning start but break off before the effect is reached. Evaluation is limited - generic points such as "it depends on the time period" without saying why it matters here.',
  },
  {
    band: 'Level 2',
    marks: '6–10',
    descriptor:
      'Isolated knowledge with little application to the context. Analysis is asserted rather than explained. Little or no evaluation.',
  },
  {
    band: 'Level 1',
    marks: '1–5',
    descriptor:
      'Fragments of relevant knowledge, largely undeveloped, with no application and no evaluation.',
  },
]

export const ESSAY_AO_25 = { AO1: 4, AO2: 6, AO3: 6, AO4: 9 }

const essay = (topic, question, paper, plan, indicative, evaluation, judgement) => ({
  topic,
  question,
  marks: 25,
  paper,
  ao: ESSAY_AO_25,
  levels: ESSAY_LEVELS_25,
  plan,
  evaluation,
  judgement,
  // The runner renders `markScheme`, so indicative content goes there too.
  markScheme: indicative,
})

export const ECON_ESSAYS = [
  /* ------------------------------------------------- THEME 1: MICRO */
  essay(
    'Government Intervention in Markets',
    'Evaluate the likely microeconomic effects of a significant increase in the tax on sugary drinks. (25 marks)',
    'Paper 1 · Section C',
    [
      'Define an indirect specific tax and identify sugary drinks as a demerit good with negative consumption externalities.',
      'Diagram: MPB above MSB, showing over-consumption at Qm, and the tax shifting S to S + tax.',
      'Chain 1: tax raises production cost → S shifts left → price rises → contraction in demand → consumption moves towards Q*.',
      'Chain 2: government revenue raised → hypothecation into health spending or subsidising alternatives.',
      'Evaluate on PED, incidence, regressiveness, firm reformulation, and evidence.',
      'Judgement with a clear condition attached.',
    ],
    [
      'Sugary drinks generate negative consumption externalities: NHS treatment costs for obesity and type 2 diabetes are borne by third parties, so MSB lies below MPB and the free market over-consumes at Qm rather than Q*.',
      'A specific tax shifts supply vertically upward by the tax per unit, raising the consumer price from P₁ to Pc and contracting demand towards the social optimum - internalising the externality.',
      'The welfare gain is the triangle between MSB and MPB over the units no longer consumed.',
      'Government revenue = tax × quantity, which can be hypothecated to health education or subsidies for water and diet alternatives, reinforcing the effect.',
      'A tax also signals harm, potentially shifting preferences and demand leftward over time - a change in the conditions of demand rather than a movement along.',
      'Producers may reformulate to fall below the tax threshold, cutting sugar content without any fall in sales volume - the UK Soft Drinks Industry Levy was banded precisely to create this incentive.',
    ],
    [
      'MAGNITUDE depends on PED. Demand for sugary drinks is habitual and brand-loyal, so PED is likely inelastic in the short run; a given tax then produces only a small contraction in quantity, and most of the effect is a price rise rather than a consumption fall.',
      'INCIDENCE follows from that: with inelastic demand the consumer bears most of the burden, so the tax raises revenue effectively but changes behaviour weakly. If the aim is health rather than revenue, that is a failure against its own objective.',
      'EQUITY: the tax is regressive. Lower-income households spend a larger share of income on such products, so the burden falls hardest on those least able to bear it - and, since obesity correlates with lower income, the tax is most costly to the group it targets.',
      'SUBSTITUTION may undermine it: consumers can switch to untaxed alternatives that are equally unhealthy (confectionery, juices), so total sugar intake may not fall at all - the tax shifts the composition of consumption rather than its harm.',
      'INFORMATION PROBLEM: setting the tax at the correct level requires valuing the external cost, which is extremely difficult. Set too low it changes nothing; set too high it over-corrects and creates a welfare loss of its own, plus a possible black market or cross-border shopping.',
      'TIME PERIOD is decisive: PED rises as consumers find substitutes and habits adjust, so the long-run consumption effect is considerably larger than the short-run one. Judging the policy on first-year data would understate it.',
      'ALTERNATIVES may dominate: reformulation requirements, advertising restrictions to under-16s, or clearer labelling address the information gap directly without the regressive burden.',
    ],
    'The tax is likely to be effective at raising revenue and at driving producer reformulation, but weak at changing consumption directly in the short run because demand is inelastic. Its success therefore depends less on the rate than on how the revenue is used and whether it is banded to reward reformulation - and it should be judged over a decade, not a year, since PED rises as substitutes emerge.',
  ),

  essay(
    'Types of Market Failure',
    'Evaluate the view that government intervention to correct market failure always improves economic welfare. (25 marks)',
    'Paper 1 · Section C',
    [
      'Define market failure and government failure; state the welfare criterion (does total surplus rise?).',
      'Case FOR: externality diagram, tax/subsidy/regulation moving Q towards Q*.',
      'Case FOR: public goods and information gaps - markets that never form at all.',
      'Case AGAINST: information failure in government, unintended consequences, administrative cost, regulatory capture.',
      'Judgement: it depends on the type of failure and the quality of information.',
    ],
    [
      'Market failure is the misallocation of resources in a free market, so that the free-market quantity diverges from the social optimum where MSB = MSC.',
      'For negative externalities, an indirect tax equal to the external cost shifts MPC onto MSC, moving output from Qm to Q* and eliminating the welfare loss triangle.',
      'For merit goods and information gaps, subsidy or state provision raises consumption from Qm towards Q*, capturing the external benefit.',
      'Public goods are non-excludable and non-rival, so the free rider problem means effective demand collapses and the market never forms at all: without state provision the quantity is zero, not merely too low.',
      'Regulation and minimum standards address information asymmetry directly, and competition policy addresses monopoly abuse where P > MC creates allocative inefficiency.',
    ],
    [
      'The whole case rests on GOVERNMENT KNOWING Q*, which requires valuing external costs and benefits in money terms. That valuation is contested and often arbitrary, so intervention is as likely to overshoot as to correct - and overshooting creates a welfare loss where none existed.',
      'GOVERNMENT FAILURE: intervention has administrative and enforcement costs which must be netted off the welfare gain; a scheme costing more to run than the externality it removes is a net loss.',
      'UNINTENDED CONSEQUENCES: maximum prices create shortages and black markets; minimum prices create surpluses and storage costs; subsidies can entrench inefficiency by shielding firms from competitive pressure.',
      'REGULATORY CAPTURE and political incentives mean intervention may reflect the interests of the regulated industry or the electoral cycle rather than the social optimum - the CAP and buffer stock schemes are standard examples.',
      'It DEPENDS ON THE TYPE of failure: for public goods the counterfactual is a missing market, so almost any provision beats none and intervention is very likely to raise welfare. For externalities the counterfactual is a functioning market that is merely mispriced, so a badly calibrated intervention can easily make things worse.',
      'It also depends on the INSTRUMENT: tradable permits fix the quantity of pollution with certainty and let the market discover the price, so they are more robust to government ignorance than a tax, which fixes the price and leaves the quantity unknown.',
    ],
    'Intervention does not always improve welfare, and the word "always" is what makes the statement false. Where the market is missing entirely - public goods, and information gaps severe enough to prevent trade - intervention almost certainly raises welfare because the alternative is nothing. Where the market functions but misprices, the outcome turns on whether government can value the externality accurately, which it usually cannot; there, quantity-based instruments such as tradable permits are safer than price-based ones.',
  ),

  /* ------------------------------------------------- THEME 2: MACRO */
  essay(
    'Fiscal Policy',
    'Evaluate the likely effects of a large increase in government spending on infrastructure on the performance of the UK economy. (25 marks)',
    'Paper 2 · Section C',
    [
      'Define expansionary fiscal policy; identify infrastructure as both a demand-side injection and a supply-side improvement.',
      'AD/AS diagram: AD shifts right via G, with a multiplier effect.',
      'Second diagram or extension: LRAS shifts right as productive capacity rises.',
      'Evaluate on the size of the multiplier, spare capacity, time lags, crowding out, and the debt position.',
      'Judgement distinguishing short run from long run.',
    ],
    [
      'Government spending is a component of AD, so a rise in G shifts AD right; the multiplier means the final rise in output exceeds the initial injection, with k = 1/(MPS + MPT + MPM).',
      'The size of the effect on real output depends on where the economy sits on the AS curve: with substantial spare capacity the Keynesian AS curve is near-horizontal, so most of the shift raises output and employment with little inflation.',
      'Higher output raises derived demand for labour, cutting cyclical unemployment and raising incomes, which reinforces the effect through induced consumption.',
      'Infrastructure is distinctive because it is also a SUPPLY-side policy: better transport and digital networks lower firms\' costs, raise productivity and mobility of labour, and shift LRAS right.',
      'An LRAS shift raises potential output and can lower the price level, so growth is non-inflationary - this is why infrastructure is treated differently from, say, higher public sector pay.',
      'Higher growth raises tax revenues automatically, partially self-financing the spending.',
    ],
    [
      'The MULTIPLIER may be small. The UK has a high marginal propensity to import and a substantial tax wedge, so leakages are large and k may be closer to 1.5 than to 3 - the headline injection overstates the eventual effect on output.',
      'TIME LAGS are severe for infrastructure specifically: planning, procurement and construction mean the demand-side stimulus arrives years after the decision, by which point the output gap may have closed and the stimulus may be pro-cyclical and inflationary rather than stabilising.',
      'CROWDING OUT: financing by borrowing raises demand for loanable funds and can raise interest rates, reducing private investment. The strength of this depends on the starting point - with interest rates near the lower bound and spare capacity, crowding out is weak; at full capacity it is strong, and the policy simply reallocates activity from private to public.',
      'The DEBT POSITION constrains it. Higher borrowing raises the debt-to-GDP ratio and the interest burden, creating an opportunity cost in future budgets and, if markets doubt sustainability, a higher risk premium on gilts.',
      'CURRENT ACCOUNT: higher incomes raise import demand, worsening the trade balance, particularly given the UK’s high MPM and limited domestic capacity in construction materials.',
      'It depends on WHAT is built. Infrastructure with a high social return (a congested rail corridor) shifts LRAS materially; a project chosen for political rather than economic reasons may deliver the AD effect and no supply-side effect at all - government failure in project selection.',
      'The supply-side effect is also SLOW and uncertain, whereas the debt is immediate and certain - the asymmetry matters for judging the policy.',
    ],
    'In the short run the effect depends almost entirely on the output gap: with significant spare capacity the policy raises output and employment with limited inflation, but close to capacity it is largely inflationary and crowds out private investment. In the long run the case is stronger, because infrastructure shifts LRAS and so raises potential output - but only if projects are selected on economic return rather than politically. The binding constraints in practice are the implementation lag and the debt position, not the theory.',
  ),

  essay(
    'Monetary Policy',
    'Evaluate the effectiveness of monetary policy in returning inflation to the 2% target. (25 marks)',
    'Paper 2 · Section C',
    [
      'Define monetary policy, the MPC and the symmetric 2% CPI target.',
      'Transmission mechanism: Bank Rate → market rates → C and I → AD → price level.',
      'AD/AS diagram showing AD shifting left and the price level falling.',
      'Evaluate on lags, the cause of the inflation, the lower bound, expectations and exchange rates.',
      'Judgement distinguishing demand-pull from cost-push inflation.',
    ],
    [
      'Raising Bank Rate feeds through to mortgage and loan rates, raising the cost of borrowing and the reward for saving, so consumption falls - particularly interest-sensitive durable and housing-related spending.',
      'Higher rates raise the cost of capital, so marginal investment projects become unprofitable and I falls; the accelerator means this compounds.',
      'AD shifts left, reducing demand-pull pressure and moving the economy back down the AS curve, lowering the price level relative to its trend.',
      'Higher rates attract hot money inflows, appreciating sterling, which lowers import prices directly and reduces export competitiveness - both disinflationary.',
      'Because the MPC is operationally independent and the target symmetric, announcements anchor inflation EXPECTATIONS, which lowers wage demands and the pricing decisions of firms without any change in output.',
    ],
    [
      'TIME LAGS: the Bank itself estimates the full effect takes up to two years, so policy must be set on a forecast. Forecast error means the MPC can tighten into a slowdown that has already begun, amplifying the cycle rather than damping it.',
      'THE CAUSE OF INFLATION IS DECISIVE. Monetary policy works on AD, so it treats demand-pull inflation well. Against cost-push inflation - an energy price shock shifting SRAS left - raising rates does nothing to the cause and reduces output further, worsening the trade-off. The 2022 energy shock is the obvious illustration.',
      'The LOWER BOUND constrains loosening: rates cannot fall far below zero, so in a deep recession conventional policy is exhausted and the Bank must resort to quantitative easing, whose transmission is weaker and whose distributional effects (asset price inflation) are contested.',
      'INTEREST RATE SENSITIVITY has changed. With a large stock of fixed-rate mortgages, rate rises pass through to household budgets only as fixes expire, so the transmission is slower and more uneven than the textbook mechanism implies.',
      'CONFLICTS WITH OTHER OBJECTIVES: tightening to hit the inflation target raises unemployment and slows growth, and the appreciation worsens the current account - the Phillips curve trade-off is real in the short run even if not the long run.',
      'CREDIBILITY does much of the work. If expectations are well anchored, small rate changes suffice; if credibility is lost, very large changes are needed. This means the effectiveness of the instrument depends on the institution\'s history, not just the setting today.',
    ],
    'Monetary policy is effective against demand-pull inflation, where it acts directly on the cause, and its greatest strength is the anchoring of expectations by a credible independent central bank. It is markedly less effective against cost-push inflation, where it can only restore the target by suppressing demand - accepting lower output and higher unemployment to offset a supply shock it cannot reverse. Effectiveness therefore depends primarily on the source of the inflation, and secondarily on whether expectations remain anchored while the lags play out.',
  ),

  essay(
    'Macroeconomic Objectives',
    'Evaluate the view that there is always a trade-off between reducing unemployment and controlling inflation. (25 marks)',
    'Paper 2 · Section C',
    [
      'Define the two objectives and the short-run Phillips curve relationship.',
      'Case FOR: SRPC and the AD mechanism - demand-side policy moves you along the curve.',
      'Case AGAINST: the long-run vertical Phillips curve at the natural rate.',
      'Case AGAINST: supply-side policy shifting LRAS improves both simultaneously.',
      'Judgement built on the short run / long run and demand / supply distinction.',
    ],
    [
      'The short-run Phillips curve shows an inverse relationship: expansionary demand-side policy raises AD, cutting cyclical unemployment as derived demand for labour rises, but pushing the economy up the AS curve and raising the price level.',
      'The mechanism is the labour market: as unemployment falls, workers gain bargaining power, money wages rise, firms\' costs rise and are passed on - so the trade-off is real for any policy acting through AD.',
      'This constrains policy: the MPC tightening to hit the 2% target must accept higher unemployment, which is why the remit requires it to have regard to growth and employment subject to the target.',
    ],
    [
      'The trade-off is SHORT RUN ONLY. In the long run the Phillips curve is vertical at the natural rate: once workers adjust expectations, real wages return to equilibrium, unemployment returns to NAIRU and only the price level is permanently higher. Attempting to hold unemployment below NAIRU produces accelerating inflation, not a permanent gain.',
      'SUPPLY-SIDE POLICY breaks the trade-off entirely. Improving education, training, infrastructure or labour mobility shifts LRAS right and lowers the natural rate, so output rises AND the price level falls - both objectives improve together, which the statement denies.',
      'The trade-off also disappears when the economy has SIGNIFICANT SPARE CAPACITY: on the horizontal section of a Keynesian AS curve, rising AD raises output and employment with almost no price effect, so no meaningful trade-off exists until capacity is approached.',
      'STAGFLATION is the counter-case in the other direction: a cost-push shock raises inflation AND unemployment simultaneously. The two objectives worsen together, so the relationship is not a stable trade-off at all - it depends on whether the shock is to demand or supply.',
      'EMPIRICALLY the relationship has been unstable. The flattening of the Phillips curve since the 1990s - inflation staying near target across a wide range of unemployment rates - suggests well-anchored expectations weaken the short-run trade-off considerably.',
      'MEASUREMENT complicates the judgement: NAIRU is unobservable and is estimated with wide error bands, so policymakers cannot know in real time whether they are exploiting a trade-off or overheating.',
    ],
    'The word "always" makes the statement false. A short-run trade-off exists for policy acting through aggregate demand, and it is real enough to constrain the MPC. But it vanishes in the long run, where the Phillips curve is vertical; it can be broken by supply-side policy that improves both objectives together; and it reverses entirely under a cost-push shock, where both worsen at once. The trade-off is therefore a feature of demand-side policy in the short run, not a general law.',
  ),

  /* ------------------------------------------------- THEME 3: BUSINESS */
  essay(
    'Monopoly',
    'Evaluate the view that monopoly is always against the interests of consumers. (25 marks)',
    'Paper 1 · Section C',
    [
      'Define monopoly (pure and the 25% legal definition) and identify the consumer interest as price, choice, quality and innovation.',
      'Case FOR: monopoly diagram - MC = MR at Qm, price from AR, P > MC, deadweight loss.',
      'Case FOR: X-inefficiency, restricted choice, price discrimination extracting surplus.',
      'Case AGAINST: economies of scale, natural monopoly, dynamic efficiency, cross-subsidy.',
      'Judgement conditioned on contestability, regulation and the cost structure.',
    ],
    [
      'A monopolist faces the industry demand curve, so AR slopes down and MR lies below it; profit maximisation at MC = MR gives Qm, with price read up to the AR curve at Pm.',
      'Because Pm > MC the outcome is allocatively inefficient: consumers value the marginal unit above the cost of producing it, and the deadweight loss triangle between Qm and the competitive output Qc measures the welfare foregone.',
      'The firm produces to the left of minimum AC, so it is also productively inefficient, and supernormal profit persists in the long run because barriers to entry prevent competition eroding it.',
      'Absence of competitive pressure allows X-inefficiency: costs drift above the minimum attainable because there is no survival pressure to control them.',
      'Consumer surplus is transferred to producer surplus, and third-degree price discrimination can extract still more by charging each segment its own price.',
    ],
    [
      'ECONOMIES OF SCALE can outweigh the mark-up. A monopolist operating at much greater scale may have an AC so far below that of many small firms that its price, despite the mark-up, is LOWER than the competitive price would be. Whether consumers lose is then an empirical question about the cost curve, not a theoretical certainty.',
      'NATURAL MONOPOLY is the strongest counter-case: where fixed costs are enormous and AC falls across the whole range of demand - water, rail track, transmission networks - duplication would raise average cost for everyone. Here a single supplier is the efficient outcome and competition would harm consumers.',
      'DYNAMIC EFFICIENCY: supernormal profit funds R&D, and the prospect of it is the incentive to innovate. Patents deliberately create temporary monopoly for exactly this reason. Schumpeter\'s argument is that consumers gain more over time from innovation than they lose from the static deadweight loss - pharmaceuticals being the clearest case.',
      'CONTESTABILITY changes everything. If sunk costs are low, the threat of hit-and-run entry disciplines a monopolist into pricing near the competitive level despite having 100% share - so market STRUCTURE alone does not determine conduct.',
      'REGULATION alters the outcome directly: RPI-X price capping forces prices down and transfers efficiency gains to consumers, and quality standards prevent cost-cutting at consumers\' expense. A regulated monopoly is a materially different proposition from an unregulated one.',
      'CROSS-SUBSIDY can benefit some consumers: a monopolist may fund loss-making rural services from profitable urban ones, which a competitive market would not sustain - a distributional gain the static diagram ignores.',
      'It also depends on WHICH consumers: price discrimination harms the inelastic segment but can extend provision to the elastic segment who would otherwise be priced out entirely.',
    ],
    '"Always" cannot be sustained. In the standard static model consumers clearly lose - higher price, lower output, deadweight loss. But that model assumes identical costs, and the assumption fails precisely where monopoly most often arises: where economies of scale are large or the industry is a natural monopoly, a single firm may deliver lower prices than fragmented competition could. The decisive factors are the cost structure, whether the market is contestable, and whether an effective regulator exists - not the market share itself.',
  ),

  essay(
    'Labour Market Issues',
    'Evaluate the likely impact of a significant increase in the National Living Wage on the UK labour market. (25 marks)',
    'Paper 1 · Section C',
    [
      'Define the NLW as a statutory minimum, a price floor above equilibrium in the labour market.',
      'Diagram 1: competitive labour market - excess supply of labour at the higher wage.',
      'Diagram 2: monopsony - a minimum wage can raise BOTH wages and employment.',
      'Evaluate on elasticity, monopsony power, firm responses and the counterfactual.',
      'Judgement conditioned on market structure and the size of the increase.',
    ],
    [
      'In a competitive labour market the NLW acts as a price floor above the equilibrium wage: quantity of labour demanded contracts to Qd while quantity supplied extends to Qs, so excess supply - unemployment among low-paid workers - is Qs − Qd.',
      'The demand for labour is derived demand, so firms facing a higher wage substitute capital for labour where technically possible, or reduce hours.',
      'Those who keep their jobs gain: higher pay raises living standards, reduces in-work poverty and reduces the tax credit bill, while higher incomes raise consumption and AD.',
      'In a MONOPSONY labour market the employer is a wage setter facing an upward-sloping supply curve, so MCL lies above ACL and it hires where MCL = MRP, paying below the competitive wage. A minimum wage set between the monopsony wage and the competitive wage raises the wage AND employment simultaneously, because it removes the incentive to restrict hiring.',
      'Higher wages can raise productivity through the efficiency wage effect - better motivation, lower turnover and reduced recruitment costs partly offsetting the cost increase.',
    ],
    [
      'THE SIZE OF THE EFFECT depends on the elasticity of demand for labour. Where labour is a small share of total costs, or hard to substitute with capital (care work, hospitality service), demand is inelastic and the employment loss is small relative to the wage gain.',
      'MARKET STRUCTURE is the crux: the competitive prediction and the monopsony prediction point in OPPOSITE directions on employment. Since many low-wage local labour markets - care homes, rural retail - have few employers and immobile workers, monopsony is plausible, which is one reason the empirical literature finds much smaller disemployment effects than the competitive model predicts.',
      'FIRM RESPONSES other than redundancy: cutting hours, reducing non-wage benefits, slowing hiring rather than firing, raising prices, or accepting lower profit margins. Measured employment may therefore be little changed while the adjustment shows up in hours and prices - so "no job losses" does not mean "no effect".',
      'PRICE EFFECTS: in labour-intensive sectors the cost increase is passed to consumers, so the real gain to low-paid workers is smaller than the nominal one, and the incidence is partly regressive if those consumers are themselves low income.',
      'REGIONAL DISPARITY: a single national rate bites much harder where average wages are lower, so the employment risk is concentrated in the regions the policy is most intended to help.',
      'THE COUNTERFACTUAL matters: if the increase merely tracks inflation, the real wage floor is unchanged and effects are minimal. Judging it requires comparing the rise to productivity growth and to the median wage (the "bite"), not to last year\'s cash figure.',
      'It does not address the underlying cause of low pay, which is low productivity; without supply-side investment in skills the policy raises the price of labour without raising its value, which is what makes the disemployment risk real over time.',
    ],
    'The competitive model\'s prediction of significant unemployment is the weakest part of the case, because it assumes wage-taking employers and perfectly elastic labour demand - assumptions that fail in exactly the low-wage local markets where the NLW binds. Where monopsony power exists, the increase can raise pay and employment together. The realistic risks are concentrated in low-productivity, labour-intensive firms in low-wage regions, and show up in hours and prices rather than headline job losses. The judgement therefore turns on the size of the bite relative to median wages, and on whether it is accompanied by skills investment.',
  ),

  /* ------------------------------------------------- THEME 4: GLOBAL */
  essay(
    'International Trade',
    'Evaluate the view that free trade is always beneficial for a developing economy. (25 marks)',
    'Paper 2 · Section C',
    [
      'Define free trade and comparative advantage; identify the developing-economy context.',
      'Case FOR: comparative advantage, gains from specialisation, access to markets and FDI.',
      'Case AGAINST: primary product dependency, infant industry, terms of trade, dumping.',
      'Judgement conditioned on what the country exports and its institutional capacity.',
    ],
    [
      'Comparative advantage shows that a country gains by specialising where its opportunity cost is lowest and trading, even if it is absolutely less productive at everything - total world output rises and both parties can consume beyond their PPF.',
      'Access to larger markets allows exploitation of economies of scale, lowering long-run average cost and raising competitiveness.',
      'Imports of capital goods and technology raise productivity, and competition from imports disciplines domestic firms, reducing X-inefficiency and lowering prices for consumers.',
      'Openness attracts FDI, bringing capital, management expertise and access to distribution networks, and generating employment and tax revenue - helping fill the Harrod-Domar savings gap.',
      'Export earnings ease the foreign exchange constraint and can fund imports of essential capital equipment.',
    ],
    [
      'PRIMARY PRODUCT DEPENDENCY: comparative advantage for many developing economies lies in commodities, whose demand and supply are both price-inelastic, so prices are volatile and export earnings unstable - which makes planning and investment difficult.',
      'The PREBISCH–SINGER hypothesis argues the terms of trade move against primary exporters over time, since manufactured goods have higher income elasticity of demand. Specialising according to current comparative advantage may therefore lock a country into a declining relative position.',
      'INFANT INDUSTRY: an industry with potential comparative advantage cannot reach the scale needed to be competitive if exposed immediately to established foreign firms. Temporary protection may be justified - though it depends entirely on whether protection is genuinely temporary, and government failure suggests it rarely is.',
      'STRUCTURAL UNEMPLOYMENT: adjustment to trade is not costless. Workers in newly uncompetitive sectors are occupationally and geographically immobile, so the transition can be prolonged and concentrated in particular regions.',
      'DUMPING and subsidised competition - agricultural subsidies in developed economies - mean the "free" trade a developing economy faces is not free at all, and domestic producers may be undercut by artificially cheap imports.',
      'DISTRIBUTION: the gains from trade are real in aggregate but need not be shared. Without redistribution, trade can raise inequality even as it raises average income, and FDI profits may be repatriated rather than reinvested.',
      'It depends on INSTITUTIONAL CAPACITY: the benefits require infrastructure, an educated workforce and a functioning legal system to be realised. Without them, openness produces enclave development rather than broad-based growth.',
    ],
    'Free trade raises potential output and is very likely beneficial in aggregate and over the long run, but "always" is indefensible. The gains depend on what the country has a comparative advantage in - commodity dependence brings volatility and, on the Prebisch–Singer view, deteriorating terms of trade - and on whether it has the infrastructure and human capital to capture them. The strongest qualification is that the adjustment costs fall on identifiable groups immediately while the gains are diffuse and delayed, which is why gradual liberalisation alongside supply-side investment usually dominates immediate full openness.',
  ),

  essay(
    'Poverty and Inequality',
    'Evaluate the policies a government might use to reduce income inequality. (25 marks)',
    'Paper 2 · Section C',
    [
      'Distinguish income from wealth inequality and absolute from relative poverty; reference the Lorenz curve and Gini coefficient.',
      'Policy 1: progressive taxation and transfers - mechanism and diagram.',
      'Policy 2: minimum wage / labour market intervention.',
      'Policy 3: education and training - supply-side, longer term.',
      'Evaluate each on incentives, cost, time lag and effectiveness; judge between them.',
    ],
    [
      'A progressive tax system takes a rising average rate as income rises, so it narrows the post-tax distribution; combined with means-tested transfers it moves the Lorenz curve towards the 45° line and lowers the Gini coefficient.',
      'A national minimum or living wage raises the wage floor, directly increasing the earnings of the lowest-paid decile and compressing the wage distribution.',
      'Investment in education and training raises the human capital and hence the MRP of low-skilled workers, shifting the supply of skilled labour right and the supply of unskilled labour left - raising wages at the bottom permanently rather than by transfer.',
      'Universal provision of healthcare and education raises the "social wage", so measured income inequality overstates inequality of living standards where such provision exists.',
      'Progressive taxation also funds the transfers, so the two work together: the tax raises the revenue and the transfer targets it at the bottom decile.',
    ],
    [
      'INCENTIVE EFFECTS: high marginal rates may reduce the incentive to work, invest or remain in the country, and the Laffer curve implies that beyond some rate revenue falls. The magnitude is contested - empirical labour supply elasticities for most workers are low - but the effect on high earners and on capital mobility is real.',
      'THE POVERTY TRAP is a serious flaw in means-tested transfers: withdrawal of benefits as income rises creates very high effective marginal rates for the low paid, discouraging extra hours precisely where the policy is aimed. Universal Credit\'s taper was designed to address this, which shows the problem is recognised rather than solved.',
      'TIME LAG differs sharply between the instruments and this drives the judgement: taxes and transfers change the distribution within a fiscal year; education changes it over a generation. A government facing an immediate poverty problem cannot rely on the second, but a government relying only on the first treats the symptom permanently.',
      'MINIMUM WAGE effectiveness is limited because it helps only those IN work; the poorest households are often workless, so it does little for the bottom of the distribution and may raise unemployment risk in low-wage regions.',
      'OPPORTUNITY COST and FUNDING: redistribution requires revenue, which has an opportunity cost in other spending, and if it slows growth the absolute position of the poor may worsen even as relative inequality falls - the equity/efficiency trade-off.',
      'MEASUREMENT: the Gini coefficient is a single summary statistic and can conceal where in the distribution change occurs. A policy that helps the middle at the expense of the top may cut the Gini without helping the poor at all - so the objective must be specified before the policy is judged.',
      'Reducing income inequality does not address WEALTH inequality, which is substantially larger and more persistent, and is transmitted between generations through inheritance and property.',
    ],
    'No single instrument is sufficient, and the choice depends on the time horizon and on whether the target is poverty or inequality. Taxes and transfers act fastest and are the only tools that help workless households, but they treat the symptom and carry incentive costs at the margins. Education and training address the cause by raising the MRP of low earners, but deliver over a generation. The strongest package therefore combines immediate transfers with sustained human capital investment - and the taper rate on withdrawal matters as much as the headline generosity, because that is what determines whether the policy traps its recipients.',
  ),

  essay(
    'Exchange Rates',
    'Evaluate the likely effects of a significant depreciation of sterling on the UK economy. (25 marks)',
    'Paper 2 · Section C',
    [
      'Define depreciation under a floating system; state the immediate price effects (SPICED / WPIDEC).',
      'Chain: exports cheaper abroad, imports dearer → net exports → AD → growth and employment.',
      'Diagram: AD shift right on AD/AS; optionally the J-curve.',
      'Evaluate on the Marshall–Lerner condition, the J-curve lag, import costs and inflation.',
      'Judgement conditioned on elasticities and the time period.',
    ],
    [
      'A depreciation makes exports cheaper in foreign currency and imports dearer in sterling, so quantity of exports rises and quantity of imports falls.',
      'Net exports are a component of AD, so AD shifts right; with spare capacity this raises real output and cuts cyclical unemployment, amplified by the multiplier.',
      'Domestic producers competing with imports gain market share, supporting output and employment in tradable sectors such as manufacturing and tourism.',
      'The current account balance should improve as the trade balance improves, easing the external position.',
      'Higher import prices raise the cost of imported raw materials and energy, shifting SRAS left and raising the price level - imported cost-push inflation.',
    ],
    [
      'The MARSHALL–LERNER CONDITION is decisive: the current account only improves if PEDx + PEDm > 1. If UK demand for imports is inelastic - energy, food, components with no domestic substitute - the import bill rises in value even as volume falls, and the balance can WORSEN.',
      'THE J-CURVE captures the time path: contracts are fixed and volumes adjust slowly, so in the short run the value effect dominates and the current account deteriorates before it improves. Judging the policy on the first six months would reach the opposite conclusion to judging it on three years.',
      'INFLATION: with a high import propensity, a large depreciation feeds quickly into CPI. If this triggers second-round wage effects the Bank may raise rates, offsetting the demand stimulus - so the net effect on output can be much smaller than the trade channel alone suggests.',
      'SUPPLY-SIDE CAPACITY: exports can only rise if firms can produce more. If the economy is near full capacity, or exporters are capacity-constrained, the volume response is weak and the depreciation shows up as higher prices rather than higher output.',
      'IMPORTED INPUTS blunt the competitiveness gain: UK exporters use imported components, so their costs rise too and the improvement in relative price is smaller than the headline exchange rate move.',
      'CAUSE MATTERS: a depreciation driven by loss of confidence in the economy carries different implications from one driven by a rate cut - the former may accompany capital flight and higher borrowing costs, which offset any trade benefit.',
      'LIVING STANDARDS fall on impact: dearer imports reduce real incomes, and the burden is regressive since food and energy take a larger share of low incomes.',
    ],
    'The textbook conclusion - improved competitiveness, higher net exports, faster growth - holds only if the Marshall–Lerner condition is satisfied and enough time passes for volumes to respond. In the short run the J-curve means the current account worsens and real incomes fall through dearer imports. Given the UK\'s inelastic demand for imported energy and food, and its reliance on imported inputs, the trade improvement is likely to be smaller and slower than the mechanism suggests, while the inflationary cost is immediate. The judgement therefore depends primarily on elasticities and the time horizon, and secondarily on whether the Bank responds by tightening.',
  ),
]
