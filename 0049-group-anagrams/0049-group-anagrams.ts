function groupAnagrams(strs: string[]): string[][] {
    let map = new Map<string, string[]>()

    for (const s of strs) {
        let sorted = s.split('').sort().join('')
        let val: string[] = map.get(sorted) ?? []
        val.push(s)
        map.set(sorted, val)
    }
    let result = []

    for(let [key,value] of map){
        result.push(value)
    }

    // console.log(result)

    return result
};