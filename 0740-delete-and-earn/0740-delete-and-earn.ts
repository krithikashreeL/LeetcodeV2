// function deleteAndEarn(nums: number[]): number {
//     let memo = new Map<number, number>()
//     let max = -Infinity

//     function traversal(index) {
//         if (index == nums.length) {
//             return
//         }

//         let current = nums[index]
//         if (memo.has(current)) {
//             return memo.get(current)
//         }
//         let prev = current - 1
//         let next = current + 1

//         let deleteCurrent = 
//         let skip = traversal(index + 1)
//         let score = Math.max(keep, skip)
//         max = Math.max(score, max)
//         memo.set(current, score)

//         return
//     }



//     return max
// };

function deleteAndEarn(nums: number[]): number {
    // 1. Aggregate points for each unique number
    const pointsMap = new Map<number, number>();
    for (const num of nums) {
        pointsMap.set(num, (pointsMap.get(num) || 0) + num);
    }

    // 2. Sort the unique keys so we can process them sequentially
    const uniqueNums = Array.from(pointsMap.keys()).sort((a, b) => a - b);
    
    // 3. Your memo map (tracks index -> max score from this point forward)
    const memo = new Map<number, number>();

    function traversal(index: number): number {
        // Base case: reached the end of unique numbers
        if (index >= uniqueNums.length) {
            return 0;
        }

        // Memoization check
        if (memo.has(index)) {
            return memo.get(index)!;
        }

        const current = uniqueNums[index];
        const currentPoints = pointsMap.get(current)!;

        // Option 1: Skip current and move to the next index
        const skip = traversal(index + 1);

        // Option 2: Take current. 
        // If the next unique number is exactly current + 1, we must skip it (index + 2).
        // Otherwise, the next number is safe to look at (index + 1).
        let nextIndex = index + 1;
        if (index + 1 < uniqueNums.length && uniqueNums[index + 1] === current + 1) {
            nextIndex = index + 2;
        }
        const take = currentPoints + traversal(nextIndex);

        // Calculate maximum score for this decision branch
        const score = Math.max(take, skip);
        memo.set(index, score);

        return score;
    }

    // Start the recursion from the first unique number
    return traversal(0);
}