/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if(!inorder.length) return null
   
    let rootVal = postorder.pop()!
    let root = new TreeNode(rootVal)
     let mid = inorder.indexOf(rootVal)
   
    root.right = buildTree(inorder.slice(mid + 1),postorder)
     root.left = buildTree(inorder.slice(0,mid),postorder)

    return root
};


// preorder root left right
// inorder left root right
// post order left right root



// 3 9 20 null null 15 7
// 1  0  3           2  4
// 4  0  3           1  3

