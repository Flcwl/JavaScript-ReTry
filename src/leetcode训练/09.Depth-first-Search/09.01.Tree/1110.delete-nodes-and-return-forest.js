/*
 * @lc app=leetcode id=1110 lang=javascript
 *
 * [1110] Delete Nodes And Return Forest
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
 * @param {number[]} toDelete
 * @return {TreeNode[]}
 */
var delNodes = function(root, toDelete) {
  const ans = []
  // 递归特质：
  // by 参数：向下传递上层状态
  // by 返回值：向上传递下层状态

  const dfs = (node, isRoot) => {
    if (!node) return null

    if (toDelete.includes(node.val)) {
      node.left = dfs(node.left, true)
      node.right = dfs(node.right, true)

      return null
    }

    if (isRoot) {
      ans.push(node)
    }

    node.left = dfs(node.left, false)
    node.right = dfs(node.right, false)

    return node
  }

  dfs(root, true)

  return ans
};
// @lc code=end
