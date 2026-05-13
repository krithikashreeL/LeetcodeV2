function findMin(nums: number[]): number {
    let left = 0
    let right = nums.length - 1

    while(left < right){

        let leftElement = nums[left]
        let rightElement = nums[right]
        let mid = Math.floor((left + right) /2)
        let midElement = nums[mid]

        if(midElement > rightElement){
            left = mid +1
        }else if(midElement < rightElement){
            right = mid 
        }
    }
    return nums[left]
};