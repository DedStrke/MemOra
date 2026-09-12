/*
  Chemistry - AQA A-level (7405).

  Topic strings in FLASHCARDS / MCQ / EXAM must match the titles in GROUPS
  exactly. scripts/check-content.mjs enforces this.
*/

export const CHEMISTRY_GROUPS = [
  {
    label: 'Physical Chemistry',
    subgroups: [
      {
        label: 'Foundations',
        topics: [
          'Atomic Structure',
          'Amount of Substance',
          'Bonding and Structure',
          'Energetics',
          'Kinetics',
          'Chemical Equilibria',
          'Redox',
        ],
      },
      {
        label: 'Year 2 Physical',
        topics: ['Thermodynamics', 'Rate Equations', 'Electrode Potentials', 'Acids and Bases'],
      },
    ],
  },
  {
    label: 'Inorganic Chemistry',
    subgroups: [
      {
        label: 'The Periodic Table',
        topics: ['Periodicity', 'Group 2 Alkaline Earth Metals', 'Group 7 Halogens', 'Period 3 Elements'],
      },
      { label: 'Transition Metals', topics: ['Transition Metal Chemistry'] },
    ],
  },
  {
    label: 'Organic Chemistry',
    subgroups: [
      {
        label: 'Core Organic',
        topics: ['Alkanes', 'Halogenoalkanes', 'Alkenes', 'Alcohols', 'Organic Analysis'],
      },
      {
        label: 'Year 2 Organic',
        topics: [
          'Optical Isomerism',
          'Carbonyl Compounds',
          'Aromatic Chemistry',
          'Amines and Polymers',
          'Spectroscopy and Chromatography',
        ],
      },
    ],
  },
]

