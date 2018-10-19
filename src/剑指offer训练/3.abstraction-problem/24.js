/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
 * (注意: 在返回值的list中，数组长度大的数组靠前)
 * @param {*} root 
 * @param {*} expectNumber 
 */
// let res = [];

function FindPath(root, expectNumber) {
  let res = [];    // must be defined inner function!
  // write code here
  if (!root || expectNumber < 0) {
    // important
    return res;
  }
  _findPath(root, 0, expectNumber, [], res);
  return res;
}
// {  10,
//   5, 12,
//  4,7 }, 22 or 15

// dfs
// function _findPath(root, sum, expect, path) {
function _findPath(root, sum, expect, path, res) {
  path.push(root.val);
  sum += root.val;

  // 优化 expect-root.val === nextRoot.val
  // _findPath(root.left,expectNumber-root.val);
  if (sum === expect) {
    if ( root.left == null || root.right == null) {
      // path is a reference, will change
      res.push([...path]);
    }
  } else if (sum < expect) {
    if (root.left) {
      // _findPath(root.left, sum, expect, path);
      _findPath(root.left, sum, expect, path, res);
    }
    if (root.right) {
      // _findPath(root.right, sum, expect, path);
      _findPath(root.right, sum, expect, path, res);
    }
  }
  // 指针回溯
  path.pop();
}
