/**
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和
 * 一个整数，判断数组中是否含有该整数。
 * @param {*} target 
 * @param {*} array 
 */
function Find(target, array) {
  // write code here
  let row = array.length,
    col = array[0].length - 1;
  for (let i = 0; i < row; i++) {
    if (array[i][0] <= target && array[i][col] >= target) {
      let arr = array[i];
      let res = _binarySearch(arr, 0, col, target);
      if (res !== -1) {
        return true;
      }
    }
  }
  return false;
}

function _binarySearch(arr, left, right, target) {
  // another way while(left <= right)
  if (left > right) {
    return -1;
  }
  // 必须parseInt，不然默认浮点运算
  let mid = parseInt(left + (right - left) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return _binarySearch(arr, left, mid - 1, target);
  } else {
    return _binarySearch(arr, mid + 1, right, target);
  }
}

let arr = [1, 3, 5, 7, 9];
console.log(_binarySearch(arr, 0, 4, 1));
