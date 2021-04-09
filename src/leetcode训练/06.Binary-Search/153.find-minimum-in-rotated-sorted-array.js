/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  const len = nums.length;

  let l = 0;
  let r = len - 1;

  if (nums[l] <= nums[r]) {
    return nums[l];
  }

  while (l < r) {
    if (nums[l] > nums[l + 1]) {
      return nums[l + 1];
    }

    if (nums[r] < nums[r - 1]) {
      return nums[r];
    }

    l++;
    r--;
  }

  return nums[l];
};
// @lc code=end
