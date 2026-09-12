/*
  Physics - AQA A-level (7408).

  Topic strings in FLASHCARDS / MCQ / EXAM must match the titles in GROUPS
  exactly. scripts/check-content.mjs enforces this.
*/

export const PHYSICS_GROUPS = [
  {
    label: 'Paper 1: Mechanics, Materials, Waves and Electricity',
    subgroups: [
      {
        label: 'Particles and Quantum',
        topics: ['Particles and Antiparticles', 'Quarks and Interactions', 'Quantum Phenomena'],
      },
      { label: 'Waves', topics: ['Progressive and Stationary Waves', 'Refraction and Interference'] },
      {
        label: 'Mechanics and Materials',
        topics: ['Forces and Motion', 'Momentum and Energy', 'Materials and Young Modulus'],
      },
      { label: 'Electricity', topics: ['Current Electricity', 'Circuits and EMF'] },
    ],
  },
  {
    label: 'Paper 2: Fields, Thermal Physics and Nuclear',
    subgroups: [
      { label: 'Further Mechanics', topics: ['Circular Motion', 'Simple Harmonic Motion'] },
      { label: 'Thermal Physics', topics: ['Thermal Energy Transfer', 'Gas Laws and Kinetic Theory'] },
      {
        label: 'Fields',
        topics: ['Gravitational Fields', 'Electric Fields', 'Capacitance', 'Magnetic Fields'],
      },
      { label: 'Nuclear Physics', topics: ['Radioactivity', 'Nuclear Energy'] },
    ],
  },
]

