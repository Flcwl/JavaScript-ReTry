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
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    const tRet = s.slice(left + 1, right);

    if (tRet.length > ret.length) {
      ret = tRet;
    }
  };

  for (let i = 0; i < s.length; i++) {
    // aaaa
    findPalindrome(i - 1, i);
    // aba
    findPalindrome(i - 2, i);
  }

  return ret;
};
// @lc code=end
