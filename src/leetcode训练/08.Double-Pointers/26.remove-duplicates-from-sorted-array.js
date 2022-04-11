/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let handledIndex = 0

  // nums.length > 1
  for (let i = 1; i < nums.length; i++) {
    // 因为是有序的，所以直接和前一个已处理的数比较即可
    if (nums[i] !== nums[handledIndex]) {
      handledIndex++
      nums[handledIndex] = nums[i]
    }
  }

  return handledIndex + 1
};
// @lc code=end
