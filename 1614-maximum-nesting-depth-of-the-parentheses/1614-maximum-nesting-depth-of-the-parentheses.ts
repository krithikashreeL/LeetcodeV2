function maxDepth(s: string): number {
    
    let max = 0
    let stack = []

    let len = s.length
    let start = 0

    while(start < len){
        if(s[start] == '('){
            stack.push(s[start])
        }else if(s[start] == ')'){
            max = Math.max(max, stack.length)
            stack.pop()
        }
        start += 1
    }


    return max
};



