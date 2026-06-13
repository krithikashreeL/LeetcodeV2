
class MedianFinder {
    public sortedArray: number[];
    constructor() {
        this.sortedArray = []
    }

    addNum(num: number): void {
        let left = 0;
        let right = this.sortedArray.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (this.sortedArray[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        this.sortedArray.splice(left, 0, num);
    }

    findMedian(): number {
        let len = this.sortedArray.length;
        let index = Math.floor(len / 2)
        // console.log(len, index, this.sortedArray)
        if ((len % 2) == 0) {
            return ((this.sortedArray[index] + this.sortedArray[index - 1]) / 2)
        }
        return this.sortedArray[index]
    }
}
// 1 2 3 4 5 6
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */