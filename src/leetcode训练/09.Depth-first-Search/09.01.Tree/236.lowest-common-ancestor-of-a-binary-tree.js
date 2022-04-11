/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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
// var lowestCommonAncestor = function(root, p, q) {
//   const dfs = (node, target) => {
//     if (!node) return null

//     if (node === target) {
//       return [node]
//     }

//     const childLeft = dfs(node.left, target)
//     if (childLeft) {
//       return childLeft.concat(node)
//     }
//     const childRight = dfs(node.right, target)

//     if (childRight) {
//       return childRight.concat(node)
//     }

//     return null
//   }
//   const pathP = dfs(root, p)
//   const pathQ = dfs(root, q)

//   // 法1：找到两者路径，然后获取公共节点
//   if (pathP && pathQ) {
//     for (let i = 0; i < pathP.length; i++) {
//       const index = pathQ.indexOf(pathP[i])
//       if (index !== -1) {
//         return pathQ[index]
//       }
//     }
//   }

//   return null
// };
var lowestCommonAncestor = function(root, p, q) {
  // let ret = null
  // 方法2：
  // 1. 将设 p 和 q是父子关系，公共节点必然是 q 或者 p
  // 2. 假设 p 和 q 不是父子关系，则它们必然是一个在左子树，一个在右子树
  const dfs = (node, p, q) => {
    // if (ret) return null
    if (!node) return null
    if (node === p || q === node) return node
    const subTreeLeft = dfs(node.left, p, q)
    const subTreeRight = dfs(node.right, p, q)
    if (subTreeLeft && subTreeRight) {
      // 必是结果，属于第二种假设
      // ret = node
      return node
    }

    if (subTreeLeft) {
      return subTreeLeft
    }

    if (subTreeRight) {
      return subTreeRight
    }

    return null
  }

  // return ret || dfs(root, p, q)
  return dfs(root, p, q)
};
// @lc code=end
