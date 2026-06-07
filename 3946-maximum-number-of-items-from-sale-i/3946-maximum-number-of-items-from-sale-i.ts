function maximumSaleItems(items: number[][], budget: number): number {
    let n = items.length
    let bonus = new Array(n).fill(0)

    for (let i = 0; i < n; i++) {
        let d = items[i][0]
        for (let j = 0; j < n; j++) {
            let n = items[j][0]
            if (i !== j && n % d == 0) {
                bonus[i] += 1
            }
        }
    }

    let dp = new Array(budget + 1).fill(0)

    for(let i =0; i < n; i ++){
        let price = items[i][1]
        for(let j = budget; j >= price; j--){
            dp[j] = Math.max(dp[j] , dp[j - price] + 1 + bonus[i])
        }

        for(let j = price; j <= budget; j++){
            dp[j] = Math.max(dp[j] , dp[j - price] + 1)
        }
    }
    return dp[budget]
};