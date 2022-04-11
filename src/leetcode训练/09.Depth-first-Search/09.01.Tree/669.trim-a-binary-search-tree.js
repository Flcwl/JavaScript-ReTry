/*
 * @lc app=leetcode id=669 lang=javascript
 *
 * [669] Trim a Binary Search Tree
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
// var trimBST = function(root, low, high) {
//   // 根据二叉搜索树的特性，
//   // 小于 low 的节点只保留右子树
//   // 大于 high 的节点只保留左子树
//   const dfs = (node, parent, pos) => {
//     if (!node) return null

//     // low <= high
//     if (node.val < low) {
//       // trim
//       dfs(node.right, node, 'right')
//       parent[pos] = node.right
//       return parent
//     } else if (node.val > high) {
//       // trim
//       dfs(node.left, node, 'left')
//       parent[pos] = node.left
//       return parent
//     } else {
//       // keep
//       dfs(node.left, node, 'left')
//       dfs(node.right, node, 'right')
//       return node
//     }
//   }

//   const top = new TreeNode(-1, root)
//   dfs(root, top, 'left')
//   return top.left
// };
var trimBST = function(root, low, high) {
  // 根据二叉搜索树的特性，
  // 小于 low 的节点只保留右子树
  // 大于 high 的节点只保留左子树
  const dfs = (node) => {
    if (!node) return null

    const left = dfs(node.left)
    const right = dfs(node.right)
    // 根据二叉搜索树的特性，
    // 小于 low 的节点只保留右子树
    // 大于 high 的节点只保留左子树
    if (node.val < low) {
      return right
    } else if (node.val > high) {
      return left
    } else {
      node.left = left
      node.right = right
      return node
    }
  }

  return dfs(root)
};
// @lc code=end

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
