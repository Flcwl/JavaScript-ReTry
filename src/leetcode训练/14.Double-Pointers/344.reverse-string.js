/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    // 双指针彼此交换
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
};
// @lc code=end
