/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 
 * 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 
 * 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
 * NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 * 
 * @param {*} rotateArray 
 */
function minNumberInRotateArray(rotateArray) {
  // write code here
  if (!rotateArray || !rotateArray.length) {
    return 0;
  }
  // all are not negative 递增
  let left = 0,
    right = rotateArray.length - 1;

  while (left < right) {
    if (rotateArray[left] < rotateArray[right]) {
      return rotateArray[left];
    }
    // +-  优先级高于 移位
    let mid = left + (right - left >> 1);
    if (rotateArray[left] < rotateArray[mid]) {
      left = mid;
    } else if (rotateArray[right] > rotateArray[mid]) {
      right = mid;
    } else {
      // 退化为On
      left++;
    }
    if (right - left === 1 && rotateArray[right] <= rotateArray[left]) {
      return rotateArray[right];
    }
    // console.log(left, right);

  }
  return rotateArray[left];
}
// 0 6
console.log(minNumberInRotateArray([3, 3, 3, 3, 1, 2, 3]));
console.log(minNumberInRotateArray([3, 3, 3, 3, 4, 3, 3]));