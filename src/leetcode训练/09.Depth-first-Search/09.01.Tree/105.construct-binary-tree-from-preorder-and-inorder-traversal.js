/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  //             3
  //       9         20
  //   x    x     15     7
  //             x  x    x  x
  // preorder = [3, 9, 20, 15, 7]
  //  inorder = [9,3,15,20,7]
  // Output: [3, 9, 20, null, null, 15, 7]

  const dfs = (i, subInorder) => {
    if (subInorder.length < 1) return null
    const val = preorder[i]
    const node = new TreeNode(val)

    const index = subInorder.indexOf(val)

    if (index !== -1) {
      node.left = dfs(i + 1, subInorder.slice(0, index))
      node.right = dfs(i + 1 + index, subInorder.slice(index + 1))
    }
    return node
  }

  return dfs(0, inorder)
};
// @lc code=end

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

console.log(
  buildTree(
    [3, 9, 20, 15, 7],
    [9, 3, 15, 20, 7]
  )
);
