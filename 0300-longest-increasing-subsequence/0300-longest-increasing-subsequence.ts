function lengthOfLIS(nums: number[]): number {
    
    let dp = new Array(nums.length).fill(1)
    let max = 1

    for(let i = nums.length - 1; i >= 0; i--){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] > nums[i]){
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        max = Math.max(max,dp[i])

    }


    return max
};