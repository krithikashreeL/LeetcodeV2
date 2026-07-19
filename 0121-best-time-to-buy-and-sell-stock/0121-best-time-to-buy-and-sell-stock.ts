function maxProfit(prices: number[]): number {

    let n = prices.length
    let buy = new Array(n).fill(0)
    let sell = new Array(n).fill(0)
    buy[0] = -prices[0]
    for (let i = 1; i < n; i++) {
        buy[i] = Math.max(-prices[i], buy[i - 1])
        sell[i] = Math.max(prices[i] + buy[i - 1], sell[i - 1])
    }

    // console.log(sell,buy)


    return sell[n-1]

};