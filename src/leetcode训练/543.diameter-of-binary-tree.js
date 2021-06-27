/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  // 由于二叉树
  // 所以只需要计算左右两边最大深度然后相加即可
  if (!root) return 0;

  let ret = 0;
  const dfs = (node) => {
    if (!node) return 0;

    const leftMax = dfs(node.left);
    const rightMax = dfs(node.right);

    // 根据树结构，子树中可能潜在有很长的直径
    // 每次都需要比较
    ret = Math.max(ret, leftMax + rightMax);

    return Math.max(leftMax, rightMax) + 1;
  };

  dfs(root);

  return ret;
};
// @lc code=end
