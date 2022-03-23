/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  // 法1. 使用 Set 维护节点在 ListA 的访问状态，再遍历 ListB

  // 法2. 找到最短的链，长链提前遍历到长 - 短的长度差，然后依次遍历对比得到同链
  let nodeA = headA
  let nodeB = headB

  while (nodeA && nodeB) {
    nodeA = nodeA.next
    nodeB = nodeB.next
  }

  let long
  let longHead
  let shortHead

  if (nodeA) {
    long = nodeA
    longHead = headA
    shortHead = headB
  } else if (nodeB) {
    long = nodeB
    longHead = headB
    shortHead = headA
  } else {
    long = null
    longHead = headA
    shortHead = headB
  }

  while (long) {
    long = long.next
    longHead = longHead.next
  }

  // 起点相同

  while (longHead) {
    if (longHead === shortHead) {
      return longHead
    }

    longHead = longHead.next
    shortHead = shortHead.next
  }

  return null
};
// @lc code=end
