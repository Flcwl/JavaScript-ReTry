/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((prev, next) => {
    // 按照 start 从小到大
    // 如果 start 相同时，则排序 end 从大到小
    return prev[0] === next[0] ? next[1] - prev[1] : prev[0] - next[0];
  });

  let prev = intervals[0];
  let ret = [prev];
  let t;

  for (let i = 1; i < intervals.length; ++i) {
    t = intervals[i];

    // 经过排序，后面的必然大于等于前面的
    // 如果 start 在之前的起始中间，则取两个 end 的最大值
    if (prev[0] === t[0]) {
      continue;
    } else if (t[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], t[1]);
    } else {
      ret.push(t);
      prev = t;
    }
  }

  return ret;
};
// console.log(
//   merge([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18]
//   ])
// );
