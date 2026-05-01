function searchRange(nums: number[], target: number): number[] {

    function binarySearch(first: boolean):number {
        let start = 0
        let end = nums.length - 1
        let mid;
        let n = nums.length
        let index = -1
        // if (n == 1 && nums[0] == target) return [0, 0]
        while (start <= end) {
            mid = Math.floor((start + end) / 2)
            if (nums[mid] < target) {
                start = mid + 1
            } else if (nums[mid] > target) {
                end = mid -1
            } else {
                index = mid
                if (first) {
                    end = mid -1
                } else {
                    start = mid + 1
                }
            }
        }
        return index
    }


    return [binarySearch(true),binarySearch(false)]
};


