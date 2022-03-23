/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // nums1 = [1,3], nums2 = [2]
  // 法1：暴力
  let p1 = 0
  let p2 = 0
  let mergedNums = []
  let len3 = nums1.length + nums2.length

  const middle = (len3 >> 1)

  while (mergedNums.length <= middle && mergedNums.length < len3) {
    if (p1 < nums1.length && p2 < nums2.length) {
      if (nums1[p1] <= nums2[p2]) {
        mergedNums.push(nums1[p1++])
      } else {
        mergedNums.push(nums2[p2++])
      }
    } else {
      while (p1 < nums1.length && mergedNums.length <= middle) {
        mergedNums.push(nums1[p1++])
      }

      while (p2 < nums2.length && mergedNums.length <= middle) {
        mergedNums.push(nums2[p2++])
      }

      break
    }
  }

  if (((len3) & 1) === 1) {
    return mergedNums[mergedNums.length - 1]
  }

  return (mergedNums[mergedNums.length - 1] + mergedNums[mergedNums.length - 2]) / 2
};
// @lc code=end
