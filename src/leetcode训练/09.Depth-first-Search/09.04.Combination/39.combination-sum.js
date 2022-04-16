/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const ret = []

  const tRet = []

  const dfs = (n, sum) => {
    if (sum > target) return
    if (sum === target) {
      ret.push([...tRet])
      return
    }

    // i 从 n 开始，剪枝
    for (let i = n; i < candidates.length; i++) {
      const val = candidates[i]
      tRet.push(val)
      dfs(i, sum + val)
      tRet.pop()
    }
  }

  dfs(0, 0)

  return ret
};
// @lc code=end
