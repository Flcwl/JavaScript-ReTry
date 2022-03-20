/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length < 2) return nums[0]

  let ans = Math.max(nums[0], nums[1])
  const dp = [nums[0], ans] // 先手动推导

  for (let i = 2; i < nums.length; i++) {
    // dp 公式
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])

    ans = Math.max(ans, dp[i])
  }

  return ans
};
// @lc code=end

// console.log(
//   rob([2, 1, 1, 2])
// );
