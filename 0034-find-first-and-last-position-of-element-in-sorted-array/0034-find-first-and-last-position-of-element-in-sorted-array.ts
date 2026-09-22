function searchRange(nums: number[], target: number): number[] {


    function isStartFound(startIndex: Boolean) {
        let start = 0
        let end = nums.length - 1
        let n = nums.length
        let index = -1
        while (start <= end) {
            let mid = Math.floor((start + end) / 2)
            console.log(start, end, mid)
            if (nums[mid] == target) {
                index = mid
                if (startIndex) {
                    end = mid - 1
                } else {
                    start = mid + 1
                }
            } else if (nums[mid] > target) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }


        return index
    }

    return [isStartFound(true), isStartFound(false)]


};