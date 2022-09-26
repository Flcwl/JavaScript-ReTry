/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  // 0111: 7
  // 0010: 2
  // 1001: 9
  while (b !== 0) {
    // 进位
    const c = (a & b) << 1;
    a = a ^ b;
    b = c;
  }

  return a;
};
// @lc code=end
