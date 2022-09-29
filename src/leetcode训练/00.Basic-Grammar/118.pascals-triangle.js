/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const ret = [];
  for (let i = 0; i < numRows; i++) {
    ret[i] = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      ret[i][j] = ret[i - 1][j - 1] + ret[i - 1][j];
    }
  }

  return ret;
};
// @lc code=end
