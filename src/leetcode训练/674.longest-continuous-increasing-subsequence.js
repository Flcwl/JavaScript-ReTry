/*
 * @lc app=leetcode id=674 lang=javascript
 *
 * [674] Longest Continuous Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  const result = [1]
  let ans = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      result[i] = result[i - 1] + 1
      ans = Math.max(result[i], ans)
    } else {
      result[i] = 1
    }
  }

  return ans
};
// @lc code=end
