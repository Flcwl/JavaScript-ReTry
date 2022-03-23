/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  // 检测环并且指向环的入口
  if (!head) return null

  // 3 2 0 -4 2
  let fast = head
  let slow = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      // 有环
      // 证明环内剩余距离 + (n - 1) * r  === 起点到环入口距离
      // https://blog.csdn.net/willduan1/article/details/50938210
      fast = head
      while (fast && fast !== slow) {
        fast = fast.next
        slow = slow.next
      }

      return fast
    }
  }
  return null
};
// @lc code=end
