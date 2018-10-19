/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 * 层序遍历
 * @param {*} root 
 */

function PrintFromTopToBottom(root) {
  // write code here
  if (!root) {
    return [];
  }
  let res = [];
  let queue = [];
  let top = 0, len = 0;
  let node;
  // error in nowCoder
  // queue[len++] = root;

  queue.push(root);

  while (top < queue.length) {
    node = queue[top++];
    // node = queue.shift();
    
    // must val fuck
    res.push(node.val);
    if (node.left) {
      queue.push( node.left );
    }
    if (node.right) {
      queue.push( node.right );
    }
  }
  return res;
}
