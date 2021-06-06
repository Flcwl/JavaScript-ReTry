/*
 * @lc app=leetcode id=1041 lang=javascript
 *
 * [1041] Robot Bounded In Circle
 */

// @lc code=start
/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  // 顺时针
  const dir = [
    [0, 1], // 上
    [1, 0], // 右
    [0, -1], // 下
    [-1, 0], // 左
  ];
  const p = [0, 0];
  let d = 0;

  for (let i = 0; i < instructions.length; i++) {
    const c = instructions[i];

    switch (c) {
      case "G":
        const s = dir[d];
        p[0] = p[0] + s[0];
        p[1] = p[1] + s[1];
        break;
      case "L":
        d = (d + 3) % 4;
        break;
      case "R":
        d = (d + 1) % 4;
        break;
      default:
        return false;
    }
  }

  // 走完一圈回到原点 or
  // 走完一圈方向变了（多走3圈必有轮回）
  return (p[0] === 0 && p[1] === 0) || d !== 0;
};
// @lc code=end
