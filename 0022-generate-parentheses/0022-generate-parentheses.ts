function generateParenthesis(n: number): string[] {

    let results = []


    function dfs(str, index, close) {
        if (str.length == n * 2 ) {
            if(index == close){
            // console.log(str)
            results.push(str)
            }
            return
        }

        // add close
        if (close < index) {
            let str2 = str + ')'
             dfs(str2, index , close + 1)
        }
        // add open
        let str3 = str + '('
        dfs(str3, index + 1, close)


        return
    }

    dfs('(', 1 , 0)

    return results
};