// Import the mathUtils module
import { multiplyNumbers, square } from "./mathUtils.js";

function main(): void {
  console.log("Program started.");

  // Example feature: Calculate and log the sum of two numbers
  const result: number = addNumbers(5, 3);
  console.log(`The sum of 5 and 3 is: ${result}`);

  // Use functions from mathUtils module
  const product: number = multiplyNumbers(4, 6);
  console.log(`The product of 4 and 6 is: ${product}`);

  const squaredValue: number = square(5);
  console.log(`The square of 5 is: ${squaredValue}`);

  console.log("Program finished.");
}

// Helper function to add two numbers
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Call the main function to start the program
main();
