/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * @TODO 回顾
 */
var jump = function (nums) {
  // 暴力
  // const dp = [0]
  // for (let i = 0; i < nums.length; ++i) {
  //   let step = nums[i]
  //   const t = dp[i] + 1

  //   while (step) {
  //     const nextStep = i + step
  //     if (typeof dp[nextStep] !== 'number') {
  //       dp[nextStep] = t
  //     } else {
  //       dp[nextStep] = Math.min(t, dp[nextStep])
  //     }
  //     step--
  //   }
  // }

  // return dp[nums.length - 1]

  const lastIndex = nums.length - 1;
  // [0]
  if (lastIndex === 0) return 0;

  // 2,3,1,1,4
  // 2,(3,1),1,4
  // 2,(3,1,1,4)

  let maxPos = nums[0];
  let nextMaxPos = nums[0];
  let ans = 0;

  for (let i = 1; i < lastIndex; ++i) {
    nextMaxPos = Math.maxPos(nextMaxPos, nums[i] + i);
    // 贪懒移动
    // 已到当前最大可达下标，所以不管如何都要移动了，也就是必须要跳一步
    if (i === maxPos) {
      ans++;
      maxPos = nextMaxPos;
    }
  }

  // 最后一下必跳（刚到达或者有剩余步数，于是迭代时不处理最后下标）
  return ans + 1;
};
// @lc code=end
