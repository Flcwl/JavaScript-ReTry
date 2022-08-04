/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // const regexp = /[a-zA-Z0-9]/;
  const isAlpha = (v) => {
    // return regexp.test(v);
    const code = v.charCodeAt();
    return (
      (code > 64 && code < 91) ||
      (code > 96 && code < 123) ||
      (code > 47 && code < 58)
    );
  };

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // 不是字母的排除并过滤
    while (left < s.length && !isAlpha(s[left])) {
      left++;
    }

    while (right >= 0 && !isAlpha(s[right])) {
      right--;
    }

    // 边界判断
    // 先判断是否跨界，避免在非字母排除时位置溢出
    if (left >= right) return true;

    // 字符相等判断
    if (s[left].toLowerCase() === s[right].toLowerCase()) {
      left++;
      right--;
    } else {
      // 两个指针指向不相等，则表明非回文
      return false;
    }
  }

  return true;
};
// @lc code=end
