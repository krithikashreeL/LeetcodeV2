function restoreIpAddresses(s: string): string[] {

    let results = new Set<string>()
    let n = s.length
    function dfs(final: Number[], idx) {
        if (final.length > 4) {
            return
        }
        if (idx >= n) {
            if (final.length == 4) {
                let tot = final.join('.')
                if (tot.length == n + 3) {
                    results.add(tot)
                }
            }
            return
        }

        let rem = s.slice(idx, idx + 3)
        // let rem = '012@'
        for (let i = 1; i <= 3; i++) {
            let digits = Number(rem.slice(0, i))
            if (digits > 255) {
                continue
            }
            final.push(digits)
            dfs(final, idx + i)
            final.pop()
        }
        return

    }

    dfs([], 0)
    console.log(results)
    return Array.from(results)
};

// 11 