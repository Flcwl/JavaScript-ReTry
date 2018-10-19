/**
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
 * @param {*} node
 */
let stk1 = [],
  stk2 = [];  // 后进先出

function push(node) {
  // write code here
  while (stk2.length !== 0) {
    // `stk2`中数据全部移到`stk1`中
    stk1.push( stk2.pop() );
  }
  stk1.push(node);
}

function pop() {
  // write code here
  if (stk1.length === 0) {
    if(stk2.length !== 0) {
      return stk2.pop();  // 全在`stk2`上
    }
    return; // 都为空
  }
  // 两个栈都有数据
  while(stk1.length > 1) {
    stk2.push( stk1.pop() );
  }
  return stk1.pop();
}
