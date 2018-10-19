/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
 * 并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 * @param {*} array 
 */
function reOrderArray(array) {
  // write code here
  let a = [], b = [];
  for (let i = 0; i < array.length; i++) {
    if(array[i] & 1) {  // 奇数
      a.push(array[i]);
    } else {
      b.push(array[i]);
    }
  }
  return [...a, ...b]; // pure function. concat also
}

console.log(reOrderArray( [2, 1, 5, 4, 3] ));