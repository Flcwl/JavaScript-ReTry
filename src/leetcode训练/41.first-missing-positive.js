/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var firstMissingPositive = function (nums) {
  // 都是整数，可以为负，找到最小的缺失的正整数
  // https://www.bilibili.com/video/BV1aL4y137MK

  // 从 1 开始占坑，索引 i 对应位数为 i + 1
  // 1. nums 占满了前 n 个数，取 n + 1 作为缺失数
  // 2. nums 无法占满前 n 个数，取第一个空位作为缺失数

  const n = nums.length

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    // [3, 4, -1, 1]
    // [-1, 4, 3, 1]
    // [-1, 1, 3, 4]
    // [1, -1, 3, 4]

    // 可以占位
    while (nums[i] >= 1 && nums[i] <= n) {
      // 将 nums[i] 放置在 第 nums[i] - 1 位置上占位
      const swapIndex = nums[i] - 1
      if (nums[i] === nums[swapIndex]) break
      // 交换
      const temp = nums[i]
      nums[i] = nums[swapIndex]
      nums[swapIndex] = temp
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) return i + 1
  }

  return n + 1
};
// @lc code=end

