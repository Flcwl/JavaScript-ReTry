/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  return x ** n;
};
// @lc code=end
