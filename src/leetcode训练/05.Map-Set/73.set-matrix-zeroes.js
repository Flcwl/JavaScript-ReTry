/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const row = new Set();
  const col = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        row.add(i);
        col.add(j);
      }
    }
  }

  row.forEach((i) => {
    matrix[i].forEach((_, index) => (matrix[i][index] = 0));
  });

  col.forEach((j) => {
    matrix.forEach((item) => (item[j] = 0));
  });

  return matrix;
};
// @lc code=end
