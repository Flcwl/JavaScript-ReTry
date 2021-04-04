module.exports = function () {
/**
 * 原型链绑定call2 实现`call`方法 传参为参数列表
 */
  Function.prototype.call2 = function () {
    let _this = this; // 指向调用call的函数
    let [context, ...args] = [...arguments]; // 参数列表

    context.fn = _this;
    let ret = context.fn(...args);
    delete context.fn;
    return ret; // return执行的返回结果
  }

  /**
   * 原型链绑定bind2 实现`bind`方法 传参为参数列表
   */
  Function.prototype.bind2 = function () {
    let _this = this; // 指向调用bind的函数
    let [context, ...args] = Array.prototype.slice.call(arguments); // shallow copy

    return function () {
      // return _this.apply( // apply 参数数组
      //   context,
      //   ...args.concat(
      //     Array.prototype.slice.call(arguments)
      //   )
      // );
      return _this.call2( // call 参数列表
        context,
        ...args,
        ...arguments
      );
    };
  }
  return function () {
    delete Function.prototype.bind2;
    delete Function.prototype.call2;
  }
};
