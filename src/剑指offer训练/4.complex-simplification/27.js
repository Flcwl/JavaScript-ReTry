/**
 * 输入一个字符串,长度不超过9(可能有字符重复),
 * 按字典序打印出该字符串中字符的所有排列。
 * 例如输入字符串abc,则打印出由字符a,b,c所能排列出来的
 * 所有字符串abc,acb,bac,bca,cab和cba。
 * @param {*} str 
 */
let isVisited;

function Permutation(str) {
  // write code here
  if (!str || !str.length) {
    return [];
  }
  let res = [];
  isVisited = Array(str.length).fill(false);
  // 前提: `s`有序
  let s = str.split('').sort();
  backtrack(1, str.length, s, [], res);
  return res;
}

function backtrack(t, len, str, ans, res) {
  // console.log(ans);
  if (t > len) {
    if (ans.length === len)
      res.push(ans.join(''));
    return;
  }
  for (let i = 0; i < len; i++) {
    if (!isVisited[i]) {
      if (i && str[i - 1] === str[i] && isVisited[i - 1]) {
        // 重复字母只遍历一遍
        continue;
      }
      // 当前层以谁开头
      ans.push(str[i]);
      isVisited[i] = true;
      backtrack(t + 1, len, str, ans, res);
      isVisited[i] = false;
      ans.pop();
      // backtrack(t + 1, len, str, ans, res);
    }
  }  
}

// console.log(Permutation('aacc'));
// console.log(Permutation('abc'));
console.log(Permutation('aac'));