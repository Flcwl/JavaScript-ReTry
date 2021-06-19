/*
 * @lc app=leetcode id=1249 lang=javascript
 *
 * [1249] Minimum Remove to Make Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const arr = s.split("");
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    const ch = arr[i];
    if (ch === "(") {
      stack.push(i);
    } else if (ch === ")") {
      if (stack.length > 0) {
        // 只有栈中存在 元素，必然是匹配项 `(`
        stack.pop();
      } else {
        // 以 `@` 作为非法字符
        arr[i] = "@";
      }
    }
  }
  // 遍历结束，栈中还存在元素，说明也是非法字符
  stack.forEach((pos) => (arr[pos] = "@"));

  return arr.filter((ch) => ch !== "@").join("");
};
// @lc code=end
