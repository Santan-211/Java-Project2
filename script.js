// ==========================================
// STRING MANIPULATION FUNCTIONS
// ==========================================

// 1. Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
// Output: "olleh"


// 2. Count Characters
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters("Hello World"));
// Output: 11


// 3. Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeWords("hello world from javascript"));
// Output: "Hello World From Javascript"



// ==========================================
// ARRAY FUNCTIONS
// ==========================================

// 4. Find Maximum Value
function findMaximum(numbers) {
    return Math.max(...numbers);
}

console.log(findMaximum([10, 5, 20, 8, 15]));
// Output: 20


// 5. Find Minimum Value
function findMinimum(numbers) {
    return Math.min(...numbers);
}

console.log(findMinimum([10, 5, 20, 8, 15]));
// Output: 5


// 6. Sum of Array
function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));
// Output: 15


// 7. Filter Array
function filterArray(array, condition) {
    return array.filter(condition);
}

// Example: Get numbers greater than 5
const numbers = [2, 5, 8, 10, 3, 7];

const filteredNumbers = filterArray(numbers, number => number > 5);

console.log(filteredNumbers);
// Output: [8, 10, 7]



// ==========================================
// MATHEMATICAL FUNCTIONS
// ==========================================

// 8. Factorial
function factorial(number) {
    if (number < 0) {
        return "Factorial is not defined for negative numbers";
    }

    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));
// Output: 120


// 9. Prime Number Check
function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));
// Output: true

console.log(isPrime(10));
// Output: false


// 10. Fibonacci Sequence
function fibonacci(terms) {
    if (terms <= 0) {
        return [];
    }

    if (terms === 1) {
        return [0];
    }

    let sequence = [0, 1];

    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}

console.log(fibonacci(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]