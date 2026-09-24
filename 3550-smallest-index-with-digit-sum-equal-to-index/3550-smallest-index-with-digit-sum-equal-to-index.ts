function smallestIndex(nums: number[]): number {

    for(let i = 0;  i < nums.length; i++){
        let sum = 0
        let num = nums[i]

        while(num > 9){
            let rem = num % 10
            num = Math.floor(num / 10)
            sum += rem
        }
        sum += num
        if(sum == i){
            return i
        }
    }

    return -1
};