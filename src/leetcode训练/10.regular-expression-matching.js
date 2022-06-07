/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // 1. 字母
  // 2. .
  // 3. 字母*
  // 4. .*
  // 5. *  当成普通字母

  // 根据题意，p 需要完全匹配整个字符串 s
  const dig = (sIndex, pIndex) => {
    // 匹配遍历结束，则字符串匹配完才表示匹配成功
    if (pIndex >= p.length) return sIndex >= s.length

    // 当前首字符匹配到
    const match = sIndex < s.length && (s[sIndex] === p[pIndex] || p[pIndex] === '.')
    // 1. 连续匹配 * 规则
    if (pIndex + 1 < p.length && p[pIndex + 1] === '*') {
      // 匹配该字符，结束 * 匹配
      // 匹配该字符，不结束 * 匹配
      return dig(sIndex, pIndex + 2) || (match && dig(sIndex + 1, pIndex))
    } else {
      // 2. 普通匹配下一个规则
      return match && dig(sIndex + 1, pIndex + 1)
    }
  }

  // https://www.bilibili.com/video/BV13441117i4
  return dig(0, 0)
};
// @lc code=end
