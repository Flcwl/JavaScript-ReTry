/**
 * 连续子数组的最大和(子向量的长度至少是1)
 * @param {*} array 
 */
function FindGreatestSumOfSubArray(array) {
  // write code here
  if (!array || !array.length) {
    return 0;
  }
  // array[0]
  let sum = 0,
    res = 0;
  let max = -1000000007;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    // 优化 最大连续子数组和 不可能比数组中任一元素值小
    // if (sum < array[i]) {
    //   sum = array[i];
    // }
    if (sum < 0) {
      sum = 0;
    }
    if (sum > res) {
      res = sum;
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  if (max < 0) {
    return max;
  }
  return res;
}

console.log(FindGreatestSumOfSubArray([-1, -1]));