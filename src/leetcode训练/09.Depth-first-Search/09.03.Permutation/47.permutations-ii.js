/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  // 重复序列中求全排列
  nums.sort((a, b) => a - b);

  let ret = [];
  let tRet = [];
  let visited = [];

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

        // 当前 n 的位置重复的数值就不再设置了
        // 重复的只 dfs 当前层一次
        while (i + 1 < nums.length && nums[i + 1] === nums[i]) i++;
      }
    }
  };

  dfs(0);
  return ret;
};
// @lc code=egnd
