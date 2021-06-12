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
  // 鉴于限定是字母，可以使用数组进行优化查询
  const mp = new Map();
  let ret = 0;

  arr.forEach((item) => {
    const cnt = mp.get(item) || 0;

    // 查找偶数时，即表示可以拼凑回文
    if (cnt === 1) {
      ret += 2;
    }

    mp.set(item, (cnt + 1) % 2);
  });

  // 多余的个数字母 直接使用一个，表示位于中间
  ret += arr.length > ret ? 1 : 0;

  return ret;
};
// @lc code=end
