let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// get all words
const storyWords = story.split(' ');

console.log(`There are ${storyWords.length} words total`);

// story array without the unnecessary words
const betterWords = storyWords.filter(word => !unnecessaryWords.some(unnecessaryWord => unnecessaryWord === word));

// alert use of overused words
/* this method is swifter but inefficient!
overusedWords.forEach(overusedWord =>  console.log(`You used "overusedWord""{betterWords.filter(word => word === overusedWord).length} times`)); */
const overusedWordsCount = {};
overusedWords.forEach(word => overusedWordsCount[word] = 0);
// overusedWordsCount is now {'really': 0, 'very': 0, 'basically': 0}
// for each word of betterWords
for (let i = 0; ; i++) {
  const word = betterWords[i];
  // if it is an overused word
  if (overusedWords.includes(word)) {
    overusedWordsCount[word]++; // count up that overused word
    // for every other instance of this word
    if (overusedWordsCount[word] % 2 === 0) {
      // remove the word from better words
      betterWords.splice(i, 2, betterWords[i + 1]);
      // manipulate index because removing a word changed all following indexes
      i--;
    }
  }
  if (i >= betterWords.length) {
    break;
  }
}
for (word in overusedWordsCount) {
  console.log(`You have used "${word}" ${overusedWordsCount[word]} times`);
}

// count sentences
let sentencesN = 0;
for (const word of betterWords) {
  if (['.', '!'].includes(word[word.length - 1])) {
    sentencesN++;
  }
}
console.log('You have ' + sentencesN + ' sentences total');

console.log(betterWords.join(' '));