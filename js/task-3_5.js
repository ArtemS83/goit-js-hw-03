function checkForSpam(message) {
  'use strict';
  // Write code under this line
  return (
    message.toLowerCase().includes('sale') ||
    message.toLowerCase().includes('spam')
  );
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
