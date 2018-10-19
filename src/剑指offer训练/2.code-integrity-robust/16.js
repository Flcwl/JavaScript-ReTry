/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 * 输入两个单调递增的链表，输出两个链表合成后的链表，
 * 当然我们需要合成后的链表满足单调不减规则。
 * @param {*} pHead1 
 * @param {*} pHead2 
 */
function Merge(pHead1, pHead2) {
  // write code here
  let head1 = pHead1,
    head2 = pHead2;
  let mid = new ListNode();
  let head = null;

  while (head1 && head2) {
    if (head1.val > head2.val) {
      mid.next = new ListNode(head2.val);
      head2 = head2.next;
    } else {
      mid.next = new ListNode(head1.val);
      head1 = head1.next;
    }
    mid = mid.next;
    if (head === null) {
      head = mid;
    }
  }
  while (head1) { // head2 为空 || head2 先遍历完
    mid.next = new ListNode(head1.val);
    mid = mid.next;
    if (head === null) {
      head = mid;
    }
    head1 = head1.next;
  }
  while (head2) {
    mid.next = new ListNode(head2.val);
    mid = mid.next;
    if (head === null) {
      head = mid;
    }
    head2 = head2.next;
  }
  return head;
}