/**
 * 请实现一个函数，将一个字符串中的每个空格替换成“%20”。
 * 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
 * @param {*} str 
 */
function replaceSpace(str) {
  // write code here
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if(str[i] !== ' ') {
      // 通过下标改变string是无效的，
      // 在JavaScript里面`res`保存的是字符串地址, 仍为''
      // 字符串底层是自带const的，相同字符串指向同一地址。
      // 想要修改字符串只能新开内存空间，重指变量地址。 比如`+`号运算
      // res[i] = str[i];
      res += str[i];
    } else {
      res += '\%20';
    }
  }
  return res;
}

console.log( replaceSpace("hello world") );
