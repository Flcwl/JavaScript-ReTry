/*
 * @lc app=leetcode id=224 lang=javascript
 *
 * [224] Basic Calculator
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const arr = s.split("");
  const stack = [];
  const isNumeric = (o) => !Number.isNaN(Number.parseInt(o));
  const add = (arr) => {
    let ret = 0;
    for (let i = 0, op, t; i < arr.length; ++i) {
      t = arr[i];
      if (isNumeric(t)) {
        t = Number.parseInt(t);
        ret += op === "-" ? -t : t;
      } else {
        // 这里是合法的运算符 不是 + 就是 -
        op = t;
      }
    }
    return ret;
  };

  // 去括号，简化运算符
  for (let i = 0, key; i < arr.length; ++i) {
    key = arr[i];

    switch (key) {
      // 直接入栈，等到遇到最近的 ( 再进行运算，把它处理掉
      case "(":
        stack.push(key);
        break;
      // 遇到 ) 就会处理掉，所以栈中不会存在 `)`
      case ")":
        let t = stack.length - 1;

        while (stack[t] !== "(") t--;
        stack[t] = add(stack.slice(t + 1));
        stack.length = t + 1;

        // let ret = 0;

        // while (stack[t] !== "(") {
        //   let a = stack.pop();
        //   if (isNumeric(a)) {
        //     ret += Number.parseInt(a);
        //   }
        //   t--;
        // }

        // 假如 ( 前面是 - 号，需要处理成负数
        // if (stack[stack.length - 2] === "-") {
        //   stack[stack.length - 2] = "+";
        //   ret = -ret;
        // }
        // stack[t] = ret;
        console.log(stack);
        break;
      case "+":
        // 之前的值是数字类型，才会入栈
        if (isNumeric(stack[stack.length - 1])) {
          stack.push(key);
        }
        break;
      case "-":
        // 之前的值是 -，进行负负得正
        if (stack[stack.length - 1] === "-") {
          stack[stack.length - 1] = "+";
          // 之前的值是 +，替换为 - 号
        } else if (stack[stack.length - 1] === "+") {
          stack[stack.length - 1] = "-";
        } else {
          stack.push(key);
        }
        break;
      default:
        // 忽略空格或者其他非法字符，保证当前为数字
        if (!isNumeric(key)) {
          continue;
        }

        if (stack.length > 0) {
          let prev = stack[stack.length - 1];

          if (isNumeric(prev)) {
            // 之前如果是数字，则合并
            stack[stack.length - 1] = prev + key;
          } else if (prev === "+") {
            // 之前如果是 + 则 push进去
            stack.push(key);
          } else if (prev === "-") {
            // 之前如果是 - 则转为负数，添加 + 号
            // stack[stack.length - 1] = "+";
            // stack.push("-" + key);
            stack.push(key);
          } else if (prev === "(") {
            // 之前如果是 ( 则 push
            stack.push(key);
          } else {
            // 否则非法，不处理
          }
        } else {
          stack.push(key);
        }
        break;
    }
  }

  console.log("[ stack ] >", stack);
  return add(stack);
};
// @lc code=end

console.log(calculate("(1-(3-4))"));
