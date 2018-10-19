/**
 * 给定一个double类型的浮点数base和int类型的整数exponent。
 * 求base的exponent次方。
 * @param {*} base 
 * @param {*} exponent 
 */
function Power(base, exponent) {
  // write code here
  if (exponent === 0) {
    // 0次方返回1
    return 1;
  }

  if (exponent < 0) {
    if (base === 0) {
      // 0的正次方返回0，0的负次方无意义
      return 0;
    }
    return 1 / Power(base, -exponent);
  }
  let t = exponent,
    temp = base,
    res = 1;
  while (t) {
    if (t & 1) {
      res *= temp;
    }
    temp *= temp;
    t >>= 1;
  }
  return res;
}

console.log(Power(-2, 11));
