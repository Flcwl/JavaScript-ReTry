/*
 * @lc app=leetcode id=503 lang=javascript
 *
 * [503] Next Greater Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  // 单调递减队列
  const stack = []

  const n = nums.length
  const result = new Array(n).fill(-1)
  // 循环可达
  nums = nums.concat(nums)

  for (let i = 0; i < nums.length; i++) {
    while (
      stack.length > 0 &&
      nums[stack[stack.length - 1]] < nums[i]
    ) {
      const topIndex = stack.pop()
      result[topIndex] = nums[i]
    }

    stack.push(i)
  }

  return result.slice(0, n)
};
// @lc code=end
