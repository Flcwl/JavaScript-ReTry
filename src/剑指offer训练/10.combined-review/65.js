/**
 * 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
 * 路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
 * 如果一条路径经过了矩阵中的某一个格子，则之后不能再次进入这个格子。
 * 例如
 * a b c e
 * s f c s
 * a d e e
 * 这样的3 X 4 矩阵中包含一条字符串"bcced"的路径，
 * 但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，
 * 路径不能再次进入该格子。
 * @param {string} matrix
 * @param {number} rows  行
 * @param {number} cols  列
 * @param {string} path
 */
function hasPath(matrix, rows, cols, path) {
  // write code here
  let dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  let vis = new Array(matrix.length).fill(false);

  // bfs
  let stk = [],
    t = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      t = 0;
      if (path[t] === matrix[i * cols + j]) {
        vis.fill(false);
        stk = [];
        stk.push(t);
        stk.push(j);
        stk.push(i);
        while (stk.length) {
          let x = stk.pop();
          let y = stk.pop();
          t = stk.pop();
          vis[x * cols + y] = true;
          t++;
          if (t === path.length) {
            return true;
          }
          for (let k = 0; k < 4; k++) {
            let px = x + dir[k][0];
            let py = y + dir[k][1];
            // hasPath
            if (
              px >= 0 &&
              px < rows &&
              py >= 0 &&
              py < cols &&
              !vis[px * cols + py] &&
              path[t] === matrix[px * cols + py]
            ) {
              // 存储当前状态，便于回溯
              stk.push(t);
              stk.push(py);
              stk.push(px);
            }
          }
        }        
      }
    }
  }
  return false;
}

console.log(hasPath('abcesfcsadee', 3, 4, 'bcced'));
