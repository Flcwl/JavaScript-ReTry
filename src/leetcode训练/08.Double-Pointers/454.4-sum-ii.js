/*
 * @lc app=leetcode id=454 lang=javascript
 *
 * [454] 4Sum II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const getTwoSum = (sums1, sums2, mp) => {
    // 无需去重，保证所有组合
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        const sum = sums1[i] + sums2[j]

        let count = mp.get(sum) || 0
        mp.set(sum, count + 1)
      }
    }
  }

  const mp12 = new Map()
  const mp34 = new Map()

  getTwoSum(nums1, nums2, mp12)
  getTwoSum(nums3, nums4, mp34)

  let ret = 0
  mp12.forEach((count, sum) => {
    const count34 = mp34.get(-sum)
    if (count34 > 0) {
      ret += (count34 * count)
    }
  })

  return ret
};
// @lc code=end
