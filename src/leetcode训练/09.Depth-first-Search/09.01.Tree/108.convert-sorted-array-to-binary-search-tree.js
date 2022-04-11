/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const dfs = (left, right) => {
    if (left > right) return null
    const mid = left + ((right - left) >> 1)
    const node = new TreeNode(nums[mid])
    node.left = dfs(left, mid - 1)
    node.right = dfs(mid + 1, right)
    return node
  }

  return dfs(0, nums.length - 1)
};
// @lc code=end

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
