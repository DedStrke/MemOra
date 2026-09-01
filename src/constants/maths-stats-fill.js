/*
  Statistics topics (Edexcel A-level Maths 9MA0) that no batch agent ever
  covered - the "Statistics batch C" sub-agent failed twice (rate limit,
  then a 64k output-token overflow trying to write all 8 topics in one
  response). Verified via a quote-agnostic grep across every batch's
  scratchpad file that none of the other four batches touch any Statistics
  topic (Forces and Newton's Laws was initially suspected as a second gap,
  but batch E does cover it - confirmed directly, not just claimed).
*/

export const STATS_FLASHCARDS = [
  // ---------------------------------------------------- Statistical Sampling
  { front: 'What is a census?', back: 'A survey of the WHOLE population, not a sample.', topic: 'Statistical Sampling' },
  { front: 'What is a sampling frame?', back: 'A list of all members of the population from which a sample is drawn.', topic: 'Statistical Sampling' },
  { front: 'Describe systematic sampling.', back: 'Select every kth member from a sampling frame after a random starting point, where k = population size ÷ sample size.', topic: 'Statistical Sampling' },
  { front: 'Describe stratified sampling.', back: 'The population is divided into strata (mutually exclusive groups); the sample size taken from each stratum is proportional to its size, then members are randomly sampled within each stratum.', topic: 'Statistical Sampling' },
  { front: 'Give the formula for the sample size taken from one stratum.', back: '(size of stratum ÷ size of population) × overall sample size', topic: 'Statistical Sampling' },
  { front: 'What is quota sampling?', back: 'An interviewer selects people to fit pre-set quotas (e.g. by age or gender) until each quota is filled. It is non-random, quick and cheap, but can introduce interviewer bias.', topic: 'Statistical Sampling' },
  { front: 'What is a key disadvantage of opportunity (convenience) sampling?', back: 'It is highly likely to produce an unrepresentative, biased sample, since it relies only on who happens to be conveniently available.', topic: 'Statistical Sampling' },

  // ------------------------------------- Data Presentation and Interpretation
  { front: 'How is variance calculated from raw data?', back: 'σ² = Σ(x − x̄)²/n = Σx²/n − (x̄)²', topic: 'Data Presentation and Interpretation' },
  { front: 'What is an outlier, using the IQR method?', back: 'A value more than 1.5 × IQR below Q1, or more than 1.5 × IQR above Q3.', topic: 'Data Presentation and Interpretation' },
  { front: 'What does frequency density measure on a histogram, and why is it used?', back: 'Frequency ÷ class width. It is used so that histograms with unequal class widths represent frequency correctly by the AREA of each bar, not its height.', topic: 'Data Presentation and Interpretation' },
  { front: 'What does positive skew mean for a distribution?', back: 'mean > median > mode, with a long tail of higher values on the right.', topic: 'Data Presentation and Interpretation' },
  { front: 'What is the interquartile range and why is it a useful measure of spread?', back: 'IQR = Q3 − Q1. It measures spread while being unaffected by outliers, unlike the range.', topic: 'Data Presentation and Interpretation' },
  { front: 'How does coding help when calculating the mean and standard deviation?', back: 'Using y = (x − a)/b turns large or awkward numbers into simpler ones. Once ȳ and σy are found, x̄ = a + bȳ and σx = b × σy convert back.', topic: 'Data Presentation and Interpretation' },
  { front: 'What five values does a box plot show?', back: 'Minimum, lower quartile (Q1), median, upper quartile (Q3), and maximum - useful for comparing distributions and spotting skew or outliers at a glance.', topic: 'Data Presentation and Interpretation' },

  // ------------------------------------------------------------- Probability
  { front: 'State the addition rule for two events A and B.', back: 'P(A∪B) = P(A) + P(B) − P(A∩B)', topic: 'Probability' },
  { front: 'What does it mean for two events to be mutually exclusive?', back: 'They cannot happen at the same time, so P(A∩B) = 0.', topic: 'Probability' },
  { front: 'What does it mean for two events to be independent?', back: 'The occurrence of one does not affect the probability of the other, so P(A∩B) = P(A) × P(B).', topic: 'Probability' },
  { front: 'State the formula for conditional probability P(A|B).', back: 'P(A|B) = P(A∩B) / P(B)', topic: 'Probability' },
  { front: 'How do you test whether events A and B are independent, using probabilities?', back: 'Check whether P(A∩B) = P(A) × P(B) (equivalently, whether P(A|B) = P(A)).', topic: 'Probability' },
  { front: 'On a Venn diagram, what does the region outside all the circles represent?', back: 'Outcomes in the sample space that belong to none of the events shown.', topic: 'Probability' },

  // ---------------------------------------- Statistical Distributions (Binomial)
  { front: 'State the four conditions needed for a binomial distribution to be a suitable model.', back: 'A fixed number of trials n; each trial has two outcomes (success/failure); a constant probability of success p; the trials are independent.', topic: 'Statistical Distributions (Binomial)' },
  { front: 'State the formula for P(X=r) when X~B(n,p).', back: 'P(X=r) = ⁿCᵣ × pʳ × (1−p)ⁿ⁻ʳ', topic: 'Statistical Distributions (Binomial)' },
  { front: "What is the mean of X~B(n,p)?", back: 'E(X) = np', topic: 'Statistical Distributions (Binomial)' },
  { front: 'What is the variance of X~B(n,p)?', back: 'Var(X) = np(1−p)', topic: 'Statistical Distributions (Binomial)' },
  { front: 'How do you find P(X≤r) efficiently, rather than summing individual probabilities?', back: 'Use cumulative binomial probability tables, or a calculator’s binomial CDF function.', topic: 'Statistical Distributions (Binomial)' },
  { front: 'How do you find P(X≥r) from cumulative probabilities?', back: 'P(X≥r) = 1 − P(X≤r−1)', topic: 'Statistical Distributions (Binomial)' },

  // ------------------------------------------------- Statistical Hypothesis Testing
  { front: 'What is the null hypothesis H0, typically?', back: 'The hypothesis of "no change" or no effect - the assumption being tested against.', topic: 'Statistical Hypothesis Testing' },
  { front: 'What is the significance level of a hypothesis test?', back: 'The probability threshold (e.g. 5%) below which H0 is rejected - the risk accepted of wrongly rejecting a true H0.', topic: 'Statistical Hypothesis Testing' },
  { front: 'What is a critical region?', back: 'The set of values of the test statistic for which H0 is rejected.', topic: 'Statistical Hypothesis Testing' },
  { front: 'What is a Type I error?', back: 'Rejecting H0 when H0 is actually true.', topic: 'Statistical Hypothesis Testing' },
  { front: 'When do you use a one-tailed test rather than a two-tailed test?', back: 'One-tailed when testing for a change in a SPECIFIC direction (increase or decrease); two-tailed when testing for a change in EITHER direction.', topic: 'Statistical Hypothesis Testing' },
  { front: 'How do you decide the outcome of a hypothesis test using a p-value?', back: 'If the p-value is less than the significance level, reject H0; otherwise, do not reject H0.', topic: 'Statistical Hypothesis Testing' },
  { front: 'In a binomial hypothesis test, what does the test statistic represent?', back: 'The observed number of successes X in n trials, compared against the value of p assumed under H0.', topic: 'Statistical Hypothesis Testing' },

  // --------------------------------- Regression, Correlation and Hypothesis Testing
  { front: 'What values can the PMCC, r, take, and what do they mean?', back: '−1 ≤ r ≤ 1. r near +1 means strong positive linear correlation, r near −1 means strong negative linear correlation, r near 0 means little or no linear correlation.', topic: 'Regression, Correlation and Hypothesis Testing' },
  { front: 'What is the regression line "y on x" used for?', back: 'To predict values of y from given values of x.', topic: 'Regression, Correlation and Hypothesis Testing' },
  { front: 'Why is interpolation more reliable than extrapolation?', back: 'Interpolation predicts within the range of the original data; extrapolation predicts outside it, where the relationship may no longer hold.', topic: 'Regression, Correlation and Hypothesis Testing' },
  { front: 'Does a high correlation coefficient prove causation?', back: 'No - correlation does not imply causation. There may be a third (lurking) factor, or the correlation may simply be coincidental.', topic: 'Regression, Correlation and Hypothesis Testing' },
  { front: 'In the regression equation y = a + bx, what does b represent?', back: 'The gradient - the change in y for each one-unit increase in x.', topic: 'Regression, Correlation and Hypothesis Testing' },
  { front: 'What is the purpose of a hypothesis test on the PMCC?', back: 'To test whether the sample correlation is significant evidence of real (population) linear correlation, rather than something that could easily arise by chance.', topic: 'Regression, Correlation and Hypothesis Testing' },

  // -------------------------------------------------------- Conditional Probability
  { front: 'State the formula for P(A|B).', back: 'P(A|B) = P(A∩B) / P(B)', topic: 'Conditional Probability' },
  { front: 'How can P(A|B) = P(A∩B)/P(B) be rearranged to find P(A∩B)?', back: 'P(A∩B) = P(A|B) × P(B)', topic: 'Conditional Probability' },
  { front: 'On a tree diagram, how do you find the probability of one specific path?', back: 'Multiply the probabilities along the branches of that path.', topic: 'Conditional Probability' },
  { front: 'How can you check independence using conditional probability?', back: 'If P(A|B) = P(A), then A and B are independent.', topic: 'Conditional Probability' },
  { front: 'On a Venn diagram, how do you find P(A|B)?', back: 'Divide the probability in the overlapping region (A∩B) by the total probability of region B.', topic: 'Conditional Probability' },

  // -------------------------------------------------------- The Normal Distribution
  { front: 'What are the two parameters of a normal distribution N(μ,σ²)?', back: 'μ, the mean, and σ², the variance (σ is the standard deviation).', topic: 'The Normal Distribution' },
  { front: 'State the standardisation formula for converting X to Z.', back: 'Z = (X − μ) / σ', topic: 'The Normal Distribution' },
  { front: 'What is special about the standard normal distribution?', back: "It is N(0,1) - mean 0, standard deviation 1. Φ(z) tables give P(Z≤z) for this distribution.", topic: 'The Normal Distribution' },
  { front: 'How do you find P(X<a) for X~N(μ,σ²)?', back: 'Standardise to z = (a−μ)/σ, then find Φ(z) from tables or a calculator.', topic: 'The Normal Distribution' },
  { front: 'By symmetry, how does Φ(−z) relate to Φ(z)?', back: 'Φ(−z) = 1 − Φ(z)', topic: 'The Normal Distribution' },
  { front: 'How do you find a value of x given a probability (inverse normal)?', back: 'Find the z-value for that probability (inverse normal tables/calculator), then use x = μ + zσ.', topic: 'The Normal Distribution' },
]

