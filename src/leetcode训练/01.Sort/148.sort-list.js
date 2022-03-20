/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
var sortList = function(head) {
  const findMiddle = (node) => {
    if (!node || !node.next) return node

    let fast = node.next.next
    let slow = node

    while (fast && fast.next) {
      slow = node.next
      fast = fast.next.next
    }

    return slow
  }

  const merge = (left, right) => {
    const head = new ListNode(-1);
    let node = head

    while (left && right) {
      if (left.val < right.val) {
        node.next = left
        left = left.next
      } else {
        node.next = right
        right = right.next
      }

      node = node.next
    }

    if (left) {
      node.next = left
    }

    if (right) {
      node.next = right
    }

    return head.next
  }

  // 1. 归并排序
  const mergeSort = (head) => {
    if (!head || !head.next) return head

    const leftEnd = findMiddle(head)
    const rightStart = leftEnd.next
    // 剪断
    leftEnd.next = null

    return merge(mergeSort(head), mergeSort(rightStart))
  }

  return mergeSort(head)
  // 2. 暴力：遍历链表按序构建新链表（每次都会查询插入位置） O(n^2)
};
// @lc code=end

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
