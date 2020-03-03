var orangesRotting = function (grid) {
    let rotten = new Set()
    let fresh = new Set()

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                fresh.add("" + i + j)
            } else if (grid[i][j] === 2) {
                rotten.add("" + i + j)
            }
        }
    }

    let minutes = 0
    let dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]]


    while (fresh.size > 0) {
        let infected = new Set()
        for (const s of rotten) {

            let i = parseInt(s.charAt(0))
            let j = parseInt(s.charAt(1))
            
            for (const dir of dirs) {
                let nextI = i + dir[0]
                let nextJ = j + dir[1]
                if (fresh.has("" + nextI + nextJ)) {

                    fresh.delete("" + nextI + nextJ)
                    infected.add("" + nextI + nextJ)
                }
            }
        }

        if (infected.size === 0) {
            return -1
        }

        rotten = infected;
        minutes++

    }

    return minutes

    // console.log(rotten)
    // console.log(fresh)
};

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]))