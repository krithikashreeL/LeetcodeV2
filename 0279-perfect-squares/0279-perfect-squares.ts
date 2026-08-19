function numSquares(n: number): number {

    let combo = []

    for (let i = 1; i <= n; i++) {
        if ((i * i) <= n) {
            combo.push(i * i)
        } else {
            break
        }
    }


    let dp = new Array(n + 1).fill(n + 1)
    dp[0] = 0
    for (let i = 1; i <= n; i++) {
        for (const c of combo) {
            if (i - c >= 0) {
                dp[i] = Math.min(dp[i - c] + 1, dp[i])
            }
        }
    }


    return dp[n]
};