const generateRandomJsCode = () => {
  const operators = ['+', '-', '*', '/', '%'];
  const numbers = [1, 2, 3, 4, 5];
  const variableNames = ['x', 'y', 'z'];

  let code = '';
  for (let i = 0; i < 5; i++) {
    code += `${numbers[Math.floor(Math.random() * numbers.length)]} ${operators[Math.floor(Math.random() * operators.length)]} ${variableNames[Math.floor(Math.random() * variableNames.length)]};\n`;
  }
  return code;
}
