/*
 * @lc app=leetcode id=901 lang=javascript
 *
 * [901] Online Stock Span
 */

// @lc code=start

var StockSpanner = function() {
  this.list = []
  // 至今连续多少天小于当天股价
  this.stack = []
  this.result = []
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  const i = this.list.length

  this.list.push(price)
  this.result.push(1)

  // 单调递减栈
  while (
    this.stack.length > 0 &&
    this.list[this.stack[this.stack.length - 1]] <= price
  ) {
    const topIndex = this.stack.pop()
    // 累加过去低于股价的天数
    this.result[i] += this.result[topIndex]
  }

  this.stack.push(i)

  return this.result[i]
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end
