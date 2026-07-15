/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let row = new Set<number>()
    let col = new Set<number>()

    let m = matrix.length
    let n = matrix[0].length

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                row.add(i)
                col.add(j)
            }
        }
    }

    for (let r of row) {
        for (let i = 0; i < n; i++) {
            matrix[r][i] = 0
        }
    }

    for(let c of col){
        for(let i = 0; i < m; i++){
            matrix[i][c] = 0
        }
    }

    // return matrix

};