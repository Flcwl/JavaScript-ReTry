/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数
 * （时间复杂度应为O（1））。最小堆
 * @param {*} node 
 */
const INT_MAX = 1000000007;
let stk = [], preMin = [];
let topIdx = 0;

preMin[0] = INT_MAX;

function push(node) {
  // write code here
  stk[topIdx] = node;
  // 前缀最小值
  if(preMin[topIdx] > node) {
    preMin[++topIdx] = node;
  } else {
    // 会先进行`=`左边的运算++topIdx
    // preMin[++topIdx] = preMin[topIdx];
    preMin[topIdx + 1] = preMin[topIdx];
    topIdx++;
  }
}

function pop() {
  // write code here
  if(topIdx > 0) {
    return stk[--topIdx];
  }
}

function top() {
  // write code here
  return stk[topIdx - 1];
}

function min() {
  // write code here
  return preMin[topIdx];
}

push(2);
push(4);
push(1);
push(3);

console.log(preMin);
