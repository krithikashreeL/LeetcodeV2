function countNegatives(grid: number[][]): number {

    let m = grid.length
    let n = grid[0].length
    let count = 0

    let i = 0
    let j = n - 1

    while (i < m && j >= 0) {
        if (grid[i][j] < 0) {
            count += m - i
                j -= 1
        }else{
            i+= 1
        }
    }

    return count
};

