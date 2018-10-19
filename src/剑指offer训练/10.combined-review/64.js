/**
 * 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
 * 例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，
 * 那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 
 * 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： 
 * {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}，
 * {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。
 * @param {*} numbers
 * @param {*} size 
 */
function maxInWindows(numbers, size) {
  // write code here
  // RMQ问题
  if (!numbers || !numbers.length) {
    return [];
  }
  if (!size || size < 1 || size > numbers.length) {
    return [];
  }
  let l = 0,
    r = -1,
    i = 0;
  let que = new Array(numbers.length).fill(0); // 队尾到队首递增
  let res = [];
  // {2,3,4,2,6,2,5,1} 3
  for (; i < size; i++) {
    // 初始化que 窗口
    while (l <= r && numbers[que[r]] < numbers[i])
      r--;
    que[++r] = i;
  }
  // 得到第一个窗口最大值
  res.push(numbers[que[l]]);
  for (; i < numbers.length; i++) {
    // 窗口右移 
    if (que[l] <= i - size) {
      // 淘汰不在窗口的最小index
      l++;
    }
    // 同上维护队尾
    while (l <= r && numbers[que[r]] < numbers[i])
      r--;
    que[++r] = i;
    res.push(numbers[que[l]]);
  }
  return res;
}


console.log(maxInWindows([2, 3, 4, 2, 6, 2, 5, 1], 3));