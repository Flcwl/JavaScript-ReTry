/*
 * @lc app=leetcode id=1300 lang=javascript
 *
 * [1300] Sum of Mutated Array Closest to Target
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
  // 找到阈值的那根线
  // 如果总和必然小于等于target，则数组中最大值即为阈值
  // 如果总和大于 target，则分如下情况
  // 如果阈值处理后总和大于 target，则阈值线降
  // 如果阈值处理后总和小于 target，则阈值线升

  let max = 0;
  const sum = arr.reduce((prev, cur) => {
    max = Math.max(max, cur);
    return prev + cur;
  }, 0);

  if (sum <= target) {
    return max;
  }

  const getMax = (threshold) => {
    return arr.reduce((prev, cur) => {
      return prev + (threshold > cur ? cur : threshold);
    }, 0);
  };

  let l = 1;
  let r = target;
  let ret = 0;
  while (l <= r) {
    const mid = (l + r) >> 1;
    const s = getMax(mid);

    if (s === target) {
      return mid;
    } else if (s < target) {
      l = mid + 1;
    } else if (s > target) {
      r = mid - 1;
    }
  }

  const closest1 = getMax(l);
  const closest2 = getMax(l - 1);

  // 如果相同则返回最小的
  return Math.abs(closest1 - target) >= Math.abs(closest2 - target) ? l - 1 : l;
};
// @lc code=end
