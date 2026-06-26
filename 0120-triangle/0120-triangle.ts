function minimumTotal(triangle: number[][]): number {
    let min = 0
    let m = triangle.length

    for (let i = m - 1; i > 0; i--) {
        let prev = triangle[i - 1]
        let current = triangle[i]
        let prevLength = prev.length

        for(let i = 0; i < prevLength; i++){
            prev[i] += Math.min(current[i], current[i+1])
        }
        
    }
    // console.log(triangle)

    return triangle[0][0]
};


