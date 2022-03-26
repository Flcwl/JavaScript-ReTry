/*
 * @lc app=leetcode id=987 lang=javascript
 *
 * [987] Vertical Order Traversal of a Binary Tree
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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  const mp = new Map();
  // dfs + hashMap + Sort
  const dfs = (node, row, col) => {
    if (!node) return
    let arr = mp.get(col)
    if (!arr) {
      arr = []
      mp.set(col, arr)
    }
    arr.push([node.val, row])
    dfs(node.left, row + 1, col - 1);
    dfs(node.right, row + 1, col + 1)
  }

  dfs(root, 0, 0)

  const arr = Array.from(mp.entries()).sort((a, b) => a[0] - b[0]);
  return arr.map(([col, data]) => {
    return data.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0]
      }
      return a[1] - b[1]
    }).map(([val, row]) => val)
  })
};
// @lc code=end
