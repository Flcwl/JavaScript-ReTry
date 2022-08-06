/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  // 1 2 3
  // 4 5 6
  // 7 8 9

  // 对角线交换： 1 5 9 为线
  for (let i = 0; i < n; i++) {
    const m = matrix[i].length;
    for (let j = i; j < m; j++) {
      swap(matrix, [i, j], [j, i]);
    }
  }
  // 1 4 7
  // 2 5 8
  // 3 6 9

  // 垂直左右交换： 4 5 6 为线
  for (let i = 0; i < n; i++) {
    const m = matrix[i].length;
    const halfM = m >> 1;
    for (let j = 0; j < halfM; j++) {
      swap(matrix, [i, j], [i, m - 1 - j]);
    }
  }

  // 7 4 1
  // 8 5 2
  // 9 6 3

  function swap(matrix, [x, y], [a, b]) {
    const temp = matrix[x][y];
    matrix[x][y] = matrix[a][b];
    matrix[a][b] = temp;
  }
};
// @lc code=end
