/**
 * 地上有一个m行和n列的方格。
 * 一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，
 * 但是不能进入行坐标和列坐标的数位之和大于k的格子。 
 * 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。
 * 但是，它不能进入方格（35,38），因为3+5+3+8 = 19。
 * 请问该机器人能够达到多少个格子？
 * @param {number} k 
 * @param {number} rows 
 * @param {number} cols 
 */
function movingCount(k, rows, cols) {
  // write code here
  if (k < 0) {
    return 0;
  }
  let dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
  ];
  let vis = new Array(rows * cols).fill(false);
  let cnt = 0;
  let stk = [];
  stk.push(0);
  stk.push(0);

  while (stk.length) {
    let x = stk.pop();
    let y = stk.pop();
    if(vis[x * cols + y]) {
      continue;
    }
    vis[x * cols + y] = true;
    cnt++;
    // console.log(x, y);

    for (let i = 0; i < 4; i++) {
      let px = x + dir[i][0];
      let py = y + dir[i][1];
      // hasPath
      if (
        px >= 0 &&
        px < rows &&
        py >= 0 &&
        py < cols &&
        !vis[px * cols + py] &&
        getSum(px) + getSum(py) <= k
      ) {
        // 存储当前状态，便于回溯
        stk.push(py);
        stk.push(px);
      }
    }
  }
  
  return cnt;
}

function getSum(num) {
  let sum = 0;
  while (num) {
    sum += parseInt(num % 10);
    num = parseInt(num / 10);
  }
  return sum;
}

console.log(movingCount(5, 10, 10));
