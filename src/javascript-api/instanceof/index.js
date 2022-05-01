/**
 * 检测在实例对象 left 的原型链上，
 * 是否出现构造函数 right 的 prototype
 */
export function myInstanceOf (left, right) {
  // 这里先用typeof来判断基础数据类型，如果是，直接返回false
  if(left === null || typeof left !== 'object') return false;

  const prototype = right.prototype

  let proto = Object.getPrototypeOf(left);
  while (proto) {
    // 出现则返回 true
    if (proto === prototype) return true

    // left 原型链查找
    proto = Object.getPrototypeOf(proto);
  }

  return false
}
