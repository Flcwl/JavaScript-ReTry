/*
 * @lc app=leetcode id=518 lang=javascript
 *
 * [518] Coin Change 2
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  // 不取也算一种策略结果
  if (amount === 0) return 1

  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1

  // 无序无限元素组合 （背包求组合问题）

  // 重复来源是一个面值出现在不同位置
  // 外层迭代 coins，这样保证顺序是固定的
  // 即每次拿取都是分别从 coins[i] 开始的，是唯一的
  //  [1,2,5] => 4
  // 1 x x
  // 2 x x
  // 5 x x
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i]
    for (let j = coin; j < dp.length; j++) {
      // 每次取 coin 硬币，然后看剩余金额复用之前的状态
      const leftAmount = j - coin
      // 刚好达标 amount，则策略个数 + 1
      const count = leftAmount > 0 ? dp[leftAmount] : 1
      dp[j] = dp[j] + count
    }
  }

  return dp[amount]
};
// @lc code=end
