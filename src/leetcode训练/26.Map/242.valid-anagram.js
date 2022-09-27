/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const calcUniqueId = (str) => {
    const chars = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      const code = ch.charCodeAt() - 97;
      chars[code] += 1;
    }
    return chars.join();
  };

  return calcUniqueId(s) === calcUniqueId(t);
};
// @lc code=end
