function minOperations(nums: number[]): number {
    let seenPrime = new Map<number, boolean>();
    seenPrime.set(1, false);
    function isPrime(num) {
        if (seenPrime.has(num)) {
            return seenPrime.get(num);
        }
        let half = Math.sqrt(num);

        for (let i = 2; i <= half; i++) {
            // console.log(num,i,num)
            if ((num % i) == 0) {
                seenPrime.set(num, false);
                return false;
            }
        }
        seenPrime.set(num, true);
        return true;
    }

    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        const isPrimeNum = isPrime(nums[i]);
        if ((i % 2) == 0) {
            //even
            if (isPrimeNum) {
                continue;
            } else {
                let current = nums[i] + 1;

                while (isPrime(current) !== true) {
                    current += 1;
                    // result += 1;
                }
                // console.log("closest to", nums[i], current);
                result += current - nums[i];
            }
        } else {
            // odd
            if (!isPrimeNum) {
                continue;
            } else {
                if ((nums[i] % 2) == 0) {
                    result += 2;
                } else {
                    result += 1;
                }
            }
        }
    }
    // console.log(seenPrime);
    return result;
}
