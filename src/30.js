// Example JavaScript code for Math Homework Problems
function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(5, 3)); // Output: 8

function multiplyNumbers(a, b) {
    return a * b;
}

console.log(multiplyNumbers(4, 2)); // Output: 8

function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

console.log(calculateAverage([1, 2, 3, 4])); // Output: 2.5

function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(13)); // Output: true
