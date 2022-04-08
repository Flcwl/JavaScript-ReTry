/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const stack = []
  let ret = 0

  // 保证最后增序可以被处理 [2, 4]
  heights.push(0)

  for (let i = 0; i < heights.length; i++) {
    // 局部峰值
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      const topIndex = stack.pop();

      ret = Math.max(
        ret,
        heights[topIndex] * (
          stack.length > 0 ? i - stack[stack.length - 1] - 1 : i
        )
      )
    }

    stack.push(i)
  }

  return ret
};
// @lc code=end
