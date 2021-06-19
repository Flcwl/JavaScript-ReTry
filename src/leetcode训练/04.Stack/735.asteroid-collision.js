/*
 * @lc app=leetcode id=735 lang=javascript
 *
 * [735] Asteroid Collision
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];

  // 相向（10, -10）则会爆炸

  for (let i = 0; i < asteroids.length; i++) {
    // 根据题意，num 不可能为 0
    const num = asteroids[i];
    const abVal = num < 0 ? -num : num;

    if (num < 0) {
      // 当右边的行星 num 往左方向运动时，才有可能爆炸
      while (true) {
        const lastPair = stack[stack.length - 1];

        // 存在相向的行星
        if (lastPair && lastPair[0] > 0) {
          if (abVal > lastPair[1]) {
            // 把上一个的炸了
            stack.pop();
            // 可以继续炸
            continue;
          }

          if (abVal === lastPair[1]) {
            // 俱损
            stack.pop();
          } else {
            // 直接不自量力，自爆
          }
        } else {
          // 从开始就一直是左方向，也不会碰撞
          stack.push([num, abVal]);
        }

        break;
      }
    } else {
      // pair 为自定义结构体 [原始值，其绝对值]
      stack.push([num, abVal]);
    }
  }

  return stack.map(([val]) => val);
};
// @lc code=end
