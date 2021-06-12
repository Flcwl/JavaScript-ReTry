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

  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    // 进行 非字母排除
    while (l < s.length && !isAlpha(s[l])) l++;
    while (r > -1 && !isAlpha(s[r])) r--;

    // 先判断是否跨界，避免在非字母排除时位置溢出
    if (l >= r) {
      return true;
    }

    // 两个指针指向不相等，则表明非回文
    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    } else {
      // 否则一直加到底，遍历完整个字符串
      l++;
      r--;
    }
  }

  return true;
};
// @lc code=end
