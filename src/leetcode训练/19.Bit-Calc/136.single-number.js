/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 异或排除法
  let result = 0
  nums.forEach((item) => {
    result ^= item
  })

  return result
};
// @lc code=end

