// return 和 {} 可省略 更简ArrowFunction
/**
 * 柯里化函数: 将原本接收多个参数的函数，转变为每次可处理部分参数，
 * 余下传入参数由返回的新函数接收处理，最终处理完就返回结果
 * 使用举例 `Function.bind(this, ...args)`
 * @param {*} fn 要柯里化的函数
 * https://github.com/mqyqingfeng/Blog/issues/42
 */
var toCurry = fn => {
  var judge;
  return (judge = (...args) => {
    return args.length === fn.length ?
      fn(...args) :
      (...arg) => judge(...args, ...arg);
  });
}

module.exports = toCurry;
