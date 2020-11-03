/*
 * @lc app=leetcode id=941 lang=javascript
 *
 * [941] Valid Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  const { length } = A;
  if (length < 3 || A[1] <= A[0]) return false;

  let ret = true; // 升
  let pre = A[1];

  for (let i = 2; i < length; i++) {
    const val = A[i];

    if (val === pre || (val > pre && !ret)) return false;

    if (val < pre && ret) {
      ret = false;
    }

    pre = val;
  }

  return !ret;
};
// @lc code=end
