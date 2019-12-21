var countNodes = function (root) {
    let nodes = 0;

    function helper(root) {
        if (!root) return;

        helper(root.left);
        nodes++;
        helper(root.right);
    }
    helper(root)
    return nodes

};