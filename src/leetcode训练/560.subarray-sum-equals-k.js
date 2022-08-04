/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // https://www.bilibili.com/video/BV1tP4y1K7Kb

  // 注意是连续的，并且数可能是负的

  // dp 标识可构成前缀和 j 的 subArray 个数
  // dp[j] = dp[j - k] + 1

  let result = 0;

  const mp = new Map();
  mp.set(0, 1); // 差值为 0 情况下算一种组合

  let prefixSum = 0;
  for (let i = 0; i < nums.length; i++) {
    // sum(i, j) = prefixSum[j] - prefixSum[i] === k

    prefixSum += nums[i];
    const diff = prefixSum - k;
    result += mp.get(diff) || 0;

    mp.set(prefixSum, (mp.get(prefixSum) || 0) + 1);
  }

  return result;

  // // 前缀和 计算 sum[i][j] = prefixSum[j] - prefixSum[i]
  // const prefixSum = [0]
  // nums.forEach((num, idx) => {
  //   prefixSum[idx + 1] = prefixSum[idx] + num
  // })

  // let result = 0
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j <= nums.length; j++) {
  //     const target = prefixSum[j] - prefixSum[i]
  //     if (target === k) {
  //       result++
  //     }
  //   }
  // }
  // return result
};
// @lc code=end
