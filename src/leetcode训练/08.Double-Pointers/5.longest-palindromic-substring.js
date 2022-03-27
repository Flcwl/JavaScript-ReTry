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
var longestPalindrome = function(s) {
  let ret = s[0]
  const findPalindrome = (s, left, right) => {
    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        left--
        right++;
      } else {
        break
      }
    }

    const t = s.slice(left + 1, right)
    if (t.length > ret.length) {
      ret = t
    }
  }

  for (let i = 1; i < s.length; i++) {
    let right = i
    let left = i - 1

    // aaaa
    if (s[left] === s[right]) {
      findPalindrome(s, left, right)
    }

    left = i - 2
    // aaa
    if (s[right] === s[left]) {
      findPalindrome(s, left, right)
    }
  }

  return ret
};
// @lc code=end
