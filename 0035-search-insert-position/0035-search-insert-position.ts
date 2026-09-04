function searchInsert(nums: number[], target: number): number {
    
    let left = 0
    let right = nums.length
    let mid = 0
    while(left < right){
        mid = Math.floor((left + right) / 2)
        if(target < nums[mid]){
            right = mid
        }else if(target > nums[mid]){
            left += 1
        }else{
            return mid
        }
    }

    // console.log(mid,left,right)
    return left
};