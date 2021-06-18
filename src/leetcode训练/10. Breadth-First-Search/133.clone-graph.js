/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return null;

  const queue = new MyQueue();
  const visitedMp = new Map();

  let ret = new Node(node.val);
  visitedMp.set(node, ret);
  queue.enqueue(node);

  while (!queue.empty()) {
    const top = queue.dequeue();
    const cloned = visitedMp.get(top);

    top.neighbors.forEach((item) => {
      let t = visitedMp.get(item);
      if (!t) {
        t = new Node(item.val);
        visitedMp.set(item, t);
        queue.enqueue(item);
      }
      cloned.neighbors.push(t);
    });
  }

  return ret;
};
// @lc code=end

var MyQueue = function () {
  this.list = [];
  this.start = 0;
  this.end = 0;
};

MyQueue.prototype.enqueue = function (x) {
  this.list[this.end++] = x;
};
MyQueue.prototype.top = function (x) {
  return this.list[this.start];
};
MyQueue.prototype.empty = function (x) {
  return this.start === this.end;
};
MyQueue.prototype.dequeue = function (x) {
  if (this.empty()) {
    return;
  }

  const ret = this.top();

  this.list[this.start] = undefined;
  this.start++;
  return ret;
};

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}
