/**
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
 * 请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 * @param {*} number 
 */
let a = [];
function rectCover(number) {
  // write code here
  if (number < 0) {
    return 0;
  }
  a[0] = 0;
  a[1] = 1;
  a[2] = 2;
  a[3] = 3;
  a[4] = 5;
  // 同斐波那契
  for (let i = 5; i <= number; i++) {
    a[i] = a[i - 1] + a[i - 2];
  }
  return a[number];
}

console.log( rectCover(5) );