export const PHYSICS_FLASHCARDS = [
  // Particles
  { front: 'What is an antiparticle?', back: 'A particle with the same mass and rest energy as its corresponding particle, but with opposite charge, baryon number and lepton number', topic: 'Particles and Antiparticles' },
  { front: 'What happens in annihilation?', back: 'A particle meets its antiparticle and both are destroyed, their mass converting into two photons travelling in opposite directions to conserve momentum', topic: 'Particles and Antiparticles' },
  { front: 'What is pair production?', back: 'A photon with enough energy converts into a particle and its antiparticle. The minimum photon energy equals twice the rest energy of the particle', topic: 'Particles and Antiparticles' },
  { front: 'Name the four fundamental interactions and their exchange particles', back: 'Strong (gluon or pion between hadrons), weak (W+, W-, Z0), electromagnetic (virtual photon) and gravity (graviton, hypothetical)', topic: 'Particles and Antiparticles' },
  { front: 'What quantities are conserved in all particle interactions?', back: 'Charge, baryon number, lepton number (separately for each type), and energy/momentum. Strangeness is conserved in strong but not weak interactions', topic: 'Particles and Antiparticles' },

  // Quarks
  { front: 'What is the quark composition of a proton and a neutron?', back: 'Proton is uud, neutron is udd', topic: 'Quarks and Interactions' },
  { front: 'What is the difference between a baryon and a meson?', back: 'A baryon is made of three quarks, a meson is a quark-antiquark pair', topic: 'Quarks and Interactions' },
  { front: 'What is the charge and baryon number of an up quark?', back: 'Charge +2/3 e and baryon number +1/3', topic: 'Quarks and Interactions' },
  { front: 'Which interaction is responsible for β decay, and why?', back: 'The weak interaction, because it changes quark flavour (a down quark becomes an up quark in β-minus decay)', topic: 'Quarks and Interactions' },
  { front: 'Write the β-minus decay equation at quark level', back: 'd → u + W-, then W- → e- + electron antineutrino. Overall n → p + e- + antineutrino', topic: 'Quarks and Interactions' },

  // Quantum
  { front: 'What is the photoelectric effect and what does it demonstrate?', back: 'Electrons are emitted from a metal surface when light above a threshold frequency shines on it. It demonstrates the particle nature of light, as wave theory cannot explain the threshold frequency', topic: 'Quantum Phenomena' },
  { front: 'State the photoelectric equation', back: 'hf = φ + Ek(max), where φ is the work function and Ek(max) is the maximum kinetic energy of the emitted electron', topic: 'Quantum Phenomena' },
  { front: 'Define work function', back: 'The minimum energy required to release an electron from the surface of a metal', topic: 'Quantum Phenomena' },
  { front: 'Why does increasing light intensity not increase the maximum kinetic energy of photoelectrons?', back: 'One photon interacts with one electron. Higher intensity means more photons per second so more electrons, but each photon still carries the same energy hf', topic: 'Quantum Phenomena' },
  { front: 'State the de Broglie equation', back: 'λ = h / mv, where λ is the de Broglie wavelength, h is Planck’s constant and mv is momentum', topic: 'Quantum Phenomena' },
  { front: 'What evidence supports the wave nature of electrons?', back: 'Electron diffraction: electrons passing through a thin graphite film produce a diffraction pattern, which only waves can do', topic: 'Quantum Phenomena' },

  // Waves
  { front: 'Difference between transverse and longitudinal waves?', back: 'In transverse waves the oscillation is perpendicular to the direction of energy transfer; in longitudinal waves it is parallel', topic: 'Progressive and Stationary Waves' },
  { front: 'What is required for two sources to be coherent?', back: 'They must have the same frequency and a constant phase difference', topic: 'Progressive and Stationary Waves' },
  { front: 'How is a stationary wave formed?', back: 'Two progressive waves of the same frequency and amplitude travelling in opposite directions superpose, producing fixed nodes and antinodes', topic: 'Progressive and Stationary Waves' },
  { front: 'What is the difference between a node and an antinode?', back: 'A node is a point of zero amplitude from destructive interference; an antinode is a point of maximum amplitude from constructive interference', topic: 'Progressive and Stationary Waves' },
  { front: 'Why can only transverse waves be polarised?', back: 'Polarisation restricts oscillation to one plane. Longitudinal waves oscillate along the direction of travel, so there is no plane to restrict', topic: 'Progressive and Stationary Waves' },
  { front: 'Give the equation for the first harmonic on a string', back: 'f = (1/2L) x square root of (T/μ), where L is length, T is tension and μ is mass per unit length', topic: 'Progressive and Stationary Waves' },

  // Refraction
  { front: 'State Snell’s law', back: 'n1 sin θ1 = n2 sin θ2, where n is the refractive index of each medium', topic: 'Refraction and Interference' },
  { front: 'What is the condition for total internal reflection?', back: 'The light must travel from a more dense to a less dense medium, and the angle of incidence must exceed the critical angle', topic: 'Refraction and Interference' },
  { front: 'Give the equation for critical angle', back: 'sin C = n2 / n1, where n1 is the denser medium', topic: 'Refraction and Interference' },
  { front: 'What is the purpose of cladding in an optical fibre?', back: 'It has a lower refractive index to allow total internal reflection, protects the core from damage, and prevents signal crossover between fibres', topic: 'Refraction and Interference' },
  { front: 'Give the double slit equation', back: 'w = λD / s, where w is fringe spacing, D is the slit-to-screen distance and s is the slit separation', topic: 'Refraction and Interference' },
  { front: 'Give the diffraction grating equation', back: 'd sin θ = nλ, where d is the grating spacing and n is the order of the maximum', topic: 'Refraction and Interference' },

  // Mechanics
  { front: 'State Newton’s second law properly', back: 'The rate of change of momentum of an object is directly proportional to the resultant force acting on it, and takes place in the direction of that force. F = Δp/Δt', topic: 'Forces and Motion' },
  { front: 'What is a moment and what is the principle of moments?', back: 'Moment = force x perpendicular distance from the pivot. For equilibrium, the sum of clockwise moments equals the sum of anticlockwise moments about any point', topic: 'Forces and Motion' },
  { front: 'What is terminal velocity?', back: 'The constant maximum velocity reached when the drag force equals the driving force (or weight), so the resultant force and acceleration are zero', topic: 'Forces and Motion' },
  { front: 'List the SUVAT equations', back: 'v = u + at; s = ut + ½at²; v² = u² + 2as; s = ½(u+v)t', topic: 'Forces and Motion' },
  { front: 'How do you treat projectile motion?', back: 'Resolve into independent horizontal and vertical components. Horizontal velocity is constant (ignoring drag); vertical motion has acceleration g downwards', topic: 'Forces and Motion' },

  // Momentum
  { front: 'State the principle of conservation of linear momentum', back: 'In a closed system with no external forces, total momentum before a collision equals total momentum after', topic: 'Momentum and Energy' },
  { front: 'Difference between elastic and inelastic collisions?', back: 'In an elastic collision kinetic energy is conserved as well as momentum; in an inelastic collision kinetic energy is not conserved, though momentum still is', topic: 'Momentum and Energy' },
  { front: 'What is impulse?', back: 'Impulse = FΔt = change in momentum. It equals the area under a force-time graph', topic: 'Momentum and Energy' },
  { front: 'How does a crumple zone reduce injury?', back: 'It increases the time taken for the momentum change, so by F = Δp/Δt the force on the occupants is reduced', topic: 'Momentum and Energy' },
  { front: 'Give the equations for work, power and efficiency', back: 'W = Fs cos θ; P = W/t = Fv; efficiency = useful output / total input (x100 for a percentage)', topic: 'Momentum and Energy' },

  // Materials
  { front: 'State Hooke’s law and its limit', back: 'Extension is directly proportional to the force applied, F = kΔL, up to the limit of proportionality', topic: 'Materials and Young Modulus' },
  { front: 'Define the Young modulus', back: 'Young modulus = tensile stress / tensile strain = (F/A) / (ΔL/L). It measures stiffness and is a property of the material, not the sample', topic: 'Materials and Young Modulus' },
  { front: 'Difference between elastic and plastic deformation?', back: 'Elastic deformation returns to the original shape when the load is removed; plastic deformation causes a permanent change', topic: 'Materials and Young Modulus' },
  { front: 'What does the area under a force-extension graph represent?', back: 'The work done, which equals the elastic strain energy stored (E = ½FΔL for a material obeying Hooke’s law)', topic: 'Materials and Young Modulus' },
  { front: 'Compare brittle and ductile materials', back: 'A brittle material fractures with little or no plastic deformation (e.g. glass); a ductile material undergoes large plastic deformation and can be drawn into wires (e.g. copper)', topic: 'Materials and Young Modulus' },

  // Electricity
  { front: 'Define current and give its equation', back: 'The rate of flow of charge. I = ΔQ / Δt', topic: 'Current Electricity' },
  { front: 'Define potential difference', back: 'The work done per unit charge moved between two points. V = W/Q', topic: 'Current Electricity' },
  { front: 'State Ohm’s law and its condition', back: 'Current is directly proportional to potential difference, provided physical conditions such as temperature remain constant', topic: 'Current Electricity' },
  { front: 'Give the resistivity equation and define resistivity', back: 'R = ρL / A. Resistivity is a property of the material equal to the resistance of a 1 m cube, measured in ohm metres', topic: 'Current Electricity' },
  { front: 'Why does the resistance of a metal increase with temperature?', back: 'Ions vibrate with greater amplitude, so charge carriers collide with them more frequently, impeding the flow of current', topic: 'Current Electricity' },
  { front: 'Why does the resistance of a thermistor decrease with temperature?', back: 'More charge carriers (electrons) are released as temperature rises, and this increase in carrier number outweighs the increase in collision frequency', topic: 'Current Electricity' },

  // Circuits
  { front: 'Define electromotive force', back: 'The energy transferred from chemical to electrical energy per unit charge, or the total energy per coulomb produced by the source. E = W/Q', topic: 'Circuits and EMF' },
  { front: 'What is internal resistance and how does it appear?', back: 'Resistance within the source itself, causing lost volts. E = I(R + r), or E = V + Ir where V is the terminal pd', topic: 'Circuits and EMF' },
  { front: 'How do you find EMF and internal resistance from a graph of V against I?', back: 'Plot terminal pd V against current I: the y-intercept is the EMF and the gradient is minus the internal resistance', topic: 'Circuits and EMF' },
  { front: 'State the rules for series and parallel resistors', back: 'Series: R total = R1 + R2 + … Parallel: 1/R total = 1/R1 + 1/R2 + …', topic: 'Circuits and EMF' },
  { front: 'What is a potential divider used for?', back: 'To split the source pd between components, giving a required smaller output voltage. V out = V in x R2/(R1 + R2)', topic: 'Circuits and EMF' },

  // Circular motion
  { front: 'Why is an object in circular motion accelerating even at constant speed?', back: 'Its direction, and therefore its velocity, is constantly changing. The acceleration is centripetal, directed towards the centre', topic: 'Circular Motion' },
  { front: 'Give the equations for centripetal acceleration and force', back: 'a = v²/r = ω²r, and F = mv²/r = mω²r', topic: 'Circular Motion' },
  { front: 'Define angular speed and give two equations for it', back: 'The angle swept out per unit time. ω = Δθ/Δt = v/r = 2πf', topic: 'Circular Motion' },

  // SHM
  { front: 'Define simple harmonic motion', back: 'Motion where acceleration is directly proportional to displacement from the equilibrium position and always directed towards it: a = -ω²x', topic: 'Simple Harmonic Motion' },
  { front: 'Give the period equations for a mass-spring system and a simple pendulum', back: 'T = 2π root(m/k) for a mass-spring; T = 2π root(L/g) for a simple pendulum', topic: 'Simple Harmonic Motion' },
  { front: 'Describe the energy changes in SHM', back: 'Kinetic energy is maximum at the equilibrium position and zero at maximum displacement; potential energy is the reverse. Total energy stays constant if undamped', topic: 'Simple Harmonic Motion' },
  { front: 'What is resonance?', back: 'When the driving frequency equals the natural frequency, energy transfer is maximum and the amplitude rises sharply', topic: 'Simple Harmonic Motion' },
  { front: 'How does damping affect resonance?', back: 'Heavier damping reduces the peak amplitude and broadens the resonance curve, and shifts the peak slightly below the natural frequency', topic: 'Simple Harmonic Motion' },

  // Thermal
  { front: 'Give the equation for specific heat capacity', back: 'Q = mcΔθ, where c is the energy needed to raise 1 kg of the substance by 1 K without a change of state', topic: 'Thermal Energy Transfer' },
  { front: 'Give the equation for specific latent heat', back: 'Q = mL, the energy needed to change the state of 1 kg of a substance with no temperature change', topic: 'Thermal Energy Transfer' },
  { front: 'Why does temperature stay constant during a change of state?', back: 'The energy supplied breaks the bonds between molecules (increasing potential energy) rather than increasing their kinetic energy', topic: 'Thermal Energy Transfer' },

  // Gases
  { front: 'State the ideal gas equation in both forms', back: 'pV = nRT (molar) and pV = NkT (molecular), where k is the Boltzmann constant', topic: 'Gas Laws and Kinetic Theory' },
  { front: 'List the assumptions of kinetic theory', back: 'Molecules are identical point particles in constant random motion, collisions are perfectly elastic and take negligible time, there are no intermolecular forces except during collisions, and the number of molecules is large', topic: 'Gas Laws and Kinetic Theory' },
  { front: 'Give the relationship between mean kinetic energy and temperature', back: 'Mean kinetic energy = (3/2)kT, so absolute temperature is directly proportional to the mean kinetic energy of molecules', topic: 'Gas Laws and Kinetic Theory' },
  { front: 'What is absolute zero?', back: '0 K or -273.15°C: the temperature at which molecules have minimum internal energy and exert no pressure', topic: 'Gas Laws and Kinetic Theory' },

  // Gravitational fields
  { front: 'State Newton’s law of gravitation', back: 'F = Gm1m2 / r². The force is attractive, proportional to the product of the masses and inversely proportional to the square of their separation', topic: 'Gravitational Fields' },
  { front: 'Define gravitational field strength', back: 'The force per unit mass at a point in the field. g = F/m, measured in N/kg', topic: 'Gravitational Fields' },
  { front: 'Define gravitational potential', back: 'The work done per unit mass to move an object from infinity to that point. It is always negative because the field is attractive', topic: 'Gravitational Fields' },
  { front: 'Give the equation for escape velocity', back: 'v = square root of (2GM/r), derived by equating kinetic energy to the magnitude of gravitational potential energy', topic: 'Gravitational Fields' },
  { front: 'What is a geostationary orbit?', back: 'An equatorial orbit with a period of 24 hours in the same direction as the Earth’s rotation, so the satellite stays above the same point on the surface', topic: 'Gravitational Fields' },

  // Electric fields
  { front: 'State Coulomb’s law', back: 'F = (1/4πε0) x Q1Q2 / r². The force can be attractive or repulsive depending on the signs of the charges', topic: 'Electric Fields' },
  { front: 'Give the field strength between parallel plates', back: 'E = V/d, a uniform field directed from the positive to the negative plate', topic: 'Electric Fields' },
  { front: 'Give two differences between gravitational and electric fields', back: 'Gravity acts on mass and is always attractive; electric fields act on charge and can attract or repel. Gravitational field strength does not depend on the medium, electric force does', topic: 'Electric Fields' },

  // Capacitance
  { front: 'Define capacitance', back: 'The charge stored per unit potential difference. C = Q/V, measured in farads', topic: 'Capacitance' },
  { front: 'Give the three equations for energy stored in a capacitor', back: 'E = ½QV = ½CV² = ½Q²/C. It is the area under a charge-potential difference graph', topic: 'Capacitance' },
  { front: 'Give the discharge equation for a capacitor', back: 'Q = Q₀e⁻ᵗᐟᴿᶜ, where RC is the time constant, the time to fall to 1/e (about 37%) of the initial value', topic: 'Capacitance' },
  { front: 'What is the effect of a dielectric?', back: 'Its molecules become polarised, creating an opposing field that reduces the pd for the same charge, so capacitance increases by the relative permittivity', topic: 'Capacitance' },

  // Magnetic fields
  { front: 'Give the force on a current-carrying wire in a magnetic field', back: 'F = BIL sin θ, where θ is the angle between the wire and the field. It is maximum when they are perpendicular', topic: 'Magnetic Fields' },
  { front: 'Give the force on a charged particle moving in a magnetic field', back: 'F = BQv sin θ. The force is always perpendicular to velocity, so the particle moves in a circle', topic: 'Magnetic Fields' },
  { front: 'State Faraday’s law', back: 'The magnitude of the induced EMF is proportional to the rate of change of flux linkage. EMF = -d(NΦ)/dt', topic: 'Magnetic Fields' },
  { front: 'State Lenz’s law', back: 'The direction of the induced EMF is such that it opposes the change producing it, which is why there is a minus sign in Faraday’s law. This follows from conservation of energy', topic: 'Magnetic Fields' },
  { front: 'Define magnetic flux and flux linkage', back: 'Flux Φ = BA cos θ, measured in webers. Flux linkage is NΦ for a coil of N turns', topic: 'Magnetic Fields' },

  // Radioactivity
  { front: 'Compare the penetrating power of α, β and gamma', back: 'Alpha is stopped by paper or a few cm of air; β by a few mm of aluminium; gamma is only reduced by several cm of lead', topic: 'Radioactivity' },
  { front: 'Define half-life', back: 'The average time taken for the number of unstable nuclei (or the activity) to halve', topic: 'Radioactivity' },
  { front: 'Give the decay equations', back: 'N = N₀e⁻λᵗ and A = λN, where λ is the decay constant. Half-life T½ = ln2 / λ', topic: 'Radioactivity' },
  { front: 'Why is radioactive decay described as random and spontaneous?', back: 'Random: it is impossible to predict which nucleus will decay or when. Spontaneous: it is unaffected by external conditions such as temperature or pressure', topic: 'Radioactivity' },
  { front: 'What did the Rutherford scattering experiment show?', back: 'Most α particles passed straight through, so atoms are mostly empty space; a few deflected through large angles, so the nucleus is tiny, positively charged and contains most of the mass', topic: 'Radioactivity' },

  // Nuclear energy
  { front: 'Define binding energy and mass defect', back: 'Mass defect is the difference between the mass of a nucleus and the total mass of its separate nucleons. Binding energy is the energy equivalent, E = mc², needed to separate them', topic: 'Nuclear Energy' },
  { front: 'Why do both fission and fusion release energy?', back: 'Both move nuclei towards higher binding energy per nucleon (peaking at iron-56), so mass is lost and released as energy', topic: 'Nuclear Energy' },
  { front: 'What are the roles of the moderator and control rods in a reactor?', back: 'The moderator (e.g. graphite or water) slows neutrons to thermal speeds so they are more likely to cause fission; control rods (e.g. boron) absorb neutrons to control the rate of the chain reaction', topic: 'Nuclear Energy' },
  { front: 'Why does fusion require extremely high temperatures?', back: 'The nuclei must overcome the electrostatic repulsion between their positive charges to get close enough for the strong nuclear force to act', topic: 'Nuclear Energy' },
]

