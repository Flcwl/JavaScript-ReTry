/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  // 前置条件，nums 的长度大于 1
  const ret = nums
    .map(v => v + '')
    .sort((prev, next) => (prev + next > next + prev ? -1 : 1))

  // 判断都是 0 的情况 eg: [0, 0]
  return ret[0] === '0' ? '0' : ret.join('')
};
// @lc code=end

console.log(largestNumber([3, 30, 34, 5, 9]));
