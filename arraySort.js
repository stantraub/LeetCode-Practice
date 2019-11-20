// https://leetcode.com/problems/sort-an-array/

var sortArray = function (nums, cb) {
    if (nums.length < 2) return nums;

    if (!cb) {
        cb = (a, b) => {
            return a > b ? 1 : a < b ? -1 : 0
        }
    }
    let mid = Math.floor(nums.length / 2);
    let sortedLeft = sortArray(nums.slice(0, mid), cb);
    let sortedRight = sortArray(nums.slice((mid)),cb);
    return merge(sortedLeft, sortedRight, cb);

};

function merge(left, right, cb) {
    let merged = [];

    while (left.length && right.length) {
        if (cb(left[0],right[0]) === -1) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift());
        }
    }

    merged = merged.concat(left, right);
    return merged;
}

console.log(sortArray([2,1,3,5,4]));