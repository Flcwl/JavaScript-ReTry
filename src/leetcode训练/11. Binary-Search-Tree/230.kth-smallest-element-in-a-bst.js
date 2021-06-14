/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let ret;
  // 根据二叉搜索树的结构，左 < 中 < 右
  // 使用先序遍历
  const dfs = (node) => {
    // k 小于 0 用于剪枝
    if (k < 1) return;

    if (!node) return;

    dfs(node.left);

    --k;
    // 当第 k 个元素查到时，即为结果
    if (k === 0) {
      ret = node.val;
      return;
    }

    dfs(node.right);
  };

  dfs(root);
  return ret;
};
// @lc code=end

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
