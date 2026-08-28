
function minimumDeleteSum(s1: string, s2: string): number {

    let l1 = s1.length
    let l2 = s2.length

    let dp: number[][] = Array.from(
        { length: l1 + 1 },
        () => new Array(l2 + 1).fill(0)
    )

    // s2 is empty -> delete everything from s1
    for (let i = 1; i <= l1; i++) {
        dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1)
    }

    // s1 is empty -> delete everything from s2
    for (let j = 1; j <= l2; j++) {
        dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1)
    }

    for (let i = 1; i <= l1; i++) {
        for (let j = 1; j <= l2; j++) {

            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                let deleteS1 =
                    s1.charCodeAt(i - 1) + dp[i - 1][j]

                let deleteS2 =
                    s2.charCodeAt(j - 1) + dp[i][j - 1]

                dp[i][j] = Math.min(deleteS1, deleteS2)
            }
        }
    }

    return dp[l1][l2]
}

