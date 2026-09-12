/*
  Biology - AQA A-level (7402).

  Topic strings in FLASHCARDS / MCQ / EXAM must match the titles in GROUPS
  exactly, or chapter filtering silently drops the question.
*/

export const BIOLOGY_GROUPS = [
  {
    label: 'Paper 1: Biological Processes',
    subgroups: [
      {
        label: '1. Biological Molecules',
        topics: [
          'Monomers and Polymers',
          'Carbohydrates',
          'Lipids',
          'Proteins and Enzymes',
          'Nucleic Acids and DNA Replication',
          'ATP and Water',
        ],
      },
      {
        label: '2. Cells',
        topics: [
          'Eukaryotic Cell Structure',
          'Prokaryotes and Viruses',
          'Microscopy',
          'Mitosis and the Cell Cycle',
          'Transport Across Membranes',
          'The Immune System',
        ],
      },
      {
        label: '3. Exchange and Transport',
        topics: [
          'Surface Area to Volume Ratio',
          'Gas Exchange',
          'Digestion and Absorption',
          'Mass Transport in Animals',
          'Mass Transport in Plants',
        ],
      },
    ],
  },
  {
    label: 'Paper 2: Genetics and Environment',
    subgroups: [
      {
        label: '4. Genetic Information and Variation',
        topics: [
          'Meiosis',
          'Genetic Diversity and Mutation',
          'Species and Taxonomy',
          'Biodiversity',
        ],
      },
      {
        label: '5. Energy Transfers',
        topics: ['Photosynthesis', 'Respiration', 'Energy and Ecosystems'],
      },
      {
        label: '6. Responding to Change',
        topics: ['Nervous Coordination', 'Homeostasis', 'Populations and Evolution'],
      },
    ],
  },
]

