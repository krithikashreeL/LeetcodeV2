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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
   if (left === right || !head) return head;

    // 1. Create a dummy node so we ALWAYS have a node before 'left'
    const dummy = new ListNode(0, head);
    let leftP = dummy;

    // 2. Safely find the node right before the 'left' position
    for (let i = 1; i < left; i++) {
        leftP = leftP.next!;
    }

    
       let prev: ListNode | null = null;
    let after = leftP.next!; // This is the tail of our reversed sublist
    let current: ListNode | null = leftP.next;
    let next: ListNode | null = null;

        // 4. Run the loop exactly (right - left + 1) times
    for (let i = left; i <= right; i++) {
        next = current!.next;
        current!.next = prev;
        prev = current;
        current = next;
    }
        after.next = current; // Connect reversed tail to the rest of the list
    leftP.next = prev;    // Connect the node before 'left' to the new sublist head

    return dummy.next;
};