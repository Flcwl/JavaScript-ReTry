function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

/**
 * 请实现两个函数，分别用来序列化和反序列化二叉树
 * ! 分割节点值(可能多位)
 * # 空节点标识
 * @param {*} pRoot
 */
const NullTreeStr = '#!';
let idx = 0;

function Serialize(pRoot) {
  // write code here
  if (!pRoot) {
    return NullTreeStr;
  }
  let stk = [];
  let serRes = '';
  let cur = null;

  idx = 0;
  stk.push(pRoot);

  while (stk.length) {
    cur = stk.pop();
    if (cur === null) {
      serRes += NullTreeStr;
    } else {
      serRes += cur.val + '!';
      stk.push(cur.right);
      stk.push(cur.left);
    }
  }
  return serRes;
}

//        3
//     2      7
//   1      5
//         4 6

// 3! (2! (1! #! #!) #!) (7! (5! (4! #! #!) (6! #! #!)) #!)
function Deserialize(s) {
  // write code here
  if (!s || s === NullTreeStr) {
    return null;
  }

  return _deserialize(s.split('!'));
}

function _deserialize(arr) {
  let val = arr[idx++];
  if (!val || val === '#') {
    return null;
  }

  let par = new TreeNode(parseInt(val));

  par.left = _deserialize(arr);
  par.right = _deserialize(arr);
  return par;
}

rot = Deserialize('5!4!3!2!#!#!#!#!#!');
console.log(Serialize(rot));
