// Define arrays for each placeholder word
const firstWords = ['lose', 'become', 'provide', 'blunder', 'fail', 'fumble'];
const secondWords = ['hits', 'attempts', 'efforts', 'opportunities', 'swigs', 'bricks'];
const thirdWords = ['make', 'have', 'get', 'see', 'want', 'try'];

// Function to generate a random word from an array
function getRandomWord(wordArray) {
  const randomIndex = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomIndex];
}

// Generate the sentence with random words
const firstWord = getRandomWord(firstWords);
const secondWord = getRandomWord(secondWords);
const thirdWord = getRandomWord(thirdWords);

const sentence = `You ${firstWord} 100% of the ${secondWord} you don't ${thirdWord}.`;

console.log(sentence);