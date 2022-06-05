/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  // https://www.bilibili.com/video/BV1xv4y1A7zk

  // dp 二维矩阵表示 i 到 j 是否为回文
  // dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j] // 推导公式
  // dp[i][i] = true // 单字母 baseCase
  // dp[i][i+ 1] = s[i] === s[i + 1] // 双字母 baseCase

  //    a  b  a
  // a 1  x  x
  // b 0  1  x
  // a 1  0  1
  const dp = new Array(s.length).fill(null).map(
    (_, index) => new Array(s.length).fill('x')
  )

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true
  }

  for (let i = 0; i < s.length - 1; i++) {
    dp[i][i + 1] = s[i] === s[i + 1]
  }

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 2; j < s.length; j++) {
      dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]
    }
  }

  let result = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (dp[i][j] === true) {
        result++
      }
    }
  }

  return result
};
// @lc code=end


// console.log(countSubstrings('fdsklf'));

//  1  1  x
// x  1  1
// x x  1
