// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Use the random number to solve a math problem
const problem = `What is ${randomNumber} times ${randomNumber}?`;
const answer = prompt(problem);
if (answer === `${randomNumber * randomNumber}`) {
  console.log("Correct!");
} else {
  console.log("Incorrect, the answer is ${randomNumber * randomNumber}.");
}
