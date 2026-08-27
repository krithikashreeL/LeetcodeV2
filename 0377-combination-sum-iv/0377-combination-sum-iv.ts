function combinationSum4(nums: number[], target: number): number {

    let dp = new Array(target + 1).fill(0)
    dp[0] = 1
    
    for (let i = 1; i <= target; i++) {
        for (const num of nums) {
            if (i - num >= 0) {
                dp[i] +=  dp[i - num]
            }
        }
    }
    // console.log(dp)

    return dp[target]
};