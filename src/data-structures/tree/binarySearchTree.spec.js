var BinarySearchTree = require('./binarySearchTree');
var assert = require('assert')

describe('binarySearchTree', () => {
  const bst = new BinarySearchTree();

  bst.insert(8);
  bst.insert(3);
  bst.insert(10);
  bst.insert(1);
  bst.insert(6);
  bst.insert(14);
  bst.insert(4);
  bst.insert(7);
  bst.insert(13);

  describe('print', () => {
    it('层序序列化，按层用`#`换行', () => {
      const res = [];
      const callback = item => res.push(item);
      const expect = [
           8,        '#',
        3,    10,    '#',
      1,  6,     14, '#',
         4, 7,  13,  '#' ];

      bst.print(callback);
      assert.deepEqual(res, expect);
    });
  });

  describe('traverse', () => {
    it('中序遍历，得到顺序结果', () => {
      const res = [];
      const callback = item => res.push(item);
      const expect = [1, 3, 4, 6, 7, 8, 10, 13, 14];

      bst.inOderTraversal(callback);
      assert.deepEqual(res, expect);
    });

    it('先序遍历', () => {
      const res = [];
      const callback = item => res.push(item);
      const expect = [8, 3, 1, 6, 4, 7, 10, 14, 13];

      bst.preOrderTraversal(callback);
      assert.deepEqual(res, expect);
    });

    it('后序遍历', () => {
      const res = [];
      const callback = item => res.push(item);
      const expect = [1, 4, 7, 6, 3, 13, 14, 10, 8];

      bst.postOrderTraversal(callback);
      assert.deepEqual(res, expect);
    });
  });

  describe('getVal', () => {
    it('getMinVal：得到树中最小节点值', () => {
      let res;
      const expect = 14;

      res = bst.getMaxVal();
      assert.equal(res, expect);
    });

    it('getMaxVal：得到树中最大节点值', () => {
      let res;
      const expect = 1;

      res = bst.getMinVal();
      assert.equal(res, expect);
    });
  });

  describe('find', () => {
    it('find：查找是否有对应节点值，找到返回true，否则false', () => {
      let res;

      res = bst.find();
      assert.equal(res, false);

      res = bst.find(5);
      assert.equal(res, false);

      res = bst.find(7);
      assert.equal(res, true);
    });

    it('findParent：查找并返回对应节点值得父节点，若该值为根节点，则返回null，没找到则返回false', () => {
      let res;
      const expect = {
        id: 5,
        value: 14,
        left: { id: 8, value: 13, left: null, right: null },
        right: null
      };

      res = bst.findParent();
      assert.equal(res, false);

      res = bst.findParent(15);
      assert.equal(res, false);

      res = bst.findParent(8);
      assert.equal(res, null);

      res = bst.findParent(13);
      assert.deepEqual(res, expect);
    });
  });

  describe('remove', () => {
    it('移除指定节点值的一个节点', () => {
      let res;

      res = bst.remove();
      assert.equal(res, false);

      res = bst.remove(7);
      assert.equal(res, true);

      res = bst.remove(14);
      assert.equal(res, true);

      res = bst.remove(8);
      assert.equal(res, true);

      res = bst.remove(5);
      assert.equal(res, false);
    });
  });

  describe('print confirm', () => {
    it(`[ 6, '#', 3, 10, '#', 1, 4, 13, '#' ]`, () => {
      const res = [];
      const callback = item => res.push(item);
      const expect = [
           6,        '#',
        3,    10,    '#',
      1,  4,     13, '#' ];

      bst.print(callback);
      assert.deepEqual(res, expect);
    });
  });
});
