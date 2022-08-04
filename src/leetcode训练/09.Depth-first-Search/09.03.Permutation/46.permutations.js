/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // 非重复序列找全排列
  const ret = [];
  const tRet = [];
  const visited = [];

  const dfs = (n) => {
    if (n === nums.length) {
      ret.push(tRet.concat());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        tRet.push(nums[i]);
        visited[i] = true;
        dfs(n + 1);
        visited[i] = false;
        tRet.pop();
      }
    }
  };

  dfs(0);

  return ret;
};
// @lc code=end
