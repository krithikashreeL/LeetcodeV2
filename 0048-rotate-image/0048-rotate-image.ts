/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    let n = matrix.length
    for (let i = 0; i < Math.floor(n / 2); i++) {
        let pair = n - i - 1
        for (let j = 0; j < n; j++) {
            [matrix[i][j], matrix[pair][j]] = [matrix[pair][j], matrix[i][j]]
        }
    }

    // let seen = new Set()
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // let key1 = String(i) + '|' + String(j)
            // let key2 = String(j) + '|' + String(i)
            // if (!seen.has(key1) && !seen.has(key2)) {
                // console.log(matrix[i][j], matrix[j][i])
                // seen.add(key1)
                // seen.add(key2)
                if (i !== j) {
                    [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
                }
            // }
        }
    }
};











// 7 8 9   7 4 1
// 4 5 6   8
// 1 2 3   9