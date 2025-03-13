// Generate a random number between 1 and 5
const randNum = Math.floor(Math.random() * 5) + 1;

// Use the generated number to create a random math problem
const problem = `What is ${randNum} x ${randNum}`;

// Prompt the user to solve the problem and store their response in a variable
let answer = prompt(problem);

// Check if the user's response is correct, and output a message accordingly
if (answer === randNum * randNum) {
  console.log("Correct!");
} else {
  console.log("Incorrect.");
}
