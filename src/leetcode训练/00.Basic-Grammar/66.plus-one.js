/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let c = 1;
  let i = 0;

  digits.reverse();

  while (c > 0) {
    const sum = (digits[i] || 0) + c;
    digits[i] = sum % 10;
    c = sum >= 10 ? 1 : 0;
    i++;
  }

  digits.reverse();
  return digits;
};
// @lc code=end
