/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  function MinHeap(cmp = (parent, child) => parent - child) {
    // 树结构
    this.list = [];
    this.cmp = cmp;
  }

  MinHeap.prototype.size = function () {
    return this.list.length;
  };

  MinHeap.prototype.empty = function () {
    return this.list.length === 0;
  };

  MinHeap.prototype.push = function (x) {
    this.list.push(x);
    this._bubbleUp(this.list.length - 1);
  };

  MinHeap.prototype._bubbleUp = function (pos) {
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

  MinHeap.prototype.pop = function () {
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

  MinHeap.prototype._bubbleDown = function (pos) {
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

  MinHeap.prototype.swap = function (p1, p2) {
    const t = this.list[p1];
    this.list[p1] = this.list[p2];
    this.list[p2] = t;
  };

  const mp = new Map();

  nums.forEach((item) => {
    mp.set(item, (mp.get(item) || 0) + 1);
  });

  const heap = new MinHeap((x, y) => y[1] - x[1]);

  mp.forEach((val, key) => {
    // pair: [point, dist]
    heap.push([key, val]);
  });

  const ret = [];
  // 从最小堆中提取 k 个堆头
  while (k-- && !heap.empty()) {
    ret.push(heap.pop()[0]);
  }

  return ret;
};
// @lc code=end
