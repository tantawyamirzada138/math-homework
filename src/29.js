function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Example usage: Generate a random number between 1 and 10
let randomNumber = getRandomInt(10);
console.log(randomNumber); // Output: 7

// Another example: Generate a random string of characters
let randomString = '';
for (let i = 0; i < 5; i++) {
  randomString += 'a' + Math.random().toString(36).substr(2, 14) + 'b';
}
console.log(randomString); // Output: "abgkijmnopqrstuvxyz"
