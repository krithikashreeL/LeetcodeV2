function divisibleGame(nums: number[]): number {
    const MOD = 1000000007;

    // k=2 is always a valid choice
    let candidates = new Set<number>();
    candidates.add(2);

    // Generate possible k values
    for (let num of nums) {
        if (num > 1) {
            candidates.add(num);
        }

        for (let d = 2; d * d <= num; d++) {
            if (num % d === 0) {
                candidates.add(d);

                if (d !== num / d) {
                    candidates.add(num / d);
                }
            }
        }
    }

    let bestDiff = -Infinity;
    let bestK = 2;

    for (let k of candidates) {
        let diff = maxSubarray(nums, k);

        if (
            diff > bestDiff ||
            (diff === bestDiff && k < bestK)
        ) {
            bestDiff = diff;
            bestK = k;
        }
    }

    return ((bestDiff * bestK) % MOD + MOD) % MOD;
}


function maxSubarray(nums: number[], k: number): number {
    let current = -Infinity;
    let best = -Infinity;

    for (let num of nums) {
        let value = (num % k === 0) ? num : -num;

        current = Math.max(value, current + value);
        best = Math.max(best, current);
    }

    return best;
}