/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false

  // 3 2 0 -4 2
  let fast = head
  let slow = head
  // 快慢指针，环链检测（必相遇）
  // 证明：
  // 如果没有环，快指针先行，必先到达终点 null，结束
  // 如果有环，当慢指针进入环，一个跑两步，一个跑一步，必然会在未来某一刻相遇
  // 数学归纳法倒推（x 标识格子）：
  // f s x                         // f 和 s 相差 1 格，走 1 步即相遇
  // f x s x                      // f 和 s 相差 2 格，走 1 步转为上一步
  // f x x s x                   // f 和 s 相差 3 格，走 1 步转为上一步
  // f x x x s x                // f 和 s 相差 4 格，走 1 步转为上一步
  // f x ... x s x                // f 和 s 相差 N 格，走 1 步转为上一步

  // 为什么选择 2 倍速
  // 相对速度只差一个格子，快的只能一个一个格子的去拉进和慢的距离，最后必然相遇且最多只跑一圈

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      return true
    }
  }
  return false
};
// @lc code=end
