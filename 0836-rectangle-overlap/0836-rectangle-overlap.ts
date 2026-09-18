function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {

    let x1 = rec1[0]
    let x2 = rec1[2]
    let x3 = rec2[0]
    let x4 = rec2[2]

    let y1 = rec1[1]
    let y2 = rec1[3]
    let y3 = rec2[1]
    let y4 = rec2[3]

    // Check overlap on X axis
    let xOverlap = x1 < x4 && x3 < x2

    // Check overlap on Y axis
    let yOverlap = y1 < y4 && y3 < y2

    return xOverlap && yOverlap
}