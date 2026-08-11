function findLongestChain(pairs: number[][]): number {
    // let dp = new Array(pairs.length).fill(1)

    pairs.sort((a, b) => a[1] - b[1])
    let ans = 1
    let count = 1
    let end = pairs[0][1]
    for (let i = 1; i < pairs.length; i++) {
        let start = pairs[i][0]
        if (end < start) {
            count += 1
            end = pairs[i][1]
        }
        ans = Math.max(ans, count)
    }

    return ans
};