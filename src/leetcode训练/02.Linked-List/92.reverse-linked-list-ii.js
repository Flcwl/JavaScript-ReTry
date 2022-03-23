/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  // 题意：交换 left 和 right 位置的节点

  let root = new ListNode(-1, head)

  let node = root
  let step = 0
  let leftParent

  // 找到 left 父亲节点
  while (node) {
    step++
    if (step === left) {
      leftParent = node
      break
    }

    node = node.next
  }

  let reversedNode = null
  let tail = null
  // 反转范围内链表
  if (leftParent && leftParent.next) {
    let leftNode = leftParent.next

    while (leftNode) {
      if (step === right) {
        if (reversedNode) {
          const next = leftNode.next
          leftNode.next = reversedNode
          reversedNode = leftNode
          // 尾节点续接
          tail.next = next
        }
        break
      }
      const next = leftNode.next
      leftNode.next = reversedNode
      // 存储反转节点尾节点
      if (!tail) {
        tail = leftNode
      }
      reversedNode = leftNode
      leftNode = next
      step++
    }
  }

  if (reversedNode) {
    leftParent.next = reversedNode
  }

  return root.next
};
// @lc code=end

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
