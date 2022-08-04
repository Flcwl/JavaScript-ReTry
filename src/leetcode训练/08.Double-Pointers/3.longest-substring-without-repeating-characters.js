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
var lengthOfLongestSubstring = function (s) {
  // 最大连续非重子序
  let maxLen = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    let j = start;
    let repeatedIndex = -1;

    while (j < i) {
      if (ch === s[j]) {
        repeatedIndex = j;
        break;
      }
      j++;
    }

    if (repeatedIndex === -1) {
      // i 作为窗口右边界
      maxLen = Math.max(maxLen, i - start + 1);
    } else {
      // 更新窗口左边界
      start = repeatedIndex + 1;
    }
  }

  return maxLen;
};
// @lc code=end
