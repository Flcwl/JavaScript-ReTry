/*
 * @lc app=leetcode id=846 lang=javascript
 *
 * [846] Hand of Straights
 */

// @lc code=start
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
  // 分组 连续的的 groupSize 张牌的顺子成一组
  const mp = new Map();
  hand.forEach((num) => {
    mp.set(num, (mp.get(num) || 0) + 1)
  })

  // 从小到大预处理
  const keys = [...mp.keys()].sort((a, b) => a - b)

  for (let i = 0; i < keys.length;) {
    // 1, 2, 3
    const start = keys[i]
    const startCount = mp.get(start)
    if (startCount > 0) {
      mp.set(start, startCount - 1)

      for (let j = 1; j < groupSize; j++) {
        const num = keys[i] + j
        const count = mp.get(num)
        if (typeof count === 'number' && count > 0) {
          mp.set(num, count - 1)
        } else {
          return false
        }
      }
    } else {
      // 向后查找下一个 start 然后成组
      i++
    }
  }

  return true
};
// @lc code=end
