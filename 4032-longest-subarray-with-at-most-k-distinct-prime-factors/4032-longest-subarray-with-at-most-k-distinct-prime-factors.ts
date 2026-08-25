function longestSubarray(nums: number[], k: number): number {

    const max = Math.max(...nums)

    // spf[x] = smallest prime factor of x
    const spf = new Array(max + 1).fill(0)

    for (let i = 2; i <= max; i++) {
        if (spf[i] === 0) {
            spf[i] = i

            if (i * i <= max) {
                for (let j = i * i; j <= max; j += i) {
                    if (spf[j] === 0) {
                        spf[j] = i
                    }
                }
            }
        }
    }

    function getFactors(num: number): number[] {
        const factors = []

        while (num > 1) {
            const prime = spf[num]
            factors.push(prime)

            while (num % prime === 0) {
                num /= prime
            }
        }

        return factors
    }

    const factors = new Array(nums.length)

    for (let i = 0; i < nums.length; i++) {
        factors[i] = getFactors(nums[i])
    }

    // Sliding window
    const count = new Map<number, number>()

    let left = 0
    let distinct = 0
    let maxLen = 0

    for (let right = 0; right < nums.length; right++) {

        // Add right
        for (const prime of factors[right]) {

            if (!count.has(prime)) {
                count.set(prime, 0)
                distinct++
            }

            count.set(prime, count.get(prime)! + 1)
        }

        // Remove from left until valid
        while (distinct > k) {

            for (const prime of factors[left]) {

                count.set(prime, count.get(prime)! - 1)

                if (count.get(prime) === 0) {
                    count.delete(prime)
                    distinct--
                }
            }

            left++
        }

        maxLen = Math.max(maxLen, right - left + 1)
    }

    return maxLen
}