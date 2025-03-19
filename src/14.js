function solveEquation(equation) {
  const parts = equation.split('=');
  let result;
  if (parts[1].includes('/')) {
    // division
    const numerator = parts[0].trim();
    const denominator = parts[1].split('/')[1];
    result = numerator / denominator;
  } else if (parts[1].includes('+') || parts[1].includes('-')) {
    // addition or subtraction
    const numbers = parts[0].trim().split('+');
    result = Number(numbers[0]) + Number(numbers[1]);
  } else {
    // multiplication or unknown operator
    const numbers = parts[0].trim().split('*');
    result = Number(numbers[0]) * Number(numbers[1]);
  }
  return result;
}