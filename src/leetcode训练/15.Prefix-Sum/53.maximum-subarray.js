/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // nums 长度至少为 1
  let ret = nums[0];
  let sum = ret;
  const len = nums.length;

  for (let i = 1, t; i < len; ++i) {
    t = nums[i];

    // [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    // [-2, -1]

    // 默认累加
    // 但是如果 当前值都大于之前的累加和
    // 则直接废弃之前的累加结果，使用该值
    sum = Math.max(t, t + sum);

    // 记录最大累加和
    ret = Math.max(ret, sum);
  }
  return ret;
};

// @lc code=end
