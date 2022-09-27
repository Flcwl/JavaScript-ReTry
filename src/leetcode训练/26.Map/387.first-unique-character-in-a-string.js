/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const mp = new Map();

  for (var i = 0; i < s.length; i++) {
    const ch = s[i];
    mp.set(ch, (mp.get(ch) || 0) + 1);
  }

  for (var i = 0; i < s.length; i++) {
    const ch = s[i];
    if (mp.get(ch) === 1) {
      return i;
    }
  }

  return -1;
};
// @lc code=end
