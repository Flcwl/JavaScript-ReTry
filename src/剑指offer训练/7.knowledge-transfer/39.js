function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

/**
 * 输入一棵二叉树，判断该二叉树是否是平衡二叉树。
 * @param {*} pRoot 
 */
let isBalanced = true;

function IsBalanced_Solution(pRoot) {
  // 平衡树：递归所有左子树的高度 和 它的右子树的高度 差值绝对值小于等于1
  // write code here
  // 循环遍历不太好写 需要递归自底向上判断
  if (!pRoot) {
    // what's fuck?
    return true;
  }
  isBalanced = true;  // must reInit
  getDeepth(pRoot);
  return isBalanced;
}

function getDeepth(root) {
  if (!isBalanced) {
    return;
  }
  if (!root) {
    return 0;
  }
  let lDpt = getDeepth(root.left);
  let rDpt = getDeepth(root.right);
  let c = lDpt - rDpt;
  if (c > 1 || c < -1) {
    isBalanced = false;
    return;
  }
  return Math.max(lDpt, rDpt) + 1;
}

//       1
//    2      3
//  4   5  #   6
// # # 7

console.log( IsBalanced_Solution(new TreeNode(1)) );
