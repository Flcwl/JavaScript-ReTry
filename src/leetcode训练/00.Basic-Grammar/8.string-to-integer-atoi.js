/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const isNumeric = (ch) => {
    const code = ch.charCodeAt() - "0".charCodeAt();
    return code >= 0 && code <= 9;
  };

  let ret = "";
  let sign = 1;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch === "-" || ch === "+" || isNumeric(ch)) {
      if (ch === "-") {
        sign = -1;
        i++;
      } else if (ch === "+") {
        i++;
      }

      while (i < s.length && isNumeric(s[i])) {
        ret += s[i];
        i++;
      }

      break;
    } else if (ch !== " ") {
      ret += "0";
      break;
    }
  }

  return Math.min(Math.max(-2147483648, sign * ret), 2147483647);
};
// @lc code=end
