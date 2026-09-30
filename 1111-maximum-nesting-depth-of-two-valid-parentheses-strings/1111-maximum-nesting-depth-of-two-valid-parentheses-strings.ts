function maxDepthAfterSplit(seq: string): number[] {
    let start = 0
    let end = seq.length

    let stack = []
    let result = new Array(seq.length).fill(0)
    while (start < end) {
        let top;
        if (seq[start] == '(') {
            top = stack.length > 0 ? stack[stack.length - 1][1] : 'a'

            if (top == 'a') {
                stack.push([start, 'b'])
            } else {
                stack.push([start, 'a'])
            }
        } else {
            console.log(stack, start)
            let top = stack.pop()
            console.log(stack, start, top[0], top[1])
            let val = top[1] == 'a' ? 0 : 1
            result[top[0]] = val
            result[start] = val
        }

        start += 1
    }

    return result
};