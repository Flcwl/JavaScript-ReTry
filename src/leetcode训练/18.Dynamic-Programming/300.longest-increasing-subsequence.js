/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const n = nums.length
  // 维护前缀增长子序集合数
  const dp = new Array(n).fill(1)
  let ans = 1

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    ans = Math.max(dp[i], ans)
  }

  return ans
};
// @lc code=end

// [10,9,2,5,3,4,7,101,18]
// 2 3 4 7 101

// 10 9 2 2 2 2 2 2 2
// 1  1  1  2 2
