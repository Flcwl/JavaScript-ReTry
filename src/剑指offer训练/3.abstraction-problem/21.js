/**
 * 输入两个整数序列，第一个序列表示栈的压入顺序，
 * 请判断第二个序列是否可能为该栈的弹出顺序。
 * 假设压入栈的所有数字均不相等。
 * 例如序列1,2,3,4,5是某栈的压入顺序，
 * 序列4,5,3,2,1是该压栈序列对应的一个弹出序列，
 * 但4,3,5,1,2就不可能是该压栈序列的弹出序列。
 * （注意：这两个序列的长度是相等的）
 * @param {*} pushV 
 * @param {*} popV 
 */
function IsPopOrder(pushV, popV) {
  // write code here
  // 1 暴力序列 得到匹配popV 返回true
  if (!pushV.length && !popV.length) {
    return true;
  }

  // let top = pushV.length - 1,
  //   btm = 0;
  let stk = [];
  let len = 0; // stk
  let index = 0; // pushV

  for (let i = 0; i < popV.length; i++) {
    const el = popV[i];
    // 前提：所有数字均不相等
    if (len && stk[len - 1] === el) {
      len--;
    } else {
      let t = index;
      while (t < pushV.length) {
        if (pushV[t] === el) {
          index = t + 1; // 直接出
          break;
        }
        stk[len++] = pushV[t];
        t++;
      }
      if (t === pushV.length) {
        return false;
      }
    }
    // console.log(stk);

  }
  return true;
}
t1 = [4, 5, 3, 2, 1];
t2 = [4, 3, 5, 1, 2];
console.log(IsPopOrder([1, 2, 3, 4, 5], t2));