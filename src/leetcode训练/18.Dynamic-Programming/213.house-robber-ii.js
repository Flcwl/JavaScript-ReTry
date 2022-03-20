/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // 环状房子：分解成 2 个子问题
  // 偷第一个房子
  // 不偷第一个房子
  if (nums.length < 2) return nums[0]

  const _rob = (nums) => {
    if (nums.length < 2) return nums[0]

    let ans = Math.max(nums[0], nums[1])
    const dp = [nums[0], ans] // 先手动推导

    for (let i = 2; i < nums.length; i++) {
      // dp 公式
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])

      ans = Math.max(ans, dp[i])
    }

    return ans
  }

  const nums1 = nums.concat()
  nums1.pop()
  const nums2 = nums.concat()
  nums2.shift()
  return Math.max(_rob(nums1), _rob(nums2))
};
// @lc code=end
