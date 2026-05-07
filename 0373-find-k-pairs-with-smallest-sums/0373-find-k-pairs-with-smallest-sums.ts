function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {

    let heap: [number, number, number][] = []
    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        heap.push([nums1[i] + nums2[0], i, 0])
    }


    function minHeap(arr, parent) {
        let left = (parent * 2) + 1
        let right = (parent * 2) + 2
        let smallest = parent
        let len = arr.length
        if (left >= 0 && left < len && arr[left][0] < arr[smallest][0]) {
            smallest = left
        }
        if (right >= 0 && right < len && arr[right][0] < arr[smallest][0]) {
            smallest = right
        }

        if (parent !== smallest) {
            [arr[parent], arr[smallest]] = [arr[smallest], arr[parent]]
            minHeap(arr, smallest)
        }
        return arr
    }





    let result = []
    while (result.length < k && heap.length > 0) {
        let [sum, i, j] = heap[0]
        result.push([nums1[i], nums2[j]])

        if (j + 1 < nums2.length) {
            heap.push([nums1[i] + nums2[j + 1], i, j + 1])
        }

        let len = heap.length
        heap[0] = heap[len - 1]
        heap.pop()!
        minHeap(heap,0)




    }

    return result

};