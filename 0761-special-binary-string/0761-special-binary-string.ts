function makeLargestSpecial(s: string): string {

    //   11011000
    //   // condition 1
    //   1 = 4
    //   0 = 4
    //   // condition 
    //   1,0 2,0 2,1 3,1 4,1 4,2 4,3 4,4

    let result :string[] = []
    let balance = 0
    let start = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '1') {
            balance += 1
        } else {
            balance -= 1
        }

        if (balance == 0) {
            let inner = s.slice(start + 1, i)
            result.push('1' + makeLargestSpecial(inner) + '0')
            start = i + 1
        }
    }

    result.sort((a, b) => b > a ? 1 : b < a ? -1 : 0)
    return result.join('')
};