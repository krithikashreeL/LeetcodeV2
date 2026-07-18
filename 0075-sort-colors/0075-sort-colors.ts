/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let n = nums.length
  for(let i = 0; i <n; i++){
    for(let j = n - 1; j > i; j--){
        if(nums[j] < nums[i]){
            let temp = nums[j]
            nums[j] = nums[i]
            nums[i] = temp
        }
    }
  }
};

