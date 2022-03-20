/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 先 dp 前缀最小值
  // 然后遍历一遍找到差值最大的
  let ans = 0
  const dp = [prices[0]]

  for (let i = 1; i < prices.length; i++) {
    dp[i] = Math.min(prices[i], dp[i - 1])

    ans = Math.max(ans, prices[i] - dp[i])
  }

  return ans
};
// @lc code=end
