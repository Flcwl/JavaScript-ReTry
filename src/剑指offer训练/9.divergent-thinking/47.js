/**
 * 求1+2+3+...+n，要求不能使用
 * 乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 * @param {*} n 
 */
function Sum_Solution(n) {
  // write code here
  // 打表
  // let a = [];
  // return a[n];
  // 递归 短路运算
  let res = n;
  n &&  (res += Sum_Solution(n - 1));
  return res;

  // JavaScript专属 API 党
  // new Array(n).fill(1).map().reduce()
}
