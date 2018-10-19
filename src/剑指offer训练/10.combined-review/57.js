/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/

/**
 * 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。
 * 注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
 * @param {*} pNode 
 */
function GetNext(pNode) {
  // write code here
  // 题意当前遍历位置为pNode,按照**中序遍历**找其下一节点
  if (!pNode) {
    return null;
  }
  // 找右节点
  let tNode = pNode.right;
  while (tNode) {
    if (tNode.left) {
      tNode = tNode.left;
    } else {
      return tNode;
    }
  }
  // 找父节点
  let par = pNode.next;
  while (par) {
    if (par.left === pNode) {
      return par;
    } else {
      pNode = par;  // 跟随变换
      par = par.next;
    }
  }
  return null;
}