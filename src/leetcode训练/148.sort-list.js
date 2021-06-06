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
  if (!head) {
    return null
  }

  let ret = new ListNode(head.val)
  let tail = ret

  // 4 2 1 3
  while (head !== null) {
    head = head.next

    if (head !== null) {
      let t = new ListNode(head.val)

      // 头插
      if (head.val > ret.val) {
        t.next = ret
        ret = t
      } else if (head.val < tail.val) {
      // 尾插
        tail.next = t
        tail = t
      } else {
        // 中间插
        let tHead = ret

        // 找到 4 3 1 插入 2
        while (head.val > tHead.val) {
          tHead = tHead.next
        }

        t = tHead.next
        tHead.next = ret
        ret = t
      }
    }
  }

  return ret
};
// @lc code=end

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
