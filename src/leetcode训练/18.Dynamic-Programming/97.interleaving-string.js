/*
 * @lc app=leetcode id=97 lang=javascript
 *
 * [97] Interleaving String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  // 相当于 2 手牌横向混切在一起，在一起后的牌先后顺序是不变的

  // 组合个数必然是不变的
  if (s1.length + s2.length !== s3.length) return false

  // 存储 s1 、s2 子序是否满足 s3 对应局部子序
  // 纵：s1 下标；横：s2 下标
  const dpMatrix = new Array(s1.length + 1).fill(undefined).map(() => [])
  // 初始化 空字符串，保证第一列第一行初始化是从正确的开始的
  dpMatrix[0][0] = true

  for (let i = 1; i <= s1.length; i++) {
    // 依赖前面的状态是否ok
    dpMatrix[i][0] = dpMatrix[i - 1][0] && s1[i - 1] === s3[i - 1]
  }

  for (let j = 1; j <= s2.length; j++) {
    // 依赖前面的状态是否ok
    dpMatrix[0][j] = dpMatrix[0][j - 1] && (s2[j - 1] === s3[j - 1])
  }

  //     '' a a b c c
  // ''   1 1 1 0 0 0
  // d  0 0 1 1 0 0
  // b  0 0 1 1 1 0
  // b  0 0 1 0 1 1
  // c  0 0 1 1 1 0
  // a  0 0 0 0 1 1

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      // 递推公式 当前下标要么从 s1 取 、要么从 s2 取

      // s1 取：表示已经从 s1 取了前 i - 1 个，从 s2 取了前 j 个。
      // s2 取：表示已经从 s1 取了前 i  个，从 s2 取了前 j - 1 个。
      // 无论如何，此刻是要取第 i + j  个的，对应下标 i + j - 1
      const ch3 = s3[i + j - 1]

      const getS1 = s1[i - 1] === ch3 && dpMatrix[i - 1][j]
      const getS2 = s2[j - 1] === ch3 && dpMatrix[i][j - 1]

      dpMatrix[i][j] = getS1 || getS2
    }
  }

  // console.log(dpMatrix);
  return dpMatrix[s1.length][s2.length]
};
// @lc code=end
// console.log(
//   isInterleave('db', 'b', 'cbb')
// );

var isInterleave2 = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  const visitedPathSet = new Set();
  let res = false;
  function backtrace(i1, i2, i3) {
    if (res) return

    if (i3 === s3.length) {
      if (i1 === s1.length && i2 === s2.length) res = true

      return
    } else if (i1 > s1.length || i2 > s2.length) {
      return
    }

    // 记忆回溯剪枝
    if (visitedPathSet.has(`${i1}_${i2}_${i3}`)) return;
    visitedPathSet.add(`${i1}_${i2}_${i3}`);

    if (s1[i1] === s3[i3]) backtrace(i1 + 1, i2, i3 + 1);
    if (s2[i2] === s3[i3]) backtrace(i1, i2 + 1, i3 + 1);
  }

  backtrace(0, 0, 0);

  return res;
};
