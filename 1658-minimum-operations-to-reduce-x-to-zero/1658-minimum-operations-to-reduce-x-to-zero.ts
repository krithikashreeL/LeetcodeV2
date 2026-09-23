function minOperations(nums: number[], x: number): number {

    let arraySum = nums.reduce((sum, item) => item + sum, 0)

    let remSum = arraySum - x

    if (arraySum < x) {
        return -1
    }

    if (remSum == 0) {
        return nums.length
    }

    let left = 0
    let localSum = 0
    let len = -1
    for (let right = 0; right < nums.length; right++) {
        localSum += nums[right]

        while (localSum > remSum && left <= right) {
            //removing left element
            localSum -= nums[left]
            left += 1
        }

        if (localSum == remSum) {
            len = Math.max(len, right - left + 1)
        }
    }
    return len == -1 ? -1 : nums.length - len
};