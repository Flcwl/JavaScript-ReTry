/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // 作为前节点，初始为 null
  let ret = null
  let t

  while (head) {
    t = new ListNode(head.val)
    // t的下一个节点指向前节点，发生反转
    t.next = ret
    // ret 缓存了最新的头（前节点）
    ret = t
    head = head.next
  }

  return ret
};
// @lc code=end

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
