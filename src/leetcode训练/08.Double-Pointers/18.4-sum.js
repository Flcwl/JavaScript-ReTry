/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return [];
  let ret = []
  nums = nums.sort((a, b) => a - b)
  // a + b + c + d = target
  for (var i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue

      const abSum = target - nums[i] - nums[j]

      let left = j + 1
      let right = nums.length - 1

      while (left < right) {
        if (nums[left] + nums[right] > abSum) {
          right--
        } else if (nums[left] + nums[right] < abSum) {
          left++
        } else {
          ret.push([nums[i], nums[j], nums[left], nums[right]])
          left++
          right--
          while (nums[left] === nums[left - 1]) left++;
          while (nums[right] === nums[right + 1]) right++;
        }
      }
    }
  }

  return ret
};
// @lc code=end

console.log(fourSum(
  [1, 0, -1, 0, -2, 2],
  0
))
