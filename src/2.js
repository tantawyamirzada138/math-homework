function getRandomMathProblem() {
  const operators = ['+', '-', '*', '/'];
  let problem = '';

  // Generate two random numbers between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  // Select a random operator
  const operator = operators[Math.floor(Math.random() * operators.length)];

  switch (operator) {
    case '+':
      problem = `${num1} + ${num2}`;
      break;
    case '-':
      problem = `${num1} - ${num2}`;
      break;
    case '*':
      problem = `${num1} * ${num2}`;
      break;
    case '/':
      problem = `${num1} / ${num2}`;
      break;
  }

  return problem;
}
