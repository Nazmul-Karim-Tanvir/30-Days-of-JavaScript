var map = function(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
}

// Test cases
const arr1 = [1, 2, 3];
const fn1 = function plusone(n,i) {
    return n + 1;
};
const fn2 = function plusI(n, i) {
    return n + i;
};
const fn3 = function constant() {
    return 42;
};
console.log(map(arr1, fn1)); // Output: [2, 3, 4]
console.log(map(arr1, fn2)); // Output: [1, 3, 5]
console.log(map(arr1, fn3)); // Output: [42, 42, 42]
