function makeLargestSpecial(s: string): string {
    let balance = 0
    let results: string[] = []
    let start = 0
    for (let i = 0; i < s.length; i++) {

        if (s[i] == '1') {
            balance += 1
        } else {
            balance -= 1
        }
        if (balance == 0) {
            // always starts at 1, ends at 0
            let inner = s.slice(start + 1, i)
            results.push('1' + makeLargestSpecial(inner) + '0')
            start = i + 1
        }

    }

    results.sort((a, b) => b > a ? 1 : b < a ? -1 : 0)
    return results.join('')
};