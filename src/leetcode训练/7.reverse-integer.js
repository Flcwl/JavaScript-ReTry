/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const arr = [];
  let mark = 1;

  if (x < 0) {
    mark = -1;
    x = -x;
  }

  while (x) {
    arr.push(x % 10);
    x = Math.floor(x / 10);
  }

  let ret = 0;
  let c = 1;

  for (let i = arr.length - 1; i >= 0; --i) {
    ret += c * arr[i];
    c *= 10;
  }

  return ret > 2 ** 31 ? 0 : ret * mark;
};
// @lc code=end
