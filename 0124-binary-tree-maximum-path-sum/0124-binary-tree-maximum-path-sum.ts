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

    let memo = new Set()
    let max = -Infinity
    function dfs(node: TreeNode) {
        if (node == null) {
            return 0
        }

        let current = node.val
        let left = 0
        if (node.left) {
            left = Math.max(0,dfs(node.left))
        }
        let right = 0
        if (node.right) {
            right = Math.max(0,dfs(node.right))
        }
        let sum = current + left + right
        // console.log(current, sum)
        max = Math.max(max, sum)
        return current + Math.max(left, right)
    }

    dfs(root)
    // console.log(max)

    return max
};