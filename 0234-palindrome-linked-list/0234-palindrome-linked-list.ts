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
    
    let str = ''

    let ptr = head

    while(ptr !== null){
        let val = ptr.val
        str += String(val)
        ptr = ptr.next
    }


    return str === str.split('').reverse().join('')
   
};


