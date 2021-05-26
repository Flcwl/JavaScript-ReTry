/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals = intervals.sort((prev, next) => {
    return prev[0] - next[0]
  })

  let ret = []
  let start = 10e4 + 1
  let end = -1

  // [[1,3],[2,6],[8,10],[15,18]]
  for (let i = 0; i < intervals.length; i++) {
    start = intervals[i][0] // 8
    end = intervals[i][1] // 10

    // 处理排序后的数组，对于重叠的 item 取 end 的最大值
    while (intervals[i + 1] && intervals[i + 1][0] <= end) {
      end = Math.max(end, intervals[i + 1][1])
      console.log(end);
      i++
    }

    ret.push([start, end])
  }

  return ret
};
console.log(
  merge([[1, 3], [2, 6], [8, 10], [15, 18]])

);
