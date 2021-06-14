/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  // 满足题目要求，使用队列实现栈
  this.list = new MyQueue()
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  const t = new MyQueue()

  // 为了实现栈的后入先出，所以把后入元素的放在队首
  t.enqueue(x)

  // 递归 list 队列，继续把之前的队列入队到新的队列
  while (!this.list.empty()) {
    t.enqueue(this.list.dequeue())
  }

  // 交换队列
  this.list = t
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.list.dequeue()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.list.top()
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.list.empty()
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

var MyQueue = function() {
  this.list = []
  this.start = 0
  this.end = 0
};

MyQueue.prototype.enqueue = function(x) {
  this.list[this.end++] = x
};
MyQueue.prototype.top = function(x) {
  return this.list[this.start]
};
MyQueue.prototype.empty = function(x) {
  return this.start === this.end
};
MyQueue.prototype.dequeue = function(x) {
  if (this.empty()) {
    return
  }

  const ret = this.top()

  this.list[this.start] = undefined
  this.start++
  return ret
};
