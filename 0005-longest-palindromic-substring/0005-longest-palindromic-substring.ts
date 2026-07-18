function longestPalindrome(s: string): string {

    let n = s.length
    function checkPalindrome(left, right) {

        while (s[left] == s[right] && left >= 0 && right < n) {
            left -= 1
            right += 1
        }
        // console.log(left,right)
        return s.slice(left + 1,right )
    }


    let maxWord = ''


    for (let i = 0; i < n; i++) {
        let odd = checkPalindrome(i,i)
        let even = checkPalindrome(i, i+1)

        if(maxWord.length < odd.length){
            maxWord = odd
        }
        if(maxWord.length < even.length){
            maxWord = even
        }
    }

    return maxWord
};


