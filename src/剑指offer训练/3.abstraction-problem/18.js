/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 操作给定的二叉树，将其变换为源二叉树的镜像。
 * @param {*} root 
 */
function Mirror(root) {
  // write code here
  if (!root) {
    return null;
  }
  let t = root.left;
  root.left = root.right;
  root.right = t;
  Mirror(root.left);
  Mirror(root.right);

  // 非递归实现
  // void MirrorPreBFS(TreeNode * root) {
  //   if (root == NULL) {
  //     return;
  //   }
  //   stack < TreeNode * > nstack;
  //   nstack.push(root);

  //   TreeNode * node = root;
  //   while (nstack.empty() != true) {
  //     node = nstack.top();
  //     nstack.pop();

  //     //  先交换, 然后递归左，接着递归右
  //     //  相当与一次前序遍历
  //     if (node - > left != NULL || node - > right != NULL) {
  //       swap(node - > left, node - > right);
  //     }

  //     if (node - > left != NULL) {
  //       nstack.push(node - > left);
  //     }
  //     if (node - > right != NULL) {
  //       nstack.push(node - > right);
  //     }
  //   }
  // }
}