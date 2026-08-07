function lengthOfLongestSubsequence(nums: number[], target: number): number {
    let max = -1
    let memo: number[][] = Array.from({ length: nums.length }, () => new Array(target + 1).fill(-1))

    function traversal(index, sum) {
        if (sum == target) {
            return 0
        }

        if (sum > target || index >= nums.length) {
            return -Infinity
        }
        

        if (memo[index][sum] !== -1) {
            return memo[index][sum];
        }


        let skip = traversal(index + 1, sum)
        let take = 1 + traversal(index + 1, sum + nums[index])
        memo[index][sum] = Math.max(skip, take)
        return memo[index][sum]
    }

    let result = traversal(0,0)

    return result == -Infinity ? -1 : result
};