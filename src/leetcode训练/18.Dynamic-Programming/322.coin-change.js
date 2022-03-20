/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount < 1) return 0

  coins.sort((a, b) => a - b)
  // 3 5 => 11
  // 1 2 5 => 11
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    // 二维 dp，压缩一维（只用最小值）
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j]
      if (coin > i) break
      // 只取一枚，剩余的使用之前的缓存状态
      const leftAmount = i - coin
      dp[i] = Math.min(dp[i], 1 + dp[leftAmount])
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};
// @lc code=end

console.log(coinChange([474, 83, 404, 3], 264));
