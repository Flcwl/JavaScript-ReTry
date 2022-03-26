/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function(root) {
  const dfs = (node, nodeMirror) => {
    if (!node && !nodeMirror) return true

    // 镜像比较：left 对 right
    if (node && nodeMirror && node.val === nodeMirror.val) {
      return dfs(node.left, nodeMirror.right) && dfs(node.right, nodeMirror.left)
    }

    return false
  }

  return root ? dfs(root.left, root.right) : true
};
// @lc code=end
