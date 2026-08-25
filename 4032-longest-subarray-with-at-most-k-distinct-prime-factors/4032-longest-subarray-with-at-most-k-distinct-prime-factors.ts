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

    let maxLen = 0
    let count = new Map<number, number>()
    let left = 0
    let distinct = 0
    for (let right = 0; right < nums.length; right++) {

        for (let factor of factors[right]) {
            if (!count.has(factor)) {
                count.set(factor, 1)
                distinct += 1
            } else {
                count.set(factor, count.get(factor) + 1)
            }
        }

        while (distinct > k) {
            for (const factor of factors[left]) {
                let f = count.get(factor)
                if (f == 1) {
                    count.delete(factor)
                    distinct -= 1
                } else {
                    count.set(factor, f - 1)
                }
            }
            left += 1
        }
        maxLen = Math.max(maxLen, right - left + 1)
    }

    return maxLen
}