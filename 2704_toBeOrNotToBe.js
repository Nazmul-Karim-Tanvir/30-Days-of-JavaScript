/**
 * @param {any} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal");
            else return { "value": true };
        },
        notToBe: (val2) => {
            if (val === val2) throw new Error("Equal");
            else return { "value": true };
        }
    }
};
//test case 1
try {
    console.log(expect(5).toBe(5)); // {"value": true}
} catch (error) {
    console.log(error.message); // Will not be executed
}
//test case 2
try {
    console.log(expect(5).toBe(null)); // {"error": "Not Equal"}
} catch (error) {
    console.log(error.message); // Output: "Not Equal"
}
//test case 3
try {
    console.log(expect("Hello").toBe("Hello")); // {"value": true}
} catch (error) {
    console.log(error.message); // Will not be executed
}
//test case 4
try {
    console.log(expect("Hello").notToBe("Hello")); // throws "Equal"
} catch (error) {
    console.log(error.message); // Output: "Equal"
}
//test case 5
try {
    console.log(expect("Hello").toBe("World")); // throws "Not Equal"
} catch (error) {
    console.log(error.message); // Output: "Not Equal"
}
//test case 6
try {
    console.log(expect("Hello").notToBe("World")); // {"value": true}
} catch (error) {
    console.log(error.message); // Will not be executed
}
