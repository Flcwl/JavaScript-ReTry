/*
 * @lc app=leetcode id=368 lang=javascript
 *
 * [368] Largest Divisible Subset
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  // https://www.youtube.com/watch?v=hrwP6I5v1XY

  nums.sort((a, b) => a - b);

  const n = nums.length
  const countDP = [] // 约数个数
  const parentDP = [] // 最大约数下路径

  for (let i = 0; i < n; i++) {
    // 至少包含自身一个数，因此起始长度为 1，由自身转移而来
    let count = 1, parent = i;

    for (let j = 0; j < i; j++) {
      // 存在整除关系，更新对应的「最大长度」&「从何转移而来」
      // j 的约束也必然是 i 的约束
      // x x x x j x x i
      if (nums[i] % nums[j] == 0) {
        if (countDP[j] + 1 > count) {
          count = countDP[j] + 1;
          // 记忆路径
          parent = j;
        }
      }
    }

    // 记录「最大长度」&「从何转移而来」
    countDP[i] = count;
    parentDP[i] = parent;
  }

  // 遍历所有的 f[i]，取得「最大长度」和「对应下标」
  let max = -1, idx = -1;
  for (let i = 0; i < n; i++) {
    if (countDP[i] > max) {
      idx = i;
      max = countDP[i];
    }
  }

  console.log(nums, countDP, parentDP, idx, max);

  // 回溯出具体路径
  const ret = []
  while (ret.length !== max) {
    ret.push(nums[idx])
    idx = parentDP[idx]
  }

  return ret;
};
// @lc code=end


console.log(largestDivisibleSubset([1, 2, 4, 8, 16]));
