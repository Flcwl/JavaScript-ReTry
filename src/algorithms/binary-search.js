/**
 * Binary Search
 *
 * @param {[]} arr A sorted array
 * @param {number} target
 * @param {number} fromIndex
 * @param {number} toIndex
 * @returns {number}
 */
const binarySearch = (arr, target, fromIndex, toIndex) => {
  let left = fromIndex || 0;
  let right = (toIndex == null ? arr.length : toIndex) - 1;
  let mid;
  let midVal;

  while (left < right) {
    // Prevent num overflow, not written as `mid = (left + right) >> 1`.
    mid = left + ((right - left) >> 1);
    midVal = arr[mid];

    if (midVal < target) {
      left = mid + 1;
    } else if (midVal > target) {
      right = mid - 1;
    } else {
      // Target found.
      return mid;
    }
  }
  // No found value when `left === right` here

  // Check is target
  if (arr[left] === target) {
    return left;
  }

  // Mark the final location when target not found
  // Return `-1` if less than all
  return -(left + 1);
};

module.exports = binarySearch;
