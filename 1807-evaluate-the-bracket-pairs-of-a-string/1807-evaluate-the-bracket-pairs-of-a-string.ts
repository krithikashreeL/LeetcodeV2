function evaluate(s: string, knowledge: string[][]): string {

    let stack = []
    let start = 0
    let end = s.length
    let map = new Map<string, string>()

    for (let [key, val] of knowledge) {
        map.set(key, val)
    }

    while (start < end) {
        if (s[start] == ')') {

            let key = ''
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                key += stack.pop()
            }
            stack.pop()
            console.log("key is", key)
            let reverse = key.split('').reverse().join('')
            let val = map.has(reverse) ? map.get(reverse) : '?'

            for (const c of val) {
                stack.push(c)
            }


        } else {
            stack.push(s[start])
        }
        start += 1
    }

    // console.log(stack)
    return stack.join('')
};