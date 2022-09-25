/*
 * @lc app=leetcode id=384 lang=javascript
 *
 * [384] Shuffle an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.arr = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.arr;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const len = this.arr.length;
  const ret = [...this.arr];

  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * len);

    const num = ret[i];
    ret[i] = ret[randomIndex];
    ret[randomIndex] = num;
  }

  return ret;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end
