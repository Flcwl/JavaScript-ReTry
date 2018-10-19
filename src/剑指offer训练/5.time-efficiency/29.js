/**
 * 输入n个整数，找出其中最小的K个数。
 * 例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。
 * @param {*} input
 * @param {*} k
 */
function GetLeastNumbers_Solution(input, k) {
  // write code here
  // sort is ok but not best
  if (!k || k < 1 || !input || !input.length) {
    return [];
  }
  // 无聊堆  other better way: 最大堆保存这k个数 O(NlogK)
  let heap = [...input];
  let n = parseInt(heap.length / 2);
  for (let i = n - 1; i >= 0; --i) {
    buildHeap(heap, i);
  }
  let res = [];
  for (let i = 0; i < k; i++) {
    if (heap[0] === undefined) {
      return [];
    }
    res.push(heap[0]);
    if (heap.length === 1) {
      if (i === k - 1) {
        return res;
      }
      return [];
    }
    heap[0] = heap[heap.length - 1];
    heap.length--;
    buildHeap(heap, 0);
  }
  return res;
}

function buildHeap(heap, index) {
  let lf = index * 2 + 1;
  let rg = lf + 1;
  let minIndex = index;
  if (heap[lf] !== undefined && heap[rg] !== undefined) {
    minIndex = heap[lf] < heap[rg] ? lf : rg;
  } else if (heap[lf] !== undefined) {
    minIndex = lf;
  } else if (heap[rg] !== undefined) {
    minIndex = rg;
  }
  if (heap[index] > heap[minIndex]) {
    let t = heap[index];
    heap[index] = heap[minIndex];
    heap[minIndex] = t;
    buildHeap(heap, minIndex);
  }
}

console.log(GetLeastNumbers_Solution([6, 1, 3, 2, 5, 2, 3], 7));
