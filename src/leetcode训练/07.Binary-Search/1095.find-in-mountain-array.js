/*
 * @lc app=leetcode id=1095 lang=javascript
 *
 * [1095] Find in Mountain Array
 */

// @lc code=start
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
  const len = mountainArr.length();

  let l = 0;
  let r = len - 1;
  // find Peek
  while (l < r) {
    const mid = (l + r) >> 1;
    // 0 2 1
    // 0 2 3
    if (mountainArr.get(mid) <= mountainArr.get(mid + 1)) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  const peek = l;

  l = 0;
  r = peek;
  // 优先找到最小的坐标（存在相同值）
  while (l < r) {
    const mid = (l + r) >> 1;

    if (mountainArr.get(mid) < target) {
      l = mid + 1;
    } else if (mountainArr.get(mid) > target) {
      r = mid - 1;
    } else {
      // 放到最后，为了找到最左边的
      return mid;
    }
  }

  if (mountainArr.get(l) === target) {
    return l;
  }

  // [1 5 2]  2
  l = peek + 1;
  r = len - 1;
  // 逆序找到最小的
  while (l <= r) {
    const mid = (l + r) >> 1;
    // 5 4 3
    if (mountainArr.get(mid) > target) {
      l = mid + 1;
    } else if (mountainArr.get(mid) < target) {
      r = mid - 1;
    } else {
      return mid;
    }
  }

  if (mountainArr.get(l) === target) {
    return l;
  }

  return -1;
};
// @lc code=end
