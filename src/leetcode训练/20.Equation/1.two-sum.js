/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const mp = new Map()
  let t

  for (let i = 0; i < nums.length; i++) {
    // 利用等式原则，a + b === target
    // 缓存 + 遍历找到 b = target - a
    t = target - nums[i]
    if (mp.has(t)) {
      return [mp.get(t), i]
    } else {
      mp.set(nums[i], i)
    }
  }

  return []
};
// @lc code=end
