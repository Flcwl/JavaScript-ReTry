/**
 *  模拟 new 实现
 * @param {*} constructor 构造函数
 * @param  {...any} args 构造函数参数
 * @returns
 */
function objectFactory (constructor, ...args) {
  // 1. 新建以 构造函数的 prototype 为原型 的空对象
  const newObject = Object.create(constructor.prototype);

  // 2. 绑定构造函数 this 为空对象，并调用该构造函数
  const result = constructor.apply(newObject, args)

  // 3. 判断返回结果，为对象或函数时则返回结果
  if ((result && typeof result === 'object') || typeof result === 'function') {
    return result
  }
  // 4. 否则，返回空对象
  return newObject
}
