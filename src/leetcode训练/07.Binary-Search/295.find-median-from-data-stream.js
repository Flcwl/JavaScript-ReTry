/*
 * @lc app=leetcode id=295 lang=javascript
 *
 * [295] Find Median from Data Stream
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.data = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  const arr = this.data;
  let l = 0;
  let r = arr.length - 1;

  // []
  // [1]
  // [1,2]
  // [1,2,3]
  // [1,2,3,4]
  while (l <= r) {
    const mid = (l + r) >> 1;

    if (arr[mid] > num) {
      r = mid - 1;
    } else if (arr[mid] < num) {
      l = mid + 1;
    } else {
      l = mid;
      break;
    }
  }

  this.data.splice(l, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let l = 0;
  let r = this.data.length - 1;
  const mid = (l + r) >> 1;

  return this.data.length & 1
    ? this.data[mid]
    : (this.data[mid] + this.data[mid + 1]) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
