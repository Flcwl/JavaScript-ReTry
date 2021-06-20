/*
 * @lc app=leetcode id=380 lang=javascript
 *
 * [380] Insert Delete GetRandom O(1)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  // this.data = new Set();
  this.data = [];
  this.mp = new Map();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.mp.has(val)) {
    return false;
  }

  this.mp.set(val, this.data.length);
  this.data.push(val);

  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  const pos = this.mp.get(val);

  if (pos === undefined) return false;

  this.mp.delete(val);

  // 使用尾部元素交换，完成 o1 的删除
  const end = this.data.pop();

  // 要移除的元素如果是最后元素，就直接移除
  // 否则，彼此交换位置
  if (end !== val) {
    this.data[pos] = end;
    this.mp.set(end, pos);
  }

  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const pos = Math.floor(Math.random() * this.data.length);
  return this.data[pos];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
