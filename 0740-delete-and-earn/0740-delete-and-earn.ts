function deleteAndEarn(nums: number[]): number {
    let freq = new Map<number, number>

    for (let i = 0; i < nums.length; i++) {
        let val = freq.get(nums[i]) || 0
        freq.set(nums[i], val + 1)
    }

    let keys = Array.from(freq.keys()).sort((a, b) => a - b)
    let memo = new Map<number, number>()
    let max = 0
    function traversal(index) {
        if (index >= keys.length) {
            return 0
        }

        let current: number = keys[index]
        if (memo.has(current)) {
            return memo.get(current)
        }


        let localScore = current * freq.get(current)
        let keep = traversal(index + 1)
        let next = index + 1
        if (index + 1 < keys.length && keys[index + 1] == current + 1) {
            next = index + 2
        }
        let deletes = localScore + traversal(next)
        let res = Math.max(keep, deletes)

        memo.set(current, res)
        return res

    }

    return traversal(0)

};