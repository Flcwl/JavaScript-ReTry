/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = [0]
  let bit = [0]
  let bit1Count = 0

  for (let i = 1; i <= n; i++) {
    let j = 0
    let c = 1

    // 手动递推
    while (c) {
      // 进位
      if (bit[j] === 1) {
        bit[j] = 0
        c = 1
        bit1Count--
      } else {
        // 无需进位，结束
        bit[j] = 1
        c = 0
        bit1Count++
      }
      j++
    }

    result[i] = bit1Count
  }

  return result
};
// @lc code=end

