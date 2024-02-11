/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

// Test case 1
const counter1 = createCounter(10);
console.log(counter1()); // Output: 10
console.log(counter1()); // Output: 11
console.log(counter1()); // Output: 12

// Test case 2
const counter2 = createCounter(-2);
console.log(counter2()); // Output: -2
console.log(counter2()); // Output: -1
console.log(counter2()); // Output: 0
console.log(counter2()); // Output: 1
console.log(counter2()); // Output: 2
