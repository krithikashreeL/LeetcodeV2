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


    lists = lists.filter((node): node is ListNode => node !== null);
    let result = new ListNode(0)
    console.log(lists.length)
    if (lists.length == 0) {
        return null
    }
    let resultHead: ListNode | null = result

    while (lists.length > 0) {
        let minIndex = 0;
        for (let i = 1; i < lists.length; i++) {
            if (lists[minIndex].val > lists[i].val) {
                minIndex = i
            }
        }

        let smallest = lists[minIndex]
        result.next = smallest
        result = result.next
        if (smallest !== null && smallest.next !== null) {
            lists[minIndex] = lists[minIndex].next

        } else {
            lists.splice(minIndex, 1)
        }

    }
    console.log(resultHead.next)

    return resultHead.next
};