/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const starts = []

  // word 长度大于 0
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        starts.push([i, j])
      }
    }
  }

  if (starts.length === 0) return false

  const moves = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  let ret = false

  const dfs = (index, x, y) => {
    if (ret) return
    if (index === word.length) {
      ret = true
      return
    }

    const ch = word[index]

    for (let j = 0; j < moves.length; j++) {
      // 处理下一步坐标
      const offset = moves[j];
      const nextX = x + offset[0]
      const nextY = y + offset[1]

      // 越界处理
      if (nextX < 0 || nextX >= board.length) continue
      if (nextY < 0 || nextY >= board[0].length) continue

      // 节点已访问过，将剪枝
      if (board[nextX][nextY] === '#') continue
      // 路径不对，剪枝
      if (ch !== board[nextX][nextY]) continue

      const back = board[nextX][nextY]
      board[nextX][nextY] = '#'
      dfs(index + 1, nextX, nextY)
      board[nextX][nextY] = back
    }
  }

  // 遍历起点找到合乎的路径（word）
  for (let i = 0; i < starts.length; i++) {
    const [x, y] = starts[i]
    const back = board[x][y]
    board[x][y] = '#'
    // 开始字符已匹配到，我们从 word[1] 开始查找
    dfs(1, x, y)
    board[x][y] = back
    if (ret) return true
  }

  return false
};
// @lc code=end
