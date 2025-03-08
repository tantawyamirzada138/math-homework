function getRandomMathHomework() {
  const problem1 = {
    question: "What is the value of x in the equation 2x + 5 = 11?",
    answer: "x = 3"
  };
  const problem2 = {
    question: "Simplify the expression: (3x^2 + 2x - 1) / (x + 1)",
    answer: "3x - 1"
  };
  const problem3 = {
    question: "Find the value of y in the equation: y = mx + b, where m = 2 and b = 3",
    answer: "y = 2x + 3"
  };
  const problems = [problem1, problem2, problem3];
  return problems[Math.floor(Math.random() * problems.length)];
}
