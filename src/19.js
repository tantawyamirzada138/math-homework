// Example JavaScript code for solving mathematical problems

// Function to perform arithmetic operations
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) throw new Error("Cannot divide by zero");
    return x / y;
}

// Example usage of the functions
console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6

try {
    console.log(divide(10, 2)); // Output: 5
} catch (error) {
    console.error(error.message); // Output: Cannot divide by zero
}
