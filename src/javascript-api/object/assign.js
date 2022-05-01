// 只拷贝当前对象可枚举的属性，包括原型链。
const assign = (target, source) => {
  for (let prop in source) {
    if (source.hasOwnProperty(prop)) {
        target[prop] = source[prop];
    }
  }
  return target;
}
