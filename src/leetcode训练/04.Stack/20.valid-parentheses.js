/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const d = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let i = 0, ch; i < s.length; ++i) {
    ch = s[i];

    switch (ch) {
      case "}":
      case ")":
      case "]":
        if (ch !== stack.pop()) {
          return false;
        }
        break;
      default:
        stack.push(d[ch]);
        break;
    }
  }

  // 如果栈里面还存在没判定的先括号，则说明不匹配
  return stack.length === 0;
};
// @lc code=end
