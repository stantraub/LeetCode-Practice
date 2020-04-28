var gameOfLife = function (board) {
    //make a copy of the old state of the board
    let oldState = []

    for (let i = 0; i < board.length; i++) {
        let row = []
        for (let j = 0; j < board[0].length; j++) {
            row.push(board[i][j])
        }
        oldState.push(row)
    }


    //create a directions array to see the neighbors

    let dirs = [[1, 1], [0, 1], [1, 0], [-1, 0], [1, -1], [0, -1], [-1, -1], [-1, 1]]

    //apply rule logic in every iteration and use old state as reference

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            checkRules([i, j])
        }
    }

    return board

    function inBounds(coord, dir) {

        const [x, y] = coord
        if (x + dir[0] < board.length && x + dir[0] >= 0 && y + dir[1] < board[0].length && y + dir[1] >= 0) {
            return true
        }

        return false
    }

    function checkRules(coord) {
        const [x, y] = coord
        let live = oldState[x][y] === 1

        //rule 1

        let neighbors = 0
        dirs.forEach(dir => {
            if (inBounds([x, y], dir)) {
                if (oldState[x + dir[0]][y + dir[1]] === 1) {
                    neighbors++
                }
            }

        })

        if (neighbors < 2 && live) {
            board[x][y] = 0
        }
        //rule 2

        if (neighbors > 1 && live) {
            board[x][y] = 1
        }
        // rule 3

        if (neighbors > 3 && live) {
            board[x][y] = 0
        }

        //rule 4

        if (!live && neighbors === 3) {
            board[x][y] = 1
        }
    }
};