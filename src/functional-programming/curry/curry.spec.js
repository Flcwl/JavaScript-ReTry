var toCurry = require('./curry');
var assert = require('assert')

describe('Curry test', () => {
  // test
  function foo(a, b, c) {
    return [a, b, c];
  }

  var cur = toCurry(foo);

  it(`curry print correct ['a', 'b', 'c']`, () => {

    const expect = ['a', 'b', 'c'];

    assert.deepEqual(
      cur('a')('b')('c'), expect
    );
    assert.deepEqual(
      cur('a', 'b')('c'), expect
    );
    assert.deepEqual(
      cur('a')('b', 'c'), expect
    );
    assert.deepEqual(
      cur('a', 'b', 'c'), expect
    );
  });
});