export const PHYSICS_MCQ = [
  { question: 'When an electron and positron annihilate, the minimum number of photons produced is', options: ['0', '1', '2', '4'], answer: 2, explanation: 'Two photons travel in opposite directions so that momentum is conserved.', topic: 'Particles and Antiparticles' },
  { question: 'Which is the exchange particle for the electromagnetic interaction?', options: ['Gluon', 'W boson', 'Virtual photon', 'Graviton'], answer: 2, explanation: 'The virtual photon mediates the electromagnetic force.', topic: 'Particles and Antiparticles' },
  { question: 'A neutron is made of which quarks?', options: ['uud', 'udd', 'uds', 'ddd'], answer: 1, explanation: 'Neutron = udd, giving charge (2/3) + (-1/3) + (-1/3) = 0.', topic: 'Quarks and Interactions' },
  { question: 'A meson consists of', options: ['three quarks', 'a quark and an antiquark', 'two quarks', 'three antiquarks'], answer: 1, explanation: 'Mesons are quark-antiquark pairs; baryons are three quarks.', topic: 'Quarks and Interactions' },
  { question: 'Beta-minus decay is governed by which interaction?', options: ['Strong', 'Weak', 'Electromagnetic', 'Gravitational'], answer: 1, explanation: 'Only the weak interaction can change quark flavour.', topic: 'Quarks and Interactions' },
  { question: 'Increasing the intensity of incident light in the photoelectric effect increases', options: ['the maximum kinetic energy', 'the number of photoelectrons per second', 'the threshold frequency', 'the work function'], answer: 1, explanation: 'More photons per second release more electrons, but each photon energy is unchanged.', topic: 'Quantum Phenomena' },
  { question: 'The de Broglie wavelength is given by', options: ['h/mv', 'hf', 'mv/h', 'hc/λ'], answer: 0, explanation: 'λ = h/p = h/mv.', topic: 'Quantum Phenomena' },
  { question: 'Two sources are coherent if they have', options: ['the same amplitude', 'the same frequency and constant phase difference', 'the same speed', 'the same wavelength only'], answer: 1, explanation: 'Coherence requires equal frequency and a fixed phase relationship.', topic: 'Progressive and Stationary Waves' },
  { question: 'A point of zero amplitude on a stationary wave is called a', options: ['node', 'antinode', 'crest', 'trough'], answer: 0, explanation: 'Nodes result from total destructive interference.', topic: 'Progressive and Stationary Waves' },
  { question: 'Which type of wave can be polarised?', options: ['Longitudinal only', 'Transverse only', 'Both', 'Neither'], answer: 1, explanation: 'Only transverse waves oscillate perpendicular to travel, so only they can be restricted to one plane.', topic: 'Progressive and Stationary Waves' },
  { question: 'Total internal reflection occurs when light goes from', options: ['less dense to more dense above the critical angle', 'more dense to less dense above the critical angle', 'more dense to less dense below the critical angle', 'any medium at any angle'], answer: 1, explanation: 'It requires travel into a less dense medium at an angle exceeding the critical angle.', topic: 'Refraction and Interference' },
  { question: 'In a double slit experiment, increasing the slit separation s will', options: ['increase fringe spacing', 'decrease fringe spacing', 'have no effect', 'remove the fringes'], answer: 1, explanation: 'w = λD/s, so increasing s decreases w.', topic: 'Refraction and Interference' },
  { question: 'The gradient of a velocity-time graph gives', options: ['displacement', 'acceleration', 'force', 'momentum'], answer: 1, explanation: 'Gradient is change in velocity over time, which is acceleration.', topic: 'Forces and Motion' },
  { question: 'At terminal velocity the resultant force on an object is', options: ['maximum', 'zero', 'equal to weight', 'increasing'], answer: 1, explanation: 'Drag balances the driving force so acceleration is zero.', topic: 'Forces and Motion' },
  { question: 'Impulse is equal to', options: ['change in momentum', 'change in kinetic energy', 'force times distance', 'mass times acceleration'], answer: 0, explanation: 'Impulse = FΔt = Δp, the area under a force-time graph.', topic: 'Momentum and Energy' },
  { question: 'In a perfectly inelastic collision', options: ['kinetic energy is conserved', 'momentum is not conserved', 'momentum is conserved but kinetic energy is not', 'neither is conserved'], answer: 2, explanation: 'Momentum is always conserved in a closed system; kinetic energy is not in an inelastic collision.', topic: 'Momentum and Energy' },
  { question: 'The Young modulus is a measure of', options: ['strength', 'stiffness', 'toughness', 'density'], answer: 1, explanation: 'It is stress over strain, a measure of resistance to elastic deformation.', topic: 'Materials and Young Modulus' },
  { question: 'The area under a force-extension graph represents', options: ['stiffness', 'work done / energy stored', 'power', 'stress'], answer: 1, explanation: 'Force times distance is work, stored as elastic strain energy.', topic: 'Materials and Young Modulus' },
  { question: 'A material that fractures with almost no plastic deformation is', options: ['ductile', 'brittle', 'malleable', 'elastic'], answer: 1, explanation: 'Brittle materials such as glass break without significant permanent deformation.', topic: 'Materials and Young Modulus' },
  { question: 'Resistivity has SI units of', options: ['ohm', 'ohm per metre', 'ohm metre', 'metre per ohm'], answer: 2, explanation: 'From R = ρL/A, ρ has units of ohm metre.', topic: 'Current Electricity' },
  { question: 'The resistance of a negative temperature coefficient thermistor as temperature rises', options: ['increases', 'decreases', 'stays constant', 'becomes zero'], answer: 1, explanation: 'More charge carriers are released, outweighing increased vibration.', topic: 'Current Electricity' },
  { question: 'In a graph of terminal pd against current, the gradient equals', options: ['EMF', 'internal resistance', 'minus internal resistance', 'total resistance'], answer: 2, explanation: 'V = E - Ir, so the gradient is -r and the intercept is E.', topic: 'Circuits and EMF' },
  { question: 'Three 6 ohm resistors in parallel give a total resistance of', options: ['18 ohm', '6 ohm', '3 ohm', '2 ohm'], answer: 3, explanation: '1/R = 3/6 so R = 2 ohm.', topic: 'Circuits and EMF' },
  { question: 'An object in uniform circular motion has constant', options: ['velocity', 'speed', 'acceleration direction', 'momentum'], answer: 1, explanation: 'Speed is constant but velocity changes because direction changes.', topic: 'Circular Motion' },
  { question: 'Centripetal acceleration is given by', options: ['v²/r', 'vr', 'v/r²', 'r/v²'], answer: 0, explanation: 'a = v²/r = ω²r, directed towards the centre.', topic: 'Circular Motion' },
  { question: 'In SHM, acceleration is', options: ['proportional to displacement and in the same direction', 'proportional to displacement and towards equilibrium', 'constant', 'zero at maximum displacement'], answer: 1, explanation: 'a = -ω²x: magnitude proportional to x, direction always towards equilibrium.', topic: 'Simple Harmonic Motion' },
  { question: 'The period of a simple pendulum depends on', options: ['mass and length', 'length and g', 'amplitude and mass', 'mass only'], answer: 1, explanation: 'T = 2π root(L/g); mass and (for small angles) amplitude do not affect it.', topic: 'Simple Harmonic Motion' },
  { question: 'Increasing damping causes the resonance peak to', options: ['get taller and narrower', 'get shorter and broader', 'stay the same', 'disappear entirely'], answer: 1, explanation: 'Damping reduces maximum amplitude and broadens the curve.', topic: 'Simple Harmonic Motion' },
  { question: 'During a change of state, the temperature', options: ['increases', 'decreases', 'stays constant', 'fluctuates'], answer: 2, explanation: 'Energy goes into breaking bonds (potential energy), not kinetic energy.', topic: 'Thermal Energy Transfer' },
  { question: 'Mean kinetic energy of a gas molecule is proportional to', options: ['pressure', 'volume', 'absolute temperature', 'the number of molecules'], answer: 2, explanation: 'Mean Ek = (3/2)kT.', topic: 'Gas Laws and Kinetic Theory' },
  { question: 'Absolute zero is', options: ['0 °C', '-100 °C', '-273 °C', '273 K'], answer: 2, explanation: '0 K is about -273.15 °C.', topic: 'Gas Laws and Kinetic Theory' },
  { question: 'Gravitational potential at infinity is defined as', options: ['infinite', 'zero', 'negative', 'equal to g'], answer: 1, explanation: 'Potential is zero at infinity and negative everywhere else because gravity is attractive.', topic: 'Gravitational Fields' },
  { question: 'A geostationary satellite has a period of', options: ['1 hour', '12 hours', '24 hours', '1 year'], answer: 2, explanation: 'It must match the Earth’s rotation to stay above the same point.', topic: 'Gravitational Fields' },
  { question: 'Electric field strength between parallel plates is', options: ['V/d', 'Vd', 'd/V', 'VQ'], answer: 0, explanation: 'The uniform field between plates is E = V/d.', topic: 'Electric Fields' },
  { question: 'Energy stored in a capacitor is', options: ['QV', '½QV', '2QV', 'Q/V'], answer: 1, explanation: 'E = ½QV, the area under the Q-V graph.', topic: 'Capacitance' },
  { question: 'The time constant of an RC circuit equals', options: ['R/C', 'RC', 'C/R', '1/RC'], answer: 1, explanation: 'The time constant is RC, the time to fall to about 37% of the initial value.', topic: 'Capacitance' },
  { question: 'The force on a charged particle moving parallel to a magnetic field is', options: ['maximum', 'zero', 'BQv', 'BIL'], answer: 1, explanation: 'F = BQv sin θ, and sin 0 = 0.', topic: 'Magnetic Fields' },
  { question: 'Lenz’s law is a consequence of conservation of', options: ['charge', 'momentum', 'energy', 'mass'], answer: 2, explanation: 'The induced effect opposes the change, otherwise energy would be created.', topic: 'Magnetic Fields' },
  { question: 'Which radiation is stopped by a few millimetres of aluminium?', options: ['Alpha', 'Beta', 'Gamma', 'Neutron'], answer: 1, explanation: 'Alpha is stopped by paper, β by a few mm of aluminium, gamma needs lead.', topic: 'Radioactivity' },
  { question: 'The relationship between half-life and decay constant is', options: ['T½ = λ', 'T½ = ln2/λ', 'T½ = λ/ln2', 'T½ = 1/λ²'], answer: 1, explanation: 'T½ = ln2 / λ.', topic: 'Radioactivity' },
  { question: 'Binding energy per nucleon is greatest for nuclei around', options: ['hydrogen', 'iron', 'uranium', 'helium'], answer: 1, explanation: 'The curve peaks near iron-56, which is why both fission and fusion release energy.', topic: 'Nuclear Energy' },
  { question: 'The role of a moderator in a nuclear reactor is to', options: ['absorb neutrons', 'slow neutrons down', 'speed neutrons up', 'shield radiation'], answer: 1, explanation: 'Thermal (slow) neutrons are far more likely to cause fission in uranium-235.', topic: 'Nuclear Energy' },
]

