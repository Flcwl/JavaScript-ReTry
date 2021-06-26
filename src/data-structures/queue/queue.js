var MyQueue = function () {
  // 重构：使用链表实现
  this.list = [];
  this.start = 0;
  this.end = 0;
};

MyQueue.prototype.enqueue = function (x) {
  this.list[this.end++] = x;
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
MyQueue.prototype.top = function () {
  return this.list[this.start];
};
MyQueue.prototype.tail = function () {
  return this.list[this.end - 1];
};
MyQueue.prototype.empty = function (x) {
  return this.start === this.end;
};
