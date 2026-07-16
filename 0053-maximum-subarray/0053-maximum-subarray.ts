function maxSubArray(nums: number[]): number {
    let globalSum: number = nums[0]
    let localSum = nums[0]

    for(let i = 1; i < nums.length; i++){
       
            localSum = Math.max(localSum + nums[i], nums[i])
            globalSum = Math.max(localSum,globalSum)
        
    }
    
    return globalSum
    };