/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  // 前序遍历
  const dfs = (node) => {
    if (!node) return null

    let tail = node

    if (node.left) {
      const leftTail = dfs(node.left);
      node.left = null
      leftTail.right = node.right
      leftTail.left = null
      tail = leftTail
    }

    const rightTail = dfs(node.right)
    if (rightTail) {
      return rightTail
    }

    return tail
  }

  dfs(root)
};
// @lc code=end

