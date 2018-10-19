/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 请实现一个函数，用来判断一颗二叉树是不是对称的。
 * 注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
 * @param {*} pRoot 
 */
function isSymmetrical(pRoot) {
  // write code here
  if (!pRoot) {
    return true;
  }
  // 递归判断左右分支相等，非常简单
  let deque = [];
  // 非递归 双端队列 亮点
  let left = pRoot.left;
  let right = pRoot.right;
  if (left === null && right === null) {
    return true;
  } else if (left !== null && right !== null) {
    if (left.val !== right.val) {
      return false;
    }
    deque.push(left);
    deque.push(right);
  } else {
    return false;
  }

  while (deque.length) {
    // let lRoot = deque.shift();
    let lRoot = deque.pop();
    let rRoot = deque.pop();
    if (lRoot.val !== rRoot.val) {
      return false;
    }
    if ((!lRoot.left && rRoot.right) ||
      (lRoot.left && !rRoot.right)) {
      return false;
    }
    if (lRoot.left) {
      // deque.unshift(lRoot.left);
      deque.push(lRoot.left);
      deque.push(rRoot.right);
    }
    if ((!lRoot.right && rRoot.left) ||
      (lRoot.right && !rRoot.left)) {
      return false;
    }
    if (lRoot.right) {
      // deque.unshift(lRoot.right);
      deque.push(lRoot.right);
      deque.push(rRoot.left);
    }
  }
  return true;
}

//          A
//      B       C
//    D   E   F   G
//   H I # # # # J K
 
//   B|C
//  ED|GF
//   D|G
//  HI|JK
//   H|K
//   #|#
