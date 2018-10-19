/**
 * 大家都知道斐波那契数列， 现在要求输入一个整数n，
 * 请你输出斐波那契数列的第n项（ 从0开始， 第0项为0）。n <= 39
 * @param {*} n 
 */
function Fibonacci(n) {
  // write code here
  let N = 40;
  // 这里n最大为39 无需矩阵快速幂、公式套用
  let a = [];
  a[0] = 0;
  a[1] = 1;
  for (let i = 2; i < N; i++) {
    a[i] = a[i - 1] + a[i - 2];
  }
  return a[n];
}
