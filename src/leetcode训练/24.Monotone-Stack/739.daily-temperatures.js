/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  // 单调递减栈
  const stack = []
  // 达不到变更暖要求，填充 0
  const result = new Array(temperatures.length).fill(0)

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      const topIndex = stack.pop()
      result[topIndex] = i - topIndex
    }

    stack.push(i)
  }

  return result
};
// @lc code=end
