/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // https://www.bilibili.com/video/BV1dY4y1H7eL

  // dp：每个值都当做根节点进行构造搜索二叉树
  // f(n) = f(1) + f(2) + ... + f(n)
  // f(i) = f(i - 1) * f(i + 1)

  const dp = [1, 1]

  for (let i = 2; i <= n; i++) {
    dp[i] = 0
    for (let j = 1; j <= i; j++) {
      // 左右子树构造树个数相乘，得到以i为根节点的构造树个数
      dp[i] += (dp[j - 1] * dp[i - j])
    }
  }

  return dp[dp.length - 1]
};
// @lc code=end

