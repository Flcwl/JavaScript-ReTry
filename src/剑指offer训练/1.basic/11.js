/**
 * 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
 * @param {*} n 32位
 */
function NumberOf1(n) {
  // write code here
  let res = 0,
    t = n;

  while (t) {
    if (t & 1) {
      // javascript 1.1%2 === 1.1
      res++;
    }
    // 这里不同于c语言的是 C语言只有 无符号移位
    // >>是带符号的右移
    // >>>是无符号右移
    t >>>= 1;
  }
  return res;

  // 看到的别人的优解思路
  // 1
  // int count = 0;
  // while(n!= 0){
  //     count++;
  //     n = n & (n - 1);
  //  }
  // return count;

  // 2
  // 值得注意的是
  // a = 1<<31; -2147483648
  // a<<=1;     0
  // b = 1<<32; 1
  // var count = 0, flag = 1;
  // while (flag) {
  //     if (n & flag) count++;
  //     flag = flag<<1;
  // }
  // return count;
}

console.log(NumberOf1(-1));
console.log(NumberOf1(-2147483648));
