function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)
    let n = nums.length;
    let result = []
    for (let i = 0; i < n - 2; i++) {

        if (nums[i] == nums[i - 1]) continue
        let left = i + 1
        let right = n - 1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum == 0) {
                result.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] == nums[left + 1]) {
                    left++
                }
                while (right < left && nums[right] == nums[right - 1]) {
                    right--
                }
                right -= 1
                left += 1

            }
            else if (sum > 0) {
                right -= 1
            } else {
                left += 1
            }
        }
    }

    return result
};