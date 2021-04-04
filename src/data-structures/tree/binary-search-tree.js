/**
 *  binary search tree (BST), also called ordered or sorted binary tree
 *  二叉搜索树的性质：若子节点不为空，则 左子树 < 父节点 < 右子树 的值。
 *  参考：https://github.com/Lxxyx/LearnDataStructrue/blob/master/BinarySearchTree.js
 */
function BinarySearchTree() {
  let _id = 0;

  /**
   * 树中的节点构造函数 空间复杂度: N
   * @param {number} val 节点值，看重载比较规则
   */
  const Node = function (val) {
    this.id = _id++;
    this.value = val;
    this.left = null;
    this.right = null;
  };

  let root = null;

  /** **************************** Insert logN ************************************ */

  this.insert = function (value) {
    const newNode = new Node(value);

    if (root === null) {
      root = newNode;
    } else {
      _insertNode(root, newNode);
    }
  };

  const _insertNode = function (parent, child) {
    if (parent.value > child.value) {
      if (parent.left === null) {
        parent.left = child;
      } else {
        _insertNode(parent.left, child);
      }
    } else {
      if (parent.right === null) {
        parent.right = child;
      } else {
        _insertNode(parent.right, child);
      }
    }
  };

  /** ******************************* Find logN *********************************** */

  this.findParent = function (val) {
    return _findParent(root, val);
  };

  const _findParent = function (node, val) {
    if (!node) {
      return false;
    }

    if (node.value === val) {
      // root == node
      return null;
    }

    if (node.value < val) {
      if (node.right === null) {
        return false;
      } else if (node.right.value === val) {
        return node;
      } else {
        return _findParent(node.right, val);
      }
    } else {
      if (node.left === null) {
        return false;
      } else if (node.left.value === val) {
        return node;
      } else {
        return _findParent(node.left, val);
      }
    }
  };

  this.find = function (val) {
    return !!_find(root, val);
  };

  const _find = function (node, val) {
    if (!node) {
      return null;
    }

    if (node.value === val) {
      return node;
    }

    if (node.value > val) {
      return _find(node.left, val);
    } else {
      return _find(node.right, val);
    }
  };

  /** ******************************* Remove logN ********************************* */

  // 参考：https://blog.csdn.net/claroja/article/details/54617344

  this.remove = function (val) {
    _remove(root, val);
    let flag = removeOk;
    removeOk = false; // 归false
    return flag;
  };

  let removeOk = false;

  const _remove = function (node, val) {
    if (node === null || !val) {
      return null;
    }

    if (val < node.value) {
      node.left = _remove(node.left, val);
    } else if (val > node.value) {
      node.right = _remove(node.right, val);
    } else {
      // if (node.value !== val) {
      //   return node;
      // }
      if (node.left === null && node.right === null) {
        // 待删除节点为叶子节点
        node = null;
      } else if (node.left === null) {
        // 只有右子节点存在
        node = node.right;
      } else if (node.right === null) {
        node = node.left;
      } else {
        // 左右子节点均存在
        var successor = _getMaxNode(node.left);
        node.value = successor.value;
        node.left = _remove(node.left, successor.value);
      }
      removeOk = true;
    }
    // 处理完 return 该node， 递归重要
    return node;
  };

  // 由于 JavaScript 的垃圾回收机制引用计数，对地址变量赋为 null 并不管用

  // const _remove = function(node, val) {
  //   if (node === null) {
  //     return false;
  //   }

  //   let nodeToRemove = _find(node, val);
  //   console.log(nodeToRemove);

  //   if (nodeToRemove === null) {
  //     // 未找到
  //     return false;
  //   }
  //   if (nodeToRemove === node) {
  //     // 当待移除的节点 为 root 时
  //   }

  //   if (nodeToRemove.left === null && nodeToRemove.right === null) {
  //     // 待删除节点为叶子节点
  //     nodeToRemove = null;
  //   }else if (nodeToRemove.left === null) {
  //     // 只有右子节点存在
  //     nodeToRemove = nodeToRemove.right;
  //   } else if (nodeToRemove.right === null) {
  //     // 只有左子节点存在
  //     nodeToRemove = nodeToRemove.left;
  //   } else {
  //     // 左右子节点均存在
  //     var successor = _getMaxNode(nodeToRemove.left);
  //     nodeToRemove.value = successor.value;
  //     // 必然左右子节点不可能都在，前提无重复节点值
  //     // 建议构造节点时，新添`parent`属性指向其父节点
  //     _remove(nodeToRemove.left, nodeToRemove.value);
  //   }
  //   return true;
  // };

  /** **************************** Traversal N ************************************ */

  // DFS
  // 参考：https://www.cnblogs.com/llguanli/p/7363657.html

  this.inOderTraversal = function (callback) {
    _inOderTraversal(root, callback);
  };

  this.preOrderTraversal = function (callback) {
    _preOrderTraversal(root, callback);
  };

  this.postOrderTraversal = function (callback) {
    _postOrderTraversal(root, callback);
  };

  const _inOderTraversal = function (node, callback) {
    if (node === null) {
      return;
    }
    _inOderTraversal(node.left, callback);
    callback(node.value); // 中序
    _inOderTraversal(node.right, callback);
  };

  const _preOrderTraversal = function (node, callback) {
    if (node === null) {
      return;
    }
    callback(node.value); // 先序
    _preOrderTraversal(node.left, callback);
    _preOrderTraversal(node.right, callback);
  };

  const _postOrderTraversal = function (node, callback) {
    if (node === null) {
      return;
    }
    _postOrderTraversal(node.left, callback);
    _postOrderTraversal(node.right, callback);
    callback(node.value); // 后序
  };

  /** ************************** MinVal & MaxVal logN ***************************** */

  this.getMinVal = function () {
    const minNode = _getMinNode(root);
    return minNode !== null ? minNode.value : -1;
  };

  const _getMinNode = function (node) {
    if (!node) {
      return null;
    }

    let minNode = node;

    while (minNode.left) {
      minNode = minNode.left;
    }
    return minNode;
  };

  this.getMaxVal = function () {
    const maxNode = _getMaxNode(root);
    return maxNode !== null ? maxNode.value : -1;
  };

  const _getMaxNode = function (node) {
    if (!node) {
      return null;
    }

    let maxNode = node;

    while (maxNode.right) {
      maxNode = maxNode.right;
    }
    return maxNode;
  };

  /** *************************** Level Order Print N ***************************** */

  // BFS

  this.print = function (callback) {
    _levelOrderTraversal(root, callback);
  };

  const _levelOrderTraversal = function (node, callback) {
    let queue = [];
    queue.push(node);
    let last, nLast; // `last`标记为当前层的末节点 `nLast`标记为下一层的末节点
    last = node;

    while (queue.length !== 0) {
      let tmp = queue.shift(); // 不推荐，复杂度高，会更改后续元素下标
      callback(tmp.value);

      if (tmp.left !== null) {
        queue.push(tmp.left);
        nLast = tmp.left;
      }
      // else {
      //   // 序列化 可用 @ 表示 null
      //   callback('@');
      // }

      if (tmp.right !== null) {
        queue.push(tmp.right);
        nLast = tmp.right;
      }

      // 当前层所有节点处理完
      if (tmp === last) {
        last = nLast;
        // 按照树的结构化显示 按层换行
        callback('#');
      }
    }
  };
}

module.exports = BinarySearchTree;
