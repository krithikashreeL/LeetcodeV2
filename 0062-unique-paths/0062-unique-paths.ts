function uniquePaths(m: number, n: number): number {
    let dp = []

    for (let i = 0; i < m; i++) {
        dp.push(new Array(n).fill(1))
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            let top = i - 1 >= 0 ? dp[i - 1][j] : 0
            let left = j - 1 >= 0 ? dp[i][j - 1] : 0
            dp[i][j] = top + left
        }
    }

    // console.log(dp)
    return dp[m-1][n-1]
};