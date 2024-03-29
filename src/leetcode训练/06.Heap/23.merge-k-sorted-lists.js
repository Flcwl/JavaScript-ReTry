/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
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

  const heap = new Heap((parent, child) => parent.val - child.val);

  lists.forEach((root) => {
    while (root) {
      heap.push(root);
      root = root.next;
    }
  });

  // 如果 node 节点，则根据题意直接返回 null
  const root = heap.pop() || null;
  let t = root;

  while (t) {
    t.next = heap.pop() || null;
    t = t.next;
  }

  // if (t) {
  //   t.next = null;
  // }

  return root;
};
// @lc code=end
