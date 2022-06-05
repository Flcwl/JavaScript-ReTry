/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // // 排序后 majority 必占用一般长度
  // nums.sort((a, b) => a - b)
  // return nums[nums.length >> 1]

  // 常数级空间复杂度
  // 出现次数大于总数1/2，那么这个数只有一个，且根据题意必存在
  // 摩尔投票法：对拼抵消，最后必胜最后一票 majority

  // https://www.zhihu.com/question/49973163/answer/477886752
  // 证明：
  // 首先，可以证明最终不会一个数字都不剩。
  // 原因： 假设两两抵消之后，最终一个数字都不剩。那么就是说一共有偶数个数字，
  // 假设有n个，那么n = 2k，k是整数。所以是进行了k次两两抵消。
  // 又因为一定存在众数 (数量超过⌊n/2⌋ = k的数字 )，所以该众数出现次数至少为k+1。
  // 由抽屉原理，这就会导致前面两两抵消的某一对数字是一样的。这是矛盾的。
  // 所以这就证明了最终不会一个数字都不剩，至少剩下一个。
  //
  // 假设最终剩下的那一种数字是a，假设前面进行了k次两两抵消。
  // 要证明a是欲求的众数，即证明其他数字不可能是众数。
  // 由于抽屉原理，在前面抵消的数字中，同一种数字最多出现k次，即是除了a之外的数字最多出现k次。
  // 而且最终至少剩下一个数字，所以数字的总数量大于等于2k+1。
  // 那么除了a之外的数字出现的频率<= k/(2k+1) < k/2k = 1/2，
  // 所以证明了除了a之外的数字均不会是众数。那么就是说最终剩下的那种数字a是所求众数。

  let count = 0
  let result
  nums.forEach((num) => {
    if (count === 0) {
      result = num
    }

    if (num === result) {
      ++count
    } else {
      --count
    }
  })

  return result
};
// @lc code=end
