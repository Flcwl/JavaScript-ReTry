/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 三种边界：相离、相交、包含
  intervals.sort((a, b) => {
    // 按照 start 从小到大
    // 如果 start 相同时，则排序 end 从大到小
    return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0];
  });

  let prev = intervals[0];
  let ret = [prev];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];

    // 经过排序，后面的必然大于等于前面的
    // 如果 start 在之前的起始中间，则取两个 end 的最大值

    // 相离
    if (interval[0] > prev[1]) {
      ret.push(interval);
      prev = interval;
    } else if (interval[0] <= prev[1]) {
      // 相交或包含
      prev[1] = Math.max(interval[1], prev[1]);
    }
    // 相同起点，直接跳过
  }

  return ret;
};
// @lc code=end

// console.log(
//   merge([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18]
//   ])
// );
