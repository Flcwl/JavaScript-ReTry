/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 输入一棵二叉树，求该树的深度。
 * 从根结点到叶结点依次经过的结点（含根、叶结点）
 * 形成树的一条路径，最长路径的长度为树的深度。
 * @param {*} pRoot 
 */
function TreeDepth(pRoot) {
  // write code here
  if(!pRoot) {
    return 0;
  }
  let deep = 0;
  let stk = [];
  stk.push(1);
  stk.push(pRoot);
  // 带层数遍历
  while (stk.length) {
    let node = stk.pop();
    let dpt = stk.pop();
    if (dpt > deep) {
      deep = dpt;
    }
    if (node !== null) {
      if (node.left) {
        stk.push(dpt + 1);
        stk.push(node.left);
      }
      if (node.right) {
        stk.push(dpt + 1);
        stk.push(node.right);
      }
    }
  }

  return deep;
  // function TreeDepth(pRoot)
  // {
  //   if(!pRoot) return 0;
  //   var left = 1 + TreeDepth(pRoot.left);
  //   var right = 1+ TreeDepth(pRoot.right);
  //   return Math.max(left,right)
  // }
}



var length = 10;

function fn() {
  console.log(this.length)
}
var obj = {
  length: 5,
  aa: function (fn) {
    fn();
    // `arguments[0]()`理解为`arguments.0()`等同于`arguments.fn()`,
    // 即argument对象调用fn函数，所以this指向该arguments对象
    // expected Output: 3
    arguments[0]();
  }
}
obj.aa(fn, 1, 2)