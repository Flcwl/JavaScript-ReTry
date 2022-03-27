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
  for (var i = 0; i < nums.length; i++) {
    const v = target - nums[i]
    const index = nums.lastIndexOf(v)
    if (index !== -1 && index !== i) {
      return [i, index]
    }
  }
  return []
};

// var twoSum = function(nums, target) {
//   const mp = new Map()
//   let t

// hashMap 存储，减少查询
//   for (let i = 0; i < nums.length; i++) {
//     t = target - nums[i]
//     if (mp.has(t)) {
//       return [mp.get(t), i]
//     } else {
//       mp.set(nums[i], i)
//     }
//   }

//   return []
// };
// @lc code=end

console.log(
  twoSum(
    [3, 2, 4],
    6
  )
);
