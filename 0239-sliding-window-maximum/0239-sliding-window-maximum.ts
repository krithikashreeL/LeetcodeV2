function maxSlidingWindow(nums: number[], k: number): number[] {

    let result = []
    let queue = []
    let lp = 0
    for (let i = 0; i < nums.length; i++) {
        while (queue.length > 0 && nums[queue[queue.length - 1]] <= nums[i]) {
            queue.pop()
        }
        queue.push(i)
        if(i - queue[0] >= k){
            queue.shift()
        }
        if (i >= k - 1) {
            result.push(nums[queue[0]])
        }

    }

    return result
};