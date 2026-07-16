function merge(intervals: number[][]): number[][] {
    let sorted = intervals.sort((a,b)=> a[0] - b[0])

    let start = sorted[0][0]
    let end = sorted[0][1]

    let result = []

    for(let i = 1; i < sorted.length; i++){
        let [newS,newE] = sorted[i]
        if(newS > end){
            result.push([start,end])
            start = newS
            end = Math.max(newE,end)
        }else{
            end = Math.max(newE, end)
        }
    }

    result.push([start,end])
    return result
};