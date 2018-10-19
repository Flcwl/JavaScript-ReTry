/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
 * 要求不能创建任何新的结点，只能调整树中结点指针的指向。
 * @param {*} pRootOfTree 二叉搜索树
 */
function Convert(pRootOfTree) {
  // write code here
  if (!pRootOfTree || (!pRootOfTree.left && !pRootOfTree.right)) {
    return pRootOfTree;
  }
  let stk = [];
  let p = pRootOfTree;
  let pre = null;
  let isFirst = true;

  while (p || stk.length) {
    while (p != null) {
      stk.push(p);
      p = p.left;
    }
    p = stk.pop();
    if (isFirst) {
      pRootOfTree = p;
      pre = p;
      isFirst = false;
    } else {
      // 双向绑定 right指后 left指前
      pre.right = p;
      // 这里只修改当前p的left 已出栈遍历过的
      p.left = pre;
      pre = p;
    }
    p = p.right;
  }
  return pRootOfTree;
}