export const PHYSICS_EXAM = [
  { question: 'Explain why two photons, rather than one, are produced when an electron and a positron annihilate.', marks: 2, markScheme: ['Momentum must be conserved', 'A single photon could not have zero total momentum in the centre of mass frame, so two photons travel in opposite directions', 'Final answer: two photons are needed to conserve momentum'], topic: 'Particles and Antiparticles' },
  { question: 'A photon of energy 4.0 eV strikes a metal with work function 2.5 eV. Calculate the maximum kinetic energy of an emitted electron in joules.', marks: 3, markScheme: ['Ek(max) = hf - φ = 4.0 - 2.5 = 1.5 eV', 'Convert: 1.5 × 1.6 × 10⁻¹⁹', 'Final answer: 2.4 × 10⁻¹⁹ J'], topic: 'Quantum Phenomena' },
  { question: 'Explain why the photoelectric effect cannot be explained by the wave model of light.', marks: 4, markScheme: ['Wave theory predicts that any frequency should eventually release electrons if intensity is high enough, but a threshold frequency is observed', 'Wave theory predicts emission would be delayed while energy builds up, but emission is instantaneous', 'Wave theory predicts higher intensity would give more energetic electrons, but it only increases the number emitted', 'The photon model explains this: one photon transfers all its energy hf to one electron', 'Final answer: threshold frequency, instant emission and intensity effects all require the photon model'], topic: 'Quantum Phenomena' },
  { question: 'Explain how a stationary wave is formed on a stretched string.', marks: 3, markScheme: ['A progressive wave travels along the string and reflects at the fixed end', 'The reflected wave has the same frequency and amplitude and travels in the opposite direction', 'The two waves superpose, giving nodes where they are in antiphase and antinodes where they are in phase', 'Final answer: superposition of the incident and reflected waves'], topic: 'Progressive and Stationary Waves' },
  { question: 'Light of wavelength 600 nm passes through a double slit of separation 0.30 mm onto a screen 2.0 m away. Calculate the fringe spacing.', marks: 3, markScheme: ['w = λD / s', 'w = (600 × 10⁻⁹ x 2.0) / (0.30 × 10⁻³)', 'w = 1.2 × 10⁻⁶ / 3.0 × 10⁻⁴', 'Final answer: 4.0 × 10⁻³ m (4.0 mm)'], topic: 'Refraction and Interference' },
  { question: 'Explain the purpose of the cladding in an optical fibre.', marks: 3, markScheme: ['The cladding has a lower refractive index than the core, so total internal reflection occurs at the boundary', 'It protects the core from scratches and damage that would allow light to escape', 'It prevents light crossing between adjacent fibres, avoiding signal crossover', 'Final answer: enables total internal reflection, protects the core and prevents crossover'], topic: 'Refraction and Interference' },
  { question: 'A ball is thrown horizontally at 15 m/s from a cliff 20 m high. Calculate the horizontal distance travelled before landing. Take g = 9.81 m/s².', marks: 4, markScheme: ['Vertical: s = ut + ½at², with u = 0 so 20 = ½ x 9.81 x t²', 't² = 40 / 9.81 = 4.077, so t = 2.02 s', 'Horizontal velocity is constant at 15 m/s', 'Horizontal distance = 15 × 2.02', 'Final answer: 30.3 m (about 30 m)'], topic: 'Forces and Motion' },
  { question: 'Explain, in terms of momentum, how a crumple zone reduces the force on a car occupant.', marks: 3, markScheme: ['The change in momentum of the occupant is the same regardless of the crumple zone', 'The crumple zone increases the time over which that momentum change occurs', 'Since F = Δp/Δt, increasing Δt for a fixed Δp reduces the force', 'Final answer: longer collision time reduces the force for the same momentum change'], topic: 'Momentum and Energy' },
  { question: 'A wire of length 2.0 m and cross-sectional area 1.5 × 10⁻⁶ m² extends by 1.2 mm under a force of 90 N. Calculate the Young modulus.', marks: 4, markScheme: ['Stress = F/A = 90 / 1.5e-6 = 6.0 × 10⁷ Pa', 'Strain = ΔL/L = 1.2e-3 / 2.0 = 6.0 × 10⁻⁴', 'E = stress / strain = 6.0e7 / 6.0e-4', 'Final answer: 1.0 × 10¹¹ Pa'], topic: 'Materials and Young Modulus' },
  { question: 'Explain why the resistance of a metallic conductor increases as its temperature rises.', marks: 3, markScheme: ['The positive ions in the lattice vibrate with greater amplitude', 'Conduction electrons collide with the ions more frequently', 'This impedes the flow of charge, so for a given pd the current falls and resistance rises', 'Final answer: more frequent electron-ion collisions increase resistance'], topic: 'Current Electricity' },
  { question: 'A cell of EMF 6.0 V and internal resistance 0.50 ohm is connected to a 2.5 ohm resistor. Calculate the terminal potential difference.', marks: 3, markScheme: ['Total resistance = 2.5 + 0.5 = 3.0 ohm', 'I = E / (R + r) = 6.0 / 3.0 = 2.0 A', 'V = IR = 2.0 × 2.5', 'Final answer: 5.0 V'], topic: 'Circuits and EMF' },
  { question: 'Explain why an object moving in a circle at constant speed is accelerating.', marks: 2, markScheme: ['Velocity is a vector, and the direction of motion is continuously changing', 'A change in velocity means there is an acceleration, directed towards the centre of the circle', 'Final answer: changing direction means changing velocity, so there is centripetal acceleration'], topic: 'Circular Motion' },
  { question: 'A mass on a spring oscillates with SHM of amplitude 0.05 m and period 0.40 s. Calculate the maximum speed.', marks: 3, markScheme: ['ω = 2π/T = 2π/0.40 = 15.7 rad/s', 'v(max) = ωA = 15.7 × 0.05', 'Final answer: 0.79 m/s'], topic: 'Simple Harmonic Motion' },
  { question: 'Explain what is meant by resonance and give one example where it is useful and one where it is a problem.', marks: 4, markScheme: ['Resonance occurs when the driving frequency equals the natural frequency of the system', 'Energy transfer to the system is a maximum, so amplitude increases sharply', 'Useful example: tuning a radio circuit to a station frequency, or a microwave oven exciting water molecules', 'Problem example: a bridge oscillating in wind, or vibration damage in machinery', 'Final answer: maximum amplitude at the natural frequency, with one useful and one harmful example'], topic: 'Simple Harmonic Motion' },
  { question: 'Calculate the energy needed to turn 0.50 kg of ice at 0°C into water at 20°C. Take L(fusion) = 3.34 × 10⁵ J/kg and c(water) = 4180 J/kg/K.', marks: 4, markScheme: ['Melting: Q = mL = 0.50 × 3.34e5 = 1.67 × 10⁵ J', 'Heating: Q = mcΔθ = 0.50 × 4180 × 20 = 4.18 × 10⁴ J', 'Total = 1.67e5 + 0.418e5', 'Final answer: 2.09 × 10⁵ J'], topic: 'Thermal Energy Transfer' },
  { question: 'State three assumptions of the kinetic theory of gases.', marks: 3, markScheme: ['Molecules are in continuous random motion and are treated as point particles of negligible volume', 'Collisions are perfectly elastic and the time of collision is negligible compared with time between collisions', 'There are no intermolecular forces except during collisions', 'The number of molecules is very large so statistical treatment is valid', 'Final answer: any three of the above'], topic: 'Gas Laws and Kinetic Theory' },
  { question: 'Explain why gravitational potential is always negative.', marks: 3, markScheme: ['Gravitational potential is defined as zero at infinity', 'The gravitational force is always attractive, so work must be done against the field to move a mass to infinity', 'Therefore the potential energy at any finite distance is less than zero', 'Final answer: work must be done to reach the zero at infinity, so all other values are negative'], topic: 'Gravitational Fields' },
  { question: 'A capacitor of 200 µF is charged to 12 V. Calculate the energy stored.', marks: 3, markScheme: ['E = ½CV²', 'E = 0.5 × 200 × 10⁻⁶ x 12²', 'E = 0.5 × 2.0e-4 × 144', 'Final answer: 1.44 × 10⁻² J'], topic: 'Capacitance' },
  { question: 'State Faraday’s and Lenz’s laws, and explain how Lenz’s law follows from conservation of energy.', marks: 4, markScheme: ['Faraday: the magnitude of induced EMF is proportional to the rate of change of flux linkage', 'Lenz: the direction of the induced EMF opposes the change producing it', 'If the induced effect reinforced the change, the motion would accelerate without energy input', 'That would create energy from nothing, so the opposition is required by conservation of energy', 'Final answer: opposing the change prevents energy being created'], topic: 'Magnetic Fields' },
  { question: 'A sample has a half-life of 8.0 days. Calculate the fraction remaining after 24 days.', marks: 3, markScheme: ['24 / 8.0 = 3 half-lives', 'Fraction = (1/2)³', 'Final answer: 1/8 (0.125 or 12.5%)'], topic: 'Radioactivity' },
  { question: 'Explain why both nuclear fission and nuclear fusion release energy.', marks: 4, markScheme: ['Binding energy per nucleon is greatest for nuclei around iron-56', 'Fission splits a very heavy nucleus into fragments closer to iron, so binding energy per nucleon increases', 'Fusion joins very light nuclei into a heavier one closer to iron, so binding energy per nucleon also increases', 'In both cases mass is lost and released as energy according to E = mc²', 'Final answer: both move towards the peak of the binding energy curve, losing mass as energy'], topic: 'Nuclear Energy' },
]

