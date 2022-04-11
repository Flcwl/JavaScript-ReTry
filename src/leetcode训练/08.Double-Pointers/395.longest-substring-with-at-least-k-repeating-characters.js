/*
 * @lc app=leetcode id=395 lang=javascript
 *
 * [395] Longest Substring with At Least K Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  // 把出现次数小于 k 的都提取出来，作为分隔
  // ababcdec k = 2
  // ababc | c
  // abab | ''

  // 1. 计数
  const mp = new Map();
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    mp.set(ch, (mp.get(ch) || 0) + 1);
  }

  // 连续的，逐个遍历
  let ret = 0
  // 2. 分隔递归
  let start = 0
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (mp.get(ch) < k) {
      if (i - start >= k) {
        const nextS = s.slice(start, i)
        const len = longestSubstring(nextS, k)
        ret = Math.max(len, ret)
      }
      start = i + 1
    }
  }

  // bbaaacbd 3
  if (start === 0) {
    // 全部合法
    ret = Math.max(s.length, ret)
  } else {
    // 存在未处理（出现次数大于k，但可能是start之前出现的） ababacb 3
    if (s.length - start >= k) {
      const nextS = s.slice(start, s.length)
      const len = longestSubstring(nextS, k)
      ret = Math.max(len, ret)
    }
  }

  return ret
};
// @lc code=end
