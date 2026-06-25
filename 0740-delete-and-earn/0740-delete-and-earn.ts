function deleteAndEarn(nums: number[]): number {
    let max = Math.max(...nums)
    let dp = new Array(max + 1).fill(0)

    for (let num of nums) {
        dp[num] += num
    }
    let takePrev = dp[0]
    let skipPrev = 0
    for (let i = 0; i <= max; i++) {
        let currentScore = Math.max(takePrev, skipPrev + dp[i])
        dp[i] = currentScore
       
        skipPrev = takePrev
        takePrev = currentScore
    }
    console.log(dp)
    return dp[max]
};