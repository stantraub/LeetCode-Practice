var preorder = function (root) {
    let res = [];

    function helper(root) {
        if (!root) {
            return
        }

        res.push(root.val)
        for (const child of root.children) {
            helper(child)
        }


    }

    helper(root)

    return res
};