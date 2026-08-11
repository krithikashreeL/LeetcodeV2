function findLongestChain(pairs: number[][]): number {
    let dp = new Array(pairs.length).fill(1)

    pairs.sort((a, b) => a[1] - b[1])
    let ans = 1
    for (let i = 1; i < pairs.length; i++) {
        for (let j = 0; j < i; j++) {
            if (pairs[j][1] < pairs[i][0]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        ans = Math.max(ans, dp[i])
    }

    return ans
    // let max = 0
    // for(let i = 0; i < pairs.length; i++){
    //     let start = pairs[i][1]
    //     let count = 1
    //     for(let j = i + 1; j < pairs.length; j++){
    //         let end = pairs[j][0]
    //         // console.log(start,end)
    //         if(end > start){
    //             count += 1
    //             start = pairs[j][1]
    //         }
    //     }
    //     max = Math.max(count,max)

// }

// return max
    
};