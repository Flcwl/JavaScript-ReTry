/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const happy = new Array(10).fill(0).map((_, index) => index * index);

  const visitMap = new Map();

  while (!visitMap.has(n)) {
    visitMap.set(n, true);

    let sum = 0;

    while (n > 0) {
      const t = n % 10;
      sum += happy[t];
      n = Math.floor(n / 10);
    }

    if (sum === 1) {
      return true;
    }

    n = sum;
  }

  return false;
};
// @lc code=end
