/*
 * @lc app=leetcode id=354 lang=javascript
 *
 * [354] Russian Doll Envelopes
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 * TODO: 超时
 */
var maxEnvelopes = function(envelopes) {
  // 由 示例2 可得出 同尺寸信封只会被当做一个
  envelopes = envelopes
  // .map(item => {
    // 允许旋转信封
    // if (item[0] > item[1]) {
    // return [item[1], item[0]]
    // }
  //   return item
  // })
    .sort((a, b) => {
      const diff = a[0] - b[0]
      if (diff === 0) {
        // return a[1] - b[1]
        return b[1] - a[1]
      }
      return diff
    })

  const dp = new Array(envelopes.length).fill(1)
  let ans = 1

  // 检查 b 在 a 里面，返回 true
  const isInside = (a, b) => {
    // if (a[0] === b[0] && a[1] === b[1]) {
    // return false
    // }
    return a[0] > b[0] && a[1] > b[1]
  }

  for (let i = 1; i < envelopes.length; i++) {
    for (let j = 0; j < i; j++) {
      if (isInside(envelopes[i], envelopes[j])) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    ans = Math.max(ans, dp[i])
  }

  return ans
};
// @lc code=end
