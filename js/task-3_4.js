function formatString(string, maxLength = 40) {
  // Write code under this line4
  let newString;
  //   if (string.length <= maxLength) {
  //     newString = string;
  //   } else {
  //     newString = string.slice(0, maxLength) + '...';
  //   }
  string.length <= maxLength
    ? (newString = string)
    : (newString = string.slice(0, maxLength) + '...');
  return newString;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.')); //length=39
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.')); //length=49
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30), //length=49
);
// 'Vestibulum facilisis, purus ne...'
