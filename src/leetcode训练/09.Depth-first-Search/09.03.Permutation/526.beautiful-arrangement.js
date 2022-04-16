/*
 * @lc app=leetcode id=526 lang=javascript
 *
 * [526] Beautiful Arrangement
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
  // 求全排列，且满足一定条件的

  // 1 2 3
  // 3 2 1
  // 2 1 3
  const ret = [];
  const tRet = []
  const visited = []
  const dfs = (start) => {
    if (start === n + 1) {
      ret.push(tRet.concat())
      return
    }

    for (let i = 1; i <= n; i++) {
      // 整除条件
      if ((i % start) === 0 || (start % i) === 0) {
        if (!visited[i]) {
          tRet.push(i)
          visited[i] = true
          dfs(start + 1)
          visited[i] = false
          tRet.pop()
        }
      }
    }
  }

  dfs(1)

  return ret.length
};
// @lc code=end
