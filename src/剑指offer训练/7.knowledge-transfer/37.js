/**
 * 统计一个数字在排序数组中出现的次数。
 * @param {*} data
 * @param {*} k
 */
function GetNumberOfK(data, k) {
  // write code here
}
/**
 * 统计一个数字在排序数组中出现的次数。
 * @param {*} data
 * @param {*} k
 */
function GetNumberOfK(data, k) {
  // write code here
  if (!data || !data.length) {
    return 0;
  }
  let idx = data.indexOf(k);
  if (idx < 0) {
    return 0;
  }
  // 改进 二分查找，返回第一个 和 最后一个的位置
  // if ((mid > 0 && data[mid - 1] != k) || mid == 0) {
  //   return mid;
  // }
  return data.lastIndexOf(k) - data.indexOf(k) + 1;
}

// console.log(GetNumberOfK([1, 2, 3, 4, 4, 4, 6], 4));

function GetFirstIndex(data, low, high, k) {
  if (low > high) {
    return -1;
  }

  let mid = (low + high) >> 1;
  console.log(mid);
  
  if (data[mid] == k) {
    if ((mid > 0 && data[mid - 1] != k) || mid == 0) {
    // if ((mid < high && data[mid + 1] != k) || mid == high) {
      return mid;
    } else {
      high = mid - 1;
      // low = mid + 1;
    }
  } else if (data[mid] > k) {
    high = mid - 1;
  } else if (data[mid] < k) {
    low = mid + 1;
  }

  return GetFirstIndex(data, low, high, k);
}

console.log( GetFirstIndex([1,2,3,3,3,3,4,5], 0, 7, 3) );
