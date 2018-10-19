/**
 * 输出所有和为S的连续正数序列。
 * 序列内按照从小至大的顺序，序列间按照开始数字从小到大的顺序
 * @param {*} sum
 */
function FindContinuousSequence(sum) {
  // write code here
  // 等差数列 q=1
  // Sn = n * a1 + n * (n - 1) / 2
  if (sum < 2) {
    return [];
  }
  let res = [];
  // 假设 从`a1 = 1`开始,即`i`最大值时
  // 解 当`n*(n-1) = 2* sum`时，`n`的最大值 < (n+1)^2
  let i = parseInt(Math.sqrt(sum * 2)) + 1;
  // 保证序列间顺序从小到大
  for (; i > 1; --i) {
    let na1 = sum - (i * (i - 1) >> 1);
    let a1 = parseInt(na1 / i);
    // 保证a1为正值
    if (a1 && a1 * i === na1) {
      let ans = [];
      for (let j = 0; j < i; j++) {
        ans.push(a1++);
      }
      // res.unshift(ans);
      res.push(ans);
    }
  }
  return res;
}

console.log(FindContinuousSequence(100));