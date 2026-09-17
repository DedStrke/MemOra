/*
  Second batch of the Edexcel Economics A essay-plan bank (econ-essay-bank.js).

  The original 64 questions give one Section B (plus a Section C for
  A-Level) per numbered SUBGROUP of the specification - "4.1 International
  Economics", for example. Several subgroups name more than one individual
  topic (4.1 alone names eight: Globalisation, International Trade, Terms
  of Trade, Trading Blocs and the WTO, Protectionism and Trade
  Restrictions, The Balance of Payments, Exchange Rates and International
  Competitiveness), and the original bank could only put its one question
  against one of them - Globalisation itself never got a question, which
  is the gap that prompted this file.

  This batch audits every subgroup in ECON_GROUPS (econ-full.js) against
  which of its individual topics the original 64 already examine, and
  gives every topic that had ZERO questions of its own a Section B and a
  Section C - the same A-Level pairing every other topic already gets.
  Twenty-four topics were missing entirely; this is forty-eight new
  questions, IDs Q065-Q112, same house style as the original bank:
  original questions (not reproductions of a real Pearson paper), correct
  command words for the section, correct mark value for the command word.

  Paper 1 = Themes 1 and 3 (Markets and Business Behaviour). Paper 2 =
  Themes 2 and 4 (The National and Global Economy) - matching the split
  the original bank already uses. No AS-level equivalents: AS was
  deliberately scoped as one broad question per whole subgroup, and that
  is unchanged - the gap this file closes only exists at A-Level depth.
*/

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

const P1 = ['9EC0/01', 'Paper 1: Markets and Business Behaviour']
const P2 = ['9EC0/02', 'Paper 2: The National and Global Economy']

