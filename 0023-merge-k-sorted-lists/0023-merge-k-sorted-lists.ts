// /**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     val: number
//  *     next: ListNode | null
//  *     constructor(val?: number, next?: ListNode | null) {
//  *         this.val = (val===undefined ? 0 : val)
//  *         this.next = (next===undefined ? null : next)
//  *     }
//  * }
//  */

// function mergeKLists(lists: Array<ListNode | null>): ListNode | null {



//     let result = new ListNode(0)
//     console.log(lists.length)
//     if (lists.length == 0) {
//         return null
//     }
//     let resultHead: ListNode | null = result

//     while (lists.length > 0) {
//         let minIndex = 0;
//         for (let i = 1; i < lists.length; i++) {
//             if (lists[minIndex].val > lists[i].val) {
//                 minIndex = i
//             }
//         }

//         let smallest = lists[minIndex]
//         result.next = smallest
//         result = result.next
//         if (smallest !== null && smallest.next !== null) {
//             lists[minIndex] = lists[minIndex].next

//         } else {
//             lists.splice(minIndex, 1)
//         }

//     }
//     console.log(resultHead.next)

//     return resultHead.next
// };

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    // 1. Clean out all null lists up front so lists[i] is guaranteed to be a ListNode
    lists = lists.filter((node): node is ListNode => node !== null);

    if (lists.length === 0) return null;

    const dummy = new ListNode(0);
    let current = dummy;

    while (lists.length > 0) {
        let minIndex = 0;

        // 2. Find index of the node with the smallest value
        for (let i = 1; i < lists.length; i++) {
            if (lists[i].val < lists[minIndex].val) {
                minIndex = i;
            }
        }

        const smallest = lists[minIndex];

        // 3. Attach the SMALLEST node directly (no need for `new ListNode`)
        current.next = smallest;
        current = current.next;

        // 4. Advance that list's head, or remove it from `lists` if finished
        if (smallest.next !== null) {
            lists[minIndex] = smallest.next;
        } else {
            lists.splice(minIndex, 1);
        }
    }

    return dummy.next;
}