/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length
  // 不做额外跑圈
  k = k % n

  const moveArr = nums.slice(n - k)

  for (let i = n - 1 - k; i >= 0; i--) {
    nums[i + k] = nums[i]
  }

  for (let i = 0; i < k && i < nums.length; i++) {
    nums[i] = moveArr[i]
  }
};
// @lc code=end

