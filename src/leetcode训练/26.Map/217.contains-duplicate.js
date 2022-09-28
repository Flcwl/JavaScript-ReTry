/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const mp = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (mp.has(num)) {
      return true;
    }
    mp.set(num, true);
  }

  return false;
};
// @lc code=end
