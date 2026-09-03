function countGoodStrings(low: number, high: number, zero: number, one: number): number {
     let mod = 1000000007

    let dp = new Array(high + 1).fill(0)
    let ans = 0
    dp[0] = 1
    for (let i = 1; i <= high; i++) {
        dp[i] += i >= zero ? dp[i - zero] : 0
        dp[i] += i >= one ? dp[i - one] : 0
        dp[i] %= mod
        if (i >= low) {
            ans = (ans + dp[i]) % mod
        }
    }

    // console.log(dp)
    return ans
};