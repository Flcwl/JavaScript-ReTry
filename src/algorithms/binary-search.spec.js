var binarySearch = require("./binary-search");
var assert = require("assert");

describe("binarySearch", () => {
  describe("found", () => {
    it("found in middle", () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8];
      const expect = 4;
      const actual = binarySearch(arr, 5);

      assert.strictEqual(actual, expect);
    });

    it("found in left", () => {
      const arr = [1, 2, 3, 5, 6, 7, 8];
      const expect = 0;
      const actual = binarySearch(arr, 1);

      assert.strictEqual(actual, expect);
    });

    it("found in right", () => {
      const arr = [1, 2, 3, 5, 6, 7, 8];
      const expect = arr.length - 1;
      const actual = binarySearch(arr, 8);

      assert.strictEqual(actual, expect);
    });
  });

  describe("not found", () => {
    it("outleft", () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8];
      const expect = -1;
      const actual = binarySearch(arr, 0);

      assert.strictEqual(actual, expect);
    });

    it("not found in middle", () => {
      const arr = [1, 2, 3, 5, 6, 7, 8];
      const expect = -3;
      const actual = binarySearch(arr, 4);

      assert.strictEqual(actual, expect);
    });

    it("outright", () => {
      const arr = [1, 2, 3, 5, 6, 7, 8];
      const expect = -7;
      const actual = binarySearch(arr, 9);

      assert.strictEqual(actual, expect);
    });
  });
});
