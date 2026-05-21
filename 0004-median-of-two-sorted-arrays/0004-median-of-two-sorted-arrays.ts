function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

    let small = nums1;
    let large = nums2;

    if (nums1.length > nums2.length) {
        [small, large] = [large, small];
    }

    let total = small.length + large.length;
    let half = Math.floor(total / 2);

    let l = 0;
    let r = small.length;

    while (true) {

        let mid1 = Math.floor((l + r) / 2);
        let mid2 = half - mid1;

        let sleft = mid1 > 0 ? small[mid1 - 1] : -Infinity;
        let sright = mid1 < small.length ? small[mid1] : Infinity;

        let lleft = mid2 > 0 ? large[mid2 - 1] : -Infinity;
        let lright = mid2 < large.length ? large[mid2] : Infinity;

        if (sleft <= lright && lleft <= sright) {

            if (total % 2) {
                return Math.min(sright, lright);
            }

            return (
                Math.max(sleft, lleft) +
                Math.min(sright, lright)
            ) / 2;

        } else if (sleft > lright) {
            r = mid1 - 1;
        } else {
            l = mid1 + 1;
        }
    }
}