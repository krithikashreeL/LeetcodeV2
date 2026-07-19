function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let position = m + n - 1;
    m -= 1;
    n -= 1;

    // We only need to loop as long as there are items left in nums2 to place.
    // If nums2 runs out, whatever is left in nums1 is already sorted!
    while (n >= 0) {
        if (m >= 0 && nums1[m] > nums2[n]) {
            nums1[position] = nums1[m];
            m -= 1;
        } else {
            // This runs if nums2[n] >= nums1[m] OR if nums1 is exhausted (m < 0)
            nums1[position] = nums2[n];
            n -= 1;
        }
        position -= 1;
    }
}