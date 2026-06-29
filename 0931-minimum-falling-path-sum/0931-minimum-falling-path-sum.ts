function minFallingPathSum(matrix: number[][]): number {

    let m = matrix.length
    let n = matrix[0].length
    // let min = 0

    for (let i = m - 2; i >= 0; i--) {
        let localSum = Infinity
        for (let j = 0; j < n; j++) {
            // console.log(i, j, n)
            let down = matrix[i + 1][j]
            let left = matrix[i + 1][j - 1] ?? Infinity
            let right = matrix[i + 1][j + 1] ?? Infinity
            let min = Math.min(down, left, right)
            matrix[i][j] += min
        }
        
    }

    // console.log(matrix)
    return Math.min(...matrix[0])
};