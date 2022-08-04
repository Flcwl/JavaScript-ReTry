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
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + ((right - left) >> 1);
    const midVal = nums[mid];

    if (midVal === target) return mid;
    // nums = [4,5,6,7.8.9,0,1,2], target = 2

    // 左边是单调递增
    // 3 4 0 1
    if (nums[left] <= midVal) {
      if (nums[left] === target) return left;

      if (nums[left] < target && target < midVal) {
        // 在左区间，则继续缩小范围，否则跳变到另一区域
        right = mid - 1;
        left = left + 1;
      } else {
        left = mid + 1;
      }
    } else {
      // 右边是单调递增
      // 3 4 0 1 2
      if (nums[right] === target) return right;
      if (nums[right] > target && target > midVal) {
        left = mid + 1;
        right = right - 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return nums[left] === target ? left : -1;
};
// @lc code=end
console.log(search([5, 1, 2], 2));
