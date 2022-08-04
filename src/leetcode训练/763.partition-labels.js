/*
 * @lc app=leetcode id=763 lang=javascript
 *
 * [763] Partition Labels
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  // https://www.bilibili.com/video/BV1WW411C72W

  // 存储每个字符出现的最后索引位置，保证后续高效查找
  // 优化：根据题意为字母，可以转为数值 charCodeAt
  const mp = new Map();

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    mp.set(ch, i);
  }

  const result = [];
  // ababcbaca defegde hijhklij
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const lastIndex = mp.get(ch);

    // 扩充新边界，保证当前 part 可以承载所有该字符
    if (lastIndex > end) {
      end = mp.get(ch);
    }

    if (end === i) {
      result.push(end - start + 1);
      start = end + 1;
    }
  }

  return result;
};
// @lc code=end
