/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  const s0 = strs[0];
  for (let i = 0; i < s0.length; i++) {
    const ch = s0[i];

    for (let j = 1; j < strs.length; j++) {
      const sj = strs[j];

      if (sj[i] !== ch) {
        return sj.slice(0, i);
      }
    }
  }

  return s0;
};
// @lc code=end
