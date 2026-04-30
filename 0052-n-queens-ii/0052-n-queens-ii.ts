function totalNQueens(n: number): number {
    let result = 0

    function backtrack(seen, r: number, d1, d2) {
        if (r == n) {

            result += 1

            return
        }


        for (let j = 0; j < n; j++) {
            const diff = r - j
            const sum = r + j
            if (!seen.has(j) && !d1.has(diff) && !d2.has(sum)) {
                seen.add(j)
                d1.add(diff)
                d2.add(sum)
                backtrack(seen, r + 1, d1, d2)
                seen.delete(j)
                d1.delete(diff)
                d2.delete(sum)
            }
        }

    }

    let seen = new Set<number>()
    let d1 = new Set<number>()
    let d2 = new Set<number>()
    backtrack(seen, 0, d1, d2)
    return result
};

