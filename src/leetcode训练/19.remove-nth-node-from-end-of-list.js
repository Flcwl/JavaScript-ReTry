/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 移除倒数第 N 个节点
  // https://www.bilibili.com/video/BV1fq4y1y7z3
  // 虚拟根节点，把头结点当做普通节点判断，避免特殊处理
  const root = new ListNode(-1)
  root.next = head

  let fast = root
  while (n) {
    fast = fast.next
    n--
  }

  let slow = root
  // n 的长度必然小于等于链表长度
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next

  return root.next


  // let tNode = head
  // let len = 0
  // while (tNode) {
  //   len++
  //   tNode = tNode.next
  // }

  // let nth = len - n

  // // 越界
  // if (nth < 0) return head
  // // 移除头部
  // if (nth === 0) return head.next

  // tNode = head

  // while (tNode && nth > 1) {
  //   nth--
  //   tNode = tNode.next
  // }

  // tNode.next = tNode.next.next

  // return head
};
// @lc code=end

