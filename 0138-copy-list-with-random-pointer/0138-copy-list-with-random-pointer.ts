/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    let map = new Map<_Node | null, _Node | null>()
    let copy = new _Node()

    let copyHead = copy
    let og = head

    while (og !== null) {
        copy.next = new _Node(og.val)
        map.set(og,copy.next)
        og = og.next
        copy = copy.next
    }

    let randPtr = head

    while(randPtr !== null){
        let current = randPtr
        let newCurrent = map.get(current)

        let rand = current.random
        let newRand = map.get(rand)
        newCurrent.random = newRand
        randPtr = randPtr.next
    }
    return copyHead.next
};