var exist = function (board, word) {

    let found = false

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                let visited = new Set()
                dfs(word.slice(1), [i, j], visited.add([i, j]))
                if (found) return true
            }
        }
    }

    return false

    function inBounds(coord, dir) {
        const [x, y] = coord

        if (x + dir[0] < board.length && x + dir[0] >= 0 & y + dir[1] < board[0].length && y + dir[1] >= 0) {
            return true
        } else {
            return false
        }
    }



    function dfs(currentWord, coord, visited) {
        if (currentWord.length === 0) found = true

        visited.add(coord)

        const [x, y] = coord

        let dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]



        dirs.forEach(dir => {
            if (inBounds(coord, dir) && board[x + dir[0]][y + dir[1]] === currentWord[0] && !visited.has([x + dir[0], y + dir[1]])) {
                dfs(currentWord.slice(1), [x + dir[0], y + dir[1]], visited)
            }
        })
    }
};

// passes 76/89 cases