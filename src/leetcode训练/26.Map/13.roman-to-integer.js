/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const mp = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let ret = 0;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const nextCh = s[i + 1];

    if (mp[ch]) {
      // 组合式
      if (mp[nextCh] > mp[ch] && mp[nextCh]) {
        ret += mp[nextCh] - mp[ch];
        i++;
      } else {
        ret += mp[ch];
      }
    }
  }

  return ret;
};
// @lc code=end
