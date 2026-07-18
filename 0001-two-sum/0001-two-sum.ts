function twoSum(nums: number[], target: number): number[] {
    let map = new Map<number, number[]>()
    let n = nums.length
    for (let i = 0; i < n; i++) {
        let val: number[] = map.get(nums[i]) ?? []
        val.push(i)
        map.set(nums[i], val)
    }
    // console.log(map)
    for (let i = 0; i < n; i++) {
        let diff =  target - nums[i]
        console.log(nums[i],diff)
        if (map.has(diff)) {

            let index = map.get(diff)
            for (let idx of index) {
                if (idx !== i)
                    return [i, idx]
            }
        }
    }

    return []
};