function longestCommonSubsequence(text1: string, text2: string): number {
    let m = text1.length
    let n = text2.length

    let dp = []
    for (let i = 0; i < m; i++) {
        dp.push(new Array(n).fill(0))
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let top = i - 1 >= 0 ? dp[i - 1][j] : 0
            let left = j - 1 >= 0 ? dp[i][j - 1] : 0
            let diagonal = i - 1 >= 0 && j - 1 >= 0 ? dp[i - 1][j - 1] : 0
            let current = 0
            if (text1[i] == text2[j]) {
                 dp[i][j] = 1 + diagonal
            }else{
                dp[i][j] = Math.max(top,left)
            }
            // console.log(text1[i], text2[j])
           
        }
    }

    // console.log(dp)

    return dp[m-1][n-1]
};