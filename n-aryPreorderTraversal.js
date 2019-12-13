var preorder = function (root) {
    let arr = [];

    function preorderHelper(root) {
        if (!root) return;
        arr.push(root.val)
        for (const child of root.children) {

            preorderHelper(child)
        }
    }
    preorderHelper(root)

    return arr;
};