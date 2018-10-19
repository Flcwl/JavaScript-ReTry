/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 * 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，
 * 重复的结点不保留，返回链表头指针。 
 * 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
 * @param {*} pHead 
 */
function deleteDuplication(pHead) {
  // write code here
  if (!pHead) {
    return null;
  }
  if (!(pHead instanceof ListNode)) {
    return null;
  }
  // new 一个作头指针
  let first = new ListNode(-1);
  let p = pHead;
  let head = first;

  // 已排序链表
  while (p && p.next) { // good way
    if (p.val !== p.next.val) {
      first.next = p;
      first = p;
      p = p.next;
      // important 去掉关联
      first.next = null;
    } else {
      let val = p.val;
      p = p.next;
      // 跳过重复
      while (p && p.val === val) {
        p = p.next;
      }
    }
  }
  if (p) {
    // 最后一节点
    first.next = p;
  }
  return head.next;
}
