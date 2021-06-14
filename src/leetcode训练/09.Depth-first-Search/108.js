/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const length = nums.length;
  if (!length) return null;

  const mid = length >> 1;
  const root = new TreeNode(nums[mid]);

  root.left = _sortedArrayToBST(nums, 0, mid);
  root.right = _sortedArrayToBST(nums, mid + 1, length);

  return root;
};

function _sortedArrayToBST(nums, s, e) {
  if (s == e) return null;

  const mid = (s + e) >> 1;
  const node = new TreeNode(nums[mid]);

  node.left = _sortedArrayToBST(nums, s, mid);
  node.right = _sortedArrayToBST(nums, mid + 1, e);

  return node;
}
