/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const initArray = () =>
    new Array(9).fill(null).map(() => new Array(9).fill(false));

  const getNinePos = (i, j) => Math.floor(i / 3) * 3 + Math.floor(j / 3);

  const rows = initArray();
  const cols = initArray();
  const nines = initArray();

  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];

      if (cell !== ".") {
        const ninePos = getNinePos(i, j);

        if (cols[j][cell] || rows[i][cell] || nines[ninePos][cell]) {
          return false;
        }

        cols[j][cell] = true;
        rows[i][cell] = true;
        nines[ninePos][cell] = true;
      }
    }
  }

  return true;
};
// @lc code=end
