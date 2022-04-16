/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const mp = [null, null, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const ret = []

  const tRet = []
  // n 表示当前下标
  const dfs = (n) => {
    if (n === digits.length) {
      if (tRet.length > 0) {
        ret.push(tRet.join(''))
      }
      return
    }
    const curStr = mp[digits[n]]
    for (let i = 0; i < curStr.length; i++) {
      tRet[n] = curStr[i]
      dfs(n + 1)
    }
  }

  dfs(0)

  return ret
};
// @lc code=end
