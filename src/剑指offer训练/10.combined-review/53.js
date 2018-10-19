/**
 * 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
 * 例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。
 * 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。
 * @param {*} str
 */
function isNumeric(str) {
  // write code here
  if ('[object Number]' == Object.prototype.toString.call(str)) {
    return str;
  }
  //s字符串
  if (!str) {
    return 0;
  }

  let res = 0;
  let eCnt = 0,
    i = 0;
  let dotCnt = 0;
  for (let i = 0; i < str.length; i++) {
    let el = str.charCodeAt(i) - 48;
    // console.log(el);
    if (el >= 0 && el < 10) {
    } else {
      // return 0;
      if (str[i] === '.') {
        dotCnt++;
        if (dotCnt > 1 || eCnt) {
          return false;
        }
        // 只保证与之前匹配
      } else if (str[i] === 'e' || str[i] === 'E') {
        eCnt++;
        if (
          dotCnt > 1 ||
          i === 0 ||
          str[i - 1] > '9' ||
          str[i - 1] < '0' ||
          i === str.length - 1
        ) {
          return false;
        }
      } else if (str[i] === '+' || str[i] === '-') {
        if (i !== 0 && str[i - 1] !== 'e' && str[i - 1] !== 'E') {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
}

console.log(isNumeric('1e+314'));
