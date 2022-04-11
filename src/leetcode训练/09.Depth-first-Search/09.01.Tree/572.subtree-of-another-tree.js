/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  // DFS O(M x N)
  const isSameTree = (node, sameNode) => {
    if (!node && !sameNode) return true
    if (!node || !sameNode) return false

    if (!node.val !== sameNode.val) return false

    return isSameTree(node.left, sameNode.left) && isSameTree(node.right, sameNode.right)
  }

  let ret = false

  const dfs = (node) => {
    if (ret) return
    if (!node) return

    if (isSameTree(node, subRoot)) {
      ret = true
    }

    if (!ret) {
      dfs(node.left)
      dfs(node.right)
    }
  }

  dfs(root)

  return ret
};
// @lc code=end
