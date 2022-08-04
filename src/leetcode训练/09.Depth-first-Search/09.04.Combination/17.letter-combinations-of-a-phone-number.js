/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];

  const mp = [
    null,
    null,
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];

  const ret = [];

  const tRet = [];

  const dfs = (n) => {
    if (n >= digits.length) {
      ret.push(tRet.join(""));
      return;
    }

    const str = mp[digits[n]];
    for (let i = 0; i < str.length; i++) {
      tRet[n] = str[i];
      dfs(n + 1);
    }
  };

  dfs(0);

  return ret;
};
// @lc code=end
