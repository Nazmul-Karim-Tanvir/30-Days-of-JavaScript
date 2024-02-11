/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    };
};

// Test cases
const f1 = createHelloWorld();
console.log(f1()); // Output: "Hello World"

const f2 = createHelloWorld();
console.log(f2({}, null, 42)); // Output: "Hello World"

const f3 = createHelloWorld();
console.log(f3("test", {key: "value"})); // Output: "Hello World"

const f4 = createHelloWorld();
console.log(f4(1, 2, 3, "abc")); // Output: "Hello World"

const f5 = createHelloWorld();
console.log(f5()); // Output: "Hello World"

const f6 = createHelloWorld();
console.log(f6({}, {}, {})); // Output: "Hello World"

const f7 = createHelloWorld();
console.log(f7(0)); // Output: "Hello World"

const f8 = createHelloWorld();
console.log(f8("foo", "bar", "baz")); // Output: "Hello World"
