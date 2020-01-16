var findDisappearedNumbers = function (nums) {
    let res = [];
    let numbers = new Set();
    for (const num of nums) {
        numbers.add(num)
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!numbers.has(i)) {
            res.push(i)
        }
    }

    return res
};
//