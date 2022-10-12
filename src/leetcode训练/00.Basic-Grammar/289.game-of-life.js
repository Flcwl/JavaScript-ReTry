/*
 * @lc app=leetcode id=289 lang=javascript
 *
 * [289] Game of Life
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const clonedBoard = board.map((row) => [...row]);
  const dir = [
    [-1, -1],
    [-1, 0],
    [-1, +1],
    [0, -1],
    [0, +1],
    [+1, -1],
    [+1, 0],
    [+1, +1],
  ];

  const isLive = (i, j) => {
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
      return false;
    }
    return board[i][j] === 1;
  };

  const canLive = (i, j) => {
    let count = 0;

    for (let d = 0; d < dir.length; d++) {
      const x = dir[d];
      if (isLive(i + x[0], j + x[1])) {
        count++;
      }
    }

    if (count < 2) return false;

    if (count === 2) return isLive(i, j);

    if (count === 3) return true;

    return false;
  };

  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      clonedBoard[i][j] = canLive(i, j) ? 1 : 0;
    }
  }

  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      board[i][j] = clonedBoard[i][j];
    }
  }

  return board;
};
// @lc code=end
