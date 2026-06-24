class Solution {
    private prefixSums: number[];
    private totalSum: number;

    constructor(w: number[]) {
        this.prefixSums = [];
        let currentSum = 0;
        
        for (let weight of w) {
            currentSum += weight;
            this.prefixSums.push(currentSum);
        }
        
        this.totalSum = currentSum;
    }

    pickIndex(): number {
        // Generate a random target between 1 and totalSum (inclusive)
        const target = Math.floor(Math.random() * this.totalSum) + 1;
        
        // Binary search to find the correct index
        let low = 0;
        let high = this.prefixSums.length - 1;
        
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (this.prefixSums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        
        return low;
    }
}