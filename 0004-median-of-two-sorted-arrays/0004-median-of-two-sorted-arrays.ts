function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let total = nums1.length + nums2.length
    let half = Math.floor(total / 2)
    let small = nums1
    let large = nums2

    if (nums1.length > nums2.length) {
        [small, large] = [large, small]
    }

    let sl = 0
    let sr = small.length - 1

    while (true) {
        let smid = Math.floor((sl + sr) / 2) 
        let lmid = half - smid - 2

        let sleft = smid >= 0 ? small[smid] : -Infinity
        let sright = ((smid + 1) < (small.length )) ? small[smid + 1] : Infinity
        let lleft = lmid >= 0 ? large[lmid] : -Infinity
        let lright = (lmid + 1) < (large.length ) ? large[lmid + 1] : Infinity

        if (sleft <= lright && lleft <= sright) {
            if ((total % 2) != 0) {
                return Math.min(sright, lright)
            } else {
                return (Math.max(sleft, lleft) + Math.min(lright, sright)) / 2
            }
        }else{
            if(sleft > lright){
                sr = smid - 1
            }else{
                sl = smid + 1
            }
        }
    }
    return 0

};