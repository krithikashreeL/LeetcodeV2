/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let start = 0
    for(let i = m; i < nums1.length; i++){
        nums1[i] = nums2[start]
        start += 1
    }
    console.log(nums1)
    for(let i = 0; i < m + n; i++){
        for(let j = m + n; j >= i; j--){
            if(nums1[i] > nums1[j]){
                // console.log(nums1[i],nums1[j])
                let temp = nums1[j]
                nums1[j] = nums1[i]
                nums1[i] = temp
            }
        }
    }
};