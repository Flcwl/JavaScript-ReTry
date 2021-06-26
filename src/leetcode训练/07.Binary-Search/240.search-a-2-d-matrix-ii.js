/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 第一种：n 个 二分查找

  // 根据题意，1 <= m, n <= 300
  const m = matrix.length;
  const n = matrix[0].length;

  // 第二种：从对称角开始 （七字型，和左和下比，数值刚和中间）
  // 自带 mid
  let x = 0;
  let y = n - 1;

  while (x < m && y > -1) {
    if (matrix[x][y] === target) {
      return true;
    } else if (matrix[x][y] < target) {
      x++;
    } else {
      y--;
    }
  }

  return false;
};
// @lc code=end
