/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const { length } = nums
  let l = 0
  let r = length - 1
  let t

  for (let i = 0; i < length;) {
    t = nums[i]

    if (t === 0 && i > l) {
      // 把 0 放在前面，然后 0 的位置长度 + 1
      if (t !== nums[l]) {
        ;[nums[i], nums[l]] = [nums[l], t]
      }
      ++l
    } else if (t === 2 && i < r) {
      // 把 2 放在前面，然后 2 的位置长度 - 1
      if (t !== nums[r]) {
        ;[nums[i], nums[r]] = [nums[r], t]
      }
      --r
    } else {
      ++i
    }
  }
};
// @lc code=end

// 根据出现次数存放 0 1 2
// let num0 = 0; let num1 = 0; let num2 = 0;
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] == 0) {
//     nums[num2++] = 2;
//     nums[num1++] = 1;
//     nums[num0++] = 0;
//   } else if (nums[i] == 1) {
//     nums[num2++] = 2;
//     nums[num1++] = 1;
//   } else {
//     nums[num2++] = 2;
//   }
// }
