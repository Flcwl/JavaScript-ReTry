/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // http://www.cs.yale.edu/homes/aspnes/pinewiki/QuickSelect.html
  // https://leetcode.com/problems/kth-largest-element-in-an-array/discuss/584913/Intuitive-JavaScript-Solution-with-Quick-Sort
  return quickSelect(nums, 0, nums.length - 1, k);
};

// 3 2 1 5 6 4        k=2, n=6
// l          r           pivot=4
// 3 2 1 5 6 4
//       r l
//         p            l+=1; r=end
// 3 2 1 4 6 5       pivot=5
//            lr
// 3 2 1 4 6 5
//         r  l
// 3 2 1 4 5 6
//         r  l
//            p          return 5
function quickSelect(arr, start, end, k) {
  // 每次处理后，基准 pivotIndex 的位置值必然是有序中对应的位置的值
  const pivotIndex = partition(arr, start, end);
  // 计算基准是数组中第几大的
  // pivotIndex 之前的值都是比 pivotIndex 小（共 pivotIndex 个），
  // pivotIndex之后的值都是比 pivotIndex 大（共 arr.length - (pivotIndex + 1) 个）
  // 所以 pivotIndex 的值对应的就是第几大的，即 arr.length - (pivotIndex + 1) + 1
  const pivotThLargest = arr.length - pivotIndex

  // 刚好等于
  if (pivotThLargest === k) {
    return arr[pivotIndex]
  // 目标在基准右边
  } else if (k < pivotThLargest) {
    return quickSelect(arr, pivotIndex + 1, end, k);
  // 目标在基准左边
  } else if (k > pivotThLargest) {
    return quickSelect(arr, start, pivotIndex - 1, k);
  }
};

function partition(arr, start, end) {
  // 简单点，以结尾元素作为基准值，当然可以任取元素
  const pivot = arr[end];
  let left = start;
  let right = end - 1;
  // [3,3,3,3,3,3] // 1
  while (left <= right) {
    while (arr[left] < pivot) left++;
    while (arr[right] > pivot) right--;
    // left 对应元素大于 pivot，right 对应元素小于 pivot，则交换
    if (left <= right) {
      swap(arr, left, right);
      left++
      right--;
    }
  }

  // 处理基准元素位置，到中间
  swap(arr, left, end);
  return left;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
