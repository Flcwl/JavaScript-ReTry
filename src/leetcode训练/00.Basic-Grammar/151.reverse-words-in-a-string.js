/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let ret = "";

  for (let i = s.length - 1; i >= 0; i--) {
    const ch = s[i];
    if (ch !== " ") {
      let right = i;
      while (right >= 0 && s[right] !== " ") {
        right--;
      }

      if (ret) {
        ret += " ";
      }
      // 把单词依次加入到结果字符串中
      ret += s.slice(right + 1, i + 1);

      i = right;
    }
  }

  return ret;
};
// @lc code=end
