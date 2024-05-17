// arrayManipulation.js

// Function to process the array
function processArray(arr) {
    // Map through the array and apply the required operations
    return arr.map(num => {
        // Check if the number is even
        if (num % 2 === 0) {
            // Square even numbers
            return num * num;
        } else {
            // Triple odd numbers
            return num * 3;
        }
    });
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const resultArray = processArray(inputArray);
console.log(resultArray); // Output: [3, 4, 9, 16, 15]
