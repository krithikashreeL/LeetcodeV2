function minEatingSpeed(piles: number[], h: number): number {


    let start = 1
    let end = Math.max(...piles)
    let mid = 0

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        let total = 0
        for (let item of piles) {
            total += Math.ceil(item / mid)
        }

        if (total > h) {
            start = mid + 1
        }
        else {
            end = mid - 1
        }
    }

    return start

};

