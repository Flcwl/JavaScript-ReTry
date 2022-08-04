/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function (head) {
  if (!head) return null;
  if (!head.next) return head;

  const aNode = head;
  const bNode = head.next;

  aNode.next = swapPairs(bNode.next);
  bNode.next = aNode;

  return bNode;

  // 迭代写法
  // https://www.bilibili.com/video/BV1vv41187zU
};
// @lc code=end
