/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // [2, 3, 4]
  // [2, 3, -2, 4]
  // [-2, 3, -4]
  // [2, 0, -4]
  // [-1, -2, -3, -4]
  let result = nums[0]
  let dpMax = nums[0]
  let dpMin = nums[0]

  for (let i = 1; i < nums.length; i++) {
    // 以 i 为终点的子连续最大积
    const max = dpMax * nums[i]
    // 以 i 为终点的子连续最小积
    const min = dpMin * nums[i]

    // 1. 正正得正（大积）
    // 2. 负负得正（更大积）
    // 3. 遇 0 清 0
    dpMax = Math.max(max, min, nums[i])
    // 1. 正正得正（小积）
    // 2. 正负得负（更小积）
    // 3. 遇 0 清 0
    dpMin = Math.min(max, min, nums[i])

    result = Math.max(result, dpMax)
  }

  return result
};
// @lc code=end


