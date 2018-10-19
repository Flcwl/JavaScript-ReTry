/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 输入两棵二叉树A，B，判断B是不是A的子结构。
 * （ps：我们约定空树不是任意一个树的子结构）
 * @param {*} pRoot1 
 * @param {*} pRoot2 
 */
function HasSubtree(pRoot1, pRoot2) {
  // write code here
  // null instanceof any 返回 false
  // null 是一个值 而 typeof null == 'object' 是JavaScript沿用至今的错误
  // if (!(pRoot1 instanceof TreeNode) || !(pRoot2 instanceof TreeNode)) {

  if (pRoot1 == null || pRoot2 == null) {
    // 满足：空树不是任意一个树的子结构
    return false;
  }
  let res = false;
  if (pRoot1.val == pRoot2.val) {
    res = _hasSubtree(pRoot1, pRoot2);
    if (res) { // 易忽略
      return true;
    }
  }
  // 利用 短路特性 优化运算
  return HasSubtree(pRoot1.left, pRoot2) ||
    HasSubtree(pRoot1.right, pRoot2);
}

function _hasSubtree(root1, root2) {
  // 子树空处理
  if (root2 === null) {
    // 子结构为空
    return true;
  } else if (root1 === null) {
    return false;
  }
  // 非空子树
  if (root1.val == root2.val) {
    return _hasSubtree(root1.left, root2.left) &&
      _hasSubtree(root1.right, root2.right);
  }
  // JavaScript里面 && || , 不转`boolean`输出
  // 1 && 2 返回 2
  // 1 || 2 返回 1
  return false;
}