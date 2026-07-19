function lengthOfLongestSubstring(s: string): number {
    if(s.length < 2){
        return s.length
    }
    let max = 0
    for (let i = 0; i < s.length; i++) {
        let seen = new Set()
        seen.add(s[i])

        for(let j = i + 1; j < s.length; j++){
            if(seen.has(s[j])){
                break
            }
            seen.add(s[j])
           
        }
         max = Math.max(seen.size, max)
    }

    return max
};