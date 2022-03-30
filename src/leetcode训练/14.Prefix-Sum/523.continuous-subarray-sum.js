/*
 * @lc app=leetcode id=523 lang=javascript
 *
 * [523] Continuous Subarray Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  // 1. 暴力 超时
  // const prefixModSum = [0]
  // for (let i = 0; i < nums.length; i++) {
  //   prefixModSum[i + 1] = prefixModSum[i] + (nums[i] % k)
  // }

  // for (let i = 2; i <= nums.length; i++) {
  //   for (let j = 0; j <= nums.length - i; j++) {
  //     const windowSum = prefixModSum[j + i] - prefixModSum[j]
  //     if (windowSum % k === 0) {
  //       return true
  //     }
  //   }
  // }
  // return false

  // 2. 数学推导 k 的倍数
  // 也就是 sum[a, b] % k === 0
  // 等价于 (prefixSum[a] - prefixSum[b]) % k === 0
  // 即：prefixSum[a] % k === prefixSum[b] % k

  const mp = new Map();
  let modeSum = 0

  for (let i = 0; i < nums.length; i++) {
    modeSum = (modeSum + nums[i]) % k
    // [23, 2, 4, 6, 6]   7
    //   2  4  1  0  6
    if (i > 0 && modeSum === 0) {
      return true
    }
    if (mp.has(modeSum)) {
      if (i - mp.get(modeSum) >= 2) {
        return true
      }
    } else {
    // 只缓存更新一次
      mp.set(modeSum, i)
    }
  }

  return false
};
// @lc code=end
