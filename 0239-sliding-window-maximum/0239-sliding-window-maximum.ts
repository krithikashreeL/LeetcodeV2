function maxSlidingWindow(nums: number[], k: number): number[] {
    let queue: number[] = []
    let n = nums.length
    let result: number[] = []
    let lp = 0
    let rp = 0

    while (rp < n) {
        // FIX 1: Changed `if` to `while` so it pops ALL smaller elements
        // FIX 2: Indexed into `nums[queue[...]]` instead of `nums[...]`
        while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[rp]) {
            queue.pop()
        }
        queue.push(rp)

        // Drop front of queue if it falls outside the left window boundary
        if (queue[0] < lp) {
            queue.shift()!
        }

        // Record max once window reaches size k
        if (rp >= k - 1) {
            result.push(nums[queue[0]]);
            lp++; // Slide left boundary
        }

        rp += 1
    }

    return result
};