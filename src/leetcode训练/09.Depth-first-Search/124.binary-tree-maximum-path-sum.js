/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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
 * @return {number}
 */
var maxPathSum = function (root) {
  let ret = -Infinity;
  const dfs = (node) => {
    if (!node) return 0;
    const leftMax = dfs(node.left);
    const rightMax = dfs(node.right);

    ret = Math.max(
      ret,
      Math.max(leftMax, 0) + Math.max(rightMax, 0) + node.val
    );

    //               9
    //      6              -3
    //  nil  nil      -6        2
    //             nil  nil    2   nil
    //                    -6    -6
    //                -6   nil
    // 不因为子节点而负的更多，所以这里直接截取掉
    return Math.max(leftMax, rightMax, 0) + node.val;
  };

  dfs(root);
  return ret;
};
// @lc code=end
