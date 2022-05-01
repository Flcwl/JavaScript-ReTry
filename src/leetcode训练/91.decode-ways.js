/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s.startsWith('0')) return 0

  const isTenValid = (ten, bit) => {
    ten = +ten
    bit = +bit

    if (ten > 2) {
      return false
    } else if (ten === 2) {
      return bit <= 6
    } else if (ten === 1) {
      return true
    }
    return false
  }

  const isSingleValid = (bit) => {
    bit = +bit
    return bit >= 1 && bit <= 9
  }

  // 维护前序中最大组成数
  const dp = [1]

  for (let i = 1; i < s.length; i++) {
    dp[i] = 0

    // 当前数可作为单独的字母，1 * dp[i - 1]
    // dp[i] 可以有跟 dp[i-1] 一样多的拆分情况
    if (isSingleValid(s[i])) {
      dp[i] += dp[i - 1]
    }

    // 和上一个数结合可作为单独的字母， 1 * dp[i - 2]
    // dp[i] 可以有跟 dp[i-2] 一样多的拆分情况
    if (isTenValid(s[i - 1], s[i])) {
      dp[i] += (dp[i - 2] === undefined ? 1 : dp[i - 2])
    }
  }

  return dp[s.length - 1]
};
// @lc code=end