export const PHYSICS_NOTES = {
  'Particles and Antiparticles': '<h3>Conservation rules</h3><p>Always conserved: charge, baryon number, each lepton number, energy and momentum. Strangeness is conserved in strong interactions but can change by 0 or ±1 in weak interactions.</p><h3>Annihilation and pair production</h3><p>Annihilation gives two photons (momentum conservation). Pair production needs minimum photon energy of 2 x rest energy.</p>',
  'Quarks and Interactions': '<h3>Quark content</h3><p>Proton uud, neutron udd. Baryon = 3 quarks, meson = quark + antiquark.</p><h3>Beta decay</h3><p>Beta-minus: d → u + W-, then W- → e- + antineutrino. Beta-plus: u → d + W+, then W+ → e+ + neutrino.</p><p class="exam-tip">Exam tip: any change of quark flavour means the weak interaction.</p>',
  'Quantum Phenomena': '<h3>Photoelectric effect</h3><p>hf = φ + Ek(max). Threshold frequency, instantaneous emission and the intensity effect all demand a photon model.</p><h3>Wave-particle duality</h3><p>λ = h/mv. Electron diffraction through graphite shows electrons behave as waves.</p>',
  'Progressive and Stationary Waves': '<h3>Stationary waves</h3><p>Formed by superposition of two identical waves travelling in opposite directions. Nodes (zero amplitude) and antinodes (maximum).</p><p>First harmonic on a string: f = (1/2L) root(T/μ).</p><p>Only transverse waves can be polarised.</p>',
  'Refraction and Interference': '<h3>Refraction</h3><p>n1 sin θ1 = n2 sin θ2. TIR needs dense to less dense and angle above critical, where sin C = n2/n1.</p><h3>Interference</h3><p>Double slit: w = λD/s. Grating: d sin θ = nλ.</p>',
  'Forces and Motion': '<h3>SUVAT</h3><p>v = u + at; s = ut + ½at²; v² = u² + 2as; s = ½(u+v)t.</p><h3>Projectiles</h3><p>Resolve into independent horizontal (constant velocity) and vertical (acceleration g) components. Time of flight comes from the vertical motion.</p>',
  'Momentum and Energy': '<h3>Momentum</h3><p>p = mv, conserved in all collisions in a closed system. Impulse = FΔt = Δp = area under a force-time graph.</p><p>Elastic collisions conserve kinetic energy; inelastic do not.</p>',
  'Materials and Young Modulus': '<h3>Key relations</h3><p>Stress = F/A, strain = ΔL/L, E = stress/strain.</p><p>Area under force-extension = elastic strain energy = ½FΔL.</p><p class="exam-tip">Exam tip: Young modulus is a property of the material; stiffness (k) depends on the specific sample dimensions.</p>',
  'Current Electricity': '<h3>Definitions</h3><p>I = ΔQ/Δt, V = W/Q, R = V/I, R = ρL/A.</p><h3>Components</h3><p>Metal: resistance rises with temperature (more ion vibration). NTC thermistor: resistance falls (more charge carriers). Diode: conducts one way above about 0.6 V.</p>',
  'Circuits and EMF': '<h3>Internal resistance</h3><p>E = I(R + r) = V + Ir. Plot V against I: intercept = EMF, gradient = -r.</p><h3>Potential dividers</h3><p>V out = V in x R2/(R1 + R2). Used with LDRs and thermistors for sensing circuits.</p>',
  'Circular Motion': '<h3>Key ideas</h3><p>Constant speed but changing velocity, so there is centripetal acceleration towards the centre.</p><p>a = v²/r = ω²r; F = mv²/r = mω²r; ω = v/r = 2πf.</p>',
  'Simple Harmonic Motion': '<h3>Definition</h3><p>a = -ω²x: acceleration proportional to displacement, always towards equilibrium.</p><p>T = 2π root(m/k) for a spring; T = 2π root(L/g) for a pendulum. v(max) = ωA.</p><h3>Resonance</h3><p>Driving frequency equals natural frequency gives maximum amplitude. Damping lowers and broadens the peak.</p>',
  'Thermal Energy Transfer': '<h3>Equations</h3><p>Q = mcΔθ for temperature change; Q = mL for change of state.</p><p>Temperature stays constant during a state change because energy goes into breaking bonds, not into kinetic energy.</p>',
  'Gas Laws and Kinetic Theory': '<h3>Ideal gas</h3><p>pV = nRT = NkT. Mean kinetic energy = (3/2)kT, so absolute temperature measures molecular kinetic energy.</p><p>Assumptions: point particles, random motion, elastic collisions, negligible intermolecular forces, large N.</p>',
  'Gravitational Fields': '<h3>Field and potential</h3><p>F = Gm1m2/r², g = GM/r², V = -GM/r. Potential is always negative, zero at infinity.</p><p>Escape velocity: v = root(2GM/r). Geostationary orbit: 24 hour period, equatorial, same direction as rotation.</p>',
  'Electric Fields': '<h3>Coulomb and fields</h3><p>F = Q1Q2/(4πε0r²), E = F/Q, and between parallel plates E = V/d.</p><p class="exam-tip">Exam tip: gravitational fields only attract; electric fields attract or repel. Otherwise the inverse square maths is the same.</p>',
  Capacitance: '<h3>Storage</h3><p>C = Q/V. Energy E = ½QV = ½CV² = ½Q²/C, the area under a Q-V graph.</p><h3>Discharge</h3><p>Q = Q₀e⁻ᵗᐟᴿᶜ. Time constant RC is the time to fall to about 37%. Dielectrics increase capacitance.</p>',
  'Magnetic Fields': '<h3>Forces</h3><p>F = BIL sin θ on a wire; F = BQv sin θ on a moving charge (giving circular motion since force is always perpendicular to velocity).</p><h3>Induction</h3><p>Flux Φ = BA cos θ, flux linkage NΦ. Faraday: EMF proportional to rate of change of flux linkage. Lenz: it opposes the change (conservation of energy).</p>',
  Radioactivity: '<h3>Types</h3><p>Alpha stopped by paper, β by a few mm aluminium, gamma reduced by cm of lead.</p><h3>Decay</h3><p>Random and spontaneous. N = N₀e⁻λᵗ, A = λN, T½ = ln2/λ.</p><p>Rutherford scattering showed a tiny, dense, positive nucleus in mostly empty space.</p>',
  'Nuclear Energy': '<h3>Binding energy</h3><p>Mass defect converts to binding energy via E = mc². The binding energy per nucleon curve peaks at iron-56.</p><p>Fission of heavy nuclei and fusion of light nuclei both move towards the peak, releasing energy.</p><h3>Reactors</h3><p>Moderator slows neutrons; control rods absorb them; shielding contains radiation.</p>',
}
