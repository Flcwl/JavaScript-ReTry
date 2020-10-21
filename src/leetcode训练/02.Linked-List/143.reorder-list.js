/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next || !head.next.next) return head;

  let sNode = head;
  let fNode = head;

  while (fNode && fNode.next) {
    fNode = fNode.next.next
    sNode = sNode.next
  }

  const rNode = sNode.next
  sNode.next = null

  let cNode = rNode
  let pNode = null
  let tNode = null

  while (cNode) {
    tNode = cNode.next // break
    cNode.next = pNode
    pNode = cNode
    cNode = tNode
  }

  let first = head
  let second = pNode

  while (second) {
    tNode = first.next
    first.next = second
    second = second.next
    first.next.next = tNode
    first = tNode
  }
};
// @lc code=end