export const STATS_MCQ = [
  {
    question: 'A population has 300 boys and 200 girls. A stratified sample of 50 is required. How many girls should be sampled?',
    options: ['20', '25', '30', '15'],
    answer: 0,
    explanation: '(200/500) × 50 = 20.',
    topic: 'Statistical Sampling',
  },
  {
    question: 'Which sampling method guarantees every member of the population an equal chance of selection?',
    options: ['Quota sampling', 'Simple random sampling', 'Opportunity sampling', 'Judgement sampling'],
    answer: 1,
    explanation: 'Simple random sampling is defined by every member having an equal chance of being chosen.',
    topic: 'Statistical Sampling',
  },
  {
    question: 'A researcher samples every 10th customer entering a shop. This is an example of:',
    options: ['Stratified sampling', 'Cluster sampling', 'Systematic sampling', 'Quota sampling'],
    answer: 2,
    explanation: 'Selecting every kth member (here, every 10th) after a random start is systematic sampling.',
    topic: 'Statistical Sampling',
  },
  {
    question: 'A histogram bar has frequency density 4 and class width 5. What is the frequency?',
    options: ['9', '1.25', '20', '0.8'],
    answer: 2,
    explanation: 'Frequency = frequency density × class width = 4 × 5 = 20.',
    topic: 'Data Presentation and Interpretation',
  },
  {
    question: 'Data has Q1 = 12 and Q3 = 28. Using the 1.5×IQR rule, which values are outliers?',
    options: ['below 12 or above 28', 'below 4 or above 36', 'below −12 or above 52', 'below 0 or above 40'],
    answer: 2,
    explanation: 'IQR = 16, so 1.5×IQR = 24. Lower bound = 12−24 = −12, upper bound = 28+24 = 52.',
    topic: 'Data Presentation and Interpretation',
  },
  {
    question: 'Which measure of central tendency is most affected by extreme outliers?',
    options: ['Median', 'Mode', 'Mean', 'Interquartile range'],
    answer: 2,
    explanation: 'The mean uses every value directly in its calculation, so a single extreme value can shift it substantially; median and mode are far more resistant.',
    topic: 'Data Presentation and Interpretation',
  },
  {
    question: 'P(A)=0.4, P(B)=0.5, and A and B are independent. Find P(A∩B).',
    options: ['0.9', '0.1', '0.2', '0.7'],
    answer: 2,
    explanation: 'Independent events: P(A∩B) = P(A)×P(B) = 0.4×0.5 = 0.2.',
    topic: 'Probability',
  },
  {
    question: 'P(A)=0.3, P(B)=0.4, P(A∩B)=0.1. Find P(A∪B).',
    options: ['0.7', '0.5', '0.6', '0.8'],
    answer: 2,
    explanation: 'P(A∪B) = P(A)+P(B)−P(A∩B) = 0.3+0.4−0.1 = 0.6.',
    topic: 'Probability',
  },
  {
    question: 'Two events are mutually exclusive. Which of the following is always true?',
    options: ['P(A∩B) = P(A)P(B)', 'P(A|B) = P(A)', 'P(A∪B) = P(A)P(B)', 'P(A∩B) = 0'],
    answer: 3,
    explanation: 'Mutually exclusive events cannot both occur, so their intersection has probability 0.',
    topic: 'Probability',
  },
  {
    question: 'X~B(10, 0.3). What is E(X)?',
    options: ['7', '0.3', '10', '3'],
    answer: 3,
    explanation: 'E(X) = np = 10 × 0.3 = 3.',
    topic: 'Statistical Distributions (Binomial)',
  },
  {
    question: 'For X~B(8, 0.5), what is P(X=8)?',
    options: ['8 × 0.5', '1', '0.5', '0.5⁸'],
    answer: 3,
    explanation: 'P(X=8) = ⁸C₈ × 0.5⁸ × 0.5⁰ = 0.5⁸, since there is only one way to get all 8 successes.',
    topic: 'Statistical Distributions (Binomial)',
  },
  {
    question: 'Which of these is NOT a condition required for a binomial model?',
    options: ['Number of trials is fixed', 'Probability of success is constant', 'Trials are independent', 'Outcomes must be normally distributed'],
    answer: 3,
    explanation: 'The binomial distribution requires a fixed number of independent trials with constant success probability - normality of outcomes is not a requirement.',
    topic: 'Statistical Distributions (Binomial)',
  },
  {
    question: 'A p-value of 0.03 is compared with a 5% significance level. What is the conclusion?',
    options: ['Accept H0', 'Increase the sample size', 'Reject H0', 'Cannot conclude'],
    answer: 2,
    explanation: '0.03 < 0.05, so the result is significant at the 5% level and H0 is rejected.',
    topic: 'Statistical Hypothesis Testing',
  },
  {
    question: 'Rejecting a null hypothesis that is actually true is called:',
    options: ['Significant result', 'Critical value', 'Type II error', 'Type I error'],
    answer: 3,
    explanation: 'A Type I error is defined as rejecting a true H0.',
    topic: 'Statistical Hypothesis Testing',
  },
  {
    question: 'A test for "the probability of success has increased" would use:',
    options: ['A two-tailed test', 'A one-tailed test (lower)', 'A one-tailed test (upper)', 'No test needed'],
    answer: 2,
    explanation: 'Testing for a change in one specific direction (an increase) uses a one-tailed test in the upper tail.',
    topic: 'Statistical Hypothesis Testing',
  },
  {
    question: 'A PMCC of r = −0.92 suggests:',
    options: ['No correlation', 'Weak correlation', 'Strong positive linear correlation', 'Strong negative linear correlation'],
    answer: 3,
    explanation: 'r close to −1 indicates strong negative linear correlation.',
    topic: 'Regression, Correlation and Hypothesis Testing',
  },
  {
    question: 'Predicting a y-value for an x-value far outside the range of the collected data is called:',
    options: ['Interpolation', 'Regression', 'Correlation', 'Extrapolation'],
    answer: 3,
    explanation: 'Predicting outside the range of the original data is extrapolation, which carries more risk than interpolation.',
    topic: 'Regression, Correlation and Hypothesis Testing',
  },
  {
    question: 'In a hypothesis test for correlation, if the calculated PMCC exceeds the critical value, we:',
    options: ['Accept H0', 'Repeat the sample', 'Cannot make a conclusion', 'Reject H0 and conclude correlation exists'],
    answer: 3,
    explanation: 'Exceeding the critical value places the result in the critical region, so H0 (no correlation) is rejected.',
    topic: 'Regression, Correlation and Hypothesis Testing',
  },
  {
    question: 'P(A∩B) = 0.15 and P(B) = 0.5. Find P(A|B).',
    options: ['0.075', '0.65', '3.33', '0.3'],
    answer: 3,
    explanation: 'P(A|B) = P(A∩B)/P(B) = 0.15/0.5 = 0.3.',
    topic: 'Conditional Probability',
  },
  {
    question: 'If P(A|B) = P(A), events A and B are:',
    options: ['Mutually exclusive', 'Dependent', 'Complementary', 'Independent'],
    answer: 3,
    explanation: 'P(A|B) = P(A) is precisely the condition that defines independence.',
    topic: 'Conditional Probability',
  },
  {
    question: 'A box has 3 red and 2 blue counters. One is drawn and not replaced, then a second is drawn. Find P(second is red | first is red).',
    options: ['3/4', '3/5', '2/5', '2/4'],
    answer: 3,
    explanation: 'After removing one red counter, 2 red and 2 blue remain out of 4, so P = 2/4.',
    topic: 'Conditional Probability',
  },
  {
    question: 'X~N(50, 16). Find the standardised value for x = 58.',
    options: ['0.5', '8', '4', '2'],
    answer: 3,
    explanation: 'σ = √16 = 4, so z = (58−50)/4 = 2.',
    topic: 'The Normal Distribution',
  },
  {
    question: 'For the standard normal distribution, P(Z<0) equals:',
    options: ['1', '0', '0.159', '0.5'],
    answer: 3,
    explanation: 'The standard normal distribution is symmetric about 0, so exactly half its probability lies below 0.',
    topic: 'The Normal Distribution',
  },
  {
    question: 'If Φ(1.5) = 0.9332, what is P(Z > 1.5)?',
    options: ['0.9332', '0.5', '1.5', '0.0668'],
    answer: 3,
    explanation: 'P(Z>1.5) = 1 − Φ(1.5) = 1 − 0.9332 = 0.0668.',
    topic: 'The Normal Distribution',
  },
]

