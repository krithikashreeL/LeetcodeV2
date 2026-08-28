function minimumDeleteSum(s1: string, s2: string): number {
    let memo = new Map<string, number>()


    function dfs(index1, index2,) {

        if (index1 == s1.length && index2 == s2.length) {
            return 0
        }


        if (index1 >= s1.length) {
            let c = 0
            for (let i = index2; i < s2.length; i++) {
                let char = s2.charCodeAt(i)
                c += char
            }
            return c
        }

        if (index2 >= s2.length) {
            let c = 0
            for (let i = index1; i < s1.length; i++) {
                let char = s1.charCodeAt(i)
                c += char
            }
            return c
        }

        if (s1[index1] === s2[index2]) {
            return dfs(index1 + 1, index2 + 1)
        }

        let key = index1 + '|' + index2
        if (memo.has(key)) {
            return memo.get(key)
        }

      
        let ascii1 = s1.charCodeAt(index1)

      
        let ascii2 = s2.charCodeAt(index2)

        // delete w1
        let deleteAtS1 = ascii1 + dfs(index1 + 1, index2)
        // delete w2
        let deleteAtS2 = ascii2 + dfs(index1, index2 + 1)

        let val = Math.min(deleteAtS1, deleteAtS2)
        memo.set(key, val)
        return val

    }
    


    return dfs(0,0)


};