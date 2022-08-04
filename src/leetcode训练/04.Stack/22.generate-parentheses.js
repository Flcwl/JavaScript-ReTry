/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = [];
  const stack = [];
  const ret = [];

  const dfs = (i) => {
    if (i === n) {
      // 不要破坏 ret 和 stack 的引用
      let t = ret.join("") + ")".repeat(stack.length);
      ans.push(t);
      return;
    }

    // 2 种选择

    if (stack[stack.length - 1] === "(") {
      // 弹出
      const backup = stack.pop();
      ret.push(")");
      dfs(i);
      ret.pop();
      stack.push(backup);
    }

    // 不弹出
    stack.push("(");
    ret.push("(");
    dfs(i + 1);
    ret.pop();
    stack.pop();
  };

  dfs(0);

  return ans;
};
// @lc code=end
