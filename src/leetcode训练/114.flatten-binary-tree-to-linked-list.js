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
  if (!root) return null

  // 前序遍历
  const dfs = (node) => {
    // 没有子节点，当前节点作为尾节点返回
    if (!node.left && !node.right) return node

    // 只有左节点，使其变为右节点
    if (!node.right) {
      node.right = node.left
      node.left = null
    }

    // 只有右节点
    if (!node.left) {
      return dfs(node.right)
    }

    // 双方节点都存在，更新尾节点
    const right = node.right
    const tail = dfs(node.left)
    node.right = node.left
    node.left = null
    tail.right = right

    // 返回拍平后尾节点
    return dfs(right)
  }

  dfs(root)

  return root
};
// @lc code=end

