/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0
  let right = numbers.length - 1;

  while (left < right) {
    const v = target - numbers[left]
    while (numbers[right] > v) {
      right--
    }

    if (numbers[right] === v) {
      if (right !== left) {
        return [left + 1, right + 1]
      } else {
        return []
      }
    } else {
      left++
    }
  }
  return []
};
// @lc code=end
