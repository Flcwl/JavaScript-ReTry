/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * 求交集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let minArr;
  let maxArr;

  if (nums1.length > nums2.length) {
    maxArr = nums1;
    minArr = nums2;
  } else {
    maxArr = nums2;
    minArr = nums1;
  }

  const mp = new Map();

  minArr.forEach((val) => {
    const count = mp.get(val) || 0;
    mp.set(val, count + 1);
  });

  const ret = [];
  for (let i = 0; i < maxArr.length; i++) {
    const val = maxArr[i];
    const count = mp.get(val) || 0;
    if (count > 0) {
      mp.set(val, count - 1);
      ret.push(val);
    }
  }
  return ret;
};
// @lc code=end
