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
  // 字母分组

  const mp = new Map();

  const getUID = (str) => {
    // 字母顺序
    const chars = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      // 根据题意，字符是小写
      const at = ch.charCodeAt() - "a".charCodeAt();
      chars[at]++;
    }
    // 如果是空字符串，则都26个都为 0
    return chars.join();
  };

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const id = getUID(str);

    const group = mp.get(id);
    if (!group) {
      group = [];
      mp.set(id, group);
    }

    group.push(s);
  }

  let ret = [];
  mp.forEach((group) => {
    ret.push(group);
  });

  return ret;
};
// @lc code=end
