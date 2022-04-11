/*
 * @lc app=leetcode id=863 lang=javascript
 *
 * [863] All Nodes Distance K in Binary Tree
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
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
  // 1. 先获取距离 i (i <= k)个层级关系的祖先
  // 2. 然后依次对祖先求距离 k - i 个的孩子节点
  const dfs = (node) => {
    if (!node) return null

    if (node === target) {
      return [node]
    }

    const leftPaths = dfs(node.left)
    if (leftPaths) {
      if (leftPaths.length <= k) {
        return leftPaths.concat(node)
      }

      return leftPaths
    }

    const rightPaths = dfs(node.right)
    if (rightPaths) {
      if (rightPaths.length <= k) {
        return rightPaths.concat(node)
      }

      return rightPaths
    }

    return null
  }

  let ancestorsClosestK = dfs(root)

  if (!ancestorsClosestK) {
    return []
  }
  // console.log(ancestorsClosestK);

  const ret = []
  const findDepthNodes = (node, depth, targetDepth) => {
    if (!node) return

    if (targetDepth === depth) {
      ret.push(node.val)
    } else if (depth < targetDepth) {
      if (!ancestorsClosestK.includes(node.left)) {
        findDepthNodes(node.left, depth + 1, targetDepth)
      }

      if (!ancestorsClosestK.includes(node.right)) {
        findDepthNodes(node.right, depth + 1, targetDepth)
      }
    }
  }

  //        0
  //     1    2
  //  x  3  x  5
  //    4
  // target is 3, k is 3
  // found 2

  // ancestorsClosestK is [3, 1, 0]
  // children is [4, 2]，exclude 4
  ancestorsClosestK.forEach((ancestor, index) => {
    const dist = k - index

    if (dist === 0) {
      ret.push(ancestor.val)
    } else {
      findDepthNodes(ancestor, 0, dist)
    }
  })

  return ret
};
// @lc code=end
