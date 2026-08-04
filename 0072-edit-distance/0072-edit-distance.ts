function minDistance(word1: string, word2: string): number {
    let dp = []
    let m = word1.length
    let n = word2.length
    console.log(m,n)
    for (let i = 0; i < m + 1; i++) {
        dp.push(new Array(n + 1).fill(0))
    }
    for (let i = 0; i < m + 1; i++) {
        dp[i][n] = m - i
    }

    for (let i = 0; i < n + 1; i++) {
        dp[m][i] = n - i
    }
    // console.log(dp)
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (word1[i] == word2[j]) {
                dp[i][j] = dp[i + 1][j + 1]
            } else {
                dp[i][j] = 1 + Math.min(dp[i][j + 1], dp[i + 1][j + 1], dp[i + 1][j])
            }
        }
    }
   
    return dp[0][0]
};