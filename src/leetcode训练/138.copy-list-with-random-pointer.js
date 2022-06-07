/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const visitedMp = new Map()

  // 递归 map 记忆拷贝节点
  const copyNode = (node) => {
    if (!node) return null
    if (visitedMp.has(node)) return visitedMp.get(node)

    const newNode = new Node(node.val)
    visitedMp.set(node, newNode)

    newNode.next = copyNode(node.next)
    newNode.random = copyNode(node.random)

    return newNode
  }

  return copyNode(head)
};
// @lc code=end

