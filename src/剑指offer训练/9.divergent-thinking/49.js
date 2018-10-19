/**
 * 将一个字符串转换成一个整数(实现Integer.valueOf(string)的功能，
 * 但是string不符合数字要求时返回0)，要求不能使用字符串转换整数的库函数。
 * 数值为0或者字符串不是一个合法的数值则返回0。
 * 输入描述:
 * 输入一个字符串,包括数字字母符号,可以为空
 * 输出描述:
 * 如果是合法的数值表达则返回该数字，否则返回0
 * @param {*} str 
 */
function StrToInt(str) {
  // write code here
  if (!str) {
    return 0;
  }
  if ('[object Number]' == Object.prototype.toString.call(str)) {
    return str;
  }
  console.log(Number(str));
  
  let res = 0;
  let flag = 0,
    i = 0;
  if (str[0] === '-') {
    flag = 1;
    i = 1;
  } else if (str[0] === '+') {
    i = 1;
  }
  for (; i < str.length; i++) {
    let el = str.charCodeAt(i) - 48;
    // console.log(el);
    if (el >= 0 && el < 10) {
      res += el;
      res *= 10;
    } else {
      return 0;
    }
  }
  if (flag) {
    return -res / 10;
  }
  return res / 10;
}

console.log(StrToInt('+123'));
console.log(StrToInt('+123 '));
