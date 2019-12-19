var invertTree = function (root) {
    if (!root) return null;
    swap(root);
    invertTree(root.left);
    invertTree(root.right);
    return root
};

function swap(root) {
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
}