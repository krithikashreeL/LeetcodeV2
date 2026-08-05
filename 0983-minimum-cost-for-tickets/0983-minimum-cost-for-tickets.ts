function mincostTickets(days: number[], costs: number[]): number {
    const travelDays = new Set(days);
    const lastDay = days[days.length - 1];
    const dp = new Array(lastDay + 1).fill(0);

    for (let i = 1; i <= lastDay; i++) {
        // If today isn't a travel day, cost remains same as yesterday
        if (!travelDays.has(i)) {
            dp[i] = dp[i - 1];
            continue;
        }

        // Calculate minimum cost using 1-day, 7-day, or 30-day pass
        dp[i] = Math.min(
            dp[i - 1] + costs[0],                           // 1-day pass
            dp[Math.max(0, i - 7)] + costs[1],              // 7-day pass
            dp[Math.max(0, i - 30)] + costs[2]              // 30-day pass
        );
    }

    return dp[lastDay];
}