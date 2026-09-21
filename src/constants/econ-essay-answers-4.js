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
        'This cause is structural rather than temporary: it will not correct itself without an actual change in relative costs, prices or productivity, so a deficit driven by a persistent competitiveness gap can continue to widen for years if the underlying gap is not addressed by policy. The UK is the standing example, having run a current account deficit in almost every year since the mid-1980s, as North Sea oil receipts declined and manufacturing shrank as a share of output without exports of services expanding enough to replace them.',
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
        'This trade-off is not fixed, however: growth driven by genuinely resource-efficient, low-carbon investment (renewable energy, green technology) can raise output while reducing environmental harm, so the conflict depends heavily on the TYPE of growth being pursued, not on growth itself being inherently in conflict with the environment. The UK has cut territorial emissions substantially since 1990 while the economy grew, largely by replacing coal generation with gas and renewables, which shows the two objectives can move together - though part of that fall reflects emissions-intensive manufacturing relocating abroad rather than disappearing.',
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
        'Policies to boost growth and reduce unemployment - lower interest rates, higher government spending, tax cuts - increase aggregate demand, but if the economy is already close to full capacity, this extra demand is more likely to raise the general price level than to raise real output further, conflicting with the objective of low and stable inflation. This is the classic short-run trade-off the Phillips curve describes between unemployment and inflation, and the same demand pulls in imports as rising incomes are partly spent on foreign goods, so the growth and employment objectives are met at the expense of the external balance too.',
        'Both conflicts bind only near capacity. With a negative output gap, extra demand raises output with little pressure on prices, and the import leakage is the price of a recovery that would otherwise not happen, so whether the trade-off exists at all depends on where the economy sits in the cycle. The Phillips relationship has also weakened: through the 2010s UK unemployment fell to its lowest for decades while inflation stayed at or below target, which suggests the conflict is far less binding than the textbook curve implies until the economy is genuinely at capacity.',
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
        'Government spending on education and training directly raises the quality of the labour force: workers become more productive, better able to use new technology, and more adaptable to changing employer needs, which raises the economy’s potential output at any given quantity of labour and capital. This is a supply-side effect, distinct from any short-term demand-side boost the spending might also create. Germany’s dual apprenticeship system, which combines classroom study with paid work at an employer, is the standard example of public spending on training producing a workforce whose vocational skills employers actually want.',
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
        'Market-based policies work by removing barriers that are assumed to be holding back private sector efficiency and investment: cutting corporation tax raises the after-tax return on investment, deregulation reduces the cost of compliance and encourages new firms to enter, and labour market reform - lighter employment protection, more flexible contracts, benefit changes that sharpen the incentive to take work - can make it easier for firms to hire and for workers to move between jobs, all of which can raise productive capacity relatively quickly and at comparatively low direct cost to the government’s own budget.',
        'These policies rely heavily on the private sector actually responding to the improved incentives - a tax cut only raises investment if firms have profitable opportunities to invest in and confidence that conditions will remain favourable, and deregulation can, if taken too far, remove protections (environmental, consumer, employment) that had a genuine economic justification, creating costs of its own.',
      ],
      [
        'Interventionist policies work by directly providing what the market might under-supply: investment in infrastructure, education and research often has long time horizons or diffuse benefits that private investors are reluctant to fund alone, so government provision can raise capacity in areas the market-based approach would leave unaddressed, and can be targeted specifically at genuine gaps (a shortage of a particular skill, an underdeveloped region’s transport network). UK policy has run both approaches in parallel: the apprenticeship levy and T-levels on the interventionist side, alongside corporation tax and regulatory changes intended to work through incentives, while HS2 and Crossrail are interventionist infrastructure of exactly the kind no private investor would have funded alone.',
        'Interventionist policy requires significant government spending, funded by taxation or borrowing, and depends on government correctly identifying where to direct that spending - a poorly chosen infrastructure project or training scheme can waste resources without materially raising long-run supply, and government spending on this scale itself carries an opportunity cost in what else that revenue could have funded. HS2 is the obvious warning: costs rose repeatedly against the original estimates and sections were eventually cancelled, so the capacity gain delivered is far smaller than the sum committed was meant to buy.',
      ],
      [
        'Which approach is more effective at raising the long-run rate of economic growth depends on what is actually constraining growth in the specific economy. Where private investment is being held back mainly by high taxes, excessive regulation or inflexible labour markets, market-based policies address the binding constraint directly and can work reasonably quickly. Where the binding constraint is a genuine gap the market under-provides - basic research, a national infrastructure network, foundational education - interventionist policy is likely to be more effective, since a tax cut alone does not build a railway or fund research with no immediate commercial return.',
        'In practice, most successful supply-side strategies combine both approaches rather than relying on either exclusively - infrastructure and education funded through interventionist spending, alongside a competitive tax and regulatory environment to ensure the private sector then makes full use of that improved capacity - so the more useful question is often which BALANCE of the two suits a specific economy’s constraints, rather than treating them as mutually exclusive.',
      ],
    ],
    'Neither market-based nor interventionist supply-side policy is more effective in every case: market-based policies work quickly and cheaply where private investment is being held back by poor incentives, while interventionist policies are more effective where the constraint is a genuine gap in provision - such as infrastructure, basic research or foundational education - that the market under-supplies on its own. The most effective long-run growth strategies in practice tend to combine both, using government spending to address genuine market gaps while maintaining incentives for the private sector to build on that foundation, rather than relying exclusively on either approach.',
    [
      'Definition of long-run aggregate supply and the two categories of supply-side policy',
      'Market-based: tax cuts, deregulation, labour market reform, reliance on private response',
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
        'If demand for the country’s exports is price ELASTIC, the same rise in export prices causes a proportionately larger fall in quantity sold, reducing total export revenue despite the higher price per unit - so an improvement in the terms of trade here would actually worsen the balance of trade, since the country is now earning less overall from a smaller quantity of exports even though each unit fetches a higher price. This is why the distinction matters most for commodity exporters: when oil prices rise, an exporter such as Saudi Arabia sees its terms of trade improve and its trade balance improve with them, because demand for oil is inelastic in the short run and buyers have nowhere else to go.',
      ],
      [
        'This is really only half of the full Marshall-Lerner condition, which states that the combined price elasticities of demand for exports and imports must exceed 1 for a favourable movement in relative prices to improve the balance of trade. Even where demand for exports alone is inelastic, if demand for imports is highly elastic, the improvement in the trade balance from the export side can still be undermined by a much larger swing in import volumes as domestic consumers substitute towards relatively cheaper foreign goods - both elasticities have to be assessed together, not exports in isolation.',
        'In the short run, existing contracts, established buying habits and a lack of immediately available substitutes mean both the price elasticity of demand for exports and for imports tend to be lower than in the long run, once buyers on both sides have had time to find alternatives. This is why the balance of trade can initially move in the "wrong" direction after a relative price shift - the J-curve effect - even in cases where the long-run combined elasticities do eventually satisfy the Marshall-Lerner condition.',
      ],
    ],
    null,
    [
      'Definition of the terms of trade (ratio of export prices to import prices) and what an improvement means',
      'Diagram: the terms of trade as export prices over import prices, shown improving',
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
    'Economic development means rising living standards, health and education as well as output. Many developing economies rely heavily on exporting a narrow range of primary commodities (agricultural produce, minerals, oil) while importing manufactured goods and capital equipment. A deterioration in their terms of trade - the ratio of export prices to import prices - means these commodity exports buy progressively fewer imports over time, and the question is how far that slows development rather than just output.',
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
        'A developing economy that diversifies away from commodity dependence while it still has strong terms of trade, or that adds value domestically (processing a raw material into a manufactured good before export, capturing more of the final price) rather than exporting the raw commodity alone, can substantially reduce its exposure to a long-run terms-of-trade deterioration. Ghana and Côte d’Ivoire illustrate the cost of not doing so, growing the majority of the world’s cocoa while capturing only a small share of the value of the chocolate made from it, whereas Botswana used diamond revenue to build reserves and fund education and infrastructure rather than current consumption, and moved from one of the poorest countries in the world to middle-income status, even if it cannot control the underlying world price movements themselves.',
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
      'Diagram: a tariff raising the domestic price above Pw, cutting imports, with the deadweight losses - the cost of a bloc’s external barrier',
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
    'A current account deficit means a country is spending more on imports, income and transfers abroad than it earns from them. A government concerned about a large, persistent deficit has two broad kinds of policy available: expenditure-switching, which shifts spending from imports towards domestic output, and expenditure-reducing, which lowers spending overall. Protectionism is a third, cruder form of switching, and supply-side policy that raises competitiveness is the slow route beneath all of them.',
    [
      [
        'An expenditure-switching policy aims to make domestic goods relatively cheaper than imports so that both domestic and foreign consumers switch their spending towards them. The main instrument is the exchange rate: allowing the currency to depreciate, or devaluing it under a managed system, makes exports cheaper in foreign currency and imports dearer in domestic currency, so export volumes rise and import volumes fall. Provided the Marshall-Lerner condition holds - the price elasticities of demand for exports and imports sum to more than one - the trade balance improves. Sterling\u2019s forced exit from the Exchange Rate Mechanism in 1992 is the clearest UK case, with the depreciation that followed contributing to several years of strong export growth and a narrowing deficit. Tariffs and quotas switch expenditure more directly by raising the price or limiting the quantity of imports, though at the cost of retaliation and of a government\u2019s trade commitments.',
        'Depreciation works with a lag and is not costless. In the short run demand for exports and imports is price inelastic - contracts are fixed, buyers take time to switch - so the same volumes are traded at worse prices and the deficit widens before it narrows, which is the J-curve. Dearer imports also raise the domestic price level, both directly and through imported components, so the competitiveness gain erodes as inflation feeds into costs unless wages are restrained; and under a floating rate the depreciation is not a policy the government can simply choose.',
      ],
      [
        'An expenditure-reducing policy instead lowers aggregate demand as a whole - tighter fiscal policy through higher taxes or lower government spending, or tighter monetary policy through higher interest rates - so that spending on everything, including imports, falls. Because a high marginal propensity to import means a large share of any fall in income comes off imports, the current account improves as a by-product of the demand contraction. Higher interest rates have a second effect in the same direction through the exchange rate, though here it works against the first: the capital inflow they attract appreciates the currency, which partly offsets the improvement from lower demand.',
        'The policy conflicts directly with the objectives of growth and low unemployment, since it reduces demand throughout the economy rather than targeting import spending, so the government is buying a smaller deficit with lower output and higher unemployment. It is also only a cure for a deficit caused by excess domestic demand: where the deficit reflects a structural loss of competitiveness, as the UK\u2019s persistent deficit largely does, cutting demand narrows it temporarily and it re-opens as soon as demand recovers, which is why supply-side policy to raise productivity and non-price competitiveness is the lasting alternative, slow as it is.',
      ],
    ],
    null,
    [
      'Definition of a current account deficit; expenditure-switching against expenditure-reducing policy',
      'Depreciation or devaluation: exports cheaper abroad, imports dearer at home; the Marshall-Lerner condition; the ERM exit in 1992',
      'Tariffs and quotas as direct switching, with retaliation and trade commitments as the cost',
      'Expenditure-reducing: tighter fiscal or monetary policy lowering demand for imports through the marginal propensity to import',
      'The interest rate route partly offsets itself through currency appreciation',
    ],
    [
      'Depreciation works with a lag (the J-curve) and raises the price level; under a floating rate it is not a policy choice',
      'Expenditure-reducing conflicts with growth and employment, and only cures a demand-driven deficit - a structural one needs supply-side policy',
    ],
  ),

  Q104: A(
    [['j-curve', 'The J-curve: the current account balance initially worsening immediately after a depreciation, before improving beyond its starting point once the volume effects of cheaper exports and dearer imports come through, subject to the Marshall-Lerner condition being satisfied.']],
    'A depreciation of a country’s currency makes its exports cheaper in foreign currency and its imports more expensive in domestic currency. Whether this is the most effective way of correcting a current account deficit depends on how demand for exports and imports actually responds, and over what time horizon.',
    [
      [
        'For a depreciation to improve the current account, the Marshall-Lerner condition must be satisfied: the sum of the price elasticities of demand for exports and imports must exceed one. Where this holds, the combined percentage rise in export volumes and fall in import volumes outweighs the unfavourable effect of exporters now earning less per unit in foreign currency terms, so the trade balance genuinely improves as the exchange rate falls.',
        'In the short run, however, demand for both exports and imports tends to be relatively price inelastic, because existing contracts, established supply chains and consumer habits take time to adjust, so the immediate effect of a depreciation can actually be a WORSENING of the trade balance - the same, largely unchanged volumes of exports and imports are now traded at less favourable prices - before demand has had time to respond. This initial dip followed by a later improvement, once volumes do adjust, produces the well-documented J-curve pattern in the current account following a depreciation. Sterling’s sharp fall after the 2016 referendum is a cautionary version of this: the depreciation was large and sustained, yet the current account deficit narrowed far less than a simple elasticity calculation would predict, partly because so many UK exports are built from imported components that had themselves become dearer.',
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
    'International competitiveness measures a country’s ability to sell its goods and services in world markets relative to other countries. The exchange rate is only one influence on this: relative productivity and relative inflation both change a country’s competitive position independently of what its currency is doing.',
    [
      [
        'The first factor is relative productivity. Competitiveness depends on unit labour cost, which is the wage bill divided by output, not on the wage rate on its own. If UK workers produce more output per hour than workers in a competitor country, unit labour costs can stay lower even at similar wage rates, so UK goods remain price-competitive with no change in the exchange rate at all. This is why a country can pay high wages and still compete: Germany sustains some of the highest manufacturing wages in Europe while remaining a major exporter, because output per hour is high enough to keep unit costs down. The UK’s position is the reverse case, with output per hour persistently below the French and German level, which raises unit costs for any given wage.',
        'The size of this effect depends on how labour-intensive the industry is. In a highly automated industry where labour is a small share of total cost, even a large productivity gap moves unit costs only slightly, so energy prices or capital costs may matter more to competitiveness than productivity does.',
      ],
      [
        'The second factor is the relative rate of inflation. If UK inflation runs persistently above that of its trading partners, domestic costs and prices rise faster than those abroad, so foreign buyers face a steadily rising price for UK goods against alternatives from lower-inflation countries, and competitiveness erodes even with a completely fixed exchange rate. Members of the eurozone show this most clearly, because they have no exchange rate to adjust against each other at all: in the decade after the euro was introduced, prices and wages in Greece, Portugal and Italy rose considerably faster than in Germany, and those economies lost competitiveness against Germany purely through the inflation differential.',
        'This matters more for price-sensitive goods than for differentiated ones. Where a product competes on quality, design, reliability or brand rather than price, as much of the UK’s pharmaceutical, aerospace and financial services exports do, demand is less price-elastic and a period of higher relative inflation does less damage to export volumes than the price figures alone would suggest.',
      ],
    ],
    null,
    [
      'Definition of international competitiveness, and of unit labour cost',
      'Relative productivity affecting unit labour costs independently of the exchange rate',
      'Relative inflation rates eroding price competitiveness over time, clearest within a currency union',
      'Other acceptable factors: non-price competitiveness (quality, design, reliability, branding), infrastructure, regulation',
    ],
    [
      'The productivity effect depends on how labour-intensive the industry is',
      'The inflation effect depends on how price-elastic demand for the exports is',
      'Both factors interact with, but are distinct from, the exchange rate',
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
        'Because the national debt is normally reported and compared as a percentage of GDP rather than in absolute currency terms, its size is best understood relative to the economy’s capacity to service it, not as a stand-alone figure. A country with a large nominal debt but a larger, faster-growing GDP can have a manageable, or even falling, debt-to-GDP ratio, while a country with a much smaller nominal debt but a weak or shrinking GDP can find that same debt increasingly unmanageable. Japan illustrates the point, sustaining a debt ratio well above any other developed economy without a financing crisis, because the debt is held domestically at very low interest rates, while Greece faced one at a lower ratio because its debt was held abroad and its GDP was contracting.',
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
        'The HDI’s central advantage is that it captures dimensions of development that GDP per capita misses entirely: two countries can have very similar income per head while differing sharply in life expectancy and years of schooling, and only the HDI, by explicitly including health and education alongside income, would correctly show the second country as less developed despite its comparable GDP figure. Oil-rich states such as Equatorial Guinea make the point sharply - income per head comparable to parts of Europe, but life expectancy and schooling far below it, so its HDI ranking sits many places below its income ranking. Sri Lanka has long shown the reverse, achieving health and education outcomes well above what its income alone would predict.',
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
        'Energy is an input into almost every firm’s production, either directly as fuel and electricity or indirectly through transport and the goods it buys in. A sustained rise in world energy prices therefore raises unit costs across the economy simultaneously. At every price level, producing any given quantity is now less profitable, so firms supply less: SRAS shifts up and to the left, from AS₁ to AS₂ on the diagram. The 2022 gas price shock did exactly this across Europe, with energy-intensive producers such as fertiliser and glass manufacturers cutting output first. With aggregate demand unchanged, the new equilibrium has a higher price level (P₁ to P₂) and lower real output (Y₁ to Y₂) - cost-push inflation and falling output together.',
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
      'Diagram: a change in (X - M) shifting AD - why a small component can move output',
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
        'The agency sets a price band with a floor and a ceiling. In a year of good harvest, supply shifts right and the free-market price would fall below the floor, so the agency BUYS the surplus into storage, adding to demand and holding the price up at the floor. This is the mechanism the EU’s Common Agricultural Policy ran through intervention buying, and the one the International Coffee Agreement used through export quotas until it collapsed in 1989. In a year of poor harvest, supply shifts left and the price would rise above the ceiling, so the agency SELLS from its store, adding to supply and holding the price down at the ceiling. In both directions the agency trades against the market, and the price stays within the band instead of swinging with the weather.',
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

  /* ------------------------------ Causes of Economic Growth (2.5.1) */
  Q145: A(
    [
      ['ppf', 'A production possibility frontier with a point B inside it. Actual growth is the movement from B towards the frontier - using existing capacity more fully, with no change in what the economy could produce.'],
      ['ppf-shift', 'The frontier itself shifting outward from PPF\u2081 to PPF\u2082. Potential growth is this shift - an increase in the capacity available to be used. The two diagrams together are the distinction: a movement towards the curve against a movement of the curve.'],
    ],
    'Economic growth is an increase in the real output of an economy. The specification distinguishes actual growth, a rise in real GDP actually produced, from potential growth, a rise in the maximum output the economy is capable of producing. The distinction matters because the two have different causes and call for different policies.',
    [
      [
        'Actual growth is an increase in real output from where the economy currently is, and it is shown on a production possibility frontier as a movement from a point INSIDE the frontier towards it. An economy at such a point has spare capacity: unemployed workers, idle machinery, factories running below their potential. The UK sat at such a point for years after 2008, with output well below its pre-crisis trend, so the growth of 2013-15 was largely actual growth taking up slack rather than new capacity. Actual growth here comes from using those existing resources more fully, which in practice means an increase in aggregate demand - higher consumption, investment, government spending or net exports - drawing the unemployed resources into use. This is why recovery from a recession produces rapid measured growth rates without any new capacity being created at all.',
        'The limit on this kind of growth is the frontier itself. Once the economy reaches the frontier, further increases in demand cannot raise output because there are no idle resources left to bring in, so the effect falls on the price level instead. Actual growth is therefore only available while a negative output gap exists, which is what makes it a short-run phenomenon rather than a route to sustained growth.',
      ],
      [
        'Potential growth is an increase in the economy’s productive capacity, shown as the frontier itself shifting outward, so that combinations of output previously unattainable become attainable. Its causes are the quantity and quality of the factors of production: net investment adding to the capital stock, a larger workforce through population growth or immigration, better education and training raising human capital, technological advance raising output per unit of input, and the discovery of new natural resources. International trade contributes here too, since access to export markets lets a country specialise according to comparative advantage and lets it import capital equipment and technology it could not produce itself, which is the basis of export-led growth.',
        'Potential growth is slower and harder to generate than actual growth, because it depends on investment and structural change whose effects appear over years rather than quarters. It is also the only kind that can be sustained indefinitely: an economy can only close its output gap once, so long-run growth in living standards depends entirely on the frontier moving outward, not on the economy moving towards it.',
      ],
    ],
    null,
    [
      'Definition of economic growth, and of actual and potential growth',
      'Actual growth: movement from inside the PPF towards it, using spare capacity, driven by aggregate demand',
      'Potential growth: an outward shift of the PPF, driven by the quantity and quality of factors of production',
      'Diagram distinguishing the movement towards the frontier from the shift of the frontier',
      'Causes of potential growth: net investment, workforce, human capital, technology, resources, trade',
    ],
    [
      'Actual growth is limited by the frontier - available only while a negative output gap exists',
      'Potential growth is slower to generate but is the only kind that can be sustained',
    ],
  ),

  Q146: A(
    [['ad-shift', 'Aggregate demand shifting right as export demand rises, raising real output from Y₁ to Y₂. Use it to show that the initial effect of export-led growth is a demand-side one, and pair it with the point that sustained growth needs the LRAS curve to move as well.']],
    'Economic growth is a sustained rise in real output, and for a developing economy the question is which route to it can be sustained. Export-led growth is a strategy of expanding output by selling into world markets rather than relying on domestic demand, usually by building a competitive advantage in particular sectors. It is set against alternatives such as import substitution, resource extraction, or growth driven by domestic consumption and investment. Whether it is the MOST effective route depends on the size of the domestic market, the sectors available and the external conditions the economy faces.',
    [
      [
        'The case for export-led growth is that it escapes the limits of a small domestic market. A developing economy whose population is poor cannot generate enough domestic demand to support production at an efficient scale, so producing for world markets lets firms reach a scale their own country never could, moving them down their long-run average cost curve and making them more competitive still. Export earnings also relieve the foreign exchange constraint that holds many developing economies back, funding the imported capital equipment and technology that raise productive capacity. The east Asian economies are the standard evidence: South Korea, Taiwan and later China all grew by deliberately building export sectors, and each moved from low-income to middle or high-income status within a generation.',
        'The scale of the gain depends on WHAT is exported. An economy exporting primary commodities faces volatile prices and a low income elasticity of demand, so export growth need not translate into rising income per head - which is precisely the terms-of-trade problem. The east Asian success came from exporting manufactures of rising sophistication, moving from textiles to electronics, not from exporting more of whatever the country already had.',
      ],
      [
        'Export-led growth also brings effects beyond the demand-side increase shown by the AD shift. Competing in world markets imposes a discipline domestic markets often do not: firms must meet international quality standards and match foreign costs, which raises productivity. Foreign direct investment that follows an export strategy brings technology, management practice and access to distribution networks that a domestic firm would take decades to build. These are supply-side effects, shifting LRAS outward, which is what converts a one-off rise in demand into sustained growth in capacity.',
        'None of this is automatic. FDI can enclave itself in an export processing zone with few links to the wider economy, so the technology transfer never happens, and a country competing purely on low labour costs has no obvious path upward as wages rise. The strategy delivers sustained growth only where the government also invests in the education and infrastructure that let domestic firms absorb what the export sector brings in.',
      ],
      [
        'The strategy also carries a distinctive risk: it makes growth dependent on demand the country does not control. An economy that has built its capacity around exporting is exposed to recession in its trading partners, to protectionism, and to exchange rate movements, all of which originate abroad. The 2008 financial crisis hit export-dependent economies hard for exactly this reason, and a country pursuing export-led growth while its main markets turn towards tariffs can find the route closed after the investment has been made. Domestic-demand-led growth, or growth built on regional trade with neighbours, is less exposed even if it is slower.',
        'This argues for export-led growth as a phase rather than a permanent settlement. China illustrates the sequence: exports drove the initial expansion, and policy has since shifted deliberately towards domestic consumption as the economy has grown large enough to sustain it. The most effective route is therefore not one strategy pursued indefinitely but a sequence, with export markets used to build capacity that domestic demand can later employ.',
      ],
    ],
    'Export-led growth is the most effective route for a developing economy whose domestic market is too small to support efficient scale and which lacks the foreign exchange to import the capital it needs, and the east Asian record is strong evidence that it can work. But its effectiveness is conditional rather than general: it depends on exporting goods whose demand and prices rise with world income rather than primary commodities, on the government building the education and infrastructure that let domestic firms absorb foreign technology, and on external conditions remaining open. Because it also creates dependence on demand generated abroad, it is best understood as the most effective STARTING route, to be broadened into domestic demand as the economy develops, rather than as a permanent strategy.',
    [
      'Definition of export-led growth and the alternatives (import substitution, domestic demand, resource extraction)',
      'Small domestic markets: exporting allows efficient scale and relieves the foreign exchange constraint',
      'Diagram: export demand raising AD and real output',
      'Supply-side effects: competitive discipline, FDI, technology and management transfer shifting LRAS',
      'Evidence: South Korea, Taiwan and China moving up the income scale through manufactured exports',
    ],
    [
      'Depends on what is exported - commodities face volatile prices and low income elasticity',
      'FDI benefits are not automatic; enclave investment transfers little, and low-wage competition has no upward path',
      'Creates dependence on foreign demand, protectionism and exchange rates the country does not control',
      'Judgement: the most effective starting route, conditional on sector choice and complementary domestic policy',
    ],
  ),

  /* ------------------------------ The Trade (Business) Cycle (2.5.3) */
  Q147: A(
    [['output-gap', 'Actual output oscillating around the long-term trend rate of growth. A boom is the phase where actual output runs ABOVE trend - a positive output gap - which is the single diagram that defines what a boom is and separates it from ordinary growth.']],
    'The trade (business) cycle is the tendency of actual output to fluctuate around the long-term trend rate of growth. A boom is the phase in which actual output is above that trend, producing a positive output gap, and it has a recognisable set of characteristics.',
    [
      [
        'The first characteristic is that output is above the trend rate and spare capacity has been used up. Unemployment falls to low levels, approaching the natural rate, since firms expanding output have drawn in the workers who were previously unemployed; vacancies become hard to fill and firms report shortages of skilled labour. The UK in 2022 showed this unusually clearly, with the number of vacancies exceeding the number of unemployed for the first time on record. Capital is worked close to its limit too, with factories running at high rates of capacity utilisation. Because the economy is operating beyond its sustainable level, the positive output gap is by definition temporary.',
        'How far unemployment falls depends on how flexible the labour market is: an economy with significant occupational and geographical immobility hits skill shortages, and therefore wage pressure, at a higher rate of unemployment than a more mobile one, so the same size of boom produces different labour market outcomes in different economies.',
      ],
      [
        'The second characteristic is inflationary pressure. With demand running ahead of the economy’s capacity to supply, firms facing full order books raise prices rather than output, producing demand-pull inflation; at the same time competition for scarce labour bids up wages, which raises firms’ costs and adds a cost-push element. Confidence is high, so consumption and investment both rise and borrowing expands, which reinforces the pressure. The current account typically deteriorates as well, since strong domestic demand pulls in imports while domestic producers, already at capacity, cannot easily expand exports.',
        'The strength of the inflationary effect depends on how the central bank responds and on how close to capacity the economy actually is, which is difficult to judge at the time. Output gaps are measured against an estimated trend that is itself uncertain, so a boom is often only confidently identified after it has ended.',
      ],
    ],
    null,
    [
      'Definition of the trade (business) cycle as fluctuation of actual output around the trend rate',
      'Definition of a boom as a positive output gap: actual output above trend',
      'Diagram showing actual output above the long-term trend line',
      'Characteristic 1: spare capacity used up, low unemployment, skill shortages, high capacity utilisation',
      'Characteristic 2: demand-pull and cost-push inflationary pressure; high confidence; current account deterioration',
    ],
    [
      'The fall in unemployment depends on labour market flexibility and the degree of immobility',
      'Output gaps are measured against an uncertain estimated trend, so a boom is hard to identify in real time',
    ],
  ),

  Q148: A(
    [['output-gap', 'Actual output fluctuating around trend, with the negative gap of a recession and the positive gap of a boom marked. Policy that smooths the cycle is policy that reduces the AMPLITUDE of these swings - bringing actual output closer to the trend line in both directions, rather than raising the trend itself.']],
    'The trade cycle is the fluctuation of actual output around its long-term trend. Smoothing it means reducing the amplitude of those swings - a shallower recession and a less overheated boom - rather than raising the trend rate of growth itself. Governments attempt this through fiscal and monetary policy, both of which work on aggregate demand, but each faces limits that stop the smoothing being complete.',
    [
      [
        'Some smoothing happens without any decision being taken at all, through automatic stabilisers. As output falls in a recession, incomes fall, so receipts from income tax and VAT fall automatically while spending on unemployment-related benefits automatically rises - the budget moves towards deficit and supports demand without any new legislation. In a boom the same mechanism works in reverse: a progressive tax system takes a rising share of rising incomes and benefit spending falls, withdrawing demand as the economy overheats. Because these operate immediately and without political decision, they avoid the delays that discretionary policy suffers from, and they are the most reliable smoothing mechanism a government has.',
        'Their strength depends on the size of the state and the progressivity of the tax system: an economy with low taxes and limited welfare provision has weak automatic stabilisers, so a larger share of the smoothing must come from discretionary policy, with all of the timing problems that brings. They also dampen rather than remove fluctuations, since they respond to changes in income rather than anticipating them.',
      ],
      [
        'Discretionary demand management can add to this. Monetary policy is the main instrument in normal conditions: a central bank cutting interest rates in a downturn lowers the cost of borrowing, raises consumption and investment and depreciates the currency, all of which raise aggregate demand, and raises rates in a boom to restrain it. Interest rates can be changed quickly and reversed easily, which suits the task. Fiscal policy can be used directly too, with the furlough scheme during the 2020 pandemic a clear case of government spending deliberately holding up incomes through a collapse in output that no interest rate cut could have addressed.',
        'Discretionary policy faces the recognition, implementation and impact lags that make smoothing genuinely difficult: data identifying a turning point arrives months late, infrastructure spending takes years to deliver, and a monetary policy change is usually said to take up to two years to have its full effect. Policy aimed at a recession can therefore arrive during the recovery and amplify the next boom instead - destabilising the cycle rather than smoothing it. Monetary policy also loses traction near the zero lower bound, which is why quantitative easing was needed after 2008, and fiscal policy is constrained when debt is already high.',
      ],
      [
        'How much smoothing is possible also depends on what is causing the fluctuation. A cycle driven by swings in domestic demand and confidence is exactly what demand management is designed for. A supply shock is not: the energy price rises after 2022 pushed inflation up and output down simultaneously, so a central bank raising rates to control inflation was deepening the downturn, and one cutting rates to support output was worsening inflation. There is no setting of a demand-side instrument that smooths both at once, which is a genuine limit rather than a failure of execution.',
        'This points to supply-side and structural measures as the complement rather than the alternative: financial regulation that limits the credit booms behind the most severe cycles, and diversification that reduces exposure to a shock in any one sector, both reduce the amplitude of the cycle before demand management has to respond to it. The 2008 crisis is the case in point, since it originated in financial conditions that regulation could have restrained more cheaply than the fiscal response that followed.',
      ],
    ],
    'Government policy can smooth the trade cycle to a significant but incomplete extent. Automatic stabilisers do so reliably and without delay, and discretionary monetary and fiscal policy can add to them, as the furlough scheme showed in a downturn severe enough that nothing else would have worked. The limits are real, though: lags mean discretionary policy can arrive late enough to amplify the next phase rather than damp the current one, monetary policy weakens at the zero lower bound, and no demand-side instrument can smooth a supply shock that moves output and inflation in opposite directions. The extent of smoothing therefore depends on the source of the fluctuation and on the strength of the automatic stabilisers already in place, and the most effective approach combines them with structural measures that reduce the amplitude of the cycle in the first place.',
    [
      'Definition of the trade cycle and of smoothing as reducing amplitude, not raising the trend',
      'Diagram: actual output fluctuating around trend, with negative and positive output gaps',
      'Automatic stabilisers: tax receipts and benefit spending moving counter-cyclically without decision',
      'Discretionary monetary policy: interest rates raising or restraining AD; quantitative easing at the lower bound',
      'Discretionary fiscal policy: the furlough scheme in 2020 as direct income support through a collapse in output',
    ],
    [
      'Automatic stabilisers depend on the size of the state and tax progressivity; they dampen rather than remove',
      'Recognition, implementation and impact lags can make discretionary policy pro-cyclical',
      'Demand-side policy cannot smooth a supply shock that raises inflation and lowers output together',
      'Judgement: significant but incomplete smoothing, depending on the source of the shock and on structural measures',
    ],
  ),

  /* ------------------------------------------ Public Expenditure (4.5.1) */
  Q153: A(
    [],
    'Public expenditure is total government spending. The specification divides it three ways, and the distinction matters because the three categories have quite different effects on the economy’s productive capacity.',
    [
      [
        'Capital expenditure is spending on assets that will deliver a stream of services over many years: building a hospital, a railway or a school, or buying equipment that lasts. It adds directly to the economy’s stock of physical capital and therefore to its productive capacity, shifting long-run aggregate supply outward. Current expenditure, by contrast, is spending on the day-to-day running of public services - salaries for nurses and teachers, the medicines a hospital uses, the maintenance of an existing road - and it is consumed within the year in which it is spent rather than creating a lasting asset. Both are genuine government spending and both count as an injection into the circular flow.',
        'The line between them is less clean than it looks in the accounts. Spending classified as current, such as teachers’ salaries, builds human capital that raises productive capacity just as surely as a new building does, while a capital project that is poorly chosen adds an asset without adding capacity. The classification follows whether a physical asset results, not whether the spending raises the economy’s potential output, and those two things do not always coincide.',
      ],
      [
        'Transfer payments are different in kind from both. They are payments from the government to individuals for which no good or service is received in return - the state pension, Universal Credit, child benefit. Because nothing is produced in exchange, they are NOT counted in government spending in the national income accounts and do not directly add to aggregate demand as G. They redistribute purchasing power from taxpayers to recipients rather than creating output, and their effect on aggregate demand is indirect, coming through the consumption of those who receive them.',
        'That indirect effect can nonetheless be large, because recipients of transfers typically have a high marginal propensity to consume: money transferred to a low-income household is largely spent rather than saved, so the multiplier on a transfer payment can exceed that on some direct government spending. Transfers also act as automatic stabilisers, rising in a downturn without any decision being taken, which is a role neither capital nor current spending performs automatically.',
      ],
    ],
    null,
    [
      'Definition of public expenditure and the three-way distinction',
      'Capital expenditure: assets delivering services over many years, adding to productive capacity and shifting LRAS',
      'Current expenditure: day-to-day running of services, consumed within the year',
      'Transfer payments: payments with no good or service received in return, excluded from G in the national accounts',
      'Transfers redistribute purchasing power; their effect on AD is indirect, through recipients’ consumption',
    ],
    [
      'The capital/current line follows whether a physical asset results, not whether capacity rises - current spending on teachers builds human capital too',
      'Transfers can have a large multiplier because recipients have a high marginal propensity to consume, and act as automatic stabilisers',
    ],
  ),

  Q154: A(
    [['lras-shift', 'Long-run aggregate supply shifting right as public investment in infrastructure, education and health raises the economy’s productive capacity. Pair it with the point that the same spending has to be financed, so the diagram shows the potential benefit and the essay supplies the cost.']],
    'Public expenditure as a proportion of GDP measures the share of national output passing through government. A sustained rise in that share can raise productivity and growth where the spending addresses genuine gaps the market leaves, or reduce them where it displaces more productive private activity or requires distortionary taxation to fund. Which effect dominates depends on what the money is spent on and how it is financed.',
    [
      [
        'The case for a rising share rests on the things the market under-provides. Infrastructure, education, health and basic research all have long payback periods, diffuse benefits or positive externalities that stop private investors funding them at the socially optimal level, and government spending on them raises the quantity and quality of the factors of production - shifting LRAS outward and raising the sustainable rate of growth. A healthier, better-educated workforce is more productive; a functioning transport network lowers costs for every firm using it. The evidence broadly supports this at lower levels of provision: economies with weak infrastructure and low educational attainment see high returns from public investment in both.',
        'These returns depend entirely on the COMPOSITION of the spending, not its level. A rise in the public expenditure share driven by capital investment in infrastructure and skills has a plausible productivity effect; one driven by rising transfer payments to an ageing population, or by the interest bill on accumulated debt, has very little, since neither adds to productive capacity. Much of the observed long-run rise in public spending shares across developed economies has been of the second kind, which is why the level alone predicts so little.',
      ],
      [
        'Against this, the spending has to be financed, and both routes carry costs. Funding through taxation reduces the private return to working, saving and investing: higher marginal income tax weakens work incentives, higher corporation tax lowers the after-tax return on investment, and the resulting distortions represent a real efficiency loss. Funding through borrowing risks crowding out, where government demand for loanable funds raises interest rates and displaces private investment that would itself have raised capacity, so the net effect on productive capacity may be far smaller than the gross spending suggests, or negative if the displaced private investment was more productive than the public spending replacing it.',
        'How strong crowding out actually is depends on the state of the economy. With substantial spare capacity and interest rates at the lower bound, as after 2008 and during 2020, there is little private investment to crowd out and government borrowing can raise output without displacing anything - the argument for the fiscal response in both episodes. Near full capacity the constraint binds and crowding out is a genuine risk. The same rise in the spending share therefore has opposite effects depending on where in the cycle it happens.',
      ],
      [
        'There is also a plausible non-linearity in the relationship. At low levels of public spending, the state is not providing the basic public goods, rule of law and infrastructure that markets need to function, so raising the share improves growth substantially. Beyond some point the marginal project is worth less while the marginal tax needed to fund it distorts more, so further increases reduce growth. This would explain why both very small and very large public sectors are associated with weaker performance, and why the Nordic economies sustain high spending shares alongside strong productivity - their spending is concentrated on education, childcare and active labour market policy, which raise participation and capacity, rather than being large for its own sake.',
        'The location of that turning point is contested and not reliably measurable, and the correlation is hard to read causally: a rising public spending share can be the CONSEQUENCE of weak growth rather than its cause, since a recession raises welfare spending while shrinking GDP, which mechanically raises the ratio without any policy decision. Studies disagree on the threshold partly because they are measuring different compositions of spending under the same headline number.',
      ],
    ],
    'A sustained rise in public expenditure as a proportion of GDP is significant for productivity and growth, but the direction of the effect depends on composition and financing rather than on the level itself. Where the increase funds capital investment in infrastructure, education and health that the market under-provides, it raises productive capacity and shifts LRAS outward, and the Nordic economies show a high spending share coexisting with strong productivity when it is composed that way. Where it funds transfers, debt interest or poorly chosen projects, and is financed by distortionary taxation or by borrowing near full capacity, it can displace more productive private activity and lower growth. The most defensible judgement is that the headline ratio is close to uninformative on its own: what matters is whether the marginal pound is buying capacity or consumption, and whether the economy has the spare capacity to absorb the borrowing that funds it.',
    [
      'Definition of public expenditure as a proportion of GDP',
      'The case for: infrastructure, education, health and research the market under-provides; LRAS shifting right',
      'Diagram showing public investment raising productive capacity',
      'Financing through taxation: distortion of work, saving and investment incentives',
      'Financing through borrowing: crowding out of private investment',
      'Non-linearity: low spending shares under-provide public goods, high ones face diminishing returns and rising distortion',
    ],
    [
      'Composition matters far more than level - capital investment against transfers and debt interest',
      'Crowding out depends on spare capacity; it is weak at the lower bound, as after 2008 and in 2020',
      'The turning point is contested and hard to measure; studies differ because compositions differ',
      'Reverse causation: a recession raises the ratio mechanically without any policy decision',
      'Judgement: the headline ratio is close to uninformative; composition and financing determine the effect',
    ],
  ),
  /* ------------------------------------- The Role of Central Banks (4.4.3) */
  Q169: A(
    [],
    'A central bank is the institution at the centre of a country\u2019s financial system. Its best-known role is the operation of monetary policy - setting interest rates and, since 2009, conducting quantitative easing - but the specification lists three other functions: banker to the government, banker to the banks including acting as lender of last resort, and regulation of the banking industry. Two of these are explained here.',
    [
      [
        'The first is acting as banker to the banks and, when necessary, lender of last resort. Commercial banks hold accounts at the central bank through which payments between them are settled, and they can borrow from it against collateral when they cannot borrow elsewhere. A bank is solvent but illiquid when its assets exceed its liabilities but are tied up in long-term loans while its depositors want cash now; without a lender of last resort, a rumour alone can cause a run, because each depositor knows the bank cannot pay everyone at once and rushes to be paid first. By standing ready to lend to a solvent bank at a penalty rate against good collateral, the central bank removes the reason for the run. The Bank of England performed this role for Northern Rock in 2007 and, on a system-wide scale, through its emergency liquidity schemes in 2008.',
        'The function is only stabilising if the central bank can tell an illiquid bank from an insolvent one, which in a crisis it often cannot. Lending to a bank that is actually insolvent delays its failure and enlarges the eventual loss, and the knowledge that support exists can encourage banks to hold less liquidity and take more risk in the first place - the moral hazard that regulation then has to counter.',
      ],
      [
        'The second is acting as banker to the government. The central bank holds the government\u2019s main accounts, through which tax receipts arrive and public spending is paid out, and it manages the issue of government debt, arranging the sale of gilts to finance the budget deficit and handling their redemption. It also holds and manages the country\u2019s foreign exchange reserves on the government\u2019s behalf, which is what it draws on if it intervenes in the currency market. Keeping these functions in an institution that is operationally independent of the Treasury matters, because a central bank that simply printed money to cover the government\u2019s deficits would be unable to control inflation.',
        'The line between banker to the government and financing the government is thinner than the arrangement suggests. Quantitative easing has involved the Bank of England buying a large share of the gilts the government issued to fund its deficits, and although the purchases are made in the secondary market for monetary policy reasons, the effect on the government\u2019s borrowing costs is the same as if it had lent directly, which is why the independence of the two roles is contested.',
      ],
    ],
    null,
    [
      'The four functions in the specification, with monetary policy set aside',
      'Banker to the banks: settlement accounts; lender of last resort to a solvent but illiquid bank at a penalty rate',
      'Why the function prevents runs; Northern Rock and the 2008 liquidity schemes',
      'Banker to the government: holding its accounts, managing gilt issuance, holding the foreign exchange reserves',
      'Why operational independence from the Treasury matters for inflation control',
    ],
    [
      'Distinguishing illiquidity from insolvency in a crisis; moral hazard',
      'Quantitative easing blurs the line between banking for the government and financing it',
    ],
  ),

  Q170: A(
    [],
    'A lender of last resort is a central bank that will lend to a bank which is solvent but cannot borrow elsewhere, against good collateral and usually at a penalty rate. The function exists because banking is inherently fragile: banks lend long and borrow short, so even a sound bank cannot pay all its depositors at once, and a loss of confidence can become self-fulfilling. Whether the function benefits the economy depends on whether the stability it provides outweighs the risk-taking it invites.',
    [
      [
        'The benefit is the prevention of contagion. A run on one bank, even an unjustified one, forces it to sell assets quickly and at a loss, which weakens other banks holding the same assets and gives their depositors reason to run too; a single failure can become a collapse of the payments system on which every transaction in the economy depends. By lending to a solvent bank against its assets, the central bank removes the reason to run - depositors who know they can be paid do not need to be first in the queue - and stops the failure spreading. The absence of a lender of last resort was a large part of why bank failures in the United States in the early 1930s turned a recession into the Great Depression, and the presence of one is why the queues outside Northern Rock in 2007 ended within days once the Bank of England\u2019s support was announced.',
        'The function protects the system, not the bank: a properly run lender of last resort lends only to institutions that are solvent, against collateral, at a rate that makes the borrowing costly. Where it lends to an insolvent bank it is not preventing contagion but delaying and enlarging a failure, and the difficulty is that in a crisis the two cases are hard to tell apart quickly, and the pressure is always to lend first and ask afterwards.',
      ],
      [
        'The cost is moral hazard. A bank that knows it will be lent to if it runs short of liquidity has less reason to hold liquid assets itself, and one that expects to be rescued if it fails has more reason to take risks whose upside it keeps and whose downside the central bank absorbs. The larger and more interconnected the bank, the stronger the expectation, because the central bank cannot let it fail without the contagion the function exists to prevent - "too big to fail" is the lender of last resort taken to its conclusion. The behaviour of banks before 2008, funding long-term lending with very short-term borrowing on the assumption that liquidity would always be available, is the standard evidence, and the support that followed confirmed the assumption.',
        'Moral hazard is an argument for the terms on which the function is exercised, not against the function. Penalty rates, collateral requirements, the possibility that shareholders and management are wiped out even when depositors are protected, and the regulatory requirements on capital and liquidity introduced since 2008 are all designed to keep the insurance while removing the incentive to rely on it. Whether they succeed is an empirical question, and the rescues of 2023 - Silicon Valley Bank in the United States, Credit Suisse in Switzerland - suggest the expectation of support survived the reforms.',
      ],
      [
        'The wider effects run through the public finances and monetary policy. Emergency lending puts public money at risk, and where support extends beyond liquidity into capital - as with the UK government\u2019s stakes in RBS and Lloyds in 2008 - the taxpayer becomes a shareholder in a failed bank, with losses that ran to tens of billions of pounds in the RBS case. Large-scale liquidity provision also expands the money supply and can conflict with the central bank\u2019s inflation objective, and a central bank that is seen as the guarantor of the banking system may find it harder to raise interest rates when that would expose weak banks.',
        'Against this, the cost of not acting is a financial collapse whose fiscal and output costs dwarf those of the rescue: the fall in UK output after 2008 was of the order of 6% and the deficit that followed was driven far more by the recession than by the bank support, much of which was later recovered as the stakes were sold. The function is expensive only in comparison with a world in which the crisis did not happen, which is not the relevant comparison.',
      ],
    ],
    'A central bank acting as lender of last resort is beneficial to an economy to a large extent, because the alternative - allowing a loss of confidence in one bank to become a collapse of the payments system - carries costs of a different order, as the 1930s showed in the absence of the function and 2008 in its presence. The benefit is conditional on how it is exercised: lending only to solvent banks, against collateral and at a cost, so that the function protects the system rather than the bank. Its cost, moral hazard, is real and the behaviour of banks before 2008 and the rescues of 2023 both show it, but it is a reason to attach conditions and regulation to the function rather than to withdraw it. The extent of the benefit therefore depends on the credibility of the terms: a lender of last resort that banks expect to rescue them on any terms invites the crises it exists to end, while one that lends on strict terms is close to a pure gain.',
    [
      'Definition: lending to a solvent but illiquid bank against collateral at a penalty rate',
      'Why banking is fragile: lending long, borrowing short; self-fulfilling runs',
      'Prevention of contagion and protection of the payments system; the 1930s and Northern Rock',
      'Moral hazard: less liquidity held, more risk taken; too big to fail',
      'Fiscal and monetary consequences: RBS and Lloyds stakes; money supply; constraints on rate rises',
    ],
    [
      'Illiquid against insolvent is hard to judge under pressure; lending to an insolvent bank enlarges the loss',
      'Moral hazard is an argument about terms, not against the function; the 2023 rescues as evidence it persists',
      'The cost of acting is small against the cost of a collapse; much support was later recovered',
      'Judgement: largely beneficial, conditional on credible terms',
    ],
  ),

  /* --------------------------------------------------- Taxation (4.5.2) */
  Q171: A(
    [['laffer', 'Tax revenue against the tax rate, rising to a maximum at T* and falling beyond it. The question is which side of T* the economy starts on: a cut from above T* raises revenue, a cut from below it lowers revenue. The diagram makes the answer depend on the starting point, which is the whole point of the curve.']],
    'Income tax is a direct tax on earnings. A cut in its rate raises the after-tax reward for an extra hour of work, which is the incentive effect, and changes the revenue the tax raises, which the Laffer curve is designed to show. The two are connected: what happens to revenue depends partly on how far the incentive effect changes the amount of income that is taxed.',
    [
      [
        'A cut in the income tax rate raises the take-home pay from an additional hour of work, so the opportunity cost of leisure rises and the substitution effect encourages people to work more - to take a job, work longer hours, seek promotion or stay in the labour force rather than retire. The effect is strongest where the previous rate was high enough to make additional work barely worthwhile, which is the argument made for cutting the UK\u2019s top rate from 60% to 40% in 1988 and, more recently, for reducing the high effective marginal rates that arise where benefit withdrawal and tax combine. A stronger incentive to work raises the supply of labour, which is a supply-side effect on the economy\u2019s capacity.',
        'The substitution effect is not the only one. A tax cut also raises income at every hour already worked, and the income effect of being better off can lead people to work less, buying more leisure with the extra income. Which dominates is an empirical question that differs by group: for second earners and the low paid the substitution effect tends to be strong, while for high earners already working full time the response is small, and much of the observed response to tax changes at the top is people changing when and how income is declared rather than how much work is done.',
      ],
      [
        'The effect on revenue is what the Laffer curve shows. Tax revenue is the rate multiplied by the base, and the base - taxable income - responds to the rate. At a zero rate revenue is zero; at a 100% rate nobody works for taxable income and revenue is zero again; between them revenue rises to a maximum at some rate T* and then falls. A cut from a rate above T* raises revenue, because the increase in the taxed base - more work, less avoidance, less emigration of high earners - outweighs the lower rate on each pound; a cut from below T* lowers revenue, because the base rises by less than the rate falls. The argument for the 1988 cut was that the top rate stood above T*, and the top 1% did go on to pay a larger share of total income tax, though how much of that reflected the cut rather than rising top incomes is disputed.',
        'The position of T* is not known and is almost certainly different for different taxes and groups, so the curve settles the logic but not the answer. Most estimates put the revenue-maximising top rate for the UK somewhere between 40% and 60%, which means a cut from the current 45% rate could plausibly lower or raise revenue depending on the estimate used. For the basic rate, which the great majority of taxpayers face and which is well below any estimate of T*, a cut unambiguously lowers revenue, and any claim that it pays for itself is not supported.',
      ],
    ],
    null,
    [
      'Income tax as a direct tax; a cut raises after-tax pay from an extra hour',
      'Substitution effect: higher opportunity cost of leisure, more labour supplied; the 1988 top-rate cut',
      'Laffer curve: revenue = rate x base, base responds to rate, maximum at T*, with a diagram',
      'A cut above T* raises revenue through a larger base; a cut below T* lowers it',
    ],
    [
      'The income effect works the other way; responses differ by group and are partly about declaration, not work',
      'T* is unknown and differs by tax; the basic rate is well below it, so a cut there lowers revenue',
    ],
  ),

  Q172: A(
    [
      ['ad-shift', 'A cut in corporation tax raising the after-tax return on investment: the \u2191I in the label shifts AD\u2081 to AD\u2082, output Y\u2081 to Y\u2082. The demand-side half of the effect, arriving first.'],
      ['lras-shift', 'The supply-side half: if the extra investment adds to the capital stock, LRAS\u2081 shifts to LRAS\u2082 and capacity rises Y\u2081 to Y\u2082. This is the effect the policy is meant to have, and the one that takes longest and is least certain.'],
    ],
    'Corporation tax is a direct tax on company profits. A significant cut raises the after-tax return on investment and the retained profit available to fund it, and it changes the attractiveness of the country to foreign direct investment. The UK cut its main rate from 28% in 2010 to 19% by 2017, then raised it back to 25% in 2023, which provides a recent test of both directions. The effects run through investment and capacity, through the public finances, and through the distribution of income, and they depend heavily on what else determines investment.',
    [
      [
        'The intended effect is on investment. A lower rate raises the after-tax return on any project, so projects that previously fell just short of a firm\u2019s required return now clear it, and investment rises; the rise in I shifts aggregate demand right, raising output and employment in the short run, and if the investment adds to the capital stock it shifts long-run aggregate supply right as well, raising productive capacity and the sustainable rate of growth. A lower rate also attracts foreign direct investment, since a multinational choosing where to locate a plant or declare profit compares after-tax returns across countries; Ireland\u2019s 12.5% rate and the investment it drew from American technology and pharmaceutical firms is the standard case, and part of the argument for the UK cuts was to compete for the same capital.',
        'Investment depends on expected demand, confidence and the cost of finance at least as much as on the tax rate, and the UK evidence is unhelpful to the policy: business investment as a share of GDP stayed among the lowest in the G7 through the years the rate was falling to 19%, and the OBR found little evidence that the cuts raised it. FDI is also sensitive to the tax base and to the availability of skilled labour, infrastructure and market access, so a low headline rate attracts declared profit more reliably than it attracts plants, which raises the revenue of the host country without raising its capacity.',
      ],
      [
        'The effect on the public finances is direct and immediate. Corporation tax raises around a tenth of UK receipts, so a significant cut costs several billion pounds a year at once, and the Laffer argument that a larger base recovers the loss holds only if the rate started above the revenue-maximising level, which the international evidence puts well above the rates the UK has used. The shortfall has to be met by higher borrowing, higher other taxes or lower spending, each with costs of its own, and the choice is distributional: a corporation tax cut benefits shareholders, who are disproportionately better off, so if it is funded by cutting spending or raising indirect taxes the net effect is regressive.',
        'Who finally bears corporation tax is contested. Part of its burden falls on workers through lower wages and part on consumers through higher prices, because capital is mobile and labour is not, so a cut does not accrue only to shareholders and some of it reaches wages over time. The revenue cost is also partly offset if the cut does raise investment and profits, and the base broadened alongside the UK cuts - fewer allowances, stricter rules on interest deduction - which is why receipts held up better than the fall in the rate alone would have predicted.',
      ],
      [
        'The wider macroeconomic effects follow from investment. Higher investment raises productivity and wages over time, and where it improves the competitiveness of exporters it strengthens the trade balance; a country that attracts FDI also gains the technology and management practice that comes with it. But the effects on the price level and the trade balance in the short run can go the other way: a cut that raises demand faster than capacity adds to inflationary pressure, and higher investment draws in imported capital goods before any export gain appears, so the trade balance worsens first.',
        'The scale of every effect depends on the size of the cut relative to what competitors do. A tax cut that other countries match, as they did through the 2010s in a general downward competition, changes relative attractiveness not at all and simply lowers everyone\u2019s revenue - the reason for the international agreement on a 15% minimum rate from 2021. The counterfactual of the same money spent on infrastructure or skills, which raise capacity directly rather than through a hoped-for private response, is the comparison the policy has to survive, and the reversal to 25% in 2023 suggests the UK government judged that it had not.',
      ],
    ],
    'A significant cut in corporation tax has a clear theoretical effect - a higher after-tax return raising investment and attracting FDI, shifting both aggregate demand and, if capacity is built, long-run aggregate supply - and a much less clear actual one. The UK\u2019s cut from 28% to 19% is the relevant evidence, and it did not produce the rise in business investment that justified it, because investment depends on demand, confidence and finance more than on the tax rate and because a low headline rate attracts declared profit more readily than plants. The revenue cost is immediate and certain, the incidence is partly regressive, and a cut that competitors match changes nothing but the revenue. The likely effects are therefore a small and uncertain gain to investment and competitiveness against a large and certain cost to the public finances, and the balance depends on whether the rate was high enough relative to competitors for the cut to change decisions - which the reversal to 25% in 2023 suggests it was not.',
    [
      'Corporation tax as a direct tax on profits; the UK rate from 28% to 19% and back to 25%',
      'Higher after-tax return raising investment: AD and, if capacity is built, LRAS, with diagrams',
      'FDI: comparing after-tax returns across countries; Ireland',
      'Revenue cost: a tenth of receipts; the Laffer condition; how the shortfall is funded',
      'Incidence and distribution: shareholders, workers, consumers',
      'Trade balance, price level and competitiveness effects',
    ],
    [
      'Investment depends on demand, confidence and finance; UK business investment did not respond',
      'A low rate attracts declared profit more reliably than plants',
      'Base broadening and incidence on workers offset part of the cost and the regressive effect',
      'A cut matched by competitors changes nothing; the 15% global minimum',
      'Judgement: small, uncertain gain against large, certain cost; depends on the rate relative to competitors',
    ],
  ),
  /* ------------------------------------- Public Sector Finances (4.5.3) */
  Q173: A(
    [['output-gap', 'Actual output falling below trend into the recession phase. The cyclical part of the deficit is the mirror image of that gap: receipts fall and benefit spending rises as output drops below trend, with no change in policy at all. The diagram separates this from the structural part, which would remain even at trend.']],
    'A fiscal deficit is the amount by which government spending exceeds revenue in a year. Its size is not simply a policy choice: it moves with the economic cycle through the automatic stabilisers, and with slower-moving pressures on spending and revenue that a government does not control year to year. Two factors are explained here, one cyclical and one structural.',
    [
      [
        'The first factor is a downturn in the economic cycle. As actual output falls below trend into a negative output gap, tax receipts fall automatically - less income is earned so income tax and National Insurance fall, less is spent so VAT falls, and profits fall so corporation tax falls - while spending on unemployment-related benefits rises as people lose work. Neither requires a decision; these are the automatic stabilisers, and they widen the deficit in a recession by design, since the extra borrowing supports demand when it is weakest. The effect is large: the UK deficit rose from around 3% of GDP before 2008 to over 10% by 2009-10, most of it from the collapse in receipts, and again in 2020 when the pandemic cut output and the furlough scheme added discretionary spending on top.',
        'This part of the deficit is cyclical and should reverse as output returns to trend, so it is a weaker cause for concern than a deficit of the same size in a boom. The difficulty is that the size of the output gap, and therefore the split between cyclical and structural, cannot be observed directly and is often revised years later - after 2008 much of what had been treated as cyclical turned out to be structural, because the pre-crisis level of receipts from the financial sector never returned.',
      ],
      [
        'The second factor is a structural rise in spending commitments relative to the tax base, of which an ageing population is the clearest case. As the share of the population above retirement age rises, spending on the state pension, health care and social care rises with it, while the share of the population of working age - which pays most of the tax - shrinks. This raises the deficit at any given level of output and any given tax rates, so it does not reverse with the cycle; the OBR projects that health and pension spending alone will add several percentage points of GDP to public spending over the coming decades on unchanged policy. Rising debt interest works the same way: once the debt is large, a rise in interest rates raises the deficit directly, which is what happened to the UK after 2022, when debt interest rose above £100 billion a year.',
        'A structural deficit of this kind can only be closed by a decision - higher taxes, lower spending or a later retirement age - and each carries a political cost that governments defer, which is why structural deficits persist. Whether it should be closed at all depends on what the borrowing funds: a deficit that finances investment in capacity is different in kind from one that finances current consumption, even if the two look identical in the accounts.',
      ],
    ],
    null,
    [
      'Definition of a fiscal deficit; the distinction between cyclical and structural causes',
      'Factor 1: the cycle - receipts fall and benefit spending rises automatically in a negative output gap, with a diagram',
      'The automatic stabilisers; the UK deficit after 2008 and in 2020',
      'Factor 2: structural pressure - an ageing population raising pension and health spending while the tax base shrinks',
      'Debt interest as a structural driver once the debt is large; the UK after 2022',
    ],
    [
      'The cyclical part should reverse, but the split between cyclical and structural is unobservable and revised',
      'A structural deficit closes only by decision; whether it should depends on what the borrowing funds',
    ],
  ),

  Q174: A(
    [
      ['output-gap', 'Actual output around trend. The structural deficit is the part that would remain with output AT trend; the cyclical part is the mirror of the gap. Eliminating the structural deficit means removing the first without waiting for the second to close on its own.'],
      ['ad-shift', 'Fiscal consolidation read in reverse: AD\u2082 back to AD\u2081, output Y\u2082 to Y\u2081. The cost of closing the deficit through demand, and why it depends on where the economy sits relative to Yf when the consolidation happens.'],
    ],
    'A structural fiscal deficit is the part of the deficit that would remain if output were at its trend level - the part not explained by the economic cycle. Because it does not close on its own, a government that wants to stop the national debt rising as a share of GDP has, in the end, to remove it. The question is whether eliminating it should be the aim, or whether a government should tolerate a structural deficit for what it funds and for the cost of removing it.',
    [
      [
        'The case for eliminating it is arithmetic. A structural deficit means the debt rises as a share of GDP every year even when the economy is at capacity, and a rising debt ratio raises the interest bill, which is itself part of the deficit, so the position compounds. Debt interest in the UK has exceeded £100 billion a year since 2022, more than the budget of most departments, and every pound of it is a pound not available for services or tax cuts. A persistent structural deficit also leaves no room for the cyclical borrowing a recession requires, so the automatic stabilisers cannot work when they are needed, and it exposes the government to the loss of confidence that raises borrowing costs suddenly - September 2022 showed how quickly gilt yields respond to unfunded commitments. On this view the structural deficit should be eliminated and the cyclical deficit allowed to move around zero, which is the principle behind most fiscal rules.',
        'The arithmetic depends on the relationship between the interest rate and the growth rate. If the economy grows faster than the interest rate on its debt, a modest structural deficit is consistent with a stable or falling debt ratio, because the denominator grows faster than the numerator; through the 2010s that condition held and the debt ratio would have fallen with a deficit of around 2% of GDP. The case for elimination is strongest when the interest rate exceeds growth - as the effective rate on UK debt has at times since 2022, because a quarter of it is index-linked and inflation pushed that rate up sharply - and weaker when it does not.',
      ],
      [
        'The cost of eliminating it is the demand withdrawn to do so. Closing a structural deficit means raising taxes or cutting spending, which shifts aggregate demand left, and the multiplier on that withdrawal is largest exactly when the economy has spare capacity. The UK consolidation after 2010 is the evidence: the structural deficit was reduced substantially, but with the economy far below capacity and monetary policy already at the lower bound, the withdrawal of demand held back the recovery, and the IMF later concluded that consolidation in that position had cost more output than its models had assumed. Eliminating a structural deficit when output is below trend can therefore lower output enough to raise the cyclical deficit, so the total deficit falls by less than intended and the debt ratio by less still.',
        'That is an argument about timing rather than about the aim. A structural deficit can be eliminated gradually and when the economy is at capacity, when the multiplier is small and monetary policy can offset the demand effect, as the fiscal rules that target the position several years ahead are designed to allow. The objection to the post-2010 consolidation was its pace and timing, not the principle that a structural deficit should eventually close.',
      ],
      [
        'The stronger objection is to treating all borrowing alike. A deficit that funds investment in infrastructure, education or research adds to the economy\u2019s capacity and to future tax revenue, so borrowing to finance it can leave the public finances stronger, not weaker; a government that eliminates its structural deficit by cutting investment - which is politically the easiest spending to cut, because its costs are invisible for years - lowers future growth and with it the future tax base. This is why fiscal rules increasingly distinguish current from capital spending, aiming to balance the current budget while borrowing for investment. On this view the aim should be to eliminate the structural CURRENT deficit, not the structural deficit as a whole.',
        'The distinction is easier to state than to police, since governments have an incentive to reclassify current spending as investment to escape the rule, and not all investment earns a return that covers its borrowing cost. The credibility of a rule depends on an independent body such as the OBR judging the classification, and on the government accepting the judgement, which is the point at which most fiscal rules have historically been amended rather than obeyed.',
      ],
    ],
    'A government should aim to eliminate its structural deficit in the sense that matters: the part of its borrowing that funds current spending, that would persist at full capacity, and that leaves the debt ratio rising and the interest bill compounding. The view is wrong as a blanket rule in three respects. Whether a structural deficit is sustainable depends on the gap between growth and interest rates, so elimination is a necessity when rates exceed growth and a choice when they do not; the cost of eliminating it depends on timing, and doing so with spare capacity and monetary policy at the lower bound, as after 2010, forgoes output for little gain in the debt ratio; and borrowing that funds investment in capacity is not the same as borrowing that funds consumption, so a rule that eliminates both cuts the investment first and weakens the finances it was meant to protect. The defensible aim is a balanced structural current budget, reached gradually and at capacity, with borrowing for investment judged on its return - which is close to where UK fiscal rules have settled, and the question is whether governments keep to them.',
    [
      'Definition of a structural deficit as the deficit at trend output, distinguished from the cyclical deficit, with a diagram',
      'Case for: a rising debt ratio and compounding interest; no room for stabilisers; confidence and gilt yields',
      'The interest-growth differential as the condition for sustainability',
      'Cost of eliminating it: demand withdrawn, the multiplier with spare capacity, with a diagram; the post-2010 consolidation',
      'Current against capital borrowing; balancing the current budget while borrowing for investment',
    ],
    [
      'A structural deficit is consistent with a stable debt ratio when growth exceeds the interest rate',
      'The post-2010 objection is to pace and timing, not to the aim',
      'Cutting investment to close the deficit weakens the future tax base',
      'Reclassification and the credibility of fiscal rules',
      'Judgement: eliminate the structural CURRENT deficit, gradually and at capacity; borrow for investment on its return',
    ],
  ),
  /* -------------------------------------------- Monetary Unions (4.1.5) */
  Q175: A(
    [['fixed-exchange-rate', 'A monetary union is the limiting case of a fixed exchange rate: the peg cannot move at all, and there are no reserves to defend it with because there is no separate currency. When demand for a member\u2019s output falls, the adjustment that D\u2081 to D\u2082 would otherwise force onto the exchange rate has to happen somewhere else - in wages, prices or unemployment.']],
    'A monetary union is a group of countries sharing a single currency and a single central bank, so that exchange rates between them are abolished and one interest rate applies to all. The eurozone is the leading example. Because members give up their own exchange rate and monetary policy, a union works well only where the economies inside it can do without those tools, and the conditions for that are the ones the theory of optimal currency areas identifies.',
    [
      [
        'The first condition is that members experience similar economic shocks, so that a single interest rate suits all of them at once. If one member is in recession while another is booming, the central bank cannot set a rate that is right for both: a rate low enough to help the first fuels inflation in the second, and a rate high enough to restrain the second deepens the recession in the first. Economies with similar structures, trading heavily with one another and moving through the cycle together, avoid this problem; economies that differ in what they produce and export do not. The eurozone\u2019s difficulties after 2008 followed exactly this pattern, with Germany requiring one policy while Greece, Ireland and Spain needed another, and a single rate that was too tight for the periphery.',
        'Shocks become more similar the longer a union lasts, because trade within it deepens and business cycles converge, so this condition is partly created by the union rather than required in advance. It is also partly a matter of the union\u2019s composition: a union of economies that were already integrated meets it at once, while one that admits members on political grounds does not.',
      ],
      [
        'The second condition is that adjustment to a shock can happen without an exchange rate. Outside a union a country whose exports fall lets its currency depreciate, restoring competitiveness at once; inside one it cannot, so competitiveness has to be restored through lower wages and prices, which is slow and painful, or through labour moving from the depressed member to the buoyant one. A successful union therefore needs flexible wages and prices, mobile labour across its members, and a fiscal transfer mechanism through which the union as a whole supports a member in recession, as a national government supports a depressed region. The United States meets these conditions between its states; the eurozone met none of them well after 2008, with wages that fell only slowly, labour mobility limited by language, and a central budget too small to transfer anything meaningful, which is why adjustment in the periphery took the form of years of high unemployment.',
        'Fiscal transfers require the members who pay to accept the obligation, which is a political condition as much as an economic one, and the eurozone\u2019s partial moves towards it since 2010 - the stability mechanism, the pandemic recovery fund - remain contested for that reason. Labour mobility can also drain a depressed member of its most productive workers, so it is a way for individuals to adjust that can leave the member economy weaker.',
      ],
    ],
    null,
    [
      'Definition of a monetary union: single currency, single central bank, one interest rate; the eurozone',
      'Condition 1: similar shocks, so a single interest rate suits all members; the eurozone after 2008',
      'Condition 2: adjustment without an exchange rate - flexible wages and prices, labour mobility, fiscal transfers',
      'Diagram: the union as the limiting fixed exchange rate, with no reserves and no peg to move',
      'The United States as a union that meets the conditions, the eurozone as one that has not',
    ],
    [
      'Business cycles converge inside a union, so the first condition is partly created by membership',
      'Fiscal transfers are politically conditional; labour mobility can weaken the member it leaves',
    ],
  ),

  Q176: A(
    [['fixed-exchange-rate', 'Membership as an irrevocable peg: the exchange rate the diagram shows cannot move, and the central bank that would defend it has been replaced by a shared one. The benefits of the union follow from the peg being certain; the costs follow from there being no way to adjust it.']],
    'Joining a monetary union such as the eurozone means adopting a shared currency and central bank, abolishing the exchange rate with the other members and surrendering an independent monetary policy. The benefits are those of certainty and integration; the costs are those of losing the two instruments a country uses to absorb shocks. Which dominates depends on how well the joining country fits the union - the conditions of an optimal currency area - and on how far its own monetary policy was worth keeping.',
    [
      [
        'The benefits follow from removing the exchange rate. Firms trading within the union no longer face currency risk or the cost of converting and hedging, which lowers transaction costs and encourages trade and investment across the union; prices become directly comparable across borders, which sharpens competition and narrows price differences; and a country with a history of inflation and devaluation imports the credibility of the union\u2019s central bank, which lowers its interest rates and inflation expectations at once. For a small, open economy that trades mostly with the union these gains are large relative to its size, which is why Ireland, the Baltic states and Slovakia joined and why the argument was strongest for economies whose trade was already dominated by the euro area.',
        'The trade gains from the euro have been smaller than expected: estimates of the effect of the single currency on trade among members are modest, and much of the integration attributed to it came from the single market that preceded it. The credibility gain is real but can be borrowed too cheaply - Greece and Spain borrowed at near-German rates for a decade because markets treated euro membership as removing default risk, and the resulting private and public debt was the origin of the crisis that followed.',
      ],
      [
        'The costs are the loss of monetary policy and of the exchange rate. A member cannot set interest rates for its own conditions, so the shared rate may be too loose in its boom - which fed the Irish and Spanish property bubbles before 2008 - and too tight in its recession. It cannot depreciate to restore competitiveness after a shock, so a loss of competitiveness has to be corrected through lower wages and prices, which took the periphery years of unemployment above 20% after 2010, or through migration. And it cannot rely on its own central bank as a lender of last resort to its government, which is why Greece, Portugal and Ireland faced a debt crisis at levels of debt that Japan and the United Kingdom carry without one: they were borrowing in what was effectively a foreign currency.',
        'These costs depend on how much use the country would have made of the instruments it gives up. A country whose cycle already tracks the union\u2019s, whose wages are flexible and whose trade is with the union, loses instruments it rarely needed; a country with a different economic structure loses exactly what it would need most. The costs are also lower than they were, because the union has since built a partial lender of last resort in the ECB\u2019s bond-buying and a partial fiscal capacity, though both remain conditional.',
      ],
      [
        'Whether the balance favours joining depends on the optimal currency area criteria: similarity of shocks, labour mobility, wage flexibility and fiscal transfers. A country that meets them gains the benefits at little cost, because it would not have used its own monetary policy differently anyway; one that fails them takes on the risk of an asymmetric shock it has no tool to absorb. The United Kingdom\u2019s decision not to join was argued on these grounds - a housing market and business cycle that differed from the continent\u2019s, and a larger financial sector - and the experience of the periphery after 2008 has been taken as vindicating it, while the experience of the small open economies that joined and adjusted has been taken as vindicating them.',
        'The criteria are partly endogenous: trade and cycle convergence deepen after joining, so a country that fails them at the point of entry may meet them a decade later. The political dimension also cuts both ways - membership binds a country to a set of fiscal rules and a shared institution it does not control, which is a cost to sovereignty and a benefit to countries whose own institutions were the problem.',
      ],
    ],
    'Joining a monetary union brings lower transaction costs, price transparency, more trade and investment with the other members, and imported monetary credibility, at the cost of the two instruments a country uses to absorb shocks - its interest rate and its exchange rate - and of a central bank that stands behind its government\u2019s debt. The benefits are largest and the costs smallest for a small, open economy whose trade is with the union, whose business cycle moves with it and whose wages and labour are flexible enough to adjust without an exchange rate; they reverse for an economy that differs in structure or cycle, which is what the eurozone periphery discovered after 2008. The judgement therefore depends on how closely the joining country meets the optimal currency area conditions, and on whether the union has the fiscal transfers and lender of last resort that would substitute for the instruments it gives up - which the eurozone has built only partially since the crisis. For a country that fits, joining is a net benefit; for one that does not, the loss of the ability to adjust outweighs the gains from certainty.',
    [
      'Definition: single currency, shared central bank, no exchange rate, no independent monetary policy',
      'Benefits: transaction costs, price transparency, trade and investment, imported credibility; small open economies',
      'Costs: one interest rate for different cycles (Irish and Spanish bubbles); no depreciation (periphery unemployment); no national lender of last resort (Greece against Japan)',
      'Diagram: membership as an irrevocable peg with no reserves and no adjustment',
      'Optimal currency area criteria: similar shocks, labour mobility, wage flexibility, fiscal transfers; the UK decision',
    ],
    [
      'Trade gains have been modest; cheap credibility fed the borrowing that caused the crisis',
      'Costs depend on how much the country would have used the instruments it gives up',
      'The ECB\u2019s bond-buying and the recovery fund have reduced the costs since 2010, conditionally',
      'The criteria are partly endogenous to membership',
      'Judgement: net benefit for a country that fits the criteria, net cost for one that does not',
    ],
  ),
  /* --------------------------------------- Restrictions on Free Trade (4.1.6) */
  Q177: A(
    [['tariff', 'The tariff diagram read as a quota. Fix imports at the gap between Q\u2082 and Q\u2083 and the domestic price rises to the level marked Pw + tariff by the same mechanism; the rectangle marked tariff revenue is now quota rent, kept by whoever holds the import licences rather than by the government. Same welfare loss, different recipient.']],
    'A tariff is a tax on imports. Governments that want to restrict imports without one have three other instruments the specification names: a quota, which limits the quantity that may enter; a subsidy to domestic producers, which lowers their costs so they displace imports; and non-tariff barriers, which raise the cost or difficulty of importing through rules rather than prices. Two are explained here.',
    [
      [
        'A quota is a physical limit on the quantity of a good that may be imported in a period, enforced through import licences. By fixing imports below the free-trade level it creates a shortage at the world price, so the domestic price rises until domestic supply plus the permitted imports equals demand - the same price rise a tariff would produce for the same reduction in imports. Domestic producers expand output along their supply curve and consumers buy less at the higher price, exactly as with a tariff. The difference is where the money goes: the gap between the world price and the higher domestic price on each imported unit, which a tariff would collect as revenue, is captured instead by whoever holds the licences - often the foreign exporters themselves. The Multi-Fibre Arrangement, which limited textile and clothing imports into Europe and the United States by quota until 2005, is the standing example.',
        'Because a quota fixes the quantity, its effect on price depends on what happens to demand: if demand rises, the domestic price rises further while a tariff would have let imports expand. It is also more open to abuse, since licences are valuable and their allocation invites lobbying and corruption, and it breaches WTO rules more directly than a tariff, which is why quotas have largely been converted into tariffs since the 1990s.',
      ],
      [
        'A subsidy to domestic producers restricts imports indirectly. Paying domestic firms a sum per unit lowers their marginal cost, so their supply curve shifts down and they can sell at the world price in larger quantity, displacing imports without the domestic price rising at all. Consumers therefore pay the same price as before and lose nothing directly; the cost falls on the government, which pays the subsidy, and so on the taxpayer. The European Union\u2019s Common Agricultural Policy did this for decades, and the United States does it for cotton and corn, which is why both are regularly challenged at the WTO by exporting countries whose producers cannot compete against subsidised output.',
        'The subsidy still carries a welfare cost, because resources are drawn into domestic production that is more expensive than the imports it replaces, and the loss is hidden in the budget rather than shown in the price. A subsidy also has to be paid every year to keep working, which makes it expensive relative to a tariff that raises revenue, and it can provoke retaliation just as a tariff does. Non-tariff barriers - product standards, licensing requirements, customs procedures - work by raising importers\u2019 costs instead, and are harder to challenge because each can be presented as serving another purpose, as the checks on food imports after the UK left the single market illustrate.',
      ],
    ],
    null,
    [
      'Definition of a tariff and the three alternatives the specification names',
      'Quota: a physical limit enforced by licence; the price rises as it would under a tariff; the difference is quota rent instead of revenue',
      'Diagram: the tariff diagram read as a quota, with the revenue rectangle as licence-holders\u2019 rent',
      'Subsidy to domestic producers: lower costs, larger domestic supply at the world price, imports displaced with no price rise for consumers; the cost falls on taxpayers',
      'Non-tariff barriers: standards, licensing and customs procedures raising importers\u2019 costs',
    ],
    [
      'A quota fixes quantity, so rising demand raises price further; licences invite lobbying; most quotas have been converted to tariffs',
      'A subsidy hides the welfare cost in the budget and must be paid every year; non-tariff barriers are harder to challenge because they claim another purpose',
    ],
  ),

  Q178: A(
    [['tariff', 'The welfare accounting of a tariff: the domestic price rises from Pw to Pw + tariff, domestic output expands from Q\u2081 to Q\u2082, consumption falls from Q\u2084 to Q\u2083, imports shrink to the gap between, the government collects the revenue rectangle, and the two triangles are the deadweight loss. Every group in the question is on this one diagram.']],
    'Protectionist policies - tariffs, quotas, subsidies to domestic producers and non-tariff barriers - restrict imports to shield domestic producers from foreign competition. Their impact differs sharply by group: producers gain, consumers lose, the government may gain revenue, and because the goods most often protected are staples, the burden falls unevenly across the income distribution. Whether the policy is worth it depends on whether the producers\u2019 gain is large enough and lasting enough to justify what everyone else pays, and on the reasons the protection was introduced.',
    [
      [
        'Domestic producers are the intended beneficiaries and do gain. A tariff raises the domestic price from the world price to the world price plus the tariff, so existing producers earn more on every unit and higher-cost producers who could not compete at the world price now can: domestic output expands from Q\u2081 to Q\u2082 and producer surplus rises. Employment in the protected industry is preserved, which is the political case for protection, and where the industry is an infant one that could become competitive with time, or a strategic one whose loss would carry costs beyond the market, protection can be defended on efficiency grounds rather than only distributional ones. The 25% tariff the United States imposed on steel imports in 2018 raised domestic steel prices and output almost immediately.',
        'The producers\u2019 gain comes at a cost per job that is usually far larger than the wage of the job saved, because the whole of consumption pays the higher price to protect a small number of producers: estimates of the cost to US consumers per steel job preserved run to hundreds of thousands of dollars a year. Protection also removes the pressure to become efficient, so an infant industry protected too long never grows up, and industries that use the protected good as an input - car makers and construction in the steel case - lose more than the protected industry gains, since they now pay more for their materials.',
      ],
      [
        'Consumers lose on two counts. They pay a higher price on everything they still buy, which transfers surplus to producers and to the government, and they buy less than they would have - consumption falls from Q\u2084 to Q\u2083 - which is a loss that goes to nobody: one of the two deadweight triangles. The government gains the tariff revenue on the imports that remain, which is a genuine transfer rather than a loss, and for developing countries with weak tax systems tariffs can be a large share of public revenue. Under a quota the same rectangle goes to the licence-holders instead, and under a subsidy the government pays rather than receives, so the government\u2019s position depends on which instrument is chosen.',
        'The consumer loss is easy to understate because it is spread thinly across millions of people while the producer gain is concentrated on a few, which is exactly why protection is politically durable despite the net loss. It is also larger over time than at first: the initial tariff invites retaliation against the country\u2019s own exporters, so the consumers who pay more for imports can also be the workers who lose export sales, as US farmers found when China responded to the 2018 tariffs by cutting purchases of soybeans.',
      ],
      [
        'The distributional effect is regressive. The goods most commonly protected - food, clothing, footwear, basic manufactures - take a larger share of low-income households\u2019 spending than of high-income households\u2019, so a given price rise costs the poor a larger fraction of their income; studies of US tariffs consistently find the burden falling hardest on the lowest-income households. On the producer side, the gains go to the owners of the protected industry, who are typically better off than its consumers, so the transfer runs upward. Living standards in aggregate fall by the deadweight loss, and by the loss of variety and quality that competition from imports would have supplied.',
        'The picture is more even where the protected workers are themselves low-paid and concentrated in a region with no alternative employment, since then the distributional gain to them is real and the loss is spread across households that can bear it - the case made for protecting steel towns. Whether this justifies protection rather than direct support to the affected workers is the underlying question: a transfer payment or retraining scheme achieves the same distributional aim without raising prices for everyone else, so protection is the more expensive route to the same end even when the end is defensible.',
      ],
    ],
    'Protectionist policies benefit domestic producers, at a cost to consumers that exceeds the producers\u2019 gain by the deadweight loss, with the government gaining revenue under a tariff, nothing under a quota and paying under a subsidy. The impact on the distribution of income is regressive, because the protected goods weigh more heavily in low-income budgets and the producer gains go to owners, and living standards fall in aggregate. The judgement depends on the reason for the protection and on its duration: a temporary tariff on a genuine infant industry, or protection of a strategic industry whose loss would carry costs beyond the market, can be defended, and support for low-paid workers in a declining region is a real distributional aim. But in each case the same end can usually be reached by direct support at lower cost, so protectionism is better understood as an expensive and regressive way of achieving aims that are sometimes legitimate than as a policy that benefits the imposing country overall.',
    [
      'The four instruments and the groups the question names',
      'Diagram: price up, domestic output Q\u2081 to Q\u2082, consumption Q\u2084 to Q\u2083, revenue rectangle, deadweight triangles',
      'Producers gain surplus and employment; infant industry and strategic arguments; US steel 2018',
      'Consumers pay more and consume less; the government gains revenue under a tariff, licence-holders under a quota',
      'Regressive incidence: protected goods weigh more in low-income budgets; gains go to owners',
    ],
    [
      'Cost per job saved far exceeds the wage; downstream industries lose more than the protected one gains',
      'The loss is thinly spread and the gain concentrated, which is why protection persists; retaliation adds export losses',
      'Protection of low-paid workers in a region is a real aim, but direct support reaches it more cheaply',
      'Judgement: an expensive and regressive route to aims that are sometimes legitimate',
    ],
  ),
}
