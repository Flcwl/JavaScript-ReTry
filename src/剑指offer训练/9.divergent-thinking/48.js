/**
 * 写一个函数，求两个整数之和，
 * 要求在函数体内不得使用+、-、*、/四则运算符号。
 * @param {*} num1
 * @param {*} num2
 */
function Add(num1, num2) {
  // write code here
  // 模拟二进制加法运算
  let c = 0;
  let idx = 1;
  let tmp = num1;
  while (num2) {
    tmp = num1 ^ num2;
    num2 = (num2 & num1) << 1;
    num1 = tmp;
  }
  return num1;
}

console.log(Add(6, 3));
// 6    0110
// 3    0011
// num1 0101
// num2 0100

// num1 0001
// num2 1000

// num1 1001
// num2 0000