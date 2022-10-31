/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = [];

  for (let i = 1, t = 1; t <= n; i++) {
    t = i * i;
    dp[t] = 1;
  }

  // 递推 最小组合数
  // 0, 1, 2, 3, 1, 2,
  for (let i = 1; i <= n; i++) {
    if (dp[i] !== 1) {
      dp[i] = i;
      for (let j = 1; j < i; j++) {
        dp[i] = Math.min(dp[j] + dp[i - j], dp[i]);
      }
    }
  }

  return dp[n];
};
// @lc code=end
