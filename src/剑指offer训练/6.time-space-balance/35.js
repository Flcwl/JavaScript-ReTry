/**
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，
 * 则这两个数字组成一个逆序对。
 * 输入一个数组,求出这个数组中的逆序对的总数P。
 * 并将P对1000000007取模的结果输出。 即输出P%1000000007
 * @param {*} data 
 */
let sum = 0;
let tArr;

function InversePairs(data) {
  // write code here
  // 分治 难T
  if (!data || !data.length) {
    return 0;
  }
  sum = 0;
  tArr = Array(data.length).fill(void 0);
  merge(data, 0, data.length - 1);
  return parseInt(sum % 1000000007);
}

function merge(arr, left, right) {
  if (left < right) { // 优化？
    // 四则运算优先级高于移位操作
    let mid = left + ((right - left) >> 2);
    // console.log(mid);

    merge(arr, left, mid);
    merge(arr, mid + 1, right);
    mergeSort(arr, mid, left, right);
    copyArray(arr, left, right);
  }
}

function mergeSort(arr, mid, left, right) {
  let t = left,
    posL = left,
    posR = mid + 1;
  while (posL <= mid && posR <= right) {
    if (arr[posL] < arr[posR]) {
      tArr[t++] = arr[posL++];
    } else {
      tArr[t++] = arr[posR++];
      // 逆序 各自左右有序
      //  3 4 | 1 2
      // 当置换1到3时，逆序对：31 41
      sum +=  mid - posL + 1;
    }
  }
  while (posL <= mid) {
    tArr[t++] = arr[posL++];
  }
  while (posR <= right) {
    tArr[t++] = arr[posR++];
  }
}

function copyArray(a, left, right) {
  for (let i = left; i <= right; ++i) {
    a[i] = tArr[i];
  }
}

InversePairs([1, 3, 7, 4, 2, 6, 7, 5]);