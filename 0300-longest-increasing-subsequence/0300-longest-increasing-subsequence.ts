function lengthOfLIS(nums: number[]): number {

    let n = nums.length
    if(n < 1){
        return 0
    }
    let dp = new Array(n).fill(1)
    let max = 1
    for (let i = n - 1; i >= 0; i--) {

        for (let j = i; j < n; j++) {
            if (nums[i] < nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
                max = Math.max(dp[i], max)
            }
        }
    }




    return max
};