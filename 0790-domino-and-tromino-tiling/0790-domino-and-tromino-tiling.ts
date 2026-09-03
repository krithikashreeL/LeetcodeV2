function numTilings(n: number): number {

    let mod = 1000000007

    let memo = new Map<number, number>()
    function dfs(localCount) {
       if(localCount == 0) return 1
       if(localCount == 1) return 1
       if(localCount == 2) return 2
        if (memo.has(localCount)) {
            return memo.get(localCount)
        }

        // add domino
        let val = (2 * dfs(localCount - 1) + dfs(localCount - 3)) % mod
        memo.set(localCount, val)
        return val
    }

    return dfs(n)
    
};