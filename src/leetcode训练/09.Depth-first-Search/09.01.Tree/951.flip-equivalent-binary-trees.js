/*
 * @lc app=leetcode id=951 lang=javascript
 *
 * [951] Flip Equivalent Binary Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
  const dfs = (node, flipNode) => {
    if (!node && !flipNode) return true
    if (!node || !flipNode) return false

    if (node.val !== flipNode.val) return false

    // 两者可能都满足：交换或者不交换
    return (
      (
        dfs(node.left, flipNode.right) && dfs(node.right, flipNode.left)
      ) || (
        dfs(node.left, flipNode.left) && dfs(node.right, flipNode.right)
      )
    )
  }

  return dfs(root1, root2)
};
// @lc code=end
