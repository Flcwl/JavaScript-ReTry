/*
 * @lc app=leetcode id=621 lang=javascript
 *
 * [621] Task Scheduler
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const queue = new MyQueue();
  const ret = [];
  const mp = new Map();

  for (let i = 0; i < tasks.length; ++i) {
    const task = tasks[i];
    const waitTimes = mp.get(task) || 0;

    if (waitTimes > 0) {
      queue.enqueue(task);
    } else {
      ret.push(task);

      // 每次执行后， 等待时间减一
      mp.forEach((val, key) => mp.set(key, val - 1));

      // 设置空档期
      mp.set(task, n);
    }
  }

  console.log(ret);
  while (!queue.empty()) {
    const t = queue.top();
    const waitTimes = mp.get(t) || 0;

    if (waitTimes > 0) {
      ret.push("idle");

      // 每次执行后， 等待时间减一
      mp.forEach((val, key) => mp.set(key, val - 1));
    } else {
      ret.push(t);
      queue.dequeue();

      // 每次执行后， 等待时间减一
      mp.forEach((val, key) => mp.set(key, val - 1));
      // 设置空档期
      mp.set(t, n);

      let count = 0;
      while (queue.top() === t) {
        queue.dequeue();
        count++;
      }
      while (count > 0) {
        queue.enqueue(t);
        count--;
      }
    }
  }

  return ret.length;
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

console.log(
  leastInterval(["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "E"], 2)
);
