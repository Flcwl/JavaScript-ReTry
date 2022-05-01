/*
 * @lc app=leetcode id=115 lang=javascript
 *
 * [115] Distinct Subsequences
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s1, s2) {
  // s2.length < s1.length
  const dp = new Array(s2.length).fill(null)
    .map(() => new Array(s1.length).fill(null))

  dp[0][0] = s1[0] === s2[0]

  for (let i = 1; i < s1.length; i++) {
    dp[0][i] = dp[0][i - 1] + (s1[i] === s2[0] ? 1 : 0)
  }

  for (let i = 1; i < s2.length; i++) {
    dp[i][i] = s1[i] === s2[i] ? dp[i - 1][i - 1] : 0
  }

  for (let i = 1; i < s2.length; i++) {
    for (let j = i + 1; j < s1.length; j++) {
      if (s1[j] === s2[i]) {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j - 1]
      } else {
        dp[i][j] = dp[i][j - 1]
      }
    }
  }

  return dp[s2.length - 1][s1.length - 1]
};
// @lc code=end

//       b  a  b  g  b  a  g
// b    1   1  2  2  3  3  3
// a    x  1  1   1   1  4  4 // 1ba + (3b => 3ba) = 4ba
// g    x  x  0  1   1  1  5

//      a  a  b  b
// a   1  2  2  2
// b   x 0  2  4
// b   x  x 0  2
