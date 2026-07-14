function findPeakElement(nums: number[]): number {


    let n = nums.length
   
    // if(n == 1){
    //     return 0
    // }
    for (let i = 0; i < n; i++) {
        let prev = (i - 1) >= 0 ? nums[i - 1] : -Infinity
        let next = (i + 1) < n ? nums[i+1] : -Infinity
        let current = nums[i]
        if (current > prev && current > next) {
            return i
        }
    }


    return -1

};

