function longestPalindromeSubseq(s: string): number {

    let m = s.length
    let dp = Array.from({ length: m }, () => { return new Array(m).fill(0) });
    let sRev = s.split('').reverse().join('');

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            if (s[i] == sRev[j]) {
                let diag = i - 1 >= 0 && j - 1 >= 0 ? dp[i - 1][j - 1] : 0
                dp[i][j] = 1 + diag
            } else {
                let top = i - 1 >= 0 ? dp[i - 1][j] : 0
                let left = j - 1 >= 0 ? dp[i][j - 1] : 0
                let diag = i - 1 >= 0 && j - 1 >= 0 ? dp[i - 1][j - 1] : 0
                dp[i][j] = Math.max(left, top, diag)
            }
        }
    }

    return dp[m-1][m-1]
};