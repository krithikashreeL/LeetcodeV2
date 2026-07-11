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

function reverseList(head: ListNode | null): ListNode | null {
    if(!head){
        return head
    }
   
    let prev : ListNode | null= null
    let current = head
    while(current){
        let next = current.next
        let temp = current
        current.next = prev
        prev = temp 
        current = next
       
    }
   return prev
};