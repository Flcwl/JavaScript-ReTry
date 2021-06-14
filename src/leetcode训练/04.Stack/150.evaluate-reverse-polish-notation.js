/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function(tokens) {
  // 注意 a 和 b 的顺序，保证运算顺序是从左到右
  const sum = (a, b) => b + a
  const sub = (a, b) => b - a
  const multip = (a, b) => b * a
  const divide = (a, b) => parseInt(b / a)

  const list = [];
  let action = null

  for (let i = 0; i < tokens.length; ++i) {
    const t = tokens[i];

    switch (t) {
      case '+':
        action = sum
        break
      case '-':
        action = sub
        break
      case '/':
        action = divide
        break
      case '*':
        action = multip
        break;
      default:
        list.push(Number(t));
    }

    // 执行运算操作，结果在 push 到栈中
    if (action) {
      // 把结果塞回去，进行下一步运算
      list.push(action(list.pop(), list.pop()))
      action = null
    }
  }

  // 如果是一个元素，并且就是数字，则也可以直接返回
  return list.pop()
};
// @lc code=end
