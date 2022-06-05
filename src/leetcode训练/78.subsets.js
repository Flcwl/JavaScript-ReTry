/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // const result = []
  // const seq = []
  // const dfs = (i) => {
  //   if (i === nums.length) {
  //     result.push(seq.concat())
  //     return
  //   }

  //   dfs(i + 1)
  //   seq.push(nums[i])
  //   dfs(i + 1)
  //   seq.pop()
  // }

  // dfs(0)

  // return result

  // https://www.bilibili.com/video/BV14r4y1q7iV
  // 每个位置的数要么取，要么不取，可以映射为 2 进制排列，总共个数为 2^n
  const result = []
  const count = 1 << nums.length
  for (let mask = 0; mask < count; mask++) {
    const subsets = []
    // 对应 mask 二进制为一个 subset
    for (let j = 0; j < nums.length; j++) {
      // j 表示第几个二进制位
      const bit = 1 << j
      if (mask & bit) {
        subsets.push(nums[j])
      }
    }
    result.push(subsets)
  }
  return result
};
// @lc code=end