export const CHEMISTRY_FLASHCARDS = [
  // Atomic Structure
  { front: 'Define relative atomic mass', back: 'The average mass of an atom of an element relative to 1/12 the mass of an atom of carbon-12', topic: 'Atomic Structure' },
  { front: 'What are isotopes?', back: 'Atoms of the same element with the same number of protons but different numbers of neutrons', topic: 'Atomic Structure' },
  { front: 'Outline the four stages of time of flight mass spectrometry', back: 'Ionisation (electrospray or electron impact), acceleration to constant kinetic energy, ion drift through a flight tube, and detection where ions gain electrons to produce a current', topic: 'Atomic Structure' },
  { front: 'Define first ionisation energy', back: 'The energy needed to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous 1+ ions', topic: 'Atomic Structure' },
  { front: 'Why does ionisation energy decrease down a group?', back: 'The atomic radius increases and there is more shielding from inner shells, so the outer electron is less strongly attracted to the nucleus despite increased nuclear charge', topic: 'Atomic Structure' },
  { front: 'Why is there a small drop in first ionisation energy from N to O?', back: 'In oxygen the outer 2p orbital holds a pair of electrons, and the repulsion between them makes one easier to remove', topic: 'Atomic Structure' },

  // Amount of Substance
  { front: 'State the ideal gas equation with units', back: 'pV = nRT, where p is in Pa, V in m³, n in mol, R = 8.31 J/K/mol and T in K', topic: 'Amount of Substance' },
  { front: 'How do you calculate percentage yield?', back: 'Percentage yield = (actual yield / theoretical yield) x 100', topic: 'Amount of Substance' },
  { front: 'How do you calculate atom economy?', back: 'Atom economy = (Mr of desired product / total Mr of all reactants) x 100', topic: 'Amount of Substance' },
  { front: 'What is the empirical formula?', back: 'The simplest whole number ratio of atoms of each element in a compound', topic: 'Amount of Substance' },

  // Bonding and Structure
  { front: 'What is a dative covalent bond?', back: 'A covalent bond where both electrons in the shared pair come from the same atom', topic: 'Bonding and Structure' },
  { front: 'Why is the bond angle in ammonia 107 degrees?', back: 'There are three bonding pairs and one lone pair; lone pairs repel more than bonding pairs, reducing the angle from the tetrahedral 109.5 by about 2.5 degrees', topic: 'Bonding and Structure' },
  { front: 'Define electronegativity', back: 'The ability of an atom to attract the bonding pair of electrons in a covalent bond', topic: 'Bonding and Structure' },
  { front: 'Name the three types of intermolecular force in order of strength', back: 'Van der Waals (induced dipole-dipole), permanent dipole-dipole, and hydrogen bonding as the strongest', topic: 'Bonding and Structure' },
  { front: 'Why does ice float on water?', back: 'Hydrogen bonds hold the molecules in an open lattice, so ice is less dense than liquid water', topic: 'Bonding and Structure' },
  { front: 'Explain why giant ionic lattices have high melting points', back: 'There are strong electrostatic forces of attraction between oppositely charged ions throughout the lattice, requiring a lot of energy to overcome', topic: 'Bonding and Structure' },

  // Energetics
  { front: 'State Hess’s law', back: 'The enthalpy change of a reaction is independent of the route taken, provided the initial and final conditions are the same', topic: 'Energetics' },
  { front: 'Define standard enthalpy of formation', back: 'The enthalpy change when one mole of a compound is formed from its elements in their standard states under standard conditions (100 kPa, stated temperature)', topic: 'Energetics' },
  { front: 'Give the equation used with calorimetry', back: 'q = mcΔT, where m is the mass of solution, c the specific heat capacity and ΔT the temperature change', topic: 'Energetics' },
  { front: 'Why are mean bond enthalpy calculations only approximate?', back: 'Mean bond enthalpies are averaged across many different compounds, whereas the actual bond energy depends on the specific molecular environment', topic: 'Energetics' },

  // Kinetics
  { front: 'Define activation energy', back: 'The minimum energy required for a collision between particles to result in a reaction', topic: 'Kinetics' },
  { front: 'How does a catalyst increase the rate of reaction?', back: 'It provides an alternative reaction route with a lower activation energy, so a greater proportion of molecules have energy greater than or equal to Ea', topic: 'Kinetics' },
  { front: 'Explain the effect of temperature using the Maxwell-Boltzmann distribution', back: 'At higher temperature the curve shifts right and flattens, so a much greater proportion of molecules exceed the activation energy and collision frequency also rises', topic: 'Kinetics' },

  // Chemical Equilibria
  { front: 'State Le Chatelier’s principle', back: 'If a system at equilibrium is subjected to a change, the position of equilibrium shifts to oppose that change', topic: 'Chemical Equilibria' },
  { front: 'What happens to Kc if temperature increases for an exothermic forward reaction?', back: 'Kc decreases: equilibrium shifts in the endothermic (backward) direction to oppose the temperature rise', topic: 'Chemical Equilibria' },
  { front: 'Does a catalyst change the position of equilibrium?', back: 'No. It speeds up forward and backward reactions equally, so equilibrium is reached faster but Kc and the position are unchanged', topic: 'Chemical Equilibria' },
  { front: 'Why are compromise conditions used in the Haber process?', back: 'A low temperature gives a higher yield but too slow a rate, and very high pressure is expensive and unsafe, so around 450°C and 200 atm balance yield, rate and cost', topic: 'Chemical Equilibria' },

  // Redox
  { front: 'Define oxidation in terms of electrons and oxidation state', back: 'Loss of electrons, corresponding to an increase in oxidation state', topic: 'Redox' },
  { front: 'What is the oxidation state of an element in its uncombined form?', back: 'Zero', topic: 'Redox' },
  { front: 'How do you combine two half equations?', back: 'Balance the electrons in each half equation so they are equal, then add them together and cancel the electrons', topic: 'Redox' },

  // Thermodynamics
  { front: 'Define lattice enthalpy of formation', back: 'The enthalpy change when one mole of an ionic compound is formed from its gaseous ions under standard conditions', topic: 'Thermodynamics' },
  { front: 'Why is a theoretical lattice enthalpy sometimes different from the Born-Haber value?', back: 'The theoretical value assumes a perfectly ionic model; a difference indicates covalent character from polarisation of the anion by the cation', topic: 'Thermodynamics' },
  { front: 'Give the Gibbs free energy equation and the condition for feasibility', back: 'ΔG = ΔH - TΔS. A reaction is feasible when ΔG is less than or equal to zero', topic: 'Thermodynamics' },
  { front: 'What does entropy measure?', back: 'The dispersal of energy and the disorder of a system; it increases from solid to liquid to gas and when the number of gaseous moles increases', topic: 'Thermodynamics' },

  // Rate Equations
  { front: 'What is the general form of a rate equation?', back: 'Rate = k[A]ᵐ[B]ⁿ, where m and n are the orders with respect to A and B, found experimentally', topic: 'Rate Equations' },
  { front: 'What does the rate-determining step tell you?', back: 'It is the slowest step in the mechanism, and the species appearing in the rate equation (with their orders) are those involved up to and including it', topic: 'Rate Equations' },
  { front: 'State the Arrhenius equation', back: 'k = Ae⁻ᴱᵃᐟᴿᵀ, often used as ln k = ln A - Ea/RT so a plot of ln k against 1/T has gradient -Ea/R', topic: 'Rate Equations' },
  { front: 'How do you identify a first order reaction from a concentration-time graph?', back: 'It has a constant half-life: the time for concentration to halve is the same regardless of starting concentration', topic: 'Rate Equations' },

  // Electrode Potentials
  { front: 'What are standard conditions for electrode potentials?', back: '298 K, 100 kPa, all solutions at 1.00 mol/dm³, using a standard hydrogen electrode defined as 0.00 V', topic: 'Electrode Potentials' },
  { front: 'How do you calculate the EMF of a cell?', back: 'EMF = E(right hand / more positive electrode) minus E(left hand / more negative electrode)', topic: 'Electrode Potentials' },
  { front: 'Which electrode is oxidised in an electrochemical cell?', back: 'The one with the more negative electrode potential; it loses electrons and acts as the negative terminal', topic: 'Electrode Potentials' },

  // Acids and Bases
  { front: 'Give the formula for pH', back: 'pH = -log10[H+], and [H+] = 10⁻ᵖᴴ', topic: 'Acids and Bases' },
  { front: 'What is Kw at 298 K?', back: 'Kw = [H+][OH-] = 1.0 × 10⁻¹⁴ mol²/dm⁶', topic: 'Acids and Bases' },
  { front: 'What is Ka and how does it relate to acid strength?', back: 'Ka = [H+][A-]/[HA] for a weak acid; a larger Ka (or smaller pKa) means a stronger acid', topic: 'Acids and Bases' },
  { front: 'How does a buffer resist a change in pH when acid is added?', back: 'The conjugate base A- reacts with the added H+ to form HA, so most of the added H+ is removed and [H+] barely changes', topic: 'Acids and Bases' },

  // Periodicity
  { front: 'Why does atomic radius decrease across a period?', back: 'Nuclear charge increases while shielding stays roughly the same, so electrons are pulled more strongly towards the nucleus', topic: 'Periodicity' },
  { front: 'Why does sodium have a lower melting point than magnesium?', back: 'Magnesium has a 2+ ion and delocalises two electrons per atom, so the metallic bonding is stronger than sodium’s 1+ ion with one electron', topic: 'Periodicity' },

  // Group 2
  { front: 'How does reactivity change down Group 2 and why?', back: 'Reactivity increases: atomic radius and shielding increase so the outer electrons are lost more easily, lowering ionisation energy', topic: 'Group 2 Alkaline Earth Metals' },
  { front: 'How does the solubility of Group 2 hydroxides and sulfates change down the group?', back: 'Hydroxides become more soluble down the group; sulfates become less soluble', topic: 'Group 2 Alkaline Earth Metals' },
  { front: 'Give two uses of Group 2 compounds', back: 'Mg(OH)2 and CaCO3 as antacids, Ca(OH)2 to neutralise acidic soils, and BaSO4 as a barium meal because it is insoluble and so non-toxic', topic: 'Group 2 Alkaline Earth Metals' },

  // Group 7
  { front: 'Why does oxidising power decrease down Group 7?', back: 'Atomic radius and shielding increase, so the ability to attract and gain an electron falls', topic: 'Group 7 Halogens' },
  { front: 'Why does reducing power of halide ions increase down the group?', back: 'The ion is larger with more shielding, so the outer electron is held less strongly and is more easily lost', topic: 'Group 7 Halogens' },
  { front: 'What is observed when chlorine reacts with cold dilute NaOH?', back: 'It forms sodium chlorate(I), NaClO, used as bleach. This is a disproportionation reaction as chlorine is both oxidised and reduced', topic: 'Group 7 Halogens' },
  { front: 'Describe the silver nitrate test for halide ions', back: 'Add dilute nitric acid then silver nitrate: chloride gives a white precipitate soluble in dilute ammonia, bromide cream soluble in concentrated ammonia, iodide yellow and insoluble', topic: 'Group 7 Halogens' },

  // Period 3
  { front: 'What is formed when sodium reacts with water, and what is the approximate pH?', back: 'Sodium hydroxide and hydrogen; the solution is strongly alkaline at about pH 13 to 14', topic: 'Period 3 Elements' },
  { front: 'Why is silicon dioxide’s melting point so high?', back: 'It is a macromolecular (giant covalent) structure, so many strong covalent bonds must be broken', topic: 'Period 3 Elements' },
  { front: 'What is the trend in pH of Period 3 oxides dissolved in water?', back: 'Metal oxides (Na, Mg) are basic giving alkaline solutions; non-metal oxides (P, S) are acidic; aluminium oxide is amphoteric and insoluble', topic: 'Period 3 Elements' },

  // Transition Metals
  { front: 'Define a transition metal', back: 'A d-block element that forms at least one stable ion with a partially filled d sub-shell', topic: 'Transition Metal Chemistry' },
  { front: 'Give four characteristic properties of transition metals', back: 'Variable oxidation states, coloured ions, catalytic activity and the ability to form complex ions', topic: 'Transition Metal Chemistry' },
  { front: 'What is a ligand?', back: 'A molecule or ion that donates a lone pair of electrons to a central metal ion to form a coordinate (dative) bond', topic: 'Transition Metal Chemistry' },
  { front: 'Why are transition metal complexes coloured?', back: 'Ligands split the d orbitals into different energy levels; an electron absorbs a frequency of visible light to jump up, and the complementary colour is transmitted', topic: 'Transition Metal Chemistry' },
  { front: 'What shape and bond angle does a complex with six monodentate ligands have?', back: 'Octahedral, with 90 degree bond angles', topic: 'Transition Metal Chemistry' },
  { front: 'Why is cisplatin used as an anticancer drug?', back: 'The cis isomer binds to DNA in cancer cells, preventing replication so the cell cannot divide', topic: 'Transition Metal Chemistry' },

  // Alkanes
  { front: 'Why do boiling points of alkanes increase with chain length?', back: 'Longer chains have more electrons and a larger surface area of contact, so stronger van der Waals forces need more energy to overcome', topic: 'Alkanes' },
  { front: 'What are the three stages of free radical substitution?', back: 'Initiation (UV breaks the halogen bond homolytically), propagation (two steps regenerating radicals), and termination (two radicals combine)', topic: 'Alkanes' },
  { front: 'Why is free radical substitution unsuitable for making a pure product?', back: 'Further substitution occurs giving multiple products, and termination steps produce a mixture of chain lengths', topic: 'Alkanes' },
  { front: 'What is cracking and why is it done?', back: 'Breaking long-chain alkanes into shorter, more useful molecules; thermal cracking gives more alkenes, catalytic cracking gives branched and aromatic compounds for motor fuels', topic: 'Alkanes' },

  // Halogenoalkanes
  { front: 'Why does the rate of hydrolysis increase from chloro to iodo?', back: 'The carbon-halogen bond enthalpy decreases down the group, so the C-I bond is weakest and breaks most easily', topic: 'Halogenoalkanes' },
  { front: 'What conditions favour elimination over substitution in a halogenoalkane?', back: 'Hot, concentrated ethanolic potassium hydroxide favours elimination; warm aqueous potassium hydroxide favours nucleophilic substitution', topic: 'Halogenoalkanes' },
  { front: 'Why are CFCs damaging to the ozone layer?', back: 'UV breaks the C-Cl bond to form chlorine radicals, which catalyse the breakdown of ozone and are regenerated, so one radical destroys many ozone molecules', topic: 'Halogenoalkanes' },

  // Alkenes
  { front: 'What is the mechanism for the reaction of an alkene with HBr?', back: 'Electrophilic addition: the double bond’s high electron density induces a dipole in HBr, the alkene attacks H, forming a carbocation, then Br- attacks', topic: 'Alkenes' },
  { front: 'State Markownikoff’s rule', back: 'The major product forms via the most stable carbocation, which is the most substituted (tertiary more stable than secondary more stable than primary)', topic: 'Alkenes' },
  { front: 'Why can E/Z isomerism occur in alkenes?', back: 'There is restricted rotation about the C=C double bond, and each carbon of the double bond has two different groups attached', topic: 'Alkenes' },
  { front: 'Give the test for a C=C double bond', back: 'Shake with bromine water: it decolourises from orange to colourless', topic: 'Alkenes' },

  // Alcohols
  { front: 'What are the oxidation products of a primary alcohol?', back: 'An aldehyde with distillation, or a carboxylic acid with reflux and excess oxidising agent (acidified potassium dichromate)', topic: 'Alcohols' },
  { front: 'How can you distinguish a secondary from a tertiary alcohol?', back: 'Warm with acidified potassium dichromate: a secondary alcohol turns it from orange to green (forming a ketone), a tertiary alcohol does not react', topic: 'Alcohols' },
  { front: 'Why do alcohols have higher boiling points than alkanes of similar Mr?', back: 'Alcohols form hydrogen bonds between molecules, which are much stronger than the van der Waals forces in alkanes', topic: 'Alcohols' },
  { front: 'What is meant by a biofuel being carbon neutral, and why is this questioned?', back: 'CO2 released on burning equals CO2 absorbed by the plant during growth; it is questioned because fossil fuels are used in planting, harvesting, processing and transport', topic: 'Alcohols' },

  // Organic Analysis
  { front: 'Give the test and result for an aldehyde using Tollens’ reagent', back: 'Warm with Tollens’ reagent: a silver mirror forms, as the aldehyde is oxidised to a carboxylic acid. Ketones give no reaction', topic: 'Organic Analysis' },
  { front: 'How do you test for a carboxylic acid?', back: 'Add sodium carbonate solution: effervescence of carbon dioxide, which turns limewater cloudy', topic: 'Organic Analysis' },
  { front: 'What does Fehling’s solution show and what is a positive result?', back: 'It distinguishes aldehydes from ketones; an aldehyde reduces the blue solution to a brick-red precipitate of copper(I) oxide', topic: 'Organic Analysis' },

  // Optical Isomerism
  { front: 'What is a chiral centre?', back: 'A carbon atom attached to four different groups, giving non-superimposable mirror images', topic: 'Optical Isomerism' },
  { front: 'What is a racemic mixture and why does it not rotate plane polarised light?', back: 'An equal mixture of both enantiomers; their equal and opposite rotations cancel out', topic: 'Optical Isomerism' },
  { front: 'Why does nucleophilic addition to a carbonyl produce a racemic mixture?', back: 'The planar C=O group can be attacked from either side with equal probability, giving equal amounts of each enantiomer', topic: 'Optical Isomerism' },

  // Carbonyl Compounds
  { front: 'What reagent reduces a ketone to a secondary alcohol?', back: 'NaBH4 (sodium tetrahydridoborate) in aqueous solution, acting as a source of hydride ions (H-) as the nucleophile', topic: 'Carbonyl Compounds' },
  { front: 'Describe the mechanism for HCN addition to a carbonyl', back: 'Nucleophilic addition: CN- attacks the delta positive carbon, the pi bond breaks and electrons go to oxygen, then the O- is protonated to give a hydroxynitrile', topic: 'Carbonyl Compounds' },
  { front: 'Why are carboxylic acids more soluble in water than the corresponding alkanes?', back: 'They form hydrogen bonds with water molecules through the polar carboxyl group', topic: 'Carbonyl Compounds' },
  { front: 'How is an ester made from a carboxylic acid?', back: 'Reflux the carboxylic acid with an alcohol and a concentrated sulfuric acid catalyst (esterification), or react an acyl chloride with an alcohol for a faster, higher yield', topic: 'Carbonyl Compounds' },

  // Aromatic Chemistry
  { front: 'Give three pieces of evidence that benzene is not cyclohexa-1,3,5-triene', back: 'All C-C bond lengths are equal and intermediate between single and double; the enthalpy of hydrogenation is less exothermic than expected; it resists addition reactions', topic: 'Aromatic Chemistry' },
  { front: 'Why does benzene undergo substitution rather than addition?', back: 'Addition would break the stable delocalised pi system, so substitution preserves the delocalisation and is energetically favourable', topic: 'Aromatic Chemistry' },
  { front: 'What is the electrophile in the nitration of benzene, and how is it made?', back: 'NO2+ (nitronium ion), generated from concentrated nitric acid and concentrated sulfuric acid acting as the catalyst', topic: 'Aromatic Chemistry' },
  { front: 'What is Friedel-Crafts acylation used for?', back: 'To attach an acyl group to a benzene ring using an acyl chloride and an AlCl3 halogen carrier, forming a phenylketone', topic: 'Aromatic Chemistry' },

  // Amines and Polymers
  { front: 'Why are amines basic?', back: 'The nitrogen lone pair can accept a proton (it acts as a Bronsted-Lowry base and a nucleophile)', topic: 'Amines and Polymers' },
  { front: 'Order primary aliphatic amines, ammonia and aromatic amines by base strength', back: 'Primary aliphatic amines are strongest (alkyl groups push electron density onto N), then ammonia, then aromatic amines weakest (the lone pair is delocalised into the ring)', topic: 'Amines and Polymers' },
  { front: 'Difference between addition and condensation polymerisation?', back: 'Addition uses alkene monomers and loses nothing; condensation joins monomers with two functional groups and eliminates a small molecule such as water or HCl', topic: 'Amines and Polymers' },
  { front: 'Why are polyesters and polyamides biodegradable but poly(alkenes) are not?', back: 'Their ester and amide bonds are polar and can be hydrolysed; poly(alkenes) have a non-polar, unreactive carbon backbone', topic: 'Amines and Polymers' },

  // Spectroscopy
  { front: 'What causes the splitting pattern in high resolution NMR?', back: 'Spin-spin coupling with protons on adjacent carbons. The n+1 rule: a peak splits into n+1 lines where n is the number of equivalent adjacent protons', topic: 'Spectroscopy and Chromatography' },
  { front: 'Why is TMS used as a standard in NMR?', back: 'It gives a single sharp peak away from other signals, is non-toxic, inert and volatile so it is easily removed, and is defined as 0 ppm', topic: 'Spectroscopy and Chromatography' },
  { front: 'Which IR absorption identifies a carboxylic acid?', back: 'A broad O-H absorption around 2500 to 3300 cm-1 alongside a sharp C=O around 1680 to 1750 cm-1', topic: 'Spectroscopy and Chromatography' },
  { front: 'How is Rf value calculated in thin layer chromatography?', back: 'Rf = distance moved by the spot / distance moved by the solvent front', topic: 'Spectroscopy and Chromatography' },
]

