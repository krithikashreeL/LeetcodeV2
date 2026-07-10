function mostPoints(questions: number[][]): number {
    let n = questions.length
    if (n < 1) {
        return 0
    }

    let points = new Array(n).fill(0)
    // for (let i = 0; i < n; i++) {
    //     let item = new Array(2).fill(0)
    //     points.push(item)
    // }

    for (let i = n - 1; i >= 0; i--) {
        let current = questions[i][0]
        let canGo = questions[i][1]
        let carry = 0
        if (i + canGo + 1 < n) {
           carry = points[i + canGo + 1]
        } 
        let skip = i + 1 < n ? points[i + 1] : 0;
        points[i] = Math.max(skip, current + carry)
    }
    console.log(points)
    return points[0]
};