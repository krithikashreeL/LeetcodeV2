function maxSlidingWindow(nums: number[], k: number): number[] {

    let result = []
    let left = 0
    let q = []
    for (let right = 0; right < nums.length; right++) {
        while (q.length > 0 && nums[q[q.length - 1]] < nums[right]) {
            q.pop()
        }
        q.push(right)
        
        if (q[0] < left) {
            q.shift()
        }

        if(right >= k - 1){
            result.push(nums[q[0]])
            left += 1
        }
    }

    return result
};