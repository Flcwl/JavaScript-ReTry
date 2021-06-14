/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.list = new MyStack()
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  const t = new MyStack()

  // 首 -> 尾
  // 1 2
  // 全出后
  // 2 1
  // 加入新元素
  // 2 1 3
  // 全压入
  // 3 1 2

  // 全出
  while (!this.list.empty()) {
    t.push(this.list.pop())
  }

  // 为了实现队列先进先出，把后入的元素放在栈的首部
  t.push(x)

  // 压回
  while (!t.empty()) {
    this.list.push(t.pop())
  }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.list.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.list.top()
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.list.empty()
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

var MyStack = function() {
  this.list = []
  this.pos = -1
};
MyStack.prototype.push = function(x) {
  this.list[++this.pos] = x
};
MyStack.prototype.pop = function() {
  if (this.empty()) {
    return
  }

  const ret = this.top()
  this.list[this.pos--] = undefined
  return ret
};
MyStack.prototype.top = function() {
  return this.list[this.pos]
};
MyStack.prototype.empty = function() {
  return this.pos < 0
};
