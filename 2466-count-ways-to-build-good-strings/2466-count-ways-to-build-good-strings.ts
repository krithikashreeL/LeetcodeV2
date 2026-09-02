function countGoodStrings(
    low: number,
    high: number,
    zero: number,
    one: number
): number {

    const MOD = 1_000_000_007
    const memo = new Array(high + 1).fill(-1)

    function dfs(length: number): number {

        if (length > high) {
            return 0
        }

        if (memo[length] !== -1) {
            return memo[length]
        }

        let count = 0

        if (length >= low) {
            count = 1
        }

        if (length + zero <= high) {
            count += dfs(length + zero)
        }

        if (length + one <= high) {
            count += dfs(length + one)
        }

        count %= MOD

        memo[length] = count

        return count
    }

    return dfs(0)
}