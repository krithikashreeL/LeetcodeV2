function lastStoneWeight(stones: number[]): number {

    function maxHeap(parent, arr) {
        let n = arr.length
        let left = parent * 2 + 1
        let right = parent * 2 + 2
        let largest = parent

        if (left < n && arr[left] > arr[largest]) {
            largest = left
        }
        if (right < n && arr[right] > arr[largest]) {
            largest = right
        }
        if (parent !== largest) {
            [arr[parent], arr[largest]] = [arr[largest], arr[parent]]
            maxHeap(largest, arr)
        }

        return arr
    }


    function heapify(arr) {
        let n = arr.length
        let lastParent = Math.floor((arr.length) / 2) - 1

        for (let i = lastParent; i >= 0; i--) {
            maxHeap(i, arr)
        }

        return arr
    }


    stones = heapify(stones)
    while (stones.length > 1) {
        let first = stones[0]
        let n1 = stones.length
        stones[0] = stones[n1 - 1]
        stones.pop()
        stones = maxHeap(0, stones)
        let second = stones[0]
       
        
        let diff = first - second
        if(diff > 0){
            stones[0] = diff

        }else{
            let n2 = stones.length
            stones[0] = stones[n2 - 1]
            stones.pop()
        }
        stones = maxHeap(0, stones)
        console.log(stones, first,second)

    }
    

    return stones.length == 1 ? stones[0] : 0
};

