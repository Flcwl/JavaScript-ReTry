const NULL = null;

class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = NULL;
    this.next = NULL;
  }
}

class DoubleLinkedList {
  constructor(list, size = Number.MAX_SAFE_INTEGER) {
    this.size = size; // max count of Nodes in list
    this.head = NULL;
    this.tail = NULL; // this.head
    this.length = 0;
    this._initList(list);
  }

  _initList(list = []) {
    list.map((item, index) => {
      const node = new ListNode(index, item);
      this.push(node);
    });
    return this;
  }

  unShift(node) {
    if (!(node instanceof ListNode)) return;

    if (this.head) {
      node.prev = NULL;
      node.next = this.head;

      this.head.prev = node;
      this.head = node;
    } else {
      // means empty list
      node.prev = NULL;
      node.next = NULL;

      this.head = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  push(node) {
    if (!(node instanceof ListNode)) return;

    if (this.tail) {
      node.prev = this.tail;
      node.next = NULL;

      this.tail.next = node;
      this.tail = node;
    } else {
      // means empty list
      node.prev = NULL;
      node.next = NULL;

      this.head = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  shift() {
    const node = this.head;

    if (node) {
      if (node.next) {
        this.head = node.next;
        this.head.prev = NULL;
      } else {
        // only one node in list
        this.head = this.tail = NULL;
      }

      this.length--;
    }

    return node;
  }

  pop() {
    const node = this.tail;

    if (node) {
      if (node.prev) {
        this.tail = node.prev;
        this.tail.next = NULL;
      } else {
        // only one node in list
        this.head = this.tail = NULL;
      }

      this.length--;
    }

    return node;
  }

  remove(node) {
    if (!node) {
      // Overload：to delete the tail node
      node = this.tail;
    }

    if (node === this.tail) {
      return this.pop();
    }

    if (node === this.head) {
      return this.shift();
    }

    // in middle of list，and the list will not be empty
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.length--;

    return node;
  }

  map(callback) {
    let p = this.head;

    while (p) {
      callback(p);
      p = p.next;
    }
  }

  toString() {
    let line = '';
    this.map(node => {
      line += (line ? ' => ' : '') + node.value;
    });

    return line;
  }

  insertBefore(node, pNode) {
    if (!node || !pNode) return;

    if (this.head === pNode) {
      this.unShift(node);
      return;
    }

    pNode.prev.next = node;
    node.prev = pNode.prev;
    node.next = pNode;
    pNode.prev = node;
    this.length++;
  }

  isEmpty() {
    return this.head === null
  }
}

/*
 * @lc app=leetcode id=460 lang=javascript
 *
 * [460] LFU Cache
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LFUCache = function(capacity = 10000) {
  this.length = 0; // 节点总数
  this.capacity = capacity;
  this.KVMap = new Map();
  // 二维双向链表
  // 第一层：频率链表
  // 第二层：该频率下的 LRU 链表
  this.list = new DoubleLinkedList();
};

LFUCache.prototype.addFreq = function(node, fNode) {
  const fList = fNode.value;
  const newFreq = fNode.key + 1;

  const prevFNode = fNode.prev;

  // 1. 没有上一个频率
  // 2. 频率还是小于前一个频率
  if (!prevFNode || newFreq < prevFNode.key) {
    // 使用原本的 fList
    if (fList.length === 1) {
      fNode.key = newFreq;
    } else {
      // 分离
      fList.remove(node);
      const newFList = new DoubleLinkedList();
      newFList.push(node);
      const newFNode = new ListNode(newFreq, newFList);
      this.list.insertBefore(newFNode, fNode);
      // 更新
      this.KVMap.set(node.key, [node, newFNode])
    }
  } else {
    // 频率相等

    // 分离
    fList.remove(node);
    prevFNode.value.unShift(node);
    // 更新
    this.KVMap.set(node.key, [node, prevFNode])

    // 空移除
    if (fList.isEmpty()) {
      this.list.remove(fNode);
    }
  }
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  if (!this.KVMap.has(key)) {
    return -1;
  }

  // 频率 + 1（和前一个交换位置）
  // 该频率下位置移到最前
  const [node, fNode] = this.KVMap.get(key);

  this.addFreq(node, fNode);

  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  // 新增节点
  if (!this.KVMap.has(key)) {
    // 缓存占满，需要淘汰
    if (this.length >= this.capacity) {
      if (this.list.isEmpty()) return;

      // 淘汰频率最低 & LRU 末尾的
      const fNode = this.list.tail;
      const fList = fNode.value;
      const deleteNode = fList.tail;

      // 更新
      this.KVMap.delete(deleteNode.key);
      fList.remove();

      if (fList.isEmpty()) {
        // 频率内没有节点，整个卸载掉
        this.list.remove();
      }

      this.length--;
    }

    const node = new ListNode(key, value);

    // 插入尾部
    const fNode = this.list.tail;

    if (fNode && fNode.key === 1) {
      const fList = fNode.value;
      fList.unShift(node);
      this.KVMap.set(key, [node, fNode]);
    } else {
      // 没有节点 或者 尾节点为频率不为 1
      const newFList = new DoubleLinkedList();
      newFList.unShift(node);
      const newFNode = new ListNode(1, newFList);
      this.list.push(newFNode);
      this.KVMap.set(key, [node, newFNode]);
    }

    this.length++;
  }

  // 更新节点：频率 + 1
  const [node, fNode] = this.KVMap.get(key);
  node.value = value

  this.addFreq(node, fNode)
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

const a = new LFUCache(2); // null
// ["LFUCache","put","put","put","put","get"]
// [[2],[3,1],[2,1],[2,2],[4,4],[2]]
console.log(
  a.put(3, 1), // null
  a.put(2, 1), // null
  a.put(2, 2), // null
  a.put(4, 4), // null
  a.get(2) // 2
);
