/**
 * 柯里化函数: 将原本接收多个参数的函数，转变为每次可处理部分参数，
 * 余下传入参数由返回的新函数接收处理，最终处理完就返回结果
 *
 * @example `Function.bind(this, ...args)`
 * @param {*} fn 要柯里化的函数
 * @ref https://github.com/mqyqingfeng/Blog/issues/42
 */
const toCurry = (func) => {
  // 1. 固定对齐 func 参数长度
  // return function judge (...args) {
  //   return args.length >= func.length ? func(...args) : (...newArgs) => judge(...args, ...newArgs)
  // }

  // 2. func 参数长度不固定
  return (function () {
    // 缓存柯里化参数
    const cacheArgs = []
    return function judge (...args) {
      // 传入参数为空时，进行正式方法调用
      if (args.length === 0) {
        return func(...cacheArgs)
      } else {
        cacheArgs.push(...args)
        return judge
      }
    }
  })()
}

function sum (...args) {
  return args.reduce((acc, cur) => acc + cur, 0)
}

const curriedSum = toCurry(sum)

console.log(curriedSum(1)(2)(3)(4)());
