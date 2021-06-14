/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const ret = [];

  // 检查root 为 null
  if (!root) {
    return ret;
  }

  // bfs 题型，使用队列一把嗦
  const queue = new MyQueue();
  queue.enqueue(root);

  // 当前层数个数为 root 层，定义 0 为第一层
  let n = 0;
  // 当前层数的节点数，初始为 1
  let count = 1;
  // 记录下一层的节点数，当前层遍历结束开始下一层节点遍历
  let nextCount = 0;

  while (!queue.empty()) {
    const node = queue.dequeue();

    if (node.left) {
      nextCount++;
      queue.enqueue(node.left);
    }

    if (node.right) {
      nextCount++;
      queue.enqueue(node.right);
    }

    (ret[n] = ret[n] || []).push(node.val);
    count--;

    // 根据当前层节点个数是否遍历完，以判断当前层结束
    if (count < 1) {
      n++;
      count = nextCount;
      nextCount = 0;
    }
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
