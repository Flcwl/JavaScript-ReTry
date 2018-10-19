/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，
 * 则重建二叉树并返回。
 * @param {*} pre 前序
 * @param {*} vin 中序
 */
function reConstructBinaryTree(pre, vin) {
  // write code here
  let root = null;
  if (pre.length > 1) {
    let val = pre[0];
    let index = vin.indexOf(val); // 必然存在，如果pre & vin正规
    root = new TreeNode(val); // 前序第一个为根节点
    let tpre1, tpre2, tvin1, tvin2;
    tvin1 = vin.slice(0, index);
    tvin2 = vin.slice(index + 1);
    // 分割左右子树
    tpre1 = pre.slice(1, tvin1.length + 1);
    tpre2 = pre.slice(tvin1.length + 1);
    // 左子树
    root.left = reConstructBinaryTree(tpre1, tvin1);
    // 右子树
    root.right = reConstructBinaryTree(tpre2, tvin2);
  } else if (pre.length === 1) {
    // 叶子节点
    root = new TreeNode(pre[0]);
  }
  return root;
}