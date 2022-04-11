/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 最大连续非重子序
  let ret = 0
  let left = 0

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    let j = left
    let repeated = -1
    // 查找窗口，可以使用map优化
    while (j < i) {
      if (s[j] === ch) {
        repeated = j
        break
      }
      j++
    }

    // 过去 left 到 i 这个窗口都不重复
    if (repeated === -1) {
      ret = Math.max(ret, i - left + 1);
    } else {
      left = repeated + 1
    }
  }

  return ret
};
// @lc code=end
