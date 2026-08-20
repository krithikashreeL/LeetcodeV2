function maxProfit(prices: number[]): number {


    let n = prices.length

    if (n === 0) {
        return 0
    }


    let buy1 = new Array(prices.length).fill(0)
    let sell1 = new Array(prices.length).fill(0)
    let buy2 = new Array(prices.length).fill(0)
    let sell2 = new Array(prices.length).fill(0)

    buy1[0] = -prices[0]
    buy2[0] = -prices[0]

    for (let i = 1; i < prices.length; i++) {
        buy1[i] = Math.max(buy1[i - 1], -prices[i])
        sell1[i] = Math.max(sell1[i - 1], buy1[i - 1] + prices[i])
        buy2[i] = Math.max(buy2[i - 1], sell1[i - 1] - prices[i])
        sell2[i] = Math.max(sell2[i - 1], buy2[i - 1] + prices[i])
    }
    
   return sell2[prices.length - 1]
};