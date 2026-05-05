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

function maxPathSum(root: TreeNode | null): number {

    let maxSum = -Infinity
    function findPath(node: TreeNode) {
        if (!node) return 0

        const val = node.val


        const left = Math.max(0, findPath(node.left))
        const right = Math.max(0, findPath(node.right))
        const currentSum = val + left + right
        maxSum = Math.max(currentSum, maxSum)

         return node.val + Math.max(left, right);
    }
    findPath(root)
    return maxSum

};