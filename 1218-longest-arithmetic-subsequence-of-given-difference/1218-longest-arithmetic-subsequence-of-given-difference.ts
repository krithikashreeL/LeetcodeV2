function longestSubsequence(arr: number[], difference: number): number {
    let dp = new Map<number, number>()
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        let prevMax = dp.get(arr[i] - difference) ?? 0
        let currentLength = prevMax + 1
        max = Math.max(max,currentLength)
        dp.set(arr[i], currentLength)

    }

    return max

};