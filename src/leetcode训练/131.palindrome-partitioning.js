/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  // 枚举每个分隔位置，获取所有方案

  // 先dp[i][j] 得到判断 i 到 j 是否回文的标识

  const dp = new Array(s.length).fill(null).map(
    () => new Array(s.length).fill(false)
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

  const result = []
  const path = []

  // https://www.bilibili.com/video/BV1J34y1E7hU
  // dfs 回溯得到所有方案的路径
  const dfs = (n) => {
    if (n >= s.length) {
      result.push(path.concat())
      return
    }

    // 以 n 为起点尝试进行分隔，从 0 直到 s.length
    for (let i = n; i < s.length; i++) {
      if (dp[n][i]) {
        path.push(s.slice(n, i + 1))
        dfs(i + 1)
        path.pop()
      }
    }
  }

  dfs(0)

  return result
};
// @lc code=end

