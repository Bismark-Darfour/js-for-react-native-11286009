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

// Function to format strings based on corresponding numbers
function formatArrayStrings(strings, numbers) {
    // Check if the lengths of the arrays match
    if (strings.length !== numbers.length) {
        console.error("Arrays must have the same length.");
        return;
    }

    // Map through the arrays and modify strings based on numbers
    return strings.map((str, index) => {
        // Check if the corresponding number is even
        if (numbers[index] % 2 === 0) {
            // Capitalize the entire string
            return str.toUpperCase();
        } else {
            // Convert the string to lowercase
            return str.toLowerCase();
        }
    });
}

// Example usage:
const stringsArray = ["Kofi", "Kwame", "Kwasi", "Kojo"];
const processedNumbers = processArray([1, 2, 3, 4]);
const formattedStrings = formatArrayStrings(stringsArray, processedNumbers);
console.log(formattedStrings); // Output: ["Kofi", "Kwame", "Kwasi", "Kojo"]
