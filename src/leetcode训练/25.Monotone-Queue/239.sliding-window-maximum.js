/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const result = []

  // 单调递减队列
  let queue = []

  for (let i = 0; i < nums.length; i++) {
    // 队首作为最大值需要判断是否出 k 范围，及时移出
    while (queue.length > 0 && queue[0] <= i - k) {
      queue.shift()
    }

    // 每次队首都是当前 k 范围的最大值
    while (queue.length > 0 && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop()
    }

    queue.push(i)

    // 达到范围 k，才开始统计窗口最大值
    if (i + 1 >= k) {
      result.push(nums[queue[0]])
    }
  }

  return result
};
// @lc code=end
