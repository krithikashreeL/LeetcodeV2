function mincostTickets(days: number[], costs: number[]): number {
    const passes = [1, 7, 30];
    const memo = new Map<number, number>();

    function dfs(i: number): number {
        // Base case: processed all travel days
        if (i >= days.length) return 0;

        // Return cached result if we've already solved index i
        if (memo.has(i)) return memo.get(i)!;

        let minCost = Infinity;

        for (let j = 0; j < 3; j++) {
            let temp = i;

            // Strictly LESS THAN (<) ensures correct pass duration
            while (temp < days.length && days[temp] < days[i] + passes[j]) {
                temp += 1;
            }

            const totalCost = costs[j] + dfs(temp);
            minCost = Math.min(minCost, totalCost);
        }

        memo.set(i, minCost);
        return minCost;
    }

    return dfs(0);
}