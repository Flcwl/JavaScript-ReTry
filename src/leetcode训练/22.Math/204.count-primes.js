/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n < 2) return 0;

  const nonPrimes = new Array(n);
  let ret = 0;
  for (let i = 2; i < n; i++) {
    if (nonPrimes[i]) continue;

    ret++;

    // 非质数由质数组成
    for (let j = i * i; j < n; j += i) {
      nonPrimes[j] = true;
    }
  }

  return ret;
};
// @lc code=end
