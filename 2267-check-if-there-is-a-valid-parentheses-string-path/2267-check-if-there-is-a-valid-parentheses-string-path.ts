function hasValidPath(grid: string[][]): boolean {
    let m = grid.length
    let n = grid[0].length
    let memo = new Map<string, boolean>()
    function dfs(x, y, openCount, closeCount, str) {
        if (x >= m - 1 && y >= n - 1) {
            // console.log("found", openCount, closeCount, str)
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
        let downStr = str
        downStr += down
        if (down == '(') {
            downVal = downVal || dfs(x, y + 1, openCount + 1, closeCount, downStr)
        }
        if (down == ')') {
            downVal = downVal || dfs(x, y + 1, openCount, closeCount + 1, downStr)
        }

        let right = x + 1 < m ? grid[x + 1][y] : ''
        let rightVal = false
        let rightStr = str
        rightStr += right
        if (right == '(') {
            rightVal = rightVal || dfs(x + 1, y, openCount + 1, closeCount, rightStr)
        }
        if (right == ')') {
            rightVal = rightVal || dfs(x + 1, y, openCount, closeCount + 1, rightStr)
        }

        let val = rightVal || downVal
        memo.set(key, val)
        return val

    }

    if(grid[0][0] == ')'){
        return false
    }
    return dfs(0, 0, 1, 0, '')
};