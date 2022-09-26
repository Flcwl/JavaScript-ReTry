/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend === 0 || divisor === 0) return 0;
  // 特例
  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  const isSame = dividend > 0 === divisor > 0;
  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);

  let ret = 0;
  let count = 1;
  let base = divisor;

  // 模拟除法：位运算以 2 速算
  while (dividend >= base) {
    ret += count;
    dividend -= base;

    // 这里是有 `dividend>>1` 替代 `base<<1`，避免越界
    if (dividend >> 1 < base) {
      count = 1;
      base = divisor;
    } else {
      base = base << 1;
      count = count << 1;
    }
  }

  return isSame ? ret : -ret;
};
// @lc code=end
