/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  while (true) {
    if (m > 0 && n > 0) {
      if (nums1[m - 1] < nums2[n - 1]) {
        nums1[m + n - 1] = nums2[n - 1];
        n--;
      } else {
        nums1[m + n - 1] = nums1[m - 1];
        m--;
      }
    } else if (n > 0) {
      // 剩余nums2，拷贝
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    } else {
      break;
    }
  }
  return nums1;
};
// @lc code=end
