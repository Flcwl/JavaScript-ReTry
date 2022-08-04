/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const root = new ListNode();
  let tNode = root;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      tNode.next = list2;
      list2 = list2.next;
    } else {
      tNode.next = list1;
      list1 = list1.next;
    }

    tNode = tNode.next;
  }

  if (list1) {
    tNode.next = list1;
  } else if (list2) {
    tNode.next = list2;
  }

  return root.next;
};
// @lc code=end
