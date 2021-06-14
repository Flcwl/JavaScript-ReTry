/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) {
    return x;
  }
  let l = 1;
  let r = x >> 1;
  let t;
  // 1 2 3 4
  while (l < r) {
    const mid = (l + r) >> 1;
    t = mid * mid;

    if (t === x) {
      return mid;
    } else if (t > x) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  if (l * l > x) {
    return l - 1;
  }
  return l;
};
// @lc code=end
