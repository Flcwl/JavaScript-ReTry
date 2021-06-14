/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const increasingBST = function (root) {
  const ret = new TreeNode();
  let current = ret;

  (function dfs(node) {
    if (node.left) {
      dfs(node.left);
    }

    current.right = new TreeNode(node.val);
    current = current.right;

    if (node.right) {
      dfs(node.right);
    }
  })(root);

  return ret.right;
};
