function findRightInterval(intervals: number[][]): number[] {

    let sorted = intervals.map((interval, index) => {
        return [interval[0], index]
    })

    sorted.sort((a, b) => a[0] - b[0])

    function binarySearch(target: number) {
        let start = 0
        let end = sorted.length - 1
        let index = -1

        while (start <= end) {
            let mid = Math.floor((start + end) / 2)

            if (sorted[mid][0] < target) {
                start = mid + 1
            } else {
                index = sorted[mid][1]
                end = mid - 1
            }
        }

        return index
    }

    let result: number[] = []

    for (let i = 0; i < intervals.length; i++) {
        result.push(binarySearch(intervals[i][1]))
    }

    return result
}