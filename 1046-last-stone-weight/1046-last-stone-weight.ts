function lastStoneWeight(stone: number[]): number {

    function maxHeap(arr, parent) {
        let largest = parent
        let n = arr.length
        let left = parent * 2 + 1
        let right = parent * 2 + 2

        if (left >= 0 && left < n && arr[left] > arr[largest]) {
            largest = left
        }
        if (right >= 0 && right < n && arr[right] > arr[largest]) {
            largest = right
        }

        if (parent !== largest) {
            [arr[parent], arr[largest]] = [arr[largest], arr[parent]]
            maxHeap(arr, largest)
        }

        return arr
    }


    function heapify(arr) {
        let lastParent = Math.floor(arr.length / 2) - 1
        for (let i = lastParent; i >= 0; i--) {
            maxHeap(arr, i)
        }
        return arr
    }

    heapify(stone)

    while (stone.length > 1) {
        let first = stone[0]
        stone[0] = stone[stone.length - 1]
        stone.pop()
        maxHeap(stone, 0)
        let second = stone[0]
        let diff = first - second
        if (diff > 0) {
            stone.push(diff)
        }
        stone[0] = stone[stone.length - 1]
        stone.pop()
        maxHeap(stone, 0)

    }

    return stone[0] ?? 0
};