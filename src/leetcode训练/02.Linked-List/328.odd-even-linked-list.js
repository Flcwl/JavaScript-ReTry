/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
var oddEvenList = function(head) {
  // 题意：奇数位置的节点都挪到前面去，位数位置的节点都挪到后面去
  // 1 2 3 4 5
  // 1 3 5 2 4
  let node = head
  let odd = new ListNode(-1)
  let even = new ListNode(-1)
  let oddHead = odd
  let evenHead = even
  let current = 1

  while (node) {
    if ((current & 1) === 1) {
      odd.next = node
      odd = odd.next
    } else {
      even.next = node
      even = even.next
    }

    node = node.next
    current++
  }

  odd.next = evenHead.next
  // 避免成环
  even.next = null

  return oddHead.next
};
// @lc code=end

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// 1 2 3 4 5
