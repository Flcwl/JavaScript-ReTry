/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // 1 0 3 12
  // 1 3 12 0

  let zeroIndex = 0
  let t

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== zeroIndex) {
        // swap
        t = nums[zeroIndex]
        nums[zeroIndex] = nums[i]
        nums[i] = t
      }

      // 1 0 0 3 1 12
      //   z
      // 1 3 0 0 1 12
      //      z
      // 1 3 1 0 0 12
      //        z
      // 1 3 1 12 0 0
      // 后面必然是 0，因为不是 0 的已经被 i 移到前面去了
      zeroIndex++
    }
  }
};
// @lc code=end
