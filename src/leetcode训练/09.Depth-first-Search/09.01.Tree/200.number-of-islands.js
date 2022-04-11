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
  const visited = Array(m * n).fill(false);
  const checkVisited = (x, y) => visited[x * n + y];
  const setVisited = (x, y) => (visited[x * n + y] = true);

  const dfs = (x, y) => {
    setVisited(x, y);

    for (let i = 0; i < 4; i++) {
      const nextX = x + d[i][0];
      const nextY = y + d[i][1];

      // 遍历过的 "1" 则跳过
      if (checkVisited(nextX, nextY)) {
        continue;
      }

      // 遇到河流，则到此结束
      if (!grid[nextX] || grid[nextX][nextY] !== "1") {
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
