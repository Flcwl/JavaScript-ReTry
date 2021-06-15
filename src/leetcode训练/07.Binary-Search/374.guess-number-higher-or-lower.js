/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  // 1 <= n <= 2^(31 - 1)
  let l = 1;
  let r = n;

  while (l < r) {
    // 加法溢出
    // const mid = (l + r) >> 1;

    const mid = ((r - l) >> 1) + l;

    const t = guess(mid);

    if (t === 0) {
      // pick 中了
      return mid;
    }

    if (t < 0) {
      // pick 比 mid 小
      r = mid - 1;
    } else {
      // pick 比 mid 大
      l = mid + 1;
    }
  }

  // 猜到最后只剩一个数字，直接返回该结果
  return l;
};
// @lc code=end
