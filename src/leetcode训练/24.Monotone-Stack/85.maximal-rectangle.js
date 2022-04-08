/*
 * @lc app=leetcode id=85 lang=javascript
 *
 * [85] Maximal Rectangle
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0

  const heights = new Array(matrix[0].length).fill(0)
  let ret = 0

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

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      heights[j] = matrix[i][j] === '0' ? 0 : heights[j] + 1
    }

    ret = Math.max(
      ret,
      largestRectangleArea([...heights])
    )
  }

  return ret
};
// @lc code=end
