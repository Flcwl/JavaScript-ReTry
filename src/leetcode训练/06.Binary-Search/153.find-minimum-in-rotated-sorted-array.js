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

var findMin2 = function(nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    // [11,13,15,17]
    if (nums[l] < nums[r]) {
      break;
    }

    const mid = (r + l) >> 1;

    // [4,5,6,7,8,0,1,2]
    // [6,7,0,1,2,3,4,5]
    if (nums[l] > nums[mid]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return nums[l];
};
