function isValid(s: string): boolean {
    let open = ['(', '[', '{']
    let close = [')', ']', '}']
    let stack = []

    for (const char of s) {

        if (open.includes(char)) {
            stack.push(char)
        } else {
            if (stack.length < 1) {
                return false
            }
            else {
                let top = stack.pop()
                if ((top == '(' && char == ')') || (top == '[' && char == ']') || (top == '{' && char == '}')) {
                    continue
                } else {
                    return false
                }
            }
        }
    }


    return stack.length == 0
};