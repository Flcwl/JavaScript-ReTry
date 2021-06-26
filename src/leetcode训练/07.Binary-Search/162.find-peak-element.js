/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var findPeakElement = function (nums) {
  // 多峰找其一峰
  let l = 0;
  let r = nums.length - 1;

  // [1,2,3,2,1]
  while (l < r) {
    let mid = (l + r) >> 1;

    // 不用考虑相等 [1, 2, 3, 3, 4]
    // nums[i] != nums[i + 1] for all valid i.

    // 所以只要找到了左边递增的，右边必然有递减（或临界）
    // 临界的比任何都小，所以临界是最大值可以当做山峰
    if (nums[mid] < nums[mid + 1]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
};
// @lc code=end

// var findPeakElement = function (nums) {
//   // 多峰找其一峰
//   let ret;

//   const search = (l, r) => {
//     if (typeof ret !== "undefined") return;

//     if (l <= r) {
//       const mid = (l + r) >> 1;
//       const midLeft =
//         typeof nums[mid - 1] === "undefined" ? -Infinity : nums[mid - 1];
//       const midRight =
//         typeof nums[mid + 1] === "undefined" ? -Infinity : nums[mid + 1];

//       if (nums[mid] > midLeft && nums[mid] > midRight) {
//         return (ret = mid);
//       }
//       search(l, mid - 1);
//       search(mid + 1, r);
//     }
//   };

//   search(0, nums.length - 1);
//   return typeof ret === "undefined" ? 0 : ret;
// };
