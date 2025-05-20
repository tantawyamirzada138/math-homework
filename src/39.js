function calculateGCD(a, b) {
  if (b === 0) return a;
  return calculateGCD(b, a % b);
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function findLargestMultiple(n, divisor) {
  let largestMultiple = n;

  while (largestMultiple % divisor !== 0) {
    largestMultiple += divisor;
  }

  return largestMultiple;
}
