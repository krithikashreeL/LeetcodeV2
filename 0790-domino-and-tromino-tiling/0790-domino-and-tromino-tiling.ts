function numTilings(n: number): number {

    let mod = 1000000007

    let dp = new Array(n + 1).fill(0)
    dp[0] = 1
    dp[1] = 1
    dp[2] = 2

    for(let i = 3; i <= n; i++){
        dp[i] = (2 * dp[i-1] + dp[i-3] )% mod
    }

    return dp[n]
    
};