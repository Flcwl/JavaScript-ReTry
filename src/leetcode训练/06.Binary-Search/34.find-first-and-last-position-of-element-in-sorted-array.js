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

  let l = 0;
  let r = nums.length - 1;

  if (target < nums[l] || target > nums[r]) {
    return ret;
  }

  while (l < r) {
    let mid = (r + l) >> 1;

    if (target <= nums[mid]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  if (nums[l] === target) {
    ret[0] = l;
  }

  l = 0;
  r = nums.length - 1;
  while (l < r) {
    let mid = ((r + l) >> 1) + 1;
    if (target >= nums[mid]) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }

  if (nums[l] === target) {
    ret[1] = l;
  }

  return ret;
};
// @lc code=end

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
