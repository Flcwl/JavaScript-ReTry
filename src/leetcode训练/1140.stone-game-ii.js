/*
 * @lc app=leetcode id=1140 lang=javascript
 *
 * [1140] Stone Game II
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
  if (piles.length < 3) {
    return piles.reduce((prev, cur) => prev + cur, 0)
  }

  const dp = [piles[0], piles[0] + piles[1]]
  let m = 1
  // let last = 1
  for (let i = 2; i < piles.length; i++) {
    const
    dp[i] = Math.max(

    )
  }
};
// @lc code=end

// 2 7 8 4 4
// M 1  alice 2 Bob 0
// M 1  alice 2  Bob 7 + 8
// M 1  alice 2 + 4 + 4  Bob 7 + 8

// M 1  alice 2 + 7 Bob 0
// M 2  alice 2 + 7  Bob 8 + 4 + 4
