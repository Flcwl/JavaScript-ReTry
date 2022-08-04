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
var addTwoNumbers = function (l1, l2) {
  const root = new ListNode(0);
  let tNode = root;
  let carry = 0;

  while (l1 || l2 || carry > 0) {
    let sum = 0;
    // 进位
    sum += carry;

    // 累加参数1
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    // 累加参数2
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = sum >= 10 ? 1 : 0;
    sum = sum % 10;

    tNode.next = new ListNode(sum);
    tNode = tNode.next;
  }

  return root.next;
};
// @lc code=end

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
