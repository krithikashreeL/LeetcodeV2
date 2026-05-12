function maximalSquare(matrix: string[][]): number {
    let max = 0
    let m = matrix.length
    let n = matrix[0].length

    let dp = []
    for (let i = 0; i < m; i++) {
        dp.push(new Array(n).fill(0))
    }
    // console.log(dp)

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (matrix[i][j] == '0') {
                dp[i][j] = '0'
            } else {
                let down = 0
                let right = 0
                let diagonal = 0

                if ((i + 1) >= 0 && (i + 1) < m) {
                    down = dp[i + 1][j]
                }
                if ((j + 1) < n && (j + 1) >= 0) {
                    right = dp[i][j + 1]
                }
                if ((j + 1) >= 0 && (j + 1) < n && (i + 1) >= 0 && (i + 1) < m) {
                    diagonal = dp[i + 1][j + 1]
                }

                dp[i][j] = 1 + Math.min(diagonal, down, right)
                max = Math.max(dp[i][j],max)


            }
        }
    }

    return max * max
};