export const BIOLOGY_FLASHCARDS = [
  // --- Monomers and Polymers
  { front: 'What is a monomer?', back: 'A small, single molecule that joins with others to form a polymer, e.g. a monosaccharide, amino acid or nucleotide', topic: 'Monomers and Polymers' },
  { front: 'What is a condensation reaction?', back: 'A reaction joining two molecules with the formation of a chemical bond and the release of a water molecule', topic: 'Monomers and Polymers' },
  { front: 'What is a hydrolysis reaction?', back: 'A reaction breaking a chemical bond between two molecules using a water molecule', topic: 'Monomers and Polymers' },

  // --- Carbohydrates
  { front: 'Which bond links two monosaccharides?', back: 'A glycosidic bond, formed by condensation', topic: 'Carbohydrates' },
  { front: 'Name the three common disaccharides and their monomers', back: 'Maltose (glucose + glucose), sucrose (glucose + fructose), lactose (glucose + galactose)', topic: 'Carbohydrates' },
  { front: 'How does the structure of starch suit its function?', back: 'Insoluble so no osmotic effect, coiled/helical so compact, branched (amylopectin) giving many ends for rapid hydrolysis, large so cannot leave the cell', topic: 'Carbohydrates' },
  { front: 'How does cellulose differ from starch?', back: 'Cellulose is made of β-glucose, with alternate molecules inverted, forming straight unbranched chains held by hydrogen bonds into strong microfibrils', topic: 'Carbohydrates' },
  { front: 'What is the test for reducing sugars and a positive result?', back: 'Add Benedict’s solution and heat in a water bath; a brick-red precipitate is positive', topic: 'Carbohydrates' },
  { front: 'How do you test for a non-reducing sugar?', back: 'Do a negative Benedict’s test first, then hydrolyse with dilute HCl, neutralise with sodium hydrogencarbonate, and repeat the Benedict’s test', topic: 'Carbohydrates' },

  // --- Lipids
  { front: 'What bond forms between glycerol and a fatty acid?', back: 'An ester bond, formed by condensation', topic: 'Lipids' },
  { front: 'Difference between saturated and unsaturated fatty acids?', back: 'Saturated have no carbon-carbon double bonds; unsaturated have one or more, which kink the chain and lower the melting point', topic: 'Lipids' },
  { front: 'How does a phospholipid differ from a triglyceride?', back: 'One fatty acid is replaced by a phosphate group, making the molecule polar: a hydrophilic head and two hydrophobic tails', topic: 'Lipids' },
  { front: 'What is the test for lipids?', back: 'The emulsion test: mix with ethanol, then add water; a milky-white emulsion is positive', topic: 'Lipids' },

  // --- Proteins and Enzymes
  { front: 'What bond joins two amino acids?', back: 'A peptide bond, formed by condensation between the amine group of one and the carboxyl group of the other', topic: 'Proteins and Enzymes' },
  { front: 'Describe the four levels of protein structure', back: 'Primary: amino acid sequence. Secondary: hydrogen bonding into α helices/β pleated sheets. Tertiary: 3D folding held by hydrogen, ionic and disulfide bonds. Quaternary: two or more polypeptide chains', topic: 'Proteins and Enzymes' },
  { front: 'What is the test for proteins?', back: 'The biuret test: add sodium hydroxide then copper(II) sulfate; a purple/lilac colour is positive', topic: 'Proteins and Enzymes' },
  { front: 'Explain the induced fit model of enzyme action', back: 'The active site is not initially complementary; binding of the substrate changes the shape of the active site so it moulds around the substrate, straining bonds and lowering activation energy', topic: 'Proteins and Enzymes' },
  { front: 'How does a competitive inhibitor work?', back: 'It is a similar shape to the substrate and binds to the active site, blocking it. Its effect is reduced by increasing substrate concentration', topic: 'Proteins and Enzymes' },
  { front: 'How does a non-competitive inhibitor work?', back: 'It binds to an allosteric site away from the active site, changing the active site shape so the substrate no longer fits. Increasing substrate concentration does not overcome it', topic: 'Proteins and Enzymes' },
  { front: 'Why does high temperature reduce enzyme activity?', back: 'Excess kinetic energy breaks the hydrogen and ionic bonds holding the tertiary structure, so the active site changes shape and is no longer complementary: the enzyme is denatured', topic: 'Proteins and Enzymes' },

  // --- Nucleic Acids and DNA Replication
  { front: 'What are the three components of a nucleotide?', back: 'A pentose sugar, a phosphate group and a nitrogenous base', topic: 'Nucleic Acids and DNA Replication' },
  { front: 'Which bases pair together, and with how many hydrogen bonds?', back: 'Adenine with thymine (2 hydrogen bonds), guanine with cytosine (3 hydrogen bonds)', topic: 'Nucleic Acids and DNA Replication' },
  { front: 'How does DNA structure suit its function?', back: 'Sugar-phosphate backbone protects the bases; double helix and hydrogen bonds give stability; complementary base pairing allows accurate replication; it is a very long molecule so stores a lot of information', topic: 'Nucleic Acids and DNA Replication' },
  { front: 'What is semi-conservative replication?', back: 'Each new DNA molecule contains one original (template) strand and one newly synthesised strand', topic: 'Nucleic Acids and DNA Replication' },
  { front: 'Role of DNA helicase and DNA polymerase in replication?', back: 'Helicase breaks the hydrogen bonds between bases to unwind and separate the strands; polymerase joins adjacent nucleotides by forming phosphodiester bonds', topic: 'Nucleic Acids and DNA Replication' },
  { front: 'Three differences between DNA and RNA', back: 'DNA has deoxyribose, RNA has ribose; DNA has thymine, RNA has uracil; DNA is double-stranded and long, RNA is single-stranded and shorter', topic: 'Nucleic Acids and DNA Replication' },

  // --- ATP and Water
  { front: 'What is ATP hydrolysed into, and by which enzyme?', back: 'ADP and an inorganic phosphate (Pi), catalysed by ATP hydrolase, releasing energy', topic: 'ATP and Water' },
  { front: 'Why is ATP described as an immediate energy source?', back: 'It releases a small, manageable amount of energy in a single step, so little is wasted as heat, and it is quickly re-synthesised', topic: 'ATP and Water' },
  { front: 'Why is water described as a metabolite?', back: 'It is used directly in metabolic reactions such as hydrolysis, condensation and photosynthesis', topic: 'ATP and Water' },
  { front: 'Give three properties of water that matter biologically', back: 'High specific heat capacity buffers temperature change; high latent heat of vaporisation gives a cooling effect; strong cohesion supports columns of water in xylem and creates surface tension', topic: 'ATP and Water' },

  // --- Eukaryotic Cell Structure
  { front: 'Function of the rough endoplasmic reticulum?', back: 'Ribosomes on its surface synthesise proteins, which it folds and transports through the cell', topic: 'Eukaryotic Cell Structure' },
  { front: 'Function of the Golgi apparatus?', back: 'Modifies proteins and lipids, often adding carbohydrate, then packages them into vesicles for secretion or for lysosome formation', topic: 'Eukaryotic Cell Structure' },
  { front: 'How is a mitochondrion adapted to its function?', back: 'A folded inner membrane (cristae) gives a large surface area for the electron transport chain; the matrix holds enzymes for the Krebs cycle; it has its own DNA and ribosomes', topic: 'Eukaryotic Cell Structure' },
  { front: 'What is the function of a lysosome?', back: 'It contains hydrolytic enzymes (lysozymes) that break down worn-out organelles or ingested pathogens', topic: 'Eukaryotic Cell Structure' },

  // --- Prokaryotes and Viruses
  { front: 'Give four differences between prokaryotic and eukaryotic cells', back: 'Prokaryotes have no nucleus (circular free DNA), no membrane-bound organelles, smaller 70S ribosomes, and a murein cell wall', topic: 'Prokaryotes and Viruses' },
  { front: 'Why are viruses described as acellular and non-living?', back: 'They have no cell structure, no organelles, no metabolism of their own, and can only replicate inside a host cell', topic: 'Prokaryotes and Viruses' },
  { front: 'What is the role of attachment proteins on a virus?', back: 'They bind to complementary receptor proteins on the host cell surface, determining which cells the virus can infect', topic: 'Prokaryotes and Viruses' },

  // --- Microscopy
  { front: 'Define magnification and resolution', back: 'Magnification is how many times larger the image is than the object; resolution is the minimum distance apart two objects can be and still be distinguished as separate', topic: 'Microscopy' },
  { front: 'Compare TEM and SEM', back: 'TEM passes electrons through a thin specimen giving high resolution 2D internal images; SEM scans the surface giving 3D images at lower resolution', topic: 'Microscopy' },
  { front: 'Why must electron microscope specimens be in a vacuum?', back: 'Electrons are absorbed or deflected by air molecules, so a vacuum is needed for the beam to travel in a straight line. This means living specimens cannot be viewed', topic: 'Microscopy' },
  { front: 'What is the magnification formula?', back: 'Magnification = size of image / size of real object', topic: 'Microscopy' },

  // --- Mitosis and the Cell Cycle
  { front: 'List the stages of mitosis in order', back: 'Prophase, metaphase, anaphase, telophase', topic: 'Mitosis and the Cell Cycle' },
  { front: 'What happens during metaphase?', back: 'Chromosomes line up along the equator of the cell and attach to spindle fibres by their centromeres', topic: 'Mitosis and the Cell Cycle' },
  { front: 'What happens during anaphase?', back: 'Centromeres divide and spindle fibres contract, pulling sister chromatids to opposite poles of the cell', topic: 'Mitosis and the Cell Cycle' },
  { front: 'How is the mitotic index calculated?', back: 'Mitotic index = number of cells with visible chromosomes / total number of cells observed', topic: 'Mitosis and the Cell Cycle' },
  { front: 'Why is uncontrolled mitosis dangerous?', back: 'It produces a tumour; mutations in genes controlling the cell cycle allow uncontrolled division, which is the basis of cancer', topic: 'Mitosis and the Cell Cycle' },

  // --- Transport Across Membranes
  { front: 'Describe the fluid mosaic model', back: 'A phospholipid bilayer that is fluid because phospholipids move freely, with a mosaic of proteins of different shapes and sizes embedded in or spanning it', topic: 'Transport Across Membranes' },
  { front: 'What is facilitated diffusion?', back: 'Passive movement of a substance down its concentration gradient through a channel or carrier protein, requiring no ATP', topic: 'Transport Across Membranes' },
  { front: 'Define water potential and give its value for pure water', back: 'The tendency of water molecules to move from one place to another; pure water has a water potential of 0 kPa, and adding solute makes it more negative', topic: 'Transport Across Membranes' },
  { front: 'How does active transport differ from facilitated diffusion?', back: 'Active transport moves substances against the concentration gradient using ATP and carrier proteins; facilitated diffusion is passive and moves down the gradient', topic: 'Transport Across Membranes' },
  { front: 'What is co-transport in the ileum?', back: 'Sodium ions are actively pumped out of the epithelial cell, creating a gradient; sodium then re-enters with glucose through a co-transporter protein, carrying glucose in against its own gradient', topic: 'Transport Across Membranes' },

  // --- The Immune System
  { front: 'What is an antigen?', back: 'A molecule, usually a protein, on the cell surface that triggers an immune response and allows recognition of self from non-self', topic: 'The Immune System' },
  { front: 'Describe phagocytosis', back: 'The phagocyte recognises and engulfs the pathogen into a phagosome; a lysosome fuses with it and lysozymes hydrolyse the pathogen; the phagocyte then displays the antigens on its surface', topic: 'The Immune System' },
  { front: 'What is the role of a helper T cell?', back: 'Its receptors bind to the antigen presented by a phagocyte, and it releases cytokines that stimulate B cells to divide and phagocytes to engulf more pathogens', topic: 'The Immune System' },
  { front: 'What is clonal selection in the humoral response?', back: 'The B cell with the complementary antibody is selected by the antigen and stimulated to divide by mitosis into plasma cells and memory cells', topic: 'The Immune System' },
  { front: 'Difference between plasma cells and memory cells?', back: 'Plasma cells secrete large numbers of antibodies immediately (primary response); memory cells remain in the blood and divide rapidly into plasma cells on re-infection (faster, larger secondary response)', topic: 'The Immune System' },
  { front: 'Difference between active and passive immunity?', back: 'Active involves your own immune system making antibodies and memory cells, so it is slow to develop but long-lasting; passive means receiving antibodies from elsewhere, so it is immediate but short-lived with no memory cells', topic: 'The Immune System' },
  { front: 'Why is a vaccine sometimes ineffective against a virus like influenza?', back: 'Antigenic variability: the virus mutates so its surface antigens change, and existing memory cells no longer recognise them', topic: 'The Immune System' },

  // --- Surface Area to Volume Ratio
  { front: 'Why do larger organisms need specialised exchange surfaces?', back: 'As size increases, surface area to volume ratio decreases, so diffusion across the body surface alone is too slow to meet metabolic demand', topic: 'Surface Area to Volume Ratio' },
  { front: 'List the features of an efficient exchange surface', back: 'Large surface area, thin (short diffusion pathway), and a steep concentration gradient maintained by blood flow or ventilation', topic: 'Surface Area to Volume Ratio' },

  // --- Gas Exchange
  { front: 'How are alveoli adapted for gas exchange?', back: 'Very many alveoli give a huge surface area; walls are one cell thick for a short diffusion pathway; a dense capillary network and ventilation maintain the concentration gradient', topic: 'Gas Exchange' },
  { front: 'How do insects exchange gases?', back: 'Air enters through spiracles into tracheae, which branch into tracheoles that deliver oxygen directly to respiring tissues, so no blood transport is needed', topic: 'Gas Exchange' },
  { front: 'What is the countercurrent principle in fish gills?', back: 'Blood and water flow in opposite directions across the lamellae, so a diffusion gradient is maintained along the whole length of the gill and around 80% of the oxygen is absorbed', topic: 'Gas Exchange' },

  // --- Digestion and Absorption
  { front: 'Which enzymes digest starch, and to what?', back: 'Amylase hydrolyses starch to maltose; maltase (a membrane-bound disaccharidase) hydrolyses maltose to glucose', topic: 'Digestion and Absorption' },
  { front: 'What is the role of bile salts in lipid digestion?', back: 'They emulsify lipids into small droplets, increasing surface area for lipase to act on, and later form micelles that carry products to the epithelium', topic: 'Digestion and Absorption' },
  { front: 'How are amino acids absorbed in the ileum?', back: 'By co-transport with sodium ions, using a sodium gradient created by active transport out of the epithelial cell', topic: 'Digestion and Absorption' },

  // --- Mass Transport in Animals
  { front: 'Describe the shape of the oxygen dissociation curve and why', back: 'S-shaped (sigmoid): binding of the first oxygen changes haemoglobin’s shape, making further binding easier (cooperative binding), so affinity rises steeply then plateaus', topic: 'Mass Transport in Animals' },
  { front: 'What is the Bohr effect?', back: 'A higher carbon dioxide concentration lowers pH, which reduces haemoglobin’s affinity for oxygen, shifting the curve right so more oxygen is unloaded at respiring tissues', topic: 'Mass Transport in Animals' },
  { front: 'Why does an organism in a low-oxygen environment have a curve to the left?', back: 'Its haemoglobin has a higher affinity for oxygen, so it can still become saturated at low partial pressures of oxygen', topic: 'Mass Transport in Animals' },
  { front: 'How is tissue fluid formed?', back: 'High hydrostatic pressure at the arteriole end of the capillary forces water and small solutes out; at the venule end, low hydrostatic pressure and low water potential (from plasma proteins) draw most of it back in', topic: 'Mass Transport in Animals' },

  // --- Mass Transport in Plants
  { front: 'Explain the cohesion-tension theory', back: 'Water evaporates from leaves in transpiration, lowering water potential; cohesion between water molecules by hydrogen bonding pulls a continuous column up the xylem under tension, with adhesion to the xylem walls', topic: 'Mass Transport in Plants' },
  { front: 'Outline the mass flow hypothesis for translocation', back: 'At the source, sucrose is actively loaded into the phloem, lowering water potential so water enters by osmosis and raises hydrostatic pressure; at the sink sucrose is removed, so a pressure gradient drives mass flow', topic: 'Mass Transport in Plants' },
  { front: 'Name four factors affecting transpiration rate', back: 'Light intensity (stomatal opening), temperature, humidity and air movement', topic: 'Mass Transport in Plants' },

  // --- Meiosis
  { front: 'How does meiosis produce genetic variation?', back: 'Independent segregation of homologous chromosomes in metaphase I, and crossing over of alleles between chromatids in prophase I', topic: 'Meiosis' },
  { front: 'How many divisions does meiosis involve and what is the result?', back: 'Two divisions producing four genetically different haploid daughter cells from one diploid parent cell', topic: 'Meiosis' },
  { front: 'What is the formula for possible chromosome combinations from independent segregation?', back: '2ⁿ, where n is the number of homologous chromosome pairs', topic: 'Meiosis' },

  // --- Genetic Diversity and Mutation
  { front: 'What is a gene mutation and when do they typically arise?', back: 'A change in the base sequence of DNA, arising spontaneously during DNA replication', topic: 'Genetic Diversity and Mutation' },
  { front: 'Why might a substitution mutation have no effect?', back: 'The genetic code is degenerate, so the new triplet may still code for the same amino acid, leaving the protein unchanged', topic: 'Genetic Diversity and Mutation' },
  { front: 'Why is a frameshift mutation usually more damaging than a substitution?', back: 'A deletion or insertion shifts the reading frame, so every triplet downstream is altered and the primary structure changes dramatically', topic: 'Genetic Diversity and Mutation' },
  { front: 'Define genetic diversity', back: 'The number of different alleles of genes in a population', topic: 'Genetic Diversity and Mutation' },

  // --- Species and Taxonomy
  { front: 'Define a species', back: 'A group of organisms with similar characteristics that can breed together to produce fertile offspring', topic: 'Species and Taxonomy' },
  { front: 'List the taxonomic hierarchy from domain down', back: 'Domain, kingdom, phylum, class, order, family, genus, species', topic: 'Species and Taxonomy' },
  { front: 'How does DNA evidence improve classification?', back: 'Comparing base sequences shows evolutionary relationships directly, so more closely related species have more similar sequences, rather than relying on observable features that may be convergent', topic: 'Species and Taxonomy' },

  // --- Biodiversity
  { front: 'What does the index of diversity measure?', back: 'The relationship between the number of species in a community and the number of individuals in each species, so it accounts for abundance as well as species richness', topic: 'Biodiversity' },
  { front: 'How does farming reduce biodiversity?', back: 'Monoculture, hedgerow removal, pesticides and herbicides all remove habitats and species, lowering both species richness and the index of diversity', topic: 'Biodiversity' },

  // --- Photosynthesis
  { front: 'Where do the light-dependent and light-independent reactions occur?', back: 'Light-dependent in the thylakoid membranes; light-independent (Calvin cycle) in the stroma of the chloroplast', topic: 'Photosynthesis' },
  { front: 'What are the products of the light-dependent reaction?', back: 'ATP, reduced NADP and oxygen (from photolysis of water)', topic: 'Photosynthesis' },
  { front: 'Outline the Calvin cycle', back: 'CO2 combines with RuBP via rubisco to form two GP; GP is reduced to TP using ATP and reduced NADP; most TP regenerates RuBP, and some forms useful organic substances', topic: 'Photosynthesis' },

  // --- Respiration
  { front: 'Name the four stages of aerobic respiration and where each occurs', back: 'Glycolysis (cytoplasm), link reaction (mitochondrial matrix), Krebs cycle (matrix), oxidative phosphorylation (inner mitochondrial membrane)', topic: 'Respiration' },
  { front: 'What is the net ATP yield of glycolysis?', back: 'Net 2 ATP (4 produced, 2 used), plus 2 reduced NAD and 2 pyruvate', topic: 'Respiration' },
  { front: 'What is the role of oxygen in respiration?', back: 'It is the final electron acceptor in the electron transport chain, combining with electrons and protons to form water, which keeps the chain running', topic: 'Respiration' },
  { front: 'What happens in anaerobic respiration in mammals?', back: 'Pyruvate is reduced to lactate by reduced NAD, regenerating NAD so glycolysis can continue producing a small amount of ATP', topic: 'Respiration' },

  // --- Energy and Ecosystems
  { front: 'Why is energy transfer between trophic levels inefficient?', back: 'Not all of the organism is eaten or digestible, and energy is lost as heat through respiration and in excretory products, so only around 10% passes on', topic: 'Energy and Ecosystems' },
  { front: 'What does net primary production (NPP) mean?', back: 'The chemical energy store in plant biomass after respiratory losses: NPP = GPP minus respiratory losses. It is the energy available to the next trophic level', topic: 'Energy and Ecosystems' },

  // --- Nervous Coordination
  { front: 'How is the resting potential of about -70mV maintained?', back: 'The sodium-potassium pump actively moves 3 Na+ out for every 2 K+ in, and the membrane is more permeable to K+ which diffuses out, leaving the inside negative', topic: 'Nervous Coordination' },
  { front: 'Describe depolarisation during an action potential', back: 'Voltage-gated sodium channels open, Na+ floods in down the electrochemical gradient, and the inside becomes positive (about +40mV)', topic: 'Nervous Coordination' },
  { front: 'What is the refractory period for?', back: 'Sodium channels are inactivated so a new action potential cannot form, ensuring impulses travel in one direction only and limiting their frequency', topic: 'Nervous Coordination' },
  { front: 'Give three factors that increase the speed of conduction', back: 'Myelination (saltatory conduction between nodes of Ranvier), larger axon diameter, and higher temperature', topic: 'Nervous Coordination' },

  // --- Homeostasis
  { front: 'What is negative feedback?', back: 'A mechanism that reverses a deviation from the set point, returning the internal environment to normal', topic: 'Homeostasis' },
  { front: 'How does insulin lower blood glucose?', back: 'It binds to receptors on liver and muscle cells, increasing the number of glucose transporters in the membrane and activating enzymes for glycogenesis (glucose to glycogen)', topic: 'Homeostasis' },
  { front: 'How does glucagon raise blood glucose?', back: 'It activates enzymes for glycogenolysis (glycogen to glucose) and gluconeogenesis (glucose from non-carbohydrate sources) in the liver', topic: 'Homeostasis' },
  { front: 'Difference between type 1 and type 2 diabetes?', back: 'Type 1: the immune system destroys β cells so little or no insulin is produced, treated with insulin injections. Type 2: receptors lose responsiveness to insulin, usually managed by diet and exercise', topic: 'Homeostasis' },

  // --- Populations and Evolution
  { front: 'State the Hardy-Weinberg equations', back: 'p + q = 1 for allele frequencies, and p² + 2pq + q² = 1 for genotype frequencies', topic: 'Populations and Evolution' },
  { front: 'What conditions must hold for Hardy-Weinberg to apply?', back: 'A large population, random mating, no mutation, no migration and no selection', topic: 'Populations and Evolution' },
  { front: 'Compare directional and stabilising selection', back: 'Directional selection favours one extreme, shifting the mean; stabilising selection favours the middle and removes extremes, reducing variation', topic: 'Populations and Evolution' },
  { front: 'How does allopatric speciation occur?', back: 'A population is geographically isolated, so the groups face different selection pressures and their allele frequencies diverge until they can no longer interbreed to produce fertile offspring', topic: 'Populations and Evolution' },
]

