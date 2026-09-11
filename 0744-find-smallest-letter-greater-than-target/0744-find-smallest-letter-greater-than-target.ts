function nextGreatestLetter(letters: string[], target: string): string {

    let left = 0
    let right = letters.length

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (letters[mid] > target) {
            right = mid
        } else {
            left = mid + 1
        }

    }


    return left >= letters.length ? letters[0] : letters[left]
};