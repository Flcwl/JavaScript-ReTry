/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 请实现一个函数按照之字形打印二叉树，
 * 即第一行按照从左到右的顺序打印，
 * 第二层按照从右至左的顺序打印，
 * 第三行按照从左到右的顺序打印，其他行以此类推。
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
  let isInversed = false;

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
      if (isInversed) {
        ans.reverse();
      }
      isInversed = !isInversed;
      res.push([...ans]);
      ans = [];
      last = nlast;
    }
  }
  return res;
  // 实时打印 栈优化
  // http://wiki.jikexueyuan.com/project/for-offer/question-sixty-one.html
}