function search(nums: number[], target: number): number {

    let start = 0
    let end = nums.length - 1
    if (nums.length < 2) {
        return nums[0] == target ? 0 : -1
    }

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        // console.log(mid)
        if (target == nums[mid]) return mid
        if (nums[start] <= nums[mid]) {
            if (nums[start] <= target && target < nums[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else {
            if (nums[mid] < target && target <= nums[end]) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }

    return -1
};

