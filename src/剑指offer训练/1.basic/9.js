/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。
 * 求该青蛙跳上一个n级的台阶总共有多少种跳法。
 * @param {*} number 
 */
let a = [];

function jumpFloorII(number) {
  // write code here
  a[0] = 0;
  a[1] = 1;
  a[2] = 2;
  a[3] = 4;
  a[4] = 8;
  // 同斐波那契数列 这里有规律可寻，
  // 一般无思路的类似题可用此法，找出规律得出答案
  return _jump(number);
}

function _jump(left) {
  if (left < 1) {
    return 0;
  }

  if (a[left]) {
    return a[left];
  } else {
    a[left] = 0;
    // 大量重复计算 可以用 a[] 保存算过的结果
    for (let i = 1; i < left; i++) {
      a[left] += _jump(left - i);
    }
    a[left]++;
  }
  return a[left];
}

console.log(jumpFloorII(6));
