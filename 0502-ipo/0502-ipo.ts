function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {

    let heap: [number, number[]][] = []

    function siftDown(arr: [number, number[]][], parentIndex: number) {
        let leftIndex = (parentIndex * 2) + 1
        let rightIndex = (parentIndex * 2) + 2
        let largest = parentIndex
        let n = arr.length

        if (leftIndex < n && arr[largest][1][0] < arr[leftIndex][1][0]) {
            largest = leftIndex
        }
        if (rightIndex < n && arr[largest][1][0] < arr[rightIndex][1][0]) {
            largest = rightIndex
        }
        if (largest !== parentIndex) {
            [arr[largest], arr[parentIndex]] = [arr[parentIndex], arr[largest]]
            siftDown(arr, largest)
        }
    }

    function siftUp(arr: [number, number[]][], index: number) {
        let parentIndex = Math.floor((index - 1) / 2)
        if (index > 0 && arr[index][1][0] > arr[parentIndex][1][0]) {
            [arr[index], arr[parentIndex]] = [arr[parentIndex], arr[index]]
            siftUp(arr, parentIndex)
        }
    }

    function insert(arr: [number, number[]][], item: [number, number[]]) {
        arr.push(item)
        siftUp(arr, arr.length - 1)  // O(log n)
    }

    function popMax(arr: [number, number[]][]): [number, number[]] {
        const max = arr[0]
        arr[0] = arr[arr.length - 1]
        arr.pop()
        siftDown(arr, 0)  // O(log n)
        return max
    }

    // sort by capital ascending once
    let n = profits.length
    let sorted = profits
        .map((p, i) => [i, [p, capital[i]]] as [number, number[]])
        .sort((a, b) => a[1][1] - b[1][1])

    let pointer = 0

    while (k > 0) {
        k -= 1

        // add all newly affordable projects → O(log n) each
        while (pointer < sorted.length && sorted[pointer][1][1] <= w) {
            insert(heap, sorted[pointer])
            pointer++
        }

        if (heap.length == 0) break

        // pop max profit → O(log n)
        let [_, val] = popMax(heap)
        w += val[0]
    }

    return w
}