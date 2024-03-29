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
      line += ((line ? ' => ' : '') + node.value);
    });

    return line;
  }
}

/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start
/**
 * Least Recently Used (每次使用的后都标志为最近使用，淘汰最近未使用的【末位】)
 * map 存放键值对
 * linkList 存放最近使用频率
 *
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.KVMap = new Map()
  this.list = new DoubleLinkedList()
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.KVMap.has(key)) {
    return -1
  }

  // 移动位置到最前
  const node = this.KVMap.get(key)
  this.list.remove(node)
  this.list.unShift(node)

  return node.value

  // const value = this.KVMap.get(key)

  // // 刷新优先级，插入顺序
  // this.KVMap.delete(key)
  // this.KVMap.set(key, value)
  // return value
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (!this.KVMap.has(key)) {
    // 空间不足，移除尾部元素
    if (this.capacity === this.list.length) {
      this.KVMap.delete(this.list.tail.key)
      this.list.remove()
    }

    const node = new ListNode(key, value)
    this.KVMap.set(key, node)
    this.list.unShift(node)

  }

  // 移动位置到最前
  const node = this.KVMap.get(key)
  this.list.remove(node)
  this.list.unShift(node)

  node.value = value

  // this.KVMap.delete(key)
  // this.KVMap.set(key, value)

  // if (this.KVMap.size > this.capacity) {
  //   const tailKey = this.KVMap.keys().next().value
  //   this.KVMap.delete(tailKey)
  // }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
