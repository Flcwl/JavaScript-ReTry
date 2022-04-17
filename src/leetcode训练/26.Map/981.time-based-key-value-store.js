/*
 * @lc app=leetcode id=981 lang=javascript
 *
 * [981] Time Based Key-Value Store
 */

// @lc code=start

var TimeMap = function() {
  this.timeMap = new Map();
  this.min = 10e7 + 1
  this.max = 0
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  const result = this.timeMap.get(key) || {}
  result[timestamp] = value
  this.timeMap.set(key, result)

  // 优化：可以存储在 key 对应的 value 中
  this.min = Math.min(timestamp, this.min)
  this.max = Math.max(timestamp, this.max)
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  const result = this.timeMap.get(key)
  if (!result) return ''

  // 我们要找小于等于 timestamp，且距离 timestamp 最近的一个
  if (timestamp < this.min) return ''

  if (result[timestamp] !== undefined) return result[timestamp]

  // 二分搜索
  const searchMax = (left, right) => {
    if (left > right) return ''

    const mid = left + ((right - left) >> 1)

    // 一直往下标大（timestamp作为下标）的搜索
    const r = searchMax(mid + 1, right)
    if (r !== '') return r

    if (result[mid] !== undefined) return result[mid]

    return searchMax(left, mid - 1)
  }

  const left = this.min
  const right = Math.min(timestamp - 1, this.max)

  return searchMax(left, right)
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end
