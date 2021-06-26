/*
 * @lc app=leetcode id=540 lang=javascript
 *
 * [540] Single Element in a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let l = 0;
  let r = nums.length >> 1;
  // 根据题意：其中有且只有一个是单元素，其它都是双元素

  // 假如都是双元素，则 nums[2 * i] === nums[2 * i + 1]
  while (l < r) {
    const mid = (l + r) >> 1;
    if (nums[2 * mid] !== nums[2 * mid + 1]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return nums[l * 2];
};
// @lc code=end

// var singleNonDuplicate = function (nums) {
//   let l = 0;
//   let r = nums.length - 1;

//   let ret;
//   const search = (l, r) => {
//     if (typeof ret !== "undefined") return;

//     if (l <= r) {
//       const mid = (l + r) >> 1;
//       if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
//         ret = mid;
//         return;
//       }
//       search(l, mid - 1);
//       search(mid + 1, r);
//     }
//   };

//   search(0, nums.length - 1);
//   return nums[ret];
// };
