/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    var result = init;
    for (var i = 0; i < nums.length; i++) {
        result = fn(result, nums[i])
    }
    return result;
};

// Test case 1
console.log(reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr; }, 0)); // Output: 10

// Test case 2
console.log(reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr * curr; }, 100)); // Output: 130

// Test case 3
console.log(reduce([], function sum(accum, curr) { return 0; }, 25)); // Output: 25
