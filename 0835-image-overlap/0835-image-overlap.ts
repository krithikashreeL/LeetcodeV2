function largestOverlap(img1: number[][], img2: number[][]): number {

    let index1: number[][] = []
    let index2: number[][] = []
    let n = img1.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (img1[i][j] == 1) {
                index1.push([i, j])
            }
            if (img2[i][j] == 1) {
                index2.push([i, j])
            }
        }
    }
    let distances = new Map<string, number>();
    let count = 0
    for (let [x1, y1] of index1) {
        for (let [x2, y2] of index2) {
            let d1 = (x2 - x1)
            let d2 = (y2 - y1)
            let key = String(d1) + '|' + String(d2)
            // let key = `${d1},${d2}`
           let val = (distances.get(key) ?? 0) + 1
            distances.set(key, val)
            count = Math.max(count, val)
        }
    }

    // console.log(distances)




    return count
};


