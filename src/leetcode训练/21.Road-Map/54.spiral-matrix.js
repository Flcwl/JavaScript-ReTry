/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const len = m * n;

  const result = [];

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let dir = 0;

  const dfs = (x, y) => {
    result.push(matrix[x][y]);
    matrix[x][y] = undefined;

    if (result.length === len) return;

    for (let i = 0; i < 2; i++) {
      const nextX = x + directions[dir][0];
      const nextY = y + directions[dir][1];

      if (!matrix[nextX] || matrix[nextX][nextY] === undefined) {
        dir = (dir + 1) % 4;
      } else {
        dfs(nextX, nextY);
        break;
      }
    }
  };

  dfs(0, 0);

  return result;
};
// @lc code=end
