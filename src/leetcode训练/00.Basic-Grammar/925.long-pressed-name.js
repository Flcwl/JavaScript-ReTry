/*
 * @lc app=leetcode id=925 lang=javascript
 *
 * [925] Long Pressed Name
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  const { length: nLen } = name;
  const { length: tLen } = typed;
  let i = 0;
  let j = 0;

  // 先判断 i 是否能完全匹配键入

  // name = "alex", typed = "alexxr"
  while (i < nLen) {
    if (name[i] !== typed[j]) return false;

    ++i;
    // 跳过多余的输入
    while (
      name[i] !== typed[++j] &&
      typed[j] === name[i - 1] &&
      i < nLen &&
      j < tLen
    );
  }

  // j 还有内容，判断 j 是否有其他内容
  // name = "alex", typed = "alexx"
  if (j < tLen) {
    // 跳过多余的输入
    while (name[i - 1] === typed[++j]);
    return typed[j - 1] === name[i - 1] && j === tLen
  }

  return j === tLen && i === nLen;
};
// @lc code=end

// console.log(
//   isLongPressedName('alex', 'aaleexa')
// );
