/*
 * @lc app=leetcode id=264 lang=javascript
 *
 * [264] Ugly Number II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let i2 = 0
  let i3 = 0
  let i5 = 0

  const dp = [1]

  //                1
  //    2         3         5
  // 2 3 5    2 3 5   2 3 5
  // 4 6 10  6 9 15  10 15 25
  for (let i = 1; i < n; i++) {
    // 注意每个状态数只计算一轮乘 2、3、5 得到新的数。
    const ret2 = dp[i2] * 2
    const ret3 = dp[i3] * 3
    const ret5 = dp[i5] * 5

    dp[i] = Math.min(ret2, ret3, ret5)

    // 三个非 else if，去重

    if (dp[i] === ret2) {
      i2++
    }

    if (dp[i] === ret3) {
      i3++
    }

    if (dp[i] === ret5) {
      i5++
    }
  }

  return dp[n - 1]
};
// @lc code=end

// let ret = [];
// // 1
// // 2 3 5
// // 4 6 10 | 9 15 | 25
// // 8 12 20 | 18 30 | 50 | 18 27 | 45 | 75 | 50 75 125
// const n = 30000;
// for (let a = 1; a < n; a *= 5) {
//   for (let b = a; b < n; b *= 3) {
//     for (let c = b; c < n; c *= 2) {
//       ret.push(c);
//     }
//   }
// }

// console.log(ret);
