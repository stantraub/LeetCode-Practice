var maxDepth = function (root) {
    if (root === null) {
        return 0;
    }
    let max = 1;
    let curNode = root
    function helper(node, depth) {
        if (node === null) {
            return
        } else {
            if (depth > max) {
                max = depth
            }
            helper(node.left, depth + 1)
            helper(node.right, depth + 1)
        }
    }

    helper(curNode, max)
    return max
};