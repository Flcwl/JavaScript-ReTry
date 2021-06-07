/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let ret = 0;
  let end = nums.length - 1;

  const dfs = (p, t) => {
    if (p > end) {
      if (t === target) {
        ret++;
      }

      return;
    }

    const val = nums[p];

    dfs(p + 1, t + val);
    dfs(p + 1, t - val);
  };

  dfs(0, 0);
  return ret;
};
// @lc code=end

console.log(findTargetSumWays([2, 1], 1));
