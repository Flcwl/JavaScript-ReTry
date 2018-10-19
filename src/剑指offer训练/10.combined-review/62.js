/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 给定一棵二叉搜索树，请找出其中的第k小的结点。
 * 例如，（5，3，7，2，4，6，8）中，按结点数值大小顺序第三小结点的值为4。
 * @param {*} pRoot 
 * @param {*} k 
 */
function KthNode(pRoot, k) {
  // write code here
  if (!pRoot || k < 1) {
    return null;
  }
  // 中序遍历
  let stk = [];
  let cur = pRoot;

  while (cur || stk.length) {
    while (cur) {
      // left 到底
      stk.push(cur);
      cur = cur.left;
    }

    if (stk.length) {
      cur = stk.pop();
      if (--k === 0) {
        return cur;
      }
      cur = cur.right;
    }
  }
  return null;
}

// {     8,
//    6,   10,
//   5,7,  9,11},
// 1