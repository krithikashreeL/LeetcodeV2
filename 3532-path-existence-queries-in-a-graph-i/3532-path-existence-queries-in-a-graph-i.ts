function pathExistenceQueries(n: number, nums: number[], maxDiff: number, queries: number[][]): boolean[] {

    let graphGroups = new Array(n)

    graphGroups[0] = 0
    let graphN = 0

    for (let i = 1; i < n; i++) {
        if(nums[i] - nums[i-1] > maxDiff){
            graphN += 1 
        }
        graphGroups[i] = graphN
    }


    let result = []
    console.log(graphGroups)

    for(const [u,v] of queries){
        result.push(graphGroups[u] == graphGroups[v])
    }

    return result
};