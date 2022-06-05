/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // https://www.bilibili.com/video/BV1Rz4y1Z7hx
  const n = nums.length
  // n 长度起码 >= 2，才会有排列的可能
  if (n < 2) return nums

  // 4 2 3 1 => 4 3 1 2
  // 从后往前，获取出现非逆序的位置（表示可以交换得到下一个全排列）
  // 得到 x = 1
  let x = n - 2
  while (x >= 0 && nums[x] >= nums[x + 1]) {
    x--
  }

  // 全逆序，即为最后一个全排列，返回顺序排列
  if (x < 0) return reverse(nums, 0, nums.length - 1)

  // 得到 y = 2
  let y = n - 1
  while (y > x && nums[y] <= nums[x]) {
    y--
  }

  // console.log('[ x, y ] >', x, y)

  // 4 1 3 2
  swap(nums, x, y)
  reverse(nums, x + 1, nums.length - 1)

  function swap(nums, i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp;
  }

  function reverse(nums, left, right) {
    while (left < right) {
      swap(nums, left, right);
      left++
      right--
    }
  }
};
// @lc code=end

// nextPermutation([4, 2, 3, 1])
