/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  let sNode = head;
  let fNode = head;

  // 1->2->2->1
  // 1->2->3->2->1
  while (fNode && fNode.next) {
    fNode = fNode.next.next;
    sNode = sNode.next;
  }

  let cNode = sNode;
  let tNode = null;
  let pNode = null;

  // 1->2->null
  // 1->2->3->null
  while (cNode) {
    tNode = cNode.next;
    cNode.next = pNode;
    pNode = cNode;
    cNode = tNode;
  }

  while (pNode) {
    if (head.val !== pNode.val) return false;

    head = head.next;
    pNode = pNode.next;
  }

  return true
};
// @lc code=end
