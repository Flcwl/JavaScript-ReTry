/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  let ret = 1;
  (function dfs(node, n) {
    node.children.forEach((nod) => {
      const nextN = n + 1;
      if (ret < nextN) {
        ret = nextN;
      }
      dfs(nod, nextN);
    });
  })(root, ret);

  return ret;
};
