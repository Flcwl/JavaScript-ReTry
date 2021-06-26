/*
 * @lc app=leetcode id=895 lang=javascript
 *
 * [895] Maximum Frequency Stack
 */

// @lc code=start

var FreqStack = function () {
  this.maxHeap = new Heap((parent, child) => {
    if (child[2] === parent[2]) {
      return child[1] - parent[1];
    }
    return child[2] - parent[2];
  });
  this.seq = 0;
  this.mp = {};
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  // 首先根据频率，然后再根据原栈规则（根据堆的规则，相同频率的值会插在顶部，也就是）
  let freq = this.mp[val] || 0;
  // 频率增加
  this.mp[val] = ++freq;

  this.maxHeap.push([val, this.seq++, freq]);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const max = this.maxHeap.pop();
  if (max) {
    const [val] = max;
    this.mp[val]--;

    return val;
  }
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
// @lc code=end
/**
 * 堆，默认最小堆
 *
 * @param {*} cmp 返回结果大于 0，则进行值交换
 */
function Heap(cmp = (parent, child) => parent - child) {
  // 树结构
  this.list = [];
  this.cmp = cmp;
}

Heap.prototype.size = function () {
  return this.list.length;
};

Heap.prototype.empty = function () {
  return this.list.length === 0;
};

Heap.prototype.push = function (x) {
  this.list.push(x);
  this._bubbleUp(this.list.length - 1);
};

Heap.prototype._bubbleUp = function (pos) {
  while (pos > 0) {
    // 使用完全二叉树，计算数组中元素的位置
    //       0
    //    1    2
    //  3 4  5 6
    const parentPos = (pos - 1) >> 1;

    // 根据关系，自下而上往上挪动
    if (this.cmp(this.list[parentPos], this.list[pos]) > 0) {
      this.swap(parentPos, pos);
    } else {
      // 剪枝，无需冒泡
      break;
    }

    pos = parentPos;
  }
};

Heap.prototype.pop = function () {
  if (this.list.length === 1) {
    return this.list.pop();
  }

  const head = this.list[0];

  // 不存在，则不做任何处理
  if (head === undefined) {
    return;
  }

  this.list[0] = this.list.pop();
  this._bubbleDown(0);

  return head;
};

Heap.prototype._bubbleDown = function (pos) {
  while (this.list[pos] !== undefined) {
    //       0
    //    1    2
    //  3 4  5 6
    const leftChildPos = (pos << 1) + 1;
    const rightChildPos = leftChildPos + 1;
    let swapPos = pos;

    // 基于完全二叉树，没有左孩子则意味着没有右孩子
    if (this.list[leftChildPos] !== undefined) {
      // 1. 处理与左孩子的交换
      if (this.cmp(this.list[pos], this.list[leftChildPos]) > 0) {
        swapPos = leftChildPos;
      }

      // 2. 处理与右孩子的交换
      if (
        this.list[rightChildPos] !== undefined &&
        this.cmp(this.list[pos], this.list[rightChildPos]) > 0 &&
        // 右孩子比左孩子还小
        this.cmp(this.list[leftChildPos], this.list[rightChildPos]) > 0
      ) {
        swapPos = rightChildPos;
      }
    }

    // 剪枝，无需冒泡
    if (swapPos === pos) {
      break;
    }

    this.swap(swapPos, pos);
    pos = swapPos;
  }
};

Heap.prototype.swap = function (p1, p2) {
  const t = this.list[p1];
  this.list[p1] = this.list[p2];
  this.list[p2] = t;
};

Heap.prototype.peek = function () {
  const head = this.list[0];
  return head;
};

Heap.prototype.findIndex = function (cb) {
  return this.list.findIndex(cb);
};

Heap.prototype.remove = function (pos) {
  if (pos < 0 || pos > this.list.length - 1) return;

  if (pos === this.list.length - 1) {
    return this.list.pop();
  }

  const node = this.list[pos];

  this.list[pos] = this.list.pop();
  this._bubbleDown(pos);

  return node;
};

const t = new FreqStack();
console.log(t.push(5));
console.log(t.push(7));
console.log(t.push(5));
console.log(t.push(7));
console.log(t.push(4));
console.log(t.push(5));
console.log(t.pop());
console.log(t.pop());
console.log(t.pop());
console.log(t.pop());
