/*
  Edexcel Economics A essay question bank - Section B and Section C.

  Sixty-four ORIGINAL practice questions written in the house style of the
  real papers: correct command words, correct mark values for their section,
  one per specification topic across Themes 1-4 at AS (8EC0) and A-Level
  (9EC0), plus Paper 3's synoptic contexts. They are not reproductions of
  past Edexcel papers, which are Pearson's copyright, and nothing here
  should be labelled as one. If the bank grows, it grows the same way:
  original questions, in this style, at the right mark value.

  The point of the section this feeds is PLANNING - the three or four
  minutes before you write that decide whether the essay holds together.
  What is here is the marking FRAMEWORK, because that is what should shape
  a plan: Edexcel scores every one of these against two pools,
  Knowledge/Application/Analysis together and Evaluation on its own, and
  the split between them depends on the mark value. A 25-marker is 16 + 9;
  a 10-marker is 6 + 4; a 5-marker has no evaluation marks at all. The
  planning template scales to that split rather than asking for the same
  five paragraphs every time.

  The developed answers live in econ-essay-answers.js (one per question,
  keyed by id) and are shown behind a reveal once the plan boxes have been
  seen, so the plan comes first and the answer is the check on it.
*/

/*
  Marks → (KAA, Evaluation). Source of truth for the whole feature: it
  decides which template steps a question gets, how many chains and
  evaluation points, and the timing shown beside it.
*/
export const MARK_SPLIT = {
  5: { kaa: 5, evaluation: 0, typical: 'Section B - short, no evaluation required' },
  8: { kaa: 6, evaluation: 2, typical: 'A-Level Section B' },
  10: { kaa: 6, evaluation: 4, typical: 'A-Level Section B' },
  12: { kaa: 8, evaluation: 4, typical: 'A-Level Section B / Paper 3' },
  15: { kaa: 9, evaluation: 6, typical: 'A-Level Section B / Paper 3' },
  20: { kaa: 14, evaluation: 6, typical: 'AS Section B extended question' },
  25: { kaa: 16, evaluation: 9, typical: 'A-Level Section C essay / Paper 3 essay' },
}

/*
  Roughly 1.3-1.5 minutes a mark, a little more on Paper 3 where there is
  a case to read first. Kept as a lookup rather than a formula because the
  guide is not quite linear at the ends - a 25-marker is worth 35-40 minutes
  in practice, an 8-marker 8-10.
*/
const TIMING = {
  5: [6, 8],
  8: [8, 10],
  10: [12, 15],
  12: [15, 18],
  15: [18, 22],
  20: [26, 30],
  25: [35, 40],
}

export function timingForMarks(marks, paper3 = false) {
  const [lo, hi] = TIMING[marks] || [Math.round(marks * 1.3), Math.round(marks * 1.5)]
  return { lo, hi, note: paper3 ? 'plus 3-5 minutes reading the case first' : null }
}

export function timingFor(question) {
  return timingForMarks(question.marks, question.paperCode.endsWith('/03'))
}

