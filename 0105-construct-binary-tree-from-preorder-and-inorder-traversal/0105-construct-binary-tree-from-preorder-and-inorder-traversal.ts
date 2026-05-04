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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    

if(!inorder.length) return null



const preorderVal = preorder.shift()!
const inorderFindRoot = inorder.findIndex((val) => val === preorderVal)
const inorderLeft = inorder.slice(0,inorderFindRoot)
const inorderRight = inorder.slice(inorderFindRoot + 1)
let root = new TreeNode(preorderVal)
root.left = buildTree(preorder,inorderLeft)
root.right = buildTree(preorder,inorderRight)


return root

};


