var postorderTraversal = function (root) {
    let res = []

    function helper(root) {
        if (!root) return
        helper(root.left)
        helper(root.right)
        res.push(root.val)
    }

    helper(root)
    return res
};