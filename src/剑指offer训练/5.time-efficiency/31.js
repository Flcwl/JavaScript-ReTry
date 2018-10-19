/**
 * 求1~n 中1出现的次数 11 算出现2次
 * @param {*} n 
 */
function NumberOf1Between1AndN_Solution(n) {
  // write code here
  // 与数位有关 难T
  let res = 0;
  let mod = 10; //mod=10 从个位开始
  let quo = parseInt(n / mod);
  while (quo != 0) {
    // 求quo的右一位的1个数
    res += quo * mod / 10;
    let red = parseInt(n % mod);
    let mmod = parseInt(mod / 10);
    // 当前位 >= 1
    if (red >= mmod)
      if (red < mmod * 2 - 1) { // 1999
        // 只记录1其右余数
        res += parseInt(n % mmod) + 1;
      } else {
        // 当前位 > 1 or 1999
        res += mmod;
      }
    mod *= 10;
    quo = parseInt(n / mod);
  }
  let mmod = parseInt(mod / 10);
  // 处理当前位最高位
  if (n >= mmod)
    if (n < mmod * 2 - 1) {
      res += parseInt(n % mmod) + 1;
    } else {
      res += mmod;
    }
  return res;
}