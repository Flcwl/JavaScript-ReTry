/*
 * @lc app=leetcode id=218 lang=javascript
 *
 * [218] The Skyline Problem
 */

// @lc code=start
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
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

  // 题目要我们求轮廓，其实就是高的盖住矮的，然后记录那些转折点
  // 而转折点就是每一个建筑物的开始点，结束点位
  //
  // 记录当前的最高点，如果它还在（结束点还没到），它就可以继续遮住那些矮的，
  // 直到结束点到了，我们就把它删掉（使用优先队列，当前最高点什么时候消失就是转折点）
  // 动画演示https://segmentfault.com/a/1190000021848550

  const ENTER = 0;
  const EXIT = 1;
  const points = [];

  // 根据题意，buildings 默认按照 start 值非递减
  buildings.forEach(([start, end, y]) => {
    // 开始点
    points.push([start, y, ENTER]);
    // 结束点
    points.push([end, y, EXIT]);
  });

  points.sort((a, b) => {
    // 先按照 x  坐标位置排序，从小到大
    // 保证顺序扫描
    if (a[0] !== b[0]) return a[0] - b[0];

    // 然后按照类型排序， enter 排在前面，exit 排在后面
    // 保证不会遗漏建筑物
    if (a[2] !== b[2]) return a[2] - b[2];

    // 最后按照 y 的高度排序，eg：[[1,2,1], [1,2,3]]
    // 对于开始点，高的排在前面，保证高的先入堆，避免矮盖高
    // 对于结束点，高的排在后面，保证高的后出堆，避免高的无法盖住矮的
    return a[2] === ENTER ? b[1] - a[1] : a[1] - b[1];
  });

  console.log("[ points ] >", points);
  // 记录当前扫描点的建筑最高点（矮的都会被覆盖）
  const maxHeap = new Heap((parent, child) => child - parent);

  // 当没有建筑物时，即为地面点
  maxHeap.push(0);

  // 记录之前的最高点，用于比较拐点出现
  let prev = 0;

  const ret = [];

  points.forEach(([x, y, type]) => {
    if (type === ENTER) {
      // 进入即入堆
      maxHeap.push(y);
    } else {
      // 退出则出堆（即使高度有多个在堆里，也只出一个）
      maxHeap.remove(maxHeap.findIndex((v) => v === y));
    }

    const curMaxY = maxHeap.peek();

    // 当堆中最大高度出现变化（出堆了），即为拐点
    if (prev != curMaxY) {
      ret.push([x, curMaxY]);
      prev = curMaxY;
    }
  });

  return ret;
};
// @lc code=end
