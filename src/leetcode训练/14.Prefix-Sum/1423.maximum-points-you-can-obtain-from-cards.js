/*
 * @lc app=leetcode id=1423 lang=javascript
 *
 * [1423] Maximum Points You Can Obtain from Cards
 */

// @lc code=start
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  if (cardPoints.length <= k) {
    return cardPoints.reduce((acc, cur) => {
      return acc + cur;
    }, 0)
  }
  // [1,2,3,4,5,6,1] 3
  //    5 6 1 1 2 3
  // 0 5 11 12 13 15 18
  //          12  8  4  6

  // 1. 将后 k 个 和前 k 个数组合成一个数值
  // 2. 以 k 为窗口依次滑动计算 k 和最大值
  const list = [].concat(
    cardPoints.slice(cardPoints.length - k)
  ).concat(
    cardPoints.slice(0, k)
  )

  const prefixSum = [0]
  list.forEach((v, index) => {
    prefixSum[index + 1] = prefixSum[index] + v
  })

  let ret = 0
  for (let i = k; i < prefixSum.length; i++) {
    ret = Math.max(ret, prefixSum[i] - prefixSum[i - k])
  }
  return ret

  // 法 2 左右前缀和，然后求k窗口滑动最大和
  // Example: cards = [1,2,3,4,5,6,1], K = 3
  // leftSum = [0,1,3,6,10,15,21,22]
  // rightSum = [0,1,7,12,16,19,21,22]
  // K = 3

  // (3,0) => score = leftSum[3] + rightSum[0] = 6 + 0 = 6
  // (2,1) => score = leftSum[2] + rightSum[1] = 3 + 1 = 4
  // (1,2) => score = leftSum[1] + rightSum[2] = 1 + 7 = 8
  // (0,3) => score = leftSum[0] + rightSum[3] = 0 + 12 = 12 // Max

  // 法3
  // 新窗口的和 = 前一个窗口的和 + 新进入窗口的值 - 移出窗口的值
};
// @lc code=end

console.log(maxScore([1, 1000, 1], 1));
