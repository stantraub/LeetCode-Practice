var removeElement = function (nums, val) {
    let i = 0

    for (const num of nums) {
        if (num !== val) {
            nums[i] = num
            i++
        }
    }
    console.log(nums)
    return i
}; //hi

console.log(removeElement([1,2,3,3,5], 3))