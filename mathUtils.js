// Math utility functions using CommonJS module system

// Function to multiply two numbers
function multiplyNumbers(a, b) {
  return a * b;
}

// Function to calculate the square of a number
function square(x) {
  return x * x;
}

// Export the functions using module.exports
module.exports = {
  multiplyNumbers,
  square,
};
