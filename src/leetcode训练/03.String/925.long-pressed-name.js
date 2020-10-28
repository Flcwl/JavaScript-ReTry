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

  // name = "alex", typed = "alexxr"
  while (i < nLen) {
    if (name[i] !== typed[j]) return false;

    ++i;
    while (
      name[i] !== typed[++j] &&
      typed[j] === name[i - 1] &&
      i < nLen &&
      j < tLen
    );
  }

  // name = "alex", typed = "alexx"
  if (j < tLen) {
    while (name[i - 1] === typed[++j]);

    return j >= tLen
  }

  return j === tLen && i === nLen;
};
// @lc code=end
