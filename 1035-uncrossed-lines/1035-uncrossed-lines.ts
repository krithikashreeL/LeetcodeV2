function maxUncrossedLines(nums1: number[], nums2: number[]): number {
    let dp = Array.from({ length: nums1.length }, () => { return new Array(nums2.length).fill(0) })

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            let left = i - 1 >= 0 ? dp[i - 1][j] : 0
            let top = j - 1 >= 0 ? dp[i][j - 1] : 0
            let diag = i - 1 >= 0 && j - 1 >= 0 ? dp[i - 1][j - 1] : 0
            if (nums1[i] == nums2[j]) {
                dp[i][j] = 1 + diag
            } else {
                dp[i][j] = Math.max(left, top, diag)
            }
        }
    }

    return dp[nums1.length - 1][nums2.length - 1]
};
