function coinChange(coins: number[], amount: number): number {
    let dp = new Array(amount + 1).fill(amount + 1)
    dp[0] = 0
    for (let i = 1; i < amount + 1; i++) {
        let count = Infinity
        for (const coin of coins) {
            if (i >= coin) {
                // console.log(dp[i], dp[i-coin], i - coin, coin, i)
                count = Math.min(count, dp[i - coin] + 1)
            }
        }
        dp[i] = count
    }
    // console.log(dp)
    return dp[amount] > amount ? -1 : dp[amount]
};