export const STATS_EXAM = [
  {
    question: 'Explain one advantage and one disadvantage of using a census rather than a sample.',
    marks: 4,
    markScheme: [
      'Advantage: gives completely accurate information with no sampling error',
      'Disadvantage: time-consuming and expensive for a large population',
      'Also valid: cannot be used if the testing process destroys the item being tested',
      'Final answer: a census is accurate but costly and often impractical for a large population',
    ],
    topic: 'Statistical Sampling',
  },
  {
    question: 'A school has 800 students: 320 in Year 12 and 480 in Year 13. A stratified sample of 100 students is required. Calculate how many students should be sampled from each year group.',
    marks: 3,
    markScheme: [
      'Year 12: (320/800) × 100 = 40',
      'Year 13: (480/800) × 100 = 60',
      'Final answer: 40 from Year 12 and 60 from Year 13',
    ],
    topic: 'Statistical Sampling',
  },
  {
    question: 'Describe how you would take a systematic sample of size 20 from a population of 500.',
    marks: 3,
    markScheme: [
      'k = 500 / 20 = 25',
      'Choose a random starting point between 1 and 25',
      'Final answer: select every 25th member of the sampling frame after that random start',
    ],
    topic: 'Statistical Sampling',
  },
  {
    question: 'A student surveys opinions on a new school policy by asking the first 30 students they see in the corridor. Explain why this may not produce a representative sample.',
    marks: 2,
    markScheme: [
      'This is opportunity (convenience) sampling',
      'Final answer: it is likely biased, since it only reflects students who happen to use that corridor at that particular time, not the whole school population',
    ],
    topic: 'Statistical Sampling',
  },
  {
    question: 'The heights (cm) of 5 plants are 12, 15, 11, 20, 17. Calculate the mean and standard deviation.',
    marks: 4,
    markScheme: [
      'Mean = (12+15+11+20+17)/5 = 75/5 = 15',
      'Σx² = 144+225+121+400+289 = 1179',
      'Variance = 1179/5 − 15² = 235.8 − 225 = 10.8',
      'Final answer: mean = 15, standard deviation = √10.8 ≈ 3.29',
    ],
    topic: 'Data Presentation and Interpretation',
  },
  {
    question: 'A histogram has a class 10-30 with frequency 40. Calculate the frequency density.',
    marks: 2,
    markScheme: [
      'Class width = 30 − 10 = 20',
      'Final answer: frequency density = 40/20 = 2',
    ],
    topic: 'Data Presentation and Interpretation',
  },
  {
    question: 'Explain why standard deviation is generally preferred over the range as a measure of spread.',
    marks: 2,
    markScheme: [
      'The range only uses the two extreme values, so it is very sensitive to outliers',
      'Final answer: standard deviation uses every value in the data set, giving a more representative measure of spread',
    ],
    topic: 'Data Presentation and Interpretation',
  },
  {
    question: 'A data set has Q1 = 8, median = 14, Q3 = 24. Describe the skewness of the distribution and justify your answer.',
    marks: 3,
    markScheme: [
      'Q3 − median = 24 − 14 = 10',
      'median − Q1 = 14 − 8 = 6',
      'The upper gap (10) is larger than the lower gap (6)',
      'Final answer: positively skewed, since the distance from the median to Q3 exceeds the distance from Q1 to the median',
    ],
    topic: 'Data Presentation and Interpretation',
  },
  {
    question: 'In a class of 30 students, 18 study French, 15 study Spanish, and 8 study both. Find the probability that a randomly selected student studies neither language.',
    marks: 4,
    markScheme: [
      'Studying at least one language = 18 + 15 − 8 = 25',
      'Studying neither = 30 − 25 = 5',
      'P(neither) = 5/30',
      'Final answer: 1/6',
    ],
    topic: 'Probability',
  },
  {
    question: 'Events A and B satisfy P(A)=0.6, P(B)=0.3, P(A∪B)=0.72. Determine whether A and B are independent.',
    marks: 4,
    markScheme: [
      'P(A∩B) = P(A)+P(B)−P(A∪B) = 0.6+0.3−0.72 = 0.18',
      'P(A)×P(B) = 0.6×0.3 = 0.18',
      'Since P(A∩B) = P(A)×P(B)',
      'Final answer: A and B are independent',
    ],
    topic: 'Probability',
  },
  {
    question: 'A bag contains 5 red and 3 blue balls. Two balls are drawn without replacement. Find the probability both are red.',
    marks: 3,
    markScheme: [
      'P(first red) = 5/8',
      'P(second red | first red) = 4/7',
      'P(both red) = 5/8 × 4/7 = 20/56',
      'Final answer: 5/14',
    ],
    topic: 'Probability',
  },
  {
    question: 'A biased coin has P(heads) = 0.7. The coin is tossed twice. Find the probability of getting exactly one head.',
    marks: 3,
    markScheme: [
      'P(HT) = 0.7 × 0.3 = 0.21',
      'P(TH) = 0.3 × 0.7 = 0.21',
      'P(exactly one head) = 0.21 + 0.21',
      'Final answer: 0.42',
    ],
    topic: 'Probability',
  },
  {
    question: 'X~B(12, 0.25). Find P(X=3).',
    marks: 3,
    markScheme: [
      'P(X=3) = ¹²C₃ × 0.25³ × 0.75⁹',
      '¹²C₃ = 220',
      '220 × 0.015625 × 0.0751...',
      'Final answer: ≈ 0.258',
    ],
    topic: 'Statistical Distributions (Binomial)',
  },
  {
    question: 'X~B(15, 0.4). Find the mean and variance of X.',
    marks: 2,
    markScheme: [
      'Mean = np = 15 × 0.4 = 6',
      'Final answer: mean = 6, variance = np(1−p) = 15×0.4×0.6 = 3.6',
    ],
    topic: 'Statistical Distributions (Binomial)',
  },
  {
    question: 'A fair coin is tossed 6 times. Find the probability of getting at least 4 heads.',
    marks: 4,
    markScheme: [
      'X~B(6, 0.5)',
      'P(X≥4) = P(X=4)+P(X=5)+P(X=6)',
      '= (⁶C₄+⁶C₅+⁶C₆) × 0.5⁶ = (15+6+1)/64',
      'Final answer: 22/64 = 11/32',
    ],
    topic: 'Statistical Distributions (Binomial)',
  },
  {
    question: 'State two conditions required for a binomial distribution to be a suitable model, in the context of testing 20 lightbulbs for defects.',
    marks: 2,
    markScheme: [
      'Each lightbulb is independent of the others (a defect in one does not affect another)',
      'Final answer: the probability a bulb is defective must be constant across all 20 bulbs, and trials must be independent',
    ],
    topic: 'Statistical Distributions (Binomial)',
  },
  {
    question: 'A company claims 60% of customers are satisfied. In a survey of 20 customers, 16 say they are satisfied. Test at the 5% significance level whether the true proportion of satisfied customers is greater than 60%. State your hypotheses and conclusion.',
    marks: 6,
    markScheme: [
      'H0: p=0.6, H1: p>0.6',
      'Under H0, X~B(20, 0.6)',
      'Find P(X≥16) using cumulative binomial probabilities',
      'Compare the resulting probability to 0.05',
      'If P(X≥16) < 0.05, reject H0; otherwise do not reject H0',
      'Final answer: conclusion depends on the exact calculated probability compared with 0.05, stated in context',
    ],
    topic: 'Statistical Hypothesis Testing',
  },
  {
    question: 'Explain what is meant by the critical region of a hypothesis test.',
    marks: 2,
    markScheme: [
      'The critical region is the range of values of the test statistic that would lead to rejection of H0',
      'Final answer: values in this region are considered too extreme/unlikely to have occurred if H0 were true',
    ],
    topic: 'Statistical Hypothesis Testing',
  },
  {
    question: 'A researcher tests H0: p=0.5 against H1: p≠0.5 at the 10% significance level. Explain why this is a two-tailed test.',
    marks: 2,
    markScheme: [
      'H1 simply states the proportion is "not equal to" 0.5, not specifically greater or less than',
      'Final answer: evidence in either direction (much higher or much lower than 0.5) would support H1, so both tails matter',
    ],
    topic: 'Statistical Hypothesis Testing',
  },
  {
    question: 'Define a Type II error in the context of a hypothesis test.',
    marks: 2,
    markScheme: [
      'A Type II error occurs when H0 is not rejected',
      'Final answer: even though H0 is actually false - i.e. failing to reject a false null hypothesis',
    ],
    topic: 'Statistical Hypothesis Testing',
  },
  {
    question: 'A scientist calculates a PMCC of r=0.85 for 12 pairs of data points. Test at the 5% level whether this shows evidence of positive correlation, given a critical value of 0.497.',
    marks: 3,
    markScheme: [
      'H0: ρ=0, H1: ρ>0 (one-tailed, testing for positive correlation)',
      'Since 0.85 > 0.497 (the critical value)',
      'Final answer: reject H0 - there is significant evidence of positive correlation',
    ],
    topic: 'Regression, Correlation and Hypothesis Testing',
  },
  {
    question: 'Explain why using a regression line to predict y for a value of x well outside the range of the original data may be unreliable.',
    marks: 2,
    markScheme: [
      'This is extrapolation',
      'Final answer: there is no evidence that the linear relationship continues to hold outside the range of data that was actually observed',
    ],
    topic: 'Regression, Correlation and Hypothesis Testing',
  },
  {
    question: 'A regression line is given by y = 4.2 + 1.8x. Interpret the value 1.8 in context.',
    marks: 2,
    markScheme: [
      '1.8 is the gradient of the regression line',
      'Final answer: y increases by 1.8 (units) for every 1 unit increase in x',
    ],
    topic: 'Regression, Correlation and Hypothesis Testing',
  },
  {
    question: 'Give one reason why a strong correlation between two variables does not necessarily mean one causes the other.',
    marks: 2,
    markScheme: [
      'There could be a third (lurking) variable affecting both variables',
      'Final answer: correlation shows association, not causation - a hidden third factor (or coincidence) could explain both',
    ],
    topic: 'Regression, Correlation and Hypothesis Testing',
  },
  {
    question: 'In a school, 55% of students play sport, 30% play music, and 20% do both. Find the probability that a student plays sport given that they play music.',
    marks: 3,
    markScheme: [
      'P(sport|music) = P(sport∩music)/P(music)',
      '= 0.20/0.30',
      'Final answer: 2/3 (≈0.667)',
    ],
    topic: 'Conditional Probability',
  },
  {
    question: 'A box contains 4 white and 6 black balls. Two balls are drawn without replacement. Find the probability the second ball is black, given the first ball was white.',
    marks: 2,
    markScheme: [
      'After removing one white ball, 9 balls remain: 3 white, 6 black',
      'Final answer: P = 6/9 = 2/3',
    ],
    topic: 'Conditional Probability',
  },
  {
    question: 'Events A and B satisfy P(A)=0.4, P(B)=0.5, P(A|B)=0.4. Determine, with reasoning, whether A and B are independent.',
    marks: 3,
    markScheme: [
      'The condition for independence is P(A|B) = P(A)',
      'Here P(A|B) = 0.4 = P(A)',
      'Final answer: A and B are independent',
    ],
    topic: 'Conditional Probability',
  },
  {
    question: 'A doctor finds that 2% of patients have a disease. A test is 90% accurate for those with the disease (true positive rate) and gives a false positive in 5% of healthy patients. Find the probability a patient has the disease given they test positive.',
    marks: 5,
    markScheme: [
      'P(disease)=0.02, P(+|disease)=0.9, P(+|no disease)=0.05',
      'P(+) = 0.02×0.9 + 0.98×0.05 = 0.018+0.049 = 0.067',
      'P(disease|+) = P(+|disease)×P(disease) / P(+) = 0.018/0.067',
      'Final answer: ≈ 0.269 (26.9%)',
    ],
    topic: 'Conditional Probability',
  },
  {
    question: 'X~N(30, 25). Find P(X<37).',
    marks: 3,
    markScheme: [
      'σ = √25 = 5',
      'z = (37−30)/5 = 1.4',
      'P(X<37) = Φ(1.4)',
      'Final answer: ≈ 0.9192',
    ],
    topic: 'The Normal Distribution',
  },
  {
    question: 'X~N(100, 225). Find P(85<X<115).',
    marks: 4,
    markScheme: [
      'σ = √225 = 15',
      'z₁ = (85−100)/15 = −1, z₂ = (115−100)/15 = 1',
      'P(−1<Z<1) = 2Φ(1) − 1 = 2(0.8413) − 1',
      'Final answer: ≈ 0.6826',
    ],
    topic: 'The Normal Distribution',
  },
  {
    question: 'The heights of a population are normally distributed with mean 170 cm and standard deviation 8 cm. Find the height exceeded by only 10% of the population.',
    marks: 4,
    markScheme: [
      'Need z such that P(Z>z)=0.10, so Φ(z)=0.90',
      'z ≈ 1.2816',
      'x = μ + zσ = 170 + 1.2816×8',
      'Final answer: ≈ 180.3 cm',
    ],
    topic: 'The Normal Distribution',
  },
  {
    question: 'Explain why the normal distribution is symmetric and state what this implies about its mean, median and mode.',
    marks: 2,
    markScheme: [
      "The normal distribution's bell curve is symmetric about the mean",
      'Final answer: this means the mean, median and mode are all equal',
    ],
    topic: 'The Normal Distribution',
  },
]
