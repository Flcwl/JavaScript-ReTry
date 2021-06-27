/*
 * @lc app=leetcode id=528 lang=javascript
 *
 * [528] Random Pick with Weight
 */

// @lc code=start
/**
 * @param {number[]} w
 */
var Solution = function (w) {
  // 随机概率访问
  // 第一种：让每个值拥有概率值对应的个数，最后随机即可

  // 第二种，以概率值为下标范围，进行随机访问
  // 求前缀和

  this.sums = [];
  w.forEach((v, index) => {
    this.sums[index] = (this.sums[index - 1] || 0) + v;
  });
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  // 根据值面大小设置概率 w[i] / sum(w, i)
  const sum = this.sums[this.sums.length - 1] || 0;
  const index = Math.ceil(Math.random() * sum);

  // 二分查找 index 所属的范围(下标)
  let l = 0;
  let r = this.sums.length - 1;
  while (l <= r) {
    const mid = (l + r) >> 1;
    const midVal = this.sums[mid];
    if (index <= midVal) {
      const last = this.sums[mid - 1] || 0;
      if (index > last) {
        return mid;
      }
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end
