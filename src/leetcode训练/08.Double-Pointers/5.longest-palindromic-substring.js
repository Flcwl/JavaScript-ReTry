/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let ret = s[0];

  const findPalindrome = (left, right) => {
    while (s[left] === s[right] && left >= 0 && right <= s.length) {
      left--;
      right++;
    }

    const t = s.slice(left + 1, right);

    if (t.length > ret.length) {
      ret = t;
    }
  };

  for (let i = 1; i < s.length; i++) {
    // aaaa
    findPalindrome(i - 1, i);
    // aaa
    findPalindrome(i - 2, i);
  }

  return ret;
};
// @lc code=end
