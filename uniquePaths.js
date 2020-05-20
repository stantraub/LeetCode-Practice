var uniquePaths = function (m, n) {
    let dp = []

    for (let i = 0; i < m; i++) {
        let row = []
        for (let j = 0; j < n; j++) {
            row.push(0)
        }

        dp.push(row)
    }

    for (let i = 0; i < dp[0].length; i++) {
        dp[0][i] = 1
    }

    for (let j = 0; j < dp.length; j++) {
        dp[j][0] = 1
    }

    for (let row = 1; row < dp.length; row++) {
        for (let col = 1; col < dp[0].length; col++) {
            dp[row][col] = dp[row - 1][col] + dp[row][col - 1]
        }
    }

    return dp[m - 1][n - 1]
};