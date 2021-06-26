/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 根据题意，1 <= m, n <= 100
  const m = matrix.length;
  const n = matrix[0].length;

  let l = 0;
  let r = m * n - 1;

  while (l <= r) {
    // 有序矩阵中的二分查找
    const mid = l + Math.floor((r - l) / 2);
    const midX = Math.floor(mid / n);
    const midY = mid % n;

    if (target === matrix[midX][midY]) {
      return true;
    } else if (target > matrix[midX][midY]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return false;
};
// @lc code=end
