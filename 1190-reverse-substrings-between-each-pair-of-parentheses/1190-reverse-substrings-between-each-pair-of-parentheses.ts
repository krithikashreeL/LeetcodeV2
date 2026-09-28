function reverseParentheses(s: string): string {
    let stack = []
    let start = 0
    let end = s.length

    while (start < end) {
        if (s[start] == ')') {
            let word = ''
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                word += stack.pop()
            }
            stack.pop()
            for(const char of word){
                stack.push(char)
            }
            // console.log(stack, "stack")

        } else {
            stack.push(s[start])
        }

        start += 1
    }


    // console.log(stack)
    return stack.join('')
};