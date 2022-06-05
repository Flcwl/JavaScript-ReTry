/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // 前缀积 * 后缀积
  // f[n] = prefixFn[n - 1] * suffixFn[n + 1]

  const n = nums.length

  const prefixFn = [1]
  for (let i = 0; i < n; i++) {
    const num = nums[i]
    prefixFn[i + 1] = prefixFn[i] * num
  }

  const suffixFn = new Array(n)
  suffixFn.push(1)
  for (let i = n - 1; i >= 0; i--) {
    const num = nums[i]
    suffixFn[i] = suffixFn[i + 1] * num
  }

  const result = []

  for (let i = 0; i < n; i++) {
    result[i] = prefixFn[i] * suffixFn[i + 1]
  }

  return result
};
// @lc code=end

