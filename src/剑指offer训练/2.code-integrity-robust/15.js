/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 * 输入一个链表，反转链表后，输出新链表的表头。
 * @param {ListNode} pHead 
 */
function ReverseList(pHead) {
  if(!pHead) {
    return null;
  }
  if(!(pHead instanceof ListNode)) {
    return {};
  }
  // write code here
  let preNode = null; // 上一节点
  let revHead = null; // 反转链表头
  let head = pHead;
  while(head) {
    // Pure Function
    let t = new ListNode( head.val );
    // let pNext = head.next;
    revHead = t;
    revHead.next = preNode;
    preNode = t;

    head = head.next;
  }
  return revHead;
}
