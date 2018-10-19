/**
 * 在一个长度为n的数组里的所有数字都在0到n-1的范围内。 
 * 数组中某些数字是重复的，但不知道有几个数字是重复的。
 * 也不知道每个数字重复几次。请找出数组中任意一个重复的数字。
 * 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。
 * @param {*} numbers 
 * @param {*} duplication 
 */
function duplicate(numbers, duplication) {
  // write code here
  //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
  //函数返回True/False
  if (!numbers || !numbers.length) {
    return false;
  }
  for (let i = 0; i < numbers.length; i++) {
    let idx = numbers[i];
    if (idx < 0) {
      // 修改idx，而非数组 避免idx === i，发生误会
      idx += numbers.length;
    }
    if (numbers[idx] < 0) {
      duplication[0] = idx;
      console.log(idx);
      return true;
    }
    numbers[idx] = numbers[idx] - numbers.length;
  }
  return false;
}

console.log(duplicate([2, 4, 2, 1, 4], []));  // 2
// 如果题目要求对应的输出是第一个重复的数字2。那就要顺序二分查找`NlogN`
console.log(duplicate([2, 4, 4, 1, 2], []));
console.log(duplicate([2, 0, 1], []));  // undefined