/*
 * @lc app=leetcode id=1207 lang=javascript
 *
 * [1207] Unique Number of Occurrences
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const a = new Map();
  const b = Array(1000).fill(0);

  arr.forEach((val) => {
    a.set(val, (a.get(val) || 0) + 1);
  });

  a.forEach((t) => {
    b[t]++;
  });

  return !b.some((val) => val > 1);
};
// @lc code=end
