function numIslands(grid: string[][]): number {

    let m = grid.length
    let n = grid[0].length
    // let seen = new Set()
    function dfs(r, c, counter) {
        if (r >= m || c >= n || r < 0 || c < 0) {
            return
        }
        // let key = String(r) + '|' + String(c)
        if (grid[r][c] == '0') {
            return
        }
        
        // seen.add(key)
        grid[r][c] = '0'

        dfs(r + 1, c, counter)
        dfs(r, c + 1, counter)
        dfs(r - 1, c , counter)
        dfs(r,c - 1, counter)
        return
    }

    let counter = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // let key = String(i) + '|' + String(j)
            if (grid[i][j] == '1' ) {
                 counter += 1
                dfs(i,j,counter)
               
            }
            
        }
    }

    // console.log(grid)

    return counter
};