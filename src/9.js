function getRandomMathHomeworkProblem() {
  // Generate a random number between 1 and 10
  const num = Math.floor(Math.random() * 10) + 1;

  // Generate a random math operation (+, -, x, /)
  const operator = ['+', '-', 'x', '/'][Math.floor(Math.random() * 4)];

  // Generate a random number between 1 and 10
  const num2 = Math.floor(Math.random() * 10) + 1;

  // Return the math problem
  return `${num} ${operator} ${num2}`;
}

// Example usage
console.log(getRandomMathHomeworkProblem()); // Output: "7 x 3"
