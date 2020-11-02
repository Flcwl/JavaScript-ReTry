/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const s = new Set(nums1)
  const ret = []
  nums2.forEach((v) => {
    if (s.has(v)) {
      ret.push(v)
    }
  })
  return Array.from(new Set(ret))
};
// @lc code=end

