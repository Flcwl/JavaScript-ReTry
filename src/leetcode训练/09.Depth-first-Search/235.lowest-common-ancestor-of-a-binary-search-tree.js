/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  const dfs = (node) => {
    if (!node) return null
    if (node === p || node === q) return node

    const leftChild = dfs(node.left)
    const rightChild = dfs(node.right)

    if (leftChild && rightChild) {
      return node
    }

    if (leftChild) {
      return leftChild
    }

    if (rightChild) {
      return rightChild
    }
    return null
  }

  return dfs(root)
};
// @lc code=end
