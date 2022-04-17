/*
 * @lc app=leetcode id=826 lang=javascript
 *
 * [826] Most Profit Assigning Work
 */

// @lc code=start
/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
  // 贪心问题，找到每个工人所能做的价值最高的事情
  // 注意：难度越大不一定收益越大

  const profitMp = {}
  for (let i = 0; i < difficulty.length; i++) {
    // 任务难度可能相同，对同难度我们选择收益更大的任务
    if (profitMp[difficulty[i]] === undefined || profitMp[difficulty[i]] < profit[i]) {
      profitMp[difficulty[i]] = profit[i]
    }
  }

  // 前缀极大值
  difficulty.sort((a, b) => a - b)

  for (let i = 1; i < difficulty.length; i++) {
    profitMp[difficulty[i]] = Math.max(
      profitMp[difficulty[i - 1]],
      profitMp[difficulty[i]]
    )
  }

  // const binarySearch = (left, right, target) => {
  //   if (left > right) return null
  //   const mid = left + ((right - left) >> 1)

  //   const r = binarySearch(mid + 1, right, target)
  //   if (r !== null) return r

  //   if (difficulty[mid] <= target) return difficulty[mid]

  //   return binarySearch(left, mid - 1, target)
  // }

  const binarySearch = (arr, left, right, target) => {
    while (left <= right) {
      const mid = left + ((right - left) >> 1)

      if (arr[mid] > target) {
        right = mid - 1
      } else if (arr[mid] === target) {
        return mid
      } else {
        left = mid + 1
      }
    }

    if (arr[left] === target) {
      return left
    }

    // 返回小于 target 但索引位置最靠近 target 的
    return left - 1
  }

  let ret = 0
  console.log(difficulty);
  for (let i = 0; i < worker.length; i++) {
    const index = binarySearch(difficulty, 0, difficulty.length - 1, worker[i])
    if (index >= 0 && index < difficulty.length) {
      ret += profitMp[difficulty[index]]
    }
  }

  return ret
};
// @lc code=end
