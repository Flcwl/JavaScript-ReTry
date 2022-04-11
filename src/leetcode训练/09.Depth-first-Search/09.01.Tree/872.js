/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  if (!root1 && !root2) return true;

  let leafs = [];

  (function dfs1(node) {
    if (node.left) {
      dfs1(node.left);
    } else if (!node.right) {
      leafs.push(node.val);
    }
    if (node.right) {
      dfs1(node.right);
    }
  })(root1);

  let res = true;
  let pos = 0;

  (function dfs2(node) {
    if (node.left) {
      dfs2(node.left);
    } else if (!node.right) {
      if (node.val !== leafs[pos++]) {
        res = false;
        return;
      }
    }
    if (node.right) {
      dfs2(node.right);
    }
  })(root2);

  return res && pos === leafs.length;
};
