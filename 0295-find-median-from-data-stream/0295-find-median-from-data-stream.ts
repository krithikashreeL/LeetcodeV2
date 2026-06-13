class MedianFinder {
    public half1: number[];
    public half2: number[]
    constructor() {
        this.half1 = []
        this.half2 = []
    }

    public minHeapPush(num) {
        this.half1.push(num)

        let current = this.half1.length - 1
        while (current > 0) {
            let parent = Math.floor((current - 1) / 2)
            if (this.half1[parent] < this.half1[current]) {
                break
            }
            [this.half1[parent], this.half1[current]] = [this.half1[current], this.half1[parent]]
            current = parent
        }
        return
    }

    public minHeapPop() {
        if (this.half1.length == 1) {
            return this.half1.pop()
        }

        let top = this.half1[0]

        this.half1[0] = this.half1.pop()

        let current = 0
        let n = this.half1.length
        while (true) {
            let left = current * 2 + 1
            let right = current * 2 + 2
            let smallest = current

            if (left >= 0 && left < n && this.half1[left] < this.half1[smallest]) {
                smallest = left
            }

            if (right >= 0 && right < n && this.half1[right] < this.half1[smallest]) {
                smallest = right
            }

            if (smallest !== current) {
                [this.half1[smallest], this.half1[current]] = [this.half1[current], this.half1[smallest]]
            } else {
                break
            }

            current = smallest
        }
        return top
    }

    public maxHeapPush(num) {
        this.half2.push(num)

        let current = this.half2.length - 1
        while (current > 0) {
            let parent = Math.floor((current - 1) / 2)
            if (this.half2[parent] > this.half2[current]) {
                break
            }
            [this.half2[parent], this.half2[current]] = [this.half2[current], this.half2[parent]]
            current = parent
        }

    }
    public maxHeapPop() {
        if (this.half2.length == 1) {
            return this.half2.pop()

        }

        let top = this.half2[0]

        this.half2[0] = this.half2.pop()

        let current = 0
        let n = this.half2.length
        while (true) {
            let left = current * 2 + 1
            let right = current * 2 + 2
            let largest = current

            if (left >= 0 && left < n && this.half2[left] > this.half2[largest]) {
                largest = left
            }

            if (right >= 0 && right < n && this.half2[right] > this.half2[largest]) {
                largest = right
            }

            if (largest !== current) {
                [this.half2[largest], this.half2[current]] = [this.half2[current], this.half2[largest]]
            } else {
                break
            }

            current = largest
        }
        return top
    }



    addNum(num: number): void {
        this.maxHeapPush(num)
        this.minHeapPush(this.maxHeapPop())
        if (this.half1.length > this.half2.length) {
            this.maxHeapPush(this.minHeapPop())
        }
    }

    findMedian(): number {
        if (this.half2.length > this.half1.length) {
            return this.half2[0]
        }

        return ((this.half1[0] + this.half2[0]) / 2)
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */