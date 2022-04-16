/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  // 组合题
  const ret = [];
  const tRet = []

  const dfs = (start) => {
    if (tRet.length === k) {
      ret.push(tRet.concat());
      return
    }

    for (let i = start; i <= n; i++) {
      tRet.push(i)
      dfs(i + 1)
      tRet.pop()
    }
  }

  dfs(1)
  return ret
};
// @lc code=end
