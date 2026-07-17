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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    
    let result = new ListNode(0)
    let dummy = result
    let carry = null
    while(l1 !== null || l2 !== null){
        let val1 = l1 !== null ? l1.val : 0
        let val2 = l2 !== null ? l2.val : 0

        if(l1 !== null && l1.next !== null){
            l1 = l1.next
        }else{
            l1 = null
        }

        if(l2 !== null && l2.next !== null){
            l2 = l2.next
        }else{
            l2 = null
        }

        let val = val1 + val2
        if(carry > 0){
            val += carry
            carry = null
        }
        let rem = val
        if(val > 9){
            rem = Math.floor(val % 10)
            carry = Math.floor(val / 10)
        }

        dummy.next = new ListNode(rem)
        dummy = dummy.next
    }

    if(carry !== null){
        dummy.next = new ListNode(carry)
    }

    return result.next
};


