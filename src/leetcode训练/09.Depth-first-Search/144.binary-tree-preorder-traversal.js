/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return ret;

  const ret = [];
  (function dfs(node) {
    ret.push(node.val);
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  })(root);

  return ret;
};
// @lc code=end
