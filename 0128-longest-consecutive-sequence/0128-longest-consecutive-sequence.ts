function longestConsecutive(nums: number[]): number {
    if (nums.length == 0) {
        return 0
    }
    nums.sort((a, b) => a - b)
    let set = new Set(nums)
    let max = 1
    let n = nums.length
    for (let i = 0; i < n; i++) {
        let start = nums[i] 
        while (set.has(start + 1)) {
            start += 1
        }
        // console.log(nums[i], start)
        let diff = start - nums[i] + 1
        if (diff > 0) {
            i += diff - 1
        }
        max = Math.max(diff, max)
    }

    return max

};