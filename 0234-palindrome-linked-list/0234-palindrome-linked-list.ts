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

function isPalindrome(head: ListNode | null): boolean {
    
    let stack = []
    let slow = head
    let fast = head

    while(fast !== null && fast.next !== null ){
        let val = slow.val
        stack.push(val)
        slow = slow.next
        fast = fast.next.next
    }
    // console.log(stack,slow)
    if (fast !== null) {
        slow = slow!.next;
    }
    while(slow !== null){
        let val = slow.val
        let top = stack.pop()!
        if(val !== top){
            return false
        }
        slow = slow.next
    }

    return true
};