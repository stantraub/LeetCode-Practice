let root = document.documentElement

function dfs(root, target) {
    let res = []

    function helper(root) {
        if (!root) {
            return
        }
        for (const child of root.children) {
            if (child.id === target) {
                res.push(child)
            }

            helper(child)
        }
    }

    helper(root)

    return res
}