/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let ret = [-1, -1];
  if (target < nums[0] && target > nums[nums.length - 1]) return ret;

  let left = 0;
  let right = nums.length - 1;

  // 向左查找
  while (left < right) {
    const mid = left + ((right - left) >> 1); // 向左偏移 默认
    if (target <= nums[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  if (nums[left] === target) ret[0] = left;

  left = 0;
  right = nums.length - 1;

  // 向右查找
  while (left < right) {
    const mid = left + ((right - left) >> 1) + 1; // 向右偏移 +1
    if (target >= nums[mid]) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  if (nums[left] === target) ret[1] = left;

  return ret;
};
// @lc code=end

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
