var findMode = function (root) {
    let res = {}

    let largest = 0;


    function dfs(node) {
        if (!node) {
            return
        }

        let num = node.val

        res[num] ? res[num] += 1 : res[num] = 1
        if (res[num] > largest) largest = res[num]
        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)

    let answer = []

    for (const num in res) {
        if (res[num] === largest) answer.push(num)
    }

    return answer



};