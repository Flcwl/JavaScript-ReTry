/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let lastJumpIndex = nums.length - 1;

  for (let i = lastJumpIndex - 1; i >= 0; --i) {
    // 贪心：动态调整终点位置，从终点向前推进都能到达
    if (nums[i] + i >= lastJumpIndex) {
      lastJumpIndex = i;
    }
  }
  return lastJumpIndex === 0;
};
// @lc code=end
