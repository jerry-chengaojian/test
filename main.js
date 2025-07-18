// Require the mathUtils module
const mathUtils = require("./mathUtils");

// Main function that orchestrates the program
function main() {
  console.log("Program started.");

  // Example feature: Calculate and log the sum of two numbers
  const result = addNumbers(5, 3);
  console.log(`The sum of 5 and 3 is: ${result}`);

  // Use functions from mathUtils module
  const product = mathUtils.multiplyNumbers(4, 6);
  console.log(`The product of 4 and 6 is: ${product}`);

  const squaredValue = mathUtils.square(5);
  console.log(`The square of 5 is: ${squaredValue}`);

  console.log("Program finished.");
}

// Helper function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Call the main function to start the program
main();
