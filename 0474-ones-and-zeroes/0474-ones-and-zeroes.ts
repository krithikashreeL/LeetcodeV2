function findMaxForm(strs: string[], m: number, n: number): number {

    let memo = new Map<string, number>()

    function dfs(index: number, zeros: number, ones: number): number {

        if (index >= strs.length) {
            return 0
        }

        let key = `${index},${zeros},${ones}`

        if (memo.has(key)) {
            return memo.get(key)!
        }

        let zero = 0
        let one = 0

        for (let c of strs[index]) {
            if (c === '0') zero++
            else one++
        }

        // Skip
        let skip = dfs(index + 1, zeros, ones)

        // Take
        let take = 0

        if (zeros + zero <= m && ones + one <= n) {
            take = 1 + dfs(
                index + 1,
                zeros + zero,
                ones + one
            )
        }

        let ans = Math.max(skip, take)

        memo.set(key, ans)

        return ans
    }

    return dfs(0, 0, 0)
}