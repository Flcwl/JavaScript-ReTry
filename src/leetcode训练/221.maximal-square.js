/*
 * @lc app=leetcode id=221 lang=javascript
 *
 * [221] Maximal Square
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length
  const cellY = '1'

  // 维护dp[i][j] 到右下角的所能得到的最大正方形边长
  const dp = new Array(m).fill(null).map(
    () => new Array(n).fill(0)
  )

  // 最大边长
  let max = 0

  // 边界可以扩充 dp[m+ 1][n + 1] 外层范围，初始化为 0，从而实现自动处理边界
  dp[m - 1][n - 1] = matrix[m - 1][n - 1] === cellY ? 1 : 0
  max = Math.max(max, dp[m - 1][n - 1])

  for (let i = n - 2; i >= 0; i--) {
    dp[m - 1][i] = matrix[m - 1][i] === cellY ? 1 : 0
    max = Math.max(max, dp[m - 1][i])
  }

  for (let i = m - 2; i >= 0; i--) {
    dp[i][n - 1] = matrix[i][n - 1] === cellY ? 1 : 0
    max = Math.max(max, dp[i][n - 1])
  }

  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      if (matrix[i][j] === cellY) {
        // 测试最大矩形（长\宽\对角所能构成的正方形最大边长）
        dp[i][j] = Math.min(dp[i][j + 1], dp[i + 1][j], dp[i + 1][j + 1]) + 1
        max = Math.max(max, dp[i][j])
      }
    }
  }

  return max * max
};
// @lc code=end


