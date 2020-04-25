const findLongestWord = string => {
  const words = string.split(' ');
  let numberLetter = 0;
  let longestWord;

  for (const word of words) {
    if (word.length > numberLetter) {
      numberLetter = word.length;
      longestWord = word;
    }
  }

  return `The longest word of string: '${longestWord}'`;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'
