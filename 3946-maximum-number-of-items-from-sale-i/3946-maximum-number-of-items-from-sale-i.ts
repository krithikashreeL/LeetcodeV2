function maximumSaleItems(items: number[][], budget: number): number {
    const n = items.length;

    const bonus = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        const f = items[i][0];

        for (let j = 0; j < n; j++) {
            if (i !== j && items[j][0] % f === 0) {
                bonus[i]++;
            }
        }
    }

    const dp = new Array(budget + 1).fill(0);

    for (let i = 0; i < n; i++) {
        const price = items[i][1];

        // First copy (0/1 knapsack)
        for (let b = budget; b >= price; b--) {
            dp[b] = Math.max(
                dp[b],
                dp[b - price] + 1 + bonus[i]
            );
        }

        // Extra copies (unbounded knapsack)
        for (let b = price; b <= budget; b++) {
            dp[b] = Math.max(
                dp[b],
                dp[b - price] + 1
            );
        }
    }

    return dp[budget];
}