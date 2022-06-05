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
  const n = matrix.length
  for (let i = 0; i < n; i++) {
    const m = matrix[i].length
    for (let j = i; j < m; j++) {
      swap(matrix, [i, j], [j, i])
    }
  }
  // 1 4 7
  // 2 5 8
  // 3 6 9

  for (let i = 0; i < n; i++) {
    const m = matrix[i].length
    const halfM = m >> 1
    for (let j = 0; j < halfM; j++) {
      swap(matrix, [i, j], [i, m - 1 - j])
    }
  }

  function swap(matrix, [x, y], [a, b]) {
    const temp = matrix[x][y]
    matrix[x][y] = matrix[a][b]
    matrix[a][b] = temp
  }
};
// @lc code=end

