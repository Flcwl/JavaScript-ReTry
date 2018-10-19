/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
 * @param {*} pRoot 
 */
function Print(pRoot) {
  // write code here
  if (!pRoot) {
    return [];
  }
  let res = [];
  let que = [];
  let last = pRoot,
    nlast;
  let ans = [];

  que.push(pRoot);

  while (que.length) {
    // 先进先出
    let tNode = que.shift();
    ans.push(tNode.val);
    if (tNode.left) {
      que.push(tNode.left);
      nlast = tNode.left;
    }
    if (tNode.right) {
      que.push(tNode.right);
      nlast = tNode.right;
    }
    if (last === tNode) {
      res.push(ans);
      ans = [];
      last = nlast;
    }
  }
  return res;
}