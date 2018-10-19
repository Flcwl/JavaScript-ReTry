/**
 * 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，
 * 那么中位数就是所有数值排序之后位于中间的数值。
 * 如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。
 * 我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。
 * @param {*} num 
 */
// 保存比中位数大的部分
let minHeap = new Heap();
// 保存比中位数小的部分
let maxHeap = new Heap((a, b) => a - b);
let cnt = 0;

function Insert(num) {
  // write code here
  if (maxHeap.isEmpty() || num < maxHeap.top()) {
    maxHeap.insert(num);
  } else {
    minHeap.insert(num);
  }
  // 两堆间个数相差1，奇数个数时默认最大堆 >= 最小堆
  if (maxHeap.size() === minHeap.size() + 2)
    minHeap.insert(maxHeap.pop());
  if (maxHeap.size() + 1 === minHeap.size())
    maxHeap.insert(minHeap.pop());
}

function GetMedian() {
  // write code here
  if (maxHeap.size()) {
    // if (0 === maxHeap.size() + minHeap.size() >> 1) {
    if (maxHeap.size() === minHeap.size()) {
      return (maxHeap.top() + minHeap.top()) / 2;
    } else {
      return maxHeap.top();
    }
  }
}

function Heap(tCmp) {
  let data = [];
  // 默认比较规则，最小堆
  let cmp = function (a, b) {
    return b - a;
  };
  if (tCmp) {
    cmp = tCmp;
  }
  /**
   * 末尾插入元素时上挪
   */
  this.shiftUp = function (idx) {
    if (idx < 0 || idx >= data.length) {
      return;
    }
    let tmp = data[idx];
    while (idx > 0) { // 根节点无父节点
      let parIdx = (idx - 1) >> 1;
      let par = data[parIdx];
      // 和父节点比较，往上冒泡
      // 默认父节点比子节点大，则交换
      if (cmp(tmp, par) > 0) {
        data[idx] = par;
        idx = parIdx;
      } else {
        break;
      }
    }
    //  2    2    2    1
    //  3 => 3 => 2 => 2
    //  1    3    3    3
    data[idx] = tmp;
  }

  /**
   * 堆弹出根元素时，尾元素放到根元素往下挪
   */
  this.shiftDown = function (idx) {
    if (idx < 0 || idx >= data.length) {
      return;
    }
    let tmp = data[idx],
      lIdx = idx * 2 + 1;
    while (lIdx < data.length) {
      // 因为堆是由数组构建，默认存在子节点，
      // 则存在左子节点
      let minChild = data[lIdx],
        minIdx = lIdx,
        rIdx = lIdx + 1;

      if (rIdx < data.length) {
        let rChild = data[rIdx];
        // 找出两个子节点中的较小子结点
        if (cmp(rChild, minChild) > 0) {
          minChild = rChild;
          minIdx = rIdx;
        }
      }

      // 把小节点往上推
      if (cmp(minChild, tmp) > 0) {
        data[idx] = minChild;
        idx = minIdx;
        lIdx = 2 * idx + 1;
      } else {
        break;
      }
    }
    //  4   4    1   4    1      1
    // 1 3  =>  1 3  =>  2 3 => 2 3
    // 2        2        2      4
    data[idx] = tmp;
  }

  this.insert = function (item) {
    data.push(item);
    this.shiftUp(data.length - 1);
  }

  this.top = function () {
    if (!data.length) {
      return;
    }
    return data[0];
  }
  this.pop = function () {
    if (!data.length) {
      return;
    }
    let first = data[0];
    let last = data.pop();
    if (data.length) {
      data[0] = last;
      this.shiftDown(0);
    }
    return first;
  }

  this.size = function () {
    return data.length;
  }

  this.isEmpty = function () {
    return !data.length;
  }
  this.clear = function () {
    data.length = 0;
  }
  this.all = function () {
    return data;
  }
}

let heap = new Heap((a, b) => a - b);
heap.insert(3);
heap.insert(2);
heap.insert(7);
heap.insert(2);
heap.insert(8);
heap.insert(4);
heap.insert(1);
heap.insert(5);
heap.insert(9);
heap.insert(6);
console.log(heap.all());

console.log( [3, 5, 1, 4].sort((a, b) => b - a) );
