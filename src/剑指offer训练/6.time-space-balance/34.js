/**
 * 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中
 * 找到第一个只出现一次的字符,并返回它的位置, 
 * 如果没有则返回 -1（需要区分大小写）.
 * @param {*} str 
 */
function FirstNotRepeatingChar(str) {
  // write code here
  if (!str || !str.length) {
    return -1;
  }
  // str 全部由字母组成 用数组下标表示
  let mp = Array(123).fill(0);
  // 保存下标 优化再次遍历str后 无需要
  // let ans = Array(123).fill(-1);
  for (let i = 0; i < str.length; i++) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    const code = str.charCodeAt(i);
    // if (0 === mp[code]) {
    //   ans[code] = i;
    // }
    mp[code]++;
  }

  // let res = Infinity;
  for (let j = 0; j < str.length; j++) {
    if (mp[str.charCodeAt(j)] === 1)
      return j;
  }
  return -1;

  // for (var i = 0; i < length; i++) {
  //   // 前后分别顺序查找str[i]
       // 可优化visited[] 标记重复字母已查询过
  //   if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
  //     return i;
  //     break;
  //   }
  // }
}

console.log(FirstNotRepeatingChar('abca'));