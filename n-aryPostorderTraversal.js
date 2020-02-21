var postorder = function (root) {
    let res = [];

    function helper(root) {
        if (!root) {
            return
        }

        for (const child of root.children) {
            helper(child)
            res.push(child.val)
        }

    }

    helper(root)
    if (root) res.push(root.val)

    return res

};