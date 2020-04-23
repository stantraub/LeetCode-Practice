var productExceptSelf = function (nums) {
    let res = []
    let leftProducts = new Array(nums.length)
    let rightProducts = new Array(nums.length)

    leftProducts[0] = 1
    for (let i = 1; i < nums.length; i++) {
        leftProducts[i] = nums[i - 1] * leftProducts[i - 1]
    }

    rightProducts[rightProducts.length - 1] = 1

    for (let i = rightProducts.length - 2; i >= 0; i--) {
        rightProducts[i] = nums[i + 1] * rightProducts[i + 1]
    }


    for (let i = 0; i < nums.length; i++) {
        res.push(leftProducts[i] * rightProducts[i])
    }

    return res


};