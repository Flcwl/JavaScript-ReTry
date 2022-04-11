/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const matrix = new Array(n).fill(null).map(_ => new Array(n).fill('.'))

  // 遍历顺序：从左至右，从上至下
  const isValidDomain = (row, col) => {
    if (matrix[row][col] === 'Q') return false

    // \   |   /
    //  \ | /
    for (let i = row - 1; i >= 0; i--) {
      if (matrix[i][col] === 'Q') return false
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (matrix[i][j] === 'Q') return false
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < matrix[i].length; i--, j++) {
      if (matrix[i][j] === 'Q') return false
    }

    return true
  }

  const ans = []

  const dfs = (i) => {
    // 逐层查找落脚点，直到找到 n 个为止
    if (i === n) {
      const clone = matrix.map((row) => row.join(''))
      ans.push(clone)
      return
    }

    for (let j = 0; j < matrix[i].length; j++) {
      if (isValidDomain(i, j)) {
        matrix[i][j] = 'Q'
        dfs(i + 1)
        matrix[i][j] = '.'
      }
    }
  }

  dfs(0)

  return ans
};
// @lc code=end
