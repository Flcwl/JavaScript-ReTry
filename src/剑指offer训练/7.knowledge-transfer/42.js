/**
 * 输入一个递增排序的数组和一个数字S，在数组中查找两个数，
 * 使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
 * @param {*} array
 * @param {*} sum
 */
function FindNumbersWithSum(array, sum) {
  // write code here
  if (!array || !array.length) {
    return [];
  }
  let left = 0,
    right = array.length - 1;
  let res = [];
  // 前提 array有序递增
  while (left < right) {
    let tsum = array[left] + array[right];
    if (tsum === sum) {
      res.push(array[left]);
      res.push(array[right]);
      return res;
    } else if (tsum > sum) {
      right--;
    } else {
      left++;
    }
  }
  return res;
}

console.log(FindNumbersWithSum([1, 2, 4, 7, 11, 15], 15));