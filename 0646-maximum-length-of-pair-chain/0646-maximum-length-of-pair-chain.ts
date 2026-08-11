function findLongestChain(pairs: number[][]): number {
    let dp = new Array(pairs.length).fill(1)

    pairs.sort((a, b) => a[1] - b[1])
    let max = 0
    for(let i = 0; i < pairs.length; i++){
        let start = pairs[i][1]
        let count = 1
        for(let j = i + 1; j < pairs.length; j++){
            let end = pairs[j][0]
            // console.log(start,end)
            if(end > start){
                count += 1
                start = pairs[j][1]
            }
        }
        max = Math.max(count,max)

    }

    return max
    
};