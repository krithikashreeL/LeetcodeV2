function countValidSubarrays(nums: number[], x: number): number {
    let count = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        let localSum = 0;
        
        for (let j = i; j < n; j++) {
            localSum += nums[j];
            
            // 1. Check the last digit using modulo 10
            if (localSum % 10 === x) {
                
                // 2. Check the first digit using math instead of .toString()
                let firstDigit = localSum;
                while (firstDigit >= 10) {
                    firstDigit = Math.floor(firstDigit / 10);
                }
                
                if (firstDigit === x) {
                    count++;
                }
            }
        }
    }

    return count;
}