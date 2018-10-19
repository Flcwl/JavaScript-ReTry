/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
 * 例如，如果输入如下4 X 4矩阵：
 * 1  2  3  4
 * 5  6  7  8
 * 9  10 11 12
 * 13 14 15 16
 * 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
 * @param {*} matrix
 */
const dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0]
]; // 逆时针
let t = 0;
let res = [];
let vis = [];

function printMatrix(matrix) {
  if (!matrix || !matrix.length) {
    return [];
  }
  // write code here
  let row = matrix.length,
    col = matrix[0].length;
  if (!col) {
    return [];
  }
  // let a = new Array(6).fill(null).map(() => new Array(12).fill(false));
  // https://stackoverflow.com/questions/52667916/what-happen-in-arrayrow-fillnew-arraycol-fillfalse
  // let a = Array(row).fill(Array(col).fill(false));
  vis = new Array(row).fill(void 0);
  for (let i = 0; i < row; i++) {
    vis[i] = new Array(col).fill(false);
  }
  res.length = 0;
  t = 0;
  res.push(matrix[0][0]);
  vis[0][0] = true;
  // console.log(a);

  dfs(matrix, 0, 0, 0, row - 1, col - 1);
  return res;
}

function dfs(matrix, x, y, cnt, row, col) {
  if (cnt > 1) {
    return;
  }
  let px = x + dir[t][0],
    py = y + dir[t][1];

  // 这里a[px][py]需要放在后面
  // 如果a 为4*4，则：a[4] 为 undefind，
  // a[4][1] 报错 Error: Cannot read property '1' of undefined
  let isBlocked = py > col || px > row || px < 0 || py < 0 || vis[px][py];
  // console.log(py > row || px > col || px < 0 || py < 0);

  if (isBlocked) {
    t = t === 3 ? 0 : t + 1;
    cnt++; // 阻塞次数 2次时即表示到达中心
    // 下一步不能走，回退
    px = x;
    py = y;
  } else {
    cnt = 0;
    res.push(matrix[px][py]);
    vis[px][py] = true;
  }
  dfs(matrix, px, py, cnt, row, col);
}

let m = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
let m1 = [
  [1, 2],
  [3, 4]
];

console.log(printMatrix(m1));
console.log(printMatrix(m));