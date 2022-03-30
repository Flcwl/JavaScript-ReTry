/*
 * @lc app=leetcode id=1031 lang=javascript
 *
 * [1031] Maximum Sum of Two Non-Overlapping Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */

var maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
  const prefixSum = [0]
  for (let i = 0; i < nums.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i]
  }

  let ret = -Infinity
  for (let i = 0; i <= nums.length - firstLen; i++) {
    const firstSum = prefixSum[i + firstLen] - prefixSum[i]
    for (let j = 0; j <= i - secondLen; j++) {
      const secondSum = prefixSum[j + secondLen] - prefixSum[j]
      ret = Math.max(secondSum + firstSum, ret)
    }

    for (let j = i + firstLen; j <= nums.length - secondLen; j++) {
      const secondSum = prefixSum[j + secondLen] - prefixSum[j]
      ret = Math.max(secondSum + firstSum, ret)
    }
  }
  return ret
}
// @lc code=end
