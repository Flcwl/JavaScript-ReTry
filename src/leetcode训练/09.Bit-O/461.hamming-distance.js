/*
 * @lc app=leetcode id=461 lang=javascript
 *
 * [461] Hamming Distance
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  // 异或 得出不同 bit 位合并后的值，然后求出 1 的个数，即差异结果
  let t = x ^ y
  let ret = 0

  while (t) {
    if (t % 2 === 1) {
      ret++
    }

    t = t >> 1
  }

  return ret

  // 利用 toString 转二进制
  // return (x ^ y).toString(2).split('').filter((c) => c === '1').length
};
// @lc code=end
