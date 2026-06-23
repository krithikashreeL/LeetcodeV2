function maxDistance(moves: string): number {
    let queue = [];
    let score = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
    let uCount = 0
    let xSum = 0
    let ySum = 0

    for (const c of moves) {
        if (c == 'L') {
            xSum -= 1
        } else if (c == 'R') {
            xSum += 1
        } else if (c == 'U') {
            ySum -= 1
        } else if (c == 'D') {
            ySum += 1
        } else {
            uCount += 1
        }
    }
    return Math.abs(0 - xSum) + Math.abs(0 - ySum) + uCount
}

