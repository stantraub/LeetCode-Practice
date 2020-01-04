var hasPathSum = function (root, sum) {
    if (!root) return false;

    if (root.left === null && root.right === null) {
        return sum === root.val
    }

    let left = hasPathSum(root.left, sum - root.val);
    let right = hasPathSum(root.right, sum - root.val);

    return left || right


};