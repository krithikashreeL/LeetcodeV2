function longestArithSeqLength(nums: number[]): number {

    let map = Array.from(
        { length: nums.length },
        () => new Map<number, number>()
    );

    let max = 2;

    for (let i = 1; i < nums.length; i++) {

        for (let j = 0; j < i; j++) {

            let d = nums[i] - nums[j];

            // Check if an arithmetic sequence already ends at j
            let val = map[j].get(d) ?? 1;

            // Extend it with nums[i]
            let curr = val + 1;

            map[i].set(
                d,
                Math.max(map[i].get(d) ?? 0, curr)
            );

            max = Math.max(max, curr);
        }
    }

    return max;
}