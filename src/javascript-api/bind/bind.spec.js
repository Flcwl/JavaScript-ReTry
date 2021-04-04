var bindInit = require('./bind');
var assert = require('assert')

describe('Bind test', () => {
  // test
  var beNative = bindInit();

  function foo() {
    return [this.x, ...arguments];
  }

  it(`Bind correct`, () => {

    const expect = [1, 2, 3, 4, 5];
    const func = foo.bind2({
      x: 1
    }, 2, 3);
    const res = func(4, 5);

    assert.deepEqual(res , expect);
    beNative();
  });

  // code here not work all, the `it()` second args is callback async.
  // beNative();

  it(`recover Native Function.prototype`, () => {
    assert.equal(Function.prototype.bind2, undefined);
  });
});
