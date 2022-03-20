/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 下标 0 表示上第一个台阶策略数
  const dp = [1, 2]

  for (let i = 2; i < n; ++i) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n - 1]
};
// @lc code=end
