/*
 * @lc app=leetcode id=1143 lang=javascript
 *
 * [1143] Longest Common Subsequence
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  // 维护 text1 和 text2 索引前的最大公共树
  const dp = new Array(text1.length)
    .fill(null)
    .map(() => new Array(text2.length).fill(0));
  // text1 = "abcde", text2 = "ace"
  //     a  c  e
  // a   1  1  1
  // b   1  1  1
  // c   1  2  2
  // d   1  2  2
  // e   1  2  3

  dp[0][0] = text1[0] === text2[0] ? 1 : 0;

  for (let i = 1; i < text1.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], text1[i] === text2[0] ? 1 : 0);
  }

  for (let i = 1; i < text2.length; i++) {
    dp[0][i] = Math.max(dp[0][i - 1], text1[0] === text2[i] ? 1 : 0);
  }

  for (let i = 1; i < text1.length; i++) {
    for (let j = 1; j < text2.length; j++) {
      dp[i][j] = Math.max(
        dp[i - 1][j],
        dp[i][j - 1],
        dp[i - 1][j - 1] + (text1[i] === text2[j] ? 1 : 0)
      );
    }
  }

  return dp[text1.length - 1][text2.length - 1];
};
// @lc code=end
