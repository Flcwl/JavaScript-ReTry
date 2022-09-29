/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  const say = (str) => {
    let last = 0;
    let ret = "";
    str += "#";
    // 322244
    for (let i = 0; i < str.length; i++) {
      if (str[last] != str[i]) {
        ret += i - last + str[last];
        last = i;
      }
    }
    return ret;
  };

  let ret = "1";

  while (--n) {
    ret = say(ret);
  }

  return ret;
};
// @lc code=end
