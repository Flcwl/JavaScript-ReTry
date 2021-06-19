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

  const d = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let r = 0;
  const ret = [];

  const dfs = (i, j) => {
    const val = matrix[i][j];
    ret.push(val);
    // 标记为 visited
    matrix[i][j] = undefined;
    // 遍历完，结束递归
    if (ret.length === len) return;

    // 最多转折 1 次
    for (let l = 0; l < 2; ++l) {
      let nextI = i + d[r][0];
      let nextJ = j + d[r][1];

      // 越界，转换方向
      if (!matrix[nextI] || matrix[nextI][nextJ] === undefined) {
        r = (r + 1) % 4;
      } else {
        dfs(nextI, nextJ);
        break;
      }
    }
  };

  dfs(0, 0);

  return ret;
};
// @lc code=end