/*
  Which steps of the planning template a question needs, and how many of
  each. This is the scaling rule the whole planner runs on:

    unpack      every question
    diagram     10+ marks, or any question that asks for one by name
    kaa         2 chains when there are 8+ KAA marks, otherwise 1
    evaluation  0 points for 0 eval marks; 1 for a handful; 2 for 6+
    conclusion  20- and 25-mark questions only

  Returned as an ordered list of step descriptors so the UI simply maps
  over it - no mark-value logic lives in the component.
*/
export function templateFor(question) {
  const split = MARK_SPLIT[question.marks] || { kaa: question.marks, evaluation: 0 }
  const asksForDiagram = /\bdiagram\b/i.test(question.question)
  const steps = []

  steps.push({
    key: 'unpack',
    title: 'Unpack the question',
    hint: 'Command word, the theme it is really testing, and one or two key terms to define precisely up front.',
    rows: 3,
  })

  if (question.marks >= 10 || asksForDiagram) {
    steps.push({
      key: 'diagram',
      title: 'Diagram',
      hint: 'Which diagram applies, and what it must show: labelled axes, the curves, the equilibrium points, and the shift being illustrated.',
      rows: 3,
    })
  }

  const chains = split.kaa >= 8 ? 2 : 1
  for (let i = 1; i <= chains; i++) {
    steps.push({
      key: `kaa${i}`,
      title: chains === 1 ? 'Chain of reasoning' : `Chain of reasoning ${i}`,
      hint:
        i === 1
          ? 'A cause, explained step by step, through to an effect. Anchor it to the diagram or to real-world context.'
          : 'A second, distinct chain - a different mechanism, not the first one restated.',
      rows: 4,
    })
  }

  const evals = split.evaluation === 0 ? 0 : split.evaluation >= 6 ? 2 : 1
  for (let i = 1; i <= evals; i++) {
    steps.push({
      key: `eval${i}`,
      title: evals === 1 ? 'Evaluation' : `Evaluation ${i}`,
      hint:
        evals === 1
          ? 'One short but developed evaluative point - what does the result depend on? Magnitude, timescale, or an assumption behind the analysis.'
          : i === 1
            ? 'A fully developed evaluative point: weigh magnitude, timescale, or the assumptions the analysis rests on.'
            : 'A second, different angle of evaluation - not a repeat of the first with another example.',
      rows: 4,
    })
  }

  if (question.marks >= 20) {
    steps.push({
      key: 'conclusion',
      title: 'Conclusion',
      hint: 'A justified judgement that directly answers the question and says WHY that side wins. Not a summary of both sides.',
      rows: 3,
    })
  }

  return { split, steps }
}

const q = (id, level, paperCode, paperName, topicCode, topicName, section, marks, question) => ({
  id,
  level,
  paperCode,
  paperName,
  topicCode,
  topicName,
  section,
  marks,
  question,
})

const AS1 = ['8EC0/01', 'Paper 1: Introduction to Markets and Market Failure']
const AS2 = ['8EC0/02', 'Paper 2: The UK Economy, Performance and Policies']
const P1 = ['9EC0/01', 'Paper 1: Markets and Business Behaviour']
const P2 = ['9EC0/02', 'Paper 2: The National and Global Economy']
const P3 = ['9EC0/03', 'Paper 3: Microeconomics and Macroeconomics (Synoptic)']

