function maxProfit(prices: number[], fee: number): number {
    let buy = new Array(prices.length).fill(0)
    let sell = new Array(prices.length).fill(0)
    buy[0] = -prices[0]

    for (let i = 1; i < prices.length; i++) {
        buy[i] += Math.max(buy[i - 1], sell[i - 1] - prices[i])
        sell[i] += Math.max(sell[i-1], buy[i-1] + prices[i] - fee)
    }

    return sell[prices.length - 1]
};