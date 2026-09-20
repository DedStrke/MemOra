/*
  Developed answers for the Theme 2 and Theme 4 half of econ-essay-bank-2.js
  (Q077-Q084, Q097-Q112 - Balance of Payments through Macroeconomic Policies
  in a Global Context). Same shape and house style as econ-essay-answers-p2.js:
  Section B questions (8, 10 or 12 marks) get one or two developed chains and
  no conclusion; Section C essays (25 marks) get three chains and a justified
  judgement.

  Diagrams are attached only where the real exam actually expects one for
  that topic (Supply-Side Policy, the Phillips Curve, Exchange Rates, the J
  curve for a depreciation-led correction, monetary transmission) -
  Balance of Payments, Macroeconomic Objectives, Globalisation, Trading
  Blocs, International Competitiveness and the National Debt are not
  diagram topics in the real papers either, so none is forced in here.
  Placement lives in econ-essay-placement-2.js.
*/

const A = (diagrams, intro, rows, conclusion, kaa, evaluation) => ({
  diagrams,
  intro,
  rows,
  conclusion,
  markScheme: { kaa, evaluation },
})

export const ECON_ESSAY_ANSWERS_4 = {
  /* ------------------------------------------- Balance of Payments (2.1) */
  Q077: A(
    [],
    'The balance of payments has three parts: the current account, recording trade in goods and services, income flows and transfers; the capital account, covering transfers of capital assets; and the financial account, recording flows of investment and other financial claims. A current account deficit means more is flowing out (spent on imports, income paid abroad) than is flowing in, and it must be matched by a corresponding surplus on the financial account, since the two balance by construction.',
    [
      [
        'A lack of international competitiveness is a common cause: if domestic inflation runs persistently higher than that of trading partners, or if productivity growth lags behind competitors, domestic goods become relatively more expensive abroad and imports become relatively cheaper at home, widening the trade deficit as exports fall and imports rise.',
        'This cause is structural rather than temporary: it will not correct itself without an actual change in relative costs, prices or productivity, so a deficit driven by a persistent competitiveness gap can continue to widen for years if the underlying gap is not addressed by policy.',
      ],
      [
        'A second cause is a high marginal propensity to import relative to income: an economy growing strongly, with consumers spending a large share of rising incomes on imported goods, can see its import bill rise faster than exports even without any loss of competitiveness, simply because domestic demand is growing quickly relative to the rest of the world.',
        'This cause is more cyclical than structural: it tends to ease on its own once domestic growth slows towards the pace of trading partners, since a smaller share of a slower-growing income is then spent on imports, so a deficit driven mainly by strong domestic demand is more likely to narrow without any policy change than one driven by lost competitiveness.',
      ],
    ],
    null,
    [
      'Definition of the current account of the balance of payments',
      'Loss of international competitiveness (relative inflation, productivity) widening the trade deficit',
      'High marginal propensity to import relative to strong domestic income growth',
    ],
    [
      'The competitiveness cause is structural and will not self-correct without a change in relative costs or productivity',
      'The high-MPM cause is more cyclical and tends to ease once domestic growth slows relative to trading partners',
    ],
  ),

  Q078: A(
    [],
    'A current account deficit means a country is spending more on imports, income and transfers to the rest of the world than it earns from them. Whether a persistent deficit is a genuine cause for concern depends on its size, how it is financed, and what is driving it.',
    [
      [
        'A persistent deficit must be financed, either by attracting inflows on the financial and capital accounts (foreign investment, borrowing) or by running down foreign currency reserves. If financed mainly by short-term, volatile "hot money" inflows chasing higher interest rates, a country becomes vulnerable to a sudden reversal in sentiment - if those inflows leave quickly, the currency can depreciate sharply, and financing the deficit becomes harder and more expensive just as it is most needed.',
        'A deficit financed instead by long-term, stable inflows, such as foreign direct investment building new productive capacity, is far less of a concern, since it does not carry the same risk of a sudden, destabilising reversal, and the investment itself may in time improve the productive capacity and competitiveness that caused the deficit in the first place.',
      ],
      [
        'The underlying cause also matters: a deficit driven by strong domestic growth pulling in imports (a "cyclical" deficit) is less concerning, since it should narrow again once growth slows and domestic demand for imports eases, whereas a deficit caused by a persistent, structural loss of international competitiveness will not correct itself without a change in relative costs, prices or productivity, and can continue to widen indefinitely if left unaddressed.',
        'A very large deficit, however financed, can also constrain a government’s other macroeconomic choices: to keep attracting the financing needed, a country may need to keep interest rates higher than domestic conditions alone would justify, which can conflict directly with the objective of supporting growth or controlling unemployment.',
      ],
      [
        'The extent of concern is therefore highly conditional rather than automatic: a small, cyclical deficit financed by stable, long-term capital flows in an economy that also runs its OWN currency (so it is not exposed to a fixed peg’s reserve constraints) is a normal and largely unproblematic feature of an open economy. A large, structural deficit financed increasingly by volatile short-term flows, in a country with limited reserves or a fixed exchange rate, is a much more serious and pressing concern, since it combines a persistent underlying problem with genuine vulnerability to a sudden loss of financing.',
        'The UK’s own experience of running current account deficits for extended periods without a currency or debt crisis suggests that, for a large, developed economy with deep and credible financial markets, a persistent deficit is sustainable for a long time - though this does not mean it can be run indefinitely at any size without eventually requiring adjustment.',
      ],
    ],
    'A persistent current account deficit is a cause for concern to the extent that it is large, structural rather than cyclical, and financed by volatile short-term inflows rather than stable long-term investment. For a developed economy with deep financial markets, a moderate, well-financed deficit is a manageable and even normal feature of an open economy; a large, structurally worsening deficit financed increasingly by hot money is a genuine vulnerability that can constrain domestic policy and expose the economy to a sudden, destabilising reversal in capital flows.',
    [
      'Definition of the current account and what financing a deficit requires',
      'Financing by stable, long-term flows (FDI) versus volatile short-term "hot money"',
      'Cyclical deficit (strong domestic growth pulling in imports) versus structural deficit (competitiveness)',
      'A large deficit can constrain domestic monetary policy (need to attract financing)',
    ],
    [
      'Depends on the size of the deficit relative to GDP',
      'Depends on how the deficit is financed (stable versus volatile flows)',
      'Depends on whether the cause is cyclical (self-correcting) or structural (persistent)',
      'Judgement: concern is conditional on size, financing and cause, not automatic for any deficit',
    ],
  ),

  /* --------------------------------------------- Macroeconomic Objectives */
  Q079: A(
    [],
    'Governments typically pursue several macroeconomic objectives together - economic growth, low unemployment, low and stable inflation, a satisfactory balance of payments, and environmental sustainability - and these objectives do not always move in the same direction.',
    [
      [
        'Faster economic growth is usually driven by rising output, which typically requires using more resources - more energy, more raw materials, more industrial production - and this tends to increase carbon emissions and other environmental damage, at least in the absence of a simultaneous improvement in the efficiency or cleanliness of production. A government pursuing policies to boost growth (lower interest rates, tax cuts, deregulation to encourage investment) can therefore find that these same policies raise pollution and environmental degradation, conflicting directly with an objective of protecting the environment.',
        'This trade-off is not fixed, however: growth driven by genuinely resource-efficient, low-carbon investment (renewable energy, green technology) can raise output while reducing environmental harm, so the conflict depends heavily on the TYPE of growth being pursued, not on growth itself being inherently in conflict with the environment.',
      ],
      [
        'A government seeking growth may also relax the regulations that protect the environment directly, rather than only raising resource use: easing planning restrictions for housebuilding and infrastructure, weakening environmental impact assessments, or granting exemptions to attract large capital projects lowers the cost and delay facing investors, which supports growth, but at the direct cost of whatever protection the relaxed rule provided.',
        'Unlike the resource-use channel, this conflict is a matter of policy choice rather than an unavoidable by-product of growth itself: a government can in principle pursue growth by speeding up approval processes without lowering the environmental standard being applied, so this second conflict is more avoidable, given sufficient political will, than the first.',
      ],
    ],
    null,
    [
      'Identification of the two objectives in conflict: economic growth and environmental protection',
      'Explanation of the mechanism: growth typically uses more resources and raises emissions',
      'Recognition that the conflict depends on the type of growth (resource-intensive versus green investment)',
      'A second mechanism: growth-oriented deregulation directly weakening environmental protections',
    ],
    [
      'Depends on whether growth is driven by resource-intensive or resource-efficient investment',
      'The deregulation channel is more avoidable through policy choice than the resource-use channel',
    ],
  ),

  Q080: A(
    [['phillips', 'The short-run Phillips curve, the clearest single picture of the conflict this question is about: moving left along it to cut unemployment means moving up it to higher inflation. The vertical LRPC at the natural rate shows why demand management cannot escape the trade-off permanently.']],
    'A government typically holds several macroeconomic objectives simultaneously - economic growth, low unemployment, low and stable inflation, a sustainable balance of payments, a balanced budget, environmental protection and greater income equality among them - and achieving all of them at once is often difficult because the policy tools used to pursue one objective can work against another.',
    [
      [
        'Policies to boost growth and reduce unemployment - lower interest rates, higher government spending, tax cuts - increase aggregate demand, but if the economy is already close to full capacity, this extra demand is more likely to raise the general price level than to raise real output further, conflicting with the objective of low and stable inflation. This is the classic short-run trade-off the Phillips curve describes between unemployment and inflation.',
        'Similarly, a demand-driven boost to growth tends to pull in more imports as rising incomes are partly spent on foreign goods, worsening the current account of the balance of payments, so a policy successfully hitting the growth and employment objectives can simultaneously push the country further from its external balance objective.',
      ],
      [
        'Against this, not every policy trades off objectives against one another: supply-side policies that raise productive capacity - investment in education and training, infrastructure, or measures that improve labour market flexibility - can raise output and reduce unemployment WITHOUT the same inflationary pressure, because they increase what the economy can produce at any given level of demand rather than simply adding more demand onto an unchanged productive capacity.',
        'Supply-side policy is not a complete solution, however: it typically works with a long time lag, since building infrastructure, raising skills or reforming institutions takes years to show up as extra capacity, so a government facing an immediate conflict between growth and inflation cannot rely on supply-side policy alone to resolve it in the short run.',
      ],
      [
        'Whether it is possible to achieve all objectives simultaneously therefore depends on the state of the economy and the time horizon considered. In an economy operating with significant spare capacity (a negative output gap), demand-side stimulus can raise growth and reduce unemployment with little inflationary or import cost, since idle resources can be brought into use without straining capacity - here, several objectives can be achieved together in the short run, as in the UK’s gradual recovery from the mid-2010s, when growth and falling unemployment coincided with inflation close to target.',
        'In an economy already near full capacity, the classic trade-offs re-emerge in the short run - the UK’s post-pandemic recovery from 2021 is a clear recent case, where demand-side stimulus met a supply-constrained economy and growth was accompanied by inflation reaching double digits rather than a smooth, cost-free expansion. Reconciling all objectives then depends on supply-side policy gradually raising capacity over the medium to long run, alongside careful demand management in the interim - genuinely achieving every objective simultaneously, indefinitely, is rare, but a government can reduce the SIZE of the conflicts through well-targeted supply-side policy even if it cannot eliminate them entirely. Even a balanced budget and greater income equality can conflict with the others: closing a deficit through higher taxation or lower spending can itself reduce growth and raise unemployment in the short run, and redistributive policy funded by higher taxes on the highest earners can weaken the incentive to work or invest that the growth objective ultimately depends on.',
      ],
    ],
    'It is difficult, though not always impossible, for a government to achieve all of its macroeconomic objectives simultaneously. Where an economy has significant spare capacity, demand-side policy can advance growth, employment and the balance of payments together with limited inflationary cost. Where an economy is close to full capacity, the classic short-run trade-offs between growth, unemployment, inflation and the balance of payments re-emerge, and only supply-side policy - which works with a considerable time lag - can genuinely reduce these conflicts over the medium to long run rather than resolve them immediately.',
    [
      'Growth/unemployment objectives can conflict with inflation and the balance of payments (Phillips curve trade-off, import propensity)',
      'Supply-side policy can raise capacity, potentially achieving growth without the same inflationary pressure',
      'Supply-side policy works with a considerable time lag',
      'The output gap (spare capacity versus an economy near full capacity) determines how severe the trade-offs are',
      'A balanced budget and greater income equality can also conflict with growth: deficit reduction and redistributive taxation both risk weakening growth or work incentives',
    ],
    [
      'Depends on the size of the output gap at the time',
      'Depends on the time horizon considered (short run versus medium/long run)',
      'Supply-side policy reduces but does not eliminate the conflicts',
      'Judgement: achievable together with spare capacity in the short run; genuinely difficult near full capacity without a long-run supply-side response',
    ],
  ),

  /* -------------------------------------------------------- Supply-Side Policy */
  Q081: A(
    [['lras-shift', 'Long-run aggregate supply shifting right, from LRAS1 to LRAS2, following the increase in government spending on education and training, with the new equilibrium at a higher level of real output at the same or a lower price level than a demand-side expansion would produce.']],
    'Long-run aggregate supply (LRAS) represents the maximum sustainable output an economy can produce when all resources are fully and efficiently employed. Supply-side policy aims to shift LRAS to the right by improving the quantity or quality of the economy’s factors of production.',
    [
      [
        'Government spending on education and training directly raises the quality of the labour force: workers become more productive, better able to use new technology, and more adaptable to changing employer needs, which raises the economy’s potential output at any given quantity of labour and capital. This is a supply-side effect, distinct from any short-term demand-side boost the spending might also create.',
        'Because this policy works through the underlying productive capacity of the economy rather than simply adding to demand, the resulting rightward shift in LRAS allows the economy to produce more output without the same upward pressure on the price level that a purely demand-driven expansion, hitting the limits of existing capacity, would create.',
      ],
      [
        'Beyond raising the productivity of those already in work, education and training can also raise LRAS through the QUANTITY of usably employed labour, by reducing structural unemployment: retraining programmes better match the skills unemployed workers have to the skills vacant jobs actually require, letting workers whose previous skills were made obsolete by technological change or industrial decline move into sectors with unfilled vacancies, which lowers the natural rate of unemployment (NAIRU).',
        'This channel depends on retraining genuinely matching current vacancies rather than skills already in oversupply, and on unemployed workers being willing and able to retrain or relocate for a new role; where either condition fails to hold, spending on retraining raises LRAS by considerably less than the headline spending figure would suggest.',
      ],
    ],
    null,
    [
      'Definition of long-run aggregate supply and what supply-side policy aims to achieve',
      'Education and training raise labour productivity and quality directly',
      'Diagram showing LRAS shifting right as a result',
      'Distinction between this supply-side effect and a demand-side effect of the same spending',
      'Education and training also reduce structural unemployment (NAIRU) by matching skills to vacancies',
    ],
    [
      'Works with a considerable time lag - education and training take years to raise productivity',
      'Depends on retraining matching genuine vacancies and on workers being willing and able to retrain or relocate',
    ],
  ),

  Q082: A(
    [['lras-shift', 'Long-run aggregate supply shifting right under both approaches. Use the same diagram to illustrate the outcome, and use the accompanying analysis to distinguish HOW each approach gets there (deregulation and incentives versus direct public investment).']],
    'Supply-side policy aims to increase an economy’s long-run aggregate supply, raising its sustainable rate of economic growth. Market-based supply-side policies rely on reducing the role of government and strengthening incentives - deregulation, privatisation, tax cuts, more flexible labour markets - while interventionist supply-side policies rely on direct government spending and provision - education, infrastructure, research funding. Both are usually shown shifting the Keynesian LRAS curve to the right; the same rightward shift applies equally to the vertical Classical LRAS model, which some economists prefer, since the two differ in shape, not in what a supply-side policy is meant to do to either of them.',
    [
      [
        'Market-based policies work by removing barriers that are assumed to be holding back private sector efficiency and investment: cutting corporation tax raises the after-tax return on investment, deregulation reduces the cost of compliance and encourages new firms to enter, and reduced trade union power can make labour markets more flexible, all of which can raise productive capacity relatively quickly and at comparatively low direct cost to the government’s own budget.',
        'These policies rely heavily on the private sector actually responding to the improved incentives - a tax cut only raises investment if firms have profitable opportunities to invest in and confidence that conditions will remain favourable, and deregulation can, if taken too far, remove protections (environmental, consumer, employment) that had a genuine economic justification, creating costs of its own.',
      ],
      [
        'Interventionist policies work by directly providing what the market might under-supply: investment in infrastructure, education and research often has long time horizons or diffuse benefits that private investors are reluctant to fund alone, so government provision can raise capacity in areas the market-based approach would leave unaddressed, and can be targeted specifically at genuine gaps (a shortage of a particular skill, an underdeveloped region’s transport network).',
        'Interventionist policy requires significant government spending, funded by taxation or borrowing, and depends on government correctly identifying where to direct that spending - a poorly chosen infrastructure project or training scheme can waste resources without materially raising long-run supply, and government spending on this scale itself carries an opportunity cost in what else that revenue could have funded.',
      ],
      [
        'Which approach is more effective at raising the long-run rate of economic growth depends on what is actually constraining growth in the specific economy. Where private investment is being held back mainly by high taxes, excessive regulation or inflexible labour markets, market-based policies address the binding constraint directly and can work reasonably quickly. Where the binding constraint is a genuine gap the market under-provides - basic research, a national infrastructure network, foundational education - interventionist policy is likely to be more effective, since a tax cut alone does not build a railway or fund research with no immediate commercial return.',
        'In practice, most successful supply-side strategies combine both approaches rather than relying on either exclusively - infrastructure and education funded through interventionist spending, alongside a competitive tax and regulatory environment to ensure the private sector then makes full use of that improved capacity - so the more useful question is often which BALANCE of the two suits a specific economy’s constraints, rather than treating them as mutually exclusive.',
      ],
    ],
    'Neither market-based nor interventionist supply-side policy is more effective in every case: market-based policies work quickly and cheaply where private investment is being held back by poor incentives, while interventionist policies are more effective where the constraint is a genuine gap in provision - such as infrastructure, basic research or foundational education - that the market under-supplies on its own. The most effective long-run growth strategies in practice tend to combine both, using government spending to address genuine market gaps while maintaining incentives for the private sector to build on that foundation, rather than relying exclusively on either approach.',
    [
      'Definition of long-run aggregate supply and the two categories of supply-side policy',
      'Market-based: tax cuts, deregulation, reduced trade union power, reliance on private response',
      'Interventionist: direct spending on education, infrastructure, research',
      'Diagram: both approaches aim at the same rightward LRAS shift by different means',
    ],
    [
      'Market-based policy depends on the private sector actually responding to the incentive',
      'Interventionist policy depends on government correctly targeting spending and carries an opportunity cost',
      'Effectiveness depends on what is actually the binding constraint on growth in that economy',
      'Judgement: most effective strategies combine both rather than relying on either exclusively',
    ],
  ),

  /* ------------------------- Conflicts Between Objectives and the Phillips Curve */
  Q083: A(
    [['phillips', 'The short-run Phillips curve, downward-sloping, with unemployment on the horizontal axis and inflation on the vertical axis. Mark a movement along the curve from a point of higher unemployment/lower inflation to lower unemployment/higher inflation as aggregate demand rises.']],
    'The Phillips curve plots an inverse (negative) relationship between the rate of unemployment and the rate of inflation in the short run, based on the historical observation that these two macroeconomic variables have tended to move in opposite directions.',
    [
      [
        'As aggregate demand rises - for example following an interest rate cut or a rise in government spending - firms respond by producing more output and hiring more workers, so unemployment falls as the economy moves closer to full employment. With more people in work and spending, and firms facing rising demand for their products relative to their capacity, firms are able to raise prices, and workers, in a tighter labour market, are able to bargain for higher wages, which together push up the rate of inflation.',
        'Moving along the curve in the other direction, a fall in aggregate demand raises unemployment as firms cut back output and lay off workers, but this weaker demand and slacker labour market reduces the pricing and wage-bargaining power behind inflation, so the rate of inflation falls at the same time as unemployment rises - the short-run Phillips curve captures this trade-off as a single downward-sloping relationship between the two.',
      ],
      [
        'The whole curve can also shift outward, rather than the economy simply moving along a fixed curve, when inflation is driven by a supply-side shock instead of demand. A rise in the price of oil or other imported raw materials raises costs and prices at every level of unemployment, so the unemployment-inflation trade-off itself worsens: an economy can then experience higher unemployment and higher inflation together, a combination - stagflation, as in the UK in the mid-1970s - that a demand-driven movement along a single curve cannot explain.',
        'This distinction matters directly for policy. A government facing higher inflation from a movement along the curve, caused by excess demand, can bring it down by reducing demand. A government facing an outward-shifted curve caused by a supply shock cannot cure that inflation the same way without pushing unemployment up even further, since demand-side policy has no way to lower a cost that rose for reasons unrelated to the state of demand.',
      ],
    ],
    null,
    [
      'Definition of the short-run Phillips curve as an inverse relationship between unemployment and inflation',
      'Rising aggregate demand reduces unemployment and increases inflation (tighter labour market, pricing power)',
      'Falling aggregate demand raises unemployment and reduces inflation (slacker labour market)',
      'Diagram showing the downward-sloping curve and a movement along it',
      'A supply-side shock shifts the whole curve outward, producing stagflation rather than a movement along it',
    ],
    [
      'This is a SHORT-RUN relationship; the trade-off need not hold in the long run',
      'A movement along the curve (demand-driven) calls for a different policy response than an outward shift (supply-driven)',
    ],
  ),

  Q084: A(
    [['long-run-phillips', 'A vertical long-run Phillips curve at the natural rate of unemployment, with the short-run Phillips curve shifting rightward (a worse trade-off at every level of unemployment) following an adverse supply shock or a rise in inflation expectations.']],
    'The short-run Phillips curve shows unemployment and inflation moving in opposite directions as aggregate demand changes. Whether this trade-off still exists in an economy such as the UK depends on distinguishing genuine short-run movements along a stable curve from shifts of the whole curve caused by other factors.',
    [
      [
        'The 1970s provided the clearest historical evidence against a permanently stable trade-off: the UK and other advanced economies experienced "stagflation" - high unemployment AND high inflation occurring together - following the oil price shocks, which a simple downward-sloping Phillips curve could not explain, since both variables rose together rather than moving in opposite directions. This showed that a SUPPLY shock, raising costs and shifting short-run aggregate supply left, can shift the whole Phillips curve outward, worsening the trade-off at every level of unemployment rather than the economy simply moving along a fixed curve.',
        'This led Friedman and Phelps to the expectations-augmented Phillips curve, which argues that once workers and firms come to expect a certain rate of inflation, they build it into wage and price-setting behaviour, so persistently trying to hold unemployment below its "natural rate" through demand stimulus only raises inflation expectations, and therefore actual inflation, without any lasting reduction in unemployment - implying the long-run Phillips curve is vertical at the natural rate, with no permanent trade-off available at all.',
      ],
      [
        'Despite this, a short-run trade-off does still appear to operate within an economy such as the UK: episodes of loose monetary policy and rising demand have coincided with falling unemployment and rising inflation, and central banks, including the Bank of England, explicitly manage interest rates on the assumption that a short-run trade-off exists - raising rates to cool demand and reduce inflation, accepting some cost in output and employment in the process, which would make little sense if no short-run relationship existed at all.',
        'The size and stability of this short-run trade-off has itself changed over time: globalisation, more flexible labour markets and more credible, independent inflation targeting have arguably made the short-run curve flatter and more stable than in the 1970s, since firms and workers now have less scope, and less expectation, to build persistently high inflation into their behaviour.',
      ],
      [
        'The extent to which the short-run trade-off "still exists" therefore depends on the time horizon and on whether supply-side shocks are also present. In the absence of a major supply shock and with inflation expectations well anchored by a credible, independent central bank, a usable short-run trade-off between unemployment and inflation does still appear to operate, and demand management can be expected to move the economy along something like a Phillips curve in the near term.',
        'Following a major supply shock - the sharp rise in energy and import prices following Russia’s invasion of Ukraine in 2022, for example - the curve itself shifts, and unemployment and inflation can rise together exactly as in the 1970s, meaning demand management alone cannot address the inflation without a further, separate cost in unemployment, since the trade-off it is being asked to manage has become worse, not merely moved along.',
      ],
    ],
    'The short-run Phillips curve trade-off between inflation and unemployment does still exist in an economy such as the UK for genuine demand-driven fluctuations, and it continues to inform how the Bank of England sets interest rates. But the curve is not fixed: a supply shock, or a change in inflation expectations, can shift the whole trade-off, producing periods - as in the 1970s and again more recently - where inflation and unemployment rise together, which the simple downward-sloping curve alone cannot explain. The trade-off is real but conditional: it holds well for demand-driven changes with anchored expectations, and breaks down, or worsens, in the face of significant supply shocks.',
    [
      'Short-run Phillips curve as a downward-sloping trade-off along the curve',
      'Stagflation in the 1970s as evidence against a permanently stable, simple trade-off',
      'Expectations-augmented Phillips curve and the vertical long-run curve at the natural rate',
      'Central bank interest rate decisions as evidence that a short-run trade-off is still assumed to operate',
      'Diagram of the vertical long-run Phillips curve and a rightward-shifting short-run curve',
    ],
    [
      'Depends on whether a supply shock is present (shifts the curve) or not (movement along it)',
      'Depends on how well anchored inflation expectations are',
      'Globalisation and central bank credibility may have flattened and stabilised the short-run curve over time',
      'Judgement: a real but conditional trade-off, not a fixed, permanent relationship',
    ],
  ),

  /* --------------------------------------------------------- Globalisation */
  Q097: A(
    [],
    'Globalisation is the growing economic interdependence of countries worldwide, reflected in rising international trade, capital flows, and the movement of firms, people and ideas across borders. Several distinct factors have driven this process over recent decades.',
    [
      [
        'Trade liberalisation - the reduction of tariffs and other barriers to trade through the World Trade Organization and its predecessor, and the growth of regional trading blocs - has directly lowered the cost of trading across borders, making it more profitable for firms to source inputs and sell output internationally rather than only domestically.',
        'This driver depends on continued political willingness to keep barriers low, and it is not one-directional: rising protectionism in recent years - US-China tariffs, the UK’s departure from the EU single market - has raised trade barriers again in some relationships, showing that liberalisation-driven globalisation can partially reverse rather than only ever deepen.',
      ],
      [
        'Falling transport and communication costs, particularly containerisation in shipping and the growth of the internet, have made it dramatically cheaper and faster to move goods, coordinate production across countries, and communicate in real time, which has made genuinely global supply chains - where different stages of production happen in different countries - practical in a way they were not previously.',
        'This driver is more technological and structural than the policy-driven one, and so is less easily reversed by a change of government - but it is not immune to disruption either: the supply-chain shocks of the COVID-19 pandemic prompted many firms to "reshore" or diversify production closer to home, showing that even a cost advantage built on cheap transport and coordination can be reassessed once the resilience risk of a long, complex supply chain becomes visible.',
      ],
    ],
    null,
    [
      'Definition of globalisation',
      'Trade liberalisation: falling tariffs, the WTO, regional trading blocs',
      'Falling transport costs (containerisation) and communication costs (the internet)',
      'Other acceptable factors: growth of transnational corporations, financial market liberalisation',
    ],
    [
      'The trade-liberalisation driver can partially reverse under rising protectionism',
      'The transport/communication-cost driver is more structural, but resilience concerns since COVID-19 have prompted some reshoring',
    ],
  ),

  Q098: A(
    [],
    'Globalisation has increased trade, investment and the movement of ideas and technology across borders. Whether developing or developed economies have benefited more depends on which channel of globalisation is considered and how benefits are distributed within each type of economy.',
    [
      [
        'Developing economies have gained significant export markets and inflows of foreign direct investment as transnational corporations relocate labour-intensive production to countries with lower wage costs, which has been credited with rapid industrialisation and poverty reduction in economies such as China and Vietnam, alongside technology transfer as foreign investment brings more advanced production methods and management practices than were previously available domestically.',
        'This benefit is uneven even among developing economies: those with the infrastructure, institutions and stability to attract investment (much of East Asia) have gained substantially, while many economies still heavily dependent on exporting a narrow range of primary commodities have captured relatively little of this gain, remaining exposed to volatile world commodity prices rather than moving into higher-value manufacturing or services.',
      ],
      [
        'Developed economies have gained from access to cheaper imported goods, which has helped keep consumer prices low, and from the ability of their own transnational corporations to access cheaper labour and inputs abroad, raising profitability and, for shareholders and skilled workers in globally competitive sectors, real incomes.',
        'These gains have not been evenly shared within developed economies: workers in industries exposed to competition from lower-cost imports have faced job losses and stagnant wages, a pattern widely linked to the decline of manufacturing employment in parts of the UK and US, so while the developed economy gains in aggregate, the distribution of that gain within it has been highly uneven, generating some of the domestic political backlash against globalisation seen in recent years.',
      ],
      [
        'Aggregate measures such as GDP growth suggest developing economies that successfully attracted investment and expanded exports have grown faster, in percentage terms, than most developed economies over the period of most rapid globalisation, which supports the view that they have benefited more in relative terms, even starting from a much lower base.',
        'However, benefiting "more" depends on whether the comparison is of AGGREGATE national gain or of gains to specific groups within each type of economy: skilled workers and capital owners in developed economies, and successfully industrialising developing economies, have both gained substantially, while low-skilled workers in import-competing industries in developed economies, and commodity-dependent developing economies that failed to attract investment, have both lost out or gained little - the real dividing line may run through, rather than between, developed and developing economies.',
      ],
    ],
    'Globalisation has benefited successfully industrialising developing economies more than developed economies in AGGREGATE, relative terms - faster growth, larger poverty reduction, and a bigger relative gain from a lower starting point. But this masks a highly uneven distribution WITHIN both groups: not every developing economy has captured these gains, and within developed economies the benefit has been concentrated among skilled workers and capital owners while low-skilled, import-competing workers have often lost out. The most accurate judgement is that globalisation has benefited internationally mobile capital and successfully integrated economies of all kinds more than it has benefited economically immobile groups and commodity-dependent economies, rather than developing or developed economies as simple, uniform categories.',
    [
      'Developing economies: export growth, FDI inflows, technology transfer, industrialisation',
      'Uneven gains among developing economies (successful industrialisers versus commodity-dependent)',
      'Developed economies: cheaper imports, gains to globally competitive firms and skilled workers',
      'Uneven gains within developed economies (import-competing sectors losing out)',
    ],
    [
      'Aggregate/relative growth comparison versus distribution of gains within each group',
      'Depends on a country’s specific position (successfully industrialising versus commodity-dependent)',
      'Depends on which group within a developed economy is considered (skilled versus import-competing workers)',
      'Judgement: the real dividing line runs through, not between, developed and developing economies',
    ],
  ),

  /* ---------------------------------------------------------- Terms of Trade */
  Q099: A(
    [['terms-of-trade', 'An improvement in the terms of trade shown as export prices rising relative to import prices. Use the diagram alongside the Marshall-Lerner condition to show that the effect on the balance of trade (export revenue relative to import expenditure) depends on the combined price elasticity of demand for exports and imports.']],
    'The terms of trade measure the ratio of a country’s export prices to its import prices. An improvement means export prices have risen relative to import prices, so a given quantity of exports now buys more imports than before - but the effect on the balance of TRADE (the value of exports relative to imports) is a separate question that depends on elasticities.',
    [
      [
        'If demand for the country’s exports is price INELASTIC, a rise in export prices (an improvement in the terms of trade) increases total export revenue, since the percentage fall in quantity demanded is smaller than the percentage rise in price - each unit sold now earns more than the small loss in quantity costs. Combined with import prices staying relatively stable in the country’s own currency, this can improve the balance of trade even as the terms of trade improve.',
        'If demand for the country’s exports is price ELASTIC, the same rise in export prices causes a proportionately larger fall in quantity sold, reducing total export revenue despite the higher price per unit - so an improvement in the terms of trade here would actually worsen the balance of trade, since the country is now earning less overall from a smaller quantity of exports even though each unit fetches a higher price.',
      ],
      [
        'This is really only half of the full Marshall-Lerner condition, which states that the combined price elasticities of demand for exports and imports must exceed 1 for a favourable movement in relative prices to improve the balance of trade. Even where demand for exports alone is inelastic, if demand for imports is highly elastic, the improvement in the trade balance from the export side can still be undermined by a much larger swing in import volumes as domestic consumers substitute towards relatively cheaper foreign goods - both elasticities have to be assessed together, not exports in isolation.',
        'In the short run, existing contracts, established buying habits and a lack of immediately available substitutes mean both the price elasticity of demand for exports and for imports tend to be lower than in the long run, once buyers on both sides have had time to find alternatives. This is why the balance of trade can initially move in the "wrong" direction after a relative price shift - the J-curve effect - even in cases where the long-run combined elasticities do eventually satisfy the Marshall-Lerner condition.',
      ],
    ],
    null,
    [
      'Definition of the terms of trade (ratio of export prices to import prices) and what an improvement means',
      'Marshall-Lerner-style reasoning: the effect on the balance of trade depends on the price elasticity of demand for exports',
      'Inelastic export demand: rising export prices raise total export revenue',
      'Elastic export demand: rising export prices reduce total export revenue',
      'Full Marshall-Lerner condition: combined PED for exports and imports must exceed 1',
      'J-curve: elasticities are lower in the short run, so the trade balance can move the "wrong" way initially',
    ],
    [
      'The effect on the balance of trade also depends on the elasticity of demand for imports, not exports alone',
      'Real-world elasticities vary considerably by product and by time horizon (more elastic in the long run, hence the J-curve)',
    ],
  ),

  Q100: A(
    [['terms-of-trade', 'A long-run decline in a commodity-exporting economy’s terms of trade: the price of its primary commodity exports falling or stagnating relative to the price of manufactured imports, so more of the commodity must be exported over time to purchase the same quantity of imports.']],
    'Many developing economies rely heavily on exporting a narrow range of primary commodities (agricultural produce, minerals, oil) while importing manufactured goods and capital equipment. A deterioration in their terms of trade means these commodity exports buy progressively fewer imports over time.',
    [
      [
        'Commodity prices tend to be volatile and, over long periods, have often grown more slowly than the prices of manufactured goods, partly because demand for many primary commodities grows more slowly than income (a low income elasticity of demand) while manufactured goods often see rising demand and scope for branding and differentiation that primary commodities largely lack. A developing economy heavily dependent on one or two such commodities can see its terms of trade deteriorate steadily over time even while the volume of its exports is growing.',
        'A deteriorating terms of trade directly harms the current account and national income: the same volume of commodity exports buys fewer imported capital goods, machinery and technology needed for development, so the country must either export a growing volume of its primary commodity just to maintain the same level of imports, or accept a widening trade deficit and rely on borrowing or foreign investment to make up the gap.',
      ],
      [
        'This harm is not automatic or uniform: an economy that uses the revenue from its commodity exports, even at a deteriorating price, to invest in diversifying its economy - building manufacturing or service sectors less exposed to volatile commodity prices - can reduce its future vulnerability to the very terms-of-trade deterioration it is currently experiencing, converting a temporary problem into a source of longer-term structural change.',
        'The harm also depends heavily on WHICH commodity and on global demand trends specific to it: a country dependent on a commodity facing structurally rising global demand (certain minerals used in renewable energy or electronics) may see its terms of trade improve rather than deteriorate over the same period that a country dependent on a commodity in relative decline suffers, so the general Prebisch-Singer style argument about long-run commodity price decline does not apply uniformly to every developing economy or every commodity.',
      ],
      [
        'The extent of harm to economic development therefore depends on how dependent the economy is on a small number of commodities, whether the specific commodities exported face rising or falling long-run global demand, and whether the government uses commodity revenue while prices are favourable to invest in diversification rather than simply funding current consumption or debt repayment.',
        'A developing economy that diversifies away from commodity dependence while it still has strong terms of trade, or that adds value domestically (processing a raw material into a manufactured good before export, capturing more of the final price) rather than exporting the raw commodity alone, can substantially reduce its exposure to a long-run terms-of-trade deterioration, even if it cannot control the underlying world price movements themselves.',
      ],
    ],
    'A long-run deterioration in the terms of trade is likely to harm the rate of economic development of a commodity-dependent developing economy, since it means a shrinking real purchasing power for the imported capital goods and technology development requires, and it worsens the current account over time. The extent of the harm depends heavily on how dependent the economy is on the specific commodity in question, whether that commodity’s long-run demand trend is rising or falling, and, most importantly, on whether the government uses commodity revenue while it is available to diversify the economy and add value domestically rather than remaining exposed to the same vulnerability indefinitely.',
    [
      'Definition of the terms of trade and commodity dependence in many developing economies',
      'Diagram: long-run terms of trade decline for a primary commodity exporter',
      'Low income elasticity of demand for many commodities relative to manufactured goods',
      'Impact on the current account and on the real purchasing power of export revenue',
    ],
    [
      'Effect not uniform across all commodities - depends on specific global demand trends',
      'Diversification and adding value domestically can reduce long-run exposure',
      'Depends on how the government uses commodity revenue while prices are favourable',
      'Judgement: real and significant harm for a genuinely commodity-dependent economy, but not an inevitable or unmanageable one',
    ],
  ),

  /* ------------------------------------------------ Trading Blocs and the WTO */
  Q101: A(
    [],
    'A regional trading bloc is a group of countries that agree to reduce or remove trade barriers between themselves, with the degree of integration increasing through several recognised stages: a free trade area removes tariffs between members while each keeps its own external tariff; a customs union adds a common external tariff on non-members; a common market goes further still, adding free movement of capital and labour between members; and a monetary union, such as the eurozone, shares a single currency and monetary policy on top of all of this. Countries can also liberalise trade through bilateral agreements with a single partner rather than joining a bloc at all. Joining a bloc at any of these stages offers a member country several potential economic benefits.',
    [
      [
        'Joining a trading bloc gives a country’s firms preferential, often tariff-free, access to a much larger combined market than its domestic market alone, allowing firms to achieve economies of scale from selling to a wider customer base that they could not reach as easily, or as cheaply, if they faced tariffs or other barriers in each individual foreign market.',
        'Membership can also attract foreign direct investment from firms outside the bloc that want tariff-free access to the whole bloc’s market: rather than exporting into the bloc and facing its external tariff, a foreign firm may choose to build production facilities inside a member country instead, bringing capital, jobs and technology transfer to that member specifically because of its bloc membership.',
      ],
      [
        'Removing tariffs between members can also create trade that did not exist before: consumers and firms switch from a less efficient domestic producer to a more efficient producer in a partner country, now that the tariff no longer artificially protects the domestic firm from that competition. This "trade creation" raises overall economic welfare, since output shifts towards the genuinely lower-cost producer, which is exactly the efficiency gain that the theory of free trade predicts.',
        'This gain is not automatic and can be partly offset by "trade diversion": the bloc’s shared external tariff against non-members can cause a country to switch its purchases away from a more efficient producer OUTSIDE the bloc towards a less efficient producer INSIDE it, purely because the external tariff makes the outside producer artificially expensive. Whether membership raises welfare overall depends on trade creation exceeding trade diversion, not simply on joining a bloc as such.',
      ],
    ],
    null,
    [
      'Definition of a regional trading bloc, and the stages of integration: free trade area, customs union, common market, monetary union (e.g. the eurozone)',
      'Access to a larger market and the resulting economies of scale for domestic firms',
      'Attracting foreign direct investment seeking tariff-free access to the whole bloc',
      'Trade creation: switching to a more efficient partner-country producer once the internal tariff is removed',
    ],
    [
      'Benefits depend on the size and openness of the bloc’s combined market',
      'Trade diversion (switching to a less efficient producer inside the bloc because of the external tariff) can offset the gain from trade creation',
    ],
  ),

  Q102: A(
    [['tariff', 'The bloc’s common external tariff lifting the world price from Pw to Pw + T for non-member goods. This is the mechanism behind trade DIVERSION: the tariff makes an efficient outside producer artificially expensive, so buying switches to a less efficient producer inside the bloc.']],
    'The World Trade Organization exists to promote and police multilateral free trade between all its members on a non-discriminatory basis. Regional trading blocs, by contrast, deliberately offer preferential treatment to their own members while maintaining barriers against non-members, which raises a genuine tension between the two.',
    [
      [
        'Trading blocs can support the WTO’s wider goal of freer trade by achieving deeper and faster liberalisation between their own members than the slow, consensus-based multilateral negotiations of the full WTO membership have generally managed - a large bloc removing barriers among dozens of member countries at once is a significant, if partial, step towards the WTO’s own long-run objective.',
        'This "trade creation" within the bloc - production shifting from a higher-cost domestic producer to a lower-cost producer inside the bloc, now tariff-free - genuinely raises efficiency and consumer welfare for the countries and consumers involved, in exactly the direction the WTO’s own mission is meant to encourage.',
      ],
      [
        'Against this, trading blocs can also cause "trade diversion": a member country may switch its imports from a genuinely lower-cost producer OUTSIDE the bloc to a higher-cost producer INSIDE the bloc, purely because the external tariff makes the outside producer artificially more expensive by comparison. This makes the bloc’s member worse off overall (paying more for the same good) and undermines the WTO’s core principle that trade should follow genuine comparative advantage rather than an artificial, regionally-drawn preference.',
        'The proliferation of overlapping regional trading blocs, each with its own rules of origin, tariff schedules and standards, has also arguably fragmented the global trading system into competing regional blocs rather than converging towards the WTO’s single, universal set of rules, which can make future MULTILATERAL agreement harder to reach, since blocs may prefer to negotiate advantageous terms among themselves rather than concede ground in a slower, global negotiation that benefits non-members equally.',
      ],
      [
        'The extent of the undermining depends on whether trade creation or trade diversion dominates in a specific bloc, and on whether the bloc is used as a stepping stone towards, or a substitute for, further multilateral liberalisation. A bloc that lowers its EXTERNAL tariff over time even as it liberalises internally, and that aligns its internal standards with wider international norms, complements the WTO’s mission rather than undermining it - the WTO’s own rules (GATT Article XXIV) permit customs unions and free trade areas only on the condition that they do not raise barriers against non-members overall, which is precisely the outward-looking behaviour the EU has shown in negotiating its own external free trade agreements with countries such as Japan and Canada alongside its internal single market.',
        'A bloc that raises or maintains high external barriers specifically to protect its own producers from genuinely more efficient outside competition, and that negotiates its own separate trade deals in preference to supporting multilateral rounds, more directly undermines the non-discriminatory, universal principle the WTO exists to promote, since it deliberately privileges an accident of regional membership over genuine comparative advantage.',
      ],
    ],
    'The growth of regional trading blocs undermines the WTO’s role to the extent that trade diversion outweighs trade creation, and that blocs substitute for, rather than complement, further multilateral liberalisation. Where a bloc is outward-looking - lowering external tariffs over time and aligning with wider international standards - it can act as a genuine stepping stone towards freer global trade, supporting the WTO’s mission. Where a bloc is used mainly to protect its own producers behind a high external tariff and to avoid the slower compromises of multilateral negotiation, it more directly undermines the non-discriminatory, universal free trade the WTO was created to promote.',
    [
      'Role of the WTO: multilateral, non-discriminatory free trade',
      'Trading blocs: preferential treatment for members, barriers against non-members',
      'Trade creation (efficiency gain) versus trade diversion (efficiency loss) within a bloc',
      'Fragmentation of global trade rules across competing, overlapping blocs',
    ],
    [
      'Depends on whether trade creation or trade diversion dominates in the specific bloc',
      'Depends on whether the bloc is outward-looking (lowering external tariffs) or protectionist',
      'Depends on whether the bloc substitutes for, or complements, multilateral negotiation',
      'Judgement: undermining is conditional on the specific bloc’s external orientation, not automatic',
    ],
  ),

  /* -------------------------------------------- The Balance of Payments (4.1) */
  Q103: A(
    [],
    'A current account deficit means a country is spending more on imports, income and transfers abroad than it earns from them. A government concerned about a large, persistent deficit has both expenditure-switching and expenditure-reducing policies available to reduce it.',
    [
      [
        'An expenditure-switching policy aims to make domestic goods relatively cheaper than imports, encouraging both domestic and foreign consumers to switch their spending towards them - allowing the exchange rate to depreciate (or actively devaluing it under a managed system) makes exports cheaper in foreign currency and imports more expensive in domestic currency, which should, subject to the Marshall-Lerner condition being met, improve the trade balance over time.',
        'A second option is protectionism - tariffs or quotas on imports - which directly reduces import volumes by raising their price or physically restricting the quantity that can enter the country, though this expenditure-switching approach risks retaliation from trading partners and conflicts with a government’s wider free trade commitments.',
      ],
      [
        'An expenditure-reducing policy instead aims to lower overall aggregate demand in the economy - tighter fiscal policy (higher taxes, lower government spending) or tighter monetary policy (higher interest rates) - which reduces spending on all goods, including imports, improving the current account as a side effect of the wider demand contraction.',
        'This approach directly conflicts with the objectives of economic growth and low unemployment, since it deliberately reduces demand throughout the economy rather than specifically targeting import spending, so a government must weigh the improvement in the current account against the cost to growth and jobs elsewhere in the economy.',
      ],
    ],
    null,
    [
      'Definition of expenditure-switching versus expenditure-reducing policy',
      'Depreciation/devaluation to switch expenditure towards domestic goods (Marshall-Lerner condition)',
      'Protectionism (tariffs, quotas) as a second expenditure-switching option',
      'Expenditure-reducing policy (tighter fiscal or monetary policy) lowering demand for imports as a side effect',
    ],
    [
      'Expenditure-switching depends on the Marshall-Lerner condition being satisfied',
      'Expenditure-reducing policy conflicts with growth and employment objectives',
    ],
  ),

  Q104: A(
    [['j-curve', 'The J-curve: the current account balance initially worsening immediately after a depreciation, before improving beyond its starting point once the volume effects of cheaper exports and dearer imports come through, subject to the Marshall-Lerner condition being satisfied.']],
    'A depreciation of a country’s currency makes its exports cheaper in foreign currency and its imports more expensive in domestic currency. Whether this is the most effective way of correcting a current account deficit depends on how demand for exports and imports actually responds, and over what time horizon.',
    [
      [
        'For a depreciation to improve the current account, the Marshall-Lerner condition must be satisfied: the sum of the price elasticities of demand for exports and imports must exceed one. Where this holds, the combined percentage rise in export volumes and fall in import volumes outweighs the unfavourable effect of exporters now earning less per unit in foreign currency terms, so the trade balance genuinely improves as the exchange rate falls.',
        'In the short run, however, demand for both exports and imports tends to be relatively price inelastic, because existing contracts, established supply chains and consumer habits take time to adjust, so the immediate effect of a depreciation can actually be a WORSENING of the trade balance - the same, largely unchanged volumes of exports and imports are now traded at less favourable prices - before demand has had time to respond. This initial dip followed by a later improvement, once volumes do adjust, produces the well-documented J-curve pattern in the current account following a depreciation.',
      ],
      [
        'Because depreciation works only with a lag, and only if elasticities eventually become large enough to satisfy the Marshall-Lerner condition, it is not a fast or certain fix, and a government facing a large, urgent deficit may not be able to rely on it alone within the timeframe available, especially if the currency’s fall also raises the domestic price of imported raw materials and components used throughout the economy, feeding into cost-push inflation that a government may be reluctant to accept.',
        'A depreciation is also not something a government can always simply choose: under a floating exchange rate it results from market forces rather than policy choice directly, and attempting to force one down through central bank intervention can be difficult to sustain and can prompt destabilising speculation about the currency’s future direction.',
      ],
      [
        'Depreciation is therefore most effective as part of a combination of policies rather than as a stand-alone, guaranteed fix: alongside supply-side policies that improve underlying competitiveness (so that even without currency movements exports become more attractive) and with fiscal or monetary restraint if the deficit also reflects excess domestic demand, a depreciation can meaningfully support correction once the J-curve’s initial dip has passed.',
        'For an economy where import and export demand are genuinely price elastic in the medium term, and where the deficit is primarily a competitiveness problem rather than one driven by strong domestic demand pulling in imports, depreciation is likely to be the single most useful tool available; where demand is persistently inelastic or the deficit reflects strong domestic demand, expenditure-reducing or supply-side policies are likely to do more of the necessary work.',
      ],
    ],
    'A depreciation can be an effective way of correcting a current account deficit, but only where the Marshall-Lerner condition is satisfied and only after the initial J-curve deterioration has passed, which makes it neither fast nor certain as a stand-alone policy. It is most effective where export and import demand are genuinely price elastic in the medium term and the deficit reflects a competitiveness problem rather than excess domestic demand; where this is not the case, depreciation alone is unlikely to be the most effective correction, and supply-side or expenditure-reducing policies are likely to do more of the work.',
    [
      'Marshall-Lerner condition: sum of export and import demand elasticities must exceed one',
      'J-curve: short-run deterioration before longer-run improvement, driven by short-run inelastic demand',
      'Diagram of the J-curve pattern following a depreciation',
      'Depreciation can also raise import costs and feed into domestic inflation',
    ],
    [
      'Depends on whether the Marshall-Lerner condition is genuinely satisfied for this economy',
      'Depends on the time horizon a government is able and willing to wait for the J-curve to turn',
      'Depends on whether the deficit is a competitiveness problem or driven by strong domestic demand',
      'Judgement: effective as part of a combined strategy, not reliably as a fast, stand-alone fix',
    ],
  ),

  /* -------------------------------------------------------------- Exchange Rates */
  Q105: A(
    [['exchange-rate', 'The market for pound sterling: a rightward shift in the demand for sterling (driven by capital inflows seeking a higher UK interest rate) raising the equilibrium exchange rate - sterling appreciates against other currencies.']],
    'The exchange rate is the price of one currency in terms of another, and under a floating exchange rate system it is determined by the demand for and supply of that currency in the foreign exchange market.',
    [
      [
        'If the Bank of England raises UK interest rates relative to those in the rest of the world, holding funds in sterling-denominated assets (UK government bonds, bank deposits) becomes relatively more attractive to international investors seeking the highest available return, since they can now earn a higher yield in the UK than in other major economies.',
        'This attracts an inflow of short-term financial capital ("hot money") into the UK seeking to take advantage of the higher rate, which requires investors to buy sterling first in order to hold UK assets, increasing the demand for sterling on the foreign exchange market. With demand for sterling rising relative to its supply, the equilibrium exchange rate rises - the pound appreciates against other currencies.',
      ],
      [
        'A second, distinct channel is relative inflation. If UK inflation runs persistently lower than that of its trading partners, UK goods and services become relatively cheaper than foreign alternatives over time, raising foreign demand for UK exports; overseas buyers must purchase sterling to pay for those exports, increasing demand for the currency on the foreign exchange market and causing it to appreciate through the trade channel rather than through capital flows.',
        'This channel works far more slowly than the interest-rate channel: a persistent inflation differential takes months or years to meaningfully shift trade volumes and relative competitiveness, whereas capital can flow into sterling-denominated assets in response to an interest rate change almost immediately. In the short run, financial flows tend to dominate exchange rate movements, while relative inflation matters more for the currency’s medium to long-run trend.',
      ],
    ],
    null,
    [
      'Definition of a floating exchange rate, determined by demand and supply of the currency',
      'Higher UK interest rates relative to the rest of the world attract capital inflows seeking higher returns',
      'Investors must buy sterling to hold UK assets, increasing demand for the currency',
      'Diagram showing demand for sterling shifting right and the exchange rate appreciating',
      'Relative inflation (purchasing power parity) as a second, slower-acting channel via export competitiveness',
    ],
    [
      'The size of the effect depends on how large the interest rate differential is relative to other economies',
      'The interest-rate channel dominates in the short run; the inflation channel matters more for the long-run trend',
    ],
  ),

  Q106: A(
    [['fixed-exchange-rate', 'A country maintaining a fixed exchange rate above the rate that would prevail under free-floating market forces, requiring the central bank to sell foreign currency reserves and buy its own currency to defend the peg, or a floating rate settling wherever demand and supply for the currency clear the market without central bank intervention.']],
    'Under a fixed exchange rate, a government or central bank commits to maintaining the value of its currency at, or very close to, a specific announced rate against another currency or basket of currencies, intervening in the foreign exchange market as needed to defend it. A freely floating exchange rate is instead left entirely to market forces of demand and supply.',
    [
      [
        'A fixed exchange rate provides certainty for firms engaged in international trade and investment: an exporter or importer signing a long-term contract knows exactly what the exchange rate will be when payment is due, removing exchange rate risk entirely and encouraging trade and foreign direct investment that firms might otherwise hedge against or avoid under uncertainty. This certainty can also anchor inflation expectations directly, since importing a stable exchange rate from a low-inflation partner currency imports some of that credibility too.',
        'Maintaining the fixed rate requires the central bank to hold and actively use substantial foreign currency reserves to buy or sell its own currency whenever market pressure would otherwise move the rate away from the announced level, and defending a rate that markets increasingly believe is unsustainable can trigger a speculative attack, as investors sell the currency anticipating a forced devaluation, which can exhaust reserves rapidly and force a disorderly, crisis-driven realignment rather than the smooth stability the system promised. The UK’s own experience in the European Exchange Rate Mechanism ended exactly this way on "Black Wednesday" in September 1992, when the Bank of England spent billions of pounds of reserves and raised interest rates sharply in a single day trying to defend sterling’s pegged rate against speculative selling, before being forced to exit the mechanism entirely.',
      ],
      [
        'A freely floating exchange rate, by contrast, adjusts automatically to absorb external economic shocks: if a country experiences a negative shock to its export competitiveness, the currency can depreciate, cushioning the shock by making exports cheaper and imports dearer without the government needing to take any deliberate policy action, and there is no need to hold large reserves purely to defend a specific rate.',
        'This same automatic adjustment removes the exchange rate certainty a fixed rate provides, exposing firms trading internationally to currency risk that they must actively manage or hedge (at a cost), and a floating rate can also be highly volatile in response to short-term speculative capital flows or shifting market sentiment, rather than moving only in response to genuine underlying economic fundamentals.',
      ],
      [
        'Which system is more beneficial depends heavily on the specific economy’s circumstances. For a small, open economy heavily reliant on trade with one dominant partner, and lacking a strong track record of low, credible inflation of its own, a fixed rate pegged to that partner’s currency can import stability and credibility it could not easily establish alone, provided it has the reserves and fiscal discipline to defend the peg through genuine shocks rather than only in calm periods.',
        'For a large, diversified economy such as the UK, with deep and liquid financial markets and an independent, credible central bank already capable of anchoring its own inflation expectations, a floating rate’s ability to absorb shocks automatically, without the risk of a costly and destabilising speculative attack on an unsustainable peg, is generally judged the more beneficial and more resilient system, which is why the UK does not operate a fixed exchange rate today.',
      ],
    ],
    'A fixed exchange rate offers valuable certainty for trade and investment and can import credibility for a country without an established record of low inflation, but it requires substantial reserves to defend and risks a disorderly speculative crisis if markets doubt its sustainability. A freely floating exchange rate sacrifices that certainty but adjusts automatically to absorb economic shocks without the same crisis risk. Which is more beneficial depends on the specific economy: a fixed rate can suit a small, trade-dependent economy borrowing credibility from a stable partner, while a large, diversified economy with its own credible monetary institutions, such as the UK, is generally better served by a floating rate’s automatic, crisis-resistant adjustment.',
    [
      'Definition of fixed and floating exchange rate systems',
      'Fixed: certainty for trade/investment, imported credibility, but requires reserves and risks speculative attack',
      'Floating: automatic adjustment to shocks, no reserve requirement, but exchange rate risk and volatility',
      'Diagram contrasting central bank intervention to defend a fixed rate with a market-determined floating rate',
    ],
    [
      'Depends on the size, openness and trade concentration of the specific economy',
      'Depends on whether the country already has credible, independent monetary institutions of its own',
      'Fixed rates risk a costly, disorderly correction if a peg becomes unsustainable',
      'Judgement: fixed rates suit small, trade-dependent economies; floating rates suit large, diversified ones with credible institutions',
    ],
  ),

  /* ------------------------------------------------ International Competitiveness */
  Q107: A(
    [],
    'International competitiveness measures a country’s ability to sell its goods and services in world markets relative to other countries. The exchange rate is only one influence on this; several other factors matter just as much.',
    [
      [
        'Relative productivity is a central factor: if UK workers produce more output per hour worked than workers in a competitor country, unit labour costs can stay lower even at similar wage rates, making UK goods more price-competitive without any change in the exchange rate at all. A sustained productivity gap, in either direction, changes competitiveness independently of currency movements.',
        'Relative inflation rates matter just as much: if UK inflation runs persistently higher than that of trading partners, domestic costs and prices rise faster than those abroad, eroding price competitiveness over time even if the exchange rate itself does not move, since foreign buyers face a steadily rising price for UK goods relative to alternatives from lower-inflation countries.',
      ],
    ],
    null,
    [
      'Definition of international competitiveness',
      'Relative productivity affecting unit labour costs independently of the exchange rate',
      'Relative inflation rates eroding price competitiveness over time',
      'Other acceptable factors: non-price competitiveness (quality, design, reliability, branding), infrastructure',
    ],
    [
      'These factors interact with, but are distinct from, the exchange rate',
    ],
  ),

  Q108: A(
    [],
    'A country’s international competitiveness can decline for several reasons, including a loss of price competitiveness through relative costs and prices, and a loss of non-price competitiveness through quality, reliability or innovation falling behind competitors.',
    [
      [
        'A fall in labour productivity directly raises unit labour costs if wages do not fall correspondingly: producing the same output now requires more labour hours (or the same hours produce less output), so the labour cost embedded in each unit of output rises, making domestically produced goods more expensive relative to competitors whose productivity has not fallen, quite apart from any change in wage rates, the exchange rate, or the general price level.',
        'Because labour costs are a large share of total costs in most industries, even a moderate and sustained productivity slowdown can compound over several years into a significant competitiveness gap relative to countries whose productivity keeps rising, which is precisely the concern that has been raised about the UK’s own productivity performance since the 2008 financial crisis.',
      ],
      [
        'Against this, several other factors can be at least as significant. Persistently higher domestic inflation than trading partners raises costs and prices across the whole economy, not only where productivity has fallen, and can erode competitiveness even where productivity is performing reasonably well by historical standards.',
        'Non-price factors - product quality, design, reliability, delivery times, after-sales service and branding - can be decisive in many markets regardless of relative costs: a country can lose competitiveness in a sector even with strong productivity and stable costs if its firms fail to innovate or to match the quality and design competitors offer, which is a factor labour productivity alone does not capture.',
        'The exchange rate itself can also dominate in the short run: a sharp appreciation can make even a highly productive, low-inflation economy’s exports suddenly uncompetitive in price terms, and this effect can happen far more quickly than a productivity trend, which typically changes only gradually over years.',
      ],
      [
        'Whether a productivity fall is the MOST significant cause therefore depends on the time horizon and the specific industry. Over the long run, sustained productivity growth (or its absence) is widely regarded by economists as the single most important determinant of a country’s competitiveness and living standards, since it compounds over many years and underlies a country’s ability to compete on cost without needing to accept falling real wages.',
        'In the short run, and in industries where products are highly differentiated rather than commodity-like, non-price factors or sudden exchange rate movements can dominate the immediate loss of competitiveness far more visibly than a productivity trend that moves only gradually, so which cause is "most significant" depends heavily on whether the question concerns a short-run competitiveness shock or a long-run structural decline.',
      ],
    ],
    'A fall in labour productivity is a genuine and, over the long run, often the most fundamental cause of declining international competitiveness, because it raises unit labour costs directly and compounds steadily over time. But it is not automatically the MOST significant cause in every case: relative inflation, non-price factors such as quality and innovation, and short-run exchange rate movements can each dominate a specific episode of declining competitiveness, particularly over shorter time horizons or in highly differentiated industries. Productivity is the most defensible answer for explaining long-run, structural competitiveness decline; other factors often explain shorter-run or sector-specific episodes better.',
    [
      'Definition of international competitiveness and unit labour costs',
      'Fall in productivity raises unit labour costs, compounding over time',
      'Relative inflation as an alternative, cost-based cause',
      'Non-price factors (quality, design, innovation) as a separate cause independent of cost',
      'Exchange rate movements as a fast-acting, short-run cause',
    ],
    [
      'Depends on the time horizon (long-run structural decline versus a short-run shock)',
      'Depends on the specific industry (commodity-like versus highly differentiated products)',
      'Productivity is widely regarded as the most fundamental LONG-RUN determinant',
      'Judgement: most significant for long-run decline, but not necessarily for every short-run episode',
    ],
  ),

  /* ------------------------------------------------------------ The National Debt */
  Q109: A(
    [],
    'A government’s budget deficit and its national debt are related but distinct concepts, describing a FLOW and a STOCK respectively.',
    [
      [
        'The budget deficit is a FLOW: the amount by which government spending exceeds government revenue (mainly tax receipts) within a single year. Each year the government runs a deficit, it must borrow to cover the shortfall between what it spends and what it raises in that year alone.',
        'The national debt is a STOCK: the total accumulated amount the government owes at a given point in time, built up from the sum of all past budget deficits (borrowing) minus any surpluses (when revenue exceeded spending and debt was repaid), together with accrued interest. Running a deficit in any given year ADDS to the national debt; only running a surplus can reduce it.',
      ],
      [
        'Because the national debt is normally reported and compared as a percentage of GDP rather than in absolute currency terms, its size is best understood relative to the economy’s capacity to service it, not as a stand-alone figure. A country with a large nominal debt but a larger, faster-growing GDP can have a manageable, or even falling, debt-to-GDP ratio, while a country with a much smaller nominal debt but a weak or shrinking GDP can find that same debt increasingly unmanageable.',
        'This is why a government can genuinely reduce its debt-to-GDP ratio without ever running an actual budget surplus, provided nominal GDP (real growth plus inflation) grows faster than the nominal amount of new borrowing added each year - a different, and for many governments more realistic, route to a falling debt burden than eliminating the deficit outright.',
      ],
    ],
    null,
    [
      'Definition of the budget deficit as a flow (annual shortfall between spending and revenue)',
      'Definition of the national debt as a stock (the accumulated total owed at a point in time)',
      'Explanation that a deficit in any year adds to the debt; only a surplus reduces it',
      'The debt-to-GDP ratio, not the nominal debt, is the meaningful measure of how manageable the debt is',
    ],
    [
      'A government can still be running a (smaller) deficit while the debt-to-GDP ratio falls, if GDP grows faster than the debt',
      'Comparing nominal debt alone, without normalising for GDP, is misleading across time or between countries',
    ],
  ),

  Q110: A(
    [],
    'The national debt is the total accumulated amount a government owes, built up from the sum of past budget deficits. Whether a rising national debt is a serious problem depends on what is driving the rise, how it compares with the size of the economy, and who holds the debt.',
    [
      [
        'A rising national debt increases the government’s annual interest payments, which are themselves a growing claim on future tax revenue - money spent servicing past borrowing is money not available for public services or further investment, and if interest rates rise or the debt keeps growing faster than the economy, this debt-servicing burden can become an increasingly binding constraint on a government’s other spending choices.',
        'A very large and rapidly rising debt can also raise concern among lenders about a government’s ability or willingness to keep servicing it, potentially requiring the government to offer a higher interest rate to keep attracting buyers for its debt, which itself worsens the very interest burden causing the initial concern - a dynamic that has driven genuine debt crises in some economies.',
      ],
      [
        'Whether this is a serious problem depends critically on the debt-to-GDP ratio, not the absolute size of the debt: a debt that is rising in absolute terms but falling as a share of a growing economy is becoming progressively more manageable, since the economy’s capacity to service and eventually repay it is growing faster than the debt itself, whereas a debt rising faster than GDP is genuinely becoming a larger relative burden over time.',
        'It also matters what the borrowing financed: debt taken on to fund productive investment - infrastructure, education, research - that raises the economy’s future growth potential can, in effect, partly pay for itself through a larger future tax base, unlike debt used purely to fund current spending with no lasting effect on the economy’s productive capacity.',
      ],
      [
        'Who holds the debt matters as well: debt owed mostly to domestic residents and institutions (pension funds, domestic banks) circulates interest payments back within the domestic economy and carries less risk of a sudden, destabilising withdrawal of finance than debt owed largely to foreign creditors, who can more easily reduce their holdings if confidence in the country weakens, and a country that borrows in its own currency (as the UK does) also cannot be forced into a foreign-currency default, which further reduces the risk relative to a country borrowing heavily in a foreign currency.',
        'The extent to which a rising national debt is "always" a serious problem is therefore highly conditional: for a large, developed economy borrowing in its own currency, with debt used partly for productive investment, held substantially by domestic residents, and growing more slowly than GDP over time, a rising debt is manageable and not automatically a crisis. For an economy where the debt-to-GDP ratio is rising persistently, financed increasingly by foreign creditors or in foreign currency, and used mainly to fund current spending rather than investment, the risk of a genuine debt problem is considerably higher.',
      ],
    ],
    'A rising national debt is not automatically or always a serious problem: what matters is the debt-to-GDP ratio and its trend, what the borrowing financed, and who holds the debt and in what currency. A developed economy such as the UK, borrowing in its own currency, with debt held substantially domestically and rising no faster than GDP, can sustain a large and even growing national debt without crisis. Where the debt-to-GDP ratio rises persistently, financing relies increasingly on foreign or foreign-currency creditors, and borrowing funds current spending rather than investment, a rising national debt does become a genuine and serious concern.',
    [
      'Definition of the national debt and the growing interest burden of servicing it',
      'The debt-to-GDP ratio, not the absolute level of debt, as the key measure of sustainability',
      'Debt financing productive investment versus current spending',
      'Who holds the debt (domestic versus foreign) and the currency it is denominated in',
    ],
    [
      'Depends on whether the debt-to-GDP ratio is rising or falling over time',
      'Depends on what the borrowing was used to fund',
      'Depends on who holds the debt and in what currency it is denominated',
      'Judgement: not automatically serious for a developed economy with these conditions, more serious without them',
    ],
  ),

  /* ---------------------------------------- Macroeconomic Policies in a Global Context */
  Q111: A(
    [['monetary-transmission', 'The transmission of a recession from one major economy to others: a fall in Country A’s aggregate demand reducing its import demand, which appears as a fall in Country B’s export demand (an inward AD shift for B), alongside a parallel financial transmission channel through falling asset prices and tighter credit conditions.']],
    'Because economies are linked through trade, financial flows and confidence, a recession originating in one major economy does not necessarily stay contained within its own borders - it can be transmitted to other economies through several distinct channels.',
    [
      [
        'The trade channel operates because a recession reduces a country’s national income, and lower income reduces its demand for all goods, including imports from other countries. For trading partners that rely heavily on exporting to the economy in recession, this shows up directly as a fall in their own export demand - a leftward shift in their aggregate demand - transmitting the downturn abroad even though the trading partner’s own domestic conditions may not have changed at all.',
        'How much this matters depends on how open and how large the trading relationship actually is: a relatively closed economy with limited trade exposure to the country in recession experiences much less transmission through this channel than a small, very open economy for which that country is a dominant export market.',
      ],
      [
        'The financial channel operates through banking and investment links: a recession in a major economy typically depresses asset prices (shares, property) and can weaken banks exposed to loans or investments there, and if those same banks or investors also lend to or invest in other countries, they may tighten credit conditions internationally as they seek to shore up their own balance sheets, transmitting a credit squeeze - and with it, weaker investment and spending - to economies that had no direct trade exposure to the original recession at all.',
        'This channel can transmit a downturn even to economies with little direct trade exposure to the country in recession, since global financial institutions are interconnected across borders in ways that do not track trade patterns closely - part of why the 2008 financial crisis, originating in the US mortgage market, spread so quickly to economies with only modest trade links to the US, and why a pure confidence effect (investors and firms turning cautious everywhere at once) can transmit a downturn even faster than either channel alone.',
      ],
    ],
    null,
    [
      'Definition of economic interdependence between economies',
      'Trade channel: falling income in the originating economy reduces demand for its trading partners’ exports',
      'Financial channel: falling asset prices and tighter credit conditions transmitted through banks/investors',
      'Diagram showing the fall in one economy’s AD transmitted as a fall in a trading partner’s export demand',
      'Confidence channel: caution spreading across investors and firms internationally, faster than trade or financial links alone',
    ],
    [
      'The size of trade-channel transmission depends on how large and how open the trading relationship is',
      'The financial channel can transmit a downturn even without direct trade exposure, as in the 2008 crisis',
    ],
  ),

  Q112: A(
    [],
    'Because economies are linked through trade and financial flows, an external shock in one economy can transmit to others, and the policies one government adopts can have effects - positive or negative - beyond its own borders. Some problems are unavoidably international: a transnational corporation can shift declared profits between jurisdictions through transfer pricing, charging its own subsidiaries artificial prices so that profit appears where tax is lowest, which no single government can regulate alone. This raises the question of whether managing the global economy successfully requires countries to cooperate rather than act alone.',
    [
      [
        'Without cooperation, a country facing a domestic recession might be tempted to pursue policies that shift the burden onto trading partners - deliberately weakening its currency to boost exports at their expense ("competitive devaluation"), or raising tariffs to protect domestic industry - and if every country pursues such policies simultaneously in response to a shared global downturn, the combined effect can be a contraction in world trade that leaves every country worse off than a coordinated response would have, a dynamic widely blamed for deepening the Great Depression of the 1930s.',
        'International cooperation, through institutions such as the IMF, the G20 and the WTO, can prevent this by discouraging competitive devaluation and protectionism, coordinating fiscal or monetary stimulus across major economies simultaneously (each economy’s stimulus then supporting demand for its trading partners’ exports too, amplifying the effect), and providing emergency financing to countries facing a currency or balance of payments crisis before it spreads to others through financial contagion.',
      ],
      [
        'Against this, a government retains the ability to manage its own economy effectively through purely domestic policy in many circumstances: monetary policy set by an independent, credible central bank targeting domestic inflation, and fiscal policy responding to a purely domestic shock, do not necessarily require international coordination to work as intended, and international cooperation can be slow to negotiate and constrained by the differing (and sometimes conflicting) priorities of the countries involved.',
        'Cooperation also has real costs and limits: an international agreement may require a country to accept policies that do not perfectly suit its own specific circumstances in exchange for the collective benefit, and enforcement of international agreements is inherently weaker than domestic law, so cooperation can break down exactly when it is needed most, if individual countries judge that acting unilaterally in their own short-run interest outweighs the long-run benefit of the agreement.',
      ],
      [
        'Whether cooperation is "necessary" therefore depends on the nature of the shock. For a shock genuinely confined to one economy, with limited trade and financial exposure elsewhere, domestic policy acting alone can manage it adequately, and formal international cooperation may add cost and delay without much additional benefit.',
        'For a shock that is genuinely global or that risks a beggar-thy-neighbour spiral if every country responds unilaterally - a global recession, a global financial crisis, climate change as a global externality - the historical evidence of the 1930s and the more coordinated international response to the 2008 financial crisis both suggest cooperation meaningfully changes the outcome, preventing the kind of mutually destructive unilateral responses that a purely domestic approach, however well designed for that country alone, cannot prevent by itself.',
      ],
    ],
    'International cooperation is not necessary for every economic shock, since many purely domestic disturbances can be managed adequately by a country’s own credible monetary and fiscal institutions acting alone. But for shocks that are genuinely global, or that create an incentive for individual countries to shift the burden onto others through competitive devaluation or protectionism, cooperation through institutions such as the IMF, G20 and WTO meaningfully improves the outcome by preventing a mutually destructive, uncoordinated response - the 1930s and 2008 provide the clearest contrasting evidence for how much this can matter. Cooperation is necessary in proportion to how global and how prone to a beggar-thy-neighbour dynamic the specific shock actually is, not as an unconditional requirement for managing the global economy at all times.',
    [
      'Economic interdependence and the risk of a shock transmitting between economies',
      'Beggar-thy-neighbour risk: competitive devaluation and protectionism worsening a shared downturn',
      'Role of international institutions (IMF, G20, WTO) in coordinating policy and providing emergency financing',
      'Domestic policy (independent central bank, fiscal policy) can manage many purely domestic shocks alone',
    ],
    [
      'Depends on whether the shock is genuinely global or largely confined to one economy',
      'Cooperation has real costs, delays and enforcement limits of its own',
      'Historical contrast: uncoordinated response in the 1930s versus more coordinated response in 2008',
      'Judgement: necessary in proportion to how global and how prone to unilateral, mutually destructive responses the shock is',
    ],
  ),

  /* --------------------------------------------- Measures of Development */
  Q117: A(
    [],
    'The Human Development Index (HDI) is a composite measure of economic development, combining income (GNI per capita), education (mean and expected years of schooling) and health (life expectancy at birth) into a single score between 0 and 1, specifically to capture more of development than income alone can.',
    [
      [
        'The HDI is a national average, so it says nothing about how income, education and health are actually distributed within a country: two countries can post an identical HDI score while one has those gains spread broadly across the population and the other concentrates them in a small, wealthy minority, with most people living far below the national average on all three dimensions.',
        'The United Nations addresses this specifically with the Inequality-adjusted HDI (IHDI), which discounts each dimension by the degree of inequality within it, but this adjusted figure is reported and used far less often than the plain, unadjusted HDI headline score, so the limitation persists in most everyday comparisons even though a technical fix for it already exists.',
      ],
      [
        'The HDI leaves out dimensions of development that plainly matter but cannot easily be reduced to its three chosen indicators: political freedom and human rights, environmental sustainability, gender equality, and subjective wellbeing or happiness are all absent from the calculation entirely, so two countries with the same HDI score could differ enormously in how free, equal or environmentally sustainable they actually are.',
        'This is a reason to use the HDI alongside complementary indices - such as the Gender Development Index or measures of environmental performance - rather than a reason to reject it outright, since even the United Nations Development Programme, which publishes the HDI, has always presented it as one part of a wider picture of development rather than a complete, stand-alone measure.',
      ],
    ],
    null,
    [
      'Definition of the HDI and its three dimensions: income, education, health',
      'Limitation: a national average that masks inequality in its distribution within a country',
      'The Inequality-adjusted HDI (IHDI) as a technical fix, though rarely the headline figure reported',
      'Limitation: excludes political freedom, environmental sustainability, gender equality and subjective wellbeing entirely',
    ],
    [
      'The IHDI corrects the distributional limitation, but is reported far less often than the plain HDI',
      'Complementary indices exist precisely because the UNDP itself treats the HDI as part of a wider picture, not a complete measure on its own',
    ],
  ),

  Q118: A(
    [],
    'The Human Development Index (HDI) was designed specifically to correct a well-known limitation of using real GDP per capita alone: that a rising income does not automatically mean rising health or education. Whether it is a genuinely better measure of development depends on weighing this advantage against the limitations the HDI carries of its own.',
    [
      [
        'The HDI’s central advantage is that it captures dimensions of development that GDP per capita misses entirely: two countries can have very similar income per head while differing sharply in life expectancy and years of schooling, and only the HDI, by explicitly including health and education alongside income, would correctly show the second country as less developed despite its comparable GDP figure.',
        'This advantage depends on the quality and comparability of the underlying health and education data feeding into the HDI, which can be measured less reliably than GDP itself in countries with weaker statistical systems, so part of the theoretical improvement the HDI offers can be undermined in practice by the data it actually has available to work with.',
      ],
      [
        'The HDI still shares one of GDP per capita’s central weaknesses: both are national averages that can mask severe inequality in how income, education or healthcare are actually distributed within a country, so simply switching from GDP per capita to the plain HDI does not by itself solve the distributional blind spot the two measures share.',
        'Where the Inequality-adjusted HDI (IHDI) is used instead of the plain headline figure, this specific weakness is corrected, since the IHDI explicitly discounts the score by the degree of inequality across all three dimensions - so the HDI’s advantage over GDP per capita on distribution is real only when the adjusted version is actually the one being used, which is not the common case.',
      ],
      [
        'The HDI is also a deliberately narrow composite - three dimensions chosen for international comparability and data availability - and excludes political freedom, environmental sustainability, gender equality and subjective wellbeing entirely, so it is not a complete measure of development in the broadest sense either, only an improvement on income alone specifically.',
        'Whether the HDI is "better" therefore depends on what the comparison is actually for: for tracking material output and living standards narrowly, GDP per capita remains simpler, more frequently updated and more widely comparable across countries; for judging development in the broader sense the HDI was built for, it is unambiguously the better measure, precisely because it corrects GDP’s specific, well-documented blind spots on health and education, even though it introduces measurement and inequality-masking limitations of its own.',
      ],
    ],
    'The HDI is a better measure of economic development than real GDP per capita specifically because it captures health and education outcomes that income alone misses entirely, which is exactly the gap it was designed to close. It is not a complete or perfect substitute: it still masks within-country inequality unless the adjusted (IHDI) version is used, its education and health data can be less reliable than GDP data in developing countries, and it excludes other dimensions of development - freedom, environment, gender equality - altogether. The extent to which it is "better" depends on the purpose: for a rounded picture of development it clearly improves on GDP per capita alone, but for many purposes the two measures are best used together rather than one simply replacing the other.',
    [
      'HDI’s advantage: captures health and education outcomes that GDP per capita alone misses',
      'Reliability of the underlying health/education data can be weaker than GDP data, especially in developing economies',
      'Shared weakness: both are national averages that mask within-country inequality',
      'The Inequality-adjusted HDI (IHDI) corrects the distributional weakness, but is not the commonly-reported headline figure',
      'HDI still excludes political freedom, environmental sustainability, gender equality and subjective wellbeing',
    ],
    [
      'Depends on the reliability of the health/education data available for the country being measured',
      'The distributional advantage over GDP per capita depends on whether the adjusted (IHDI) figure is actually used',
      'Depends on the purpose of the comparison: narrow income tracking versus a broader picture of development',
      'Judgement: better for a rounded view of development; the two measures are often best used together',
    ],
  ),

  /* ----------------------------------------- Short-Run Aggregate Supply */
  Q125: A(
    [['cost-push', 'AS shifting up and left from AS₁ to AS₂ with AD unchanged: the price level rises from P₁ to P₂ while real output falls from Y₁ to Y₂. Use it to show that a cost shock moves the economy to a worse position on BOTH objectives at once.']],
    'Short-run aggregate supply shows the total output firms are willing to produce at each price level when at least one factor cost is fixed. Its position depends on firms’ costs of production - raw material and energy prices, wages, the exchange rate and indirect tax rates - so a change in any of these shifts the whole SRAS curve.',
    [
      [
        'Energy is an input into almost every firm’s production, either directly as fuel and electricity or indirectly through transport and the goods it buys in. A sustained rise in world energy prices therefore raises unit costs across the economy simultaneously. At every price level, producing any given quantity is now less profitable, so firms supply less: SRAS shifts up and to the left, from AS₁ to AS₂ on the diagram. With aggregate demand unchanged, the new equilibrium has a higher price level (P₁ to P₂) and lower real output (Y₁ to Y₂) - cost-push inflation and falling output together.',
        'The size of the shift depends on how energy-intensive the economy actually is: a manufacturing-heavy economy with energy-hungry industries such as steel, chemicals or glass sees a far larger cost increase per unit of output than a services-dominated economy where energy is a small share of total costs, so the same world price rise moves SRAS much further in the first case than the second.',
      ],
      [
        'The exchange rate determines how much of a world price rise is actually felt domestically. Energy is priced in dollars on world markets, so a country whose currency appreciates against the dollar at the same time absorbs part of the increase, and the rise in its domestic-currency energy cost is smaller than the headline world price change suggests. A depreciating currency does the opposite, amplifying the shift in SRAS.',
        'How long the shift persists also matters. If the price rise proves temporary and firms have hedged or hold contracts at older prices, SRAS returns towards its original position as those contracts expire and prices fall back. If the rise is sustained, it feeds into wage demands as workers seek to protect real incomes, which raises costs again and can shift SRAS left a second time - the second-round effect that turns a one-off price shock into persistent inflation.',
      ],
    ],
    null,
    [
      'Definition of short-run aggregate supply and the costs that determine its position',
      'Energy as an input to almost all production, so a price rise raises unit costs economy-wide',
      'Diagram: SRAS shifting up and left, raising the price level and reducing real output',
      'Cost-push inflation and falling output occurring together',
      'The exchange rate as a determinant of how much of a dollar-priced world rise is felt domestically',
    ],
    [
      'The size of the shift depends on how energy-intensive the economy is - manufacturing versus services',
      'A temporary rise reverses as contracts expire; a sustained one feeds into wages, causing a second-round shift',
    ],
  ),

  Q126: A(
    [['cost-push', 'AS shifting left from AS₁ to AS₂ against an unchanged AD: the price level rises to P₂ while output falls to Y₂. This single diagram carries the whole answer - it shows why a cost shock worsens inflation and growth simultaneously, which is what makes the policy response so difficult.']],
    'A sustained rise in firms’ costs - energy, imported raw materials, wages or indirect taxes - shifts short-run aggregate supply to the left. Because this raises the price level while reducing real output, it worsens two macroeconomic objectives at once, which is what distinguishes a supply shock from a demand shock and makes it so difficult to respond to.',
    [
      [
        'The immediate effect is stagflation: the leftward shift in SRAS raises the price level from P₁ to P₂ and cuts real output from Y₁ to Y₂, so inflation rises and growth falls together. Unemployment rises as firms cut output and shed labour, and real incomes fall twice over - once because prices are higher, and again because the weaker labour market restrains wage growth. The UK’s experience after the 2022 energy shock, with inflation above 11% alongside stagnant output, is a clear recent example.',
        'The scale depends on how large the cost rise is relative to firms’ total costs and on how much of it firms actually pass through to prices rather than absorbing in margins. In competitive markets with price-sensitive customers, firms may absorb a substantial share, which limits the inflation but concentrates the damage in profits and therefore in investment, shifting the cost from consumers to future productive capacity rather than removing it.',
      ],
      [
        'The external position also worsens. Higher domestic costs make exports less price-competitive, so export volumes fall, while the higher cost of imported inputs raises the import bill directly, both worsening the current account. If the cost rise is an imported one - energy or raw materials priced on world markets - the deterioration is immediate and largely outside domestic control, since the country must pay the world price whatever its own policy does.',
        'This effect is smaller for an economy that produces the commodity in question domestically: an energy exporter gains on some of what it loses, since higher world prices raise its export earnings even as they raise its domestic costs, so the net effect on its current account can be positive rather than negative. The damage is concentrated in economies that import the input and export goods made with it.',
      ],
      [
        'The policy response is genuinely constrained, which is the heart of the problem. Demand-side policy can address either the inflation or the lost output, but not both: tightening monetary policy to bring inflation down shifts AD left, deepening the fall in output and raising unemployment further, while loosening policy to protect output shifts AD right and worsens the inflation. Neither instrument can shift SRAS back to where it was, because neither changes the underlying cost that moved it.',
        'What can work operates on the supply side or on expectations. Supply-side measures - improving energy efficiency, diversifying supply, raising productivity so that higher input costs are offset by more output per unit - shift SRAS back right, though slowly. In the meantime, a credible central bank can at least prevent the second-round effects, anchoring inflation expectations so that a one-off cost rise does not become a persistent wage-price spiral, which is the difference between the UK’s response in the 1970s and in 2022.',
      ],
    ],
    'A sustained economy-wide rise in costs worsens inflation, growth, unemployment and the current account simultaneously, which makes it far more damaging than a demand shock of equivalent size and far harder to respond to. Demand-side policy faces a genuine trade-off rather than a solution, since it can only choose which of the two problems to make worse. The extent of the damage depends on how large the cost rise is relative to total costs, how much is passed through to prices, and whether the economy produces or imports the input in question. The most that policy can reliably do in the short run is prevent second-round effects by keeping inflation expectations anchored, while supply-side measures work on the underlying cost over a longer horizon.',
    [
      'A cost rise shifts SRAS left, raising the price level and reducing real output - stagflation',
      'Diagram showing the leftward shift and the effect on both the price level and output',
      'Rising unemployment and falling real incomes as firms cut output',
      'Worsening current account: exports less competitive, imported inputs dearer',
      'The demand-side policy trade-off: tightening worsens output, loosening worsens inflation',
      'Supply-side measures and anchored expectations as the more effective responses',
    ],
    [
      'The scale depends on the size of the cost rise relative to total costs and on the degree of pass-through to prices',
      'An economy that produces the commodity domestically can gain on exports what it loses on costs',
      'Demand-side policy can only choose which objective to sacrifice, not restore both',
      'Judgement: more damaging and harder to treat than a demand shock; expectations management and supply-side measures matter most',
    ],
  ),

  /* --------------------------------------- The Role of Financial Markets */
  Q127: A(
    [],
    'Financial markets are the institutions and mechanisms through which funds are channelled between savers and borrowers. They perform several distinct roles in a modern economy, and an economy without them would be restricted to whatever investment each household or firm could finance from its own resources.',
    [
      [
        'The first role is to facilitate saving and to lend those savings to businesses and individuals. Banks and other institutions pool many small deposits into sums large enough to fund a factory, a mortgage or a government’s borrowing, and they perform maturity transformation, lending long while borrowing short, so that savers keep access to their money while borrowers get the long-term funding investment requires. Without this, savings would sit idle and investment would be limited to what each firm could self-finance.',
        'This role depends on the institutions being able to judge who they lend to. Because borrowers know more about their own prospects than lenders do, screening and monitoring are what banks are really selling, and where they do this badly - as with sub-prime lending before 2008 - the same institutions that channel savings into productive investment channel them into losses instead.',
      ],
      [
        'A second role is to provide markets that let firms and households manage risk and raise capital directly. Forward markets in currencies and commodities let an importer fix the exchange rate or an airline fix the fuel price for a future delivery, removing a risk that might otherwise deter the trade altogether. Equity markets let firms raise capital by selling shares rather than borrowing, spreading the risk of a venture across many investors, and give those investors a liquid market in which to sell. Financial markets also operate the payments system that lets goods and services be exchanged at all.',
        'These markets serve the real economy only to the extent that the trading in them reflects genuine hedging and investment rather than speculation for its own sake: the same forward market that lets an airline hedge fuel costs also allows purely speculative positions, which can amplify price volatility rather than dampening it, so the role is a genuine one but not unambiguously stabilising.',
      ],
    ],
    null,
    [
      'Definition of financial markets as the channel between savers and borrowers',
      'Facilitating saving and lending to businesses and individuals; pooling and maturity transformation',
      'Providing forward markets in currencies and commodities so firms can hedge future price risk',
      'Providing a market for equities, letting firms raise capital and spreading risk across investors',
      'Operating the payments system that allows the exchange of goods and services',
    ],
    [
      'The lending role depends on banks screening and monitoring borrowers well - sub-prime lending shows the cost when they do not',
      'Forward and equity markets serve the real economy only where trading reflects genuine hedging rather than pure speculation',
    ],
  ),

  Q128: A(
    [],
    'Financial markets allocate capital efficiently when funds flow to the investments offering the highest risk-adjusted return, so that society’s savings end up funding the most productive uses. This is what the financial sector exists to do, and it succeeds at it substantially - but a series of well-documented market failures mean the allocation is far from perfect.',
    [
      [
        'The efficiency case is strong and largely borne out. Competing lenders and investors have a direct financial incentive to identify the most promising projects, since backing a better one earns a better return, and prices in liquid markets aggregate the judgements of many participants into a single signal about where capital is worth deploying. Banks specialise in the screening and monitoring that individual savers could not do for themselves, and countries with deeper financial systems have historically grown faster than those without, which is consistent with capital being channelled more productively where these markets work.',
        'This depends on the information available being reasonably good. Where lenders cannot distinguish good risks from bad - asymmetric information - they either ration credit or price it for the average borrower, which drives the best borrowers out of the market and leaves capital allocated to worse projects than the lender intended, a misallocation that follows directly from the information problem rather than from any failure of incentive.',
      ],
      [
        'Several further failures push allocation away from the efficient outcome. Moral hazard means an institution that expects to be rescued takes risks it would otherwise avoid, so capital flows towards excessive risk rather than productive return. Speculation can detach asset prices from the fundamentals they are supposed to reflect, generating bubbles in which capital floods into an overvalued asset - housing before 2008, dot-com equities before 2000 - and is destroyed when the bubble bursts. Market rigging, such as the manipulation of benchmark rates in the LIBOR scandal, corrupts the price signal that allocation depends on.',
        'These failures are not evenly distributed: they cluster in markets with poor information, weak supervision and strong short-term incentives, and are far less severe in, for example, routine business lending against tangible collateral. The allocation problem is therefore concentrated in specific parts of the financial system rather than being a general property of it.',
      ],
      [
        'Regulation exists precisely to correct these failures, and how well it does so determines how efficient the allocation actually is. Capital and liquidity requirements limit the risk an institution can take with other people’s money, disclosure rules reduce the information asymmetry, and supervision counters both moral hazard and rigging. Since 2008, higher capital ratios, ring-fencing and stress testing have made a repeat of that specific failure less likely.',
        'But regulation is itself imperfect and carries a cost: capital held as a buffer is capital not lent to a business, so tighter rules reduce the volume of lending as well as its riskiness, and activity can migrate to less-regulated shadow banking where the same failures recur beyond supervisors’ reach. Regulation improves the allocation without perfecting it, and each tightening trades some allocative efficiency for stability.',
      ],
    ],
    'Financial markets allocate capital efficiently to a substantial extent: competing lenders have every incentive to fund the best projects, specialised screening does work individual savers could not, and deeper financial systems are associated with faster growth. But the allocation is systematically distorted by asymmetric information, moral hazard, speculation and outright rigging, and these failures are largest precisely where the sums involved are greatest. Regulation meaningfully improves the outcome without perfecting it, and does so at some cost to the volume of lending. The honest judgement is that financial markets allocate capital better than any alternative mechanism yet devised, and considerably worse than the efficient ideal - which is why they are simultaneously indispensable and among the most heavily regulated markets in the economy.',
    [
      'Efficient allocation means funds flowing to the highest risk-adjusted returns',
      'The efficiency case: competing lenders’ incentives, price signals, specialised screening, evidence linking financial depth to growth',
      'Asymmetric information causing credit rationing and adverse selection',
      'Moral hazard, speculation and bubbles, and market rigging as further sources of misallocation',
      'Regulation - capital requirements, disclosure, supervision - as the corrective',
    ],
    [
      'The efficiency case depends on the quality of information available to lenders',
      'The failures cluster in specific markets rather than being general to the whole sector',
      'Regulation trades some lending volume for stability, and activity can migrate to shadow banking',
      'Judgement: better than any alternative mechanism, considerably worse than the efficient ideal',
    ],
  ),

  /* ------------------------------------------------------------ Net Trade */
  Q133: A(
    [],
    'Net trade is exports minus imports, the (X - M) component of aggregate demand. A fall in the net trade balance means exports falling relative to imports, which reduces AD directly. The exchange rate is the influence most often cited, but several others matter at least as much.',
    [
      [
        'The first is a change in relative incomes. Imports are bought out of domestic income, so when domestic growth runs faster than that of a country’s trading partners, spending on imports rises faster than partners’ spending on its exports, and net trade deteriorates even with no change in competitiveness or prices. This is why a strong domestic recovery routinely widens a trade deficit, and why the UK’s deficit tends to narrow in recessions and widen in booms.',
        'The size of this effect depends on the marginal propensity to import: an economy that spends a large share of each extra pound on imported goods, as the UK does, sees a much larger deterioration from the same income growth than one that meets more of its demand domestically. It is also self-correcting in a way a competitiveness problem is not, since it reverses when relative growth rates converge.',
      ],
      [
        'The second is a loss of non-price competitiveness. Price is only part of what determines whether a buyer chooses a country’s exports: quality, reliability, design, delivery times, after-sales service and brand reputation all matter, and in many markets they matter more. A country whose firms fall behind on innovation or quality loses export orders and sees domestic buyers switch to imports, worsening net trade at an unchanged exchange rate and unchanged relative prices.',
        'This cause is far more persistent than an income-driven deterioration, because it reflects a structural position rather than a point in the cycle: it will not reverse on its own when growth slows, and correcting it requires investment in productivity, skills and innovation over years. Relative inflation and productivity growth work through the same channel more slowly, eroding price competitiveness even where the nominal exchange rate is stable.',
      ],
    ],
    null,
    [
      'Definition of net trade as (X - M) and its role as a component of AD',
      'Relative income growth: faster domestic growth than trading partners raises imports faster than exports',
      'The marginal propensity to import determining the size of that effect',
      'Loss of non-price competitiveness: quality, reliability, design, innovation, brand',
      'Relative inflation and productivity eroding price competitiveness at an unchanged exchange rate',
    ],
    [
      'The income-driven deterioration is cyclical and self-correcting as relative growth rates converge',
      'A competitiveness-driven deterioration is structural and will not reverse without investment in productivity and innovation',
    ],
  ),

  Q134: A(
    [['ad-shift', 'AD = C + I + G + (X - M) shifting from AD₁ to AD₂. Net trade is one of the four components doing the shifting - use the diagram to size it against the others rather than to show a mechanism, since the argument here is about how much weight (X - M) carries.']],
    'Net trade, (X - M), is one of the four components of aggregate demand alongside consumption, investment and government spending. Judging its significance means asking both how large it is relative to the others and how much influence it actually exerts over an economy’s macroeconomic performance.',
    [
      [
        'On size alone, net trade is the smallest component of UK aggregate demand by a wide margin. Consumption is around 60% of GDP; net trade is typically a small negative number, since the UK persistently imports more than it exports. A given percentage change in consumption therefore moves AD far more than the same percentage change in net trade, which is why demand management in the UK works primarily through interest rates and fiscal policy acting on consumption and investment rather than through the external sector.',
        'Size understates significance in one important respect, though: net trade is the most VOLATILE component after investment, swinging with world growth, exchange rates and commodity prices, so it can contribute disproportionately to short-run changes in AD even though its level is small. A sharp fall in world demand reduces exports quickly, and that shock transmits directly to output regardless of how small the net balance is in normal times.',
      ],
      [
        'Net trade matters more through what it reveals than through its direct contribution to AD. A persistent deficit is a symptom: it signals either that domestic demand is running ahead of domestic supply, or that the economy has a competitiveness problem in international markets. Either diagnosis has consequences for policy that the size of the number alone does not convey - the first suggests the economy is overheating, the second that supply-side reform is needed.',
        'The deficit also has to be financed, which is where it can constrain policy. A country running a persistent current account deficit must attract corresponding inflows on the financial account, and if those inflows are short-term and volatile, the country may need to keep interest rates higher than domestic conditions alone would justify, subordinating monetary policy to an external constraint. For the UK, with deep financial markets and its own currency, this constraint has so far been mild; for economies with limited reserves or a currency peg, it binds hard.',
      ],
      [
        'Its significance also depends heavily on the type of economy. For a small, very open economy where exports are a large share of GDP - Singapore, Ireland, the Netherlands - net trade is a dominant influence on growth and employment, and world demand matters more than domestic policy. For a large, relatively closed economy, the external sector is a secondary influence on the cycle, and domestic demand dominates.',
        'The UK sits awkwardly between these: trade is a substantial share of GDP, so the economy is genuinely exposed to world conditions, but the persistent deficit means net trade subtracts from rather than drives growth, and the services surplus partly offsets the goods deficit. Its significance for the UK is therefore greater as a constraint and a diagnostic than as an engine of demand.',
      ],
    ],
    'Net trade is the least significant component of UK aggregate demand in terms of its direct contribution: it is small in magnitude and, being persistently negative, subtracts from rather than drives growth. Its significance is greater than its size suggests for three reasons - it is volatile, so it contributes disproportionately to short-run swings; it is diagnostic, revealing whether the economy is overheating or uncompetitive; and it must be financed, which can constrain monetary policy. Its significance also varies enormously with the type of economy: decisive for a small open economy, secondary for a large one. For the UK specifically, net trade matters more as a constraint and a signal than as a lever of demand management, which is why policy acts on it indirectly through competitiveness rather than targeting it directly.',
    [
      'Net trade as (X - M), the smallest component of UK aggregate demand',
      'Relative size compared with consumption, investment and government spending',
      'Volatility making its contribution to short-run AD changes disproportionate to its level',
      'Diagnostic value: a deficit signals excess domestic demand or a competitiveness problem',
      'The financing constraint: persistent deficits require financial account inflows and can constrain interest rates',
      'Dependence on the type of economy: small open economies versus large relatively closed ones',
    ],
    [
      'Small in level but volatile, so it matters more for short-run changes than its size implies',
      'The financing constraint is mild for an economy with its own currency and deep markets, binding for one without',
      'Significance varies enormously between small open and large closed economies',
      'Judgement: for the UK, more significant as a constraint and a diagnostic than as a driver of demand',
    ],
  ),

  /* ----------------------------------------------- The Pattern of Trade */
  Q139: A(
    [],
    'The pattern of trade describes which countries trade which goods and services with whom. It is not fixed: over the last thirty years the direction and composition of world trade have changed substantially, and several identifiable factors have driven that change.',
    [
      [
        'The first is the emergence of new industrial economies, above all China and the wider East Asian region. As these countries industrialised, they acquired a comparative advantage in labour-intensive manufacturing that advanced economies had previously held, so production of textiles, consumer electronics and assembled goods shifted towards them, and the advanced economies’ exports shifted further towards services, high-technology manufacturing and intellectual property. China’s accession to the WTO in 2001 accelerated this by locking in its access to export markets.',
        'This shift is not permanent either, and is already moving on: as Chinese wages have risen, lower-cost production has begun relocating again towards Vietnam, Bangladesh and parts of Africa, which shows that a comparative advantage based on relative labour costs erodes precisely because the growth it generates raises those costs.',
      ],
      [
        'The second is the growth of trading blocs and bilateral agreements, which change the pattern by altering relative trade costs rather than relative production costs. Preferential access within a bloc diverts trade towards member states and away from more efficient outside producers, so a country’s trade becomes more concentrated on its bloc partners than comparative advantage alone would predict - the effect visible in the concentration of UK trade on the EU before 2021, and in its partial redirection afterwards.',
        'Exchange rate movements work in the same direction over shorter horizons, making a country’s exports cheaper or dearer relative to competitors’ and shifting trade flows without any change in underlying costs - though these effects are usually reversed as currencies move back, whereas changes in bloc membership or industrial capability persist.',
      ],
    ],
    null,
    [
      'Definition of the pattern of trade: which countries trade which goods with whom',
      'The emergence of China and other industrialising economies acquiring comparative advantage in manufacturing',
      'Advanced economies shifting towards services, high-technology goods and intellectual property',
      'Trading blocs and bilateral agreements diverting trade towards member states',
      'Relative exchange rate changes shifting trade flows over shorter horizons',
    ],
    [
      'Labour-cost-based comparative advantage erodes as growth raises wages, so the shift continues to move on',
      'Exchange rate effects are usually reversed, whereas industrial capability and bloc membership persist',
    ],
  ),

  Q140: A(
    [['comparative-advantage', 'Two countries with differently-sloped PPFs, specialising where opportunity cost is lower and consuming beyond their own frontier by trading along the trade line. Use it to state what the theory predicts - then test that prediction against the trade patterns actually observed.']],
    'Comparative advantage holds that countries export goods they can produce at a lower opportunity cost than their trading partners, and that specialisation and trade let both consume beyond their own production possibility frontiers. It remains the foundation of trade theory, but how much of the observed pattern of trade it actually explains is a separate question.',
    [
      [
        'The theory explains a great deal of the broad pattern, particularly trade between very different economies. Countries abundant in land export agricultural products; countries with large reserves export oil and minerals; economies with abundant low-cost labour export labour-intensive manufactures while capital- and skill-abundant economies export high-technology goods and services. The UK’s persistent surplus in financial and professional services alongside its deficit in manufactured goods is close to exactly what the theory predicts for an economy with a deep skills base and high labour costs.',
        'The theory’s predictions hold best where the differences between countries are largest, since that is where opportunity costs diverge most sharply. It performs much less well in explaining trade between economies that are similar in income, technology and factor endowments, where the theory predicts relatively little trade at all.',
      ],
      [
        'This is the central empirical problem: the largest trade flows in the world are between similar advanced economies, and a great deal of it is INTRA-INDUSTRY - Germany and France exchanging cars with each other, rather than one specialising in cars and the other in something else. Comparative advantage cannot easily explain why two countries with near-identical opportunity costs trade the same category of good in both directions. The explanations that do work are economies of scale, which reward concentrating production of a particular model or variety in one location, and product differentiation combined with consumer demand for variety.',
        'These explanations complement rather than replace comparative advantage: scale economies determine WHERE within a broad industry a particular variety is produced, while comparative advantage still explains why the industry as a whole is located in advanced economies rather than elsewhere. The theory is incomplete rather than wrong, and modern trade theory incorporates it rather than discarding it.',
      ],
      [
        'The theory’s assumptions also limit its explanatory power. It assumes constant opportunity costs, no transport costs, perfect factor mobility within countries and free trade - none of which holds. Transport and other trade costs mean geography matters enormously, which is why countries trade disproportionately with their neighbours regardless of comparative advantage. Protection, subsidies and bloc membership divert trade away from the pattern comparative advantage alone would produce, and global supply chains mean a good crosses borders repeatedly, so trade statistics attribute the full value of an export to the country of final assembly rather than to where the value was actually added.',
        'Comparative advantage is also not static, which is both a limitation and a strength: it shifts as countries accumulate capital, skills and technology, so the pattern it predicts changes over time. This means it explains the DIRECTION of change - as China accumulated capital, it moved from textiles towards electronics exactly as the theory implies - even where it cannot predict a country’s trade pattern from its endowments at a single point in time.',
      ],
    ],
    'Comparative advantage still explains the broad structure of world trade well, particularly between economies with genuinely different factor endowments, and it explains the direction in which trade patterns evolve as countries develop. It does not explain the largest and fastest-growing category of trade - intra-industry trade between similar advanced economies - for which economies of scale and product differentiation are the operative explanations, and its assumptions about transport costs, factor mobility and free trade diverge sharply enough from reality that geography and policy visibly distort the pattern it predicts. The honest judgement is that comparative advantage remains necessary but no longer sufficient: it is the foundation on which modern trade theory is built rather than a complete account of the pattern of trade on its own.',
    [
      'Comparative advantage: specialisation according to lower opportunity cost, with a diagram',
      'Explains trade between economies with different factor endowments - land, resources, labour, capital, skills',
      'The UK’s services surplus and manufacturing deficit as a predicted pattern',
      'Intra-industry trade between similar economies as the central anomaly',
      'Economies of scale and product differentiation as the complementary explanations',
      'Limiting assumptions: constant costs, no transport costs, factor mobility, free trade',
    ],
    [
      'The theory performs best where differences between countries are largest, worst where they are smallest',
      'Scale economies complement rather than replace comparative advantage - the theory is incomplete, not wrong',
      'Geography, protection and global supply chains distort the predicted pattern and the statistics measuring it',
      'Judgement: still necessary and still explains the direction of change, but no longer sufficient on its own',
    ],
  ),

  /* ------------------------------------------------- Buffer Stock Schemes */
  Q143: A(
    [['buffer-stock', 'A price band with a floor and a ceiling against a demand curve and two supply curves - one for a good harvest, one for a poor one. A good harvest that would drive price below the FLOOR is met by buying the surplus into store; a poor harvest that would drive it above the CEILING is met by selling from store.']],
    'Agricultural commodity prices are volatile because supply is both price-inelastic in the short run and subject to large, weather-driven swings, while demand is inelastic too. A buffer stock scheme is an interventionist attempt to stabilise that price by holding a store of the commodity and trading against the swings.',
    [
      [
        'The agency sets a price band with a floor and a ceiling. In a year of good harvest, supply shifts right and the free-market price would fall below the floor, so the agency BUYS the surplus into storage, adding to demand and holding the price up at the floor. In a year of poor harvest, supply shifts left and the price would rise above the ceiling, so the agency SELLS from its store, adding to supply and holding the price down at the ceiling. In both directions the agency trades against the market, and the price stays within the band instead of swinging with the weather.',
        'This works only if the band is set close to the long-run average market price. Set the floor too high and the agency buys in most years, accumulating stock it cannot afford to store and eventually running out of money; set the ceiling too low and it sells in most years, running out of stock and losing the ability to defend the band at all. The scheme is self-financing in principle - buying cheap and selling dear - but only if the band straddles the true average.',
      ],
      [
        'The intended benefit runs in both directions. Producers gain from stable, predictable revenue, which makes it possible to plan and to invest in the next season rather than lurching between windfall and ruin, and it protects them from the paradox that a bumper harvest can leave farmers worse off overall, since inelastic demand means the price falls proportionately more than the quantity rises. Consumers gain from a stable price too, avoiding the spikes that make a staple unaffordable after a bad harvest.',
        'The scheme carries substantial running costs that the diagram does not show: storage, insurance, spoilage of a perishable commodity, and the working capital tied up in stock. A guaranteed floor also encourages farmers to produce more than the market wants, since the downside risk has been removed, which makes surpluses larger and the scheme more expensive to operate in exactly the years it is already buying.',
      ],
    ],
    null,
    [
      'Why commodity prices are volatile: inelastic supply and demand, weather-driven supply shifts',
      'The price band: a floor and a ceiling set by the agency',
      'Diagram: buying surplus into store at the floor, selling from store at the ceiling',
      'The agency trades against the market in both directions to hold price within the band',
      'Benefits: stable producer incomes allowing investment, stable consumer prices',
    ],
    [
      'The band must straddle the long-run average price or the scheme runs out of either money or stock',
      'Storage, spoilage and working capital are real costs, and a guaranteed floor encourages over-production',
    ],
  ),

  Q144: A(
    [['buffer-stock', 'The price band against a good and a poor harvest. Use it to show what the scheme promises - a price held between floor and ceiling - and then judge that promise against what happens when the floor is set above the long-run average and the store fills up permanently.']],
    'Many developing economies depend on a narrow range of primary commodities whose prices swing sharply, so producer incomes are volatile and hard to plan around. A buffer stock scheme aims to stabilise those incomes by holding price within a band. The theory is sound; the record of actual schemes is poor, and the gap between the two is where the answer lies.',
    [
      [
        'The case for the scheme is real. Because both supply and demand for primary commodities are price-inelastic, a weather-driven shift in supply produces a large price swing, and a good harvest can leave farmers collectively worse off because price falls proportionately more than output rises. Stabilising price within a band removes that perverse outcome, gives producers a predictable income they can borrow and invest against, and protects them from the volatility that keeps commodity-dependent economies from diversifying. In principle the scheme also pays for itself, buying at the floor in surplus years and selling at the ceiling in shortage years.',
        'That self-financing claim holds only if the band is centred on the long-run equilibrium price, and governments face constant political pressure to set the floor above it, because the floor is what producers - an organised, visible constituency - actually care about. Once the floor sits above the average, the agency buys in most years and sells in few, which turns a self-financing stabiliser into a permanent, growing subsidy.',
      ],
      [
        'The operational costs are what has historically destroyed these schemes. Storage, insurance and the working capital tied up in stock are substantial, and many agricultural commodities are perishable, so the store deteriorates and must be rotated or written off. A floor that removes downside risk also encourages farmers to expand output beyond what the market will absorb, so surpluses grow year on year - the accumulation that produced the European Union’s butter mountains and wine lakes under a comparable guaranteed-price system.',
        'The international commodity agreements of the 1970s and 1980s - for tin, coffee, cocoa and sugar - failed for exactly this combination of reasons, exhausting their funds defending prices above the market level and then collapsing, after which prices fell further and faster than they would have without the scheme. This is not a theoretical objection but the observed history of the policy.',
      ],
      [
        'The alternatives address the same problem differently and often more cheaply. Diversifying the economy away from commodity dependence tackles the cause rather than the symptom, though it is slow and requires investment the country may lack. Futures markets and hedging let individual producers fix a price for a future harvest without any agency holding physical stock at all, and Fairtrade schemes guarantee a minimum price to participating farmers funded by consumers willing to pay for it rather than by the state. Direct income support paid to farmers stabilises incomes without distorting the price signal or accumulating stock.',
        'Each of these has its own limits - hedging requires financial infrastructure and literacy that smallholders often lack, Fairtrade reaches only a fraction of producers, and income support still costs money - so the comparison is not between a flawed scheme and a clean alternative. The realistic judgement is that buffer stocks address a genuine problem with the wrong instrument, and that the same budget spent on diversification or direct income support achieves more per pound.',
      ],
    ],
    'A buffer stock scheme addresses a genuine problem: primary commodity prices are volatile for structural reasons, and that volatility genuinely damages producer incomes and the prospects of commodity-dependent economies. In principle the scheme is self-financing and stabilises both incomes and consumer prices. In practice its effectiveness has been poor, and for reasons that recur rather than being accidental - political pressure sets the floor above the market-clearing average, storage and spoilage costs mount, guaranteed prices encourage over-production, and the agency eventually exhausts its funds and collapses, as the international commodity agreements of the 1970s and 1980s did. The extent to which it supports producer incomes is therefore limited and usually temporary, and the same resources directed at diversification, direct income support or access to hedging are likely to achieve more.',
    [
      'Why commodity prices are volatile and why that harms producer incomes in developing economies',
      'Diagram: the price band, buying into store at the floor and selling from store at the ceiling',
      'The self-financing claim, valid only where the band straddles the long-run average price',
      'Operating costs: storage, insurance, spoilage, working capital',
      'A guaranteed floor encourages over-production and growing surpluses',
      'Historical failure of the 1970s-80s international commodity agreements',
      'Alternatives: diversification, futures and hedging, Fairtrade, direct income support',
    ],
    [
      'Political pressure pushes the floor above the market average, turning a stabiliser into a permanent subsidy',
      'Perishability and storage costs make the stock expensive to hold and to rotate',
      'The alternatives have real limits too - hedging needs financial infrastructure, Fairtrade reaches few producers',
      'Judgement: a genuine problem addressed with the wrong instrument; diversification or income support achieves more per pound',
    ],
  ),
}
