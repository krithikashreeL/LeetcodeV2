function longestPalindrome(s: string): string {

    let n = s.length

    function isPalindrome(left, right) {

        while (left >= 0 && right < n && s[left] == s[right]) {
            left -= 1
            right += 1
        }

        left += 1
        right -= 1
        return s.slice(left, right + 1)
    }

    let maxL = 0
    let max = ''
    for (let i = 0; i < n; i++) {

        let odd = isPalindrome(i, i)
        let even = isPalindrome(i, i + 1)

        if(odd.length > max.length){
            max = odd
        }
        if(even.length > max.length){
            max = even
        }

    }

    return max
};




