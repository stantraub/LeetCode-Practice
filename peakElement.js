// https://leetcode.com/problems/find-peak-element/

function findPeaks (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 && nums[i] > nums[i + 1]) return i;
        if (i === nums.length - 1 && nums[i] > nums[i - 1]) return i;
        if (nums[i - 1] < nums[i] && nums[i + 1] < nums[i]) {
          
            return i;
        }
    }

    return false;
};

console.log(findPeaks([1, 2, 3, 1, 5, 3])) // => 2
console.log(findPeaks([3, 1])) // => 0