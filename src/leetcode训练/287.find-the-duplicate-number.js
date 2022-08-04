/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // 找到其中有且只有一个重复的数字
  const len = nums.length;

  let left = 0;
  let right = len - 1;

  // 根据题意，数组中 1 ~ n 每个数都会出现，并且有一个重复
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    // console.log(mid, left, right);
    // https://blog.csdn.net/qq_17550379/article/details/83893104

    let count = 0;
    // 1 2 3 3
    nums.forEach((num) => {
      if (num <= mid) count++;
    });
    if (count <= mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
// @lc code=end
