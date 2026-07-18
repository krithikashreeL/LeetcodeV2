function lengthOfLIS(nums: number[]): number {
    let n = nums.length
    let dp = new Array(n).fill(1)

    for(let i = n - 1; i >= 0; i--){

        for(let j = i; j < n; j++){
            if(nums[i] < nums[j]){
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }




    console.log(dp)

    
    return Math.max(...dp)
};