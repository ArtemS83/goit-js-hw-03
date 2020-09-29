function findLongestWord(string = '') {
  // Write code under this line
  const words = string.split(' ');
  let result = words[0];
  for (const word of words) {
    if (word.length > result.length) {
      result = word;
    }
  }
  return result;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
