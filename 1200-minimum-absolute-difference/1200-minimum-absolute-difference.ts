function minimumAbsDifference(arr: number[]): number[][] {
    
    arr.sort((a,b) => a - b)
    let n = arr.length
    let map = new Map<number,number[][]>()
    let min = Infinity
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            let diff = arr[j] - arr[i]
            if(min >= diff){
                min = diff
                let val:number[][] = map.get(min) ?? []
                val.push([arr[i],arr[j]])
                map.set(min,val)
            }else{
                break
            }
        }
    }
    // console.log(map)

    return map.get(min)
};