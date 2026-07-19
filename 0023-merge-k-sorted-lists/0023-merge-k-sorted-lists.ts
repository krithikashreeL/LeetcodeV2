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
    let resultHead = new ListNode(0)

    let result = resultHead
    

    let valArray = []
    for(let list of lists){

        while(list !== null){
            let val = list.val
            list = list.next
            valArray.push(val)
        }
    }

    valArray.sort((a,b) => a - b)

    for(const val of valArray){
        result.next = new ListNode(val)
        result = result.next
    }



    return resultHead.next
};