function minimumSwaps(nums: number[]): number {
    let lp = 0
    let rp = nums.length - 1
    let result = 0

    while(lp <= rp){
        if(nums[lp] == 0 && nums[rp] !== 0){
            // swap
            result += 1
            nums[rp] = 0
            rp -= 1
            lp += 1
        }
        if(nums[lp] !== 0){
            lp += 1
        }
        if(nums[rp] == 0 ){
            rp -= 1
        }
    }


    return result
};