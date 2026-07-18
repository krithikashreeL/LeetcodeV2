function topKFrequent(nums: number[], k: number): number[] {

    let map = new Map<number, number>()
    let n = nums.length

    for (let i = 0; i < n; i++) {
        let val = map.get(nums[i]) ?? 0
        map.set(nums[i], val + 1)
    }
    let array = Array.from(map)
    // console.log(array)
    function maxHeap(parent, arr) {
        let n = arr.length
        let left = parent * 2 + 1
        let right = parent * 2 + 2
        let largest = parent

        if (left >= 0 && left < n && arr[left][1] > arr[largest][1]) {
            largest = left
        }

        if (right >= 0 && right < n && arr[right][1] > arr[largest][1]) {
            largest = right
        }

        if (largest !== parent) {
            [arr[largest], arr[parent]] = [arr[parent], arr[largest]]
            maxHeap(largest, arr)
        }

        return arr
    }

    function heapify(arr) {
        let lastParent = Math.floor(arr.length / 2) - 1

        for (let i = lastParent; i >= 0; i--) {
            maxHeap(i, arr)
        }

        return arr
    }




    let max = []
    array = heapify(array)
    while (k > 0 && array.length > 0) {
        let top = array[0]
        max.push(top[0])
        array[0] = array[array.length - 1]
        array.pop()
        k-=1
        array = maxHeap(0,array)
    }
    return max
};

