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

  const genUID = (str) => {
    const chars = new Array(26).fill(0);

    // ascii 映射表 以字母顺序生成唯一id
    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      // 根据题意，字符是小写英文
      const at = ch.charCodeAt() - "a".charCodeAt();
      chars[at]++;
    }

    return chars.join();
  };

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const sid = genUID(str);

    let group = mp.get(sid);
    if (!group) {
      group = [];
      mp.set(sid, group);
    }

    group.push(str);
  }

  let ret = [];
  mp.forEach((group) => {
    ret.push(group);
  });

  return ret;
};
// @lc code=end
