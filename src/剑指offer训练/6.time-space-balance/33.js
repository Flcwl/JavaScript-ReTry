/**
 * 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
 * 例如6、8都是丑数，但14不是，因为它包含质因子7。 
 * 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
 * @param {*} index 
 */
function GetUglyNumber_Solution(index) {
  // write code here
  const NMAX = 1000000007;
  // 打表
  let arr = [];
  for (let i = 1; i < NMAX; i *= 2) {
    for (let j = 1; i * j < NMAX; j *= 3) {
      for (let k = 1; i * j * k < NMAX; k *= 5) {
        arr.push(i * j * k);
      }
    }
  }
  arr.sort((a, b) => {
    return a - b;
  });
  return arr[index - 1];

  // other way
  // if (index < 7) {
  //   return index;
  // }
  // const NMAX = 5000;
  // // 防直接下标赋值报错undefined
  // let res = new Array(NMAX).fill(0);
  // res[0] = 1;
  // let t2 = 0,
  //   t3 = 0,
  //   t5 = 0;
  // for (let i = 1; i < index; ++i) {
  //   // 有趣的idea 
  //   res[i] = Math.min(res[t2] * 2, res[t3] * 3, res[t5] * 5);
  //   if (res[i] == res[t2] * 2) t2++;
  //   if (res[i] == res[t3] * 3) t3++;
  //   if (res[i] == res[t5] * 5) t5++;
  // }
  // return res[index - 1];
}

console.log(GetUglyNumber_Solution(10));