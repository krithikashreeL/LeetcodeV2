function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length

    if(m == 1 && n == 1){
        return Number(!obstacleGrid[0][0])
    }
    if(obstacleGrid[0][0] == 1){
        return 0
    }
    let dp = []

    for (let i = 0; i < m; i++) {
        dp.push(new Array(n).fill(0))
    }



    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 && j == 0) {
                dp[i][j] = 1
                continue
            }
            let current = obstacleGrid[i][j]
            if (current == 1) {
                dp[i][j] = 0
                continue
            }

            let top = i - 1 >= 0 ? dp[i - 1][j] : 0
            let left = j - 1 >= 0 ? dp[i][j - 1] : 0

            dp[i][j] = top + left
        }
    }


    return dp[m-1][n-1]
};