function maximalSquare(matrix: string[][]): number {

    let dp = []
    let m = matrix.length
    let n = matrix[0].length


    for(let i = 0; i < m; i++){
        dp.push(new Array(n).fill(0))
    }
    let max = 0

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {

            let current = matrix[i][j]
            if (current == '1') {
                let right = j + 1 < n ? dp[i][j + 1] : 0
                let bottom = i + 1 < m ? dp[i + 1][j] : 0
                let diag =  i + 1 < m && j + 1 < n ? dp[i + 1][j + 1] : 0
                dp[i][j] = 1 + Math.min(right, bottom, diag)
                max = Math.max(max,dp[i][j])
            }
        }
    }

    console.log(dp)

    return max * max
};