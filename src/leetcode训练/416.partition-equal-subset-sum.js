/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  // 分成 2 part，求和相等
  // 相当于从 nums 中找到子序和为 sum / 2 即可返回 true

  const sum = nums.reduce((acc, cur) => (acc + cur), 0)

  // nums 都是正数，所以 sum 必须是偶数
  if (sum & 1 === 1) return false

  const halfSum = sum >> 1

  // https://www.bilibili.com/video/BV1DT4y1N7RS
  // 背包问题 dp[i][j] i 表示第几个物品，j 表示背包空间大小
  // i = 0 表示无物品
  // j = 0 表示无空间
  const dp = new Array(nums.length + 1).fill(null).map(
    () => new Array(halfSum + 1).fill(false)
  )

  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < halfSum + 1; j++) {
      // 背包大小为 0，不管有没有物品，直接不取
      if (j === 0) {
        dp[i][j] = true
        // 没装满，但是没有物品了
      } else if (i === 0) {
        dp[i][j] = false
      } else {
        if (nums[i - 1] > j) {
          // 装不下，直接不装
          dp[i][j] = dp[i - 1][j]
        } else {
          // 可装，不装或者使其刚好装下
          dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
        }
      }
    }
  }
  return dp[nums.length][halfSum]
};
// @lc code=end

