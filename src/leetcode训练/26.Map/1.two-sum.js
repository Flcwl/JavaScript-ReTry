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
    // for (var i = 0; i < nums.length; i++) {
    //   const leftIndex = nums.lastIndexOf(target - nums[i])
    //   if (leftIndex !== -1 && leftIndex !== i) {
    //     return [i, leftIndex];
    //   }
    // }
    // return []

    const numsMap = new Map();

    for (var i = 0; i < nums.length; i++) {
      const leftIndex = numsMap.get(target - nums[i])
      if (leftIndex !== undefined) {
        return [leftIndex, i]
      }
      numsMap.set(nums[i], i)
    }
};
// @lc code=end