export const CHEMISTRY_MCQ = [
  { question: 'Which species has the same number of electrons as Ne?', options: ['Na+', 'Cl-', 'Mg', 'O'], answer: 0, explanation: 'Na+ has lost one electron, leaving 10, the same as neon.', topic: 'Atomic Structure' },
  { question: 'First ionisation energy generally increases across a period because', options: ['shielding increases', 'nuclear charge increases and radius decreases', 'atoms get larger', 'more shells are added'], answer: 1, explanation: 'Greater nuclear charge with similar shielding pulls electrons in more tightly.', topic: 'Atomic Structure' },
  { question: 'In time of flight mass spectrometry, ions are accelerated so that they all have the same', options: ['velocity', 'mass', 'kinetic energy', 'charge density'], answer: 2, explanation: 'All ions gain the same kinetic energy, so lighter ions travel faster and arrive first.', topic: 'Atomic Structure' },
  { question: '0.5 mol of a gas occupies what volume at RTP (24 dm³/mol)?', options: ['6 dm³', '12 dm³', '24 dm³', '48 dm³'], answer: 1, explanation: '0.5 × 24 = 12 dm³.', topic: 'Amount of Substance' },
  { question: 'Atom economy is calculated using', options: ['actual over theoretical yield', 'Mr of desired product over total Mr of reactants', 'moles of product over moles of reactant', 'mass over volume'], answer: 1, explanation: 'Atom economy compares the Mr of the wanted product with the total Mr of reactants.', topic: 'Amount of Substance' },
  { question: 'The bond angle in a molecule of methane is', options: ['104.5', '107', '109.5', '120'], answer: 2, explanation: 'Four bonding pairs and no lone pairs give a tetrahedral 109.5 degrees.', topic: 'Bonding and Structure' },
  { question: 'Which has hydrogen bonding between its molecules?', options: ['HCl', 'CH4', 'NH3', 'CO2'], answer: 2, explanation: 'Hydrogen bonding needs H bonded to N, O or F with a lone pair, so NH3 qualifies.', topic: 'Bonding and Structure' },
  { question: 'Which structure conducts electricity when solid?', options: ['Sodium chloride', 'Diamond', 'Magnesium', 'Iodine'], answer: 2, explanation: 'Metals have delocalised electrons that are free to move in the solid state.', topic: 'Bonding and Structure' },
  { question: 'Hess’s law states that enthalpy change is independent of', options: ['temperature', 'the route taken', 'pressure', 'the catalyst used'], answer: 1, explanation: 'Enthalpy is a state function, so only initial and final states matter.', topic: 'Energetics' },
  { question: 'A catalyst increases rate by', options: ['increasing the activation energy', 'providing a route with lower activation energy', 'increasing the temperature', 'shifting the equilibrium'], answer: 1, explanation: 'It offers an alternative pathway with lower Ea, so more collisions are successful.', topic: 'Kinetics' },
  { question: 'Raising temperature shifts the Maxwell-Boltzmann curve', options: ['left and higher', 'right and flatter', 'right and higher', 'it does not change'], answer: 1, explanation: 'The peak moves right and lowers, so a greater proportion of molecules exceed Ea.', topic: 'Kinetics' },
  { question: 'For an exothermic forward reaction, increasing temperature will', options: ['increase Kc', 'decrease Kc', 'not change Kc', 'make Kc zero'], answer: 1, explanation: 'Equilibrium shifts endothermically (backwards), so Kc falls.', topic: 'Chemical Equilibria' },
  { question: 'The oxidation state of Mn in MnO4- is', options: ['+4', '+6', '+7', '+2'], answer: 2, explanation: 'Four oxygens at -2 give -8; overall charge -1, so Mn is +7.', topic: 'Redox' },
  { question: 'A reaction is feasible when', options: ['ΔH is negative', 'ΔS is positive', 'ΔG is negative or zero', 'ΔG is positive'], answer: 2, explanation: 'Feasibility requires ΔG = ΔH - TΔS to be less than or equal to zero.', topic: 'Thermodynamics' },
  { question: 'Which change increases entropy the most?', options: ['Liquid to solid', 'Gas to liquid', 'Solid to gas', 'Solid to liquid'], answer: 2, explanation: 'Sublimation gives the largest increase in disorder and energy dispersal.', topic: 'Thermodynamics' },
  { question: 'A reaction with a constant half-life is', options: ['zero order', 'first order', 'second order', 'third order'], answer: 1, explanation: 'Constant half-life independent of concentration is the signature of first order.', topic: 'Rate Equations' },
  { question: 'In rate = k[A]²[B], the overall order is', options: ['1', '2', '3', '4'], answer: 2, explanation: 'Orders add: 2 + 1 = 3.', topic: 'Rate Equations' },
  { question: 'A plot of ln k against 1/T has a gradient of', options: ['Ea/R', '-Ea/R', 'ln A', '-A'], answer: 1, explanation: 'From ln k = ln A - Ea/RT, the gradient is -Ea/R.', topic: 'Rate Equations' },
  { question: 'The standard hydrogen electrode is assigned a potential of', options: ['+1.00 V', '0.00 V', '-1.00 V', '+0.34 V'], answer: 1, explanation: 'It is the reference electrode, defined as exactly 0.00 V.', topic: 'Electrode Potentials' },
  { question: 'What is the pH of 0.01 mol/dm³ HCl?', options: ['1', '2', '12', '14'], answer: 1, explanation: 'pH = -log10(0.01) = 2, since HCl is strong and fully dissociates.', topic: 'Acids and Bases' },
  { question: 'A buffer solution is best made from', options: ['a strong acid and its salt', 'a weak acid and its salt', 'two strong acids', 'a strong base only'], answer: 1, explanation: 'A weak acid with its conjugate base can absorb both added acid and added alkali.', topic: 'Acids and Bases' },
  { question: 'Atomic radius decreases across Period 3 because', options: ['shielding increases', 'nuclear charge increases with similar shielding', 'more shells are added', 'ions get bigger'], answer: 1, explanation: 'Increasing nuclear charge with roughly constant shielding pulls electrons closer.', topic: 'Periodicity' },
  { question: 'Which Group 2 sulfate is least soluble?', options: ['MgSO4', 'CaSO4', 'SrSO4', 'BaSO4'], answer: 3, explanation: 'Group 2 sulfate solubility decreases down the group, so BaSO4 is least soluble.', topic: 'Group 2 Alkaline Earth Metals' },
  { question: 'Silver nitrate added to a bromide solution gives', options: ['a white precipitate', 'a cream precipitate', 'a yellow precipitate', 'no precipitate'], answer: 1, explanation: 'Chloride is white, bromide cream, iodide yellow.', topic: 'Group 7 Halogens' },
  { question: 'Chlorine reacting with cold dilute NaOH is an example of', options: ['neutralisation', 'disproportionation', 'addition', 'polymerisation'], answer: 1, explanation: 'Chlorine is simultaneously oxidised and reduced.', topic: 'Group 7 Halogens' },
  { question: 'Which Period 3 oxide is amphoteric?', options: ['Na2O', 'MgO', 'Al2O3', 'SO2'], answer: 2, explanation: 'Aluminium oxide reacts with both acids and bases.', topic: 'Period 3 Elements' },
  { question: 'Which ion is NOT a transition metal ion by the strict definition?', options: ['Fe2+', 'Cu2+', 'Zn2+', 'Cr3+'], answer: 2, explanation: 'Zn2+ has a full d10 sub-shell, so it does not meet the partially filled d requirement.', topic: 'Transition Metal Chemistry' },
  { question: 'A complex with six monodentate ligands is', options: ['tetrahedral', 'octahedral', 'square planar', 'linear'], answer: 1, explanation: 'Six ligands around the central ion give an octahedral shape with 90 degree angles.', topic: 'Transition Metal Chemistry' },
  { question: 'Alkane boiling point increases with chain length because of stronger', options: ['hydrogen bonds', 'van der Waals forces', 'ionic bonds', 'covalent bonds'], answer: 1, explanation: 'More electrons and greater contact area give stronger induced dipole forces.', topic: 'Alkanes' },
  { question: 'Free radical substitution is initiated by', options: ['heat only', 'UV light breaking a bond homolytically', 'a nucleophile', 'an electrophile'], answer: 1, explanation: 'UV causes homolytic fission producing two radicals.', topic: 'Alkanes' },
  { question: 'Which halogenoalkane hydrolyses fastest?', options: ['1-chlorobutane', '1-bromobutane', '1-iodobutane', 'they are equal'], answer: 2, explanation: 'The C-I bond is weakest, so it breaks most easily.', topic: 'Halogenoalkanes' },
  { question: 'Hot ethanolic KOH with a halogenoalkane gives mainly', options: ['an alcohol', 'an alkene', 'a nitrile', 'an amine'], answer: 1, explanation: 'Hot, concentrated, ethanolic conditions favour elimination to form an alkene.', topic: 'Halogenoalkanes' },
  { question: 'The mechanism for bromine reacting with ethene is', options: ['nucleophilic substitution', 'electrophilic addition', 'free radical substitution', 'elimination'], answer: 1, explanation: 'The electron-rich double bond induces a dipole and attacks the electrophile.', topic: 'Alkenes' },
  { question: 'Which carbocation is most stable?', options: ['Primary', 'Secondary', 'Tertiary', 'All equal'], answer: 2, explanation: 'More alkyl groups donate electron density, stabilising the positive charge.', topic: 'Alkenes' },
  { question: 'Distilling a primary alcohol with acidified dichromate gives', options: ['a ketone', 'an aldehyde', 'a carboxylic acid', 'an ester'], answer: 1, explanation: 'Distilling removes the aldehyde before it can be oxidised further.', topic: 'Alcohols' },
  { question: 'Which alcohol resists oxidation by acidified dichromate?', options: ['Primary', 'Secondary', 'Tertiary', 'All are oxidised'], answer: 2, explanation: 'A tertiary alcohol has no hydrogen on the carbon bearing the OH group.', topic: 'Alcohols' },
  { question: 'Tollens’ reagent gives a silver mirror with', options: ['ketones', 'aldehydes', 'alcohols', 'alkanes'], answer: 1, explanation: 'Aldehydes are oxidised to carboxylic acids, reducing silver ions to silver.', topic: 'Organic Analysis' },
  { question: 'A chiral centre has', options: ['a double bond', 'four different groups on one carbon', 'three groups', 'a ring structure'], answer: 1, explanation: 'Four different groups give non-superimposable mirror images.', topic: 'Optical Isomerism' },
  { question: 'NaBH4 reacting with a ketone produces', options: ['a primary alcohol', 'a secondary alcohol', 'a carboxylic acid', 'an aldehyde'], answer: 1, explanation: 'Reduction of a ketone gives a secondary alcohol.', topic: 'Carbonyl Compounds' },
  { question: 'The electrophile in the nitration of benzene is', options: ['NO2-', 'NO2+', 'HNO3', 'H2SO4'], answer: 1, explanation: 'The nitronium ion NO2+ is generated by concentrated sulfuric acid acting on nitric acid.', topic: 'Aromatic Chemistry' },
  { question: 'Benzene undergoes substitution rather than addition because', options: ['it is saturated', 'addition would break the stable delocalised system', 'it has no electrons', 'it is ionic'], answer: 1, explanation: 'Substitution preserves the delocalised pi system, which is energetically favourable.', topic: 'Aromatic Chemistry' },
  { question: 'Which is the strongest base?', options: ['Phenylamine', 'Ammonia', 'Ethylamine', 'They are equal'], answer: 2, explanation: 'The alkyl group pushes electron density onto nitrogen, making the lone pair more available.', topic: 'Amines and Polymers' },
  { question: 'A CH3 group next to a CH2 group in NMR appears as a', options: ['singlet', 'doublet', 'triplet', 'quartet'], answer: 2, explanation: 'The n+1 rule: two adjacent protons give 2 + 1 = 3 lines, a triplet.', topic: 'Spectroscopy and Chromatography' },
  { question: 'A broad absorption at 2500 to 3300 cm-1 in IR suggests', options: ['an alkane', 'a carboxylic acid O-H', 'a nitrile', 'an alkene'], answer: 1, explanation: 'A very broad O-H stretch in that region is characteristic of a carboxylic acid.', topic: 'Spectroscopy and Chromatography' },
]

