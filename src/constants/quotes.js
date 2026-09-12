/*
  One line a day on the dashboard. Mostly Stoics and Greeks (public
  domain), a few from anime that actually say something. Deliberately no
  poster fodder - a line earns its place by being blunt, not warm.

  quoteForDay picks by calendar day so everyone sees the same line on the
  same date and it does not change on refresh; "another" is a plain
  random pick.
*/
export const QUOTES = [
  { text: 'Being weak is nothing to be ashamed of. Staying weak is.', by: 'Fuegoleon Vermillion', from: 'Black Clover' },
  { text: 'It is not that we have a short time to live, but that we waste a lot of it.', by: 'Seneca' },
  { text: 'We suffer more often in imagination than in reality.', by: 'Seneca' },
  { text: 'It is not because things are difficult that we do not dare; it is because we do not dare that things are difficult.', by: 'Seneca' },
  { text: 'Difficulties strengthen the mind, as labour does the body.', by: 'Seneca' },
  { text: 'Begin at once to live, and count each separate day as a separate life.', by: 'Seneca' },
  { text: 'Waste no more time arguing about what a good man should be. Be one.', by: 'Marcus Aurelius' },
  { text: 'You have power over your mind, not outside events. Realise this, and you will find strength.', by: 'Marcus Aurelius' },
  { text: 'The impediment to action advances action. What stands in the way becomes the way.', by: 'Marcus Aurelius' },
  { text: 'If it is not right, do not do it; if it is not true, do not say it.', by: 'Marcus Aurelius' },
  { text: 'Confine yourself to the present.', by: 'Marcus Aurelius' },
  { text: 'How much time he gains who does not look to see what his neighbour says or does.', by: 'Marcus Aurelius' },
  { text: 'It is not what happens to you, but how you react to it that matters.', by: 'Epictetus' },
  { text: 'First say to yourself what you would be; and then do what you have to do.', by: 'Epictetus' },
  { text: 'No man is free who is not master of himself.', by: 'Epictetus' },
  { text: 'If you want to improve, be content to be thought foolish and stupid.', by: 'Epictetus' },
  { text: 'Only the educated are free.', by: 'Epictetus' },
  { text: 'The unexamined life is not worth living.', by: 'Socrates' },
  { text: 'Be as you wish to seem.', by: 'Socrates' },
  { text: 'I know that I know nothing.', by: 'Socrates' },
  { text: 'The foundation of every state is the education of its youth.', by: 'Diogenes' },
  { text: 'We have two ears and one tongue so that we would listen more and talk less.', by: 'Diogenes' },
  { text: 'It is the privilege of the gods to want nothing, and of godlike men to want little.', by: 'Diogenes' },
  { text: 'The roots of education are bitter, but the fruit is sweet.', by: 'Aristotle' },
  { text: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.', by: 'Will Durant, on Aristotle' },
  { text: 'The first and best victory is to conquer self.', by: 'Plato' },
  { text: 'Character is destiny.', by: 'Heraclitus' },
  { text: 'Well-being is realised by small steps, but is truly no small thing.', by: 'Zeno of Citium' },
  { text: 'The mind is not a vessel to be filled but a fire to be kindled.', by: 'Plutarch' },
  { text: 'Mastering others is strength. Mastering yourself is true power.', by: 'Lao Tzu' },
  { text: 'It does not matter how slowly you go as long as you do not stop.', by: 'Confucius' },
  { text: 'He who has a why to live can bear almost any how.', by: 'Friedrich Nietzsche' },
  { text: 'No one can build you the bridge on which you, and only you, must cross the river of life.', by: 'Friedrich Nietzsche' },
  { text: 'Today is victory over yourself of yesterday; tomorrow is your victory over lesser men.', by: 'Miyamoto Musashi' },
  { text: 'Do nothing which is of no use.', by: 'Miyamoto Musashi' },
  { text: 'I fear not the man who has practised ten thousand kicks once, but the man who has practised one kick ten thousand times.', by: 'Bruce Lee' },
  { text: 'A lesson without pain is meaningless.', by: 'Edward Elric', from: 'Fullmetal Alchemist: Brotherhood' },
  { text: 'Hard work is worthless for those that do not believe in themselves.', by: 'Naruto Uzumaki', from: 'Naruto' },
  { text: 'A dropout will beat a genius through hard work.', by: 'Rock Lee', from: 'Naruto' },
  { text: 'If you do not take risks, you cannot create a future.', by: 'Monkey D. Luffy', from: 'One Piece' },
  { text: 'Power comes in response to a need, not a desire.', by: 'Goku', from: 'Dragon Ball Z' },
  { text: 'Fear is not evil. It tells you what your weakness is.', by: 'Gildarts Clive', from: 'Fairy Tail' },
  { text: 'If you win, you live. If you lose, you die. If you do not fight, you cannot win.', by: 'Eren Yeager', from: 'Attack on Titan' },
  { text: 'Set your heart ablaze.', by: 'Kyojuro Rengoku', from: 'Demon Slayer' },
  { text: 'Talent is something you make bloom. Instinct is something you polish.', by: 'Toru Oikawa', from: 'Haikyu!!' },
  { text: 'You should enjoy the little detours to the fullest. Because that is where you will find the things more important than what you want.', by: 'Ging Freecss', from: 'Hunter x Hunter' },
  { text: 'Do not believe in yourself. Believe in me, who believes in you.', by: 'Kamina', from: 'Gurren Lagann' },
  { text: 'Whatever happens, happens.', by: 'Spike Spiegel', from: 'Cowboy Bebop' },
]

export function quoteForDay(now = Date.now()) {
  const d = new Date(now)
  const start = new Date(d.getFullYear(), 0, 0)
  const dayOfYear = Math.floor((d - start) / 86400000)
  return QUOTES[(dayOfYear * 7 + d.getFullYear()) % QUOTES.length]
}

export const randomQuote = (except) => {
  const pool = QUOTES.filter((q) => q !== except)
  return pool[Math.floor(Math.random() * pool.length)]
}
