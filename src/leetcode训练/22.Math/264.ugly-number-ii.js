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
var nthUglyNumber = function (n) {};
// @lc code=end

// nthUglyNumber(10);

// let ret = [];
// // 1
// // 2 3 5
// // 4 6 10 | 9 15 | 25
// // 8 12 20 | 18 30 | 50 | 18 27 | 45 | 75 | 50 75 125
// n = 3000000000;
// for (let a = 1; a < n; a *= 5) {
//   for (let b = a; b < n; b *= 3) {
//     for (let c = b; c < n; c *= 2) {
//       ret.push(c);
//     }
//   }
// }
