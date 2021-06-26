/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  // 找到第一个坏的版本
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // 根据题意，必有坏的版本
    let l = 1;
    let r = n;

    // 1, 2, 3
    // 第一个坏的之后都是坏的，所以当遇到不坏的时候，坏的必然在右边
    while (l < r) {
      // 数值范围超限
      const mid = l + Math.floor((r - l) / 2);
      if (isBadVersion(mid)) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }

    return l;
  };
};
// @lc code=end
