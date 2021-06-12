/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const arr = s.split("");
  const mp = new Map();
  let ret = 0;

  arr.forEach((item) => {
    const cnt = mp.get(item) || 0;

    if (cnt === 1) {
      ret += 2;
    }

    mp.set(item, (cnt + 1) % 2);
  });

  ret += arr.length > ret ? 1 : 0;

  return ret;
};
// @lc code=end
