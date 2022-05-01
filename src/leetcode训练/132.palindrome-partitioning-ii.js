/*
 * @lc app=leetcode id=132 lang=javascript
 *
 * [132] Palindrome Partitioning II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  // 求最小分区（连续回文区）数
  // https://www.acwing.com/solution/LeetCode/content/227/

  // 回文判断矩阵（右上角）
  const palindromeDP = new Array(s.length).fill(null)
    .map((_, i) => new Array(s.length).fill(0))

  // 维护 i, j 是否为回文串
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      const diff = j - i
      // 边界条件处理
      if (diff === 0) {
        palindromeDP[i][j] = true
      } else if (Math.abs(diff) === 1) {
        palindromeDP[i][j] = s[i] === s[j]
      } else {
        // 状态转移
        palindromeDP[i][j] = s[i] === s[j] && palindromeDP[i + 1][j - 1]
      }
    }
  }

  // abba
  // 1 0 0 1
  // x 1 1 0
  // x x 1 0
  // x x x 1

  // 维护 0 到 j 的子串最小分堆数（不包括 j）
  const cupDP = new Array(s.length + 1).fill(Infinity);
  cupDP[0] = 0

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (palindromeDP[i][j]) {
        cupDP[j + 1] = Math.min(cupDP[j + 1], cupDP[i] + 1)
      }
    }
  }

  return cupDP[s.length] - 1
};
// @lc code=end
