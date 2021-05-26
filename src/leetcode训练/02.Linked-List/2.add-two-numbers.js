/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let sum = l1.val + l2.val
  let carry = sum >= 10 ? 1 : 0
  sum = sum % 10

  let ret = new ListNode(sum)
  let t = ret

  // 按位加，进位保留 加到下一位
  while (l1.next && l2.next) {
    l1 = l1.next
    l2 = l2.next

    sum = l1.val + l2.val + carry

    ret.next = new ListNode(sum % 10)
    carry = sum >= 10 ? 1 : 0
    ret = ret.next
  }

  // 如果长度不一，需要处理继续按位加
  l1 = l1.next ? l1 : l2.next ? l2 : null

  while (l1 && l1.next) {
    sum = carry + l1.next.val
    ret.next = new ListNode(sum % 10)
    carry = sum >= 10 ? 1 : 0
    l1 = l1.next
    ret = ret.next
  }

  // 最后如果存在进位，需要进位补一
  if (carry === 1) {
    ret.next = new ListNode(1)
  }

  return t
};
// @lc code=end

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