export const ECON_ESSAY_BANK_2 = [
  /* ------------------------------------------------------- THEME 1 */
  q('Q065', 'A-Level', ...P1, '1.1', 'Economic Systems', 'B', 10,
    'Explain how resources are allocated differently in a market economy compared with a planned economy.'),
  q('Q066', 'A-Level', ...P1, '1.1', 'Economic Systems', 'C', 25,
    'Discuss the extent to which a mixed economy is better able to achieve an efficient allocation of resources than either a pure market economy or a pure planned economy.'),

  q('Q067', 'A-Level', ...P1, '1.2', 'Rational Decision Making', 'B', 8,
    'Explain, using an example, how bounded rationality might cause a consumer to make a decision that does not maximise their utility.'),
  q('Q068', 'A-Level', ...P1, '1.2', 'Rational Decision Making', 'C', 25,
    'Evaluate the extent to which the assumption that consumers act as rational economic agents, seeking to maximise their utility, is realistic.'),

  q('Q069', 'A-Level', ...P1, '1.2', 'Supply and Elasticity of Supply', 'B', 10,
    'Explain two factors that might make the supply of a manufactured good, such as a car, more price elastic in the long run than in the short run.'),
  q('Q070', 'A-Level', ...P1, '1.2', 'Supply and Elasticity of Supply', 'C', 25,
    'Discuss the extent to which knowledge of the price elasticity of supply of a good is useful to a government considering imposing an indirect tax on that good.'),

  q('Q071', 'A-Level', ...P1, '1.2', 'Consumer and Producer Surplus', 'B', 12,
    'Using a demand and supply diagram, explain the likely effect of the imposition of a maximum price below the free market equilibrium on consumer and producer surplus.'),
  q('Q072', 'A-Level', ...P1, '1.2', 'Consumer and Producer Surplus', 'C', 25,
    'Evaluate the view that government intervention to set a price ceiling in a market always increases total welfare (consumer and producer surplus combined).'),

  q('Q073', 'A-Level', ...P1, '1.3', 'Externalities', 'B', 10,
    'Explain, using a diagram, why a negative production externality such as air pollution from a factory is likely to result in the overproduction of a good in a free market.'),
  q('Q074', 'A-Level', ...P1, '1.3', 'Externalities', 'C', 25,
    'Evaluate the extent to which subsidies are the most effective way for a government to correct the market failure caused by a positive externality of consumption, such as education.'),

  q('Q075', 'A-Level', ...P1, '1.4', 'Government Failure', 'B', 8,
    'Explain, with an example, how government intervention in a market might lead to government failure.'),
  q('Q076', 'A-Level', ...P1, '1.4', 'Government Failure', 'C', 25,
    'Discuss the extent to which the risk of government failure means that governments should not intervene to correct market failure.'),

  /* ------------------------------------------------------- THEME 2 */
  q('Q077', 'A-Level', ...P2, '2.1', 'Balance of Payments', 'B', 10,
    'Explain two possible causes of a deficit on the current account of the balance of payments for an economy such as the UK.'),
  q('Q078', 'A-Level', ...P2, '2.1', 'Balance of Payments', 'C', 25,
    'Evaluate the extent to which a persistent current account deficit is a cause for concern for an economy such as the UK.'),

  q('Q079', 'A-Level', ...P2, '2.6', 'Macroeconomic Objectives', 'B', 10,
    'Explain why policies to achieve a faster rate of economic growth might conflict with the objective of protecting the environment.'),
  q('Q080', 'A-Level', ...P2, '2.6', 'Macroeconomic Objectives', 'C', 25,
    'Discuss the extent to which it is possible for a government to achieve all of its macroeconomic objectives simultaneously.'),

  q('Q081', 'A-Level', ...P2, '2.6', 'Supply-Side Policy', 'B', 12,
    "Explain how an increase in government spending on education and training might affect an economy's long-run aggregate supply."),
  q('Q082', 'A-Level', ...P2, '2.6', 'Supply-Side Policy', 'C', 25,
    "Evaluate the extent to which market-based supply-side policies are more effective than interventionist supply-side policies in increasing an economy's long-run rate of economic growth."),

  q('Q083', 'A-Level', ...P2, '2.6', 'Conflicts Between Objectives and the Phillips Curve', 'B', 10,
    'Explain, using the Phillips curve, the relationship between the rate of unemployment and the rate of inflation in the short run.'),
  q('Q084', 'A-Level', ...P2, '2.6', 'Conflicts Between Objectives and the Phillips Curve', 'C', 25,
    'Discuss the extent to which the short-run Phillips curve trade-off between inflation and unemployment still exists in an economy such as the UK.'),

  /* ------------------------------------------------------- THEME 3 */
  q('Q085', 'A-Level', ...P1, '3.1', 'Demergers', 'B', 8,
    'Explain two reasons why a large conglomerate might choose to demerge into two or more separate companies.'),
  q('Q086', 'A-Level', ...P1, '3.1', 'Demergers', 'C', 25,
    'Evaluate the likely impact of a demerger on the efficiency of the businesses involved.'),

  q('Q087', 'A-Level', ...P1, '3.4', 'Efficiency', 'B', 10,
    'Explain the difference between productive efficiency and allocative efficiency, using a diagram to illustrate the point at which perfect competition achieves both.'),
  q('Q088', 'A-Level', ...P1, '3.4', 'Efficiency', 'C', 25,
    'Discuss the extent to which a market structure with only a small number of large firms can ever be as efficient as a market with many small firms.'),

  q('Q089', 'A-Level', ...P1, '3.4', 'Perfect Competition', 'B', 10,
    'Explain why a firm operating in a perfectly competitive market is unable to earn supernormal profit in the long run.'),
  q('Q090', 'A-Level', ...P1, '3.4', 'Perfect Competition', 'C', 25,
    'Evaluate the extent to which perfect competition is likely to lead to a better outcome for consumers than a market structure such as monopoly.'),

  q('Q091', 'A-Level', ...P1, '3.4', 'Oligopoly', 'B', 12,
    'Using a kinked demand curve diagram, explain why prices in an oligopolistic market might be relatively stable, even when the costs of production change.'),
  q('Q092', 'A-Level', ...P1, '3.4', 'Oligopoly', 'C', 25,
    'Discuss the extent to which firms operating in an oligopoly are more likely to compete on price than through non-price competition.'),

  q('Q093', 'A-Level', ...P1, '3.4', 'Monopsony', 'B', 10,
    'Explain, using a diagram, how a firm with monopsony power in a labour market is able to pay a lower wage than would exist in a competitive labour market.'),
  q('Q094', 'A-Level', ...P1, '3.4', 'Monopsony', 'C', 25,
    'Evaluate the extent to which the introduction of a National Minimum Wage is likely to increase employment in a labour market where a single firm has monopsony power.'),

  q('Q095', 'A-Level', ...P1, '3.4', 'Contestability', 'B', 8,
    'Explain two characteristics of a highly contestable market.'),
  q('Q096', 'A-Level', ...P1, '3.4', 'Contestability', 'C', 25,
    'Discuss the extent to which increasing the contestability of a market is likely to lead to lower prices for consumers, even if the number of firms in the market does not change.'),

  /* ------------------------------------------------------- THEME 4 */
  q('Q097', 'A-Level', ...P2, '4.1', 'Globalisation', 'B', 10,
    'Explain two factors that have contributed to the increased globalisation of the world economy over recent decades.'),
  q('Q098', 'A-Level', ...P2, '4.1', 'Globalisation', 'C', 25,
    'Evaluate the extent to which globalisation has benefited developing economies more than developed economies such as the UK.'),

  q('Q099', 'A-Level', ...P2, '4.1', 'Terms of Trade', 'B', 10,
    "Explain, using a diagram, the likely effect of an improvement in a country's terms of trade on its balance of trade."),
  q('Q100', 'A-Level', ...P2, '4.1', 'Terms of Trade', 'C', 25,
    "Discuss the extent to which a deterioration in a developing economy's terms of trade is likely to harm its rate of economic development."),

  q('Q101', 'A-Level', ...P2, '4.1', 'Trading Blocs and the WTO', 'B', 10,
    'Explain two economic benefits to a country of joining a regional trading bloc such as the European Union.'),
  q('Q102', 'A-Level', ...P2, '4.1', 'Trading Blocs and the WTO', 'C', 25,
    'Evaluate the extent to which the growth of regional trading blocs undermines the role of the World Trade Organization in promoting free trade globally.'),

  q('Q103', 'A-Level', ...P2, '4.1', 'The Balance of Payments', 'B', 12,
    'Explain two policies a government might use to reduce a large deficit on the current account of the balance of payments.'),
  q('Q104', 'A-Level', ...P2, '4.1', 'The Balance of Payments', 'C', 25,
    "Discuss the extent to which a depreciation of a country's currency is the most effective way of correcting a current account deficit."),

  q('Q105', 'A-Level', ...P2, '4.1', 'Exchange Rates', 'B', 10,
    'Explain, using a diagram, how an increase in UK interest rates relative to those in the rest of the world might affect the exchange rate of the pound sterling.'),
  q('Q106', 'A-Level', ...P2, '4.1', 'Exchange Rates', 'C', 25,
    'Evaluate the extent to which a fixed exchange rate system is more beneficial for an economy than a freely floating exchange rate system.'),

  q('Q107', 'A-Level', ...P2, '4.1', 'International Competitiveness', 'B', 8,
    "Explain two factors, other than the exchange rate, that might affect a country's international competitiveness."),
  q('Q108', 'A-Level', ...P2, '4.1', 'International Competitiveness', 'C', 25,
    "Discuss the extent to which a fall in labour productivity is the most significant cause of a decline in a country's international competitiveness."),

  q('Q109', 'A-Level', ...P2, '4.5', 'The National Debt', 'B', 10,
    "Explain the difference between a government's budget deficit and the national debt."),
  q('Q110', 'A-Level', ...P2, '4.5', 'The National Debt', 'C', 25,
    'Evaluate the extent to which a rising national debt is always a serious problem for an economy such as the UK.'),

  q('Q111', 'A-Level', ...P2, '4.5', 'Macroeconomic Policies in a Global Context', 'B', 12,
    'Explain how a global recession originating in one major economy might be transmitted to other economies around the world.'),
  q('Q112', 'A-Level', ...P2, '4.5', 'Macroeconomic Policies in a Global Context', 'C', 25,
    'Discuss the extent to which international cooperation between governments is necessary to successfully manage the global economy.'),
]
