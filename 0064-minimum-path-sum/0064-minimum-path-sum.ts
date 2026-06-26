function minPathSum(grid: number[][]): number {
    let m = grid.length
    let n = grid[0].length

    let dp = []

    for (let i = 0; i < m; i++) {
        dp.push(new Array(n).fill(0))
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let current = grid[i][j]
            let top = i - 1 >= 0 ? dp[i - 1][j] : undefined
            let left = j - 1 >= 0 ? dp[i][j - 1] : undefined
            let localScore = 0
            if (top !== undefined && left  !== undefined) {
                localScore = Math.min(top, left)
            } else if (top  !== undefined && left == undefined) {
                localScore = top
            } else if (left  !== undefined && top == undefined) {
                localScore = left
            }

            dp[i][j] = current + localScore
            // console.log(current, top, left, i, j, dp[i][j])
        }
    }
    // console.log(dp)

    return dp[m - 1][n - 1]
};


