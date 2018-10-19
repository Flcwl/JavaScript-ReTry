/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 * 给一个链表，若其中包含环，请找出该链表的环的入口结点，
 * 否则，输出null。
 * @param {*} pHead 
 */
function EntryNodeOfLoop(pHead) {
  // write code here
  if (!pHead) {
    return null;
  }
  let head = pHead;
  let mp = new Map();
  while (head) {
    if (mp.get(head)) {
      return head;
    }
    mp.set(head, true);
    head = head.next;
  }
  return null;

  // 检验环 `N`为环长，`M`为起点到环入口长
  // 快慢节点操场赛跑原理，相遇点即在环内
  // A跑半圈 B跑一圈，A跑一圈，B跑两圈。    复杂度`2N + M`
  // 从相遇点再起跑到达相遇点，获取环长度。  复杂度`N`
  // 再设两指针从原起点同速出发，一指针先行`N`步，
  // 再开始赛跑走`M`步，相遇即到达环入口点 即`N + M % N == M % N`。
}