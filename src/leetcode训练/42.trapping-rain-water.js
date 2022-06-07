/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var trap = function (heights) {
  let result = 0

  let left = 0
  let right = heights.length - 1

  let leftMaxHeight = 0
  let rightMaxHeight = 0

  while (left < right) {
    // 维护两边界的极大值
    leftMaxHeight = Math.max(leftMaxHeight, heights[left])
    rightMaxHeight = Math.max(rightMaxHeight, heights[right])

    // 根据木桶短板效应，累加当前接水量（忽略中间隔板）
    if (leftMaxHeight < rightMaxHeight) {
      result += leftMaxHeight - heights[left]
      // 从左往右扫描
      left++
    } else {
      result += rightMaxHeight - heights[right]
      // 从右往左扫描
      right--
    }
  }

  return result
};
// @lc code=end

