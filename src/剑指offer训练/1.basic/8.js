/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
 * 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
 * @param {*} number 
 */
let cnt = 0;
let a = [];

function jumpFloor(number) {
  // write code here
  a[0] = 0;
  a[1] = 1;
  a[2] = 2;
  a[3] = 3;
  a[4] = 5;
  // 即斐波那契数列
  return _jump(number);
}

function _jump(left) {
  if (left < 1) {
    return 0;
  }

  if (a[left]) {
    return a[left];
  } else {
    // 大量重复计算 可以用 a[] 保存算过的结果
    a[left] = _jump(left - 1) + _jump(left - 2);
  }
  return a[left];
}

console.log(jumpFloor(5));