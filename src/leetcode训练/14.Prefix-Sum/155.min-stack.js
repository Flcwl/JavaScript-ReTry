/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start

var MinStack = function () {
  this.stack = []
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.stack.length === 0) {
    this.stack.push([val, val])
  } else {
    // 根据栈顺序表的特性，进行前缀最小值缓存
    this.stack.push([
      val,
      Math.min(val, this.getMin())
    ])
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1][0]
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // 常数级复杂度
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1][1]
  }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

