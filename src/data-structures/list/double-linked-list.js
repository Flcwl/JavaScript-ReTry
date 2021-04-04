const NULL = null;

class Node {
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
      const node = new Node(index, item);
      this.push(node);
    });
    return this;
  }

  unShift(node) {
    if (!(node instanceof Node)) return;

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
    if (!(node instanceof Node)) return;

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

module.exports.DoubleLinkedList = DoubleLinkedList
module.exports.Node = Node
