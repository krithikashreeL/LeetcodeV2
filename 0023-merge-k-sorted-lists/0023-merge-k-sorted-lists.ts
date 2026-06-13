/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let result = new ListNode()
    let head = result
    let cHeads: ListNode[] = []
    for (let i = 0; i < lists.length; i++) {
        if (lists[i] !== null) {
            cHeads.push(lists[i])
        }
    }



    while (cHeads.length > 0) {
        let min = Infinity
        let minIndex = -1
        for (let i = 0; i < cHeads.length; i++) {
            if (cHeads !== undefined && cHeads[i].val < min) {
                min = cHeads[i].val
                minIndex = i
            }
        }
        
        let minHead = cHeads[minIndex]
        result.next = minHead
        result = result.next
        minHead = minHead.next
        cHeads.splice(minIndex, 1);

        if(minHead !== null){
            cHeads.push(minHead)
        }
    }

    return head.next
};