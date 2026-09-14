function shadowPairs(nums: number[]): number {

    let n = nums.length
    let counter = new Map<number, number>()
    let result:number = 0
    let stack: number[] = []
    for (let i = 0; i < n; i++) {

        while (stack.length > 0 && stack[stack.length - 1] > nums[i]) {
            let top = stack.pop()
            counter.set(top, (counter.get(top) ?? 1) - 1)
        }

        result += stack.length - (counter.get(nums[i]) ?? 0)
        stack.push(nums[i])
        counter.set(nums[i], (counter.get(nums[i]) ?? 0) + 1)
    }

   return result
};