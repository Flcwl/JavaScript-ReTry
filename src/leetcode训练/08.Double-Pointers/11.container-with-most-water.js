/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  // 最大矩阵
  while (left < right) {
    const x = right - left;

    // 水槽盛水高度由短板决定
    if (height[left] < height[right]) {
      max = Math.max(max, height[left] * x);
      left++;
    } else {
      max = Math.max(max, height[right] * x);
      right--;
    }
  }

  return max;
};
// @lc code=end
