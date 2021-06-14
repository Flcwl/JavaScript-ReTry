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