export const BIOLOGY_MCQ = [
  { question: 'Which bond is formed when two monosaccharides join?', options: ['Peptide bond', 'Glycosidic bond', 'Ester bond', 'Phosphodiester bond'], answer: 1, explanation: 'Monosaccharides join by condensation to form a glycosidic bond.', topic: 'Carbohydrates' },
  { question: 'Which polysaccharide is made of β-glucose?', options: ['Amylose', 'Glycogen', 'Cellulose', 'Amylopectin'], answer: 2, explanation: 'Cellulose is the only one of these made from β-glucose, with alternate molecules inverted.', topic: 'Carbohydrates' },
  { question: 'A positive Benedict’s test produces which colour?', options: ['Purple', 'Blue-black', 'Brick-red', 'Milky white'], answer: 2, explanation: 'A brick-red precipitate indicates a reducing sugar. Purple is biuret (protein), blue-black is iodine (starch), milky white is the emulsion test (lipid).', topic: 'Carbohydrates' },
  { question: 'Which bond is formed between glycerol and a fatty acid?', options: ['Ester', 'Glycosidic', 'Peptide', 'Hydrogen'], answer: 0, explanation: 'Condensation between glycerol and a fatty acid forms an ester bond.', topic: 'Lipids' },
  { question: 'Which level of protein structure is held together by peptide bonds only?', options: ['Primary', 'Secondary', 'Tertiary', 'Quaternary'], answer: 0, explanation: 'Primary structure is the sequence of amino acids joined by peptide bonds.', topic: 'Proteins and Enzymes' },
  { question: 'Increasing substrate concentration reverses the effect of which inhibitor?', options: ['Non-competitive', 'Competitive', 'Both equally', 'Neither'], answer: 1, explanation: 'A competitive inhibitor competes for the active site, so more substrate outcompetes it. A non-competitive inhibitor binds elsewhere and is unaffected.', topic: 'Proteins and Enzymes' },
  { question: 'How many hydrogen bonds form between guanine and cytosine?', options: ['1', '2', '3', '4'], answer: 2, explanation: 'G-C pairs have three hydrogen bonds; A-T pairs have two.', topic: 'Nucleic Acids and DNA Replication' },
  { question: 'Which enzyme forms phosphodiester bonds during DNA replication?', options: ['DNA helicase', 'DNA polymerase', 'DNA ligase', 'ATP hydrolase'], answer: 1, explanation: 'DNA polymerase joins adjacent nucleotides by forming phosphodiester bonds.', topic: 'Nucleic Acids and DNA Replication' },
  { question: 'Which base is present in RNA but not DNA?', options: ['Thymine', 'Uracil', 'Cytosine', 'Guanine'], answer: 1, explanation: 'RNA contains uracil in place of thymine.', topic: 'Nucleic Acids and DNA Replication' },
  { question: 'ATP is hydrolysed to which products?', options: ['ADP and Pi', 'AMP and 2Pi', 'Adenine and ribose', 'ADP and water'], answer: 0, explanation: 'ATP hydrolase splits ATP into ADP and an inorganic phosphate, releasing energy.', topic: 'ATP and Water' },
  { question: 'Which organelle modifies and packages proteins into vesicles?', options: ['Rough ER', 'Golgi apparatus', 'Lysosome', 'Nucleolus'], answer: 1, explanation: 'The Golgi apparatus modifies proteins and packages them into vesicles.', topic: 'Eukaryotic Cell Structure' },
  { question: 'Which structure gives mitochondria a large surface area for the electron transport chain?', options: ['Matrix', 'Cristae', 'Outer membrane', 'Ribosomes'], answer: 1, explanation: 'Cristae are folds of the inner membrane that hold the electron transport chain.', topic: 'Eukaryotic Cell Structure' },
  { question: 'Prokaryotic cell walls are made of which substance?', options: ['Cellulose', 'Chitin', 'Murein', 'Keratin'], answer: 2, explanation: 'Bacterial cell walls are made of murein (peptidoglycan).', topic: 'Prokaryotes and Viruses' },
  { question: 'Which of these is NOT found in a prokaryotic cell?', options: ['Ribosomes', 'Cell wall', 'Mitochondria', 'Plasmid'], answer: 2, explanation: 'Prokaryotes have no membrane-bound organelles, so no mitochondria.', topic: 'Prokaryotes and Viruses' },
  { question: 'Resolution of a microscope is best defined as', options: ['how many times bigger the image is', 'the minimum distance at which two points appear separate', 'the brightness of the image', 'the depth of field'], answer: 1, explanation: 'Resolution is the shortest distance between two points that can still be distinguished as separate.', topic: 'Microscopy' },
  { question: 'Chromatids are pulled to opposite poles during which stage?', options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'], answer: 2, explanation: 'In anaphase the centromeres divide and spindle fibres pull chromatids apart.', topic: 'Mitosis and the Cell Cycle' },
  { question: 'Water moves by osmosis from a solution of water potential -20 kPa to one of', options: ['-10 kPa', '-30 kPa', '0 kPa', 'it will not move'], answer: 1, explanation: 'Water moves down a water potential gradient, from higher (less negative) to lower (more negative), so towards -30 kPa.', topic: 'Transport Across Membranes' },
  { question: 'Which process requires ATP?', options: ['Simple diffusion', 'Facilitated diffusion', 'Osmosis', 'Active transport'], answer: 3, explanation: 'Only active transport moves substances against the gradient using ATP.', topic: 'Transport Across Membranes' },
  { question: 'Which cell releases cytokines to stimulate B cells?', options: ['Plasma cell', 'Helper T cell', 'Memory cell', 'Phagocyte'], answer: 1, explanation: 'Helper T cells release cytokines that stimulate B cells and phagocytes.', topic: 'The Immune System' },
  { question: 'The secondary immune response is faster because of', options: ['more antigens', 'memory cells', 'more phagocytes', 'higher temperature'], answer: 1, explanation: 'Memory cells persist and divide rapidly into plasma cells on re-exposure.', topic: 'The Immune System' },
  { question: 'Receiving antibodies in breast milk is an example of', options: ['active natural immunity', 'active artificial immunity', 'passive natural immunity', 'passive artificial immunity'], answer: 2, explanation: 'Antibodies come from another organism naturally, so it is passive natural immunity.', topic: 'The Immune System' },
  { question: 'As an organism gets larger, its surface area to volume ratio', options: ['increases', 'decreases', 'stays the same', 'doubles'], answer: 1, explanation: 'Volume increases faster than surface area, so the ratio decreases.', topic: 'Surface Area to Volume Ratio' },
  { question: 'In fish gills, countercurrent flow means water and blood flow', options: ['in the same direction', 'in opposite directions', 'at right angles', 'intermittently'], answer: 1, explanation: 'Opposite directions maintain a diffusion gradient along the whole lamella.', topic: 'Gas Exchange' },
  { question: 'Gases reach insect tissues directly through', options: ['blood', 'tracheoles', 'lamellae', 'alveoli'], answer: 1, explanation: 'Tracheoles deliver oxygen directly to respiring tissues.', topic: 'Gas Exchange' },
  { question: 'Bile salts aid lipid digestion by', options: ['hydrolysing ester bonds', 'emulsifying lipids', 'neutralising acid only', 'absorbing fatty acids'], answer: 1, explanation: 'Bile salts emulsify lipids into small droplets, increasing surface area for lipase.', topic: 'Digestion and Absorption' },
  { question: 'The Bohr effect shifts the dissociation curve which way?', options: ['Left', 'Right', 'Up', 'It does not shift'], answer: 1, explanation: 'Higher CO2 lowers pH and affinity, shifting the curve right so more oxygen unloads.', topic: 'Mass Transport in Animals' },
  { question: 'Water is pulled up the xylem mainly by', options: ['root pressure', 'transpiration pull and cohesion', 'active transport', 'mass flow from the phloem'], answer: 1, explanation: 'Cohesion-tension: evaporation creates tension and cohesion holds the column together.', topic: 'Mass Transport in Plants' },
  { question: 'Meiosis produces', options: ['2 diploid identical cells', '4 haploid identical cells', '4 haploid genetically different cells', '2 haploid different cells'], answer: 2, explanation: 'Two divisions give four genetically different haploid cells.', topic: 'Meiosis' },
  { question: 'A substitution mutation may have no effect because the genetic code is', options: ['universal', 'degenerate', 'non-overlapping', 'triplet'], answer: 1, explanation: 'Degeneracy means several triplets code for the same amino acid.', topic: 'Genetic Diversity and Mutation' },
  { question: 'Which taxonomic group is the largest?', options: ['Genus', 'Family', 'Order', 'Phylum'], answer: 3, explanation: 'Order of size: domain, kingdom, phylum, class, order, family, genus, species.', topic: 'Species and Taxonomy' },
  { question: 'Photolysis of water occurs during', options: ['the Calvin cycle', 'the light-dependent reaction', 'the link reaction', 'glycolysis'], answer: 1, explanation: 'Water is split in the light-dependent reaction, giving electrons, protons and oxygen.', topic: 'Photosynthesis' },
  { question: 'Which enzyme fixes carbon dioxide in the Calvin cycle?', options: ['ATP synthase', 'Rubisco', 'Dehydrogenase', 'Decarboxylase'], answer: 1, explanation: 'Rubisco catalyses the reaction of CO2 with RuBP.', topic: 'Photosynthesis' },
  { question: 'The link reaction takes place in the', options: ['cytoplasm', 'mitochondrial matrix', 'inner membrane', 'stroma'], answer: 1, explanation: 'The link reaction occurs in the mitochondrial matrix.', topic: 'Respiration' },
  { question: 'The net ATP yield from glycolysis alone is', options: ['0', '2', '4', '38'], answer: 1, explanation: '4 ATP are produced but 2 are used, so the net yield is 2.', topic: 'Respiration' },
  { question: 'Roughly what percentage of energy passes to the next trophic level?', options: ['1%', '10%', '50%', '90%'], answer: 1, explanation: 'Around 10%, with the rest lost to respiration, excretion and uneaten parts.', topic: 'Energy and Ecosystems' },
  { question: 'During depolarisation, which ion enters the axon?', options: ['Potassium', 'Sodium', 'Calcium', 'Chloride'], answer: 1, explanation: 'Voltage-gated sodium channels open and Na+ floods in.', topic: 'Nervous Coordination' },
  { question: 'Myelination increases conduction speed because of', options: ['larger diameter', 'saltatory conduction', 'more mitochondria', 'higher temperature'], answer: 1, explanation: 'The impulse jumps between nodes of Ranvier, which is faster than continuous conduction.', topic: 'Nervous Coordination' },
  { question: 'Glucagon raises blood glucose by stimulating', options: ['glycogenesis', 'glycogenolysis', 'lipogenesis', 'protein synthesis'], answer: 1, explanation: 'Glycogenolysis breaks glycogen down into glucose.', topic: 'Homeostasis' },
  { question: 'In Hardy-Weinberg, q² represents the frequency of', options: ['the recessive allele', 'homozygous recessive individuals', 'heterozygous individuals', 'the dominant allele'], answer: 1, explanation: 'q is the recessive allele frequency, so q² is the homozygous recessive genotype frequency.', topic: 'Populations and Evolution' },
  { question: 'Selection that favours the mean and removes extremes is', options: ['directional', 'stabilising', 'disruptive', 'artificial'], answer: 1, explanation: 'Stabilising selection favours intermediate phenotypes and reduces variation.', topic: 'Populations and Evolution' },
]

export const BIOLOGY_EXAM = [
  { question: 'Describe how the structure of starch makes it a good storage molecule.', marks: 3, markScheme: ['Insoluble so it does not affect water potential / no osmotic effect', 'Large molecule so cannot leave the cell', 'Branched (amylopectin) giving many ends for rapid hydrolysis to glucose', 'Final answer: any three of the above'], topic: 'Carbohydrates' },
  { question: 'Explain why a change in pH can reduce the rate of an enzyme-controlled reaction.', marks: 3, markScheme: ['A change in pH alters the charges on the R groups of amino acids', 'This breaks ionic and hydrogen bonds holding the tertiary structure', 'The active site changes shape so it is no longer complementary to the substrate, so fewer enzyme-substrate complexes form', 'Final answer: denaturation of the active site reduces enzyme-substrate complex formation'], topic: 'Proteins and Enzymes' },
  { question: 'Describe the induced fit model of enzyme action.', marks: 3, markScheme: ['The active site is not initially complementary to the substrate', 'Binding of the substrate causes the active site to change shape and mould around it', 'This puts strain on the substrate bonds, lowering the activation energy', 'Final answer: the active site changes shape to fit the substrate, lowering activation energy'], topic: 'Proteins and Enzymes' },
  { question: 'Explain how the structure of DNA allows it to be replicated accurately.', marks: 3, markScheme: ['Complementary base pairing (A-T, G-C) means each strand acts as a template', 'Hydrogen bonds between bases can be broken by helicase without breaking the backbone', 'DNA polymerase joins nucleotides in the correct order determined by the template', 'Final answer: complementary base pairing on a template strand gives accurate copying'], topic: 'Nucleic Acids and DNA Replication' },
  { question: 'Scientists grew bacteria in heavy nitrogen then transferred them to light nitrogen. Explain how the results supported semi-conservative replication.', marks: 4, markScheme: ['After one generation all DNA was of intermediate density', 'This shows each molecule contained one heavy (original) and one light (new) strand', 'After two generations half was intermediate and half was light', 'Conservative replication would have given only heavy and light bands with none intermediate', 'Final answer: the intermediate band after one generation ruled out conservative replication'], topic: 'Nucleic Acids and DNA Replication' },
  { question: 'Explain two ways in which the structure of a mitochondrion is adapted to its function.', marks: 4, markScheme: ['Cristae are folds of the inner membrane', 'These give a large surface area for the electron transport chain / ATP synthase', 'The matrix contains enzymes for the Krebs cycle', 'It has its own DNA and 70S ribosomes so can make some of its own proteins', 'Final answer: any two adaptations, each with its function'], topic: 'Eukaryotic Cell Structure' },
  { question: 'Give three ways a prokaryotic cell differs from a eukaryotic cell.', marks: 3, markScheme: ['No nucleus, DNA is circular and free in the cytoplasm', 'No membrane-bound organelles such as mitochondria', 'Smaller 70S ribosomes rather than 80S', 'Cell wall made of murein', 'Final answer: any three of the above'], topic: 'Prokaryotes and Viruses' },
  { question: 'A student measured a cell as 25 mm on an image with a magnification of 500. Calculate the real length in micrometres.', marks: 2, markScheme: ['Real size = image size / magnification = 25 / 500 = 0.05 mm', 'Convert: 0.05 mm x 1000 = 50 micrometres', 'Final answer: 50 micrometres'], topic: 'Microscopy' },
  { question: 'Explain why a cell placed in a concentrated sucrose solution becomes plasmolysed.', marks: 3, markScheme: ['The external solution has a lower (more negative) water potential than the cell', 'Water leaves the cell by osmosis down the water potential gradient through the partially permeable membrane', 'The protoplast shrinks and pulls away from the cell wall', 'Final answer: water leaves by osmosis so the membrane pulls away from the wall'], topic: 'Transport Across Membranes' },
  { question: 'Describe how glucose is absorbed from the ileum into the blood by co-transport.', marks: 4, markScheme: ['Sodium ions are actively transported out of the epithelial cell into the blood', 'This creates a sodium concentration gradient into the cell from the lumen', 'Sodium re-enters through a co-transporter protein, bringing glucose in with it against its gradient', 'Glucose then moves into the blood by facilitated diffusion', 'Final answer: a sodium gradient created by active transport drives glucose in via a co-transporter'], topic: 'Digestion and Absorption' },
  { question: 'Explain how a phagocyte destroys a pathogen and presents its antigens.', marks: 4, markScheme: ['The phagocyte recognises non-self antigens and engulfs the pathogen by endocytosis', 'The pathogen is enclosed in a phagosome/vesicle', 'A lysosome fuses with it and lysozymes hydrolyse the pathogen', 'The phagocyte displays the pathogen antigens on its cell surface membrane, becoming an antigen-presenting cell', 'Final answer: engulf, fuse with lysosome, hydrolyse, then present antigens'], topic: 'The Immune System' },
  { question: 'Explain why a vaccine against influenza must be changed regularly.', marks: 3, markScheme: ['The influenza virus shows antigenic variability', 'Mutations change the surface antigens/proteins', 'Memory cells from previous infection or vaccination no longer recognise the new antigens, so there is no secondary response', 'Final answer: antigen changes mean existing memory cells cannot recognise the virus'], topic: 'The Immune System' },
  { question: 'Explain the advantage of countercurrent flow in fish gills.', marks: 3, markScheme: ['Water and blood flow in opposite directions across the lamellae', 'A concentration gradient for oxygen is maintained along the entire length of the lamella', 'So diffusion occurs across the whole gill, absorbing far more oxygen than parallel flow would', 'Final answer: the gradient is maintained along the whole length, maximising oxygen uptake'], topic: 'Gas Exchange' },
  { question: 'Explain how tissue fluid is formed and returned to the circulatory system.', marks: 4, markScheme: ['At the arteriole end, high hydrostatic pressure forces water and small solutes out of the capillary', 'Plasma proteins remain in the capillary, lowering its water potential', 'At the venule end hydrostatic pressure has fallen, so water re-enters by osmosis down the water potential gradient', 'Excess tissue fluid drains into the lymphatic system and returns to the blood', 'Final answer: hydrostatic pressure out at the arteriole end, osmosis back in at the venule end, excess via lymph'], topic: 'Mass Transport in Animals' },
  { question: 'Explain the cohesion-tension theory of water transport in the xylem.', marks: 4, markScheme: ['Water evaporates from the mesophyll cells and is lost through stomata in transpiration', 'This lowers the water potential of the leaf, drawing water out of the xylem', 'Water molecules are held together by cohesion from hydrogen bonding, forming a continuous column', 'The column is pulled up under tension, with adhesion to the xylem walls helping', 'Final answer: transpiration creates tension and cohesion pulls a continuous water column upwards'], topic: 'Mass Transport in Plants' },
  { question: 'Explain how meiosis produces genetic variation.', marks: 4, markScheme: ['Crossing over in prophase I exchanges alleles between homologous chromatids', 'This produces new combinations of alleles on a chromosome', 'Independent segregation in metaphase I means maternal and paternal chromosomes assort randomly', 'This gives 2ⁿ possible combinations in the gametes', 'Final answer: crossing over and independent segregation both create new allele combinations'], topic: 'Meiosis' },
  { question: 'In a population, 16% of individuals show the recessive phenotype. Calculate the frequency of the dominant allele.', marks: 3, markScheme: ['q² = 0.16, so q = 0.4', 'p + q = 1, so p = 1 - 0.4', 'Final answer: p = 0.6'], topic: 'Populations and Evolution' },
  { question: 'Explain how a new species can form by allopatric speciation.', marks: 4, markScheme: ['A population becomes geographically isolated, for example by a river or mountain range', 'The two populations experience different selection pressures / environmental conditions', 'Different alleles are advantageous, so allele frequencies change differently in each population', 'Eventually they are so different they can no longer interbreed to produce fertile offspring', 'Final answer: geographical isolation plus different selection pressures leads to reproductive isolation'], topic: 'Populations and Evolution' },
  { question: 'Explain why the rate of photosynthesis levels off at high light intensity.', marks: 3, markScheme: ['Light is no longer the limiting factor', 'Another factor becomes limiting, such as carbon dioxide concentration or temperature', 'The light-independent reaction cannot use ATP and reduced NADP any faster', 'Final answer: another factor such as CO2 or temperature becomes limiting'], topic: 'Photosynthesis' },
  { question: 'Explain the role of oxygen in oxidative phosphorylation.', marks: 3, markScheme: ['Oxygen is the final electron acceptor at the end of the electron transport chain', 'It combines with electrons and protons to form water', 'This keeps the chain running so protons continue to be pumped and ATP synthesis continues', 'Final answer: as final electron acceptor it allows the chain to keep operating'], topic: 'Respiration' },
]

// Short revision notes per topic. Trusted static HTML (see RevisionRunner).
export const BIOLOGY_NOTES = {
  'Monomers and Polymers': '<h3>The basics</h3><p>Monomers are small units that join to make polymers. Condensation joins two molecules and releases water; hydrolysis uses water to break a bond.</p><p class="exam-tip">Exam tip: name the bond AND the reaction type. Glycosidic (carbohydrates), peptide (proteins), ester (lipids), phosphodiester (nucleic acids).</p>',
  Carbohydrates: '<h3>Structure</h3><ul><li>Monosaccharides: glucose, fructose, galactose</li><li>Disaccharides: maltose, sucrose, lactose</li><li>Polysaccharides: starch, glycogen, cellulose</li></ul><h3>Storage vs structure</h3><p>Starch and glycogen are α-glucose, coiled and branched for compact storage and fast hydrolysis. Cellulose is β-glucose with alternate units flipped, giving straight chains and strong microfibrils.</p><p class="exam-tip">Exam tip: glycogen is more branched than starch because animals have a higher metabolic rate.</p>',
  Lipids: '<h3>Triglycerides and phospholipids</h3><p>A triglyceride is glycerol plus three fatty acids joined by ester bonds. In a phospholipid one fatty acid is replaced by a phosphate group, making it polar.</p><p>Unsaturated fatty acids have C=C double bonds that kink the chain, lowering the melting point.</p><h3>Test</h3><p>Emulsion test: ethanol then water gives a milky white emulsion.</p>',
  'Proteins and Enzymes': '<h3>Four structures</h3><p>Primary (sequence), secondary (hydrogen bonds, helices and sheets), tertiary (3D shape from hydrogen, ionic and disulfide bonds), quaternary (multiple chains).</p><h3>Enzymes</h3><p>Induced fit: the active site moulds around the substrate, straining bonds and lowering activation energy.</p><p class="exam-tip">Exam tip: for any "explain the effect of X on rate" question, always link back to active site shape and the number of enzyme-substrate complexes.</p>',
  'Nucleic Acids and DNA Replication': '<h3>Structure</h3><p>Nucleotide = pentose + phosphate + base. A pairs with T (2 H bonds), G with C (3 H bonds).</p><h3>Replication</h3><p>Helicase unwinds and breaks hydrogen bonds. Each strand is a template. DNA polymerase forms phosphodiester bonds. Result is semi-conservative: one old strand, one new.</p>',
  'ATP and Water': '<h3>ATP</h3><p>Hydrolysed by ATP hydrolase to ADP + Pi, releasing a small usable amount of energy. Re-synthesised by ATP synthase.</p><h3>Water</h3><p>Metabolite, solvent, high specific heat capacity, high latent heat of vaporisation, cohesive (supports xylem columns and surface tension).</p>',
  'Eukaryotic Cell Structure': '<h3>Key organelles</h3><ul><li>Nucleus: holds DNA, nucleolus makes ribosomes</li><li>Rough ER: protein synthesis and transport</li><li>Golgi: modifies and packages, forms lysosomes</li><li>Mitochondria: aerobic respiration, cristae give surface area</li><li>Lysosome: hydrolytic enzymes</li></ul>',
  'Prokaryotes and Viruses': '<h3>Prokaryotes</h3><p>No nucleus, circular DNA, no membrane-bound organelles, 70S ribosomes, murein cell wall. May have plasmids, capsule, flagellum.</p><h3>Viruses</h3><p>Acellular: nucleic acid in a protein capsid, sometimes with a lipid envelope. Attachment proteins bind host receptors.</p>',
  Microscopy: '<h3>Magnification vs resolution</h3><p>Magnification = image / actual. Resolution is the minimum distance at which two points appear separate.</p><h3>TEM vs SEM</h3><p>TEM: electrons pass through, 2D, highest resolution. SEM: electrons scan the surface, 3D, lower resolution. Both need a vacuum, so specimens cannot be alive.</p>',
  'Mitosis and the Cell Cycle': '<h3>Stages</h3><p>Interphase (G1, S, G2) then prophase, metaphase, anaphase, telophase, then cytokinesis.</p><p>Mitotic index = cells in mitosis / total cells.</p><p class="exam-tip">Exam tip: cancer arises when mutations in genes controlling the cell cycle cause uncontrolled mitosis.</p>',
  'Transport Across Membranes': '<h3>Fluid mosaic</h3><p>Phospholipid bilayer with embedded proteins that can move.</p><h3>Movement</h3><ul><li>Simple diffusion: small non-polar, down gradient</li><li>Facilitated diffusion: channel/carrier proteins, down gradient, no ATP</li><li>Osmosis: water, high to low water potential</li><li>Active transport: carrier proteins, against gradient, uses ATP</li><li>Co-transport: sodium gradient carries glucose or amino acids in</li></ul>',
  'The Immune System': '<h3>Order of events</h3><p>Phagocytosis, then antigen presentation, then helper T cells release cytokines, then clonal selection of B cells into plasma cells (antibodies) and memory cells.</p><h3>Immunity types</h3><p>Active (own response, slow, long-lasting) vs passive (given antibodies, immediate, short). Natural vs artificial.</p>',
  'Surface Area to Volume Ratio': '<h3>Why it matters</h3><p>Volume grows faster than surface area, so bigger organisms cannot rely on diffusion alone.</p><p>Efficient exchange surfaces are large, thin, and keep a steep gradient by blood flow or ventilation.</p>',
  'Gas Exchange': '<h3>Systems to compare</h3><ul><li>Alveoli: huge surface area, one cell thick, dense capillaries</li><li>Insects: spiracles, tracheae, tracheoles direct to tissues</li><li>Fish: countercurrent flow across lamellae</li><li>Plants: stomata, guard cells control water loss</li></ul>',
  'Digestion and Absorption': '<h3>Enzymes</h3><p>Amylase (starch to maltose), maltase/sucrase/lactase (membrane-bound), endopeptidases and exopeptidases, lipase with bile salts.</p><h3>Absorption</h3><p>Glucose and amino acids by sodium co-transport; lipids via micelles then diffusion, reassembled and released as chylomicrons.</p>',
  'Mass Transport in Animals': '<h3>Haemoglobin</h3><p>Sigmoid dissociation curve from cooperative binding. Bohr effect: more CO2, lower pH, curve shifts right, more oxygen unloaded.</p><h3>Tissue fluid</h3><p>Hydrostatic pressure pushes fluid out at the arteriole end; low water potential draws it back at the venule end; the rest returns via lymph.</p>',
  'Mass Transport in Plants': '<h3>Xylem</h3><p>Cohesion-tension: transpiration pulls a continuous column held by hydrogen bonding, with adhesion to walls.</p><h3>Phloem</h3><p>Mass flow: sucrose actively loaded at source lowers water potential, water enters, hydrostatic pressure drives flow to the sink.</p>',
  Meiosis: '<h3>Variation</h3><p>Crossing over (prophase I) swaps alleles between chromatids. Independent segregation (metaphase I) assorts homologous pairs randomly, giving 2ⁿ combinations.</p><p>Two divisions, four genetically different haploid cells.</p>',
  'Genetic Diversity and Mutation': '<h3>Mutation types</h3><p>Substitution may be silent because the code is degenerate. Deletion or insertion causes a frameshift, altering every triplet downstream.</p><p>Genetic diversity is the number of different alleles in a population, increased by mutation and gene flow.</p>',
  'Species and Taxonomy': '<h3>Hierarchy</h3><p>Domain, kingdom, phylum, class, order, family, genus, species.</p><p>A species can interbreed to produce fertile offspring. DNA and protein sequence comparison gives better evidence of relatedness than appearance alone.</p>',
  Biodiversity: '<h3>Measuring</h3><p>Species richness counts species. The index of diversity also accounts for abundance of each species.</p><p>Farming reduces diversity via monoculture, hedgerow removal and pesticides. Conservation balances this against food production.</p>',
  Photosynthesis: '<h3>Light-dependent</h3><p>In thylakoid membranes. Photolysis of water gives electrons, protons and oxygen. Produces ATP and reduced NADP.</p><h3>Calvin cycle</h3><p>In the stroma. CO2 + RuBP via rubisco gives 2 GP, reduced to TP using ATP and reduced NADP; most TP regenerates RuBP.</p>',
  Respiration: '<h3>Four stages</h3><ul><li>Glycolysis (cytoplasm): net 2 ATP, 2 reduced NAD, 2 pyruvate</li><li>Link reaction (matrix): pyruvate to acetyl CoA, CO2 released</li><li>Krebs cycle (matrix): reduced NAD and FAD, ATP, CO2</li><li>Oxidative phosphorylation (inner membrane): chemiosmosis, oxygen as final electron acceptor</li></ul>',
  'Energy and Ecosystems': '<h3>Efficiency</h3><p>Roughly 10% passes between trophic levels. Losses: uneaten or indigestible parts, respiration as heat, excretion.</p><p>NPP = GPP minus respiratory losses. This is what is available to the next level.</p>',
  'Nervous Coordination': '<h3>Action potential</h3><p>Resting -70mV maintained by the sodium-potassium pump. Depolarisation: Na+ in. Repolarisation: K+ out. Refractory period ensures one-way travel and limits frequency.</p><p>Speed increases with myelination (saltatory conduction), axon diameter and temperature.</p>',
  Homeostasis: '<h3>Negative feedback</h3><p>Reverses a deviation to restore the set point.</p><h3>Blood glucose</h3><p>Insulin (β cells) lowers it: more transporters, glycogenesis. Glucagon (α cells) raises it: glycogenolysis, gluconeogenesis.</p><p class="exam-tip">Exam tip: type 1 is destroyed β cells (no insulin); type 2 is receptors losing responsiveness.</p>',
  'Populations and Evolution': '<h3>Hardy-Weinberg</h3><p>p + q = 1 and p² + 2pq + q² = 1. Assumes a large population, random mating, no mutation, migration or selection.</p><h3>Selection</h3><p>Directional shifts the mean; stabilising favours the mean and cuts extremes; disruptive favours both extremes.</p>',
}
