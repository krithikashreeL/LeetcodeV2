function longestCommonSubsequence(text1: string, text2: string): number {

    let dp = Array.from({ length: text1.length }, () => { return new Array(text2.length).fill(0) })

    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            if (text1[i] == text2[j]) {
                dp[i][j] = 1 + ((i - 1 >= 0 && j - 1 >= 0) ? dp[i - 1][j - 1] : 0)
            }else{
                let row = i - 1 >= 0 ? dp[i-1][j] : 0
                let col = j - 1 >= 0 ? dp[i][j-1] : 0
                let diagonal = i - 1 >= 0 && j - 1 >= 0 ? dp[i-1][j-1] : 0
                dp[i][j] = Math.max(row,col,diagonal)
            }
        }
    }

    return dp[text1.length - 1][text2.length - 1]

};