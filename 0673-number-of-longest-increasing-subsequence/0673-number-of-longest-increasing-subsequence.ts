function findNumberOfLIS(nums: number[]): number {
    let max = new Array(nums.length).fill(1)
    let count = new Array(nums.length).fill(1)
    let result = 0

    for (let i = nums.length - 1; i >= 0; i--) {
        let localMax = 1
        let localCount = 1
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                if (max[j] + 1 > localMax) {
                    localMax = max[j] + 1
                    localCount = count[j]
                } else if (max[j] + 1 == localMax) {
                    localCount += count[j]
                }
            }
        }
        count[i] = localCount
        max[i] = localMax
        result = Math.max(result,localMax)
    }
    // console.log(max,count,result)
    let ans = 0
    for(let i = 0; i < max.length; i++){
        if(max[i] == result){
            ans += count[i]
        }
    }

    return ans
};