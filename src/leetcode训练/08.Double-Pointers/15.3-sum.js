/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return []

  const ret = []
  const n = nums.length
  // 越小的数越排在前面
  // 这样 target = -nums[i] 是相当于大的在前面，算法才能保证有结果
  nums = nums.sort((a, b) => a - b)

  // https://leetcode.com/problems/3sum/discuss/1799912/Sneeit-Solution%3A-3Sum-with-Explanation
  // a + b = -c =  target
  for (let i = 0; i < n - 2 && nums[i] <= 0; i++) {
    // 之前已经作为target操作过了，这里就直接去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    const target = -nums[i]

    let left = i + 1
    let right = n - 1

    // 最小的数都大于 target，则无法实现 a + b === target
    // 不能等于 0, 0, 0
    if (nums[left] > target) {
      continue
    }

    while (left < right) {
      while (nums[left] + nums[right] > target) {
        right--
      }

      while (nums[left] + nums[right] < target) {
        left++;
      }

      if (left >= right) break

      // -1, -1, 0, 1
      // 遍历所有，穷举等于target的所有组合
      // 0 -2 -1 1 -2
      // [0, -2, 2]
      // [0, -1, 1]
      if (nums[left] + nums[right] === target) {
        ret.push([nums[left], nums[right], -target])

        left++;
        right--;
        while (nums[left] === nums[left - 1]) left++;
        while (nums[right] === nums[right + 1]) right--;
      }
    }
  }

  return ret
};
// @lc code=end

console.log(
  threeSum(
    [-1, 0, 1, 0]
    // [1, -1, -1, 0]
  )
);
