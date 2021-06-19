/*
 * @lc app=leetcode id=1209 lang=javascript
 *
 * [1209] Remove All Adjacent Duplicates in String II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const stack = [];

  for (let o = 0; o < s.length; ++o) {
    const ch = s[o];
    // 获取栈头
    let lastPair = stack[stack.length - 1];

    // 如果上个 pair 存在，并且等于这个字符
    // 那么我们就考虑是否 集合到了 k ge
    if (lastPair && lastPair[0] === ch) {
      // 加上当前的 ch 的个数
      const count = lastPair[1] + 1;

      if (count === k) {
        stack.pop();
      } else {
        lastPair[1] = count;
      }
    } else {
      // pair 是个自定义元组数据结构 [ 字符, 这个字符邻近的个数]
      lastPair = [ch, 1];
      stack.push(lastPair);
    }
  }

  return stack
    .map((pair) => {
      // 生成当前 pair 重复字符
      return pair[0].repeat(pair[1]);
    })
    .join("");
};
// @lc code=end
