/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 * 输入两个链表，找出它们的第一个公共结点。
 * @param {*} pHead1
 * @param {*} pHead2
 */
function FindFirstCommonNode(pHead1, pHead2) {
  // write code here
  // 暴力复杂度Onm
  if (!pHead1 || !pHead2) {
    return null;
  }
  if (pHead1 === pHead2) {
    return pHead1;
  }
  // 建立映射 (n+m)logn
  let mp = new Map();
  while (pHead1) {
    mp.set(pHead1, true);
    pHead1 = pHead1.next;
  }
  while (pHead2) { // 这里以`pHead2`先
    if (mp.get(pHead2)) {
      return pHead2;
    }
    pHead2 = pHead2.next;
  }
  return null;
}

// other way
// ListNode * FindFirstCommonNode(ListNode * pHead1, ListNode * pHead2) {
//   ListNode * p1 = pHead1;
//   ListNode * p2 = pHead2;
//   while (p1 != p2) {
//     p1 = (p1 == NULL ? pHead2 : p1 - > next);
//     p2 = (p2 == NULL ? pHead1 : p2 - > next);
//   }
//   return p1;
// }