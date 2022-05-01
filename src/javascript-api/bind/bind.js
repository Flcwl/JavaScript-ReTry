// 注意 Function 中 this 指向为调用 call 的对象，即函数本身
module.exports = function () {
/**
 * 原型链绑定call2 实现`call`方法 传参为参数列表
 */
  Function.prototype.myCall = function (context = window, ...args) {
    context.fn = this; // this 指向调用call的函数
    // 以 context 为上下文执行
    const ret = context.fn(...args);
    delete context.fn;
    return ret; // return执行的返回结果
  }

  /**
   * 原型链绑定bind2 实现`bind`方法 传参为参数列表
   */
  Function.prototype.myBind = function (context, ...args) {
    let _this = this; // 指向调用bind的函数

    return function () {
      // return _this.apply( // apply 参数数组
      //   context,
      //   args.concat(Array.from(arguments))
      // );
      return _this.myCall( // call 参数列表
        context,
        ...args,
        ...arguments // 返回函数的新的 arguments
      );
    };
  }

  return function () {
    delete Function.prototype.myBind;
    delete Function.prototype.myCall;
  }
};
