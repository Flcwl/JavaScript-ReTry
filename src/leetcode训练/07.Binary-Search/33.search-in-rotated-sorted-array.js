/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const mid = (l + r) >> 1;
    const midVal = nums[mid];

    if (target === midVal) return mid;
    // nums = [4,5,6,7.8.9,0,1,2], target = 2

    // 左边还是单调递增
    if (nums[l] <= midVal) {
      if (nums[l] === target) {
        return l;
      } else if (nums[l] < target && target < midVal) {
        // 在左区间，则继续缩小范围，否则跳变到另一区域
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      console.log(1);
      // 4 6 0 1
      if (nums[r] === target) {
        return r;
      } else if (midVal < target && target < nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return nums[l] === target ? l : -1;
};
// @lc code=end
console.log(search([5, 1, 2], 2));
