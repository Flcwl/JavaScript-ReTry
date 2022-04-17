/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const mp = new Map();

  const getUID = (s) => {
    const char = new Array(26).fill(0);
    for (let i = 0; i < s.length; ++i) {
      const ch = s[i];
      // 根据题意，字符是小写
      char[ch.charCodeAt() - 97]++;
    }
    // 如果是空字符串，则都26个都为 0
    return char.join(",");
  };

  for (let i = 0; i < strs.length; ++i) {
    const s = strs[i];
    const id = getUID(s);

    let group = mp.get(id);
    if (!group) {
      group = [];
      mp.set(id, group);
    }

    group.push(s);
  }

  const ret = [];
  mp.forEach((group) => ret.push(group));
  return ret;
};
// @lc code=end
