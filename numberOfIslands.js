function numberIslands(matrix) {
    let lengths = [];
    let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            var size = 0;
            if (matrix[i][j] === 1) {
                dfs([i, j])
            }

            if (size > 0) lengths.push(size);
        }
    }

    function inBounds(coord, dir) {

        const [x, y] = coord
        if (x + dir[0] < board.length && x + dir[0] >= 0 && y + dir[1] < board[0].length && y + dir[1] >= 0) {
            return true
        }

        return false
    }


    function dfs(coord) {
        const [x, y] = coord
        if (matrix[x][y] !== 1) {
            return;
        }
        matrix[x][y] = 'X';
        size++
        dirs.forEach(dir => {
            if (x + dir[0] < matrix.length && x + dir[0] >= 0 && y + dir[1] < matrix[0].length && y + dir[1] >= 0) {
                dfs([x + dir[0], y + dir[1]])
            }
        })

    }

    return lengths;
}

