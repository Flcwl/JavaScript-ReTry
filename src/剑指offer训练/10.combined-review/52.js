/**
 * 请实现一个函数用来匹配包括'.'和'*'的正则表达式。
 * 模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。
 *  在本题中，匹配是指字符串的所有字符匹配整个模式。
 * 例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配
 * @param {*} s
 * @param {*} pattern
 */
function match(s, pattern) {
  // write code here
  // s, pattern都是字符串
  // 手写regexp 递归 难T
  if (!pattern) {
    return !s;
  }
  return matchChar(s, 0, pattern, 0);
}

function matchChar(str, i, reg, j) {
  if (j === reg.length) {
    // 匹配结束，两者都结束返回true
    return i >= str.length;
  }
  let slen = str.length - i,
    plen = reg.length - j;

  if (plen === 1 || reg[j + 1] !== '*') {
    // 非*
    return (
      i < str.length &&
      (reg[j] === '.' || str[i] === reg[j]) &&
      matchChar(str, i + 1, reg, j + 1)
    );
  } else {
    // 含* 匹配 .* 或 a+
    while (i < str.length && reg[j] === '.' || str[i] === reg[j]) {
      // if (match(str, i++, reg, j + 2)) {
      if (matchChar(str, i, reg, j + 2)) {
        return true;
      }
      // else {
      //   return matchChar(str, i, reg, j + 2);
      // }
      i++;
    }
  }
  // 含* 匹配0个
  return matchChar(str, i, reg, j + 2);
}

console.log(match('abcdde', 'a.cd*e'));
console.log(match('bbbba', '.*a*a'));

// for (let i = 0, j = 0; i < pattern.length; i++) {
//   if(j >= s.length) {
//     return false;
//   }
//   if (pattern[i] === '.') {
//     if (s[j]) {
//       j++;
//     } else {
//       return false;
//     }
//   } else if(pattern[i] === '*'){
//     // match(); 递归

//   }else {
//     if(pattern[i] !== s[j]) {
//       return false;
//     }
//     j++;
//   }
// }
// retrun true;
