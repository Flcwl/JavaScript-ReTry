/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const mp = new Map()

  // 记忆化递归
  const dfs = (str) => {
    if (str === '') return true
    if (mp.has(str)) return mp.get(str)

    for (let i = 0; i < wordDict.length; i++) {
      const word = wordDict[i]
      // 遇到单词，则递归尝试拆分
      if (str.startsWith(word)) {
        const result = dfs(str.slice(word.length))

        // 假设可拆分，则缓存结果并结束，避免再次递归查找
        if (result) {
          mp.set(str, true)
          return true
        }
      }
    }

    mp.set(str, false)
    return false
  }

  return dfs(s)
};
// @lc code=end



// var wordBreak = function (s, wordDict) {
// dp 记录可拆分索引，默认 0 开始，也表示可拆分起点
//   const dp = new Array(s.length + 1).fill(false);
//   dp[0] = true;
//   for (let i = 0; i <= s.length; i++) {
//     if (dp[i] ) {
//       for (let word of wordDict) {
//         if (s.slice(i, i + word.length) === word) {
//           dp[i + word.length] = true;
//         }
//       }
//     }
//   }
//   return dp[s.length];
// };
