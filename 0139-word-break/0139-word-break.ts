function wordBreak(s: string, wordDict: string[]): boolean {

    class TrieNode {
        map = new Map<string, TrieNode>();
        isEnd = false;
    }

    const root = new TrieNode();

    for (const word of wordDict) {
        let node = root;
        for (const c of word) {
            if (!node.map.has(c)) {
                node.map.set(c, new TrieNode());
            }
            node = node.map.get(c)!;
        }
        node.isEnd = true;
    }

    const memo = new Map<number, boolean>();

    function dfs(index: number): boolean {
        if (index === s.length) return true;

        if (memo.has(index)) return memo.get(index)!;

        let node = root;

        for (let i = index; i < s.length; i++) {
            const c = s[i];

            if (!node.map.has(c)) break;

            node = node.map.get(c)!;

            if (node.isEnd) {
                if (dfs(i + 1)) {
                    memo.set(index, true);
                    return true;
                }
            }
        }

        memo.set(index, false);
        return false;
    }

    return dfs(0);
}