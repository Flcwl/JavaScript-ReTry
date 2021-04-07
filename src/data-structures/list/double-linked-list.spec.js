var { Node, DoubleLinkedList } = require('./double-linked-list');
var assert = require("assert");

describe("DoubleLinkedList", () => {
  const dll = new DoubleLinkedList([8, 3, 10]);

  describe("print", () => {
    it("print with toString", () => {
      const expect = "8 => 3 => 10";
      const actual = dll.toString();

      assert.strictEqual(actual, expect);
    });
  });

  describe("push", () => {
    it("print with toString", () => {
      const actual = [];
      const callback = item => actual.push(item.value);
      const expect = [8, 3, 10, 7, 13];
      dll.push(new Node(7, 7));
      dll.push(new Node(13, 13));

      dll.map(callback);

      assert.deepStrictEqual(actual, expect);
    });
  });

  describe("shift", () => {

    it("test shift value", () => {
      const expect = 8;
      const actual = dll.shift().value;

      assert.strictEqual(actual, expect);
    });

    it("print with toString", () => {
      const expect = "3 => 10 => 7 => 13";
      const actual = dll.toString();

      assert.strictEqual(actual, expect);
    });
  });

  describe("pop", () => {
    it("test pop value", () => {
      const expect = 13;
      const actual = dll.pop().value;

      assert.strictEqual(actual, expect);
    });

    it("print with toString", () => {
      const expect = "3 => 10 => 7";
      const actual = dll.toString();
      assert.strictEqual(actual, expect);
    });
  });

  describe("remove", () => {
    const removed = new Node(9, 9);
    it("print with toString", () => {
      const actual = [];
      const callback = item => actual.push(item.value);
      const expect = [3, 10, 7, 9, 2];

      dll.push(removed);
      dll.push(new Node(2, 2));

      dll.map(callback);
      assert.deepStrictEqual(actual, expect);
    });

    it("remove Node in middle", () => {
      const expect = "3 => 10 => 7 => 2";

      dll.remove(removed);
      const actual = dll.toString();
      assert.strictEqual(actual, expect);
    });
  });
});

/**
 * Relations Problems
**/

// - https://leetcode.com/problems/lru-cache/
// - https://leetcode.com/problems/lfu-cache/
