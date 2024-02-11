/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let currentValue = init;
    return {
        increment: function () {
            currentValue++;
            return currentValue;
        },
        decrement: function () {
            currentValue--;
            return currentValue;
        },
        reset: function () {
            currentValue = init;
            return currentValue;
        }
    }
};

// Create counter with initial value 5
const counter = createCounter(5);

// Test increment method
console.log(counter.increment()); // Output: 6

// Test reset method
console.log(counter.reset()); // Output: 5

// Test decrement method
console.log(counter.decrement()); // Output: 4