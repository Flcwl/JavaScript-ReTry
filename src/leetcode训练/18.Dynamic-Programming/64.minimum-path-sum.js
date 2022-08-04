/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function (grid) {
  // 从左上到右下带权路径最小和
  const n = grid.length;
  const m = grid[0].length;
  const dp = [[grid[0][0]]];

  // 初始化第一列
  for (let i = 1; i < n; i++) {
    const firstCol = grid[i][0] + dp[i - 1][0];
    dp[i] = [firstCol];
  }

  // 初始化第一行
  for (let i = 1; i < m; i++) {
    const firstRow = grid[0][i] + dp[0][i - 1];
    dp[0][i] = firstRow;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      const left = dp[i][j - 1];
      const top = dp[i - 1][j];
      dp[i][j] = Math.min(left, top) + grid[i][j];
    }
  }

  return dp[n - 1][m - 1];
};

// @lc code=end
