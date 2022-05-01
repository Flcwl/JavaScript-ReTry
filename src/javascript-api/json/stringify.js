// 函数、undefined、symbol：键值对会消失
// NaN、Infinity 以及 -Infinity：值会转为 null
// Date：转为字符串
// RegExp：转为空对象
// 原型链：忽略
function jsonStringify(data) {
  let type = typeof data;

  // 基础类型数据
  if(data === null || type !== 'object') {
    let result = data;

    //NaN 和 Infinity 序列化返回 "null"
    if (data === null || Number.isNaN(data) || data === Infinity) return 'null'

    // 移除键值对
    if (type === 'function' || type === 'undefined' || type === 'symbol') return undefined;

    if (type === 'string') return `"${data}"`;

    return String(result);
  }

  // Date
  if (data.toJSON && typeof data.toJSON === 'function') {
    return jsonStringify(data.toJSON());
  }

  // array
  if (data instanceof Array) {
    let result = [];

    data.forEach((item, index) => {
      // 数组特殊处理返回 null
      const val = jsonStringify(item);
      result[index] = val === undefined ? 'null' : val
    });

    return `[${result.join(',')}]`
  }

  // 处理普通对象
  let result = [];
  Object.keys(data).forEach((key, index) => {
      //key 如果是 symbol 对象，忽略
      if (typeof key !== 'symbol') {
      const val = jsonStringify(data[key]);
        //键值如果是 undefined、function、symbol 为属性值，忽略
        if (val !== undefined) {
        result.push(`"${key}":${val}`);
      }
    }
  });
  return `{${result.join(',')}}`
}

let obj = {
  name: 'jack',
  age: 18,
  attr: ['coding', 123, null, Infinity, { hello: null }, () => {}],
  date: new Date(),
  uni: Symbol(2),
  sayHi: function() {
      console.log("hi")
  },
  info: {
      sister: 'lily',
      age: 16,
      intro: {
          money: undefined,
          job: null
      }
  }
}

console.log(jsonStringify(obj));
console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj) === jsonStringify(obj));
