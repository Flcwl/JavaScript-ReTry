/*
 * @lc app=leetcode id=403 lang=javascript
 *
 * [403] Frog Jump
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
  const dp = {}
  stones.forEach((v) => { dp[v] = [] })
  dp[0] = [0]
  dp[1] = [1]

  let index = 1

  while (index < stones.length) {
    const unit = stones[index]
    const ks = dp[unit]
    index++

    for (let i = 0; i < ks.length; i++) {
      // 上一次跨度 k，下一次跨度为 k、k -1、k + 1
      const k = ks[i];

      if (dp[unit + k] && dp[unit + k].indexOf(k) === -1) {
        dp[unit + k].push(k);
      }

      const k1 = k + 1
      if (dp[unit + k1] && dp[unit + k1].indexOf(k1) === -1) {
        dp[unit + k1].push(k1);
      }

      const k2 = k - 1
      if (k2 !== 0 && dp[unit + k2] && dp[unit + k2].indexOf(k2) === -1) {
        dp[unit + k2].push(k2);
      }
    }
  }

  return dp[stones[stones.length - 1]].length > 0
};
// @lc code=end
