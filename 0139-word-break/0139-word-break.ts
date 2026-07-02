function wordBreak(s: string, wordDict: string[]): boolean {
    let memo = new Map<string, boolean>()
    function dfs(s) {
        if (s == '') {
            return true
        }
        for (const word of wordDict) {
            if (s.startsWith(word)) {
                if (dfs(s.slice(word.length))) {
                    memo.set(s, true)
                    return true
                }
            }
        }
        memo.set(s, false)
        return false
    }

    return dfs(s)
};