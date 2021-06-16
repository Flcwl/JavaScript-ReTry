/*
 * @lc app=leetcode id=852 lang=javascript
 *
 * [852] Peak Index in a Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr 非重复元素数组
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let l = 0;
  let r = arr.length - 1;
  let ret;

  while (l < r) {
    const mid = (l + r) >> 1;

    // 找到山峰
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return mid;
    }

    // 还在往上爬
    if (arr[mid] < arr[mid + 1]) {
      l = mid + 1;
    } else {
      // 往下坡路走
      r = mid - 1;
    }
  }

  return l;
};
// @lc code=end
