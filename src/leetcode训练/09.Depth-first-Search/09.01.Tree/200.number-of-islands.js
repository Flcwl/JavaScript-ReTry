/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let ret = 0;

  const m = grid.length;
  const n = grid[0] ? grid[0].length : 0;
  // 申明前行的四个方向
  const d = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const checkVisited = (x, y) => !grid[x] || grid[x][y] !== "1";
  const setVisited = (x, y) => (grid[x][y] = "0");

  // 访问过就标记为访问过（河流），否则向四个方向探寻岛屿面积
  const dfs = (x, y) => {
    setVisited(x, y);

    for (let i = 0; i < 4; i++) {
      const nextX = x + d[i][0];
      const nextY = y + d[i][1];

      // 遍历过的 "1" 则跳过
      // 遇到河流，则到此结束
      if (checkVisited(nextX, nextY)) {
        continue;
      }

      // 必然是未访问过的岛屿
      dfs(nextX, nextY);
    }
  };

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === "1" && !checkVisited(i, j)) {
        dfs(i, j);
        ret++;
      }
    }
  }

  return ret;
};
// @lc code=end
