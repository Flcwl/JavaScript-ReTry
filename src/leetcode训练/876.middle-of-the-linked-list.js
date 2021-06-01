/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
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
var middleNode = function(head) {
  // length: 1 and 100.

  // 快慢节点求中间节点
  // 快跑 比 慢跑 快 2 倍，倒退快跑跑完，则慢跑才跑了 1 / 2
  let fast = head
  let slow = head

  // initial state
  // f
  // 1 -> 2 -> 3 -> 4 -> 5
  // s

  // 1st loop
  //           f
  // 1 -> 2 -> 3 -> 4 -> 5
  //      s

  // 2nd loop
  //                     f
  // 1 -> 2 -> 3 -> 4 -> 5
  //           s
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  return slow
};
// @lc code=end

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// var middleNode = function(head) {
//   // length: 1 and 100.
//   const arr = []
//   while (head) {
//     arr.push(head)
//     head = head.next
//   }

//   return arr[arr.length >> 1]
// };
