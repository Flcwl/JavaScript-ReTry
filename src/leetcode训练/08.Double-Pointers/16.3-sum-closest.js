/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  // 3 <= nums.length <= 1000
  nums = nums.sort((a, b) => a - b)
  let ret = Infinity
  let diff = Infinity
  // 4数之和接近 0
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    const base = nums[i]

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[left] + nums[right] + base
      if (sum > target) {
        right--
        // 找到diff最小的，即最接近 target 值的
        if (sum - target < diff) {
          ret = sum
          diff = sum - target
        }
      } else if (sum < target) {
        left++
        if (target - sum < diff) {
          ret = sum
          diff = target - sum
        }
      } else {
        // 如果和target相等，那毫无疑问必然是最接近的，直接返回结果
        return target
      }
    }
  }
  return ret
};
// @lc code=end
