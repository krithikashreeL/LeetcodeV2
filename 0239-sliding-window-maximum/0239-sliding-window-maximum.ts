function maxSlidingWindow(nums: number[], k: number): number[] {

    let queue = []
    let n = nums.length
    let result = []
    let lp = 0
    let rp = 0

   for (let rp = 0; rp < nums.length; rp++) {
        // 1. Maintain decreasing order: drop smaller elements from the TAIL
        while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[rp]) {
            queue.pop();
        }

        // 2. Always add current index to the tail
        queue.push(rp);

        // 3. Remove index from HEAD if it's out of bounds (< lp)
        if (queue[0] < lp) {
            queue.shift();
        }

        // 4. Record max once window reaches size k
        if (rp >= k - 1) {
            result.push(nums[queue[0]]);
            lp++; // Slide left boundary
        }
    }

    return result;
}