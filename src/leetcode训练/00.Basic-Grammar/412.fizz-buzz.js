/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const ret = [];
  for (let i = 0; i < n; i++) {
    ret[i] = "" + (i + 1);
  }

  for (let i = 2; i < n; i += 3) {
    ret[i] = "Fizz";
  }

  for (let i = 4; i < n; i += 5) {
    if (ret[i] === "Fizz") {
      ret[i] = ret[i] + "Buzz";
    } else {
      ret[i] = "Buzz";
    }
  }

  return ret;
};
// @lc code=end
