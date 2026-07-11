function merge(intervals: number[][]): number[][] {
    intervals = intervals.sort((a,b) => a[0] - b[0])
    let results= []
    let n = intervals.length
    let start = intervals[0][0]
    let end = intervals[0][1]
    for (let i = 1; i < n; i++) {
        let [nextS, nextE] = intervals[i]
        if (nextS > end) {
            results.push([start, end])
            start = nextS
            end = Math.max(end,nextE)
        } else {
            end = Math.max(end,nextE)
        }
    }
    results.push([start,end])

    // console.log(results)
    return results
};