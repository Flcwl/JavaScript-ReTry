/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0

  // https://leetcode.com/problems/path-sum-iii/discuss/91884/Simple-AC-Java-Solution-DFS
  const dfs = (node, sum) => {
    if (!node) return 0

    let result = 0
    const leftSum = sum - node.val

    if (leftSum === 0) result++
    result += dfs(node.left, leftSum)
    result += dfs(node.right, leftSum)

    return result
  }

  // 以当前路径为起点求路径和 + 不以当前路径为起点求路径和
  return dfs(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum)
};
// @lc code=end


// var pathSum = function (root, targetSum) {
//   let result = 0

//   const dfs = (node) => {
//     if (!node) return []

//     const leftPaths = dfs(node.left)
//     const rightPaths = dfs(node.right)

//     // 0 表示自身节点
//     const ret = [0, ...leftPaths, ...rightPaths].map((val) => {
//       const nextVal = val + node.val
//       if (nextVal === targetSum) result++
//       return nextVal
//     })

//     return ret
//   }

//   dfs(root)
//   return result
// };