export const CHEMISTRY_EXAM = [
  { question: 'Explain why the first ionisation energy of magnesium is higher than that of sodium.', marks: 3, markScheme: ['Magnesium has a greater nuclear charge (12 protons vs 11)', 'Both lose an electron from the third shell so shielding is similar', 'The stronger attraction between nucleus and outer electron requires more energy to overcome', 'Final answer: greater nuclear charge with similar shielding gives stronger attraction'], topic: 'Atomic Structure' },
  { question: 'Explain why there is a decrease in first ionisation energy between nitrogen and oxygen.', marks: 2, markScheme: ['In oxygen the electron is removed from a 2p orbital containing a pair of electrons', 'Repulsion between the paired electrons makes one easier to remove, outweighing the increased nuclear charge', 'Final answer: electron pair repulsion in the 2p orbital lowers the ionisation energy'], topic: 'Atomic Structure' },
  { question: 'A compound contains 40.0% C, 6.7% H and 53.3% O by mass. Determine its empirical formula.', marks: 3, markScheme: ['Divide by Ar: C 40.0/12 = 3.33, H 6.7/1 = 6.7, O 53.3/16 = 3.33', 'Divide by the smallest (3.33): C 1, H 2, O 1', 'Final answer: CH2O'], topic: 'Amount of Substance' },
  { question: 'Explain why the bond angle in water is 104.5 degrees while in methane it is 109.5 degrees.', marks: 3, markScheme: ['Water has two bonding pairs and two lone pairs; methane has four bonding pairs', 'Lone pairs repel more strongly than bonding pairs', 'Each lone pair reduces the angle by about 2.5 degrees, so two lone pairs reduce it from 109.5 to 104.5', 'Final answer: greater lone pair repulsion in water closes the bond angle'], topic: 'Bonding and Structure' },
  { question: 'Explain why ice is less dense than liquid water.', marks: 2, markScheme: ['In ice, hydrogen bonds hold water molecules in a rigid open lattice', 'The molecules are held further apart on average than in the liquid, so the same mass occupies more volume', 'Final answer: the open hydrogen-bonded lattice makes ice less dense'], topic: 'Bonding and Structure' },
  { question: 'Explain, using the Maxwell-Boltzmann distribution, why a small temperature rise causes a large increase in reaction rate.', marks: 3, markScheme: ['At higher temperature the curve shifts to the right and the peak lowers', 'A much greater proportion of molecules have energy greater than or equal to the activation energy', 'There is also a slight increase in collision frequency, but the energy effect dominates', 'Final answer: many more molecules exceed Ea so far more collisions are successful'], topic: 'Kinetics' },
  { question: 'For the Haber process, N2 + 3H2 ⇌ 2NH3 (ΔH negative), explain the effect of increasing pressure on yield.', marks: 3, markScheme: ['There are 4 moles of gas on the left and 2 on the right', 'Increasing pressure shifts equilibrium to the side with fewer gaseous moles to oppose the change', 'So the position moves right and the yield of ammonia increases', 'Final answer: equilibrium shifts right, increasing ammonia yield'], topic: 'Chemical Equilibria' },
  { question: 'Explain why a catalyst does not change the position of equilibrium.', marks: 2, markScheme: ['A catalyst lowers the activation energy of the forward and backward reactions equally', 'Both rates increase by the same factor, so equilibrium is reached sooner but the position and Kc are unchanged', 'Final answer: it speeds both directions equally so the position is unaffected'], topic: 'Chemical Equilibria' },
  { question: 'Calculate the oxidation state of chromium in Cr2O7 2-.', marks: 2, markScheme: ['Seven oxygens at -2 give -14; overall charge is -2', 'So 2Cr = -2 + 14 = +12, giving each Cr = +6', 'Final answer: +6'], topic: 'Redox' },
  { question: 'A reaction has ΔH = +30 kJ/mol and ΔS = +120 J/K/mol. Calculate the minimum temperature for feasibility.', marks: 3, markScheme: ['Feasible when ΔG is less than or equal to 0, so ΔH = TΔS at the limit', 'Convert entropy to kJ: 120 J/K/mol = 0.120 kJ/K/mol', 'T = ΔH/ΔS = 30 / 0.120 = 250', 'Final answer: 250 K'], topic: 'Thermodynamics' },
  { question: 'Explain how you would determine the order of reaction with respect to a reactant using initial rate data.', marks: 3, markScheme: ['Compare experiments where the concentration of that reactant changes while others stay constant', 'If doubling the concentration has no effect the order is 0, doubles the rate it is 1st order, quadruples it is 2nd order', 'Repeat for each reactant, then combine into the overall rate equation', 'Final answer: compare rate change when only that concentration varies'], topic: 'Rate Equations' },
  { question: 'Calculate the pH of a 0.10 mol/dm³ solution of a weak acid with Ka = 1.7 × 10⁻⁵.', marks: 3, markScheme: ['[H+] = square root of (Ka x [HA]) = square root of (1.7e-5 × 0.10)', '[H+] = square root of 1.7e-6 = 1.30e-3 mol/dm³', 'pH = -log10(1.30e-3)', 'Final answer: pH = 2.89'], topic: 'Acids and Bases' },
  { question: 'Explain how an ethanoic acid / sodium ethanoate buffer resists a change in pH when a small amount of alkali is added.', marks: 3, markScheme: ['The buffer contains a large reservoir of both CH3COOH and CH3COO-', 'Added OH- reacts with CH3COOH to form CH3COO- and water', 'The added OH- is removed, so [H+] and therefore pH change only very slightly', 'Final answer: the weak acid neutralises added hydroxide, keeping pH almost constant'], topic: 'Acids and Bases' },
  { question: 'Explain the trend in reactivity of the Group 2 elements down the group.', marks: 3, markScheme: ['Reactivity increases down the group', 'Atomic radius and shielding both increase down the group', 'The outer electrons are less strongly attracted so ionisation energy falls and electrons are lost more readily', 'Final answer: easier loss of outer electrons makes reactivity increase down the group'], topic: 'Group 2 Alkaline Earth Metals' },
  { question: 'Describe how you would use silver nitrate to distinguish between solutions of NaCl, NaBr and NaI.', marks: 4, markScheme: ['Add dilute nitric acid to remove interfering ions such as carbonate, then add silver nitrate solution', 'Chloride gives a white precipitate, bromide cream, iodide yellow', 'Add dilute ammonia: the white chloride precipitate dissolves', 'Add concentrated ammonia: the cream bromide precipitate dissolves, the yellow iodide does not', 'Final answer: colour of precipitate plus solubility in dilute then concentrated ammonia'], topic: 'Group 7 Halogens' },
  { question: 'Explain why transition metal complexes are coloured.', marks: 3, markScheme: ['Ligands cause the d orbitals to split into two energy levels', 'An electron absorbs energy from visible light to be promoted from the lower to the higher level', 'The frequency absorbed corresponds to the energy gap; the complementary colour is transmitted and seen', 'Final answer: d-d electron transitions absorb part of the visible spectrum'], topic: 'Transition Metal Chemistry' },
  { question: 'Explain why free radical substitution of methane with chlorine gives a mixture of products.', marks: 3, markScheme: ['Propagation regenerates radicals, so the chain continues and further substitution occurs giving CH2Cl2, CHCl3 and CCl4', 'Different termination steps combine different radicals, producing side products such as ethane', 'The reaction cannot be stopped at one substitution', 'Final answer: further substitution and varied termination give a product mixture'], topic: 'Alkanes' },
  { question: 'Explain why 1-iodobutane is hydrolysed faster than 1-chlorobutane.', marks: 2, markScheme: ['The C-I bond enthalpy is lower than the C-Cl bond enthalpy', 'The weaker C-I bond breaks more easily, so the rate-determining step is faster', 'Final answer: the weaker carbon-halogen bond in the iodide breaks more readily'], topic: 'Halogenoalkanes' },
  { question: 'Explain, using Markownikoff’s rule, why 2-bromopropane is the major product when HBr reacts with propene.', marks: 3, markScheme: ['The H attaches to the carbon with more hydrogens, forming a secondary carbocation', 'A secondary carbocation is more stable than a primary one because alkyl groups donate electron density and stabilise the positive charge', 'The more stable intermediate forms faster, so its product predominates', 'Final answer: the more stable secondary carbocation leads to 2-bromopropane'], topic: 'Alkenes' },
  { question: 'Describe how you would prepare and purify a sample of an ester from a carboxylic acid and an alcohol.', marks: 4, markScheme: ['Reflux the carboxylic acid and alcohol with a few drops of concentrated sulfuric acid catalyst', 'Distil off the ester', 'Wash with sodium carbonate solution to remove acid, then separate the layers in a separating funnel', 'Dry with anhydrous salt then redistil, collecting the fraction at the correct boiling point', 'Final answer: reflux, distil, wash, dry and redistil'], topic: 'Carbonyl Compounds' },
  { question: 'Give three pieces of evidence that benzene does not contain three normal C=C double bonds.', marks: 3, markScheme: ['All carbon-carbon bond lengths are the same and intermediate between single and double bond lengths', 'The enthalpy of hydrogenation is about 152 kJ/mol less exothermic than expected for three C=C bonds', 'Benzene resists addition reactions such as decolourising bromine water, unlike alkenes', 'Final answer: equal bond lengths, less exothermic hydrogenation, resistance to addition'], topic: 'Aromatic Chemistry' },
  { question: 'A compound has an NMR spectrum with a triplet at 1.2 ppm (3H) and a quartet at 3.7 ppm (2H). Deduce the fragment present and justify.', marks: 3, markScheme: ['The 3H triplet is a CH3 next to a CH2 (n+1 rule with two adjacent protons)', 'The 2H quartet is a CH2 next to a CH3 (three adjacent protons)', 'The CH2 shift at 3.7 ppm suggests it is attached to an electronegative atom such as oxygen', 'Final answer: an ethyl group, CH3CH2, attached to O'], topic: 'Spectroscopy and Chromatography' },
]

