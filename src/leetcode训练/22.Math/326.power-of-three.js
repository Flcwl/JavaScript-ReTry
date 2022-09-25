/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) return false;

  while (n > 1) {
    if (n % 3 === 0) {
      n = Math.floor(n / 3);
    } else {
      return false;
    }
  }

  return n === 1;
};
// @lc code=end
