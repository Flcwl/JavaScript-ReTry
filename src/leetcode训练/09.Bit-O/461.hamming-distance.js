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
  let t = x ^ y
  let ret = 0

  while (t) {
    if (t % 2 === 1) {
      ret++
    }

    t = t >> 1
  }

  return ret
};
// @lc code=end