export const CHEMISTRY_NOTES = {
  'Atomic Structure': '<h3>Ionisation energy</h3><p>First IE: energy to remove one mole of electrons from one mole of gaseous atoms. Decreases down a group (bigger radius, more shielding), increases across a period (higher nuclear charge).</p><p class="exam-tip">Exam tip: the two dips across Period 3 are Al (2p to 3p sub-shell change) and S (electron pair repulsion in 3p).</p><h3>Mass spectrometry</h3><p>Ionisation, acceleration to equal kinetic energy, ion drift, detection. Lighter ions arrive first.</p>',
  'Amount of Substance': '<h3>Key equations</h3><ul><li>n = m / Mr</li><li>n = cV (V in dm³)</li><li>pV = nRT (SI units)</li><li>% yield = actual/theoretical x 100</li><li>Atom economy = Mr desired / total Mr reactants x 100</li></ul>',
  'Bonding and Structure': '<h3>Shapes</h3><p>Electron pairs repel to be as far apart as possible; lone pairs repel more than bonding pairs, closing angles by about 2.5 degrees each.</p><h3>Intermolecular forces</h3><p>Van der Waals, then permanent dipole-dipole, then hydrogen bonding (H bonded to N, O or F).</p>',
  Energetics: '<h3>Hess cycles</h3><p>Enthalpy change is route-independent. Formation cycle: products minus reactants. Combustion cycle: reactants minus products.</p><p>q = mcΔT. Mean bond enthalpies are averages, so calculations using them are approximate.</p>',
  Kinetics: '<h3>Collision theory</h3><p>Reaction needs collisions with energy at least Ea and correct orientation.</p><p>Catalyst: lower Ea via alternative route. Temperature: shifts Maxwell-Boltzmann right so far more molecules exceed Ea.</p>',
  'Chemical Equilibria': '<h3>Le Chatelier</h3><p>Equilibrium shifts to oppose a change. Pressure shifts towards fewer gas moles. Temperature shifts endothermically when heated.</p><p class="exam-tip">Exam tip: only temperature changes Kc. Pressure, concentration and catalysts do not.</p>',
  Redox: '<h3>Rules</h3><p>Oxidation is loss of electrons and an increase in oxidation state. Uncombined elements are 0, Group 1 is +1, Group 2 is +2, oxygen is usually -2, hydrogen usually +1.</p><p>Balance half equations for electrons then add.</p>',
  Thermodynamics: '<h3>Born-Haber</h3><p>Used to find lattice enthalpy indirectly. A gap between theoretical and experimental values indicates covalent character.</p><h3>Feasibility</h3><p>ΔG = ΔH - TΔS. Feasible when ΔG is 0 or negative. Watch units: ΔS is usually J/K/mol, ΔH is kJ/mol.</p>',
  'Rate Equations': '<h3>Orders</h3><p>Rate = k[A]ᵐ[B]ⁿ, determined experimentally. First order has a constant half-life.</p><p>The rate equation reveals the species involved up to and including the rate-determining step.</p><p>ln k = ln A - Ea/RT: plot ln k against 1/T, gradient = -Ea/R.</p>',
  'Electrode Potentials': '<h3>Cells</h3><p>Standard conditions: 298 K, 100 kPa, 1.00 mol/dm³. SHE = 0.00 V.</p><p>EMF = E(more positive) - E(more negative). The more negative electrode is oxidised.</p>',
  'Acids and Bases': '<h3>Calculations</h3><ul><li>pH = -log[H+]</li><li>Kw = [H+][OH-] = 1e-14 at 298 K</li><li>Weak acid: [H+] = root(Ka x [HA])</li><li>Buffer: [H+] = Ka x [HA]/[A-]</li></ul>',
  Periodicity: '<h3>Trends across Period 3</h3><p>Atomic radius decreases, ionisation energy generally increases, melting point peaks at silicon (giant covalent) then falls sharply.</p>',
  'Group 2 Alkaline Earth Metals': '<h3>Trends</h3><p>Reactivity increases down the group. Hydroxides become more soluble, sulfates less soluble.</p><p>Uses: antacids, neutralising soil, BaSO4 barium meals (insoluble so non-toxic).</p>',
  'Group 7 Halogens': '<h3>Trends</h3><p>Oxidising power decreases down the group; halide reducing power increases.</p><h3>Tests</h3><p>Silver nitrate: chloride white (dissolves in dilute ammonia), bromide cream (concentrated ammonia), iodide yellow (insoluble).</p>',
  'Period 3 Elements': '<h3>Reactions with water</h3><p>Na gives a strongly alkaline solution (pH 13-14); Mg reacts slowly (pH 9-10).</p><h3>Oxides</h3><p>Metal oxides basic, non-metal oxides acidic, Al2O3 amphoteric. SiO2 is giant covalent with a very high melting point.</p>',
  'Transition Metal Chemistry': '<h3>Definition</h3><p>A d-block element forming at least one stable ion with a partially filled d sub-shell. Sc and Zn are excluded.</p><h3>Properties</h3><p>Variable oxidation states, coloured ions (d-d transitions), catalytic activity, complex ion formation.</p><p class="exam-tip">Exam tip: six monodentate ligands give octahedral (90 degrees); four large ligands like Cl- often give tetrahedral (109.5).</p>',
  Alkanes: '<h3>Free radical substitution</h3><p>Initiation (UV, homolytic fission), propagation (two steps, radicals regenerated), termination (radicals combine). Always gives a mixture.</p><h3>Cracking</h3><p>Thermal: high pressure and temperature, more alkenes. Catalytic: zeolite, lower temperature, branched and aromatic products.</p>',
  Halogenoalkanes: '<h3>Two competing routes</h3><p>Warm aqueous KOH gives nucleophilic substitution to an alcohol. Hot concentrated ethanolic KOH gives elimination to an alkene.</p><p>Rate of hydrolysis follows bond enthalpy: iodo fastest, chloro slowest.</p>',
  Alkenes: '<h3>Electrophilic addition</h3><p>The pi bond is electron-rich and attacks the electrophile, forming a carbocation, which is then attacked by the nucleophile.</p><p>Markownikoff: the major product goes via the more stable (more substituted) carbocation.</p>',
  Alcohols: '<h3>Oxidation</h3><p>Primary: aldehyde (distil) then carboxylic acid (reflux). Secondary: ketone. Tertiary: no reaction.</p><p>Elimination with concentrated H2SO4 or Al2O3 gives an alkene (dehydration).</p>',
  'Organic Analysis': '<h3>Functional group tests</h3><ul><li>Alkene: bromine water decolourises</li><li>Aldehyde: Tollens silver mirror, Fehling brick-red</li><li>Carboxylic acid: effervescence with carbonate</li><li>Alcohol: acidified dichromate orange to green (not tertiary)</li></ul>',
  'Optical Isomerism': '<h3>Chirality</h3><p>A carbon with four different groups gives non-superimposable mirror images (enantiomers) that rotate plane polarised light in opposite directions.</p><p>A racemate is 50:50 and shows no net rotation. Nucleophilic addition to a planar C=O gives a racemate.</p>',
  'Carbonyl Compounds': '<h3>Reactions</h3><p>Reduction with NaBH4: aldehyde to primary alcohol, ketone to secondary alcohol. Both via nucleophilic addition of H-.</p><p>HCN addition extends the chain by one carbon giving a hydroxynitrile.</p><p>Esterification: acid + alcohol with H2SO4, or faster with an acyl chloride.</p>',
  'Aromatic Chemistry': '<h3>Delocalisation</h3><p>Each carbon donates one p electron to a delocalised ring above and below the plane. Evidence: equal bond lengths, less exothermic hydrogenation, resistance to addition.</p><h3>Electrophilic substitution</h3><p>Nitration (NO2+ from HNO3/H2SO4), Friedel-Crafts alkylation and acylation (AlCl3 halogen carrier).</p>',
  'Amines and Polymers': '<h3>Basicity</h3><p>Primary aliphatic > ammonia > aromatic. Alkyl groups push electron density onto N; the ring delocalises the lone pair away.</p><h3>Polymers</h3><p>Addition (alkenes, non-biodegradable) vs condensation (polyesters and polyamides, hydrolysable so biodegradable).</p>',
  'Spectroscopy and Chromatography': '<h3>NMR</h3><p>Number of peaks = number of proton environments. Integration = relative number of protons. Splitting = n+1 rule from adjacent protons. TMS is the 0 ppm standard.</p><h3>IR</h3><p>Broad 2500-3300 O-H (acid), sharp 1680-1750 C=O, 3230-3550 O-H (alcohol).</p><h3>Chromatography</h3><p>Rf = distance moved by spot / distance moved by solvent front.</p>',
}
