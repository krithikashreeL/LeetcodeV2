function hasValidPath(grid: string[][]): boolean {
    let m = grid.length
    let n = grid[0].length
    let memo = new Map<string, boolean>()
    function dfs(x, y, openCount, closeCount) {
        if (x >= m - 1 && y >= n - 1) {
            if (openCount == closeCount) {
                return true
            }
            return false
        }

        if (closeCount > openCount) {
            return false
        }
        let balance = openCount - closeCount
        let key = String(x) + '|' + String(y) + String(balance)
        if (memo.has(key)) {
            return memo.get(key)
        }

        let down = y + 1 < n ? grid[x][y + 1] : ''
        let downVal = false
        if (down == '(') {
            downVal = downVal || dfs(x, y + 1, openCount + 1, closeCount )
        }
        if (down == ')') {
            downVal = downVal || dfs(x, y + 1, openCount, closeCount + 1)
        }

        let right = x + 1 < m ? grid[x + 1][y] : ''
        let rightVal = false
       
        if (right == '(') {
            rightVal = rightVal || dfs(x + 1, y, openCount + 1, closeCount)
        }
        if (right == ')') {
            rightVal = rightVal || dfs(x + 1, y, openCount, closeCount + 1)
        }

        let val = rightVal || downVal
        memo.set(key, val)
        return val

    }

    if(grid[0][0] == ')'){
        return false
    }
    return dfs(0, 0, 1, 0)
};