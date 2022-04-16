/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  // 返回所有组合，首先排序方便剪枝
  nums.sort()

  const ret = []
  const tRet = []

  const dfs = (n) => {
    ret.push(tRet.concat())

    for (let i = n; i < nums.length; i++) {
      tRet.push(nums[i])
      dfs(i + 1)
      tRet.pop()

      // 移除重复
      while (nums[i + 1] === nums[i] && i < nums.length) {
        i++
      }
    }
  }

  dfs(0)

  return ret
};
// @lc code=end
