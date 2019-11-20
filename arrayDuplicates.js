// https://leetcode.com/problems/find-all-duplicates-in-an-array/

var findDuplicates = function (nums) {
    let counts = {};

    for (let i = 0; i < nums.length; i++) {
        if (!counts[nums[i]]) {
            counts[nums[i]] = 0;
        }

        counts[nums[i]] += 1;
    }
    
    let chars = Object.keys(counts);
    let res = [];
    for (let i = 0; i < chars.length; i++) {
        if (counts[chars[i]] === 2) res.push(parseInt(chars[i]));
    }
    return res;

};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // => [2, 3]