export const ECON_ESSAY_BANK = [
  /* ------------------------------------------------------- AS LEVEL */
  q('Q001', 'AS', ...AS1, '1.1', 'Nature of economics', 'B', 20,
    'Discuss the extent to which the concept of opportunity cost helps to explain the choices made by both consumers and governments.'),
  q('Q002', 'AS', ...AS1, '1.2', 'How markets work', 'B', 20,
    'Assess the likely impact of a significant rise in the world price of wheat on the market for bread in the UK.'),
  q('Q003', 'AS', ...AS1, '1.3', 'Market failure', 'B', 20,
    'Evaluate the view that government intervention is always justified whenever a market fails to allocate resources efficiently.'),
  q('Q004', 'AS', ...AS1, '1.4', 'Government intervention', 'B', 20,
    'Discuss whether a tax on a good with a negative externality of consumption, such as tobacco, is the most effective way for a government to correct that market failure.'),
  q('Q005', 'AS', ...AS2, '2.1', 'Measures of economic performance', 'B', 20,
    "Assess the extent to which a fall in a country's rate of unemployment is evidence of an improvement in its economic performance."),
  q('Q006', 'AS', ...AS2, '2.2', 'Aggregate demand', 'B', 20,
    'Discuss the likely impact of a rise in interest rates on the level of aggregate demand in the UK economy.'),
  q('Q007', 'AS', ...AS2, '2.3', 'Aggregate supply', 'B', 20,
    "Evaluate the extent to which an increase in net investment by firms is likely to increase an economy's long-run aggregate supply."),
  q('Q008', 'AS', ...AS2, '2.4', 'National income', 'B', 20,
    'Assess the likely impact of an increase in government spending on the level of national income, with reference to the multiplier effect.'),
  q('Q009', 'AS', ...AS2, '2.5', 'Economic growth', 'B', 20,
    'Discuss whether a sustained period of economic growth is always beneficial to an economy such as the UK.'),
  q('Q010', 'AS', ...AS2, '2.6', 'Macroeconomic objectives and policy', 'B', 20,
    'Evaluate the view that monetary policy is more effective than fiscal policy in achieving low and stable inflation.'),

  /* ------------------------------------------------ A-LEVEL PAPER 1 */
  q('Q011', 'A-Level', ...P1, '1.1', 'Nature of economics', 'B', 10,
    "Explain, using a production possibility frontier diagram, how a sustained increase in net investment might affect an economy's future productive potential."),
  q('Q012', 'A-Level', ...P1, '1.1', 'Nature of economics', 'C', 25,
    'Evaluate the extent to which the price mechanism alone can be relied upon to solve the economic problem of scarcity in a market economy.'),
  q('Q013', 'A-Level', ...P1, '1.2', 'How markets work', 'B', 12,
    'Assess the likely effect on both price and quantity traded of a fall in the price of a complementary good in a competitive market.'),
  q('Q014', 'A-Level', ...P1, '1.2', 'How markets work', 'C', 25,
    'Discuss the extent to which knowledge of price elasticity of demand is useful to a firm when it is setting the price of its product.'),
  q('Q015', 'A-Level', ...P1, '1.3', 'Market failure', 'B', 8,
    'Explain why a good such as a lighthouse or a flood defence system is described by economists as a public good.'),
  q('Q016', 'A-Level', ...P1, '1.3', 'Market failure', 'C', 25,
    'Evaluate the view that information failure is the most significant cause of market failure in an economy such as the UK.'),
  q('Q017', 'A-Level', ...P1, '1.4', 'Government intervention', 'B', 15,
    'Assess the likely economic effects of a government introducing a system of tradable pollution permits for firms in a polluting industry.'),
  q('Q018', 'A-Level', ...P1, '1.4', 'Government intervention', 'C', 25,
    'Discuss the extent to which government intervention in a market is likely to lead to a more efficient allocation of resources than the free market outcome.'),
  q('Q019', 'A-Level', ...P1, '3.1', 'Business growth', 'B', 10,
    'Explain two reasons why a firm might choose to grow organically rather than through merger or takeover.'),
  q('Q020', 'A-Level', ...P1, '3.1', 'Business growth', 'C', 25,
    'Evaluate the likely impact on consumers of a merger between two of the largest firms in a market.'),
  q('Q021', 'A-Level', ...P1, '3.2', 'Business objectives', 'B', 8,
    'Explain why a firm might pursue a sales revenue maximisation objective rather than profit maximisation.'),
  q('Q022', 'A-Level', ...P1, '3.2', 'Business objectives', 'C', 25,
    'Discuss the extent to which the separation of ownership from control is likely to affect the objectives pursued by a large public limited company.'),
  q('Q023', 'A-Level', ...P1, '3.3', 'Revenues, costs and profits', 'B', 12,
    'Assess how economies of scale are likely to affect the long-run average cost curve of a firm operating in a market with high fixed costs.'),
  q('Q024', 'A-Level', ...P1, '3.3', 'Revenues, costs and profits', 'C', 25,
    'Evaluate the extent to which profit maximisation is a realistic objective for firms operating in a highly competitive market.'),
  q('Q025', 'A-Level', ...P1, '3.4', 'Market structures', 'B', 15,
    'Assess the likely impact on consumers of a firm operating as a monopoly rather than in a market with monopolistic competition.'),
  q('Q026', 'A-Level', ...P1, '3.4', 'Market structures', 'C', 25,
    'Discuss the extent to which price discrimination is always harmful to consumer welfare.'),
  q('Q027', 'A-Level', ...P1, '3.5', 'Labour market', 'B', 10,
    'Explain how an increase in the National Minimum Wage might affect the level of employment in a labour market characterised by monopsony power.'),
  q('Q028', 'A-Level', ...P1, '3.5', 'Labour market', 'C', 25,
    'Evaluate the view that trade unions no longer have a significant impact on wage determination in the UK labour market.'),
  q('Q029', 'A-Level', ...P1, '3.6', 'Government intervention in business and labour markets', 'B', 8,
    'Explain one way in which competition policy can be used to prevent firms from abusing a dominant position in a market.'),
  q('Q030', 'A-Level', ...P1, '3.6', 'Government intervention in business and labour markets', 'C', 25,
    'Assess the extent to which privatisation is likely to improve the efficiency of a formerly state-owned industry.'),

  /* ------------------------------------------------ A-LEVEL PAPER 2 */
  q('Q031', 'A-Level', ...P2, '2.1', 'Measures of economic performance', 'B', 10,
    "Explain two limitations of using real GDP as a measure of a country's standard of living."),
  q('Q032', 'A-Level', ...P2, '2.1', 'Measures of economic performance', 'C', 25,
    'Evaluate the extent to which a fall in the rate of inflation is always beneficial to an economy.'),
  q('Q033', 'A-Level', ...P2, '2.2', 'Aggregate demand', 'B', 12,
    'Assess the likely impact of a depreciation in the value of the pound sterling on the level of aggregate demand in the UK.'),
  q('Q034', 'A-Level', ...P2, '2.2', 'Aggregate demand', 'C', 25,
    'Discuss the extent to which changes in business confidence are the most significant determinant of the level of investment in an economy.'),
  q('Q035', 'A-Level', ...P2, '2.3', 'Aggregate supply', 'B', 8,
    "Explain how an increase in labour productivity might affect an economy's long-run aggregate supply."),
  q('Q036', 'A-Level', ...P2, '2.3', 'Aggregate supply', 'C', 25,
    "Evaluate the view that supply-side policies are the most effective way of increasing an economy's rate of economic growth."),
  q('Q037', 'A-Level', ...P2, '2.4', 'National income', 'B', 10,
    'Explain, using the concept of the multiplier, how a fall in the marginal propensity to save might affect the level of national income.'),
  q('Q038', 'A-Level', ...P2, '2.4', 'National income', 'C', 25,
    'Assess the extent to which an increase in injections into the circular flow of income will lead to economic growth.'),
  q('Q039', 'A-Level', ...P2, '2.5', 'Economic growth', 'B', 12,
    'Assess the likely relationship between a negative output gap and the rate of demand-deficient unemployment in an economy.'),
  q('Q040', 'A-Level', ...P2, '2.5', 'Economic growth', 'C', 25,
    'Discuss the view that policies to promote economic growth are always in conflict with policies to protect the environment.'),
  q('Q041', 'A-Level', ...P2, '2.6', 'Macroeconomic objectives and policy', 'B', 15,
    'Assess the extent to which quantitative easing is likely to help a central bank achieve its inflation target.'),
  q('Q042', 'A-Level', ...P2, '2.6', 'Macroeconomic objectives and policy', 'C', 25,
    'Evaluate the effectiveness of fiscal policy in helping a government to achieve its macroeconomic objectives simultaneously.'),
  q('Q043', 'A-Level', ...P2, '4.1', 'International economics', 'B', 10,
    'Explain how the theory of comparative advantage suggests that international trade can benefit two trading countries.'),
  q('Q044', 'A-Level', ...P2, '4.1', 'International economics', 'C', 25,
    'Discuss the extent to which the imposition of tariffs is likely to benefit the economy that introduces them.'),
  q('Q045', 'A-Level', ...P2, '4.2', 'Poverty and inequality', 'B', 8,
    'Explain, using a Lorenz curve diagram, how the degree of income inequality in a country can be illustrated.'),
  q('Q046', 'A-Level', ...P2, '4.2', 'Poverty and inequality', 'C', 25,
    'Evaluate the extent to which government policies can successfully reduce relative poverty in an economy such as the UK.'),
  q('Q047', 'A-Level', ...P2, '4.3', 'Emerging and developing economies', 'B', 12,
    'Assess two reasons why a lack of infrastructure might act as a barrier to economic development in a developing economy.'),
  q('Q048', 'A-Level', ...P2, '4.3', 'Emerging and developing economies', 'C', 25,
    'Discuss the extent to which trade, rather than aid, is the most effective strategy for promoting growth and development in a developing economy.'),
  q('Q049', 'A-Level', ...P2, '4.4', 'The financial sector', 'B', 10,
    'Explain how asymmetric information between a borrower and a lender can lead to market failure in the financial sector.'),
  q('Q050', 'A-Level', ...P2, '4.4', 'The financial sector', 'C', 25,
    'Evaluate the extent to which regulation of the financial sector is likely to prevent a future financial crisis.'),
  q('Q051', 'A-Level', ...P2, '4.5', 'Role of the state in the macroeconomy', 'B', 15,
    'Assess the likely economic effects of a government running a persistent budget deficit.'),
  q('Q052', 'A-Level', ...P2, '4.5', 'Role of the state in the macroeconomy', 'C', 25,
    'Discuss the extent to which a more progressive tax system is the best way for a government to reduce income inequality.'),

  /* ------------------------------------------------ A-LEVEL PAPER 3 */
  q('Q053', 'A-Level', ...P3, 'Synoptic 1', 'Sin taxes and public health (Themes 1 + 2)', 'structured', 12,
    'Assess the likely impact of a tax on sugary drinks on both the market for sugary drinks and the wider UK economy.'),
  q('Q054', 'A-Level', ...P3, 'Synoptic 1', 'Sin taxes and public health (Themes 1 + 2)', 'essay', 25,
    'Evaluate the microeconomic and macroeconomic consequences of a government significantly increasing taxation on demerit goods such as tobacco and alcohol.'),
  q('Q055', 'A-Level', ...P3, 'Synoptic 2', 'Automation, the labour market and inequality (Themes 3 + 4)', 'structured', 15,
    'Assess the likely impact of automation on wages and employment in the labour market for low-skilled workers.'),
  q('Q056', 'A-Level', ...P3, 'Synoptic 2', 'Automation, the labour market and inequality (Themes 3 + 4)', 'essay', 25,
    'Discuss the extent to which increased automation is likely to widen income inequality within an economy such as the UK.'),
  q('Q057', 'A-Level', ...P3, 'Synoptic 3', 'Trade, tariffs and the domestic economy (Themes 1 + 4)', 'structured', 12,
    'Explain how the imposition of a tariff on imported steel might affect both the domestic market for steel and domestic steel producers.'),
  q('Q058', 'A-Level', ...P3, 'Synoptic 3', 'Trade, tariffs and the domestic economy (Themes 1 + 4)', 'essay', 25,
    'Evaluate the microeconomic and macroeconomic effects of a major economy withdrawing from a regional trading bloc.'),
  q('Q059', 'A-Level', ...P3, 'Synoptic 4', 'The housing market and monetary policy (Themes 1 + 2)', 'structured', 15,
    'Assess the likely impact of a sustained rise in interest rates on both the housing market and the wider macroeconomy.'),
  q('Q060', 'A-Level', ...P3, 'Synoptic 4', 'The housing market and monetary policy (Themes 1 + 2)', 'essay', 25,
    'Discuss the extent to which government intervention is justified in both the housing market and the macroeconomy to address problems of affordability.'),
  q('Q061', 'A-Level', ...P3, 'Synoptic 5', 'Market structure and the environment (Themes 1 + 3)', 'structured', 12,
    'Assess the extent to which a firm operating in an oligopoly is likely to under-invest in reducing its carbon emissions.'),
  q('Q062', 'A-Level', ...P3, 'Synoptic 5', 'Market structure and the environment (Themes 1 + 3)', 'essay', 25,
    'Evaluate the likely effectiveness of tradable pollution permits, compared with regulation, in reducing carbon emissions from large firms.'),
  q('Q063', 'A-Level', ...P3, 'Synoptic 6', 'Development, aid and the financial sector (Theme 4)', 'structured', 15,
    'Assess two reasons why access to microfinance might promote economic development in a low-income country.'),
  q('Q064', 'A-Level', ...P3, 'Synoptic 6', 'Development, aid and the financial sector (Theme 4)', 'essay', 25,
    'Discuss the extent to which the growth of the financial sector is a necessary condition for economic development in an emerging economy.'),
]
