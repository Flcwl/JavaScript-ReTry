function RandomListNode(x) {
  this.label = x;
  this.next = null;
  this.random = null;
}

/**
 * 输入一个复杂链表（每个节点中有节点值，以及两个指针，
 * 一个指向下一个节点，另一个特殊指针指向任意一个节点），
 * 返回结果为复制后复杂链表的head。
 * （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
 * @param {*} pHead
 */
function Clone(pHead) {
  // write code here
  // 深拷贝
  if (!pHead) {
    return null;
  }
  if (!(pHead instanceof RandomListNode)) {
    return {};
  }
  // const NMAX = 100;
  // let arr = Array(NMAX).fill(null);
  // 维持依赖关系
  // let mp = {};   // it can't solve
  let mp = new Map();
  let thead = new RandomListNode(pHead.label);
  let head = thead;
  // let cnt = 1;

  // mp[pHead] = cnt;
  mp.set(pHead, thead);
  // arr[cnt++] = thead;

  while (pHead) {
    let nxt = pHead.next,
      rand = pHead.random;
    if (nxt !== null) {
      // 下一节点不为空 复制
      let tnext = mp.get(nxt);
      if (tnext) {
        // 下一节点已存在于映射表中
        // thead.next = arr[ mp[nxt] ];
        thead.next = tnext;
      } else {
        thead.next = new RandomListNode(nxt.label);
        mp.set(nxt, thead.next);
        // mp[nxt] = cnt;
        // arr[cnt++] = thead.next;
      }
    }

    if (rand !== null) {
      let trandom = mp.get(rand);
      if (trandom) {
        // 未考虑分支链
        // thead.random = arr[ mp[rand] ];
        thead.random = trandom;
      } else {
        thead.random = new RandomListNode(rand.label);
        mp.set(rand, thead.random);
        // mp[rand] = cnt;
        // arr[cnt++] = thead.random;
      }
    }
    pHead = nxt;
    thead = thead.next;
  }
  return head;
}

// {    1,
//    2,    3,
//  4, 5,  3, 5,
// #,2,#
// }