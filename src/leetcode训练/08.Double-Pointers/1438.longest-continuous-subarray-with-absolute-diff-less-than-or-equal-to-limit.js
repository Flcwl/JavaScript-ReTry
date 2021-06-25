/*
 * @lc app=leetcode id=1438 lang=javascript
 *
 * [1438] Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  let maxQue = new MyQueue();
  let minQue = new MyQueue();

  let left = 0;
  let right = 0;
  const len = nums.length;

  let num;

  // nums = [8,2,4,7], limit = 4
  // 利用滑动窗口，记录并比较当前窗口内的最大值与最小值
  // 两个（递增|递减）单调队列维护（最小值|最大值），最终计算队首的差值
  while (right < len) {
    num = nums[right++];

    while (!maxQue.empty() && num > maxQue.tail()) maxQue.pop();
    while (!minQue.empty() && num < minQue.tail()) minQue.pop();

    maxQue.enqueue(num);
    minQue.enqueue(num);

    // 小于 limit 时继续右移试探
    // 否则 改变窗口左临边l
    if (maxQue.top() - minQue.top() > limit) {
      num = nums[left++];
      if (maxQue.top() === num) maxQue.dequeue();
      if (minQue.top() === num) minQue.dequeue();
    }
  }

  return right - left;
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
MyQueue.prototype.top = function () {
  return this.list[this.start];
};

MyQueue.prototype.tail = function () {
  return this.list[this.end - 1];
};

MyQueue.prototype.empty = function () {
  return this.start === this.end;
};
MyQueue.prototype.dequeue = function () {
  if (this.empty()) {
    return;
  }

  const ret = this.top();

  this.list[this.start] = undefined;
  this.start++;
  return ret;
};

// 从尾部移除
MyQueue.prototype.pop = function () {
  if (this.empty()) {
    return;
  }

  const ret = this.tail();

  this.list[--this.end] = undefined;
  return ret;
};

// 保底为1，一个元素时自己和自己算相差为0
