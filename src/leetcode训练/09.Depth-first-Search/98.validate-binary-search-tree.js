/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isValidBST = function(root) {
//   let valid = true
//   // 判断是不是合法的二叉搜索树
//   const dfs = (node) => {
//     if (!valid) return [Infinity, -Infinity]
//     if (!node) return [Infinity, -Infinity]

//     //      5
//     //   4    6
//     // x x  3 7
//     const [leftMin, leftMax] = dfs(node.left)
//     const [rightMin, rightMax] = dfs(node.right)

//     const mid = node.val

//     if (leftMax !== -Infinity && mid <= leftMax) {
//       valid = false
//     } else if (rightMin !== Infinity && mid >= rightMin) {
//       valid = false
//     } else {
//       return [
//         Math.min(node.val, leftMin, rightMin),
//         Math.max(node.val, leftMax, rightMax)
//       ]
//     }
//     return [Infinity, -Infinity]
//   }

//   dfs(root)
//   return valid
// };
var isValidBST = function(root) {
  // 判断是不是合法的二叉搜索树
  const dfs = (node, minNode, maxNode) => {
    if (!node) return true
    // 左子树 < (max)节点(min) < 右子树
    if (minNode && minNode.val >= node.val) return false
    if (maxNode && maxNode.val <= node.val) return false

    return (
      dfs(node.left, minNode, node) &&
      dfs(node.right, node, maxNode)
    )
  }

  return dfs(root, null, null)
};
// @lc code=end
