/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
 * 如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 * @param {Array} sequence 
 */
function VerifySquenceOfBST(sequence) {
  // write code here
  if(!sequence || !sequence.length) {
    return false;
  }
  if (sequence.length === 1) {
    return true;
  }
  // binarySearchTree left < mid < right
  // 互不相同
  return dfs(sequence, 0, sequence.length - 1);

}

function dfs(seq, l, r) {
  if (l >= r) {
    return true;
  }
  let t = r - 1;
  // seq[r] 即根
  while (t >= l && seq[t] > seq[r]) {
    // 右子树都大于根
    t--;
  }
  for (let i = t; i >= l; i--) {
    // 左子树都小于根
    if (seq[i] > seq[r]) {
      return false;
    }
  }
  return dfs(seq, l, t) && dfs(seq, t + 1, r - 1);
}